const bcrypt = require('bcryptjs');

module.exports = {
    //admin functions go here
    login: async(req, res) => {
        //this function will login an admin
        const {email, password} = req.body,
              {session} = req,
              db = req.app.get('db');

        let [admin] = await db.auth.check_admin({email});
        if(!admin){
            return res.status(400).send('Email is incorrect')
        }

        const authorized = bcrypt.compareSync(password, admin.password);
        if(!authorized){
            return res.status(401).send('Password is incorrect')
        }

        delete admin.password;
        session.admin = admin;
        res.status(202).send(session.admin)
    },
    changePassword: (req, res) => {
        //this function will allow the admin to change their password
    }
}