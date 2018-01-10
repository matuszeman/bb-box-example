console.log('Node ' + process.version + ' is running ...'); //XXX

setInterval(() => {
  console.log(new Date().toISOString()); //XXX
}, 2000);
