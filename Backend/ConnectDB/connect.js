const mongoose = require('mongoose')

module.exports = async () => {
    try {
       await mongoose.connect(process.env.DB)
       console.log("DB Connected..");
       
    } catch (error) {
        console.log(error);
        
        
    }

}