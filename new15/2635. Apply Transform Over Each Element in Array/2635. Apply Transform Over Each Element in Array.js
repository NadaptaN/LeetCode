var map = function(arr, fn) {

    let newArr = [];

    for (i = 0; i < arr.length; i++) { 

        let result = fn(arr[i], i);

        newArr.push(result);

    }

    return newArr;
    
};