//Task 1

let a = 3;
let b = 5;
let c;

let output = '';



output += 'a + b = '+ (a + b) + '\n';
output += 'a - b = '+ (a - b) + '\n';
output += 'a * b = '+ (a * b) + '\n';
output += 'a / b = '+ (a / b) + '\n';
output += 'a % b = '+ (a % b) + '\n';
output += ' a += b '+ (a += b) + '\n';
output += ' a -= b '+ (a -= b) + '\n';
output += ' a *= b '+ (a *= b) + '\n';
output += ' a /= b '+ (a /= b) + '\n';
output += ' a %= b '+ (a %= b) + '\n';
output += ' a == b '+ (a == b) + '\n';
output += ' a != b '+ (a != b) + '\n';
output += ' a > b '+ (a > b) + '\n';
output += ' a < b '+ (a < b) + '\n';
output += ' !a && !c '+ (!a && !c) + '\n';
output += ' !a || !c '+ (!a || !c) + '\n';

console.log(output);

//Task 2

let first_name = 'Hien';
let last_name = 'Pham';
let email = 'pham0196@algonquinlive.com';
let output_1 = `My name is ${first_name} ${last_name}. You can contact me at  ${email}.`;

console.log(output_1);
