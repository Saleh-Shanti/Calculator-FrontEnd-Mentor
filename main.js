

// Select all of the number  btns
let buttons =document.querySelectorAll('.num');

//Select the result screen
let result=document.querySelector(".result");

// variable to take the number btn value
let num;


//When Click on any of Number Buttons 

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // set the clicked number on the result screen
        result.innerHTML+=btn.innerHTML;
        
      }); 
  });
 
  // Reset Button
let reset=document.querySelector(".Reset");
reset.addEventListener('click',function(event){
    //Clear the result screen
    result.innerHTML='';} 
    );


    // Delete Button 

    let del=document.querySelector(".del");
    del.addEventListener('click',function(event){
        var res=result.innerHTML;
        res=res.substring(0, res.length-1);
        result.innerHTML=res;
        num=parseFloat(result.innerHTML); 
    });


//operations buttons
let operation;

let oper=document.querySelectorAll(".operation");
oper.forEach((btn)=>{
btn.addEventListener('click',function(event){
    if(result.innerHTML=='')return;
    if(operation!==undefined)return;
    operation=btn.innerHTML;
    result.innerHTML+=operation;

});
});


// equal button 
let snum;
let total;
let equal=document.querySelector(".equal");
equal.addEventListener("click",function(event){
    if(operation==undefined)return;
    num=result.innerHTML;  
    num=parseFloat( num.substr(0,num.indexOf(operation)));

    snum=result.innerHTML;
    snum= parseFloat( snum.substr(snum.indexOf(operation)+1,snum.length));
 
switch(operation){

    case '*': total=num*snum;break;
    case '+': total=num+snum;break;
    case '/': total=num/snum;break;
    case '-': total=num-snum;break;
}
operation=undefined;
result.innerHTML=total;
});



// Theme Changer

// To select The Radio Buttons Value

const radios = document.querySelectorAll('input[name="theme-change"]');


radios.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    
    
        let selectedValue;
        for (const radio of radios) {
            if (radio.checked) {
                selectedValue = parseInt(radio.value);
                if(selectedValue===1){
                document.body.classList.remove("Violet-theme","Light-theme");break;}


                if(selectedValue===2){
                    document.body.classList.remove("Violet-theme");
                document.body.classList.add("Light-theme");break;}
                
               
                if(selectedValue===3){
                    document.body.classList.remove("Light-theme");
                document.body.classList.add("Violet-theme");break;}

               
                break;
            }
        }
        
    
    });});