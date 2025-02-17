import axios from "axios";

class WebService
{
    postAPICall(url,data)
    {
        var result = axios.post(url,data);
        return result;
    }
    getAPICall(url,token)
    {
        console.log("URL is : "+url)
        var result = axios.get(url,{headers:{
            'Authorization':'Bearer '+token
        }})
        return result
    }

    putAPICall(url,token,data)
    {
        var result = axios.put(url,data,{headers:{
            'Authorization':'Bearer '+token
        }})
        return result
    }
    
    postAPICallWithToken(url,token,data)
    {
        var result = axios.post(url,data,{headers:{
            'Authorization':'Bearer '+token
        }})
        return result
    }
}

export default new WebService();
