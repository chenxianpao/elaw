import http from '../utils/requests';

/**
 * 获取首页列表
 */
function getUserList(){
  return new Promise((resolve, reject) => {
    http("get",'classes/_User').then(res => {
      // debugger
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  })
}

function login(username, password){
  return new Promise((resolve, reject) => {
    http("get",'login', {"username": username, "password": password}).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  })
}

function createUser(username, email, password){
  // debugger
  return new Promise((resolve, reject) => {
    http("post",'classes/_User', {"username": username, "email": email, "password": password}).then(res => {
      // debugger
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  })
}

export {
  getUserList,
  createUser,
  login
}