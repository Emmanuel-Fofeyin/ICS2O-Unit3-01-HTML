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
  const verticalLength = parseInt(document.getElementById('vertical-length').value)
  const horizontalLength = parseInt(document.getElementById('horizontal-length').value)

  // process
  const area = (verticalLength * horizontalLength) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}