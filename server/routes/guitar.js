module.exports = function (app, schema) {
  const Guitar = schema;
  const baseUrl = '/guitar';

  app.get(baseUrl, (req, res) => {
    Guitar.find({}, 'name description type', (error, item) => {
      if (error) {
        console.error(error);
      }

      res.send({
        guitar: item,
      });
    });
  });
};
