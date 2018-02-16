module.exports = function (app, schema) {
  const Bag = schema;
  const baseUrl = '/bag';

  app.get(baseUrl, (req, res) => {
    Bag.find({}, 'name description type', (error, item) => {
      if (error) {
        console.error(error);
      }

      res.send({
        bag: item,
      });
    });
  });
};
