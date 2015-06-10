var numbers = process.argv,
    result = 0;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 1) {
    //console.log(typeof numbers[i])
    result = result + Number(numbers[i]);
  }
}

console.log(result)
