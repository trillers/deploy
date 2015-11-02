var exec=require("./exesh");

function deployAthenaOnCi() {
	console.log("begin to deploy athena on ci\n");
	exec.exesh('deploy-athena-ci.sh');
	return "begin deploy-athena-ci";
}

function deploySbotOnCi() {
	console.log("begin to deploy sbot on ci\n");
	exec.exesh('deploy-sbot-ci.sh');
	return "begin deploy-sbot-ci";
}

function deployAthenaOnPrd() {
	console.log("begin to deploy athena on production\n");
	exec.exesh('deploy-athena-prd.sh');
	return "begin deploy-athena-prd";
}

function deploySbotOnPrd() {
	console.log("begin to deploy sbot on production\n");
	exec.exesh('deploy-sbot-prd.sh');
	return "begin deploy-sbot-prd";
}

exports.deployAthenaOnCi=deployAthenaOnCi;
exports.deploySbotOnCi=deploySbotOnCi;
exports.deployAthenaOnPrd=deployAthenaOnPrd;
exports.deploySbotOnPrd=deploySbotOnPrd;


