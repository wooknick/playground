const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [N, K] = data[0].split(" ").map(Number);
const mod = 1000000007n;

const fact = new Array(N + 1);
fact[0] = 1n;
fact[1] = 1n;
const invFact = new Array(N + 1);
invFact[0] = 1n;
invFact[1] = 1n;

for (let i = 2; i <= N; i++) {
  fact[i] = (1n * (fact[i - 1] * BigInt(i))) % mod;
}
for (let i = 2; i <= N; i++) {
  invFact[i] = (-1n * (mod / BigInt(i)) * invFact[mod % BigInt(i)]) % mod;
}
for (let i = 2; i <= N; i++) {
  invFact[i] = (1n * invFact[i - 1] * ((invFact[i] + mod) % mod)) % mod;
}
// for (let i = 2; i <= N; i++) {
//   invFact[i] = invFact[i - 1] * pow(BigInt(i), mod - 2n);
// }

// const A = fact[N];
// const B = (fact[N - K] * fact[K]) % mod;
// const answer = (A * pow(B, mod - 2n)) % mod;

const answer = fact[N] * (invFact[N - K] % mod) * (invFact[K] % mod);
console.log(Number(answer % mod));
