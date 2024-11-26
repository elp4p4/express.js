const fs = require("fs");

function verify(pagesPath) {
  return (_req, res, next) => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    // Check if the current time is within the allowed period
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.status(403).sendFile('error.html', { root: pagesPath });
    }
  };
}

module.exports = verify;
