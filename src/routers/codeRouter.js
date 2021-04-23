const debug = require('debug')('app:codeRouter');
const chalk = require('chalk');
const express = require('express');

const codeRouter = express.Router();

function router(pages) {
  codeRouter.route('/')
    .get((req, res) => {
      const renderInfo = {
        pages,
        endpoint: req.url,
        view: 'code',
      };
      res.render('wrapper', renderInfo);
    });

  return codeRouter;
}

module.exports = router;
