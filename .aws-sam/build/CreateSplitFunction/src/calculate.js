function calculateSplit(totalAmount, people) {
  if (totalAmount === undefined || totalAmount === null) {
    throw new Error("Amount is required");
  }

  if (typeof totalAmount !== "number" || isNaN(totalAmount)) {
    throw new Error("Amount must be a number");
  }

  if (totalAmount < 0) {
    throw new Error("Amount cannot be negative");
  }

  if (!Array.isArray(people) || people.length === 0) {
    throw new Error("No people provided");
  }

  const cleanedPeople = people.map(p => String(p).trim()).filter(Boolean);

  if (cleanedPeople.length === 0) {
    throw new Error("No valid people provided");
  }

  const uniquePeople = [...new Set(cleanedPeople)];

  const share = Math.round((totalAmount / uniquePeople.length) * 100) / 100;

  return uniquePeople.map(name => ({
    name,
    owes: share
  }));
}

module.exports = { calculateSplit };