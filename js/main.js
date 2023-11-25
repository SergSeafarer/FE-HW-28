const pow = function(x, y) {
  if(y < 0) {
    return 1 / (pow(x, (-y)));
  }
  if(y === 0) {
    return 1;
  }
  if(y === 1) {
    return x;
  } else {
    return x * pow(x, (y-1));
  }
}
console.log(pow(2, 2));

