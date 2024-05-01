
let characters = ["Mickey Mouse", "Minnie Mouse", "Goofy", "Donald Duck", "Pluto"];
let charHeader = document.getElementById("header-fill");
let charTable = document.getElementById("table-fill");


function loginClick() {

    const username = document.getElementById("uname");
    document.getElementById("user-string").innerHTML = "Hi, " + username.value + "!";
    document.getElementById("uname").value = "";
    document.getElementById("pword").value = "";
    location.href = "#";
}

