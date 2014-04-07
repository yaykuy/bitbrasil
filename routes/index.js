var request = require('request');
var path = require('path');
var fs = require('fs');

exports.index = function (req, res) {
  res.render('index', { title: 'Express' });
};

exports.link = function (req, res, next) {
  if (!req.query.fan) {
    res.send("Debe indicar un fan");
  }

  var fan = req.query.fan;

  var obj  = getGUID(),
      guid = obj.guid,
      pwd  = obj.pwd;

  getAddress(fan + '_charity', guid, pwd, gotAddress);

  function gotAddress (err, response) {
    if (err) return next(err);

    getPaymentAddress(response.address, gotPaymentAddress);
  }

  function gotPaymentAddress (err, response) {
    if (err) return next(err);

    var link = response.input_address;

    fs.readFile(path.join(__dirname, '..', 'public', 'html', 'link.html'), 'utf8', function (err, html) {
      if (err) return next(err);

      html = html.replace(/{{link}}/g, link)

      return res.send(html);
    });
  }
}

exports.callback = function (req, res, next) {
  var fan;
  var address_fan;
  var address_charity;

  var destination_address = req.query.destination_address;
  var value = req.query.value;
  var confirmations = req.query.confrmations;

  var obj  = getGUID(),
      guid = obj.guid,
      pwd  = obj.pwd;

  getAddress(destination_address, guid, pwd, gotAddress);

  function gotAddress (err, response) {
    if (err) return next(err);

    var tmp = response.label.split('_');
    fan = tmp[0];

    getAddress(fan, guid, pwd, gotAddress2);
  }

  function gotAddress2 (err, response) {
    if (err) return next(err);
    address_fan = response.address;
    getAddress('charity', guid, pwd, gotAddress3);
  }

  function gotAddress3 (err, response) {
    if (err) return next(err);
    address_charity = response.address;
    var availableValue=value - 10000;
    fan_value = Math.round(availableValue * 0.3);
    charity_value = Math.round(availableValue * 0.7);
    fee = value - fan_value - charity_value;
    sendTwo(address_fan, address_charity, fan_value, charity_value, fee, guid, pwd, donePayment);
  }

  function donePayment (err, response) {
    if (err) return next(err);
    res.send('*ok*');
  }
}

exports.postpago = function (req, res, next) {
  var obj  = getGUID(),
      guid = obj.guid,
      pwd  = obj.pwd;

  getAddress('charity', guid, pwd, gotAddress);

  function gotAddress(err, response) {
    if (err) return next(err);

    var charityAddress = response.address;

    fs.readFile(path.join(__dirname, '..', 'public', 'html', 'postpago.html'), 'utf8', function (err, html) {
      if (err) return next(err);

      html = html.replace(/{{charity_address}}/g, charityAddress);

      return res.send(html);
    });

  }
}

exports.proxy = function (req, res, next) {
  var requestsDone = 0;
  var address = req.query.address;
  var obj = {};

  request.get('http://btc.blockr.io/api/v1/address/info/' + address, gotResponse1);
  request.get('http://btc.blockr.io/api/v1/address/txs/' + address, gotResponse2);
  request.get('http://btc.blockr.io/api/v1/address/unconfirmed/' + address, gotResponse3);

  function gotResponse1 (err, response, body) {
    body = JSON.parse(body);
    obj['final_balance'] = body.data.balance;
    return done();
  }

  function gotResponse2 (err, response, body) {
    body = JSON.parse(body);
    obj['txs'] = body.data.txs;
    return done();
  }

  function gotResponse3 (err, response, body) {
    body = JSON.parse(body);
    obj['unconfirmed'] = body.data.unconfirmed;
    return done();
  }

  function done () {
    requestsDone += 1;

    if (requestsDone == 3) {
      res.send(obj);
    }
  }
}

// Retorna el guid de un fan inscrito
function getGUID () {
  return {
    guid : '1cca440a-35ac-454f-a11d-e358fb5f6447',
    pwd  : 'bitbrasil2014'
  }
}

// Sirve para obtener la dirección de un wallet
function getAddress (chep, guid, pwd, cb) {
  var options       = {};
  options.method    = 'GET';
  options.uri       = 'https://blockchain.info/merchant/' + guid + '/list?password=' + pwd
  options.timeout   = 3000;
  options.strictSSL = false;

  request(options, gotResponse);

  function gotResponse (err, res, body) {
    if (err) {
      console.log('Error getAddress: ' + err);
      return cb(err);
    }

    if (res && res.statusCode === 200) {
      body = JSON.parse(body);
      if (body.status && body.status === 'error') {
        console.log('Error getAddress: ' + body.message);
        return cb(body.message);
      }

      var obj = {};

      for (i = 0; i < body.addresses.length; i++) {
        if (body.addresses[i].label == chep) {
          obj['address'] = body.addresses[i].address
        }
        if (body.addresses[i].address == chep) {
          obj['label'] = body.addresses[i].label
        }
      }

      return cb(null, obj);
    } else {
      console.log('ERROR: status code ' + res.statusCode);
      return cb('ERROR: status code ' + res.statusCode);
    }
  }
}

function getPaymentAddress (fanCharityAddress, cb) {
  var options       = {};
  options.method    = 'GET';
  options.uri       = 'https://blockchain.info/api/receive?method=create&address=' + fanCharityAddress + '&callback=http://yaykuy-bitbrasil.herokuapp.com/callback'
  options.timeout   = 3000;
  options.strictSSL = false;

  request(options, gotResponse);

  function gotResponse (err, res, body) {
    if (err) {
      console.log('Error getAddress: ' + err);
      return cb(err);
    }

    if (res && res.statusCode === 200) {
      body = JSON.parse(body);
      if (body.status && body.status === 'error') {
        console.log('Error getAddress: ' + body.message);
        return cb(body.message);
      }

      var obj = {
        input_address : body.input_address
      }

      return cb(null, obj);
    } else {
      console.log('ERROR: status code ' + res.statusCode);
      return cb('ERROR: status code ' + res.statusCode);
    }
  }
}

function sendTwo (fanAddress, charityAddress, fanValue, charityValue, fee, guid, pwd, cb) {
  var options       = {};
  options.method    = 'GET';
  options.uri       = 'https://blockchain.info/merchant/' + guid + '/sendmany?password=' + pwd +
    '&recipients={"' + fanAddress + '" : ' + fanValue+ ', "' + charityAddress + '" : ' + charityValue +'}&fee=' + fee
  options.timeout   = 3000;
  options.strictSSL = false;

  console.log('sendTwo:'+options.uri);

  request(options, gotResponse);

  function gotResponse (err, res, body) {
    if (err) {
      console.log('Error getAddress: ' + err);
      return cb(err);
    }

    if (res && res.statusCode === 200) {
      console.log('sendTwo.response.body:'+body);
      body = JSON.parse(body);
      if (body.error != null) {
        console.log('Error getAddress: ' + body.error);
        return cb(body.error);
      }

      return cb(null, body);
    } else {
      console.log('ERROR: status code ' + res.statusCode);
      return cb('ERROR: status code ' + res.statusCode);
    }
  }
}
