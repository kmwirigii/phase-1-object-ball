// Part 1: Build the gameObject function
 
function gameObject() {
    return {
      home: {
        teamName: "Skiees Fp",
        colors: ["Black", "White"],
        players: {
          "Elvis KIpkorir": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Evans Odhiambo": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Lewis Mutuma": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Ian Mwenda": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Kessy Rima": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Crim Fp",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Murangiri": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Innocent Mwenda": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "Henry Wekesa": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Peter OLiech": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "John Kuria": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  
  function numPointsScored(playerName) {
    let game = gameObject();
    
    
    for (let teamKey in game) {
      let team = game[teamKey];
      let players = team.players;
      
      
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
    return 0; 
  }
  
  
  function shoeSize(playerName) {
    let game = gameObject();
    

    for (let teamKey in game) {
      let team = game[teamKey];
      let players = team.players;
      
      
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
    return 0; 
  }
  
 
  function teamColors(teamName) {
    let game = gameObject();
    
   
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else if (game.away.teamName === teamName) {
      return game.away.colors;
    }
    return []; 
  }
  
    function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  
  function playerNumbers(teamName) {
    let game = gameObject();
    let team;
    
    
    if (game.home.teamName === teamName) {
      team = game.home;
    } else if (game.away.teamName === teamName) {
      team = game.away;
    } else {
      return []; 
    }
    
    
    let numbers = [];
    for (let playerName in team.players) {
      numbers.push(team.players[playerName].number);
    }
    
    return numbers;
  }
  
  
  function playerStats(playerName) {
    let game = gameObject();
    
    
    for (let teamKey in game) {
      let team = game[teamKey];
      let players = team.players;
      
      
      if (players[playerName]) {
        return players[playerName];
      }
    }
    return {}; 
  }
  
  
  function bigShoeRebounds() {
    let game = gameObject();
    let biggestShoe = 0;
    let rebounds = 0;
    
    
    for (let teamKey in game) {
      let team = game[teamKey];
      let players = team.players;
      
      
      for (let playerName in players) {
        let player = players[playerName];
        
        
        if (player.shoe > biggestShoe) {
          biggestShoe = player.shoe;
          rebounds = player.rebounds;
        }
      }
    }
    
    return rebounds;
  }
  
  
  function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = "";
    
    for (let teamKey in game) {
      let players = game[teamKey].players;
      
      for (let playerName in players) {
        if (players[playerName].points > maxPoints) {
          maxPoints = players[playerName].points;
          playerWithMostPoints = playerName;
        }
      }
    }
    
    return playerWithMostPoints;
  }
  

  function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    
    // Calculate total points for home team
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    
   
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
    
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  

  function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
    
    for (let teamKey in game) {
      let players = game[teamKey].players;
      
      for (let playerName in players) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
        }
      }
    }
    
    return longestName;
  }
  

  function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = "";
    

    for (let teamKey in game) {
      let players = game[teamKey].players;
      
      for (let playerName in players) {
        if (players[playerName].steals > mostSteals) {
          mostSteals = players[playerName].steals;
          playerWithMostSteals = playerName;
        }
      }
    }
    
  
    return longestName === playerWithMostSteals;
  }

  console.log("Game Object:", gameObject());
  console.log("Elvis Chepkorir points:", numPointsScored("Elvis Chepkorir"));
  console.log("Evans Odhiambo shoe size:", shoeSize("vans Odhiambo"));
  console.log("Skiees Fp colors:", teamColors("Skiees Fp"));
  console.log("Team names:", teamNames());
  console.log("BSkiees Fp player numbers:", playerNumbers("Skiees Fp"));
  console.log("Ian Mwenda stats:", playerStats("Ian Mwenda"));
  console.log("Player with biggest shoe's rebounds:", bigShoeRebounds());
  console.log("Player with most points:", mostPointsScored());
  console.log("Winning team:", winningTeam());
  console.log("Player with longest name:", playerWithLongestName());
  console.log("Does player with longest name have most steals?", doesLongNameStealATon());