import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeUserPostInfo } from "../../redux/UserPostSlice";
import WebAPI from "../../Services/WebAPI";
import WebService from "../../services/WebService";

function UserList()
{
    const data = useSelector(state=>state.chatuserData.value);
   
    const[userListData,setUserListData] = useState([]);
    const [specificUserPostDetails,setSpecificUserPostDetails] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    useEffect(()=>{
       loadUserList();
    },[])
 
    var loadUserList = async ()=>{
     var resp = await WebService.getAPICall(WebAPI.userList,data.token);
     console.log("List : "+resp); 
     console.log("List : "+JSON.stringify(resp));
    
     if(resp.data.status)
     {
        setUserListData(resp.data.data);
     }
   }

   var getId = async (id)=>{
    
       console.log("Id is : "+id);

       var resp = await WebService.getAPICall(`${WebAPI.viewSpecificUserPost}/${id}`,data.token);
    //    alert("Specific Post : "+JSON.stringify(resp));
       console.log("Specific Post : "+JSON.stringify(resp));

       if(resp.data.status == true)
       {
          var arr = resp.data.data;
          if(arr.length != 0 )
          {
            dispatch(changeUserPostInfo(resp.data.data));
            navigate("/viewSpecificUserPost");         
          }
          else
          {
            alert("Post Not Available.")
          }
             
       }
   }


 
     return<div className="container">
     <div className="page-inner">
       <div
         className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
       >
         <div>
           <h3 className="fw-bold mb-3">User's List's</h3>
           <h6 className="op-7 mb-2">Chat App</h6>
         </div>
        
       </div>
       <div className="row">
         {userListData.map((user_data,index)=>{
           return<div className="col-md-12 ">
           <div className="card card-stats card-round">
             <div className="card-body">
               <div className="row align-items-center">
                 <div className="col-icon">
                   <div className="icon-big text-center icon-primary bubble-shadow-small">
                     <img src={user_data.image} className="img-circle img-responsive" height={80} width={80} />
                   </div>
                 </div>
                 <div className="col col-stats ms-3 ms-sm-0">
                   <div className="numbers col-md-6">
                     <p className="card-category">
                       <b>{user_data.name}</b> 
                      <div style={{float:'right'}}> 
                          <button className="btn btn-success" onClick={()=>getId(user_data.id)}>View Post</button>
                           &nbsp;&nbsp;
                           <button className="btn btn-success">Send Request</button>
                           &nbsp;&nbsp;
                           <button className="btn btn-danger">Send Message</button>
                      </div>
                     </p>
                     <br/>
                   
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </div>
         })}
       </div>
     </div>
   </div>
}
export default UserList;