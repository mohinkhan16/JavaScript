const array=[1,2,3,4,5,6,1,1,2,7,8];

const uniq =array.filter(x=>array.indexOf(x)===array.lastIndexOf(x));

const repeative=[...new Set(array.filter(x=>array.indexOf(x)!==array.lastIndexOf(x)))];

console.log("Uniq number is",uniq);

console.log("Reapitive number is",repeative);