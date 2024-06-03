const { mongoose } = require('mongoose');


const DBconnect=async () => {
  await  mongoose.connect("mongodb://localhost:27017/AuthN",{
        UseUnifiedTopology: true,
        UseNewUrlParser:true,
    })
    .then(() => {
      console.log("Database connected")
    }
    )
    .catch((err) => {
        console.error(err);
    }
    )
}
module.exports = DBconnect;