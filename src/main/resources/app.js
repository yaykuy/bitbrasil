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

var vertx     = require('vertx');
var container = require('vertx/container');
var console = require('vertx/console');

var appConfig = container.config;
var config = appConfig.appConfig;

var modules	= (config.modules?config.modules:{});
var verticles = (config.verticles?config.verticles:{});
var serverVerticle = (config.serverVerticle?config.serverVerticle:'');
var address = (config.address?config.address:'');

//Cargamos los modulos
var totalModules=Object.keys(modules).length;
if(totalModules==0){
	deployAllVerticles()
}else{
	var loadedModules=0;
	for(var i in modules){
		var moduleConfig=appConfig[i];
		//console.log(i+" config:"+JSON.stringify(moduleConfig));
		container.deployModule(modules[i].module, moduleConfig, 
													deployedModule.bind(null,i) );
	}
}

function deployedModule(name, err, deployId){
	if (!err) {
	  	loadedModules++;
	    console.log("Module "+name+ " deployed "+loadedModules+"/"+totalModules);
	    if(loadedModules==totalModules){
	    	deployAllVerticles();
	    }
	} else {
		console.log("Deployment failed! " + err.getMessage());
	}
}

function deployAllVerticles(){
	//Cargamos los verctiles
	var totalVerticles=Object.keys(verticles).length;
	if(totalVerticles==0){
		deployServerVerticle();
	}else{
		var loadedVerticles=0;
		for(var i in verticles){
			var verticleConfig=appConfig[i];
			var verticleFile;
			if(verticles[i].file){
				verticleFile="verticles/"+verticles[i].file
			}else{
				verticleFile="verticles/"+i+"_verticle.js";
			}
			container.deployVerticle(verticleFile, verticleConfig, 
													deployedVerticle.bind(null, i));

		}
	}

	function deployedVerticle(name, err, deployID) {
		  if (!err) {
		  	loadedVerticles++;
		    console.log("Verticle "+name+ " deployed " + loadedVerticles+"/"+totalVerticles);
		    if(loadedVerticles==totalVerticles){
		    	deployServerVerticle();
		    }
		  } else {
		    console.log("Deployment failed! " + err.getMessage());
			//err.printStacktrace()
		  }
	}
}

function deployServerVerticle(){
	if(serverVerticle==''){
		done();
	}else{
		var verticleConfig=appConfig[serverVerticle];
		var verticleFile="verticles/"+serverVerticle+"_verticle.js";
		if(verticleConfig.file!=null){
			verticleFile=verticleConfig.file
		}
		container.deployVerticle(verticleFile, verticleConfig, 
								deployedServerVerticle.bind(null, serverVerticle));
	}
	
	function deployedServerVerticle(name, err, deployID) {
	  if (!err) {
		console.log("Verticle "+name+ " deployed.");
	  	done();
	  } else {
	    console.log("Deployment failed! " + err.getMessage());
	  }
	}
}

function done(){
	console.log("App Ready to Rock!");
	if(address!=''){
		vertx.eventBus.publish(address,"started")
	}
}