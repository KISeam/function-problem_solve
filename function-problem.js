function checkConditions() {
  // 1. Find the larger number
  function largerNumber(a, b) {
    return a > b ? a : b;
  }

  // 2. Check if a number is even or odd
  function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
  }

  // 3. Check if a student passed
  function isPassed(marks) {
    return marks >= 33 ? "Passed" : "Failed";
  }

  // 4. Find the largest among three numbers
  function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
  }

  // 5. Check if a number is positive or negative
  function isPositiveOrNegative(num) {
    return num >= 0 ? "Positive" : "Negative";
  }

  // 6. Check if a number is divisible by 10
  function isDivisibleBy10(num) {
    return num % 10 === 0;
  }

  // 7. Check if a person is an adult
  function isAdult(age) {
    return age >= 18 ? "Adult" : "Minor";
  }

  // 8. Assign grade based on marks
  function assignGrade(marks) {
    if (marks >= 80) return "A+";
    if (marks >= 70) return "A";
    if (marks >= 60) return "A-";
    if (marks >= 33) return "Passed";
    return "Failed";
  }

  // 9. Find the smaller number
  function smallerNumber(a, b) {
    return a < b ? a : b;
  }

  // 10. Check if a number is zero
  function isZero(num) {
    return num === 0;
  }

  // 11. Check if sum of three numbers is greater than 100
  function sumGreaterThan100(a, b, c) {
    return a + b + c > 100;
  }

  // 12. Check if a year is a leap year
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // 13. Check if a student passed 5 subjects
  function passedAllSubjects(marks) {
    return marks.every((mark) => mark >= 33);
  }

  // 14. Check if a number is a single-digit number
  function isSingleDigit(num) {
    return num >= 0 && num <= 9;
  }

  // 15. Check if sum of two numbers is equal to 50
  function sumEquals50(a, b) {
    return a + b === 50;
  }

  // 16. Determine the time of day
  function timeOfDay(hour) {
    if (hour >= 6 && hour < 12) return "Morning";
    if (hour >= 12 && hour < 18) return "Afternoon";
    return "Night";
  }

  // 17. Check if a password is at least 8 characters long
  function isValidPassword(password) {
    return password.length >= 8;
  }

  // 18. Check if a number is positive and even
  function isPositiveEven(num) {
    return num > 0 && num % 2 === 0;
  }

  // 19. Check if a number is 50 or greater
  function isFiftyOrMore(num) {
    return num >= 50;
  }

  // 20. Check if product of two numbers is divisible by the larger one
  function isProductDivisible(a, b) {
    let larger = Math.max(a, b);
    return (a * b) % larger === 0;
  }

  // Example usage:
  console.log(largerNumber(10, 20));
  console.log(isEvenOrOdd(15));
  console.log(isPassed(40));
  console.log(largestOfThree(12, 25, 30));
  console.log(isPositiveOrNegative(-5));
  console.log(isDivisibleBy10(100));
  console.log(isAdult(18));
  console.log(assignGrade(75));
  console.log(smallerNumber(5, 10));
  console.log(isZero(0));
  console.log(sumGreaterThan100(30, 40, 50));
  console.log(isLeapYear(2024));
  console.log(passedAllSubjects([40, 35, 50, 45, 60]));
  console.log(isSingleDigit(7));
  console.log(sumEquals50(25, 25));
  console.log(timeOfDay(14));
  console.log(isValidPassword("mypassword"));
  console.log(isPositiveEven(22));
  console.log(isFiftyOrMore(55));
  console.log(isProductDivisible(5, 10));
}

checkConditions();
