// const db = require('../config/db')
module.exports.createUser = (data) =>{
   return new Promise((resolve, reject) => {
     console.log(data)
    db.query(`Insert into Dummy SET ? `,data)
    .then((res)=>{
       
        resolve({msg:"data inserted correctly",status:1,res:res})
    }).catch((err)=>{
        reject({msg:"data did not inserted correctly",status:0,err:err})
    })
    
   })
}