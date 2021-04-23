const debug = require('debug')('app');
const chalk = require('chalk');
const express = require('express');
const config = require('config');
const path = require('path');

// Configuration Info
const serverConfig = config.get('serverConfig');
const { port, environment } = serverConfig;
const websiteConfig = config.get('websiteConfig');
const { pages } = websiteConfig;

const app = express();

// Middlewares
app.set('view engine', 'ejs');
app.use(express.json());

// Static Routes
app.use('/css', express.static(path.join(__dirname, 'assets', 'css')));
app.use('/js', express.static(path.join(__dirname, 'assets', 'js')));

// Routers
const homeRouter = require('./Routers/homeRouter')(pages);
const aboutRouter = require('./Routers/aboutRouter')(pages);
const codeRouter = require('./Routers/codeRouter')(pages);

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/code', codeRouter);

// Express Listener
app.listen(port, (err) => {
  if (err) {
    debug(`
      Status: ${chalk.red('Not Running')}
      Port: ${chalk.red(port)}
      Environment: ${chalk.red(environment)}
      Error: ${chalk.red(err)}
    `);
  } else {
    debug(`
      Status: ${chalk.green('Running')}
      Port: ${chalk.green(port)}
      Environment: ${chalk.green(environment)}
    `);
  }
});
