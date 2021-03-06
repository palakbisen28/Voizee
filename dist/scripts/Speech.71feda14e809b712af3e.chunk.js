(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Z1A6:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("IP2g"),l=n("wHSu"),o=n("qNNu"),c=n.n(o);
function u(){sessionStorage.clear(),document.getElementById("storage").innerHTML=""}
function m(){window.location.reload(!0)}
var g=function(){
    var e=document.getElementById("final").textContent,t=document.querySelector("ul.notes"),n="".concat((new Date).toLocaleString().split(",").join(" "));
    t.innerHTML=" ".concat(n,":<br> ").concat(e," <br>");
    var o=document.getElementById("storagequota-msg");
    try{setInterval(function(){sessionStorage.setItem("note-"+n," "+e)},1e3)}
    catch(e){"QUOTA_EXCEEDED_ERR"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||(o.innerHTML="Session Storage Quota Exceeded!")}
    sessionStorage.setItem("note-"+n," "+e)},
    d=function(){
        for(var e=[],t=document.getElementById("note"),n=0;n<sessionStorage.length;n++){
            t.innerHTML="".concat(sessionStorage.key(n),"<li>").concat(sessionStorage.getItem(sessionStorage.key(n)),"</li><br>"),e.push("".concat(t.innerHTML)),document.getElementById("storage").innerHTML="".concat(e.join(""))
        }},
        p=function(){
            var e=document.getElementById("storage").textContent,t=JSON.stringify(e),n=new Blob([t],{type:"text/plain"}),o=document.getElementById("save");
            o.download="session-storage.txt",null!==window.URL?(o.href=window.URL.createObjectURL(n),o.target="_blank"):(o.href=window.URL.createObjectURL(n),o.target="_blank",o.style.display="none",document.body.appendChild(o.download))};
            function s(e){
                return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
                function f(e){
                    return(f="function"==typeof Symbol&&"symbol"===s(Symbol.iterator)?function(e){return s(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":s(e)})(e)}
                    function b(e,t){
                        for(var n=0;n<t.length;n++){
                            var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}
                        }
                        function y(e){
                            return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}
                            function _(e,t){
                                return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}
                                function E(e){
                                    if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e}
                                    function w(e,t,n){
                                        return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
                                        var h=h||window.webkitSpeechRecognition,S=new h;
                                        S.continuous=!0,S.interimResults=!0,S.lang="en-US";
                                        var v=function(e){
                                            function s(){
                                                var e,t,n,o;
                                                !function(e,t){
                                                    if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
                                                    (this,s);
                                                    for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)
                                                    r[i]=arguments[i];
                                                    return n=this,o=(e=y(s)).call.apply(e,[this].concat(r)),w(E(E(t=!o||"object"!==f(o)&&"function"!=typeof o?E(n):o)),"state",{listening:!1}),w(E(E(t)),"toggleListen",function(){t.setState({listening:!t.state.listening},t.handleListen)}),w(E(E(t)),"handleListen",function(){console.log("listening?",t.state.listening),t.state.listening?(S.start(),S.onend=function(){console.log("...continue listening..."),S.start()}):(S.stop(),S.onend=function(){console.log("Stopped listening per click")}),S.onstart=function(){console.log("Listening!")};
                                                    var i="";
                                                    S.onresult=function(e){
                                                        for(var t="",n=e.resultIndex;n<e.results.length;n++){
                                                            var o=e.results[n][0].transcript;
                                                            e.results[n].isFinal?i+=o+" ":t+=o}
                                                        document.getElementById("interim").innerHTML=t;
                                                        var a=(document.getElementById("final").innerHTML=i).split(" "),r=a.slice(-3,-1);
                                                        console.log("stopCmd",r),"stop"===r[0]&&"listening"===r[1]&&(S.stop(),
                                                        S.onend=function(){
                                                            console.log("Stopped listening per command");
                                                            var e=a.slice(0,-3).join(" ");
                                                            document.getElementById("final").innerHTML=e})},
                                                            S.onerror=function(e){
                                                                console.log("Error occurred in recognition: "+e.error)}}),t}
                                                    var t,n,o;
                                                    return function(e,t){
                                    if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");
                                    e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}
                                    (s,a["Component"]),t=s,(n=[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:c.a.appTitle},"Voizee: Voice Controlled Notepad"),r.a.createElement("p",{className:c.a.pageDescription},"A tiny app that allows you to take notes by recording your voice"),r.a.createElement("div",{className:c.a.Speech},r.a.createElement("h3",null,"Add New Note"),r.a.createElement("div",{className:"input-single"},r.a.createElement("p",null,"Create a new note by using voice recognition."),r.a.createElement("p",{id:"recording-instructions"},"Press the blue",r.a.createElement("strong",{className:c.a.strong}," Start Recognition")," button and allow access."),r.a.createElement("div",{className:c.a.supportMsg,id:"support-msg"},"webkitSpeechRecognition"in window?"Your browser supports speech recognition.":"Sorry but your browser does not support speech recognition."),r.a.createElement("div",{className:c.a.storagequotaMsg,id:"storagequota-msg"}),r.a.createElement("button",{onClick:g,className:c.a.saveNote,title:"Save Note"},"Save Note"),r.a.createElement("button",{onClick:p,className:c.a.fileSaveButton},r.a.createElement("a",{className:c.a.download,id:"save",title:"Download Notes"},"Download")),r.a.createElement("button",{onClick:m,className:c.a.reset,title:"Clear All Notes"},"Refresh")),r.a.createElement("div",{id:"interim",className:c.a.interim,rows:"3"},"Interim draft goes here"),r.a.createElement("div",{id:"final",className:c.a.final,rows:"3"},"Final draft goes here"),r.a.createElement("button",{id:"microphone-btn",className:c.a.button,onClick:this.toggleListen},r.a.createElement(i.a,{icon:l.a})),r.a.createElement("h3",null,"My Saved Notes"),r.a.createElement("button",{className:c.a.getStorage,onClick:d,title:"Get Storage"},"Get Storage"),r.a.createElement("button",{onClick:u,className:c.a.deleteAll,title:"Clear All Notes"},"Clear Storage"),r.a.createElement("ul",{id:"storage"},r.a.createElement("li",{id:"note"})),r.a.createElement("ul",{className:"notes"})))}}])&&b(t.prototype,n),o&&b(t,o),s}();t.default=v},qNNu:function(e,t,n){e.exports={button:"button___11gZl",container:"container___saxCb",pageDescription:"pageDescription___37Ar6",noBrowserSupport:"noBrowserSupport___3XAWR",strong:"strong___3ytUx",documentation:"documentation___3hoRn",Speech:"Speech___30tAq",saveNote:"saveNote___1d_mJ",deleteAll:"deleteAll___1NXIh",reset:"reset___1FIGi",getStorage:"getStorage___3kUh0",fileSaveButton:"fileSaveButton___NvW4t",download:"download___2GRhE",storagequotaMsg:"storagequotaMsg___344nw",interim:"interim___2U4mr",final:"final___1Pum7","recording-instructions":"recording-instructions___1Evml"}}}]);
                                    


