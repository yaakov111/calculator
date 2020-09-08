
var full1;
var full2;
var dif1;
var dif2;
var dif3;
var days;
var rezo;
var www=1;





function fullclik(){
 document.getElementById("full").style.background = '#FAFAD2';
 document.getElementById("difference").style.background = '#ffffff';
 document.getElementById("1").innerHTML = "מחיר החבילה";
 document.getElementById("2").innerHTML = "מספר הימים בעבורם שולם";
 document.getElementById("t").value = "";
  document.getElementById("u").value = "";
    document.getElementById("4").value = "";
    rez.innerHTML= "";
 document.getElementById("3").style.display = 'none';
  document.getElementById("4").style.display = 'none';
    days = 0;
    www=0;
     document.getElementById("exp").innerHTML = "";
}
function diffclik() {
document.getElementById("difference").style.background = '#FAFAD2';
document.getElementById("full").style.background = '#ffffff';
document.getElementById("1").innerHTML = "מחיר חדושי עם תוכנית";
document.getElementById("2").innerHTML = "מחיר חודשי ללא תוכנית";
document.getElementById("t").value = "";
 document.getElementById("u").value = "";
  document.getElementById("4").value = "";
  rez.innerHTML= "";
document.getElementById("3").style.display = 'inline-block';
 document.getElementById("4").style.display = 'inline-block';
   days = 0;
   www=0;
    document.getElementById("exp").innerHTML = "הזיכוי המגיע ללקוח במקרה של חיוב ללא חבילה מספר ימים הפחות מחודש ויש לזכות אותו בסכום ההפרשים";
}

function date(selct){
  if(selct==28){
    days = 28;
  document.getElementById(selct).style.background = '#FAFAD2';
  document.getElementById("29").style.background = '#ffffff';
  document.getElementById("30").style.background = '#ffffff';
  document.getElementById("31").style.background = '#ffffff';
}
if(selct==29){
    days = 29;
document.getElementById(selct).style.background = '#FAFAD2';
document.getElementById("28").style.background = '#ffffff';
document.getElementById("30").style.background = '#ffffff';
document.getElementById("31").style.background = '#ffffff';
}
if(selct==30){
    days = 30;
document.getElementById(selct).style.background = '#FAFAD2';
document.getElementById("29").style.background = '#ffffff';
document.getElementById("28").style.background = '#ffffff';
document.getElementById("31").style.background = '#ffffff';
}
if(selct==31){
    days = 31;
document.getElementById(selct).style.background = '#FAFAD2';
document.getElementById("29").style.background = '#ffffff';
document.getElementById("30").style.background = '#ffffff';
document.getElementById("28").style.background = '#ffffff';
}
}

function cal() {
 if(www==0){
    full1 = document.getElementById("t").value;
    full2 = document.getElementById("u").value;
    rezo = (full1/days)*full2;
             rez.innerHTML= rezo;
  }else if (www==1) {
    dif1 = document.getElementById("t").value;
    dif2 = document.getElementById("u").value;
    dif3 = document.getElementById("4").value;
    rezo = ((dif2/days)*dif3)-((dif1/days)*dif3)
     rez.innerHTML= rezo;
  }

}
