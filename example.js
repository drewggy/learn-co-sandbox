/*

const person = {
  name: "Awesome Name",
  occupation: {
    title: "Senior Manager of Awesome",
    yearsheld: 2
    
  },
  pets: [{
      kind: "dog",
      name: "Fiona"
    },{
      kind: "cat",
      name: "Ralph"
    }]
}

function find(array, criteriaFan){
  let current = array;
  let next = [];
  while (current) {
    if (criteriaFan(current)) {
      return current
  }
    if (Array.isArray(current)){
      for (let i = 0; i < current.length; i++) next.push(current[i]);
    }
    current = next.shift();
    }
  return null;
  

}

const collections = [1, [2, [4, [5, [6]], 3]]];


const textcollections = ["one", ["two", ["four", ["five", ["six"]], "three"]]];


console.log(JSON.stringify(find(textcollections,n => (typeof n === "String" && n === ("two")) )));



function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }

//  return innerVariable;
  
}

var myScope = outerFunction();
//var anotherScope = innerScope(); //outerFunction();
 
// the stringified version of `innerScope()`
//console.log(anotherScope);
console.log(myScope);


*/