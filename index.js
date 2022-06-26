function myEach(collection, callback){
    if (collection.isArray){
        for(const a of collection){
            callback(a);
        }
        return collection;
    }
    else{ 
        for(const a of Object.values(collection)){
            callback(a);
        }
        return collection;
    }
}

function myMap(collection, callback){
    let nArray=[];
    if (collection.isArray){
        for(const a of collection){
            nArray.push(callback(a));
        }
        return nArray;
    }
    else{ 
        for(const a of Object.values(collection)){
            nArray.push(callback(a))
        }
        return nArray;
    }
}

function myReduce(collection, callback, acc){
    let num=0;
    let val=0;
    if (collection.isArray){
        if (acc === undefined){
            num += collection[0];
        }
        else {
            num = acc;
        }
    }else{};

    if(collection.isArray){
        for(const a of collection){
        val+= callback(num, a);
        num = val;
    }
    return val;
    }
    else{ 
        for(const a of Object.values(collection)){
            return callback(num, a, collection);
        }
    }
}

function myFind(collection, p){
    if(collection.isArray){
        for(const a of collection){
            if (p(a)){
                return a;
            }
        }
        return undefined;
    }
    else{
        for(const a of Object.values(collection)){
            if (p(a)){
                return a;
            }
        }
        return undefined;
    }
}

function myFilter(collection, p){
    let nArray=[];
    if (collection.isArray){
        for(const a of collection){
            if (p(a)){
                nArray.push(a);
            }
        }
        return nArray;
    }
    else{
        for(const a of Object.values(collection)){
            if (p(a)){
                nArray.push(a);
            }
        }
        return nArray;
}
}

function mySize(collection){
    let x = 0;
    if (collection.isArray){
        for (const a of collection){
            x++;
        }
        return x;
    }
    else{
        for(const a of Object.values(collection)){
            x++;
        }
        return x;
    }

}

function myFirst(set, n){
    if (n === undefined){
        n = 1;
    }else{
        n = n;
    }
    
    if (n===1){
        return set[0];
    }else {
    const value = set.slice(0,n);
    console.log(value);
    return value;
    }
}

function myLast(set, n){
    let x = set.length;
    if (n === undefined){
        n = x- 1;
        return set[n];
    }else{
        n = x-n
    }
    
    const value = set.slice(n);
    console.log(value);
    return value;
}

function myKeys(obj){
    return Object.keys(obj);
}

function myValues(obj){
    return Object.values(obj);
}