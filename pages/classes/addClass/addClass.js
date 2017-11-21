// pages/classes/addClass/addClass.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["默认", "自定义"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    name: '',
    teacher: '',
    room: '',
    credit: '',
    week_picker: [
      [...Array(16).keys()].map(value => value + 1),
      [...Array(16).keys()].map(value => value + 1),
      ['默认', '单周', '双周'],
    ],
    week_index: [0, 15, 0],
    class_num_picker: [...Array(5).keys()].map(value => value + 1),
    class_num_index: 0,
    day_picker: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    class_schedule: [
      {
        day_index: 0,
        classTime: ''
      }
    ]

  },

  year_picker_change(e) {
    console.log(e)
    let years = this.data.years
    years.year_index = e.detail.value
    this.setData({
      years
    })
  },

  semester_picker_change(e) {
    console.log(e)
    let semester_index = Number(e.detail.value)
    semester.semester_index = semester_index + 1

    this.setData({
      semester
    })
  },

  class_num_picker_change(e) {
    let class_num_index = e.detail.value
    let class_schedule = this.data.class_schedule
    while (class_schedule.length > this.data.class_num_picker[class_num_index]) {
      class_schedule.pop()
    }
    while (class_schedule.length < this.data.class_num_picker[class_num_index]) {
      class_schedule.push({
        day_index: 0,
        classTime: ''
      })
    }
    this.setData({
      class_num_index,
      class_schedule
    })
  },

  week_picker_change(e) {
    console.log(e)
    let week_index = e.detail.value
    this.setData({
      week_index
    })
  },
  day_picker_change(e) {
    console.log(e)
    let day_index = e.detail.value
    let index = e.currentTarget.dataset.index
    let class_schedule = this.data.class_schedule
    class_schedule[index].day_index = day_index
    this.setData({
      class_schedule
    })
  },

  nameInput(e) {
    let name = e.detail.value
    this.setData({
      name
    })
  },

  creditInput(e) {
    let credit = e.detail.value
    this.setData({
      credit
    })
  },

  roomInput(e) {
    let room = e.detail.value
    this.setData({
      room
    })
  },

  teacherInput(e) {
    let teacher = e.detail.value
    this.setData({
      teacher
    })
  },
  addClass() {
    let that = this
    let classObj = {
      "teacher": this.data.teacher,
      "id": new Date().getTime(),
      "duration": this.data.week_picker[0][this.data.week_index[0]] + '-' + this.data.week_picker[1][this.data.week_index[1]],
      "room": this.data.room,
      "name": this.data.name,
      "class_schedule": [],
      "from_credit_system": false,
      "credit": this.data.credit
    }
    // 构造class_schedule
    let class_schedule = this.data.class_schedule
    let week_begin = Number(this.data.week_picker[0][this.data.week_index[0]])
    let week_end = Number(this.data.week_picker[1][this.data.week_index[1]])
    class_schedule = class_schedule.map(value => {
      let weeks = this.data.week_picker[1].map(value => {
        if (value >= week_begin && value <= week_end) {
          return 1
        } else {
          return 0
        }
      }).join('')
      return {
        day_in_week: Number(value.day_index) + 1,
        time: value.classTime,
        weeks
      }
    })
    classObj.class_schedule = class_schedule

    // 检查参数
    if (!classObj.name) {
      wx.showModal({
        title: '提示',
        content: '请填写课程名称',
        showCancel: false,
        confirmColor: "#2d8cf0"
      })
      return
    }
    for (let i in classObj.class_schedule) {
      if (!classObj.class_schedule[i].time) {
        wx.showModal({
          title: '提示',
          content: '请填写课程时间',
          showCancel: false,
          confirmColor: "#2d8cf0"
        })
        return
      }
    }
    // 添加课程
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    wx.request({
      url: global.baseurl + 'classes/classes',
      method: 'PUT',
      header: {
        'Content-Type': 'text/plain;charset:utf-8',
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        account: global.account,
        years: that.data.years.year_picker[that.data.years.year_index],
        semester: that.data.semester.semester_index,
        courses: JSON.stringify([classObj])
      },
      success(res) {
        console.log(res)
        if (res.statusCode !== 200) {
          if (res.statusCode !== 200) {
            wx.showModal({
              title: '错误',
              content: '服务器错误',
              showCancel: false,
              confirmColor: "#2d8cf0",
              success: function (res) {
                wx.navigateBack({
                  delta: 1,
                })
              }
            })
            return
          }
        }
        global.refalshClasses = true
        wx.navigateBack({
          delta: 1,
        })
      },
      complete() {
        wx.hideLoading()
      }
    })
  },

  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          years: global.years,
          semester: global.semester
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
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
  // onPullDownRefresh: function () {

  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {

  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})