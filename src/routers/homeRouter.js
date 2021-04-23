const debug = require('debug')('app:homeRouter');
const chalk = require('chalk');
const express = require('express');

const homeRouter = express.Router();

function router(pages) {
  homeRouter.route('/')
    .get((req, res) => {
      const renderInfo = {
        pages,
        endpoint: req.url,
        view: 'index',
      };
      debug(`
        Status: ${chalk.green('Requested')}
        Endpoint: ${chalk.green(req.url)}
        Method: ${chalk.green(req.method)}
      `);
      res.render('wrapper', renderInfo);
    });

  return homeRouter;
}

module.exports = router;
