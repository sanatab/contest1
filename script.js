
/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    const newArr = arr.map(myFunction);
    function myFunction(arr){
        if(arr.marks > 50){
            console.log(arr.marks);
        }
    }
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(myFunction);

    function myFunction(arr){
      if(arr.marks > 50){
        console.log(arr.name);
      }

    }
  }
  
  function addData() {
    //Write your code here, just console.log
    let newObj = {id:4,name:"susan",age:"20",marks:45}
    //let newArr = Object.assign({}, arr, newObj)
    arr.push(newObj);
    console.log(arr);
  }
  
  let arr2 = [];
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr.forEach(myFunction);

    function myFunction(arr){
      if(arr.marks > 50){
        arr2.push(arr);
        console.log(arr);
      }

    }
    
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr3 =[
      { id: 7, name: "sana", age: "22", marks: 67 },
      { id: 8, name: "saba", age: "23", marks: 89 },
      { id: 9, name: "saif", age: "25", marks: 90 },
    ];

    arr2.forEach(myFunction);

    function myFunction(arr2){
      arr3.push(arr2);

    }

    console.log(arr3);


  }