const COIN_TYPES = [500, 100, 50, 10];

let n = 1260
let count = 0;

for(const coin of COIN_TYPES){
  count += ~~(n / coin);
  n %= coin
}

console.log(count)