var one=document.createElement('h3')
one.innerHTML ='Simple event handler'
document.body.append(one)


var button=document.createElement('input')
button.setAttribute('type','submit')
button.setAttribute('onclick','Date1()')
button.setAttribute('value','click here')
document.body.append(button)
 
var output1 = document.createElement('label')
output1.setAttribute('type','text')
output1.setAttribute('id', 'time')
document.body.append(output1)
 
function Date1()
{
    var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     document.getElementById("time").innerHTML= "Today's date is " +date
 }

 var two=document.createElement('h3')
two.innerHTML ='1.Create a div and change the color onmouse over'
document.body.append(two)

var division = document.createElement('div')
division.setAttribute('class','div1')
division.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime quos tempora nam dolore, quia aliquid."
document.body.append(division)

var three=document.createElement('h3')
three.innerHTML ='2.Div swap'
document.body.append(three)

var division2 = document.createElement('div')
division2.setAttribute('id','div2')
division2.innerHTML="I am DIV 1."
document.body.append(division2)

var division3 = document.createElement('div')
division3.setAttribute('id','div3')
division3.innerHTML="I am DIV 2."
document.body.append(division3)

var button2=document.createElement('input')
button2.setAttribute('type','submit')
button2.setAttribute('onclick','swap()')
button2.setAttribute('value','click to swap')
document.body.append(button2)

function swap()
{
    var temp = document.getElementById("div2").innerHTML
    document.getElementById("div2").innerHTML = document.getElementById("div3").innerHTML
    document.getElementById("div3").innerHTML = temp
}

var four=document.createElement('h3')
four.innerHTML ='3 &4.Email & password,phone number validation'
document.body.append(four)

var lb1 = document.createElement('label')
lb1.setAttribute('type','text')
lb1.setAttribute('for','mailinput')
lb1.innerHTML="enter your email id "
document.body.append(lb1)

var mail=document.createElement('input')
mail.setAttribute('id','mailinput')
mail.setAttribute('type','email')
   
mail.setAttribute('placeholder','EMAIL goes here')
document.body.append(mail)

var nxline = document.createElement('br')
document.body.append(nxline)

var lb2 = document.createElement('label')
lb2.setAttribute('type','text')
lb2.setAttribute('for','pwd1')
lb2.innerHTML="enter your password "
document.body.append(lb2)

var pwd=document.createElement('input')
pwd.setAttribute('id','pwd1')
pwd.setAttribute('type','password')
pwd.attributes.required 
pwd.setAttribute('placeholder','password goes here')
document.body.append(pwd)

var nxline3 = document.createElement('br')
document.body.append(nxline3)

var lb3 = document.createElement('label')
lb3.setAttribute('type','text')
lb3.setAttribute('for','phn')
lb3.innerHTML="enter your phone number "
document.body.append(lb3)

var phone=document.createElement('input')
phone.setAttribute('id','phn')
phone.setAttribute('type','text')
phone.attributes.required 
phone.setAttribute('placeholder','phone number goes here')
document.body.append(phone)

var nxline1 = document.createElement('br')
document.body.append(nxline1)

var button3=document.createElement('input')
button3.setAttribute('type','submit')
button3.setAttribute('onclick','validate()')
button3.setAttribute('value','login')
document.body.append(button3)

function validate()
{
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var reg2 =/^\d{10}$/;
    if (document.getElementById("phn").value.length <10 ||document.getElementById("pwd1").value.length == 0 || document.getElementById("mailinput").value.length == 0 || reg.test(document.getElementById("mailinput").value)==false ||document.getElementById("pwd1").value.match(reg2)==false )
    { 
alert("please enter all details in correct format \n please recheck")
    }
    
    else if( document.getElementById("pwd1").value == 123)
    {
        alert("welcome validation is successful")
    }
    else
    {
        alert("for new users user default PWD : 123")
    }
}

var five=document.createElement('h3')
five.innerHTML ='5.Roll over images'
document.body.append(five)

var img1 =document.createElement('img')
img1.setAttribute('src','one.png')
img1.setAttribute('height','100')
img1.setAttribute('width','100')
img1.setAttribute('class','images')
document.body.append(img1)





