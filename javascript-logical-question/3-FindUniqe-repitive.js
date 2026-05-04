const num = [1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10];

const findValue = (num) => {
  let count = {};
  let unique = [];
  let repet = [];

  for (let n of num) {
    if (count[n]) {
      count[n] += 1;
    } else {
      count[n] = 1;
    }
  }

  for (let key in count) {
    if (count[key] === 1) {
      unique.push(Number(key));
    } else {
      repet.push(Number(key));
    }
  }

  console.log("Total count is",count);
  console.log( "Unique is ",unique);
  console.log("Repet number is ",repet);
};

findValue(num);