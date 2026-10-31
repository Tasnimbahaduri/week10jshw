import {
  getClassStats,
  capitalizeWords,
  calculateAverage
} from "./utils.js";

// Test capitalizeWords
const name = capitalizeWords("hello tasnim");
console.log(name);

// Test calculateAverage
const numbers = [23, 30, 34, 11, 20];
const average = calculateAverage(numbers);
console.log(average);

// Test getClassStats
const grades = [88, 95, 72, 91, 65];
const result = getClassStats(grades);
console.log(result);
