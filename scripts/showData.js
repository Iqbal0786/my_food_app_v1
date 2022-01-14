
// fetching api request
async function getData(url){
   try{
    let req= await fetch(url);
    let response= await req.json();
    return response.meals;
   }
   catch(error){
       console.log(error)
   }
}

// showing data into the div
function showData(data,location){
     data.map((elem)=>{
    let childDiv= document.createElement("div");
    childDiv.setAttribute("class","childDiv");
    let title=document.createElement("p");
    let meal_type=document.createElement("h4");
    let img= document.createElement("img");
    img.src=elem.strMealThumb;
    title.textContent=elem.strMeal;
     meal_type.textContent=elem.strArea;
    childDiv.append(img,title , meal_type);
    location.append(childDiv);
     })

}

export {getData ,showData}