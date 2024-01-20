let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    console.log(arr[0],arr[1]);
  }

  //new Object
  let x={
    id: 4, name: 'Owais', age: 24, profession: 'Frontend developer'
  }

  function addData() {
    //Write your code here, just console.log
    arr.push(x);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let z=delete arr[2];
    console.log(arr);
  }
  //New Array
  let arr2 = [
    { id: 5, name: 'Raj', age: 23, profession: 'Back-developer' },
    { id: 6, name: 'malik', age: 24, profession: 'Data Engineer' },
    { id: 7, name: 'Syed', age: 25, profession: 'Business Man' },
  ];
  
  function concatenateArray() {
    //Write your code here, just console.log
    let n=arr.concat(arr2);
    console.log(n);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }