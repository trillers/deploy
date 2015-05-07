var exec=require("./exesh");

function deployHawaiiOnCi() {
	console.log("begin to deploy hawaii on ci\n");
	exec.exesh('deploy-hawaii-ci.sh');
	return "begin deploy-hawaii-ci";
}

function deploySanyaOnCi() {
	console.log("begin to deploy sanya on ci\n");
	exec.exesh('deploy-sanya-ci.sh');
	return "begin deploy-sanya-ci";
}

function deployHawaiiOnPrd() {
	console.log("begin to deploy hawaii on production\n");
	exec.exesh('deploy-hawaii-prd.sh');
	return "begin deploy-hawaii-prd";
}

function deploySanyaOnPrd() {
	console.log("begin to deploy sanya on production\n");
	exec.exesh('deploy-sanya-prd.sh');
	return "begin deploy-sanya-prd";
}

exports.deployHawaiiOnCi=deployHawaiiOnCi;
exports.deploySanyaOnCi=deploySanyaOnCi;
exports.deployHawaiiOnPrd=deployHawaiiOnPrd;
exports.deploySanyaOnPrd=deploySanyaOnPrd;


