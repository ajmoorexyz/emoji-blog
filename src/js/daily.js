  'use strict'
  let lib = require('../simplemap.json')

  // transform Object to Array 
  let arr = []
  for(var keys in lib) {
    arr.push([keys,lib[keys]])
  }

  // cache length 
  let length = arr.length

  // create the days narrative
  function daily() {
    let dayEmoji = []
    let counter = 0
    while (counter < 6) {
      dayEmoji.push(arr[gen()])
      counter++
    }
    return dayEmoji
  }

  // secrect sauce randomizer
  function gen() {
    return Math.floor(Math.random()*length)
  }

  module.exports = daily()
