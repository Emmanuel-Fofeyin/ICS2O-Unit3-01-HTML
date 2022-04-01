// Copyright (c) 2022 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on:Tuesday March 29 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of trapozoid.
 */
function calculate () {
  // input
  const aLength = parseInt(document.getElementById('a-length').value)
  const bLength = parseInt(document.getElementById('b-length').value)
  const height = parseInt(document.getElementById('height-length').value)

  // process
  const area = (aLength+bLength)* 2 / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' mm²'
}