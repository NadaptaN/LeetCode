var filter = function(arr, fn) {
    
    let res = [];

    for(i = 0; i < arr.length; i++) { 

        if (Boolean(fn(arr[i], i)) === true) { 

            res.push(arr[i]);

        }

    }

    return res;

};