const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears === 1) {
      catYears = humanYears + 15;
      dogYears = humanYears + 15;
    } else if (humanYears === 2) {  
      catYears = humanYears + 9;
      dogYears = humanYears + 9;
    } else {
      catYears = 4 * (humanYears - 2) + 24;
      dogYears = 5 * (humanYears - 2) + 24;
    }
    return [humanYears, catYears, dogYears];
  }
  