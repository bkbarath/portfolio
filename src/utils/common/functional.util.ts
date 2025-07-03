// function to get the date as dd-mm-yyyy
export const formatDateAsDDMMYYYY = (date: Date): string => {
  return date
    ? date.toISOString().split("T")[0]?.split("-").reverse().join("-")
    : "";
};

// function to get date is present or dd-mm-yyyy
export const getDateAsDDMMYYYYOrPresent = (date: Date): string => {
  if (date.getDate() === new Date().getDate()) return "Present";

  return date.toISOString().split("T")[0]?.split("-").reverse().join("-");
};

export const getDifference = (from: Date, to: Date) => {
  let year = to.getFullYear() - from.getFullYear();
  let month = to.getMonth() - from.getMonth();
  let day = to.getDate() - from.getDate();

  if (day < 0) {
    month -= 1;
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    day += prevMonth.getDate();
  }

  if (month < 0) {
    year -= 1;
    month += 12;
  }

  const parts = [];
  if (year > 0) parts.push(`${year} Year(s)`);
  if (month > 0) parts.push(`${month} Month(s)`);
  if (day > 0) parts.push(`${day} Day(s)`);

  return parts.join(" ") || "0 Days"; // fallback for same day
};
