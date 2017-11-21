// pages/classes/addClass/selectClassTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classTime: [
      {
        time: 1,
        begin: '8:00',
        end: '8:45'
      },
      {
        time: 2,
        begin: '8:55',
        end: '9:40'
      },
      {
        time: 3,
        begin: '10:00',
        end: '10:45'
      },
      {
        time: 4,
        begin: '10:55',
        end: '11:40'
      },
      {
        time: 5,
        begin: '11:50',
        end: '12:35'
      },
      {
        time: 6,
        begin: '14:00',
        end: '14:45'
      },
      {
        time: 7,
        begin: '14:55',
        end: '15:40'
      },
      {
        time: 8,
        begin: '16:00',
        end: '16:45'
      },
      {
        time: 9,
        begin: '16:55',
        end: '17:40'
      },
      {
        time: 10,
        begin: '17:50',
        end: '18:35'
      },
      {
        time: 11,
        begin: '19:20',
        end: '20:05'
      },
      {
        time: 12,
        begin: '20:15',
        end: '21:00'
      },
      {
        time: 13,
        begin: '21:10',
        end: '21:55'
      }
    ],
    selectList: []
  },

  checkboxChange: function (e) {
    console.log(e.detail.value)

    let eventList = e.detail.value
    let classTime = this.data.classTime
    let selectList = []
    for (let i in classTime) {
      if (eventList.find(value => value == Number(i) + 1)) {
        selectList.push(true)
      } else {
        selectList.push(false)
      }
    }
    this.setData({
      selectList
    });

    // 修改课程增加页面的课程时间
    let classTimeStr = selectList.map((value, index) => {
      if (value) {
        if (index + 1 === 10) {
          return '0'
        } else if (index + 1 === 11) {
          return 'A'
        } else if (index + 1 === 12) {
          return 'B'
        } else if (index + 1 === 13) {
          return 'C'
        } else {
          return index + 1
        }
      }
    }).join('')
    let page = getCurrentPages().find(value => value.route === 'pages/classes/addClass/addClass')
    if (page) {
      let class_schedule = page.data.class_schedule
      class_schedule[this.index].classTime = classTimeStr
      page.setData({
        class_schedule
      })
    } else {
      console.log('找不到增加课程页面')
    }
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
  onShow(options) {

    this.index = getCurrentPages()[getCurrentPages().length-1].options.index

    let page = getCurrentPages().find(value => value.route === 'pages/classes/addClass/addClass')
    if (page) {
      let classTime = page.data.class_schedule[this.index].classTime.split('').map(value => {
        if (value === '0') {
          return 10
        } else if (value === 'A') {
          return
        } else if (value === 'B') {
          return 12
        } else if (value === 'C') {
          return 13
        } else {
          return Number(value)
        }
      })
      let selectList = [...Array(13).keys()].map(value => false)
      for (let i in selectList) {
        if (classTime.find(value => value == Number(i) + 1)) {
          selectList[i] = true
        }
      }
      this.setData({
        selectList
      })

    } else {
      console.log('找不到增加课程页面')
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