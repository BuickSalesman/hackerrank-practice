// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45
function timeConversion(s) {
  let dayPeriodRemovedString = s.slice(0, -2); //remove the AM/PM from the string
  let dayPeriod = s.slice(8); //isolate either AM/PM into a variable
  let hour = parseInt(s.slice(0, 2)); //isolate the string to it's first two digits, and turn it into an integer

  if (hour === 12) {
    hour = 0;
    //midnight case
  }

  if (dayPeriod === "PM") {
    hour = hour += 12;
    //pm case
  }

  let hourString = hour.toString().padStart(2, "0"); //turn the hour interger into a string that is exactly two digits long. If the interger is only one digit, add a zero in front of it.

  return hourString + dayPeriodRemovedString.slice(2); //return the hour string plus the dayPeriodRemovedString with the first two digits sliced off
}

let input_time = "07:05:45AM";
console.log(timeConversion(input_time));
