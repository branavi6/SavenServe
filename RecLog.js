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
