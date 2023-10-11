 function outerFun() {
     let money = 150;

     function innerFun() {
         money++;
         console.log(money);
     }
     return innerFun;
 }

 let fun = outerFun();
 let fun1 = outerFun();
 fun();
 fun();
 fun();
 fun1();
 fun1();
 fun1();