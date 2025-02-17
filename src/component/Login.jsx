import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import WebService from "../services/WebService";
// import WebAPI from "../services/WebAPI";
import { changeUserInfo } from "../redux/UserSlice.jsx";
import WebAPI from "../Services/WebAPI.jsx";

function Login()
{
  const[msg,setMsg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var email = useRef();
  var password = useRef();

  var loginUser = async(event) =>{
    event.preventDefault();

    var em = email.current.value;
    var pass = password.current.value;

    console.log(`${em} : ${pass}`);
    var obj = {"email":em,"password":pass}

    var resp = await WebService.postAPICall(WebAPI.loginAPI,obj);
    console.log("Login Response is :"+resp);
    console.log("Login Response is :"+JSON.stringify(resp));

    if(resp.data.status)
    {
      var result_obj = {...resp.data.data,isLoginStatus:true};
      dispatch(changeUserInfo(result_obj));
      navigate("/userHome");
    }
    else{
      setMsg((await resp).data.message);
    }
  }
   return<div className="container">
    <h1 style={{textAlign:'center',color:'blue'}}>Login Here</h1>
    <form onSubmit={loginUser} >
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
          <input type="submit" value="Login" className="btn btn-success form-control"/>
        </div>
      </div>
    </form>
    <span>If you have not Registered yet, <Link to="/register">Click Here!</Link></span>
    <h1>{msg}</h1>
   </div>
}
export default Login;