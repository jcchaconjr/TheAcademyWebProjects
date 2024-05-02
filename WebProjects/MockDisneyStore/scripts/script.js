
let characters = [ "Mickey Mouse", "Minnie Mouse", "Goofy", "Donald Duck", "Pluto"];

function loginClick() {

    const username = document.getElementById("uname");

    document.getElementById("user-string").innerHTML = "Hi, " + username.value + "!";
    document.getElementById("uname").value = "";
    document.getElementById("pword").value = "";
    location.href = "#";
}

function loadTable() {

    let charTable = document.getElementById("div-load");
    let fillTable = document.getElementById("table-fill");
    let goldenBackground = "";
    let mickeyInList = false;

    for (let i = 0; i < characters.length; i++) {
        let charRank = i + 1;
        foundMickey = /Mickey Mouse/i.test(characters[i]);
        mickeyInList = mickeyInList | foundMickey;
        if (foundMickey) {
            goldenBackground = " style=\'background-color:#fbbe4f;\'";
        }
        let	tr = "<tr><td" + goldenBackground + ">" + characters[i] + "</td><td style=\'text-align:center;\'>" + charRank + "</td></tr>";
        fillTable.innerHTML += tr;
        goldenBackground = "";
    }
    if (mickeyInList) {charTable.innerHTML += "<h1>Once again, Mickey Mouse is one of our best sellers!</h1>";}

    if (characters.length > 0) {
        charTable.style["display"] = "block";
    }
}