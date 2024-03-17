var fi = function(txt){
    return document.getElementById(txt);
 }
 var urls = ["https://cdn.kastatic.org/third_party/javascript-khansrc/live-editor/build/images/avatars/avatar-team.png","https://cdn.kastatic.org/third_party/javascript-khansrc/live-editor/build/images/animals/cat.png"];
 var dates=["2010","2015"];
 var on = 0;
 var change = true;
 window.setInterval(function(){
     if(change){
     on ++;
     if(on>urls.length-1){
         on=0;
     }
         fi("img").src=urls[on];
         fi("dat").textContent=dates[on];
     }
 },3000);
 fi("bac").addEventListener("click",function(){
     change=false;
     on --;
     if(on>urls.length-1){
         on=0;
     }
     if(on<0){
         on=urls.length-1;
     }
         fi("img").src=urls[on];
         fi("dat").textContent=dates[on];
 });
 fi("for").addEventListener("click",function(){
     change=false;
     on ++;
     if(on>urls.length-1){
         on=0;
     }
     if(on<0){
         on=urls.length-1;
     }
         fi("img").src=urls[on];
         fi("dat").textContent=dates[on];
 });