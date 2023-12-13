var once = function(fn) {
    let count = false;
    let res;
	return function(...args){

        if (!count){

        count = true;    

        return fn(...args);

        } else { 

            return undefined;

        }
        

    }
};