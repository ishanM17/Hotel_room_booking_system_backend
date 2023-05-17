const jwt = require('jsonwebtoken');

const newToken = async (user, res)=>{
    user.token = jwt.sign({ email: user.email }, process.env.SECRET);
    user.save({ validareBeforeSave: false});
    return res.status(200).send({
        message: 'Success',
        data: { user: user }
    });
};

module.exports = newToken;