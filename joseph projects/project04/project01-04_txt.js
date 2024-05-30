/*  JavaScript 7th Edition
    Chapter 1
    Hands-On Project 1-4

    Author: Joseph Gjelaj
    Date:   5/30/24

    Filename: project01-04.js
*/

//define variables for home and work addresses
var homeStreet = "1 Main St.",
    homeCity = "Sicilia",
    homeState = "MA",
    homeCode = "02103",
    workStreet = "15 Oak Ln.",
    workCity = "Central City",
    workState = "MA",
    workCode = "02104";
    function setHomeAddress() {
        document.getElementById("street").value = homeStreet;
        document.getElementById("city").value = homeCity;
        document.getElementById("state").value = homeState;
        document.getElementById("code").value = homeCode;
    }
    function setWorkAddress() {
        document.getElementById("street").value = workStreet;
        document.getElementById("city").value = workCity;
        document.getElementById("state").value = workState;
        document.getElementById("code").value = workCode;
    }