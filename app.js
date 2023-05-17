// geting numbers in input field
function getNum(num) {
    console.log(num)
    document.getElementById('result').value += num;
}

// All clear button
function clearscr(){
    document.getElementById('result').value ="";
}
// Clear number
function removeNum() {
    var res= document.getElementById('result').value 
    document.getElementById('result').value =document.getElementById('result').value.slice(0,res.length-1)
    // console.log(document.getElementById('result').value.slice(0,res.length-1));
}
// Answer/Equal to button
function getAns() {
    document.getElementById('result').value =eval(document.getElementById('result').value)
    console.log(document.getElementById('result').value)  
}
// Toggle dark to light theme
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }







