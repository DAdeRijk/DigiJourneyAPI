'use strict';

/**
 * location router.
 */

module.exports = {
  routes: [
    {
      "method": "GET",
      "path": "/location/:code",
      "handler": "location.findByCode"
    },
  ],
};
