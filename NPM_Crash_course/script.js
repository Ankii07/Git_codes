// npm ka full form hota hai node package manager

// npm ke andr bhut si libraries h jisko hum apne code ke andr include krke apna kaam bhut aram se krwa skte hai

// npm automatically download kr dega ,folder bhi bna dega aur usko import krne ka mast trika bhi de dega..

// browser mai ek v8 engine hota hai to usko deveoloper ne browser se nikal ek node software mai develop kr diya jisse ki aap 
// apne device pe bhi use kr skte ho

// ek project ko npm ke project mai convert krne ke liye command hai
// npm init just like git init

// npm command run krne ke baad ek package.json krke ek file bn jayegi jo sari files jo npm ka use krke install krenge
// unki properties/dependencies ko hold krke rakhega

// shortcut key to install in npm
// npm i(install) axios

// install krne ke baad ek node_modules folder aa jayegi jo ki  hold kregi wh sari dependencies jo ki instaled version depend krti hai aur dependencies ke 
// depencies bhi hold krke rakhta hai

// A package-lock.json file is automatically generated by npm (Node Package Manager) when the npm install command is run. 
// It is used to lock the versions of a project's dependencies, ensuring that the same versions are installed every time the project is set up.

// The node_modules folder is a directory used by Node.js projects to store all the installed dependencies and their dependencies recursively

// Browser ka import or node module ka import alag hota hai

// npx ka matlb hota hai npm execute

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response)=> {
    // handle success
    console.log(response.data);
  })