import PouchDB from 'pouchdb';

class DictionaryDatabase{
	constructor(){
		this.db = new PouchDB('dictionary-database');
	}

	addWord(payload){
		this.db.put({
			_id : payload.word, 
			definition : payload.definition 
		},function(err,response){
			if(!err){
				console.log(response);
			}else{
				console.log(err);
			}
		});
	};

	get(word){
		return this.db.get(word);
	}

	allWords(){
		return this.db.allDocs();
	}
	


};
export default DictionaryDatabase;