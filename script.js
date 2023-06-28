function startGame() {
    var gameCode = document.getElementById("game-code").value;

    if (gameCode) {
        document.getElementById("start-screen").style.display = "none";
        document.getElementById("game-screen").style.display = "block";
    }
}

function displayMatchup() {
    var string1 = document.getElementById("string1").value;
    var string2 = document.getElementById("string2").value;
    var matchupElement = document.getElementById("matchup");

    if (string1 && string2) {
        var matchup = string1 + " vs. " + string2;
        matchupElement.textContent = matchup;
    }
}

function loadTable() {
    var string1 = document.getElementById("string1").value;
    var string2 = document.getElementById("string2").value;
    var table = document.getElementById("games");
    // if (matchupElement.val() != null) {
    //     matchupElement.append("<tbody></tbody>")
    // }
    table.append(string1);
    table.append(string2);
}
