// INSTRUCTIONS
    // In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
    // 
    // At the end of the first year there will be: 
    // 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
    // 
    // At the end of the 2nd year there will be: 
    // 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
    // 
    // At the end of the 3rd year there will be:
    // 1141 + 1141 * 0.02 + 50 => 1213
    // 
    // It will need 3 entire years.
    // More generally given parameters:
    // 
    // p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
    // 
    // the function nb_year should return n number of entire years needed to get a population greater or equal to p.
    // 
    // aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// PREP
    // passing 4 parameters (base population, 
    // percentage of population increase, augment (change in population);
    // goal population)

    // return the number of years to reach goal

    // example:
      // nb_year(1500, 5, 100, 5000) -> 15

// PSUEDO CODE
    // recursion (call the function if condition isnt met)
    // convert percent into percentage in variable / 100
    // base increases
    // year increments by 1

// MY SOLUTION
function nbYear(base, percent, change, goal, year = 0) {
    let increase = base * (percent / 100)
    console.log(...arguments)
    console.log(`this is the increase ${increase}. `)
    if (base >= goal) {
      console.log(`this is the year ${year}`)
      return year
    } else {
        base = Math.floor(base + increase + change)
        year++
        return nbYear(base, percent, change, goal, year)
    }
  }

// 1

// 2

// 3

// 4

// 5

// 6

// 7

// 8

// 9

// 10

// OTHER SOLUTIONS

    // solution 1
    function nbYear(p0, percent, aug, p) {
    
        for (var years = 0; p0 < p; years++) {
          p0 = Math.floor(p0 + p0 * percent / 100 + aug);
        }
        return years
      }

    // solution 2
    function nbYear(p0, percent, aug, p, years = 0) {
        if (p0 < p) {
          return nbYear(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
        }
        return years;
      }