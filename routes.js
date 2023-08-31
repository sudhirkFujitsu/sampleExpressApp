const cacheCtrl = require("./cache-controller");

module.exports = function (app) {

  //***********User Routes *************** */

  app.route("/v1/api/orderLineTeps/moveToRedis")
  .get(cacheCtrl.loadsDataToRedis);

};

