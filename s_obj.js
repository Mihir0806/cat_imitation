function sFunc(content) {
    let inputArr = content.split("\r\n");
    for(let i = 0; i < inputArr.length; i++){
        if(inputArr[i] == '' && (inputArr[i - 1] == '' || inputArr[i - 1] == null)){
            inputArr[i] = null;
        }
    }
    let tempArr = [];
    for(let i = 0; i < inputArr.length; i++){
        if(inputArr[i] != null){
            tempArr.push(inputArr[i]);
        }
    }
    content = tempArr.join("\r\n");
    return content;

}
module.exports = {
    s_wcat: sFunc
}