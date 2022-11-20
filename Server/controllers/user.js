const {
    createUser
} = require('../models/user_model')

const jwt = require('jsonwebtoken');
const date = require('date-and-time')

exports.create = async (req,res) => {
    try{
        // console.log(req.body);
        const {firttime,lasttime} = req.body
        // console.log(firttime,"firsttime",lasttime)
        let first = firttime.split(":");
        let hh = first[0];
        let mm = first[1];
        let ss = first[2];
        let result = [];

        function recursive(firttime){
            
            let arr =[]
            if(firttime!==lasttime){
                // console.log("kkkk")
                for(let i =0;i<firttime.length;i++){
                    if(arr.includes(firttime[i])){
                        
                    }else{
                        arr.push(firttime[i])
                    }
                }
                let n = arr.length;
                if(n<=3){
                    result.push(firttime)
                }
                if(parseInt(ss) <= 59){
                    ss = parseInt(ss)+1;
                }else if(parseInt(mm) <= 59){
                    ss = 00;
                    mm = parseInt(mm)+1;
                }else{
                    mm = 00;
                    ss =00
                    hh = parseInt(hh)+1;
                }
                if(ss <= 9){   
                    ss = '0'+ss
                }
                
                if(mm<= 9 ){
                    // let x = mm.length
                    // if(mm > 0  || x<=2 ){
                    //     console.log(mm,typeof(mm),"mmmm")
                    //     // if(mm.length<=2){
                    //         mm = '0'+mm  
                    //     // }
                                       
                    // }
                    // else{
                    //     mm = mm;
                    // }
                    mm = ''+mm
                    if(mm.length < 2){
                        mm = '0' + mm 
                    }else{
                        mm =mm
                    }
                   
                }
                
                
                new_var = parseInt(hh)+':'+mm + ':' + ss;
                
                time =""
                time = time+new_var
                recursive(time)
            }else{
                res.send(result)
                console.log(result);
                console.log("success")
                return false;
            }
                
            
        }
        recursive(firttime);
    }   
    catch (err) {
        res.send(err)
    }
}
exports.login = async (req, res) => {
    const user ={
        id:1,
        username:"rahul",
        email:"rahul@gmail.com"

    }
    jwt.sign({user:user},"Private_key",{expiresIn: '30s' },(err,token)=>{
        res.send({
            token:token
        })
    })
}