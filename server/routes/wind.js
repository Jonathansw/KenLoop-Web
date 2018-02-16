module.exports = function (app, schema) {
  const Wind = schema;
  const baseUrl = '/wind';

  app.get(baseUrl, (req, res) => {
    Wind.find({}, 'name description type', (error, item) => {
      if (error) {
        console.error(error);
      }

      res.send({
        wind: item,
      });
    });
  });
};
