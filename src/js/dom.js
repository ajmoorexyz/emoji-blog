'use strict'
let todaysStory = require('./app.js')

const O = [
  '.one',
  '.two',
  '.three',
  '.four',
  '.five',
  '.six'
]

//render to the DOM
for (var i = 0; i < todaysStory.length; i++) {

  document.querySelector(O[i]).innerHTML=`${ todaysStory[i][1] }`
}
