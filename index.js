const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;
// const programmingLanguagesRouter = require('./src/routes/programmingLanguages.route');
// const listRouter = require('./src/routes/list.route');
const routerModules = require('./src/routes/index.route');

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.get('/', (req, res) => {
//   res.json({'message': 'xxx`'});
// })

// app.use('/programming-languages', programmingLanguagesRouter);
// app.use('/list', listRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
