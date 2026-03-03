
/* let n = 10;
let i = 0;
do {
    console.log(i);
    i++;
}while(i < n);
*/
//global scope of an variable

 //Global scope variable
/*
function call(){
    let a = "obulesu";  //function scope varible
    console.log(a);
}
call();
*/
/*
*
* *
* * *
* * * *
* * * * *
*/
 
let n = 5;

for(let i =0;i < n; i++){
    let row = "";
for(let j = 1; j <= n - i;j++){
  row += "* ";

}
console.log(row);
}