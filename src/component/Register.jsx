import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WebService from "../services/WebService";
import WebAPI from "../Services/WebAPI";
// import WebAPI from "../services/WebAPI";

function Register()
{
  const[msg,setMsg] = useState('');
  const navigate = useNavigate();

  var name = useRef();
  var email = useRef();
  var password = useRef();
  var phone = useRef();
  var gender = useRef();

  var registerUser = async(event) =>{

    event.preventDefault();

    var nm = name.current.value;
    var em = email.current.value;
    var pass = password.current.value;
    var contact = phone.current.value;
    var gen = gender.current.value;

    console.log(`${nm} : ${em} : ${pass} : ${contact} : ${gen}`);
    var obj ={"name":nm,"phone":contact,"email":em,"password":pass,"gender":gen}

    var resp = await WebService.postAPICall(WebAPI.registerAPI,obj);
    console.log("Register Response is :"+resp);
    console.log("Register Response is "+JSON.stringify(resp));

    if(resp.data.status)
    {
      navigate("/");
    }
    else{
      setMsg(resp.data.message);
    }
  }
   return<div className="container">
    <h1 style={{textAlign:'center',color:'blue'}}>Register Here</h1>
    <form onSubmit={registerUser} >
      <div className="row">
        <div className="col-md-12 form-group">
          <input type="text" placeholder="Enter Name" ref={name} className="form-control"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group">
          <input type="text" placeholder="Enter Email" ref={email} className="form-control"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group">
          <input type="text" placeholder="Enter Password" ref={password} className="form-control"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group">
          <input type="text" placeholder="Enter Contact" ref={phone} className="form-control"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group">
          <select ref={gender} className="form-control">
            <option value='0'>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group">
          <input type="submit" value="Register" className="btn btn-success form-control"/>
        </div>
      </div>
    </form>
    <span>If you have already Registered, <Link to="/">Click Here!</Link></span>
    <h1 style={{color:'red'}}>{msg}</h1>
   </div>
}
export default Register;