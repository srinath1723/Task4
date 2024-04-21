const oddnumber = num1=>
  {
    let ans=[];
    let s=0;
    for(let i=0;i<num1.length;i++)
    {
    if(num1[i]%2!=0)      
    {
        ans[s]=num1[i];
        s++;
    }
  }
  return ans;           
  }
  let arr=[10,15,12,16,19]   

  console.log(oddnumber(arr))