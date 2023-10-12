//Not the production code.

import { santinize } from "./security";

function postQuestion(name,info,email) {
    const req=new XMLHttpRequest();
    const content=JSON.stringify({
        "name":santinize(name),
        "info":santinize(info),
        "email":santinize(email),
    });
    req.open("POST","/questions/new",true);
    req.setRequestHeader("content-type","application/json");
    req.onreadystatechange(function(){
        if(req.readyState==4){
            if(req.status==200){
                const res=JSON.parse(req.responseText);
                if(res.code==10000){
                    //Display animation
                }else{
                    //Display retry button
                }
            }else{
                //Display retry button
            }
        }
    });
    req.send(content);
}
function postPaper(name,info,email,color){
    const req=new XMLHttpRequest();
    const content=JSON.stringify({
        "name":santinize(name),
        "info":santinize(info),
        "email":santinize(email),
        "color":color,
    });
    req.open("POST","/paper/post",true);
    req.setRequestHeader("content-type","application/json");
    req.onreadystatechange(function(){
        if(req.readyState==4){
            if(req.status==200){
                const res=JSON.parse(req.responseText);
                if(res.code==10000){
                    //Display animation
                }else{
                    //Display retry button
                }
            }else{
                //Display retry button
            }
        }
    });
    req.send(content);
}
function getPaper(){
    const req=new XMLHttpRequest();
    req.open("GET","/paper/get",true);
    req.onreadystatechange(function(){
        if(req.readyState==4){
            if(req.status==200){
                const res=JSON.parse(req.responseText);
                //Process paper
            }else{
                //Display retry button
            }
        }
    });
    req.send();
}