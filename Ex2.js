for(let i = 2 ; i<237 ; i++)
{
    let count = 0 ;
    for(let j = 2 ; j<i ; j++)
    {
        if(i%j==0)
        {
            count++ ;
        }
    }
    if(count==0)
    {
        console.log(i) ;
    }
}