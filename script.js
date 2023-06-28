function startGame() {
    var gameCode = document.getElementById("game-code").value;

    if (gameCode) {
        document.getElementById("start-screen").style.display = "none";
        document.getElementById("game-screen").style.display = "block";
    }
}

function loadTable() {
    var table = document.getElementById("games");
    var row= document.createElement("tr")
    var t1 = document.createElement("td");
    var t2 = document.createElement("td");

    t1.innerHTML = document.getElementById("team1").value;
    t2.innerHTML = document.getElementById("team2").value;

    row.appendChild(t1);
    row.appendChild(t2);

    table.children[0].appendChild(row);

    document.getElementById("team1").reset();
    document.getElementById("team2").reset();

}

function saveTable() {
    var table = document.getElementById("games");
    var row= document.createElement("tr")
    var t1 = document.createElement("td");
    var t2 = document.createElement("td");

    t1.innerHTML = document.getElementById("team1").value;
    t2.innerHTML = document.getElementById("team2").value;

    row.appendChild(t1);
    row.appendChild(t2);

    table.children[0].appendChild(row);

    document.getElementById("team1").reset();
    document.getElementById("team2").reset();

}

