/*
Branavi Vaikuntharajan 
ICS 4UR
Oct 9th, 2019
Java Script RECERIVER LOGIN PAGE
*/


/* purposely made a passward and username for login entry to see if this will work*/
/* progress to be made for next assessment: store unames and pwards into one place and allow login if there is a match*/
var tuname = "recTest1";
var tpward = "123";

function checkFor() {
    var uname = document.getElementById("uname").value;
    var pward = document.getElementById("pward").value;
    localStorage.setItem("uname", JSON.stringify(uname));
    localStorage.setItem("pward", JSON.stringify(pward));

    /*if matches, it will send an alert and will bring user to their homepage*/
    if (uname == tuname) {
        if (pward == tpward) {
            alert("Successful Login");
            open("RecHpg.html");
            /*alert made in the case username and passward does not match*/
        } else {
            alert("Incorrect login information");
        }
    }
}

/*first attempt
var uname = document.login.username.value;
var pward = document.login.password.value;
var i = 0;


function checkFor() {
    if (form.uname.value === "receiver" && form.pward.value === "123") {
        window.open("RecHpg.html");
    } else {
        
        alert("Error Password or Username");
    }
}
*/
