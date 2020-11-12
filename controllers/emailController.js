const nodemailer = require('nodemailer'),
      {EMAIL, PASSWORD} = process.env;

module.exports = {
    email: async(req, res) => {
        const {firstName, lastName, email, subject, message} = req.body;

        try {
            let transporter = nodemailer.createTransport({
                host: 'stmp.gmail.com',
                port: 587,
                service: 'gmail',
                secure: false,
                requireTLS: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            })

            let info = await transporter.sendMail({
                from: `${firstName} ${lastName}, ${email}`,
                to: EMAIL,
                subject: subject,
                text: message,
                html: `<div>${message}</div>`
            }, (err, res) => {
                if(err){
                    console.log(err)
                } else {
                    res.status(200).send(info);
                }
            })
        } catch(err){
            res.status(500).send(err);
        }

        res.sendStatus(200);
    }
}