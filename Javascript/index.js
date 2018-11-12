document.getElementById('date').innerHTML = new Date().toDateString();

var counter = 0;
// to remove from global namespace
(function() {

var sz = document.forms['mathForm'].elements['mathtype'];

for (var i=0, len=sz.length; i<len; i++) {
    sz[i].onclick = function() {
        this.form.elements.total.value = this.value;
    };
}

// disable submission of all forms on this page
for (var i=0, len=document.forms.length; i<len; i++) {
    document.forms[i].onsubmit = function() { return false; };
}

}());


function getEasy() {
if(document.getElementById("easy").checked === true){
document.getElementById("Value1").value = Math.floor((Math.random() * 10));
document.getElementById("Value2").value = Math.floor((Math.random() * 10));
};
}
function getMedium() {
if(document.getElementById("medium").checked === true){
document.getElementById("Value1").value = Math.floor((Math.random() * 1000));
document.getElementById("Value2").value = Math.floor((Math.random() * 1000));
};
}
function getHard() {
if(document.getElementById("hard").checked === true){
document.getElementById("Value1").value = Math.floor((Math.random() * 10000));
document.getElementById("Value2").value = Math.floor((Math.random() * 10000));
};
}
function check() {
var v1 = document.getElementById("Value1");
var v2 = document.getElementById("Value2");
var sum = document.getElementById("sum");
var math = document.getElementById("math");
var val1 = parseInt(v1.value);
var val2 = parseInt(v2.value);
var tot = parseInt(sum.value);
var win = false;

if(math.value === "+")
{
    if(val1 + val2 === tot)
    {
        counter++;
        alert("Rätt,"+ counter +" i rad " +"! Här kommer nästa.")
        win = true;
    }
    else 
    {
        alert("Fel, försök igen");
        counter = 0;
      
    }
}
else if(math.value === ("-"))
{
     if(val1 - val2 === tot)
     {
        counter++;
        alert("Rätt,"+ counter +" i rad " +"! Här kommer nästa.")
        win = true;
    }
    else 
    {
        alert("Fel, försök igen");
        counter = 0;
     
    }

}
else if(math.value === ("/"))
{
    if(val1 / val2 === tot)
    {
        counter++;
        alert("Rätt,"+ counter +" i rad " +"! Här kommer nästa.")
        win = true;
    }
    else 
    {
        alert("Fel, försök igen");
        counter = 0;
     
    }
}
else if(math.value === ("*"))
{
     if(val1 * val2 === tot)
     {
        counter++;
        alert("Rätt,"+ counter +" i rad " +"! Här kommer nästa.")
        win = true;
    }
    else 
    {
        alert("Fel, försök igen");
        counter = 0;
       
    }

}
if(win === true)
{
     if(document.getElementById("easy").checked === true){
            getEasy();
        }
        else if(document.getElementById("medium").checked === true)
        {
            getMedium();
        }
        else if(document.getElementById("hard").checked === true)
        {
            getHard();
        }
}
};
