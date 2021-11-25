import axios from "axios";
//对axios进行封装,减小axios与项目的耦合
export function request(config) {
    const instance=axios.create({
      baseURL:'http://localhost:8899',
      timeout:2000
    })
  // instance(config).then(res=>{
  //   success(res)
  // }).catch(err=>{
  //   failure(err)
  // })
  return instance(config);//返回值是一个promise对象
}
