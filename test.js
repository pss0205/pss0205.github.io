let n = 10;

function test(n)
{   
    let curr = 0;
    let next = 1;
    let mid;
    for (let i = 0; i < n; i++)
    {
        mid = curr;
        curr = next;
        next = curr + mid;
    }  
    return curr;
}

for(let i = 1; i < 13; i++){
    if(test(i)%2 === 1)
        console.log("odd");
    else
        console.log("even");
    }