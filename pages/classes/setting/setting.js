// pages/classes/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  setting(e){
    let pages = getCurrentPages()
    let lastPage=pages[pages.length-2]
    console.log(lastPage)
    wx.navigateBack({
      delta: 1
    })
  },

  bindWeekChange(e) {
    let week = Number(e.detail.value)
    global.week = week

    this.setData({
      week: global.week
    })
  },

  bindYearsChange(e) {
    let year_index = Number(e.detail.value)
    global.years.year_index = year_index
    wx.setStorage({
      key: 'years',
      data: global.years,
    })
    this.setData({
      years: global.years
    })
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
      years:global.years,
      semester: global.semester,
      week:global.week
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


  
})