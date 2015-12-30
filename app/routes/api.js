import unirest from 'unirest';
import config from '../config';

let ApiRouteHandler = function(app){
	
	function getMontannaDefinition(word){
		return new Promise((resolve,reject)=>{
			unirest.get("https://montanaflynn-dictionary.p.mashape.com/define?word="+word)
				.header("X-Mashape-Key", config.API_KEY)
				.header("Accept", "application/json")
				.end(function (result) {
				    resolve(result);
				});
		}); 
	}

	function getUrbanDefinition(word){
		return new Promise((resolve,reject)=>{
				unirest.get("https://mashape-community-urban-dictionary.p.mashape.com/define?term="+word)
				.header("X-Mashape-Key", config.API_KEY)
				.header("Accept", "text/plain")
				.end(function (result) {
					console.log(result);
				  	resolve(result);
				});
		}); 
	}

	/**
	 * Api to fetch data from montanaflynn dictionary
	 */

	app.get('/api/v1/dictionary/montanaflynn/define/:word',async function(req,res){
			let result = await getMontannaDefinition(req.params.word);
			res.send(result.body);
			
	});

	/**
	 * Api to fetch data from urban dictionary
	 */

	app.get('/api/v1/dictionary/urban/define/:word',async function(req,res){
			let result = await getUrbanDefinition(req.params.word);
			res.send(result);
	});

	/**
	 * Api to fetch definition
	 * @param  {Request} req 
	 * @param  {Response} res
	 * @return {null} 
	 */
	app.get('/api/v1/define/:word',async function(req,res){
			let result = {};
			result.montanaflynn = await getMontannaDefinition(req.params.word);
			result.urban = await getUrbanDefinition(req.params.word);
			res.send(result);
	});
};

export default ApiRouteHandler;