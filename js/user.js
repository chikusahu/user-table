

const getKeys = (a)=>{
    if(typeof(a)!= "object"){
        return;
    }
    let collection=[];
    for (let k in a){
        
        collection.push(a[k]);   

    }
    return collection;

}


let user = {
    Name : "Arjun Kumar",
    Age : 52,
    Blood_Group : "O+"
}


let m=getKeys(users);

console.log(m);

