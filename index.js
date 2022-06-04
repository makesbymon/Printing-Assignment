let result = 'let a = 3; \n';
result += 'let b = 5; \n';
result += 'let c= null; \n';
result += '-------- \n';
let a = 3;
let b = 5;
let c = null;

result += 'a+b=' + (a+b) + '\n';
result += 'a-b =' + (a-b) + '\n';
result += 'a*b =' + (a*b) + '\n';
result += 'a/b =' + (a/b) + '\n';
result += 'a%b =' + (a%b) + '\n';
result += '(a+-b) :' + (a+-b) + '\n';
result += '(a-=b) :' + (a-=b) + '\n';
result += '(a*=b) :' + (a*=b) + '\n';
result += '(a/= b) :' + (a/=b) + '\n';
result += '(a%=b) :' + (a%=b) + '\n';
result += '(a==b) :' + (a==b) + '\n';
result += '(a!=b) :' + (a!=b) + '\n';
result += '(a>b) :' + (a>b) + '\n';
result += '(a<b) :' + (a<b) + '\n';
result += '(!a && !c):' + (!a && !c ) + '\n';
result += '(!a || !c):' + (!a || !c) + '\n';

alert (result);

let first_name = 'Monica';
let last_name = 'Vella';
let email = 'vell0012@algonquinlive.com'
let output; 
output = 'My name is' + ' ' +first_name + ' ' + last_name + '. '  + 'You can contact me at' +  ' '  + email+ '.';

alert (output);