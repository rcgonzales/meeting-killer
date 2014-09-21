

$( document ).ready(function() {
    console.log( "ready!" );
    $( "#test01" ).after( "<p>Who are you?</p>" );
    log("function test");
});

function log( comment ){

	writeIt2();
	
	console.log(" -- ");
    console.log(userP.getFullName());
    console.log(userP.first);
	console.log(user002.getName());
	console.log(user001.getName());
	console.log(x.getValue() );
	writeIt();
	console.log(comment);
	console.log(what("sailing"));
	console.log(doCalc(3,4,addFunction));
	console.log(doCalc(4,6,multFunction));
	console.log(doCalc(24,8,function(n1,n2){return n1/n2}));
}

function sqrRoot(x) {
    try {
        if(x=="")    throw {message:"Can't Square Root Nothing"};
        if(isNaN(x)) throw {message:"Can't Square Root Strings"};
        if(x<0)      throw {message:"Sorry No Imagination"};
        return "sqrt("+x+") = " + Math.sqrt(x);
    } catch(err){
        return err.message;
    }
}

function writeIt2(){
    console.log(sqrRoot("four"));
    console.log(sqrRoot(""));
    console.log(sqrRoot("4"));
    console.log(sqrRoot("-4"));
}














function UserP(first, last){
	this.first = first;
	this.last = last;
}

UserP.prototype = {
	getFullName: function(){
		return this.first + " " + this.last;
	}
};

var userP = new UserP("Tabor","Smells");


function User002(fname, lname){
	this.first = fname;
	this.last = lname;
	this.getName = function(){return this.first + " " + this.last;}
};

var user002 = new User002("Tabor", "Stinks");


var user001 = new Object();
user001.first="Tabor";
user001.last="Hejl";
user001.getName = function(){return this.first + " " + this.last;}


var x = {
	name: "My Object",
	value: 7,
	getValue: function(){return this.name + "-" +this.value}
};

function what( action ){

	return "Tabor is " + action;
}

function doCalc(n1,n2,calcFunction){
 	return calcFunction(n1,n2);
}

function addFunction(n1,n2){
	return n1 + n2;
}

function multFunction(n1,n2){
	return n1 * n2;
}


 var myVar = 1;

 function writeIt(){

   var myVar = 2;

   console.log("Variable = " + myVar);

   writeMore();

 }

 function writeMore(){

   console.log("Variable = " + myVar);

 }

 








