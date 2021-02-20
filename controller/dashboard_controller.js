const dashboardmodel = require("../model/dashboard_model");

async function showName(req, res) {
    const id = req.userData.user_id;
    const [result] = await dashboardmodel.getName(id);
    console.log(result);
    if (result) {
        return res.status(200).json(result);
    } else { 
           return res.json("something went wrong");
    }
}


module.exports.showName = showName;