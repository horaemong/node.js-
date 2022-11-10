const express = require('express');
const app = express();
app.use(express.urlencoded({
  extended: true
}))


app.listen(8080, function () {
  console.log('listening on 8080');
});

app.get('/pet', function (req, res) {
  res.send('hello')
});

app.get('/beauty', function (req, res) {
  res.send("hello here's beauty");
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/write', (req, res) => {
  res.sendFile(__dirname + '/write.html')
});

app.post('/add', (req, res) => {
  res.send('전송완료');
  console.log(req.body.title);
});