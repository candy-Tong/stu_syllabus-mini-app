//app.js
let topBar=require('/util/topBar.js');

global.version = '1.0.1'
global.token = wx.getStorageSync('token')

// wx.setStorageSync('week', 10)

// 汕大账号信息
global.account = wx.getStorageSync('account')
global.password = wx.getStorageSync('password')
global.years = wx.getStorageSync('years')
global.semester = wx.getStorageSync('semester')
global.week = wx.getStorageSync('week')
global.classes = wx.getStorageSync('classes')

global.showError = true
global.baseurl = 'https://candycute.cn/'
global.stuUrl = 'https://class.stuapps.com'



App({

  getPage: function (pageName) {
    var pages = getCurrentPages()
    return pages.find(function (page) {
      return page.__route__ == pageName
    })
  },

  onLaunch: function () {
    console.log(topBar)
    topBar.timer()

    // 初始化
    if (global.token) {
      this.getUserInfo()    // global.userInfo
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
    var that = this
    if (global.token) {
      // Do something with return value
      console.log("读取缓存，获取token成功")
      wx.checkSession({
        success: function () {
          //session 未过期，并且在本生命周期一直有效
          wx.request({
            url: global.baseurl + 'wechat/mini/login/auto_login',
            data: {
              token: global.token
            },
            success(res) {
              console.log(res)
              if (res.statusCode != '200') {
                let errorMsg
                if (res.data.error_code === 1) {
                  that.updateLoginMsg({
                    account: res.data.result.account
                  })
                  that.signout()
                  wx.switchTab({
                    url: '/pages/me/me',
                    success: function (res) { }
                  })
                } else {
                  if (res.data.result.error_msg) {
                    errorMsg = res.data.result.error_msg
                  } else {
                    errorMsg = '未知错误'
                  }
                  that.showError(errorMsg)
                }
                return
              }

              //更新登录信息
              that.updateLoginMsg({
                account: res.data.result.account,
                password: res.data.result.password,
                week: res.data.result.week
              })
              console.log(global.week)

            },
            fail(res) {
              console.log('auto login失败，可能超时')
              console.log(res)
            }
          })
        },
        fail: function () {
          //登录态过期
          console.log("登录过期")

        }
      })

    } else {
      console.log("未登录")
    }


  },

  first_login(e, callbackObject) {
    var that = this
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
            url: global.baseurl + 'wechat/mini/login/first',
            data: {
              js_code: login_info.code,
              iv: login_info.iv,
              encrypted_data: login_info.encrypted_data
            },
            success: function (res) {
              console.log(res)

              if (res.statusCode != '200') {
                let errorMsg

                if (res.data.error_code === 1) {
                  that.updateLoginMsg({
                    account: res.data.result.account,
                    token: res.data.result.token
                  })
                  wx.navigateTo({
                    url: '/pages/me/account/account',
                    success: function (res) { }
                  })
                } else {
                  if (res.data.result.error_msg) {
                    errorMsg = res.data.result.error_msg
                  } else {
                    errorMsg = '未知错误'
                  }
                  that.showError(errorMsg)
                }
                return
              }

              console.log("2.登陆返回")
              console.log(res.data)
              //更新数据

              // 是否绑定汕大账号

              if (!res.data.result.account || !res.data.result.password) {
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
              that.updateLoginMsg(res.data.result, callbackObject)

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
      },
      complete() {
        wx.hideLoading()
      }
    })
  },



  updateLoginMsg(data, callBackObject) {
    // 更新数据

    for (let index in data) {
      global[index] = data[index]
      wx.setStorageSync(index, global[index])
      if (index === 'token') {
        this.getUserInfo()    // global.userInfo
      }
    }
    // 初始化学期信息
    if (data.account) {
      // 初始化学期信息
      // 设为当前学年
      let enrollment_year = global.account.substring(0, 2)
      let year_picker = []
      for (let i = 0; i < 6; i++) {
        year_picker.push('20' + (Number(enrollment_year) + i) + '-' + '20' + (Number(enrollment_year) + i + 1))
      }
      // 找出当前学年、学期的picker index
      let date = new Date()
      let this_year = date.getFullYear() + '-' + (Number(date.getFullYear()) + 1)
      let year_index = year_picker.findIndex(function (year) {
        return year === this_year
      })
      global.years = {
        enrollment_year,
        year_picker,
        year_index
      }
      wx.setStorageSync('years', global.years)
      // 设为当前学期
      let semester_picker = ['秋季学期', '春季学期', '夏季学期']
      let semester_index
      let this_month = date.getMonth + 1
      if (this_month < 8) {
        semester_index = 2
      } else if (this_month < 9) {
        semester_index = 3
      } else {
        semester_index = 1
      }
      global.semester = {
        semester_picker,
        semester_index
      }
      wx.setStorageSync('semester', global.semester)

    }


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

  },

  // 检查登录是否过期
  checkLogin(callBackObject) {
    let token = global.token
    let account = global.account
    let password = global.password
    // 必须有token，并且绑定了汕大账号才算登录
    if (token && account && password) {
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
      this.signout()
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


  signout() {
    global.token = ''
    wx.removeStorageSync('token')
    global.password = ''
    wx.removeStorageSync('password')
    console.log('注销登录')
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
      confirmColor: "#2d8cf0",
      success: function (res) {
        // if (res.confirm) {
        //   console.log('用户点击确定')
        // } else if (res.cancel) {
        //   console.log('用户点击取消')
        // }
      }
    })
  },

})
