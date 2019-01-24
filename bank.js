var accounts = [];
function createAccount(userName) {
    accounts.push({userName,balance:0});
    console.log('your account has been created ');
    return accounts[accounts.length-1];
}
function getAccount(userName) {
    var match;
    for(i = 0; i < accounts.length; i++) {
        if (accounts[i].userName === userName) {
            match = accounts[i];
        } 
    
    }
    if (typeof match ==='undefined') {
        match = undefined;
    }
    return match;
}
function deposit (account, amount){
    var match;
    for(i = 0; i < accounts.length; i++) {
        if (accounts[i].userName === account) {
            match = accounts[i];
        } 
    }
    if(typeof amount === 'number'){
    match.balance = match.balance + amount;
    console.log('your new balance is ' + match.balance);
    } else {
        console.log('please enter a number');
    }
}
function withdraw (account, amount){
    var match;
    for(i = 0; i < accounts.length; i++) {
        if (accounts[i].userName === account) {
            match = accounts[i];
        } 
    }
    if(typeof amount === 'number'){
        if (match.balance < amount){
        console.log('your balance is ' + match.balance + '. Can not withdraw money');
         }else if (match.balance >= amount){
       match.balance = match.balance - amount;
       console.log('your new balance is ' + match.balance);
                 }else {
         console.log('account cannot be found')
                     }
    } else {
        console.log('please enter a number');
    }
}
function getbalance (account) {
    var match;
    for(i = 0; i < accounts.length; i++) {
        if (accounts[i].userName === account) {
            match = accounts[i];
        } 
    }
    console.log('your balance is ' + match.balance);
}
function createBalanceGetter(account) {
    return function() {
        var match;
    for(i = 0; i < accounts.length; i++) {
        if (accounts[i].userName === account) {
           match = accounts[i];
        }  
    }
    console.log('printed number is ' + typeof print);
        console.log('your account balance is ' + match.balance);
    }
}


console.log(createAccount('a'));
console.log(createAccount('b'));
//console.log(accounts);
//console.log(accounts[0].userName);
console.log(getAccount('a'));
//console.log(accounts);
deposit('a', 100);
withdraw('a', 50);
getbalance('a');
withdraw('a', 25);
var balance = createBalanceGetter('a');
 balance();
