Hi! 👋

You've opened the IDE Sandbox. 🎉

The Sandbox is an environment that you can access on "readme" and "code-along" lessons in Learn. It's a great place to experiment with code when you're not working on a "lab" (labs open the IDE In Browser).

The work you do in the Sandbox will be saved from lesson to lesson, and is automatically saved on your behalf to a repository in your GitHub account called `learn-co-sandbox`.

Please DO NOT touch this repository in GitHub, as it will affect your Sandbox experience, and potentially cause your workREADME.md
Split Screen
 to be out of sync.

To learn more about the Sandbox, please visit http://help.learn.co/ide-in-browser#sandbox.


function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}

var myScope = outerFunction();
 
// the stringified version of `innerScope()`
myScope;

/*
function sayHellotoIsabel(){
  console.log("Hello, Isabel!")
}
function sayHellotoSofia(){
  console.log("Hello, Sofia!")
}
function sayHellotoBrandon(){
  console.log("Hello, Brandon!")
}

function doSomething(things) {
  console.log(things)
}
function sayHelloTo(firstName){
  console.log(`Hello, ${firstName}!`)
}
*/

function say(greeting,                       firstName){
  console.log('I was called!')
  return `${greeting}, ${firstName}!`
}
