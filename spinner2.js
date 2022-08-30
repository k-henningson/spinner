const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ','\r-   ', '\r\\   ', '\r|   ', '\n'];

const spinner2 = function (spinner) {
let interval = 0;
//console.log('spinner',spinner);

spinner.forEach((animation) => {
  setTimeout(() => {
    process.stdout.write(animation);
  }, (interval))
  interval += 200;
});
};

spinner2(spinner);

