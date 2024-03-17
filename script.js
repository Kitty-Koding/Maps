var fi = function(txt){
    return document.getElementById(txt);
 }
 var urls = ["Maps/Map25.jpg","Maps/Map26.jpg","Maps/Map27.jpg"];
 var dates=["2010","2015","2020"];
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