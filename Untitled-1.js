let b=document.getElementById("bu");
let l=document.getElementById("lu");
let pp=document.getElementById("po");
let ii=document.getElementById("in");
ii.addEventListener( "keydown",function(e){
    
    

if(e.key==="Enter"){
    if(ii.value.trim()==='')
    {

        pp.textContent="le champs est inaccessible";  
        pp.style.color="red";}
        else{
            pp.textContent="tache ajoutée!";  
            pp.style.color="green";
        
        let liv=document.createElement("li");
        l.appendChild(liv);
        liv.textContent=ii.value.trim();
        
        
        ii.value=' ';}
    }

})
b.addEventListener( "click",function(){
    if(ii.value.trim()==='')
    {

        pp.textContent="le champs est inaccessible";  
        pp.style.color="red";}
        else{
            pp.textContent="tache ajoutée!";  
            pp.style.color="green";
        
        let liv=document.createElement("li");
        l.appendChild(liv);
        liv.textContent=ii.value.trim();
        
        
        ii.value=' ';
    }})
  

    



    

    







