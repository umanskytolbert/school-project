function addDays(date, days) {
  const today = new Date();
  const nextDate = new Date(today);
  nextDate.setDate(nextDate.getDate() + days);

  if (nextDate < today) {
    nextDate = today;
  }

  return nextDate;
}

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
