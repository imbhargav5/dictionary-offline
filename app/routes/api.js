import unirest from 'unirest';
import config from '../config';

let ApiRouteHandler = function(app){
	
	function getMontannaDefinition(word){
		return new Promise((resolve,reject)=>{
			unirest.get("https://montanaflynn-dictionary.p.mashape.com/define?word="+word)
				.header("X-Mashape-Key", config.API_KEY)
				.header("Accept", "application/json")
				.end(function (result) {
					let {statusCode,body} = result;
				    resolve({
				    	statusCode,
				    	definition : (body || {}).definitions
				    });
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
	 * Api to fetch definition
	 * Separate api - so that we can add more dictionaries later at some point
	 * @param  {Request} req 
	 * @param  {Response} res
	 * @return {null} 
	 */
	app.get('/api/v1/define/:word',async function(req,res){

			let result = {};
			result.montanaflynn = await getMontannaDefinition(req.params.word);
			res.send(result);
	});
};

export default ApiRouteHandler;