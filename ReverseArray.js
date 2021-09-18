function reverseArray(arr) {
    const arr1 = arr.pop();
    const arr2 = arr.shift();
    arr.unshift(arr1);
   // console.log(  arr.unshift(arr1))
    arr.push(arr2);
    //console.log( arr.push(arr2));
    console.log(arr);
  }
  
  reverseArray(["A", "B", "C"]);