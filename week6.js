//  arrays.js
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`; //the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(''); // set the innerHTML

let grades = ['A', 'B', 'C'];

let gpaPoints = grades.map(function(grade){
    switch (grade){
        case 'A':
            point = 4;
            break;
        case 'B':
            point = 3;
        case 'C':
            point = 2;
        case 'D':
            point = 1;
        case 'F':
            point = 0;
        default:
            alert('not a valid grade');
    }
    return point;

})
console.log(gpaPoints);

let totalPoint = gpaPoints.reduce(getTotal);

function getTotal(total,item){
    return  total + item;

}
console.log(totalPoint);

let gpaAverage = totalPoint/gpaPoints.length;

console.log(gpaAverage);

let fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
//let shortFruit = fruit.filter(item)//
let shortFruit = fruit.filter(function(){
    return item.length <6;
    
})

