// INSTRUCTIONS
    // Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the 
    // "instructions" for the development and functioning of living organisms.
    // If you want to know more: http://en.wikipedia.org/wiki/DNA
    // In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
    // Your function receives one side of the DNA (string, except for Haskell); you need to 
    // return the other complementary side. DNA strand is never empty or there is no DNA at all
    // (again, except for Haskell).
    // More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// PREP
    // passing a string
    // return a complementary string
    // string is never empty
    // Example: (input --> output)
        // "ATTGC" --> "TAACG"
        // "GTAT" --> "CATA"

// PSUEDO CODE
    // string to array
    // loop thru
    // conditional of what to change to (a, t, c, or g)
    // push appropriate letter to array
    // join array to string
// MY SOLUTION
function DNAStrand(dna){
    let arr = dna.toUpperCase().split('')
    let complementary = []
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === 'A') {
        complementary.push('T')
      } else if(arr[i] === 'T') {
        complementary.push('A')
      } else if(arr[i] === 'C') {
        complementary.push('G')
      } else if(arr[i] === 'G') {
        complementary.push('C')
      }
    }
    return complementary.join('')
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
function DNAStrand(dna) { //ask Jeff to go over
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// solution 2
  function DNAStrand(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
  }

// solution 3
function DNAStrand(dna){
    //your code here
    var res="";
    for(var i=0; i<dna.length; i++) {
      switch(dna[i]) {
        case 'A':
          res += "T";
          break;
        case 'T':
          res += "A";
          break;
        case 'G':
          res += "C";
          break;
        case 'C':
          res += "G";
          break;
      }
    }
    return res;
  }

// solution 4
function DNAStrand(dna){
    return dna.split('').map(str => { //a loop is needed because you do not naturally
        // iterate within a switch case
        switch (str) {
          case 'G':
            return 'C'; //if using break instead of return, would need to push each string into array
          case 'C':
            return 'G';
          case 'T':
            return 'A';
          case 'A':
            return 'T';
          default:
            throw new Error('Not a valid DNA sequence');
        }
      }).join('');
  }