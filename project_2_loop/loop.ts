//While loop 
//Question 1
let i: number=1;
while(i<10){
    console.log(i);
    i++;
}

console.log("--------------------------------");

//Question 2
let a: number=10;
while(a>=1){
    console.log(a);
    a--;
}
export{}
console.log("--------------------------------");

//Question 3
let b: number = 5;
let sum_1: number= 0;
while(b>0){
    sum_1+=b;
    b--;
}
console.log(sum_1);

console.log("--------------------------------");
export{}

//Question 4
let c: number = 5;
let j: number = 1;
while(j<=10){
    console.log(c ,"x", j ,"=", c*j);
    j++;
    
}
console.log("--------------------------------");
export{}

//Question 5
let d: number = 4286;
let count: number = 0
while(d>0){
    d=Math.floor(d/10);
    count ++;
}
console.log(count);
console.log("--------------------------------");

// do-while loop
//Question 1
let e: number = 1;
do{
    console.log(e);
    e++;
}while(e<=10);
console.log("--------------------------------");

//Question 2
let even: number= 2;
do{
    console.log(even);
    even+=2;
}while(even<=20);
console.log("--------------------------------");

//Question 3
let odd: number= 1;
do{
    console.log(odd);
    odd+=2;
}while(odd<=20);
console.log("--------------------------------");

//Question 4
let org: number = 1234;
let rev: number= 0;
console.log(org);

do{
    let digit:number;
    digit=org%10;
    org=Math.floor(org/10);
    rev=rev*10+digit;
}while(org>0);
console.log(rev);

console.log("--------------------------------");

//Question 5
let org_digit: number = 1234;
let sum_3: number= 0;
console.log(org_digit);
do{
    let last: number = org_digit%10;
    sum_3=sum_3+last;
    org_digit=Math.floor(org_digit/10);
}while(org_digit>0);
console.log(sum_3);
console.log("--------------------------------");

//for loop
//Question 1
for (let p: number = 1; p <= 10; p++) {
    console.log(p);
}
console.log("--------------------------------");

//Qustion 2
for (let q: number = 1; q <= 5; q++) {
    console.log(q, "square =", q * q);
}
console.log("--------------------------------");

//Question 3
for (let r: number = 11; r <= 15; r++) {
    console.log(r, "cube =", r * r * r);
}
console.log("--------------------------------");


//Question 4
let s: number = 5;
let factorial: number = 1;

for (let i: number = 1; i <= s; i++) {
    factorial = factorial * i;
}

console.log("Factorial:", factorial);
console.log("--------------------------------");

//Question 5
let Terms: number = 5;
let first: number = 0;
let second: number = 1;

for (let i: number = 1; i <= Terms; i++) {
    console.log(first);

    let nextTerm: number = first + second;
    first = second;
    second = nextTerm;
}

console.log("--------------------------------");

//Mixed exercise
//Question 1
let prime:number = 7;
let isPrime: boolean= true;
if(prime<=1){
    isPrime=false;
}
else{
    for(let i=0; i<prime/2 ; i++){
        if(prime%i===0){
            isPrime=false;
            break;
        }
    }
}
if(isPrime){
    console.log("Number is prime");
}
else{
    console.log("Not a prime number");    
}
console.log("--------------------------------");

//Question 2
let org_1: number = 121;
let rev_1: number= 0;
let org_Number: number = org_1;
do{
    let digit:number;
    digit=org_1%10;
    org_1=Math.floor(org_1/10);
    rev_1=rev_1*10+digit;
}while(org_1>0);
console.log(rev_1);
if(org_Number===rev_1){
    console.log("Palindrome");
}
else{
    console.log("not palindrome");
    
}
console.log("--------------------------------");

//Question 3
let z:number = 153;
let org_z: number = z;
let sum_4:number = 0;
while(z>0){
    let rem: number = z%10;
    z=Math.floor(z/10);
    let digit_cube: number = rem*rem*rem;
    sum_4+=digit_cube;
}
if(sum_4===org_z){
    console.log(org_z," is Armstrong Number");
}
else{
    console.log(org_z," is not Armstrong Number");   
}
console.log("--------------------------------");

//Question 14 star pattern
for(let i:number= 0; i<5; i++){
    let str:string = "";
    for(let j:number= 0; j<=i; j++){
        str=str+"* ";
    }
    console.log(str);   
}

console.log("--------------------------------");

//Question 15 guessing correct number
let count_1:number = 0;
let correct: number = 7;
let attempt: number =  7;

while(attempt != 0){
    count_1++;
    if(attempt === correct){
        console.log("Correct guess: ", attempt);
        console.log("Total attempt: ",count_1);  
        break;         
    }
    else{
        console.log("Wrong guess: ",attempt);
    }
}