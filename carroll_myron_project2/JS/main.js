// Author: Myron Carroll
// Title: Assignment 2 JavaScript
// Class: Visual Frameworks

// Wait until the DOM is Ready
window.addEventListener("DOMContentLoaded", function(){
      

    //getElementByID Function
    function $(x){
        var theElement = document.getElementByID(x);
        return theElement;
       
    };
     //variable Defaults
    var studentLevel = ['--Choose One--', 'Beginner', 'Intermediate', 'Advanced', 'Seasoned Professional'];
    //Create Select Field Elements

    function makeLevel(){
        var formTag = document.getElementsByTagName('form'),
            selectLi = $('select'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute('id', 'level');
        for(var i=0, j=studentLevel.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = studentLevel[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
            
        }
        selectLi.appendChild(makeSelect);
        
  
    };
    
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
