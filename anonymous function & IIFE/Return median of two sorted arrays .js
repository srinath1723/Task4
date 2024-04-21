const getMedian=function (ar1, ar2)
{
    let n=ar1.length
	let i = 0; 
	let j = 0; 
	let count;
	let m1 = -1, m2 = -1;

	for (count = 0; count <= n; count++)
	{
		
		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}

		else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
		
		if (ar1[i] <= ar2[j])
		{
			m1 = m2; 
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2; 
			m2 = ar2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
}

let ar1 = [1, 2, 3, 4, 5];
let ar2 = [20, 30, 25, 35, 45];
console.log( getMedian(ar1, ar2));