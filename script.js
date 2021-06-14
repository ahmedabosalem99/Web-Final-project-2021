/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("mylinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function myFunction1() {
    var x = document.getElementById("productivity");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function myFunction2() {
    var x = document.getElementById("habits");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function myFunction3() {
    var x = document.getElementById("skills");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function myFunction4() {
    var x = document.getElementById("arts");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function hide1() {
    var x =document.getElementById("header");
    var y =document.getElementById("parent");
    var z =document.getElementById("signin-form");
    if (z.style.display === "flex") {
      z.style.display = "none";
      x.style.display = "block";
      y.style.display = "flex";
    } else {
      z.style.display = "flex";
    }
  }
    function hide2() {
      var x =document.getElementById("header");
      var z =document.getElementById("signin-form");
      var s =document.getElementById("section");
      var f =document.getElementById("footer");
      if (z.style.display === "flex") {
        z.style.display = "none";
        x.style.display = "block";
        s.style.display = "block";
        f.style.display = "block";
      } else {
        z.style.display = "flex";
      }
  }
  function appear1(){
    var x =document.getElementById("header");
    var y =document.getElementById("parent");
    var z =document.getElementById("signin-form");
    if (z.style.display === "none") {
      z.style.display = "flex";
      x.style.display = "none";
      y.style.display = "none";
      
      
    } else {
      z.style.display = "none";
    }
  }
  function appear2(){
    var x =document.getElementById("header");
    var z =document.getElementById("signin-form");
    var s =document.getElementById("section");
    var f =document.getElementById("footer");
    if (z.style.display === "none") {
      z.style.display = "flex";
      x.style.display = "none";
      s.style.display = "none";
      f.style.display = "none"; 
    } else {
      z.style.display = "none";
    }
  }
  