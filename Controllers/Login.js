const model = require('../Model/Schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'MY NAME IS THIS RTHIS AND THIS';
exports.Login = async (req,res) => {
    try { 
        const { Email, Password } = req.body;
        if (!Email || !Password) {
        return    res.status(400).json({
                success: false,
                message: "Please fill all the details",
            })
        };
        const get = await model.findOne({ Email });
        if (!get) {
          return   res.status(404).json({ 
                success: false,
                message:"Email not registered in Database please Create your account"
            })
        } 
        const checkingPass = await bcrypt.compare(Password, get.Password);
        const payload= {
            Email: get.Email,
           id: get._id, 
            Role: get.Role 
        }
        if (checkingPass) { 
            
           
            let Token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
            let user = get.toObject();
            user.Token = Token;
                
                
             return    res.status(200).json({
                 success: true,
                
                 get:user,
                  
                    message:"User Login SuccessFully",
                })
            } 
            else {
               return  res.status(401).json({
                    success: false,
                    message:"Password Not Matched",
            })
        } 

    }
  
    catch (error) {
       return  res.status(500).json({
            success: false,
            message:error.message,
      })

   }


}



