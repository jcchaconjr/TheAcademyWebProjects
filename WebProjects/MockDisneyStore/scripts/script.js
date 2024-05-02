
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
    let tbl = `<tr>\n<th>Character</th>\n<th>Rank</th>\n</tr>`;

    for (let i = 0; i < characters.length; i++) {
        let charRank = i + 1;
        foundMickey = /Mickey Mouse/i.test(characters[i]);
        mickeyInList = mickeyInList | foundMickey;
        if (foundMickey) {
            goldenBackground = " style=\'background-color:#fbbe4f;\'";
        }
        tbl += "<tr><td" + goldenBackground + ">" + characters[i] + "</td><td style=\'text-align:center;\'>" + charRank + "</td></tr>\n";
        goldenBackground = "";
    }
    fillTable.innerHTML = tbl;
    if (mickeyInList) {charTable.innerHTML += "<br><h1>Once again, Mickey Mouse is one of our best sellers!</h1>";}

    if (characters.length > 0) {
        charTable.style["display"] = "block";
    }
}