module.exports = function (app, nodemailer, config) {
  const baseUrl = '/contact';
  const emailPass = config.emailPass;
  app.post(baseUrl, (req, res) => {
    const stmpTrans = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'kenloopwebsite@gmail.com',
        pass: emailPass,
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
