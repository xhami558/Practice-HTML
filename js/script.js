/*alert("Hello");
console.log('Hello');
var name="Warda";
var age="20";
alert(name + " is " + age);
var fruit=["Orange","Apple","Mango"];
document.write("I have "+ fruit.length + " fruits.");
var favouritefruit=["Orange","Apple","Mango"];
document.write("My favouritefruit is " + fruit);
fruit[1]="Pineapple";
console.log(fruit);*/
//new code
/*document.write("<br>");
var fruit=["Orange","Apple","Mango"];
for(var i=0; i<fruit.length; i++)
{
  document.write("Fruit is" + i);
  document.write("<br>");
  document.write("Fruite name is" + fruit[i]);
  document.write("<br>")
}
//new code
fruit.push("Apple");
fruit.push("Banana");
fruit= fruit.concat("Appricot","Orange")
document.write(fruit);
document.write("<br>")
for( var i=0 ;i<fruit.length; i++)
{
  document.write(fruit[i]);
}*/
//new code
var fruit=["Orange","Apple","Banana"]
var printlist=function (list) {
  for(var i=0; i<fruit.length; i++)
  {
  document.write(list[i]);
  document.write("<br>");
  };
  document.write("These are my favourie things" + "<br>");
};
printlist(fruit);
var car=["Corolla","City"]
printlist(car);
var iceCream=["vanella","stawbery"];
printlist(iceCream);
