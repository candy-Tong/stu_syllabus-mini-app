// pages/me/click/click.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit: function (e) {
    let that=this
    wx.request({
      url: global.baseurl + 'classes/form_id?token=' + global.token + '&form_id=' + e.detail.formId,
      success(res){
        console.log(res)
        let max_account=res.data.result.max_account
        let max_num = res.data.result.max_num
        if (max_account != that.data.max_account){
          that.setData({
            max_account,
            max_num
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let notify_num = Number(options.notify_num)
    let max_account=options.max_account
    let max_num=options.max_num
    let click_num = Number(options.click_num)
    this.setData({
      notify_num,
      max_account,
      max_num,
      click_num
    })
  },

  click(e){
    console.log(this.data.notify_num)
    this.setData({
      notify_num: (this.data.notify_num+1),
      click_num: (this.data.click_num + 1),
      is_hover:true
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