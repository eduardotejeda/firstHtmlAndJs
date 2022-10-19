function isPangram(sentence) {
    
    let lowerSentence = sentence.toLowerCase();

    for (let letter of 'abcdefghijklmntopqrstyxz') {
        if (lowerSentence.indexOf(letter) === -1) {
            return false;
        }
          
}
return true;
}

//'The quick brown fox jumps over a lazy dog.'
// 'abcdefghijklmntopqrstyxz'