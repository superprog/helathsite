function calculate(){
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;
  //  var bmi=weight/(height*height);
   var bmi=weight/Math.pow(height,2);

   var output=document.getElementById("bmi");
   bmi=Math.round(bmi)
  
   output.innerText="Your BMI is " + bmi.toString();
   var con=document.getElementById("conclusion");
   console.log(con)
   if(bmi>=18.5 && bmi<=24.5){
         con.innerText="Your BMI is normal";
         con.style.color="blue"
   }
   else if(bmi>=25 && bmi<=29.9){
        con.innerText="Your are over weight";
        con.style.color="green"
   }
   else if(bmi>=30 && bmi<=39.9){
    con.innerText="Your are obese";
    con.style.color="yellow"
}
else if(bmi>=40){
      con.innerText="You are Morbidly obese";
      con.style.color="red";
}

else{
      con.innerText="You are underweight";
      con.style.color="aquamarine";
      };
  
}