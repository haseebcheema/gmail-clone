
// for dropdown button
var dropdown = document.getElementsByClassName("dropdown-btn");
for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if(dropdownContent.style.display === "none"){
      dropdownContent.style.display = "block";            // hide
    }
    else{
      dropdownContent.style.display = "none";           // show
    }
  });
}

// for opening and closing the navigation side bar
function clickNav() {
  var navigation = document.getElementById("mySidebar");
  if(navigation.style.left === "0px"){
    navigation.style.left = "-300px";
    document.getElementById("main").style.left = "0px";
  }
  else{
    navigation.style.left = "0px";
    document.getElementById("main").style.marginLeft = "";
    document.getElementById("main").style.left = "301px";
  }
}

// for compose message button form popup
function openForm() {
  if(document.getElementById("myForm").style.display === "none"){
    document.getElementById("myForm").style.display = "block";
  }
  else{
    document.getElementById("myForm").style.display = "none";
  }
}

// when clicked on minimize and close button, form will be hidden or closed
function hideMyForm(){
  document.getElementById("myForm").style.display = "none";
}

// for app menu show and hide popup
function openApps(){
  if(document.getElementById("app-popup").style.display === "none"){
    document.getElementById("app-popup").style.display = "block";
  }
  else{
    document.getElementById("app-popup").style.display = "none";
  }
}
