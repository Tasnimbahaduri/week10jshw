

// Get the highest, lowest, and average grades
export function getClassStats(grades) {
  let highest = grades[0];
  let lowest = grades[0];
  let sum = 0;

  for (const grade of grades) {
    if (grade > highest) {
      highest = grade;
    }

    if (grade < lowest) {
      lowest = grade;
    }

    sum += grade;
  }

  const average = sum / grades.length;

  return {
    highest: highest,
    lowest: lowest,
    average: average
  };
}

// Capitalize the first letter of every word
export function capitalizeWords(text) {
  return text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Calculate the average of numbers
export function calculateAverage(numbers) {
  const total = numbers.reduce((sum, number) => sum + number, 0);

  return total / numbers.length;
}
