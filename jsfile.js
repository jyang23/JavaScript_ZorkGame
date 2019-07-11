var init = 0;
var foyer = 0;
var diningroom = 0;
var frontroom = 0;
var kitchen = 0;
var parlor = 0;
var secretroom = 0;
var vault = 0;
var library  = 0;
var total = 0;


function GoldPlating() {
    alert ("Gold Plating :)");
}

function Zork(){
    v = document.getElementById("command").value;
    document.getElementById("message").innerHTML = "<b>You said: " + v + "</b>"

    if(document.getElementById("command").value == "attack")
    {
        document.getElementById("message").innerHTML = "<b>You didn't die :)...yet</b>"
    }
    if(document.getElementById("command").value == "kill")
    {
        document.getElementById("message").innerHTML = "<b>That was a close one!</b>"
    }
    if(document.getElementById("command").value == "dodge")
    {
        document.getElementById("message").innerHTML = "<b>Phew, it barely missed</b>"
    }
    if(document.getElementById("command").value == "boo")
    {
        document.getElementById("message").innerHTML = "<b>I wonder why that worked?</b>"
    }
    if(document.getElementById("command").value == "fire extinguisher")
    {
        document.getElementById("message").innerHTML = "<b>Cough Cough, the smoke is unbearable</b>"
    }
    if(document.getElementById("command").value == "hot tea")
    {
        document.getElementById("message").innerHTML = "<b>You know, maybe she was a good witch and you just killed her :(</b>"
    }
    if(document.getElementById("command").value == "no")
    {
        document.getElementById("message").innerHTML = "<b>Okay, you're dead</b>"
        alert("You just died, you will be redirected to main page in 5 sec.");
        setTimeout('Redirect()', 5000);
    }
}

function Redirect() {
    window.location = "http://localhost:63342/ZorkJavaScript/ZorkGame.html?_ijt=fnaikj4t13nukonqd9op958sni";
}


function money()
{
    document.getElementById("myText").innerHTML = document.cookie;
}

function initial()
{
    init = 0;
    foyer = 0;
    diningroom = 0;
    frontroom = 0;
    kitchen = 0;
    parlor = 0;
    secretroom = 0;
    vault = 0;
    library  = 0;
    total = 0;
    document.cookie = total;
}

function myFunctionMoneyFoyer()
{
    if(foyer == 0)
    {
        var init = 0;
        document.getElementById("myText").innerHTML = +document.getElementById("myText").innerHTML+ +456;
        total = document.getElementById("myText").innerHTML;
        document.cookie = total;
        foyer++;
    }
    else
    {
        alert ("You Already Picked Up This Cash!!");
    }
}

function myFunctionMoneyFrontRoom()
{
    if(frontroom == 0)
    {
        document.getElementById("myText").innerHTML = +document.getElementById("myText").innerHTML+ +100;
        total = document.getElementById("myText").innerHTML;
        document.cookie = total;
        frontroom++;
    }
    else
    {
        alert ("You Already Picked Up This Cash!!");
    }
}

function myFunctionMoneyLibrary()
{
    if(library == 0)
    {
        document.getElementById("myText").innerHTML = +document.getElementById("myText").innerHTML+ +20;
        total = document.getElementById("myText").innerHTML;
        document.cookie = total;
        library++;
    }
    else
    {
        alert ("You Already Picked Up This Cash!!");
    }
}

function myFunctionMoneyDiningRoom()
{
    if(diningroom == 0)
    {
        document.getElementById("myText").innerHTML = +document.getElementById("myText").innerHTML+ +167;
        total = document.getElementById("myText").innerHTML;
        document.cookie = total;
        diningroom++;
    }
    else
    {
        alert ("You Already Picked Up This Cash!!");
    }
}

function myFunctionMoneyVault()
{
    if(vault == 0)
    {
        document.getElementById("myText").innerHTML = +document.getElementById("myText").innerHTML+ +2001;
        total = document.getElementById("myText").innerHTML;
        document.cookie = total;
        vault++;
    }
    else
    {
        alert ("You Already Picked Up This Cash!!");
    }
}

function myFunctionMoneyParlor()
{
    if(parlor == 0)
    {
        document.getElementById("myText").innerHTML = +document.getElementById("myText").innerHTML+ +5;
        total = document.getElementById("myText").innerHTML;
        document.cookie = total;
        parlor++;
    }
    else
    {
        alert ("You Already Picked Up This Cash!!");
    }
}

function myFunctionMoneyKitchen()
{
    if(kitchen == 0)
    {
        document.getElementById("myText").innerHTML = +document.getElementById("myText").innerHTML+ +91;
        total = document.getElementById("myText").innerHTML;
        document.cookie = total;
        kitchen++;
    }
    else
    {
        alert ("You Already Picked Up This Cash!!");
    }
}

function myFunctionMoneySecretRoom()
{
    if(secretroom == 0)
    {
        document.getElementById("myText").innerHTML = +document.getElementById("myText").innerHTML+ +89;
        total = document.getElementById("myText").innerHTML;
        document.cookie = total;
        secretroom++;
    }
    else
    {
        alert ("You Already Picked Up This Cash!!");
    }
}