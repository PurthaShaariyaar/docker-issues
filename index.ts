import { app } from './app';

const PORT = 4000;

const start = () => {
  console.log('Starting!');
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

start();
