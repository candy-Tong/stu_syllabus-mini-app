// pages/me/bindphone/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  account: "",
  password: "",

  bindAccount(e) {
    let that = this
    wx.request({
      url: global.baseurl + 'wechat/mini/login/bind',
      data: {
        token: global.token,
        account: that.account,
        password: that.password
      },
      success(res) {
        console.log(res)
        if (res.statusCode != '200') {
          let errorMsg
          if (res.data.error_msg) {
            errorMsg = res.data.error_msg
          } else {
            errorMsg = '未知错误'
          }
          app.showError(errorMsg)
          return
        }

        let callback = [
          {
            func: function () {
              wx.navigateBack({
                delta: 1
              })
            }
          }
        ]
        // 缓存下来
        app.updateLoginMsg({
          account: that.account,
          password: that.password
        }, callback)
      }
    })
  },

  bindAccountInput(e) {
    this.account = e.detail.value
  },
  bindPasswordInput(e) {
    this.password = e.detail.value
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(global.account){
      this.account=global.account
      this.setData({
        accountInputDisabled:true,
        account:global.account
      })
    }
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
    if (!global.password) {
      console.log('注销账号')
      app.signout()
    }
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
  onShareAppMessage: function () {

  }
})