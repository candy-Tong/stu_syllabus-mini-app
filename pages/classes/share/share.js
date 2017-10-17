var app = getApp()
var color = require('../../../util/color.js')
Page({
  data: {
    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    week: ['', '一', '二', '三', '四', '五', '六', '日'],
    times: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C'],
  },
  years: '',
  semester: NaN,
  week: 0,

  onLoad: function (options) {
    console.log(options)
    let nickName = options.nickName
    let title = nickName ? nickName + ' - 第' + options.week + '周' : '第' + options.week + '周'
    wx.setNavigationBarTitle({
      title: title
    })
    this.showClass(JSON.parse(options.classes))
    this.setData({
      curWeek: options.week
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
  onShow: function (options) {

  },

  showClassDetail(e) {
    let lessonJson = JSON.stringify(this.data.classes[e.currentTarget.dataset.index])
    wx.navigateTo({
      url: '../detail/detail?lesson=' + lessonJson
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
      // console.log(classname)
      var classColor = color[i]

      for (let j in classes[i].class_schedule) {
        // console.log(j)
        let timeList = that.splitTime(classes[i].class_schedule[j].time)
        // console.log(timeList)
        for (let index in timeList) {

          lessons.push({
            lessonIndex: i,
            left: classes[i].class_schedule[j].day_in_week === 0 ? 7 : classes[i].class_schedule[j].day_in_week,
            top: that.transformClassTime(timeList[index]),
            height: timeList[index].length,
            color: classColor,
            classname,
            room,
            week: classes[i].class_schedule[j].weeks
          })
        }

      }

    }
    this.setData({
      lessons,
      classes
    })
  },
  splitTime(time) {
    let timeList = []
    let standardTime = '1234567890ABC'
    for (var i = 1; i < time.length; i++) {
      let subStr = time.substring(0, i)
      if (standardTime.indexOf(subStr) != -1) {
        continue
      } else {
        // 需要分割
        timeList.push(time.substring(0, i - 1))
        let item = this.splitTime(time.substring(i - 1))
        timeList = timeList.concat(item)
        break
      }
    }
    if (timeList.length == 0) {
      timeList.push(time)
    }
    return timeList
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
    // console.log(top)
    return top
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    wx.stopPullDownRefresh()

  },
  /**
 * 页面上拉触底事件的处理函数
 */
  onReachBottom: function () {

  },

});