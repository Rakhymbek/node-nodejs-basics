const parseArgs = () => {
  const argsArr = process.argv.slice(2);
  const parsedArgs = [];
  argsArr.forEach((arg, index, thisArr) => {
    index % 2 === 0 ? parsedArgs.push(`${arg} is ${thisArr[index + 1]}`) : arg;
  });
  console.log(parsedArgs.join(', '));
};

parseArgs();
