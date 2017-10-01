// pages/classes/week/week.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var week_list = this.data.week_list;
    for (var i = 0, len = week_list.length; i < len; ++i) {
      week_list[i].checked = week_list[i].value == e.detail.value;
    }

    this.setData({
      week_list: week_list
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let week_list=[]
    for(let i=0;i<20;i++){
      let week={}
      week.name=`第${i+1}周`
      week.value=i+1
      week.checked=false
      week_list.push(week)
    }
    this.setData({
      week_list
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