let fs = require("fs");
let path = require("path");

let content = "";
function contFn(inputArr) {
    for(let i = 0; i < inputArr.length; i++){
        let filePath = inputArr[i];
        if(path.isAbsolute(filePath) == false){
            path.resolve(filePath);
        }
        if(fs.existsSync(filePath) == true){
            content = content + fs.readFileSync(filePath) + "\r\n";
        }else{
            console.log("File does not  exist error");
            return;
        }
        content = content + "\r\n";
    }
    return content;
}



module.exports = {
    cont_wcat: contFn
}