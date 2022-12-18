import printA1 from './wordDatabase/a1.js'
import printA2 from './wordDatabase/a2.js'
import printB1 from './wordDatabase/b1.js'
import printB2 from './wordDatabase/b2.js'
import printC1 from './wordDatabase/c1.js'

printA1();

document.querySelector("#bottom-a1").onclick = function() { printA1() };
document.querySelector("#bottom-a2").onclick = function() { printA2() };
document.querySelector("#bottom-b1").onclick = function() { printB1() };
document.querySelector("#bottom-b2").onclick = function() { printB2() };
document.querySelector("#bottom-c1").onclick = function() { printC1() };