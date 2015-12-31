import PouchDB from 'pouchdb';

class DictionaryDatabase{
	constructor(){
		this.db = new PouchDB('dictionary-database');
	}

	addWord(payload){
		this.db.put({
			_id : Date.now().toString(), 
			word : payload.word,
			definition : payload.definition 
		},function(err,response){
			if(!err){
				console.log(response);
			}else{
				console.log(err);
			}
		});
	};
	


};
export default DictionaryDatabase;