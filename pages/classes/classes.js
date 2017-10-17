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
  
    wx.setNavigationBarTitle({
      title: '第'+global.week+'周'
    })

    if (!global.account || !global.password) {
      wx.switchTab({
        url: '/pages/me/me'
      })
      return
    }
    if (this.data.curWeek !== global.week) {
      this.setData({
        curWeek: global.week
      })
    }
    if (global.years.year_index !== this.years_index || global.semester.semester_index !== this.semester_index) {
      this.refalshSyllabus()
    }
  },

  showClassDetail(e) {
    let lessonJson = JSON.stringify(this.data.classes[e.currentTarget.dataset.index])
    wx.navigateTo({
      url: 'detail/detail?lesson=' + lessonJson
    })
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
        if (res.statusCode != '200') {
          let errorMsg

          if (res.data.ERROR === "the password is wrong") {
            app.signout()
            wx.showModal({
              title: '错误',
              content: '校园网密码已更改，请重新登录',
              showCancel: false,
              confirmColor: "#2d8cf0",
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                  wx.switchTab({
                    url: '/pages/me/me',
                    success: function (res) { }
                  })
                }
              }
            })

          } else {
            if (res.data.result.error_msg) {
              errorMsg = res.data.result.error_msg
            } else {
              errorMsg = '未知错误'
            }
          }
          return
        }



        let classes = res.data
        that.classes = classes
              
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
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {

    if(!this.classes){
      wx.showModal({
        title: '提示',
        content: '请等待课表加载完毕',
        showCancel:false
      })
      return
    }
    let that=this
    wx.showShareMenu({
      withShareTicket: true
    })

    return {
      title: global.userInfo.nickName + '的课表',
      path: '/pages/classes/share/share?nickName=' + global.userInfo.nickName + '&week=' + global.week + '&classes=' + JSON.stringify(that.classes),
      success: function (res) {
        // 转发成功
        console.log(res)
      },
      fail: function (res) {
        // 转发失败
      }
    }
    

  },
});