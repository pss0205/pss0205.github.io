let n = 10;
let curr = 0;
let next = 1;
let sub;


for(let i = 0; i<n; i++){
    sub = curr;
    curr = next;
    next = sub + curr;
}

console.log(curr);