// EXTRAS

// console.log(0&1);
// console.log(0|1);
// console.log(0^1);
// console.log(~1);
// console.log(7>>2);   // 00000000000000000000000000000111 >> 00000000000000000000000000000001
// console.log(7<<2);  // 00000000000000000000000000000111 <<  00000000000000000000000000011100
// console.log(7>>>2); // 00000000000000000000000000000111 >>> 00000000000000000000000000000001

// console.log(dec2bin(7));
// console.log(bin2dec(111));


// function bin2dec(bin){
//     return parseInt(bin,2).toString(10);
// }

// function dec2bin(dec){
//     return dec.toString(2);
// }

// console.log(String(31+32));

// console.log((new Date()).constructor === Date);


// LOOPS

// alifAllah:{
//     console.log("yes!");
//     console.log("I am invincible");
//     break alifAllah;
//     console.log("and imfaisal");
// }



// var arry = ["mfaisal","amad","mali","faisal"]
// var i = 0;
// var text="";

// for (;arry[i];) {
//     text += arry[i] + "<br>";
//     i++;
// }
// console.log(text);


// while (arry[i]) {
//     text += arry[i] + "<br>";
//     i++;
// }
// console.log(text);


// while(arry[i]){
//     console.log(arry[i]);
// }


// var i =0;

// do{
//     console.log(i);
//     i++;

// }while(i<10);




// var i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }


// var car ={model:"2018",name:"BMW",price:"1m"};

// for(c in car){
//     console.log(car[c]);
// }



// var arry = ["mfaisal","amad","mali","faisal"]

// for(i=0, text="";i<arry.length;i++){
//     console.log(arry[i]);
//     text+=arry[i]+" ";
// }

// text = "only mfaisal";
// console.log(text);


// BOOLEAN

// var text="";
// switch(new Date().getDay()){
//     case 0:
//     case 1:
//     case 2:
//         text = "Start of the week."
//         break;
//     case 3:
//     case 4:
//         text = "Thats middle of the week."
//         break;
    
//     case 5:
//     case 6:
//         text = "Bad Weekend."
//         break;
//     default:
//         text = "someother day."
//         break;

// }

// console.log(text);

// var x = 5;
// var y = "5";
// if(x==y){
//     console.log((x==y));
// }
// if(x===y){
//     console.log((x===y));
// }
// else if(x!==y){
//     console.log("x!==y");
// }
// else{
//     console.log((x===y));    
// }
// var a = "5"+5 + 5;
// console.log(a)


// var x = true;
// var obj = new Boolean(true);
// console.log((x===obj))

// var x = 0;

// console.log(Boolean(x));

// ARRAYS

// var points = [40, 100, 1, 5, 25, 10];

// points.sort(function(a,b){return a-b});

// console.log(points);

// console.log(Math.max.apply(null,points));

// function displayDate(){
//     document.getElementById("btn_click").innerHTML = Date();
// }


// var items =["vegs","fruits","soap",4.5,45,'a'];
// var myGirls = ["Cecilie", "Lone"];

// // var array = [0,0]
// // array[0] = items;
// // array[1] =  displayDate;
// console.log(items);

// console.log(items.concat(myGirls));


// console.log(items.shift());
// console.log(items.splice(0,3));

// console.log(items);


// console.log(items.unshift("mfaisal"));

// // delete items[0];

// console.log(items);


// items.push("mfaisal");

// items[items.length] = "mali";

// var poped = items.pop();
// console.log(poped);

// for(i = 0;i<items.length;i++){
//     console.log(items[i]);
// }

// console.log(items.constructor.toString().indexOf("Array")>-1);
// console.log(items instanceof Array);
// console.log(items.join("$"));

// console.log(array.length);
// console.log(array.sort());





// console.log(items);
// items[0] = "Meat";
// console.log(items[0]);

// var itemswithNew = new Array("vegs","fruits","soap")  // this one is bit slower




// DATES
// var today, someday;
// today = new Date();
// someday = new Date();
// someday.setFullYear(2020,2,22);

// if(today < someday){
//     console.log("Future is coming!");
// }
// else{
//     console.log("We are back in time!");
// }


// var date = new Date("2015-03-25");
// console.log(date.getTime());


// function getRand(min,max){
//     return Math.floor(Math.random()*(max-min+1))+min;
// }

// console.log(getRand(1,100));


// console.log(Math.random());

// console.log(Math.cos(0*Math.PI/180));


// var x = 23;
// var y = x.MAX_VALUE;
// console.log(x);
// console.log(y);



// console.log(Number.MIN_VALUE);

// console.log(parseFloat("10.100"));
// console.log(parseInt("10.10"));

// console.log(Number(new Date("01-01-2001")));
// console.log(typeof(Number("10L"))+" "+Number("10 4"));


// var temp = 32;
// console.log(temp.valueOf())

// var number = 9.656;

// console.log(number.toPrecision(2));

// var y = new Number(number);
// console.log(typeof(y));
// console.log(typeof(number));
// console.log(number.toString(16));
// console.log(number.toString(8));
// console.log(number.toString(2));



// var x = -2;
// var y = 0;
// console.log(0xAF);




// var num = (0.2*10+0.1*10)/10;
// console.log(num);



// var str = "mfaisal";
// var arriya = str.split("");
// console.log(arriya);

// console.log(str.concat(":","genius"))

// console.log(str.toLowerCase())

// var replaced = str.replace(/faisal/g,"ali");

// console.log("replaced: "+replaced);


// var len = str.length;

// var index = str.search("is");

// console.log("index: "+index);

// var part = str.substr(index);

// console.log("part: "+part);





// function test(){
//     name = "mfaisal";
// }
// var name="mfaisal";
// function justTest(){
//     window.alert(window.name);
// }


// test();



// var car = {
//     name:"corolla",
//     company:"toyota",
//     made:2016,
//     drive:function(){
//         return this.name+" is driving now.";
//     } 
// }

// console.log(car.drive());



// function testFunction(a,b){
//     return a*b;
// }

// document.getElementById("demo").innerHTML=testFunction(3,4);

// var value = testFunction(3,2);
// console.log(value);


// var listItem = ["mfaisal","ali","amad",1];
// var objectItem = {name:"mfaisal",occupation:"engineer"};
// var value = (null===undefined);


// var a = 5;
// var b = 6;
// var c = (a==b);

// var temp = "mfaisal XC60";

// var name = "mfaisal";
// var name;

// console.log(typeof(function f(){}));
// document.getElementById("demo").innerHTML=type(x);
// document.getElementById("demo").style.fontSize="20px";
// // document.getElementById("demo").style.display = "none";\
// document.write("Pakistan Zindabad!");


