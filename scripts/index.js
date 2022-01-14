import { navbar } from "../components/navbar.js";
import {getData,showData} from "../scripts/showData.js";
document.body.innerHTML=navbar();
 // accessing today's option
 document.querySelector("#today").addEventListener("click",()=>{
      window.location.href="today_recepie.html";
 });
 // accessing letest option
 document.querySelector("#letest").addEventListener("click",()=>{
    window.location.href="letest_recepie.html";
});
let inputStr= document.querySelector("#searchInput");
let search_waiting;
 function data(){
    let search=inputStr.value;
    let parent = document.querySelector("#contentDiv");
     parent.innerHTML="";
     if(search.length<=2){
         return false
     }
    let response= getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    response.then((res)=>{
          showData(res,parent);
       
    });
    response.catch((err)=>{
        console.log(err)
    })
 }
 inputStr.oninput=()=>{
   
    deBounce(data,1000);
    
 }

function deBounce(fun,delay){
     if(search_waiting){
         clearTimeout(search_waiting);
     }
   search_waiting=setTimeout(()=>{
          fun();
      },delay);
}