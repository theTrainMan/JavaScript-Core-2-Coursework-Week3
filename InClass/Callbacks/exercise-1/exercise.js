/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).


Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

// Task 1
//Callback Function
setTimeout(function background() {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = 'white';
}, 3000);

// Task 2

var i = 0;

function change() {
    var background = document.getElementById("main");
    var color = ["black", "blue", "brown", "green", 'yellow', 'brown', 'pink', 'salmon'];
    background.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
setInterval(change, 1000);