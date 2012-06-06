// Author: Myron Carroll
// Title: Assignment 2 JavaScript
// Class: Visual Frameworks

// Wait until the DOM is Ready
window.addEventListener("DOMContentLoaded", function(){
      

    //getElementByID Function
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
       
    };
     //variable Defaults
    var studentLevel = ['--Choose One--', 'Beginner', 'Intermediate', 'Advanced', 'Seasoned Professional'];
    //Create Select Field Elements

    function makeLevel(){
        var formTag = document.getElementsByTagName('form'),
            selectLi = $('select'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute('id', 'levels');
        for(var i=0, j=studentLevel.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = studentLevel[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
            
        }
        selectLi.appendChild(makeSelect);
        
    };
    //storeData function
    function storeData(){
        var id = Math.floor(Math.random()*100000001);
        //Gather up all form field values in an object
        //Object contains an array that contains form label and input value
        var item            = {};
            item.fname      = ["First Name:", $('fname').value];
            item.lname      = ["Last Name:", $('lname').value];
            item.email      = ["Email:", $('email').value];
            item.birth      = ["Birthday:", $('birth').value];
            item.level      = ["Level:", $('levels').value]; //Make sure the proper "level" is in the code
 //           item.skills     = ["Skills to Develop", skillValue];
            item.other      = ["Other", $('other').value];
            item.time       = ["Time", $('time').value];
        //Save the data into Local Storage. Use Stringify to convert object to string
        localStorage.setItem(id, JSON.stringify(item));
        alert("Contact Saved!");
    }
    
    makeLevel();
/*
    //Set Links and Submit Click events
    var displayLink = $('displayLink');
    displayLink.addEventListener('click', getData);
    var clearLink = $('clearLink');
    clearLink.addEventListener('click', clearLocal);
    var save = $('submit');
    save.addEventListener('click', storeData);*/
});
