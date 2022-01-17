This project has helpfully information about input type.
I don't need <input type="number">, because I can use Regular Expressions
with replace method. Regexp = /\D/g . Replace non-digit with empty string.

Full:

let str = '12AB34CD';
let regexp = /\D/g;
console.log(str.replace(regexp, ''))