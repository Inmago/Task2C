import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function canonize(url) {
  const re = new RegExp('(https?:)?(\/\/)?(www\\W)?([a-z]*[\.][a-z]*)?(\/)?(\\W)?([a-zA-Z0-9\\.]*)', 'i');
  const username = url.match(re);
//  return username;
  return `@${username[7]}`;
}
// https://vk.com/skillbranch
app.get('/Task2C', (req, res) => {
  res.send(canonize(req.query.username));
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
