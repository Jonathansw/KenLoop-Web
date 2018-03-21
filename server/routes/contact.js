module.exports = function (app, nodemailer, emailPass) {
  const baseUrl = '/contact';
  app.post(baseUrl, (req, res) => {
    const stmpTrans = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'kenloopwebsite@gmail.com',
        pass: 'KenLoopInt',
      },
    });
    
    // Change to email to proper reciving email
    const mailOpts = {
      from: req.body.email,
      to: 'kenloopwebsite@gmail.com',
      subject: `Website Contact from ${req.body.name} <${req.body.email}>`,
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
