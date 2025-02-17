import { useRef } from "react";
import WebAPI from "../../Services/WebAPI";
import WebService from "../../services/WebService";
import { useSelector } from "react-redux";

function UploadPost()
{
  const data = useSelector(state=>state.chatuserData.value);
   var uploadContent = useRef();
  var uploadFile = useRef();

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
</div>
</div>
}
export default UploadPost;