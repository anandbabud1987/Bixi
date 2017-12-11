import RequestService from './RequestService';

const BASE_URL = "http://XXXXX:2017/bixi-api";
const API_KEY = "?api-key=GET-YOUR-FREE-API-KEY:)";

class NetworkService {

  getUser(){
    var url = `${BASE_URL}/login/user`
    return RequestService.getRequest(url)
  }

  doLogin(data){
    var url=`${BASE_URL}/login/checkuser`
    return RequestService.postRequest(url,data);
  }

}

export default new NetworkService()
