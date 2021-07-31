function bFunc(content) {
    let inputArr = content.split("\r\n");
     let count = 1;
    for(let i = 0; i < inputArr.length; i++){
        if(inputArr[i] != ''){
            inputArr[i] = count + " " + inputArr[i];
            count++;
        }  
    }
    content = inputArr.join("\r\n");
    return content;
}

module.exports = {
    b_wcat: bFunc
}