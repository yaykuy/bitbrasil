/*
* Copyright 2011-2012 the original author or authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

//Splitter
//Verticle que reparte lo donado al poster entre el charity y el fan

var vertx     = require('vertx');
var container = require('vertx/container');

var logger 	  = container.logger;
var config    = container.config;

var busAddr  = config.bus_address
var minConfirmations = config.min_confirmations
if(minConfirmations == null) {
	minConfirmations = 6;
}

var eb = vertx.eventBus;

eb.registerHandler(busAddr+'.split', doSplit);

/*
 * Esperamos dos parametros en message:
 * - address : direccion que hay que splitear
 * - confirmations: confirmaciones 
 */
function doSplit (message, replier) {
	var address 		=	message.address
	var confirmations 	= 	message.confirmations

	logger.info("Splitting all value from address:"+address
		+" ["+confirmations+" confirmations]");

	//Vemos si las confirmaciones minimas dan para hacer split. Igual
	//esto se filtra en getValueToSplit, pero bueno.
	if(confirmations < minConfirmations){
		return replier({
	      status  : confirmations + "are not enough confirmations"
	  	});
	}


	var valueToSplit;
	var recipients;
	var privAddress;

	//Por un lado vamos a buscar el saldo total de la direccion:
	//por ahora directo, despues usamos nuestro lindo modulo de
	//acceso a blockchain
	getValueToSplit();

	//Por otro lado (en paralelo, vamos a ver a quienes hay de dividirles
	// el valor)
	getRecipients();


	function getValueToSplit(){
		var balanceClient    = vertx.createHttpClient()
                        .host('blockchain.info')
                        .port(443)
                        .ssl(true)
                        .trustAll(true);
  		balanceClient.getNow('/q/addressbalance/' +address+ '?confirmations='+minConfirmations, 
  						gotBalanceResponse);
	}

	function gotBalanceResponse (response) {
	    if (response.statusCode() != 200) {
	        logger.info('gotBalanceResponse.statusCode:'+response.statusCode());
	  		return replier({
		      status  : 'gotBalanceResponse.statusCode:'+response.statusCode()
		  	});
	    } else {
	        response.bodyHandler(readBalanceBody);
	    }
	}

  	function readBalanceBody (body) {
	    try {
	      valueToSplit = body.toString()
	      logger.info('valueToSplit: '+valueToSplit);
	      
	      doActualSplit();

	    } catch (e) {
	     	logger.info('gotBalanceResponse.readBody error:'+e.getMessage());
	  		return replier({
		      status  : 'gotBalanceResponse.readBody error:'+e.getMessage()
		  	});
	    }
  	}


	function getRecipients(){
		//Vamos a ver de quien tiene este poster.
		var mongoMessage = {
		    action     : 'findone',
		    collection : 'fans',
		    matcher    : {
		    	'poster.address': address
		    }
		};
		eb.send('mongo', mongoMessage, gotMongoReply);
	}


	function gotMongoReply(mongoReply){
		if (mongoReply.status != 'ok') {
      		logger.info("error in geting fan (mongo): " + JSON.stringify(mongoReply) );
      		return replier({
		      status  : "error in geting fan (mongo)"+mongoReply.status
		  	});
    	} else if(mongoReply.status == 'ok' && !mongoReply.result) {
    		logger.info("not a single fan found in mongo");
      		return replier({
		      status  : "not a single fan found in mongo"
		  	});
    	} else {
	      	var fan=mongoReply.result
	      	logger.info("fan founded in mongo): " + JSON.stringify(fan) );

	      	recipients = {
	      		fan: fan.address,
	      		charity: fan.charity
	      	}
	      	privAddress = fan.poster.priv;

	      	doActualSplit();
	    }
	}

	function doActualSplit(){
		//Veamos si tenemos los dos datos necesarios
		if(valueToSplit != null && recipients != null && privAddress!=null){
			var availableValue=valueToSplit - 10000;
			if(availableValue <= 0 ) {
				logger.info("not enough value to split ("+availableValue+")");
				return replier({
			      status  : "not enough value to split ("+availableValue+")"
			  	});
			}else{
			    var fanValue = Math.round(availableValue * 0.3);
			    var charityValue = Math.round(availableValue * 0.7);
	
				var guid=privAddress;
		      	var uriRecipients = "{ " + 
				    recipients.fan +":"+ fanValue +"," +
				    recipients.charity +":"+ charityValue +
				"}";
			    var fee = value - fanValue - charityValue;

				var sendClient    = vertx.createHttpClient()
                        .host('blockchain.info')
                        .port(443)
                        .ssl(true)
                        .trustAll(true);
  				sendClient.getNow('/merchant/'+guid+'/sendmany?recipients='+uriRecipients+'&fee='+fee, 
  						gotSendResponse);
			}
		}else{
			var data={
				"valueToSplit" 	: valueToSplit,
				"recipients"	: recipients,
				"privAddress"	: privAddress
			}
			//logger.info("not all data ready ["+JSON.stringify(data,null,4)+"]");
		}
	}

	function gotSendResponse (response) {
	    if (response.statusCode() != 200) {
	        logger.info('gotSendResponse.statusCode:'+response.statusCode());
	  		return replier({
		      status  : 'gotSendResponse.statusCode:'+response.statusCode()
		  	});
	    } else {
	        response.bodyHandler(readSendBody);
	    }
	}

  	function readSendBody (body) {
	    try {
	      var sendResp = body.toString()
	      logger.info('sendResp :'+JSON.stringify(sendResp));
	      
	      if(sendResp.tx_hash){
	      	return replier({
		      status  : 'ok'
		  	});
	      }else{
	      	return replier({
		      status  : 'nok'
		  	});
	      }

	    } catch (e) {
	     	logger.info('gotSendResponse.readSendBody error:'+e.getMessage());
	  		return replier({
		      status  : 'gotSendResponse.readSendBody error:'+e.getMessage()
		  	});
	    }
  	} 

}


logger.info("Splitter Verticle Ready to Rock on "+busAddr);
