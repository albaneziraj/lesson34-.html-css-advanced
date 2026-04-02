// function printNames(){
//     document.write("Emir");
//     document.write("<Br>");
//     setTimeout(function(){document.write("Etnik");}, 3000);
//     document.write("Veron");
// }

// printNames();

var colors = ['red','green','blue','purple'];

function changeBgColor(){
    document.querySelector('body').style.background =
    colors[Math.floor(Math.random()*colors.length)];
}

var p = ["Alba","Veron","Etnik","Emir"];

function changeNames(){
    document.querySelector('body').innerHTML =
    names[Math.floor(Math.random()*names.length)];
}
setInterval(changeBgColor, 1000);
setInterval(changeNames, 1000);