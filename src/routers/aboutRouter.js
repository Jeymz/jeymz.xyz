const debug = require('debug')('app:aboutRouter');
const chalk = require('chalk');
const express = require('express');

const aboutRouter = express.Router();

function router(pages) {
  aboutRouter.route('/')
    .get((req, res) => {
      const renderInfo = {
        pages,
        endpoint: req.endpoint,
        view: 'about',
      };
      debug(`
        Status: ${chalk.green('Requested')}
        Endpoint: ${chalk.green(req.url)}
        Method: ${chalk.green(req.method)}
      `);
      res.render('wrapper', renderInfo);
    });

  return aboutRouter;
}

module.exports = router;
