import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import WebAPI from "../../Services/WebAPI";
import WebService from "../../services/WebService";
//import WebService from "../../Services/WebService";

function UserHome()
{
   const data = useSelector(state=>state.chatuserData.value);
   const[postData,setPostData] = useState([]);
   
   var uploadContent = useRef();
   var uploadFile = useRef();

   useEffect(()=>{
      loadUserPosts();
   },[])

   var loadUserPosts = async ()=>{
    var resp = await WebService.getAPICall(WebAPI.userPosts,data.token);
    console.log("Post : "+resp); 
    console.log("Post : "+JSON.stringify(resp));
    if(resp.data.status)
    {
      setPostData(resp.data.data);
    } 
  }

  var uploadPost =async (event)=>{
    event.preventDefault()

    var u_content = uploadContent.current.value;
    var u_file = uploadFile.current.files[0];
    var resp;
    
    if(u_file != undefined)
    {
       var fdata = new FormData();
       fdata.append("message",u_content);
       fdata.append("image",u_file);

       resp = await WebService.postAPICallWithToken(WebAPI.uploadPost,data.token,fdata);
    }
    else
    {
      var obj = {message : u_content}
      resp = await WebService.postAPICallWithToken(WebAPI.uploadPost,data.token,obj);
    }
    console.log("Post Resp is : "+resp)
    console.log("Post Resp is : "+JSON.stringify(resp))
  

  }

    return<div className="container">
    <div className="page-inner">
      <div className="row" style={{background:'grey'}}>
         <form onSubmit={uploadPost}>
           <div className="row">
            <div className="col-md-12 form-group">
            <textarea className="form-control" rows={10} 
            placeholder="Enter Any Content for Post/Upload" ref={uploadContent}></textarea>
            </div>
           </div>

           <div className="row">
            <div className="col-md-12 form-group">
              <input type="file" className="form-control" ref={uploadFile}/>
            </div>
           </div>

           <div className="row">
            <div className="col-md-12 form-group">
              <input type="submit" value="upload Post" className="btn btn-success form-control"/>
            </div>
           </div>
         </form>
      </div>

   <br/><br/>

      <div
        className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
      >
        <div>
          <h3 className="fw-bold mb-3">User's Post's</h3>
          <h6 className="op-7 mb-2">Chat App</h6>
        </div>
      
      </div>
      <div className="row">
        {postData.map((post_data,index)=>{
          return<div className="col-md-12 ">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-icon">
                  <div className="icon-big text-center icon-primary bubble-shadow-small">
                    <img src={post_data.postBy.image} className="img-circle img-responsive" height={80} width={80} />
                  </div>
                </div>
                <div className="col col-stats ms-3 ms-sm-0">
                  <div className="numbers">
                    <p className="card-category">
                      <b>{post_data.postBy.name}</b>
                    <br/>
                    {post_data.postdate}
                    </p>
                    <h6 className="card-title">
                      <p>{post_data.message}</p>
                    </h6>
                    <br/>
                    <p>
                    <img src={post_data.postfile} className="img-circle img-responsive" height={100} width={100} />
                    </p>
                  </div>
                  
                </div>
              </div>
              <button className="btn btn-primary">Like</button>&nbsp;&nbsp;
              <button className="btn btn-primary">Comment</button>&nbsp;&nbsp;
              <button className="btn btn-info">Share</button>&nbsp;&nbsp;
            </div>
          </div>
        </div>
        })}
      </div>
    </div>
  </div>
}
export default UserHome;