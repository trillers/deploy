
var server=require("./server");
var route =require("./route");

var reqhandle=require("./reqhandle");


var handle={};

//handle["/"]=reqhandle.fail;
handle["/deploy-athena-ci"]=reqhandle.deployAthenaOnCi;
handle["/deploy-sbot-ci"]=reqhandle.deploySbotOnCi;

handle["/deploy-athena-prd"]=reqhandle.deployAthenaOnPrd;
handle["/deploy-sbot-prd"]=reqhandle.deploySbotOnPrd;

//handle["/failure"]=reqhandle.fail;

server.server(route.routejs,handle);
