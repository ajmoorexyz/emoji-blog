  'use strict'
  let lib = require('../simplemap.json')

  let arr = []
  for(var keys in lib) {
    arr.push([keys,lib[keys]])
  }

  let length = arr.length

  function daily() {
    let dayEmoji = []
    let counter = 0
    while (counter < 6) {
      dayEmoji.push(arr[gen()])
      counter++
    }
    return dayEmoji
  }

  function gen() {
    return Math.floor(Math.random()*length)
  }

  module.exports = daily()
