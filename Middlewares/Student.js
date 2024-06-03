


exports.Student = async (req,res,next) => {
    try {
        if (req.Token.Role  !== "Student") {
            res.status(400).json({
                success:false,
            })
        }
        
        next();
    }
    catch (error) {
        
        res.status(500).json({
            success: false,
            message: error.message,
})

}


}