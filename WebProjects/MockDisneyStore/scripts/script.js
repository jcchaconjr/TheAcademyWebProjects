


function loginClick() {

/*     let characters = ["Mickey Mouse", "Minnie Mouse", "Goofy", "Donald Duck", "Pluto"];
    let charHeader = document.getElementById("header-fill");
    let charTable = document.getElementById("table-fill"); */


    const username = document.getElementById("uname");
    document.getElementById("user-string").innerHTML = "Hi, " + username.value + "!";
    document.getElementById("uname").value = "";
    document.getElementById("pword").value = "";
    location.href = "#";
}

function loadTable() {
    let characters = ["Mickey Mouse", "Minnie Mouse", "Goofy", "Donald Duck", "Pluto"];
    let charTable = document.getElementById("div-load");
    for (let i = 0; i < characters.length; i++) {
        let charRank = i + 1;
        let	tr = "<tr><td>" + characters[i] + "</td><td style=\'text-align:center;\'>" + charRank + "</td></tr>";
        document.getElementById("table-fill").innerHTML += tr;
    }
    if (characters.length > 0) {
        charTable.style["display"] = "block";
    }
}

