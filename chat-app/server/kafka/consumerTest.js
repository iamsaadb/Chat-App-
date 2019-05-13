const KafkaConsumer = require('./KafkaConsumer');

const consumer = new KafkaConsumer(['myTopic', 'myOtherTopic']);

consumer.on('message', (message) => {
  console.log(message);
});

consumer.connect();