const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kimjisu:wltn3817@easy-lecture.lk5xk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("hello world!")
});
 
app.listen(port, () => {
    console.log(`${port}번 포트로 서버 가동!`);
}); 