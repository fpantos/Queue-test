const { Queue, Worker } = require('bullmq');

// Define connection options
const connectionOptions = {
  connection: {
    host: 'us1-delicate-fox-41644.upstash.io',
    port: 41644,
    password: '',
  },
};

// Create a BullMQ queue
const queue = new Queue('example-queue', connectionOptions);

// Define worker to process messages from the queue
const worker = new Worker('example-queue', async (job) => {
  // Process the message
  console.log(`Processing job ${job.id}: ${job.data}`);
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`Job ${job.id} processed successfully.`);
}, connectionOptions);

console.log('Worker started. Waiting for jobs...');