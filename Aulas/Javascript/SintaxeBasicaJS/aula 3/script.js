/*como declarar um array

let array = ['string', 1, true];
console.log(array); 

//varios dados
let array = ['string', 1, true, ['array1'], ['array2']];
/*console.log(array) */

/*foreach
 array.forEach(function(item, index) {console.log(item, index)});*/
 

/* //array.push(adiciona novo item)
 array.push(['array3']);
console.log(array);

//array.pop
array.pop();
console.log(array);

//array.shift();
console.log(array);

//array.unshift('novo item no inicio');
console.log(array);

//console.log(array.indexOf(true));

array.splice(0, 3);
console.log(array)

let novoArray = array.slice(0, 3);
console.log(novoArray);*/

let object = { string: 'string', number: 1, boolean : true, array: ['array'], objectinterno: {objectinterno: 'objectinterno'}};
/*console.log(object);

var string = object.string;
console.log(string);

var arrayinterno = object.array;
console.log(arrayinterno)*/

//modo de fazer desestruturação na hora de declarar

var {string, boolean, objectinterno} = object
console.log(string, boolean, objectinterno)