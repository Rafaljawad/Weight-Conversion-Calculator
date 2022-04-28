
function clearInput(){
  document.querySelector('.kg-input').value=null;//here the number that we insert it ,just store it in a varible 
 
    document.querySelector('.lb-input').value=null;
  
}
function convert(){
    let numberInKillo=Number(document.querySelector('.kg-input').value);
    console.log(numberInKillo);
    let numberInPound=Number(document.querySelector('.lb-input').value);
    console.log(numberInPound);
    if(numberInKillo){
       document.querySelector(".lb-input").value=numberInKillo*2.2046226218;
       document.querySelector(".kg-input").value=null;

    }
    if(numberInPound){
        document.querySelector(".kg-input").value=numberInPound/2.2046226218;
        document.querySelector(".lb-input").value=null;


    }
}
