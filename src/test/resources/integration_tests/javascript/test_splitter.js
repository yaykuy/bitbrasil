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

var container = require("vertx/container")
var vertx = require("vertx");
var vertxTests = require("vertx_tests");
var vassert = require("vertx_assert");
var console = require("vertx/console");

var eb = vertx.eventBus;

function _testSplit() {
  eb.send('splitter.split', {}, function(reply) {
      //console.log("testSplit reply:"+JSON.stringify(reply,null,4));
      vassert.assertEquals('ok', reply.status);
      vassert.testComplete();
    });
}

function testMula(){
	vassert.testComplete();
}

var script = this;

var config = { "bus_address": "splitter" }
container.deployVerticle('verticles/splitter_verticle.js', config, 1, function(err, depID) {
    vertxTests.startTests(script);
});
