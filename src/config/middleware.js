const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

class Middleware {
  static init(app) {
    app.use(bodyParser.urlencoded({
      extended: false,
    }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(compression());
    app.use(helmet());
    app.use(cors());
  }

  static error(app) {
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
      next();
    });
  }
}
module.exports = Middleware;
