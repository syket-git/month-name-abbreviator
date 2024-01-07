function getAbbreviatedMonthName(monthNumber: number): string {
  if (typeof monthNumber !== "number" || monthNumber < 1 || monthNumber > 12) {
    throw new Error(
      "Invalid month number. Please provide a number between 1 and 12."
    );
  }

  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return monthNames[monthNumber - 1];
}

export default getAbbreviatedMonthName;
