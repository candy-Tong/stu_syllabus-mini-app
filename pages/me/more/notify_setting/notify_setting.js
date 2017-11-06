// pages/me/more/notify_setting/notify_setting.js
let app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    wx.request({
      url: global.baseurl +'classes/getAllNotifyStatus?account='+global.account,
      success(res){
        if(res.is_error){
          console.log('查询课程提醒状态失败')
          return
        }
        let classes = res.data.result.notifyStatus
        that.setData({
          classes
        })
      }
    })
  },

  classesNotifyChange(e) {
    console.log(e)
    let classes = this.data.classes
    classes[e.target.dataset.index].showNotify = e.detail.value
    this.setData({
      classes
    })
    wx.request({
      url: global.baseurl + 'classes/updataClassesNotify?account=' + global.account + '&class_id=' + classes[e.target.dataset.index].class_id + '&show_notify=' + e.detail.value,
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