const mongoose=require('mongoose');
const Connection = "mongodb+srv://YafitSamuel:yafit642@cluster0.dxw7h.mongodb.net/HairStyleDB?retryWrites=true&w=majority"
mongoose.connect(Connection,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('connected'))
.catch((err)=>console.log('error'));

module.exports=mongoose.connection;


