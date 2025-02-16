import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import WebAPI from "../../Services/WebAPI";
import WebService from "../../services/WebService";

function MyProfile()
{
  const data = useSelector(state=>state.chatuserData.value);
  const navigate = useNavigate();

  var userProfile = useRef();
   
  const[myProfile,setMyProfileData] = useState({});

  useEffect(()=>{
     loadMyProfile();
  },[])

  var loadMyProfile = async ()=>{
   var resp = await WebService.getAPICall(WebAPI.loginUserProfile,data.token);
   console.log("User Profile : "+resp); 
   console.log("User Profile : "+JSON.stringify(resp));
  
   if(resp.data.status)
   {
     setMyProfileData(resp.data.data);
   } 
 }

 var uploadProfilePic = async (event)=>{
   
  event.preventDefault()

  var userPic = userProfile.current.files[0];
  var fdata = new FormData();
  fdata.append('image',userPic)
  var resp = await WebService.putAPICall(WebAPI.userUploadProfilePic,data.token,fdata);
  console.log("User Upload Profile Pic : "+resp); 
   console.log("User Upload Profile Pic : "+JSON.stringify(resp));

   if(resp.data.status)
   {
      navigate("/myProfile")
   } 
 }

   return<div className="container">
   <div className="page-inner">
     <div
       className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
     >
       <div>
         <h3 className="fw-bold mb-3">My Profile</h3>
         <h6 className="op-7 mb-2">Chat App</h6>
       </div>
      
     </div>
     <div className="row">
        <div className="col-md-12 ">
         <div className="card card-stats card-round">
           <div className="card-body">
             <div className="row align-items-center">
               <div className="col-icon">
                 <div className="icon-big text-center icon-primary bubble-shadow-small">
                   <img src={myProfile.image} height={80} width={80} className="img-rounded img-responsive"/>
                   <br/><br/>
                  </div>
               </div>
              &nbsp;&nbsp;
               <div className="col col-stats ms-3 ms-sm-0">
                 <div className="numbers">
                   <p className="card-category" style={{fontSize:'15px'}}>
                     {/* <strong>{myProfile.id}</strong> */}
                     <br/>
                     <b>{myProfile.name}</b>
                     <br/>
                     <b>{myProfile.phone}</b>
                     <br/>
                     <b>{myProfile.email}</b>
                     <br/>
                     <b>{myProfile.gender}</b>

                   <br/>
                  </p>                  
                 </div>   
               </div>
             </div>
             <br/>
             <form onSubmit={uploadProfilePic}>
                  <div className="row">
                    <label>Upload Profile Pic</label>
                    <input type="file" ref={userProfile}/>
                  </div>
                  <input type="submit" value="Upload Pic" className="btn btn-success"/>
                  <br/>
               </form>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
}
export default MyProfile;