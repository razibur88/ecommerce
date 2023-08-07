const nodemailer = require("nodemailer");


async function sendEmail(email,varify, template){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: 'rajib.cit.bd@gmail.com',
          pass: 'mluyawvghvdjbbzj'
        }

      });
      
     
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: 'rajib.cit.bd@gmail.com', // sender address
          to: email, // list of receivers
          subject: "Please Verify Your Mail", // Subject line
          html: template(varify), // html body
        });
    
}
module.exports = sendEmail