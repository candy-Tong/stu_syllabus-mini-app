var app = getApp()
var color = require('../../util/color.js')
Page({
  data: {
    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    week: ['', '一', '二', '三', '四', '五', '六', '日'],
    times: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C']
  },
  years: '',
  semester: NaN,
  week: 0,

  onLoad: function (options) {
    showWeek: false
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
    console.log(global.token)
    if (!global.token) {
    
      wx.showModal({
        title: '提示',
        content: '未登录,是否跳转',
        showCancel: false,
        confirmColor: "#2d8cf0",
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.switchTab({
              url: '/pages/me/me'
            })
          }
        }
      })
      return
    }
    if (this.data.curWeek !== global.week) {
      this.setData({
        curWeek:global.week
      })
    }
    if (global.years.year_index !== this.years_index || global.semester.semester_index !== this.semester_index) {
      this.refalshSyllabus()
    }
  },


  refalshSyllabus() {
    this.years_index = global.years.year_index
    this.semester_index = global.semester.semester_index
    let that = this
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    wx.request({
      url: global.stuUrl + '/credit/api/v2/sync_syllabus',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        username: global.account,
        password: global.password,
        years: global.years.year_picker[global.years.year_index],
        semester: global.semester.semester_index,
        submit: ' query'
      },
      success(res) {
        var classes = res.data
        that.showClass(classes)
      },
      complete(res) {
        wx.hideLoading()
      }
    })
  },

  showClass(classes) {

    var that = this
    var lessons = []

    for (let i = 0; i < classes.length; i++) {
      var classname = classes[i].name
      classname = classname.replace(/\[.*\]/, '')
      var room = classes[i].room
      room = room.replace('座', '')
      console.log(classname)
      var classColor = color[i]

      for (let j in classes[i].class_schedule) {
        console.log(j)
        classes[i].class_schedule[j]

        lessons.push({
          left: classes[i].class_schedule[j].day_in_week === 0 ? 7 : classes[i].class_schedule[j].day_in_week,
          top: that.transformClassTime(classes[i].class_schedule[j].time),
          height: classes[i].class_schedule[j].time.length,
          color: classColor,
          classname,
          room,
          week: classes[i].class_schedule[j].weeks
        })
      }
      
    }
    this.setData({
      lessons
    })

  },
  transformClassTime(timeStr) {

    var top = Number(timeStr.charAt(0))

    if (!top) {
      switch (timeStr.charAt(0)) {
        case 'A': top = 11
          break
        case 'B': top = 12
          break
        case 'C': top = 13
      }
    }
    if (top === 0) {

      top = 10
    }
    console.log(top)
    return top
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    wx.stopPullDownRefresh()

    let that = this
    wx.showActionSheet({
      itemList: [
        '刷新课表',
        '设置课表'
      ],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)

          if (res.tapIndex === 0) {
            that.refalshSyllabus()
          } else if (res.tapIndex === 1) {
            wx.navigateTo({
              url: 'setting/setting'
            })
          }
        }

      }
    })
  },
  /**
 * 页面上拉触底事件的处理函数
 */
  onReachBottom: function () {

  },
});