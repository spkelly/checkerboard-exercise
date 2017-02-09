// Your JS goes here
var body = document.getElementsByTagName('body')[0];
console.log(body);
for (var i = 0; i < 81; i++) {
  var box = document.createElement('div');
  box.style.width = '11.1%';
  box.style.float = 'left';
  box.style.paddingBottom = "11.1%";
  if(i % 2 == 0){
    box.style.backgroundColor = "red";
  }
  else {
    box.style.backgroundColor = "black";
  }
  body.appendChild(box);
  console.log();

}


function generateRandomColor(){
  var red=(Math.floor(Math.random() * 255));
  var grn=(Math.floor(Math.random() * 255));
  var blu=(Math.floor(Math.random() * 255));

  return ("rgb(" + red + "," + grn + "," + blu +")");

}
