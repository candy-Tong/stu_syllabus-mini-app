// pages/me/more/more.js
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
      // 服务器缓存课程
      wx.request({
        url: global.baseurl + 'classes/classes',
        method:'post',
        data: {
          classes: JSON.stringify({ classes: global.classes }),
          account: global.account,
          year: global.years.year_picker[global.years.year_index],
          semester: global.semester.semester_index
        },
        header: {
          'Content-Type': 'text/plain;charset:utf-8',
          'content-type': 'application/x-www-form-urlencoded'
        },
        success(res) {
          if (!res.data.is_error) {
            console.log('服务器缓存课程成功')
          } else {
            console.log('服务器缓存课程失败')
          }
        }
      })
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
          url: '/pages/me/click/click?notify_num=' + notify_num + '&max_account=' + max_account + '&max_num=' + max_num+'&click_num='+click_num
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
    if(showNotify){
      let that = this
      wx.request({
        url: global.baseurl + 'classes/notify_num?account=' + global.account,
        success(res) {
          if(res.statusCode!==200){
            that.setData({
              showNotify:false
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