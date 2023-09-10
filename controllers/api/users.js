const bcrypt = require('bcrypt');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');


module.exports = {
  create,
  login,
};


//different way to create the user.
//creation and hashing of the password inside this controller.
async function create(req, res) {
  try {
    //check if a user already exists based on email 
    const userExists = await User.findOne({email: req.body.email});
    if (userExists)
    {
      return res
      .status(400)
      .send({message: "User Already Exists", 
      success:false});
    }
    const password = req.body.password;
    //salt rounds for the password
    const salt = await bcrypt.genSalt(10);
    const hasedhPassword = await bcrypt.hash(password, salt);
    req.body.password = hasedhPassword;
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({ message: "User Created Successfully", success: true});
  } catch (error) {
    res.status(500).send({ message: "Error Creating User. Please Try Agin or Contact Administrator.", succes: false, error});
  }
}

async function login(req, res) {
  try {
    //check if the email exists, then go with the rest of the functionality
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
      .status(200)
      .send({message: "User Does Not Exist. Please Register.", 
      success: false});
    }
    //if there is a match for the user, then go ahead to compare the hashed password
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res
      .status(200)
      .send({message: "Incorrect Credentials", 
      success: false});
    }else{
      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: '2h'
      })
      res.status(200).send({ message: 'Login Successfull. Welcome Back!', success: true, data:token });
    }
  } catch (error) {
    console.log("wtf")
    res.status(500).send({ message: "Error Loggin In. Please Try Agin or Contact Administrator.", succes: false, error});
  }
};
