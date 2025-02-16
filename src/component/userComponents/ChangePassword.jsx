import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeUserInfo } from "../../redux/UserSlice";
import WebAPI from "../../Services/WebAPI";
import WebService from "../../services/WebService";

function ChangePassword()
{
    const[msg,setMsg] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector(state=>state.chatuserData.value);

    var oldPassword = useRef();
    var newPassword = useRef();

    var changePassword =async (event)=>{
     
      event.preventDefault();

      var old_password = oldPassword.current.value;
      var new_password = newPassword.current.value;
      
      var obj = {"old_password" : old_password , "new_password" : new_password}

      var resp = await WebService.putAPICall(WebAPI.changePassword,data.token,obj);
      console.log("change Password is "+resp);
      console.log("change Password  Response is "+JSON.stringify(resp));
      if(resp.data.status)
      {
        var result_obj = {name:undefined,image:null,token:undefined,isLoginStatus:false};
        dispatch(changeUserInfo(result_obj));
        navigate("/");
      }
      else
      {
         setMsg(resp.data.message);
      }
    }

    return<div className="container">
         <div className="page-inner">
        <h1 style={{textAlign:'center', color:'black'}}>
            Change Password Here
        </h1>
      <form onSubmit={changePassword}>
       <div className="row">
         <div className="col-md-12 form-group">
            <input type="text" placeholder="Enter Old Password" ref={oldPassword} className="form-control"/>
         </div>
       </div>
       <div className="row">
        <div className="col-md-12 form-group">
            <input type="text" placeholder="Enter New Password" ref={newPassword} className="form-control"/>
         </div>
       </div>
       <div className="row">
         <div className="col-md-12 form-group">
            <input type="submit" value="Change Password" className="btn btn-success form-control"/>
         </div>
       </div>
      </form>
     <h1>{msg}</h1>
    </div>
    </div>
}
export default ChangePassword;