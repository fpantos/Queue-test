const { Queue } = require('bullmq');

// Create a BullMQ queue
const queue = new Queue('example-queue', {
  connection: {
    host: 'us1-delicate-fox-41644.upstash.io',
    port: 41644,
    password: '',
  },
});

// Enqueue messages
async function enqueueMessages() {
  await queue.add('Message 1');
  await queue.add('Message 2');
  await queue.add('Message 3');
  console.log('Messages enqueued successfully.');
}

enqueueMessages();
