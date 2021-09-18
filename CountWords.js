//1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.

// const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
// console.log(countWords(paragraph,'love', 'you'));
 // The word love more frequently occurred than you.
 
  const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

 function countWords(paragraph, word1,word2){
     const count1 =  paragraph.split(word1).length;
     const count2 = paragraph.split(word2).length;
     if(count1 === count2){
        console.log(`Both The word ${word1} and ${word2} are Equally occurred.`);
     }else if(count1>count2){
        console.log(`The word ${word1} more frequently occurred than ${word2}.`);
     }else {
        console.log(`The word ${word2} more frequently occurred than ${word1}.`);
     }
 }
 countWords(paragraph,'love', 'you')
 console.log("count of word love: " , paragraph.split("love").length);
console.log("count of word you: " , paragraph.split("you").length);