const userModel = require("../model/userModel")


const userController = async(req,res)=>{
  console.log(req.body.values);

  const data = new userModel({
    name:req.body.values.username,
    email:req.body.values.email
  })

  await data.save();

  res.status(200).send({
        success:true,
        message:"Data is saved",
        data
  })

}


const getUserController = async(req,res)=>{
     const userData = await userModel.find();

       res.status(200).send({
        success:true,
        message:"Data is Fetched",
        userData
  })
}


module.exports = {userController,getUserController};