// pages/classes/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  bindSemesterChange(e){
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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