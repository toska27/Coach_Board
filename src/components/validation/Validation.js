export function validateName(name, input) {
  if (name === "") {
    return `${input} is required`;
  } else if (name.length < 2) {
    return `${input} must be at least 2 characters.`;
  } else if (!/^[A-Za-z]+$/.test(name)) {
    return `${input} can only contain letters.`;
  } else if (!/^[A-Z]/.test(name)) {
    return `${input} must start with an uppercase letter.`;
  }

  return null;
}

export function validateNumber(number) {
  if (number < 0 || number > 99 || number === "") {
    return "You must enter number beetwen 0 and 99";
  }

  return null;
}

export function validateSelectInput(option, message) {
  if (option === "") {
    return message;
  }

  return null;
}

export function validateScore(score) {
  if (score.length === 0) {
    return "Score is required.";
  }

  const scorePattern = /^\d{1,3}:\d{1,3}$/;

  if (!scorePattern.test(score)) {
    return 'Score must be in format "number:number", e.g. 66:45.';
  }

  const [teamA, teamB] = score.split(":").map(Number);

  if (teamA < 0 || teamA > 200 || teamB < 0 || teamB > 200) {
    return "Score must contain valid scores (0–200).";
  }

  return null;
}

export function capitalizedValue(value) {
  const trimmed = value.trim();
  const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);

  return capitalized;
}
