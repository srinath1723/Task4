const primeNumber =num1=>
  {

    if(num1<=1) return false
    for (var i = 2; i <= Math.sqrt(num1); i++) 
    {
        if (num1 % i === 0) return false;
      }
      return true;
    

  }
  let array=[-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

  console.log(array.filter(primeNumber)) 