
let student = {
 name : "obulesu",
 age : 19,
 branch : "ECE",
weight : "66kg" ,

attended : function(){
    console.log("he is attended the class");
},
absent : function(){
    console.log("he is abesnt to the class");
}
};


console.log(student.name);
console.log(student.age);
console.log(student.branch);
console.log(student.absent());
console.log(student.attended());

