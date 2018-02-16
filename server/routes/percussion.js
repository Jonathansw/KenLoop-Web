module.exports = function (app, schema) {
  const Percussion = schema;
  const baseUrl = '/percussion';

  app.get(baseUrl, (req, res) => {
    Percussion.find({}, 'name size description type', (error, item) => {
      if (error) {
        console.error(error);
      }

      res.send({
        percussion: item,
      });
    });
  });
};
