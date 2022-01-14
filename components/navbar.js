function navbar(){
    return ` <div id="navBar">
    
    <a href="index.html" class="option"><h2>Home</h2></a>
    <div id="lhs">
   
        <input type="text" id="searchInput" placeholder="Enter name here for searching the food.....">

    </div>
   
      
    <div id="rhs">
    <a href="today_recepie.html" ><h2 id="today">Today's Receipe</h2></a>
    <a href="letest_recepie.html" >   <h2 id="letest">Letest Receipe </h2></a>  
      
    </div>
</div>
<div id="contentDiv">
 
</div>
`;
}
export {navbar};
