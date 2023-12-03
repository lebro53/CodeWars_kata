// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
  const strIPAdress = str
    .split(".")
    .filter((x) => x !== "")
    .map((x) => x.replace(/[^0-9.]/g, "!"));
  if (strIPAdress.length !== 4) return false;
  return strIPAdress
    .map((x) =>
      Number(x) >= 0 && Number(x) < 256
        ? Number(x[0]) === 0 && x.length > 1
          ? false
          : true
        : false
    )
    .every((x) => x !== false);
}

console.log(isValidIP(".60.117.221"));
