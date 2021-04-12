const express = require('express')
const app = express()
const api = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use('/api', api);

const port = 3002;
app.listen(port, ()=>console.log(`Listening on port &{port}`));



// const express    = require('express');
// const dbconfig   = require('./config/database.js')(); // 위에서 생성한 MySQL에 연결을 위한 코드(모듈)
// const connection = dbconfig.init();                   // node express 와 MySQL의 연동

// const app = express();

// // configuration 
// app.set('port', process.env.PORT || 5000);

// // routing
// app.get('/musicdata', (req, res) => {                             //DB에 접근할 수 있는 주소와
//   connection.query('SELECT * from musicdata', (error, rows) => {  //쿼리문 
//     if (error) throw error;
//     res.send(rows);
//   });
// });

// app.listen(app.get('port'), () => {
//   console.log('포트 넘버 : ' + app.get('port') + "에서 실행 중");
// });