
import React, {useState,setState} from 'react';
import '../../src/style.css'
import axios from 'axios'
function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [showTimer,setShowTimer] = useState(false);
    const [data,setdata] = useState([]);

    const [hh,setHH] = useState();
    const [mm,setMM] = useState();
    const [ss,setSS] = useState();

    const [fhh,setfHH] = useState();
    const [fmm,setfMM] = useState();
    const [fss,setfSS] = useState();

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }

    }

    const startCounter = () => {
        let calculateSecounts = (fhh - hh) * 60 * 60 + (fmm - mm) * 60 + (fss - ss)

        console.log(calculateSecounts," nnnnnnnnnnnnnnn")
        setInterval(() => {
           
        }, 1000);
    }

    const handleSubmit  = async  () => {
        const body = {
            firttime:firstName,
            lasttime:lastName
        }
        await axios.post(`http://localhost:4000/api/create`,body)
        .then((res)=>{
            setShowTimer(true)
            setdata(res.data)
            console.log(res,"ssssssss")
        })
        .catch((err)=>{

        })
        // let time = firstName.split(":");
        // setHH(time[0])
        // setMM(time[1])
        // setSS(time[2])
        
        // let finalTime = lastName.split(":")
        // setfHH(finalTime[0])
        // setfMM(finalTime[1])
        // setfSS(finalTime[2])
        // setShowTimer(!showTimer);
      
        // setTimeout(() => {
            
        //     console.log(firstName,"ppppppppppp",time, hh,mm  ,ss,fhh,fmm,fss)
        //     // startCounter();
        // }, 2000);
        
    }

    if(!showTimer){
        return(
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" for="firstName">First Time </label>
                        <input className="form__input" type="time" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name" step="2"/>
                    </div>
                    <div className="lastname">
                        <label className="form__label" for="lastName">Second Time</label>
                        <input  type="time" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName" step="2"/>
                    </div>
                </div>
                <div class="footer">
                    <button onClick={()=>handleSubmit()} type="submit" class="btn">Submit</button>
                </div>
            </div>
           
        )       
    }

    if(showTimer){
        return(
            <>
            {data.length>=1 && data ? data.map((x)=>{
                return(
                    <div>{x}</div>
                )
               
            }):<div>No Magical times found in the given range of time limit</div>}
            </>

        )
        
       
    }

}

export default RegistrationForm