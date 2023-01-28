function palindrome(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "") ===
        str.toLowerCase().replace(/[^a-z0-9]/g, "").split('').reverse().join('');
}

palindrome("eye_ eue 3");