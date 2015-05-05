
var server=require("./server");
var route =require("./route");

var reqhandle=require("./reqhandle");


var handle={};

//handle["/"]=reqhandle.fail;
handle["/deploy-hawaii-ci"]=reqhandle.deployHawaiiOnCi;
handle["/deploy-sanya-ci"]=reqhandle.deploySanyaOnCi;

handle["/deploy-hawaii-prd"]=reqhandle.deployHawaiiOnPrd;
handle["/deploy-sanya-prd"]=reqhandle.deploySanyaOnPrd;

//handle["/failure"]=reqhandle.fail;

server.server(route.routejs,handle);
