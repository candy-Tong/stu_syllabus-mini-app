// pages/me/more/more.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  classesNotifyChange: function (e) {
    if (e.detail.value) {
      // 开启课程提醒
      this.setData({
        showNotify: true
      })
      app.saveClasses()
    } else {
      // 关闭课程提醒
      this.setData({
        showNotify: false
      })
    }
    wx.setStorageSync('showNotify', e.detail.value)
    wx.request({
      url: global.baseurl + 'classes/showNotify?account=' + global.account + '&showNotify=' + e.detail.value,
      success(res) {
        if (res.data.is_error) {
          console.log('修改classesNotify错误')
          if (res.data.error_msg) {
            console(res.data.error_msg)
          }
          return
        }
      }
    })
  },

  admire() {
    wx.previewImage({
      urls: ['http://candycute.cn/admire.jpg']
    })
  },

  goClickPage(e) {
    let that = this
    wx.request({
      url: global.baseurl + 'classes/notify_num?account=' + global.account,
      success(res) {
        if (res.data.is_error) {
          console.log('获取notify_num失败')
          return
        }
        let notify_num = res.data.result.notify_num
        let max_account = res.data.result.max_account
        let max_num = res.data.result.max_num
        let click_num = res.data.result.click_num
        wx.navigateTo({
          url: '/pages/me/click/click?notify_num=' + notify_num + '&max_account=' + max_account + '&max_num=' + max_num + '&click_num=' + click_num
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


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
    let showNotify = wx.getStorageSync('showNotify')
    if (showNotify) {
      let that = this
      wx.request({
        url: global.baseurl + 'classes/notify_num?account=' + global.account,
        success(res) {
          if (res.statusCode !== 200) {
            that.setData({
              showNotify: false,
              notice: global.notice
            })
            return
          }

          if (res.data.is_error) {
            console.log('获取notify_num失败')
            return
          }
          let notify_num = res.data.result.notify_num
          let max_account = res.data.result.max_account
          let max_num = res.data.result.max_num
          that.setData({
            showNotify,
            notify_num,
            max_account,
            max_num
          })
        }
      })
    }
  },

  classes_notify_use_click() {
    delete global.notice.other.classes_notify_use
    console.log(global.notice)
    app.updateLoginMsg({ notice: global.notice })
    this.setData({
      notice: global.notice
    })
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
  onShareAppMessage: function () {

  }
})