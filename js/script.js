// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's sreet name and number and displays it back to user

  // get street name and number from text field
  let streetName = document.getElementById("street-name").value
	// get age from text field and cast it to integer
  let streetNumber = parseInt(document.getElementById("street-number").value)

  // display name and number back to user
  document.getElementById('user-info').innerHTML = "Your Street Number is " + streetNumber + " and you live on " + streetName + "."
}