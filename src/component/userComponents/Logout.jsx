import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { changeUserInfo } from "../../redux/UserSlice";

function Logout()
{
    const navigate = useNavigate();
    const dispatch = useDispatch();

   useEffect(()=>{
       logout()
   })

   var logout = ()=>{

    var result_obj = {name:undefined,image:null,token:undefined,isLoginStatus:false};
    dispatch(changeUserInfo(result_obj));
    navigate("/");

   }

    return<div className="container">
   
    </div>
}
export default Logout;