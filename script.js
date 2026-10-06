// 1.Create a curried function that accepts 3 numbers one by one and prints their sum.
function fun1(a){
    return function (b){
      return  function (c){
          console.log(a+b+c);
          
         }
    }
}fun1(10)(20)(30)

// 2.Create a curried function that accepts name, department, and salary and prints all three values.
  function emp(name){
    return function (dept){
      return  function (sal){
          console.log(name);
          console.log(dept);
          console.log(sal);
          
         }
    }
}emp("shivani")("cse")(30000)

// 3.Create a curried function that accepts 3 numbers and prints their multiplication.
function mul1(a){
    return function (b){
      return  function (c){
          console.log(a*b*c);
          
         }
    }
}mul1(1)(2)(3)
// 4.Convert a curried function that accepts a, b, and c into an uncurried function.
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }

}
function uncurried(a,b,c){
    return a+b+c;
}
console.log(uncurried(1,2,3));

// 5.Write both curried and uncurried versions of a function that adds 4 numbers.
function curried(a){
    return function(b){
        return function(c){
            return function(d){
            return a+b+c+d;
            }
        }
    }
}
console.log(curried(1)(2)(3)(4));
function uncurried1(a,b,c,d){
         return a+b+c+d;
            }
console.log(uncurried1(1,2,3,4));


// 2. Spread Operator — 7 Questions
// 6.Create two arrays of 5 numbers and merge them using the array spread operator.
let array1=[71,2,3,4,5]
let array2=[11,21,13,41,75]
let totalarray=[...array1,...array2]
console.log(totalarray);



// 7.Create two arrays containing student names and merge them into one array using spread.\
let studentname1=["shivani","sravani"]
let studentname2=["bhavani","nanu"]
let merge=[...studentname1,...studentname2]
console.log(merge);

// 8.Create an array and create another array containing the original values plus 3 new values using spread.
let oldarray=[54,76,21]
let newarray=[...oldarray,2,4,64]
console.log(newarray);

// 9.Create two objects containing employee details and merge them using the object spread operator.
let obj_emp={
    name:"shivani",
    dept:"frontend"
}
let obj_emp1={
    name:"sravani",
    dept:"python"
}
let mergeobj={
    emp1: { ...obj_emp },
    emp2: { ...obj_emp1 }
}
console.log(mergeobj);

// 10.Create an employee object and create a new object by copying it and adding a salary property using spread.
let employee = {
    name: "Shivani",
    dept: "Frontend"
};

let newEmployee = {
    ...employee,
    salary: 30000
};

console.log(newEmployee);
// 11.Create two objects with different properties and combine them into one object using spread.
let employees = {
    name: "Shivani",
    dept: "Frontend"
};
let address={
    roadno:7,
    colony:"hspm"
}
let mergedata={...employees,...address}
console.log(mergedata);

// 12.Create two arrays and use spread to create one array in reverse order.
let arr1=[3,4,21,5]
let arr2=[9,7,52,8]
let reverse=[...arr1,...arr2].reverse()
console.log(reverse);
console.clear()
// 3. Rest Operator in Functions — 6 Questions
// Your notes specifically use rest with function parameters. Pasted markdown
//13. Create a function that accepts two fixed values and stores all remaining values using the rest operator.
 function value(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(...rest); 
 }
 value(12,4,32,2,6)
// 14.Create a function student(name, department, ...marks) and print the name, department, and marks.
function student(name, department, ...marks){
     console.log(name);
    console.log(department);
    console.log(...marks); 
}
student("shivani","frontend",34)
// 15.Create a function that accepts two numbers and any number of additional numbers using rest.
function values(a,b,...add){
     console.log("First number:", a);
    console.log("Second number:", b);
    console.log("Additional numbers:", add);
}
values(10, 20, 30, 40, 50)
// 16.Create a function that prints the 5th value from the rest parameter.
function num(...rest){
    console.log(rest[4]);
    
}
num(10, 20, 30, 40, 50,3)
// 17. Create a function that accepts product, price, and remaining values using rest and prints them.
function products(prpduct,price,...rest){
    console.log(prpduct);
    console.log(price);
    console.log("Additional info:" ,rest);
}
products("chocolate",40,"silk","12-3-2027")
// 18.Create a function that receives 10 numbers and uses rest to store all values after the first two.
function numbers(a, b, ...rest) {
    console.log("First val:", a);
    console.log("Second val:", b);
    console.log("Remaining vals:", rest);
}

numbers(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
console.clear()
// 4. Array Destructuring — 5 Questions
// Based on the array and nested-array destructuring in your notes. Pasted markdown
//19. Create an array of 4 values and extract all four values using array destructuring.
let arry1=[1,2,3,4]
let[a,b,c,d]=arry1
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// 20.Create an array of student details and extract the first, second, and third values using destructuring.
let empdata=["shivani","frontend",30000,"hyd"]
let[name1,dept,sal]=empdata
console.log(name1);
console.log(dept);
console.log(sal);
// 21.Create an array of 5 numbers and extract only the first and fourth values using destructuring.
let arrynums=[1,2,3,4,5]
let[w,,,z]=arrynums
console.log(w);
console.log(z);


// 22.Create a nested array and extract its values using nested destructuring.
let nestarry=[1,2,3,[4,5]]
let [q,s,e,[r,t]]=nestarry
console.log(q);
console.log(s);
console.log(e);
console.log(r);
console.log(t);

// 23.Given a nested array containing numbers inside 3 levels, extract the required values using nested destructuring.
let subnest=[11,12,[13,14,[15]]]
let [a1,b1,[c1,d1,[e1]]]=subnest
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);


// 5. Object Destructuring — 5 Questions
// 24.Create an employee object with name, designation, and salary. Extract all values using object destructuring.
let objemp={
    name:"shivani",
    designation:"frontend",
    salary:1234
}
let{name,designation, salary}=objemp
console.log(name);
console.log(designation);
console.log(salary);

// 25.Create a student object with name, department, and cgpa. Extract all values using destructuring.
let objemp1={
    namee:"shivani",
    designation1:"frontend",
    cgpa:9.0
}
let{namee,designation1, cgpa}=objemp1
console.log(namee);
console.log(designation1);
console.log(cgpa);
// 26.Create an object with 5 properties and extract only 3 properties using object destructuring.
let propobj={
    namee1:"bhavani",
    designationn1:"frontend",
    cgpa1:9.0,
    working:"job",
    address:"hyd"
}
let{namee1,designationn1, working}=propobj
console.log(namee1);
console.log(designationn1);
console.log(working);
// 27. Create a nested object containing employee and team details. Extract the employee name and team member names using nested destructuring.
let cmpydata={
    myname:"shivani",
    role:"frontend",
    team:{
        mem1:{
            name3:"jhon",
        sal:12345
    },
         mem2:{
            name2:"joshe",
        sal:3145
    }
    }
}
let {myname,team:{
    mem1:{name3},
    mem2:{name2}
}}=cmpydata
console.log(myname);
console.log(name3);
console.log(name2);


// 28.Create a nested object containing company → department → employee and extract the employee name using nested destructuring.
let company={
    department:{
        empee:{
            name4:"sravani"
        }
    }
}
let {department:{empee:{name4}}}=company
console.log(name4);
console.clear()
// 6. Array Manipulation — 10 Questions
// Your latest notes cover push, pop, shift, unshift, and splice. Pasted markdown
// 29.Create an array of 5 fruits and add 3 more fruits at the end using push().
let fruits=["apple","banana","mango","guva","pineapple"]
fruits.push("orange","grapes","watermelon")
console.log(fruits);

// 30.Create an array of 5 numbers and remove the last value using pop().
let nums=[1,2,3,45,6]
    nums.pop()
console.log(nums);

// 31.Create an array of 5 student names and remove the first student using shift().
let students = ["Shivani", "Sravani", "Rahul", "bhavu", "Anu"];

students.shift();

console.log(students);
// 32. Create an array of 4 numbers and add 2 numbers at the beginning using unshift().

let numbers1 = [3, 4, 5, 6];

numbers1.unshift(1, 2);

console.log(numbers1);
// 33.Create an array [10,20,30,40,50] and replace 30 with 100 using splice().
let reparry= [10,20,30,40,50] 
reparry.splice(2,1,100)
console.log(reparry);

//34.Create an array of 6 values and remove 2 values from the middle using splice().
let midarry=[1,2,3,4,5,6]
midarry.splice(2,2)
console.log(midarry);

// 35.Create an array and add 3 new values in the middle using splice().
let midarryadd=[1,2,3,4,5,6,7]
midarryadd.splice(2,0,88,54,67)
console.log(midarryadd);

// 36.Create an array and remove 2 values and add 3 new values at the same position using splice().
let midarryrem=[1,2,3,4,5,6,7]
midarryrem.splice(2,2,67,45,51)
console.log(midarryrem);
// 37.Create a student list and remove one student from the middle using splice().
let studentNames=["shivani","bhavani","chinna","sravani","laddu"]
studentNames.splice(2,1)
console.log(studentNames);

// 38.Create a shopping cart array and perform push, pop, shift, and unshift operations on it.
let shopping=["lehenga","shoes","watch"];
shopping.push("kurthi")
console.log(shopping);

shopping.pop()
console.log(shopping);

shopping.shift()
console.log(shopping);

shopping.unshift("saree")
console.log(shopping);

console.clear();

// 7. Array Merge & Extraction Methods — 7 Questions
// Based on concat, slice, and flat. Pasted markdown
// 39.Create two arrays and merge them using concat().
let arry3 = [1, 2, 3];
let arry2 = [4, 5, 6];

let merged = arry3.concat(arry2);

console.log(merged);
// 40.Create three arrays and merge all three using concat().
let   newarry3 = [1, 2, 3];
let newarry2 = [4, 5, 6];
let newarry4=[9,7,93]

let newmerged = newarry3.concat(newarry2,newarry4);

console.log(newmerged);
// 41.Create an array of 8 values and extract values from index 2 to index 5 using slice().
let val=[2,3,4,5,6,7,8,9]
let res=val.slice(2,6)
console.log(res);

// 42.Create an array of student names and extract the first 3 students using slice().
let studnames=["shivani","bhavani","sravani","anusha","shree"]
let res1=studnames.slice(0,3)
console.log(res1);

// 43.Create a nested array with 3 levels and convert it into a single-level array using flat().
let vals=[9,8,[7,6,[5,6,[7]]]]
let final=vals.flat(3)
console.log(final);

// 44.Create a nested array with 4 levels and use flat() to remove the nesting.
let nestvalues1=[1,2,[3,4,[5,6,[7,8,[9]]]]]
let flat=nestvalues1.flat(4)
console.log(flat);


// 45.Explain through code the difference between slice() and splice() by performing an operation with both.
let arr = [10, 20, 30, 40, 50];


let result1 = arr.slice(1, 4);

console.log("Slice:", result1);
console.log("Original array:", arr);

let result2 = arr.splice(1, 2);

console.log("Splice:", result2);
console.log("Original array:", arr);

// 8. Search & Other Array Methods — 5 Questions
// 46.Create an array of numbers and check whether 50 exists using includes().
let number1 = [10, 20, 30, 40, 50, 60];
let result=number1.includes(50)
console.log(result);

// 47.Create an array containing duplicate values and find the first occurrence of a value using indexOf().
let dupval=[1,2,3,4,4,2,1]
let resdup=dupval.indexOf(4)
console.log(resdup);

// 48.Create an array containing duplicate values and find the last occurrence using lastIndexOf().
 let dupval1=[1,2,3,4,4,2,1]
let resdup1=dupval1.lastIndexOf(4)
console.log(resdup1);
// 49. Create an array of numbers and sort it using sort().
let sort = [40, 10, 30, 20, 50];
sort.sort();
console.log(sort);
// 50.Create an array of numbers and reverse its order using reverse(). Pasted markdown
let reverse1 = [40, 10, 30, 20, 50];
let rev=reverse1.reverse()
console.log(rev);

