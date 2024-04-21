const convertToTitleCaps = num1=>
  {
    let ans=[];
    
    for (let i = 0; i < num1.length; i++) 
    {
        let words = num1[i].toLowerCase().split(' ');

        for (let j = 0; j < words.length; j++)
         {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
           
        }
       ans.push( words.join(' '))
    }
  
  return ans;                            

  }         
 let arr=["hello world","anonymous function","immediate invoke function"]
  console.log(convertToTitleCaps(arr));    