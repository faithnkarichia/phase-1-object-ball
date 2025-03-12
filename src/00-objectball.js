function gameObject() {
  let obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return obj;
}

const game = gameObject();
// Function to get the points scored by a player
function numPointScored(name) {
  for (let key in game) {
    let players = game[key].players;
    if (players[name]) {
      return players[name].points;
    }
  }
  return "Player not found";
}
console.log(numPointScored("Ben Gordon"));
// Function to get the shoe size of a player
function shoeSize(name) {
  
  for (let key in game) {
    let players = game[key].players;

    if (players[name]) {
      return players[name].shoe;
    }
  }

  return undefined;
}
console.log(shoeSize("Ben Gordon"));
// Function to get the team colors of a given team
function teamColors(teamName) {
  for (let key in game) {
    let name = game[key].teamName;
    if (name === teamName) {
      return game[key].colors;
    }
  }
}
console.log(teamColors("Charlotte Hornets"));
// Function to get all team names
function teamNames() {
  let arr = [];
  for (let key in game) {
    let teamNames = game[key].teamName;
    arr.push(teamNames);
  }
  return arr;
}
console.log(teamNames());
// Function to get jersey numbers of a given team
function playerNumbers(teamName) {
  let jersyNumber = [];
  for (let key in game) {
    let team = game[key].teamName;
    if (team === teamName) {
      let players = game[key].players;

      for (let player in players) {
        let num = players[player].number;
        jersyNumber.push(num);
      }
    }
  }

  return jersyNumber;
}
console.log(playerNumbers("Charlotte Hornets"));
// Function to get stats of a player
function playerStats(playerName) {
  for (let key in game) {
    let player = game[key].players;

    if (player[playerName]) {
      return player[playerName];
    }
  }
}
console.log(playerStats("Ben Gordon"));
// Function to find the player with the largest shoe size and return their rebounds
function bigShoeRebound() {
  let largestShoeSize = 0;

  let playerRebounds = 0;

  for (let key in game) {
    let players = game[key].players;
    for (let player in players) {
      let playerShoe = players[player].shoe;
      if (playerShoe > largestShoeSize) {
        largestShoeSize = playerShoe;
        playerRebounds = players[player].rebounds;
      }
    }
  }
  return playerRebounds;
}
console.log(bigShoeRebound());
// Function to find the player who scored the most points
function mostPointsScored() {
  let maxPoints = 0;
  let bestPlayer = "";

  for (let key in game) {
    let playerObj = game[key].players;

    for (let player in playerObj) {
      let points = playerObj[player].points;

      if (points > maxPoints) {
        maxPoints = points;
        bestPlayer = player;
      }
    }
  }

  return bestPlayer;
}

console.log(mostPointsScored());
// Function to determine the winning team
function winningTeam() {
  let maxPoints = 0;
  let bestTeam = "";

  for (let key in game) {
    let team = game[key].teamName;
    let players = game[key].players;
    let totalPoints = 0;

    for (let player in players) {
      totalPoints += players[player].points;
    }

    if (totalPoints > maxPoints) {
      maxPoints = totalPoints;
      bestTeam = team;
    }
  }

  return bestTeam;
}

console.log(winningTeam());
// Function to find the player with the longest name
function playerWithLongestName() {
  let longestName = "";

  for (let key in game) {
    let players = game[key].players;

    for (let player in players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}

console.log(playerWithLongestName());
//function that returns true if the player with the longest name had the most steals
function doesLongNameStealATon() {
  let longestName = playerWithLongestName();
  let maxSteals = 0;
  let playerWithMostSteals = "";

  for (let key in game) {
    let players = game[key].players;

    for (let player in players) {
      let steals = players[player].steals;

      if (steals > maxSteals) {
        maxSteals = steals;
        playerWithMostSteals = player;
      }
    }
  }

  return longestName === playerWithMostSteals;
}

console.log(doesLongNameStealATon());
