const sumofarray =num1 =>
  {
    let ans=0;
    
    for (let i = 0; i < num1.length; i++) 
    {
       ans+=num1[i];
    }
  
  return ans;                 

  }
  let arr=[10,19,47,10,9,5]    

  console.log(sumofarray(arr))