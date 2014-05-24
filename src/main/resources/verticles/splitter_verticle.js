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

var eb = vertx.eventBus;

eb.registerHandler(busAddr+'.split', doSplit);

function doSplit (message, replier) {
	logger.info("Splitting address:"+message.address
		+" ["+message.confirmations+"]");

	if(message.confirmations < 1){
		return replier({
	      status  : "not enough confirmations"
	  	});
	}

	//Vamos a ver de quien es la address.
	var mongoMessage = {
	    action     : 'findone',
	    collection : 'fans',
	    matcher    : {
	    	'poster.address': message.address
	    }
	};

	eb.send('mongo', mongoMessage, gotMongoReply);

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


	      	return replier({
		      status  : "ok"
		  	});
	    }

	}

	


}


logger.info("Splitter Verticle Ready to Rock on "+busAddr);
