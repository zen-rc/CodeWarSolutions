//instructions

    // The first century spans from the year 1 up to and including the year
    // 100, the second century - from the year 101 up to and including the
    // year 200, etc.

//my (sorta) solution
function century(year) {
    let century;
  
    if (year <= 100) {
      century = 1;
    } else if (year % 100 === 0) {
      century = year / 100;
    } else {
      century = Math.floor(year / 100) + 1;
    }
  
    return century;
  }

//other solutions
const century = year => Math.ceil(year/100)

// 1
function century(year) {
    let century;

    if(year <= 100) {
        century = 1
    } else if (year % 100 === 0) {
        century = year / 100
    } else {
        century = Math.floor(year / 100) + 1
    }

    return century
}

// 2
function century(year) {
    let century

    if(year <= 100) {
        century = 1
    } else if (year % 100 === 0) {
        century = year /100
    } else {
        century = Math.floor(year / 100) + 1
    }

    return century
}
// 3
function century(year) {
    let century

    if(year <= 100) {
        century = 1
    } else if (year % 100 === 0) {
        century = year / 100
    } else {
        century = Math.floor(year / 100) + 1
    }

    return century
}
// 4
function century(year) {
    let century

    if(year <= 100) {
        century = 1
    } else if (year % 100 === 0) {
        century = year / 100
    } else {
        century = Math.floor(year / 100) + 1
    }

    return century
}

// 5

function century(year) {
    let century

    if(year <= 100) {
        century = 1
    } else if (year % 100 === 0) {
        century = year / 100
    } else {
        century = Math.floor(year / 100) + 1
    }
    return century
}

// 6
function century(year) {
    let century

    if(year <= 100) {
        century = 1
    } else if(year % 100 === 0) {
        century = year / 100
    } else {
        century = Math.floor(year / 100) + 1
    }
    return century
}

// 7
function century(year) {
    let century

    if(year <= 100) {
        century = 1
    } else if(year % 100 === 0) {
        century = year / 100
    } else {
        century = Math.floor(year / 100) + 1
    }
    return century
}


// 8
function century(year) {
    let century
    if(year <= 100) {
        century = 1
    } else if(year % 100 === 0) {
        century = year / 100
    } else {
        century = Math.floor(year / 100) + 1
    }
    return century
}

// 9 
function century(year) {
    let century
    if(year <= 100) {
        century = 1
    } else if (year % 100 === 0) {
        century = year / 100
    } else {
        century = Math.floor(year / 100) + 1
    }
}

// 10
function century(year) {
   let century

   if(year >= 100) {
    century = 1
   } else if(year % 100 === 0) {
    century = year / 100
   } else {
    century = Math.floor(year / 100) + 1
   }

   return century
}