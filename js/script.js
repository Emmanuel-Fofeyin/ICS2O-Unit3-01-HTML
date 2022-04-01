// Copyright (c) 2022 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on:Tuesday March 29 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of trapezoid.
 */
function calculate () {
  // input
  const aLength = parseInt(document.getElementById('a-length').value)
  const bLength = parseInt(document.getElementById('b-length').value)
  const hLength = parseInt(document.getElementById('h-length').value)

  // process
  const area = (aLength+bLength) / 2 * hLength

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' mm²'
}