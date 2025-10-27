//daniel elimelech and elihai afuta
const arr = [0,100,20,5000,8,0,2,3,6,4,9];
let count = 0;
for(let i = 0 ; i<arr.length; i++)
{
    if(arr[i] === 0 )
        count+=1;
    while(arr[i] != 0)
     {  if(arr[i] % 10 === 0 )
        count+=1; 
        arr[i]/=10;
     }
}
console.log(count);

