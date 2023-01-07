const NUMBER_FORMATTER = new Intl.NumberFormat("en");

export default function displayNumber(number) {
  const stringNumber = number?.toString() || "";
  if (stringNumber === "") return "";

  const [integer, decimal] = stringNumber.split(".");
  const formattedInteger = NUMBER_FORMATTER.format(integer);
  if (decimal == null) return formattedInteger;
  return formattedInteger + "." + decimal;
}
