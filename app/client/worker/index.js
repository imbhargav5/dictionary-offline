/**
 * Lets use this later
 */

onmessage = function(e) {
  console.log('Worker added');
  console.log(arguments);	
  if(e.data.action === 'add'){
  	 let {word,definition} = e.data;
  	 db.addWord({word,definition});
  }
  if(e.data.action=== 'check_contains_word'){
  	 let {word} = e.data;
  	 db.has(word);
  }

};