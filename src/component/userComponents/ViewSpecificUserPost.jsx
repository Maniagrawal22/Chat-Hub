// import 'bootstrap/dist/css/bootstrap.min.css'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



function ViewSpecificUserPost()
{

   const postData = useSelector(state=>state.postUserData.value);
    const [post_by_name,setPostByName] = useState('');

   console.log("Data is : "+JSON.stringify(postData));
   
   useEffect(()=>{
      postData.map((p_data,index)=>setPostByName(p_data.postBy.name))
   },[]);

   var show = ()=>{
       alert("Shklfjnklesnf");
   }

    return<div className="container">
    <div className="page-inner">
      <div
        className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
      >
        <div>
          <h3 className="fw-bold mb-3">User's Post's</h3>
          <h6 className="op-7 mb-2">Chat App : <b style={{color:'red',fontSize:'20'}}>{post_by_name.toUpperCase()}</b></h6>
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
              <button className="btn btn-primary" onclick={show} >Comment</button>&nbsp;&nbsp;
             </div>
          </div>
        </div>
        })}
      </div>
    </div>
  </div>
}
export default ViewSpecificUserPost;