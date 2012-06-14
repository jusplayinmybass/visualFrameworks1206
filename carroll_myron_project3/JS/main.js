// Author: Myron Carroll
// Title: Assignment 3 JavaScript
// Class: Visual Frameworks

// Wait until the DOM is Ready
window.addEventListener("DOMContentLoaded", function () {
      

    //getElementByID Function
    function $(x) {
        var theElement = document.getElementById(x);
        return theElement;
       
    };
     //variable Defaults
    var studentLevel = ['--Choose One--', 'Beginner', 'Intermediate', 'Advanced', 'Seasoned Professional'],
        skillValue;
    //Create Select Field Elements

    function makeLevel () {
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
    
    //Find value of Checked Boxed
    function getCheckedBoxValues(){
        var box = document.forms[0].skill;
        for(var i=0; i<box.length; i++){
            if(box[i].checked){
                skillValue = box[i].value;
            }
        }
    }
    
    //Toggle Controls
    function toggleControls(n){
        switch(n){
            case "on":
                $('contactForm').style.display = "none";
                $('clearLink').style.display = "inline";
                $('displayLink').style.display = "none";
                $('addNew').style.display = "inline";
                break;
            case "off":
                $('contactForm').style.display = "block";
                $('clearLink').style.display = "inline";
                $('displayLink').style.display = "inline";
                $('addNew').style.display = "none";
                $('items').style.display = "none";
                break;
            default:
                return false;
        }
    }
    //storeData function
     function storeData(){
        var id = Math.floor(Math.random()*100000001);
        //Gather up all form field values in an object
        //Object contains an array that contains form label and input value
        getCheckedBoxValues();
           var item            = {};
            item.fname      = ["First Name:", $('fname').value];
            item.lname      = ["Last Name:", $('lname').value];
            item.email      = ["Email:", $('email').value];
            item.birth      = ["Birthday:", $('birth').value];
            item.level      = ["Level:", $('select').value]; 
            item.skills     = ["Skills to Develop", skillValue];
            item.other      = ["Other", $('other').value];
            item.time       = ["Time", $('time').value];
        //Save the data into Local Storage. Use Stringify to convert object to string
        localStorage.setItem(id, JSON.stringify(item)); 
        alert("Contact Saved!");
    }

        function getData(){
            toggleControls("on");
            if(localStorage.length === 0){
                alert("There is no Data Saved!");
            };
          //Write Data from local storage to the browser
          var makeDiv = document.createElement('div');
          makeDiv.setAttribute('id', 'items');
          var makeList = document.createElement('ul');
          makeDiv.appendChild(makeList);
          document.body.appendChild(makeDiv);
          $('items').style.display = "display"; 
          for(var i=0, j=localStorage.length; i<j; i++){
            var makeLi = document.createElement('li');
            var linksLi = document.createElement('li');
            makeList.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value); //Convert string from localStorage back into an object with JSON.parse.
            var makeSubList = document.createElement('ul');
            makeLi.appendChild(makeSubList);
            for (var n in obj){
                var makeSubLi = document.createElement('li');
                makeSubList.appendChild(makeSubLi);
                var optSubText = obj[n][0] + " " + obj[n][1];
                makeSubLi.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi); //Create edit and delete buttons for each item in Local Storage
            
          }
          
            
          
        };
        //Create Edit and Delete links for each stored item when displayed
        function makeItemLinks(key, linksLi ){
            //Add edit single item link
            var editLink = document.createElement('a');
            editLink.href= '#';
            editLink.key = key;
            var editText = "Edit Contact";
            editLink.addEventListener('click', editItem);
            editLink.innerHTML = editText;
            linksLi.appendChild(editLink);
            
            //Add Line Break
            var breakTag = document.createElement('br');
            linksLi.appendChild(breakTag);
            
            //Add Delete Single Item Link
            var deleteLink = document.createElement('a');
            deleteLink.href = '#';
            deleteLink.key = key;
            var deleteText = "Delete Contact";
            //deleteLink.addEventListener('click', deleteItem);
            deleteLink.innerHTML = deleteText;
            linksLi.appendChild(deleteLink);
            
            
        };
        
        function editItem(){
            //Grab Item from Local Storage
            var value = localStorage.getItem(this.key);
            var item = JSON.parse(value);
            
            //Show the form
            toggleControls('off');
            
            //Populate form with stored values
            $('fname').value = item.fname[1];
            $('lname').value = item.lname[1];
            $('email').value = item.email[1];
            $('birth').value = item.birth[1];
            $('select').value = item.level[1];
            //$('skills').value = item.group[1];
            $('other').value = item.other[1];
            $('time').value = item.time[1];
        };
        function clearLocal(){
            if (localStorage.length ===0){
                alert("There is no Data to Clear!");
            } else {
                localStorage.clear();
                alert("All Contacts are Deleted!");
                window.location.reload();
                return false;
            }
        };
    makeLevel();

    //Set Links and Submit Click events
    var displayLink = $('displayLink');
    displayLink.addEventListener('click', getData);
    var clearLink = $('clearLink');
    clearLink.addEventListener('click', clearLocal);
    var save = $('submit');
    save.addEventListener('click', storeData);
});
