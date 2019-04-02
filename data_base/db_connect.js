//impport module
const mongoose = require("mongoose")
//set mongoose
const db = mongoose.connection
const mongoDB = "mongodb://localhost/my_database2"
mongoose.connect(mongoDB, { useNewUrlParser: true })

//get mongoose global library
mongoose.Promise = global.Promise


db.on("connected",function(){
    console.log("=============CONECTADO===================")

})

//erro event

db.on("error",function (err){
    console.log("ocoreu um erro:"+err)
})
db.on("disconnected",function () {
    console.log("=============desconectado=============")
})
const useSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true,
    },
    sub_name:{
        type:String,
        trim:true,
        require:true,
    },
    age:{
        type:String,
        trim:true,
        require:true,
    }
})

const User = mongoose.model("User",useSchema)

module.exports = { User }
//return User;