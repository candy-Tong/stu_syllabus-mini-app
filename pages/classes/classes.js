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
    if (this.week !== global.week) {
      this.weekChange(this.data.lessons)
    }
    if (global.years.year_index !== this.years_index || global.semester.semester_index !== this.semester_index) {
      this.refalshSyllabus()
    }
  },
  weekChange(lessions){
    if(!lessions){
      return
    }
    this.week = global.week
    let haveClass = []
    for (let i = 0; i < lessions.length; i++) {
      haveClass.push(lessions[i].week.includes(global.week))
    }
    console.log(haveClass)
    this.setData({
      haveClass
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
      url: global.stuUrl + '/credit/api/v2.1/syllabus',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        username: global.account,
        password: global.password,
        years: global.years.year_picker[global.years.year_index - 1],
        semester: global.semester.semester_index,
        submit: ' query'
      },
      success(res) {
        var classes = res.data.data.classes
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
      let classname = classes[i].name
      classname = classname.replace(/\[.*\]/, '')
      let room = classes[i].room
      room = room.replace('座', '')
      console.log(classname)
      let classColor = color[i]
      for (let j = 0; j < 7; j++) {
        if (classes[i].days['w' + j] !== 'None') {   

          let [weekBegin, weekEnd] = classes[i].duration.split('-')
          let week = []
          weekBegin = Number(weekBegin)
          weekEnd = Number(weekEnd)
          
          if (/单/u.test(classes[i].days['w' + j])){
            classes[i].days['w' + j] = classes[i].days['w' + j].replace('单', '')
            for (let i = weekBegin; i <= weekEnd; i++) {
              if(i%2===1){
                week.push(i)
              }
            }
          } else if (/双/u.test(classes[i].days['w' + j])){
            classes[i].days['w' + j] = classes[i].days['w' + j].replace('双', '')
            for (let i = weekBegin; i <= weekEnd; i++) {
              if (i % 2 === 0) {
                week.push(i)
              }
            }
          }else{
            for (let i = weekBegin; i <= weekEnd; i++) {
              week.push(i)
            }
          }         
          console.log(week)
          lessons.push({
            left: j === 0 ? 7 : j,
            top: that.transformClassTime(classes[i].days['w' + j]),
            height: classes[i].days['w' + j].length,
            color: classColor,
            classname,
            room,
            week
          })

        }
      }
    }
    this.weekChange(lessons)
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