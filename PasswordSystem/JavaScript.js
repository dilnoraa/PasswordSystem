var ALERT_TITLE = " MESSAGE ";
var ALERT_BUTTON_TEXT = "OK";


function func(){
    
    'use strict';
   
    var list = document.getElementById("adding").childNodes.length;
    if(list<2) {      
        var node2 = document.createElement('input'); 
        node2.placeholder="Account Name or Link"       
        document.getElementById('adding').appendChild(node2);             
        var node4 = document.createElement('input'); 
        node4.placeholder="Login";
        document.getElementById('adding2').appendChild(node4);        
        var node6 = document.createElement('input'); 
        node6.placeholder="Password";
        node6.style.marginBottom="15px";
        document.getElementById('adding3').appendChild(node6); 
        var node1=document.createElement('br');
        document.getElementById('adding3').appendChild(node1);              
        var node7=document.createElement('button');
        node7.textContent="REGISTER";
        node7.style.width="100px";
        node7.style.height="30px";
        node7.style.marginBottom="15px";
        document.getElementById('adding3').appendChild(node7);
        node7.onclick=funcRegister;
            
        function funcRegister() { 
            var btnOpen = document.createElement('button'); 
            btnOpen.innerHTML="OPEN";
            btnOpen.setAttribute("class","button");                      
            var link=document.getElementsByTagName("input")[0].value;
            var login=document.getElementsByTagName("input")[1].value;
            var sifre=document.getElementsByTagName("input")[2].value;

            if (link==="" || login==="" || sifre==="")
                createCustomAlert("Please entry blank space");
            else {
                var table=document.getElementById("myTable");
                var count=table.rows.length;              
                var row=table.insertRow(count++);
                var idVar=count;
                btnOpen.setAttribute("id",idVar);
                var cell1=row.insertCell(0);
                var cell2=row.insertCell(1);
                var cell3=row.insertCell(2);
                var cell4=row.insertCell(3);
                var s=idVar+'1';
                var s1=idVar+'2';
                cell3.setAttribute("id", s);
                cell4.setAttribute("id", s1);
                cell1.appendChild(btnOpen);
                cell2.innerHTML=link;
                cell3.innerHTML=login;
                cell4.innerHTML=sifre; 
                btnOpen.onclick=hideFunc;
                node7.disabled=true;
                var list2 = document.getElementById('addedNew').childNodes.length;
                if(list2==1) {
                    var btnAddAgain = document.createElement('button'); 
                    btnAddAgain.innerHTML="ADD AGAIN";
                    btnAddAgain.setAttribute("class","btn");
                    btnAddAgain.style.marginTop = "40px";
                    btnAddAgain.style.width="100px";
                    btnAddAgain.style.borderRadius="5px";
                    document.getElementById('addedNew').appendChild(btnAddAgain); }
                    btnAddAgain.onclick=function() {
                    var elements = document.getElementsByTagName("input");
                    for (var ii=0; ii < elements.length; ii++) 
                        elements[ii].value = "";
                    node7.disabled=false;
                    btnAddAgain.href="#title";
                    funcRegister;
                    }
    
                }
            }
                   
        }
    };


function hideFunc() {
    var btnId=this.id;
    var lgnId=btnId+'1';
    var passwId=btnId+'2';
    var x=document.getElementById(lgnId);
    var x1=document.getElementById(passwId);
    if(x.style.visibility==="hidden")
        x.style.visibility="visible";
    else 
        x.style.visibility="hidden";
    if(x1.style.visibility==="hidden")
        x1.style.visibility="visible";
    else 
        x1.style.visibility="hidden";
}


function createCustomAlert(txt) {
    d = document;
    if(d.getElementById("modalContainer")) return;
    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";
    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));
    msg = alertObj.appendChild(d.createElement("p"));
    msg.innerHTML = txt;
    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }
    alertObj.style.display = "block";
}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

