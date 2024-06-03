const model = require('../Model/Schema');
const bcrypt = require('bcrypt');
exports.Signup = async (req,res) => {
    const { Name, Email, Password, Role } = req.body;
    let password = await bcrypt.hash(Password,10);
    try {
        const get = await model.findOne({ Email });
        if (get) { 
        
            res.status(500).json({
                sucess: false,
                message:"Email already find please login or create using different email",
           }) 
        }
      
        else {
             
            const data =await model.create({
                Name, Email, Password:password, Role
            });
        
            res.status(200).json({
                success: true,
                message: "Account Created Successfully",
                data: data,
            })
        }

}
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message, 

        })
}
}
