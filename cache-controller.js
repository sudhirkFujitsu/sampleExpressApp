const path = require("path");
const fs = require("fs");
const _ = require("lodash");

module.exports = (function () {
  return {
    loadsDataToRedis: async function (req, res) {
      console.log("dumping orderLines to redis", req.params.orderId);
      const orderLineStepsToMove = [];

      // const orderLines = require("./orderLineSteps.json");
      // const orders = require("./order.json");
      // console.log("orders length", orders.length);
      // const order = _.find(orderData, {
      //   ID: "cb9c35ef-cce3-4864-96aa-ee9c0fc50503",
      // });
      // const orderLineStep = _.filter(orderLines, function (o) {
      //   return (o.orderID = "cb9c35ef-cce3-4864-96aa-ee9c0fc50503");
      // });
      return res
        .status(200)
        .json({ success: true, order: orderLineStepsToMove, orderLines: orderLineStepsToMove });
    },
  };
})();
