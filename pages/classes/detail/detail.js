// pages/classes/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lesson: {
      "room": "E208",
      "duration": "1-16",
      "credit": "4.0",
      "teacher": "方若宇",
      "name": "[CST1301A]程序设计基础",
      "id": "72849",
      "class_schedule": [
        {
          "day_in_week": 1,
          "time": "67",
          "weeks": "1111111111111111",
          "original_time": "67"
        },
        {
          "day_in_week": 4,
          "time": "67",
          "weeks": "1111111111111111",
          "original_time": "67"
        }
      ],
      "from_credit_system": true
    },

  },

  deleteClass(e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.showLoading({
      title: '删除中',
      mask: true
    })
    wx.request({
      url: global.baseurl + 'classes/classes',
      method: 'DELETE',
      data: {
        class_id: this.data.lesson.id,
        account: global.account,
        years: global.years.year_picker[global.years.year_index],
        semester: 1,
      },
      success(res) {
        console.log(res)
        global.refalshClasses = true
        if (res.statusCode !== 200) {
          wx.showModal({
            title: '错误',
            content: res.data.error_msg,
            showCancel: false,
            confirmColor: "#2d8cf0",
            success: function (res) {
              wx.navigateBack({
                delta: 1,
              })
            }
          })
          return
        }
        wx.navigateBack({
          delta: 1,
        })
      },
      complete(){
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let lesson = JSON.parse(options.lesson)
    this.setData({
      lesson
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