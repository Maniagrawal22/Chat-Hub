import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WebAPI from "../../Services/WebAPI";
import WebService from "../../services/WebService";

function OurPosts()
{
   const data = useSelector(state=>state.chatuserData.value);
   const[myPostData,setMyPostData] = useState([]);
   
    useEffect(()=>{
        loadMyPosts();
     },[])
  
     var loadMyPosts = async ()=>{
      var resp = await WebService.getAPICall(WebAPI.myPost,data.token);
      console.log("My Post : "+resp); 
      console.log("My Post : "+JSON.stringify(resp));
      
      if(resp.data.status)
      {
        setMyPostData(resp.data.data);
      } 
    }
    return<div className="container">
    <div className="page-inner">
      <div
        className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
      >
        <div>
          <h3 className="fw-bold mb-3">My Post's</h3>
          <h6 className="op-7 mb-2">Chat App</h6>
        </div>
      
      </div>
      <div className="row">
        {myPostData.map((post_data,index)=>{
          return<div className="col-md-12 ">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-icon">
                 
                </div>
                <div className="col col-stats ms-3 ms-sm-0">
                  <div className="numbers">
                    <p>
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
              <button className="btn btn-primary">View Comment</button>&nbsp;&nbsp;
            </div>
          </div>
        </div>
        })}
      </div>
    </div>
  </div>
}
export default OurPosts;