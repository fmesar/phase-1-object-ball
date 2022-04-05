

function gameObject() {
   
        return {
            "home": {
                "teamName": "Brooklyn Nets",
                "colors": ["Black", "White"],
                "players": {
                    "Alan Anderson": {
                        "number": 0,
                        "shoe": 16,
                        "points": 22,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 3,
                        "blocks": 1,
                        "slamDunks": 1
                    },
                    "Reggie Evans": {
                        "number": 30,
                        "shoe": 14,
                        "points": 12,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 12,
                        "blocks": 12,
                        "slamDunks": 7
                    },
                    "Brook Lopez": {
                        "number": 11,
                        "shoe": 17,
                        "points": 17,
                        "rebounds": 19,
                        "assists": 10,
                        "steals": 3,
                        "blocks": 1,
                        "slamDunks": 15
                    },
                    "Mason Plumlee": {
                        "number": 1,
                        "shoe": 19,
                        "points": 26,
                        "rebounds": 12,
                        "assists": 6,
                        "steals": 3,
                        "blocks": 8,
                        "slamDunks": 5
                    },
                    "Jason Terry": {
                        "number": 31,
                        "shoe": 15,
                        "points": 19,
                        "rebounds": 2,
                        "assists": 2,
                        "steals": 4,
                        "blocks": 11,
                        "slamDunks": 1
                    },
                }
            },
            "away": {
                "teamName": "Charlotte Hornets",
                "colors": ["Turquoise", "Purple"],
                "players": {
                    "Jeff Adrien": {
                        "number": 4,
                        "shoe": 18,
                        "points": 10,
                        "rebounds": 1,
                        "assists": 1,
                        "steals": 2,
                        "blocks": 7,
                        "slamDunks": 2
                    },
                    "Bismak Biyombo": {
                        "number": 0,
                        "shoe": 16,
                        "points": 12,
                        "rebounds": 4,
                        "assists": 7,
                        "steals": 7,
                        "blocks": 15,
                        "slamDunks": 10
                    },
                    "DeSagna Diop": {
                        "number": 2,
                        "shoe": 14,
                        "points": 24,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 4,
                        "blocks": 5,
                        "slamDunks": 5
                    },
                    "Ben Gordon": {
                        "number": 8,
                        "shoe": 15,
                        "points": 33,
                        "rebounds": 3,
                        "assists": 2,
                        "steals": 1,
                        "blocks": 1,
                        "slamDunks": 0
                    },
                    "Brendan Haywood": {
                        "number": 33,
                        "shoe": 15,
                        "points": 6,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 22,
                        "blocks": 5,
                        "slamDunks": 12
                    },
                }
            },
        }
    };
function homeTeamName (){
    const {home} = gameObject()
    return home.teamName
}
// function numPointsScored(playersName){
//    const game = gameObject()
//     for(const team in game){
//         for(const player in game[team].players){
//             if( playersName === player)

//             return player.Points
//         }
//         game[team]
//     }



//     }


const game = gameObject()
// function numPointsScored(playersName){
       
//         for(const team in game){
//             for(const player in game[team].players){
//                 if( playersName === player){
                    
//                     return game[team].players[playersName].points
                    
//                 }

               
//             }
//         }
//     }



function numPointsScored(playersName){

    if( game["away"].players[playersName] === undefined){
        return game["home"].players[playersName].points
    }
        return game["away"].players[playersName].points

}
function shoeSize(playersName){
    if( game["away"].players[playersName] === undefined){
        return game["home"].players[playersName].shoe
    }
        return game["away"].players[playersName].shoe
}
function teamColors(teamName){
    
    if( game["away"].teamName === undefined){
        return game["home"].colors
    }
        return game["away"].colors
}
function teamName(){
    let result = []
    result.push(game["away"].teamName)
    result.push(game["home"].teamName)
    return result
}
function teamName(teamName){
    let result = []
    if( "Brooklyn Nets" === teamName){
        for(const player in game["home"].players){
            result.push(game["home"].players[player].number)
        }
        }else{
        for(const player in game["away"].players){
            result.push(game["away"].players[player].number)
        }
        
    }
    return result
}
function playerStats(playersName){

    if( game["away"].players[playersName] === undefined){
        return game["home"].players[playersName]
    }
        return game["away"].players[playersName]

}
function bigShoeRebounds(){
    let counter = 0
    for(const team in game){
        for(const player in game[team].players){
            
            if(game[team].players[player].shoe > counter){
               
                counter = game[team].players[player].shoe
            }
      }

    }  
    return counter
}

function mostPointsScored(){
    let counter = 0
    for(const team in game){
        for(const player in game[team].players){
            
            if(game[team].players[player].points > counter){
               
                counter = game[team].players[player].points
            }
      }

    }  
    return counter
}

function winningTeam(){
    let homecounter = 0
    let awaycounter = 0 
    for(const team in game){
        for(const player in game[team].players){
            
            if(team === "home" ){
               
                homecounter += game[team].players[player].points 
            }else{
                awaycounter += game[team].players[player].points 
            }
      }

    }  
    if(homecounter > awaycounter){
        return game["home"].teamName
    }else {
        return game["away"].teamName
    }
}
