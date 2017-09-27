// pages/oa/oa.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  curPage: 0,
  pageSize: 10,
  cache: [],
  loading: false,

  showDetail(e){
    console.log(e)
    global.oa=e.currentTarget.dataset.document
    wx.navigateTo({
      url: '/pages/oa/detail/detail'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: global.baseurl+'oa?token= &subcompany_id=0&keyword= &row_start=' + (that.curPage * that.pageSize) + '&row_end=' + ((that.curPage + 1) * that.pageSize),
      success(res) {
        console.log(res.data)
        that.curPage++
        let documents = res.data
        that.setData({
          documents
        })
        that.loading = true
        wx.request({
          url: global.baseurl +'oa?token= &subcompany_id=0&keyword= &row_start=' + (that.curPage * that.pageSize) + '&row_end=' + ((that.curPage + 1) * that.pageSize),
          success(res) {
            console.log(res.data)
            that.curPage++
            that.loading = false
            that.cache = res.data
          }
        })
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    let that = this
    that.curPage = 0
    that.pageSize = 10
    that.cache = []
    that.loading = false

    wx.request({
      url: global.baseurl +'oa?token= &subcompany_id=0&keyword= &row_start=' + (that.curPage * that.pageSize) + '&row_end=' + ((that.curPage + 1) * that.pageSize),
      success(res) {
        console.log(res.data)
        that.curPage++
        let documents = res.data
        that.setData({
          documents
        })
        wx.stopPullDownRefresh()
        that.loading = true
        wx.request({
          url: global.baseurl +'oa?token= &subcompany_id=0&keyword= &row_start=' + (that.curPage * that.pageSize) + '&row_end=' + ((that.curPage + 1) * that.pageSize),
          success(res) {
            console.log(res.data)
            that.curPage++
            that.loading = false
            that.cache = res.data
          }
        })
      }

    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this
    if (that.loading) {
      console.log('正在加载')
      return
    }
    var that = this
    if (that.cache.length!==0){
      var documents = that.data.documents.concat(that.cache)
    }
    that.cache = []
    that.setData({
      documents
    })
    that.loading = true
    wx.request({
      url: global.baseurl +'oa?token= &subcompany_id=0&keyword= &row_start=' + (that.curPage * that.pageSize) + '&row_end=' + ((that.curPage + 1) * that.pageSize),
      success(res) {
        console.log(res.data)
        that.curPage++
        that.cache = res.data
        that.loading = false
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})