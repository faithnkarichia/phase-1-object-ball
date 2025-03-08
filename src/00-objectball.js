function gameObject() {
  let obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          Number: 0,
          Shoe: 16,
          Points: 22,
          Rebounds: 12,
          Assists: 12,
          Steals: 3,
          Blocks: 1,
          SlamDunks: 1,
        },
        "Reggie Evans": {
          Number: 30,
          Shoe: 14,
          Points: 12,
          Rebounds: 12,
          Assists: 12,
          Steals: 12,
          Blocks: 12,
          SlamDunks: 7,
        },
        "Brook Lopez": {
          Number: 11,
          Shoe: 17,
          Points: 17,
          Rebounds: 19,
          Assists: 10,
          Steals: 3,
          Blocks: 1,
          SlamDunks: 15,
        },
        "Mason Plumlee": {
          Number: 1,
          Shoe: 19,
          Points: 26,
          Rebounds: 12,
          Assists: 6,
          Steals: 3,
          Blocks: 8,
          SlamDunks: 5,
        },
        "Jason Terry": {
          Number: 31,
          Shoe: 15,
          Points: 19,
          Rebounds: 2,
          Assists: 2,
          Steals: 4,
          Blocks: 11,
          SlamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          Number: 4,
          Shoe: 18,
          Points: 10,
          Rebounds: 1,
          Assists: 1,
          Steals: 2,
          Blocks: 7,
          SlamDunks: 2,
        },
        "Bismak Biyombo": {
          Number: 0,
          Shoe: 16,
          Points: 12,
          Rebounds: 4,
          Assists: 7,
          Steals: 7,
          Blocks: 15,
          SlamDunks: 10,
        },
        "DeSagna Diop": {
          Number: 2,
          Shoe: 14,
          Points: 24,
          Rebounds: 12,
          Assists: 12,
          Steals: 4,
          Blocks: 5,
          SlamDunks: 5,
        },
        "Ben Gordon": {
          Number: 8,
          Shoe: 15,
          Points: 33,
          Rebounds: 3,
          Assists: 2,
          Steals: 1,
          Blocks: 1,
          SlamDunks: 0,
        },
        "Brendan Haywood": {
          Number: 33,
          Shoe: 15,
          Points: 6,
          Rebounds: 12,
          Assists: 12,
          Steals: 22,
          Blocks: 5,
          SlamDunks: 12,
        },
      },
    },
  };
  return obj;
}
console.log(gameObject());

function numPointScored(name) {
  let game = gameObject();

  for (let key in game) {
    let players = game[key].players;
    if (players[name]) {
      return players[name].Points;
    }
  }
  return "Player not found";
}
console.log(numPointScored("Ben Gordon"));

function shoeSize(name) {
  let object = gameObject();
  for (let key in object) {
    let player = object[key].players;
    if (player[name]) {
      return player[name].Shoe;
    }
  }
}
console.log(shoeSize("Ben Gordon"));

function teamColors(teamName) {
  let obj = gameObject();
  for (let key in obj) {
    let name = obj[key].teamName;
    if (name === teamName) {
      return obj[key].colors;
    }
  }
}
console.log(teamColors("Charlotte Hornets"));

function teamNames() {
  let gameObj = gameObject();
  let arr = [];
  for (let key in gameObj) {
    let teamNames = gameObj[key].teamName;
    arr.push(teamNames);
  }
  return arr;
}
console.log(teamNames());

function playerNumbers(teamName) {
  let gameObj = gameObject();
  let jersyNumber = [];
  for (let key in gameObj) {
    let team = gameObj[key].teamName;
    if (team === teamName) {
      let players = gameObj[key].players;

      for (let player in players) {
        let num = players[player].Number;
        jersyNumber.push(num);
      }
    }
  }

  return jersyNumber;
}
console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName) {
  let gameObj = gameObject();

  for (let key in gameObj) {
    let player = gameObj[key].players;

    if (player[playerName]) {
      return player[playerName];
    }
  }
}
console.log(playerStats("Ben Gordon"));

function bigShoeRebound() {
  let gameObj = gameObject();
  let arr = [];

  let pl = [];

  for (let key in gameObj) {
    let players = gameObj[key].players;

    for (let player in players) {
      pl.push(players[player]);

      let playerShoe = players[player].Shoe;
      playerShoe = parseInt(playerShoe);
      arr.push(playerShoe);
    }
  }

  let biggestShoeSize = Math.max(...arr);
  const data = pl.filter((item) => item.Shoe == biggestShoeSize); 

  return data[0].Rebounds;
}
console.log(bigShoeRebound());

function mostPointsScored() {
    let gameObj = gameObject();
    let maxPoints = 0;
    let bestPlayer = "";
  
    for (let key in gameObj) {
      let playerObj = gameObj[key].players; 
  
      for (let player in playerObj) {
        let points = playerObj[player].Points; 
  
        if (points > maxPoints) {
          maxPoints = points; 
          bestPlayer = player; 
        }
      }
    }
  
    return bestPlayer;
  }
  
  
  console.log( mostPointsScored());


  function winningTeam(){
    let gameObj = gameObject();
    let maxPoints = 0;

  }

  function winningTeam() {
    let gameObj = gameObject(); 

    let maxPoints = 0; 
    let bestTeam = ""; 

    
    for (let key in gameObj) {
        let team = gameObj[key].teamName;
        let players = gameObj[key].players; 
        let totalPoints = 0;

        
        for (let player in players) {
            totalPoints += players[player].Points; 
        }

        
        if (totalPoints > maxPoints) {
            maxPoints = totalPoints;
            bestTeam = team;
        }
    }

    return bestTeam; 
}

console.log(winningTeam());


function playerWithLongestName() {
    let gameObj = gameObject(); 
    let longestName = ""; 

    
    for (let key in gameObj) {
        let players = gameObj[key].players; 

        
        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player; 
            }
        }
    }

    return longestName; 
}

console.log(playerWithLongestName());



function doesLongNameStealATon() {
    let gameObj = gameObject(); 
    let longestName = playerWithLongestName(); 
    let maxSteals = 0;
    let playerWithMostSteals = "";

    
    for (let key in gameObj) {
        let players = gameObj[key].players; 

        for (let player in players) {
            let steals = players[player].Steals;

           
            if (steals > maxSteals) {
                maxSteals = steals;
                playerWithMostSteals = player; 
            }
        }
    }

    return longestName === playerWithMostSteals; 
}

console.log(doesLongNameStealATon());



  