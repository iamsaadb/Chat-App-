const KafkaProducer = require('./KafkaProducer.js');

const producer = new KafkaProducer('myTopic');

producer.connect(() => {
  setInterval(() => {
    var min = 0;
    var max = 1000;
    var random = Math.floor(Math.random() * (max - min)) + min;
    producer.send(random);
  }, 3000);
});