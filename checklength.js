/*jshint multistr:true */
var text ='Hello, how are you doing? \ My name is Josh.';
var myName = 'Josh';
var hits = [];
for (var i = 0; i <= text.length; i++) {
    
    if (text[i] === myName[0]){
        for (var j = i; j < i + myName.length; j++) {
            
            if (text[j] === myName[j-i]) {
                hits.push(text[j]);
            }
        }
    }
    
};

if(hits.length === 0) {
    console.log("Your name wasn't found!");
}

else {
    console.log(hits);
}
