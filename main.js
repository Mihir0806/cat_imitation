//Requiring modules 
let file_content = require("./filecontent_obj");
let n_object = require("./n_obj");
let s_object = require("./s_obj");
let b_object = require("./b_obj");

//Requiring file and path modules
let fs=require("fs");
let path =require("path");
const filecontent_obj = require("./filecontent_obj");
const s_obj = require("./s_obj");
//takes input
let inputarr=process.argv.slice(2);

//segregate input
let optionarr=[];
let filesarr=[];

for(let i=0;i<inputarr.length;i++){
    let firstchar=inputarr[i].charAt(0);
    if(firstchar == "-"){
        optionarr.push(inputarr[i]);
    }
    else{
        filesarr.push(inputarr[i]);
    }
}

let content = filecontent_obj.cont_wcat(filesarr);

if(optionarr.includes("-s")){
    content=s_obj.s_wcat(content);
}
if(optionarr.includes("-n") && optionarr.includes("-b")){
    if(optionarr.indexOf("-n")<optionarr.indexOf("-b")){
        content=n_object.n_wcat(content);
    }
    else{
        content=b_object.b_wcat(content);
    }
}
else if(optionarr.includes("-n")){
    content=n_object.n_wcat(content);
}
else if(optionarr.includes("-b")){
    content=b_object.b_wcat(content);
}
else{
    console.log("Wrong Command!!");
}
 console.log(content);