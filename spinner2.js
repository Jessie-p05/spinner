const spin = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\']
let i = 100;
for (let ele of spin) {
  setTimeout(() => {
    process.stdout.write('\r' + ele);
  }, i);
  i += 200;
};

setTimeout(() => console.log(''), i);





