function convertToRoman(num) {
    const arabNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";
    let number = num;

    for (let i = 0; i < arabNumerals.length; i++) {
        while (arabNumerals[i] <= number) {
            result += romanNumerals[i];
            number -= arabNumerals[i];
        }
    }
    return result;
}

convertToRoman(36);