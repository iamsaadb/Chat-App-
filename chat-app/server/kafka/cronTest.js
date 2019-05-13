const cron = require('node-cron');

cron.schedule('* * * * * *', () => {
  console.log('running this task every second');
});

console.log('startin!')