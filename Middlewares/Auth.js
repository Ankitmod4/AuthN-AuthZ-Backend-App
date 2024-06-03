const jwt = require('jsonwebtoken');
const JWT_SECRET = 'MY NAME IS THIS RTHIS AND THIS';

exports.Auth = (req, res, next) => {
    try {
        
        const Token= req.body.Token ;
        if (!Token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing",
            });
        }

       
        try {
            
            const decoded = jwt.verify(Token, JWT_SECRET);
            req.Token = decoded;
            
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message:"Invalid",
            })
        }
       
        next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message,
        });
    }
};
