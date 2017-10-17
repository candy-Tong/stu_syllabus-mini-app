// pages/me/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    account: '',
    years: '',
  },
  // 用于对比全局token，有改变则要更新界面
  token: 'none',


  bindgetuserinfo(e) {
    var that = this
    console.log(e)
    var userinfo = e.detail
    if (userinfo.errMsg && userinfo.errMsg.indexOf('fail') > 0) {
      console.log("无法获取用户userInfo")
    } else if (userinfo.errMsg && userinfo.errMsg.indexOf('ok') > 0) {
      wx.showLoading({
        title: '登录中',
        mask: true,
      })
      // 配置回调函数
      var callback = [
        {
          func: function () {
            wx.hideLoading()
            if (global.account && global.password) {
              app.getUserInfo(function (userInfo) {
                //更新数据
                that.setData({
                  userInfo: userInfo,
                  account: global.account,
                  isLogin: true
                })
              })
            }
          }
        }, {
          func: function () {
            that.setData({
              years: global.years,
              semester: global.semester
            })
          }
        },
        {
          isError: true,
          func: function () {
            wx.hideLoading()
            console.log("已授权登录却发生登录错误,可能是存储token出现问题")
            that.setData({
              isLogin: false
            })
          }
        }
      ]
      app.first_login(e, callback)

    } else {
      console.log("发生错误，bindgetuserinfo出现其他状况")
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  year_picker_change(e) {
    console.log(e)
    global.years.year_index = e.detail.value
    wx.setStorage({
      key: 'years',
      data: global.years,
    })
    this.setData({
      years: global.years
    })
  },

  semester_picker_change(e) {
    console.log(e)
    let semester_index = Number(e.detail.value)
    global.semester.semester_index = semester_index + 1
    wx.setStorage({
      key: 'semester',
      data: global.semester,
    })
    this.setData({
      semester: global.semester
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(global)
    // 监听当前用户的改变
    if (this.data.account != global.account) {
      this.setData({
        account: global.account
      })
    }

    if (global.token && this.token !== global.token) {
      this.token = global.token
      var that = this
      var callback = [
        {
          func: function () {
            //调用应用实例的方法获取全局数据
            app.getUserInfo(function (userInfo) {
              //更新数据
              that.setData({
                userInfo: userInfo,
                isLogin: true
              })
            })
          }
        }, {
          func: function () {
            that.setData({
              years: global.years,
              semester: global.semester
            })
          }
        },
        {
          isError: true,
          func: function () {
            that.setData({
              isLogin: false
            })
          }
        }
      ]
      // 检查是否登录
      app.checkLogin(callback)
    }
    if (!global.token) {
      console.log('未登录')
      this.setData({
        isLogin: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: '汕大的课表',
      path: '/pages/classes/classes',
      imageUrl:'/image/stu_syllabus.jpg',
      success: function (res) {
        // 转发成功
        console.log(res)
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
})