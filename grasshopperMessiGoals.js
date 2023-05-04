// instructions
  // Messi goals function
  // Messi is a soccer player with goals in three leagues:
  // LaLiga
  // Copa del Rey
  // Champions
  // Complete the function to return his total number of goals in all three leagues.
  // Note: the input will always be valid.
  // For example:
  // 5, 10, 2  -->  17

//my solution
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let arr = []
  arr.push(laLigaGoals, copaDelReyGoals, championsLeagueGoals)
  const newArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
  
  return newArr
}

//other solutions
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
