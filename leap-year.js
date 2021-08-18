// leap year checked by isleapyear function
function isLeapYear (year){
    if ((year % 4 == 0) && (year % 100 != 0) ||(year % 400 == 0)){
      return true;
    }
    return false;
}

const myYear = 2026;
const isMyLeapYear = isLeapYear(myYear);
console.log('is my year is leap year',isMyLeapYear);


const yourYear = 2040;
const isYourLeapYear = isLeapYear(yourYear);
console.log('is your year is leap year', isYourLeapYear);


const futureYear = 2300;
const isFutureLeapYear = isLeapYear(futureYear);
console.log('is future year will be leap year', isFutureLeapYear);