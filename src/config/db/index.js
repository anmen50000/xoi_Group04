const mongoose = require('mongoose'); 

   async function connect (){

    try {
        await mongoose.connect('mongodb+srv://tamtran:tam@tran@2020@dgnl-hcmue.8yayn.mongodb.net/Group_04?retryWrites=true&w=majority',  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            
});    
            console.log(' Connect successfully!! ') 
    }       catch (error) {
            console.log(' Connect failure!! ')   
    }
}
module.exports = { connect };