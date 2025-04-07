const openerList = ["Did you see that ludicrous display last night"];
const arsenalList = ["Thing about Arsenal is they always try walk it in!", "Look if they can keep Sanchez and Ozil who knows...", "They're just one or two players short from being the real deal...", "D'you see Arsenal Fan TV last night?", "D'you know Wenger nearly signed (insert any player here)?"];
const manchesterList = ["See that's typical Mourinho there", "They just park the bus against big teams.", "The mind games have started"];
const liverpoolList = ["Klopp needs to sort out that defence.", "Never gonna win the league with that defence...", "They're just one or two players short from being the real deal...", "If they have the Fab 4, then Daniel Sturridge is Pete Best", "They've got some of the best fans in England."];
const chelseaList = ["I don't think Abramovich and (current Chelsea manager) get on that well...", "David Luiz has come back a much better player", "Never should've sold Matic..."];
const newcastleList = ["Sure look, they're the sleeping giant of English football.", "They've got some of the best fans in England.", "If they get rid of Ashley, they'll be grand"];

/** @type {number} */
let rounds = 0;

/** @type {string} */
let currentTeam = "None";

/** @type {string} */
let currentSaying;

// this method needs to be refactored
function findPhrase() {
  rounds++;
  if (rounds == 1) {
    sayOpener();
    currentTeam = "None";
  } else {
    // pick whether to talk about a new team
    // ~33.3% chance to start talking about another team
    if (!(Math.floor((Math.random() * 3) + 1) == 1) && !(currentTeam == "None")) {
      switch (currentTeam) {
        case "Arsenal":
          sayArsenalLine();
          break;
        case "Manchester":
          sayManchesterLine();
          break;
        case "Liverpool":
          sayLiverpoolLine();
          break;
        case "Chelsea":
          sayChelseaLine();
          break;
        case "Newcastle":
          sayNewcastleLine();
          break;
        default:
          alert("Error, new team not found!");
          break;
      }
    } else {
      const newTeam = Math.floor(Math.random() * 5);

      // pick new team to talk about
      switch (newTeam) {
        case 0:
          sayArsenalLine();
          break;
        case 1:
          sayManchesterLine();
          break;
        case 2:
          sayLiverpoolLine();
          break;
        case 3:
          sayChelseaLine();
          break;
        case 4:
          sayNewcastleLine();
          break;
        default:
          alert("Error, new team not found!");
          break;
      }

    } // end of new team

    // end of ongoing convosation
  }
}

function sayOpener() {
  const openerIndexOffset = Math.floor(Math.random() * openerList.length);
  say(openerList[openerIndexOffset]);
}

// team sayings
// TODO: I need to refactor this code
function sayArsenalLine() {
  currentTeam = "Arsenal";
  const tempi = Math.floor(Math.random() * arsenalList.length);
  say(arsenalList[tempi]);
}

function sayManchesterLine() {
  currentTeam = "Manchester";
  const tempi = Math.floor(Math.random() * manchesterList.length);
  say(manchesterList[tempi]);
}

function sayLiverpoolLine() {
  currentTeam = "Liverpool";
  const tempi = Math.floor(Math.random() * liverpoolList.length);
  say(liverpoolList[tempi]);
}

function sayChelseaLine() {
  currentTeam = "Chelsea";
  const tempi = Math.floor(Math.random() * chelseaList.length);
  say(chelseaList[tempi]);
}

function sayNewcastleLine() {
  currentTeam = "Newcastle";
  const tempi = Math.floor(Math.random() * newcastleList.length);
  say(newcastleList[tempi]);
}

/**
 * print function
 * @param {string} Phrase
 */
function say(phrase) {
  // check that the new saying is not the same as is currently printed
  if (phrase === currentSaying) {
    findPhrase();
    return;
  }

  const responseElement = document.getElementById("response");
  const teamElement = document.getElementById("currentTeam");

  responseElement.innerHTML = phrase;
  teamElement.innerHTML = teamElement.innerHTML = `<u><strong>Team: ${currentTeam}</u></strong>`;
  currentSaying = phrase;
}
