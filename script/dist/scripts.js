var openerList = ["Did you see that ludicrous display last night"];
var arsenalList = ["Thing about Arsenal is they always try walk it in!", "Look if they can keep Sanchez and Ozil who knows...", "They're just one or two players short from being the real deal...", "D'you see Arsenal Fan TV last night?", "D'you know Wenger nearly signed (insert any player here)?"];
var manchesterList = ["See that's typical Mourinho there", "They just park the bus against big teams.", "The mind games have started"];
var liverpoolList = ["Klopp needs to sort out that defence.", "Never gonna win the league with that defence...", "They're just one or two players short from being the real deal...", "If they have the Fab 4, then Daniel Sturridge is Pete Best", "They've got some of the best fans in England."];
var chelseaList = ["I don't think Abramovich and (current Chelsea manager) get on that well...", "David Luiz has come back a much better player", "Never should've sold Matic..."];
var newcastleList = ["Sure look, they're the sleeping giant of English football.", "They've got some of the best fans in England.", "If they get rid of Ashley, they'll be grand"];
var rounds = 0;
var currentTeam = "None";
var currentSaying;
// this method needs to be refactored
var findPhrase = function () {
    rounds++;
    if (rounds == 1) {
        opener();
        currentTeam = "None";
    }
    else {
        // pick whether to talk about a new team
        // 10% chance to start talking about another team
        if (!(Math.floor((Math.random() * 3) + 1) == 1) && !(currentTeam == "None")) {
            // don't pick new team
            switch (currentTeam) {
                case "Arsenal":
                    arsenal();
                    break;
                case "Manchester":
                    manchester();
                    break;
                case "Liverpool":
                    liverpool();
                    break;
                case "Chelsea":
                    chelsea();
                    break;
                case "Newcastle":
                    newcastle();
                    break;
                default:
                    alert("Error, new team not found!");
                    break;
            }
        }
        else {
            var newTeam = Math.floor(Math.random() * 5); // change integer for amount of teams
            // pick new team to talk about
            switch (newTeam) {
                case 0:
                    arsenal();
                    break;
                case 1:
                    manchester();
                    break;
                case 2:
                    liverpool();
                    break;
                case 3:
                    chelsea();
                    break;
                case 4:
                    newcastle();
                    break;
                default:
                    alert("Error, new team not found!");
                    break;
            }
        } // end of new team
        // end of ongoing convosation
    }
};
var getOpener = function () {
    var openerIndexOffset = Math.floor(Math.random() * openerList.length);
    say(openerList[openerIndexOffset]);
};
// team sayings
// TODO: I need to refactor this code
var arsenal = function () {
    currentTeam = "Arsenal";
    var temps = Math.floor(Math.random() * arsenalList.length);
    say(arsenalList[temps]);
};
var manchester = function () {
    currentTeam = "Manchester";
    var temps = Math.floor(Math.random() * manchesterList.length);
    say(manchesterList[temps]);
};
var liverpool = function () {
    currentTeam = "Liverpool";
    var temps = Math.floor(Math.random() * liverpoolList.length);
    say(liverpoolList[temps]);
};
var chelsea = function () {
    currentTeam = "Chelsea";
    var temps = Math.floor(Math.random() * chelseaList.length);
    say(chelseaList[temps]);
};
var newcastle = function () {
    currentTeam = "Newcastle";
    var temps = Math.floor(Math.random() * newcastleList.length);
    say(newcastleList[temps]);
};
// print function
var say = function (phrase) {
    // check that the new saying is not the same as is currently printed
    if (phrase === currentSaying) {
        findPhrase();
        return;
    }
    var responseElement = document.getElementById("responce");
    var teamElement = document.getElementById("currentTeam");
    if (responseElement !== undefined && teamElement !== undefined && responseElement !== null && teamElement !== null) {
        responseElement.innerHTML = phrase;
        teamElement.innerHTML = teamElement.innerHTML = "<u><strong>Team: " + currentTeam + "</u></strong>";
        currentSaying = phrase;
    }
    else {
        console.error("Unexpected handled error...");
    }
};
