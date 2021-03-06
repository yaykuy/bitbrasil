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

//Fan
//Verticle que maneja los fans

var vertx     = require('vertx');
var container = require('vertx/container');

var logger 	  = container.logger;
var config    = container.config;

var busAddr  = config.bus_address

var eb = vertx.eventBus;

eb.registerHandler(busAddr+'.findAll', doFindAll);

function doFindAll (message, replier) {

	//TODO: IMplement

	return replier({
      status  : "ok"
  	});

}


logger.info("Fan Verticle Ready to Rock on "+busAddr);
