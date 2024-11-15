function charOccurences(char){
    let character = char;
    return function(){
       let charArr = character.split('');
       let resultObj = {}
        for(let i = 0; i < charArr.length; i++){
            if(resultObj[charArr[i]]){
                resultObj[charArr[i]] += 1;
            }else{
                resultObj[charArr[i]] = 1;
            }
        }
        return resultObj
    }
}

const char = charOccurences('hello');
console.log(char());