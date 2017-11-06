// pages/classes/classmate/classmate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSearch: false,
    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },

  inputTyping: function (e) {
    let searchList = []
    let studentList = this.data.class_info.student
    studentList.forEach(function (value, index, array) {
      if ((value.name.indexOf(e.detail.value) !== -1 || value.major.indexOf(e.detail.value) !== -1 || value.number.indexOf(e.detail.value) !== -1) && searchList.length < 6) {
        searchList.push(value)
      }
    })
    console.log(searchList)
    this.setData({
      inputVal: e.detail.value,
      searchList
    })
  },

  scrolltoupper(e) {
    console.log(e)
    this.setData({
      showSearch: true,
      inputVal: ''
    })
  },

  scroll(e) {
    console.log(e)
    if (this.data.showSearch && e.detail.scrollTop > 80) {
      this.setData({
        showSearch: false
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this
    let class_id = options.class_id
    wx.request({
      url: 'https://stuapps.com/credit/api/v2.1/member?class_id=' + class_id,
      success(res) {
        console.log(res)
        if (res.data.message === "connection refused") {
          wx.showModal({
            title: '提示',
            content: '服务器出了问题哦，迟点再试试吧',
            showCancel: false,
            confirmColor: "#2d8cf0",
            success(res){
              wx.navigateBack({
                delta: 1,
              })
            }
          })
          return
        }
        wx.setNavigationBarTitle({
          title: res.data.data.class_info.className.replace(/\[.*\]/, ""),
        })
        that.setData({
          class_info: res.data.data.class_info
        })
      }, fail(res) {
        console.log(res)
      }

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