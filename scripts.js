openerList = ["Did you see that ludicrous display last night"];
arsenalList = ["Thing about Arsenal is they always try walk it in!", "Look if they can keep Sanchez and Ozil who knows...", "They're just one or two players short from being the real deal...", "D'you see Arsenal Fan TV last night?", "D'you know Wenger nearly signed (insert any player here)?"];
manchesterList = ["See that's typical Mourinho there", "They just park the bus against big teams.", "The mind games have started"];
liverpoolList = ["Klopp needs to sort out that defence.", "Never gonna win the league with that defence...", "They're just one or two players short from being the real deal...", "If they have the Fab 4, then Daniel Sturridge is Pete Best", "They've got some of the best fans in England."];
chelseaList = ["I don't think Abramovich and (current Chelsea manager) get on that well...", "David Luiz has come back a much better player", "Never should've sold Matic..."];
newcastleList = ["Sure look, they're the sleeping giant of English football.", "They've got some of the best fans in England.", "If they get rid of Ashley, they'll be grand"];
rounds = 0;
currentTeam = "None";

function findPhrase() {
  rounds++;
  if (rounds == 1) {
    opener();
    currentTeam = "None";
  } else {
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
    } else {
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
}

function opener() {
  var temps = Math.floor(Math.random() * openerList.length);
  printf(openerList[temps]);
}

///////////////////////////////////////////////////////////////
//////////////////////////TEAMS////////////////////////////////
///////////////////////////////////////////////////////////////
function arsenal() {
  currentTeam = "Arsenal";
  var temps = Math.floor(Math.random() * arsenalList.length);
  printf(arsenalList[temps]);
}
function manchester() {
  currentTeam = "Manchester";
  var temps = Math.floor(Math.random() * manchesterList.length);
  printf(manchesterList[temps]);
}
function liverpool() {
  currentTeam = "Liverpool";
  var temps = Math.floor(Math.random() * liverpoolList.length);
  printf(liverpoolList[temps]);
}
function chelsea() {
  currentTeam = "Chelsea";
  var temps = Math.floor(Math.random() * chelseaList.length);
  printf(chelseaList[temps]);
}
function newcastle() {
  currentTeam = "Newcastle";
  var temps = Math.floor(Math.random() * newcastleList.length);
  printf(newcastleList[temps]);
}

// print function
function printf(phrase) {
  document.getElementById('responce').innerHTML = phrase;
  document.getElementById('currentTeam').innerHTML = "<u><strong>Team: " + currentTeam + "</u></strong>";
}
