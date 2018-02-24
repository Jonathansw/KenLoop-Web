module.exports = function (app, nodemailer) {
  const baseUrl = '/contact';

  app.post(baseUrl, (req, res) => {
    const stmpTrans = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: '',
        pass: '',
      },
    });
    const mailOpts = {
      from: req.body.email,
      to: '',
      subject: 'Website Contact',
      text: req.body.message,
    };

    stmpTrans.sendMail(mailOpts, (error, info) => {
      if (error) {
        res.send('contact-failure');
      } else {
        res.send('contact-successs');
      }
    });
  });
};
