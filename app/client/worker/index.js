import Database from './database';

var db = new Database();


onmessage = function(e) {
  console.log(arguments);	
  if(e.data.action === 'add'){
  	 let {word,definition} = e.data;
  	 console.log(db);
  	 db.addWord({word,definition});
  }
  console.log('Message received from main script');
  postMessage({done:true});
  console.log('Posted message back to main script');

};