function nFunc(content) {
    let inputArr = content.split("\r\n");
    for(let i = 0; i < inputArr.length; i++){
        inputArr[i] = (i + 1) + " " + inputArr[i];
    }
    content = inputArr.join("\r\n");
    return content;
}

module.exports = {
    n_wcat: nFunc
}