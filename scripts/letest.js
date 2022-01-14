// importing nav bar 
import { navbar } from "../components/navbar.js";
import {getData,showData} from "../scripts/showData.js";
document.body.innerHTML=navbar();
let parent = document.querySelector("#contentDiv");
parent.innerHTML="";
let response= getData("https://www.themealdb.com/api/json/v1/1/search.php?f=l");
 response.then((res)=>{
     showData(res,parent);
 })
 response.catch((err)=>{
     console.log(err)
 })