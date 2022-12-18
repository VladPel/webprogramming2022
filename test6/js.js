btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);

  function f_out (){
    console.log(f1.checked);
    console.log(f2.checked);
    console.log(f3.checked);
    console.log(f4.checked);

    if (f3.checked){
      right.classList.remove("hidden");
      wrong_div.classList.add("hidden");
    }else{
      right.classList.add("hidden");
      wrong_div.classList.remove("hidden");
    }
   
    
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }