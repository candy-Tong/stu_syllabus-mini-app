//app.js

global.token = undefined

// 汕大账号信息
global.account
global.password
global.years
global.semester

global.showError = true
global.baseurl = 'https://candycute.cn/'
global.stuUrl = 'https://class.stuapps.com'
global.userInfo = null

App({

  getPage: function (pageName) {
    var pages = getCurrentPages()
    return pages.find(function (page) {
      return page.__route__ == pageName
    })
  },
  onLaunch: function () {
    var _this = this
    var that = this
    global.token = wx.getStorageSync('token')
    global.account = wx.getStorageSync('account')
    global.password = wx.getStorageSync('password')

    global.years = wx.getStorageSync('years')
    global.semester = wx.getStorageSync('semester')
    // 初始化学期信息
    // 设为当前学年当前学期
    let date = new Date()
    if (!global.years) {
      let this_year = date.getFullYear()
      global.years = this_year + '-' + (Number(this_year) + 1)
    }
    if (!global.semester) {
      let this_month = date.getMonth + 1
      if (this_month < 8) {
        global.semester = 2
      } else if (this_month < 9) {
        global.semester = 3
      } else {
        global.semester = 1
      }
    }
    console.log(global)
    if (global.token && global.account) {
      console.log('已登录')
      this.autoLogin()
    } else {
      console.log('未登录')
    };

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function (cb) {
    var that = this
    if (global.userInfo) {
      typeof cb == "function" && cb(global.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: true,
        success: function (res) {
          console.log("User Info", res)
          wx.setStorageSync('myUsername')
          global.userInfo = res.userInfo
          typeof cb == "function" && cb(global.userInfo)
        },
      })
    }
  },

  // 自动登录，更新信息
  autoLogin() {
    var _this = this
    if (global.token) {
      // Do something with return value
      console.log("读取缓存，获取token成功")
      wx.checkSession({
        success: function () {
          //session 未过期，并且在本生命周期一直有效
          wx.request({
            url: global.baseurl + 'wechat/mini/auto_login',
            data: {
              token: global.token
            },
            success(res) {
              console.log(res)
              //更新登录信息

              // 1.更新是否绑定汕大账号
              global.account = res.data.result.account
              global.password = res.data.result.password
              wx.setStorage({
                key: 'account',
                data: global.account,
              })
              wx.setStorage({
                key: 'password',
                data: global.password,
              })
            },
            fail(res) {
              console.log('auto login失败，可能超时')
              console.log(res)
            }
          })
        },
        fail: function () {
          //登录态过期
          //清楚token
          console.log("登录过期")
          global.token = '',
            wx.removeStorage({
              key: 'token'
            })
        }
      })

    } else {
      console.log("未登录")
    }


  },

  first_login(e, callbackObject) {
    var _this = this
    var userinfo = e.detail
    var callbackObj = callbackObject
    wx.login({
      success: function (response) {
        var code = response.code
        if (code) {
          var login_info = {
            code: code,
            iv: userinfo.iv,
            encrypted_data: userinfo.encryptedData
          }
          console.log(userinfo)
          wx.showLoading({
            title: '登录中',
            mask: true
          })
          wx.request({
            url: global.baseurl + 'wechat/mini/login',
            data: {
              js_code: login_info.code,
              iv: login_info.iv,
              encrypted_data: login_info.encrypted_data
            },
            success: function (res) {
              console.log(res)
              wx.hideLoading()

              if (global.showError && res.statusCode != '200') {
                var errorMsg
                if (res.data.error_msg) {
                  errorMsg = res.data.error_msg
                } else {
                  errorMsg = '未知错误'
                }
                errorMsg += res.statusCode
                _this.showError(errorMsg)
                return
              }

              console.log("2.登陆返回")
              console.log(res.data)
              //更新数据

              // 是否绑定汕大账号
              
              if (!res.data.result.account) {
                wx.navigateTo({
                  url: '/pages/me/account/account',
                  success: function (res) { }
                })
              } else {
                global.account = res.data.result.account
                global.password = res.data.result.password
                wx.setStorage({
                  key: 'account',
                  data: global.account,
                })
                wx.setStorage({
                  key: 'password',
                  data: global.password,
                })
              }
              _this.updateLoginMsg(res.data, callbackObject)

            }, fail(res) {
              console.log(res)
              console.log("登录错误,可能是服务器没有回应，或者超时")
              if (typeof callbackObj == 'object') {
                callbackObj.forEach(function (item, index, object) {
                  if (item.isError && item.func) {
                    if (item.parm) {
                      item.func(item.parm)
                    } else {
                      item.func()
                    }
                  }
                })
              }
            }
          })

        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail: function () {
        console.log("login 失败")
      }
    })
  },

  updateLoginMsg(data, callBackObject) {
    var isError = false
    if (data.result && data.result.token) {
      var token = data.result.token

      global.token = token


    } else {
      isError = true
      console.log("发生错误，token不存在")
    }

    if (isError == false) {
      try {

        wx.setStorageSync('token', token)

      } catch (e) {
        console.log("缓存token发生错误")
      }
      global.reflashLogin = true
      console.log("登录回调开始")
      if (typeof callBackObject == 'object') {
        callBackObject.forEach(function (item, index, object) {
          if (item.func && (item.isError == undefined || item.isError != true)) {
            if (item.parm) {
              item.func(item.parm)
            } else {
              item.func()
            }
          }
        })
      }

    } else if (isError == true) {
      console.log("登录错误回调开始")
      if (typeof callBackObject == 'object') {
        callBackObject.forEach(function (item, index, object) {
          if (item.isError && item.func) {
            if (item.parm) {
              item.func(item.parm)
            } else {
              item.func()
            }
          }
        })
      }
    } else {
      console.log("isError出现特殊情况，位置updateLoginMsg")
    }

  },

  // 检查登录是否过期
  checkLogin(callBackObject) {
    let token = global.token
    let account = global.account

    // 必须有token，并且绑定了汕大账号才算登录
    if (token && account) {
      //已登录
      console.log("已登录，回调开始")

      if (typeof callBackObject == 'object') {
        callBackObject.forEach(function (item, index, object) {
          if (item.func && (item.isError == undefined || item.isError != true)) {
            if (item.parm) {
              item.func(item.parm)
            } else {
              item.func()
            }
          }
        })
      }
    } else {
      //未登录
      console.log("未登录，错误处理回调开始")
      callBackObject.forEach(function (item, index, object) {
        if (item.isError && item.func) {
          if (item.parm) {
            item.func(item.parm)
          } else {
            item.func()
          }
        }
      })
    }
  },


  // 很可能会放弃使用，但目前很多还是依赖这个
  getToken() {
    try {
      var token = wx.getStorageSync('token')
      if (token) {
        // Do something with return value
        // console.log("token:"+token)
      } else {
        console.log("token为空")
      }
    } catch (e) {
      // Do something when catch error
      console.log("获取token发生错误")
      console.log(e)
    }
    return token
  },



  contains: function (arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) {
        return true;
      }
    }
    return false;
  },

  showError(errorMsg) {
    wx.showModal({
      title: '错误',
      content: errorMsg,
      showCancel: false,
      success: function (res) {
        // if (res.confirm) {
        //   console.log('用户点击确定')
        // } else if (res.cancel) {
        //   console.log('用户点击取消')
        // }
      }
    })
  },



  // globalData: {
  //   // showError为true时，网络请求非200会弹框报错
  //   showError: true,
  //   baseurl: 'http://candycute.cn:8000/',

  //   userInfo: null,
  //   reflashLogin: false
  // }
})
