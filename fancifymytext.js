function alerts() {
	alert("Hello, world!");
}

alerts();

function bigger() {
  alerts();
  document.getElementById("typeHere").style.fontSize = "24pt";
}

function fancyShmancy() {
  var text = document.getElementById("typeHere");
  text.style.fontWeight = "bold";
  text.style.color = "blue";
  text.style.textDecoration = "underline blink";
  
}

function fancyAlert() {
	alert("fancy time");
}

function boringBetty() {
  var text = document.getElementById("typeHere");
  text.style.fontWeight = "normal";
  text.style.color = "black";
  text.style.textDecoration = "none";
  
}

function mooChange() {
  var ending = "-Moo";
  textHere = document.getElementById("typeHere");
  textHere.style.textTransform = "uppercase";
  textHere.value = textHere.value.split(".").join("") + ending;
}
