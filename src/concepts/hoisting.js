const i = 0;

callOne();
callTwo();

function callOne() {
  const i = 1;
  console.log(i);
}

function callTwo() {
  const i = 2;
  console.log(i);
}

// arrow functions are added only to code
const callThree = () => {
  const i = 3;
  console.log(i);
};

console.log(i);
