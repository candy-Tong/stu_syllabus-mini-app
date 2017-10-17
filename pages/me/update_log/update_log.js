// pages/me/update_log/update_log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    log: [
      {
        version:'1.0.9',
        date: '2017.10.17',
        content: [
          {
            title: '新增：分享课表',
            detail: '在课表页面右上角，点开菜单即可分享课表，注意！！！这个是分享自己的课表哦，如果仅仅是想要分享小程序的话，最好就我的界面那里按分享，不然会把自己的课表分享出去哦，当然你不介意的话，那就请随意吧'
          }, {
            title: '新增：同班同学',
            detail: '现在可以查看同班同学啦，点开课程详情，然后再点同班同学就可以看到有哪些小伙伴跟自己同班啦，不过目前还没有搜索功能哦，这个会迟一点点做啦'
          }
        ],
        app: '汕大课程表',
        ahthod: '糖糖爱学习'
      }, {
        version: '1.0.8',
        date: '2017.10.17',
        content: [
          {
            title: '新增：更新日志',
            detail: '每次小程序更新将会自动弹出更新日志页面'
          }, {
            title: '新增：关于我们页面'
          }, {
            title: '修复：课程显示的bug',
            detail: '修复了同一天有多门相同的课时，会出现显示错误地bug'
          }
        ],
        app:'汕大课程表',
        ahthod:'糖糖爱学习'
      }, {
        version: '1.0.5',
        date: '2017.10.16',
        content: [
          {
            title: '切换学期周数',
            detail: '课表页面下拉就可以切换学期和选择周数啦，很抱歉目前周数是不会自动改变的，所以单双周的同学要注意啦'
          }, {
            title: '问题反馈',
            detail:'如果小程序出现了bug，可以通过问题反馈来告知程序员哦，反馈的时候最好可以带上描述和截图哦'
          }
        ],
        app: '汕大课程表',
        ahthod: '糖糖爱学习'
      }
    ]
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