// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  const sToArr = s.split(" ");
  const result = sToArr.reduce((a, b) => (a.length <= b.length ? a : b)).length;
  return result;
}

// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  const endingLength = ending.length;
  const cut = str.length - ending.length;
  const strRest = str.slice(0, cut);
  const cutEndingLength = str.slice(cut, str.length);
  const checkStr = strRest.concat(ending);
  return checkStr === str ? true : false;
}

// Credit card issuer checking

// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |

// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"

function getIssuer(number) {
  const str = number.toString();
  if (
    (str.length === 15 && str.startsWith(34)) ||
    (str.startsWith(37) && str.length === 15)
  ) {
    return "AMEX";
  } else if (str.length === 16 && str.startsWith(6011)) {
    return "Discover";
  } else if (
    (str.length === 16 && str.startsWith(51)) ||
    str.startsWith(52) ||
    str.startsWith(53) ||
    str.startsWith(54) ||
    str.startsWith(55)
  ) {
    return "Mastercard";
  } else if (
    (str.length === 13 && str.startsWith(4)) ||
    (str.length === 16 && str.startsWith(4))
  ) {
    return "VISA";
  } else {
    return "Unknown";
  }
}
