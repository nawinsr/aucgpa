const signupmodel = require("../model/signup_model");

async function signupStudent(req, res) {
    const { name, rollno, password } = req.body;
    console.log(rollno);
    const result = await signupmodel.getRollNo(rollno);
    console.log(result);
    if (result) {
        return res.status(201).json("0");
    } else {
        const success = await signupmodel.insertUser(name,rollno, password);
      
        
        return (success) === true ? res.status(201).json("1") : res.status(400).send(req.body);
    }
}


module.exports.signupStudent = signupStudent;