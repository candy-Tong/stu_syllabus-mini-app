var color=require('../../util/color.js')
Page({
  data: {
    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    week: ['', '一', '二', '三', '四', '五', '六', '日'],
    times: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C']
  },
  onLoad(options) {
    console.log(color)
    let that = this
    console.log(global)
    wx.request({
      url: global.stuUrl + '/credit/api/v2/syllabus',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        username: global.account,
        password: global.password,
        years: global.years,
        semester: global.semester,
        submit: ' query'
      },
      success(res) {
        console.log(res.data)
        var classes = res.data.classes
        that.showClass(classes)
      }
    })
  },
  showClass(classes) {
    var that = this
    var lessons = []

    for (var i = 0; i < classes.length; i++) {
      var classname = classes[i].name
      classname=classname.replace(/\[.*\]/,'')
      var room = classes[i].room
      room=room.replace('座','')
      console.log(classname)
      var classColor = color[i]
      for (var j = 0; j < 7; j++) {
        if (classes[i].days['w' + j] !== 'None') {
          lessons.push({
            left: j,
            top: that.transformClassTime(classes[i].days['w' + j]),
            height: classes[i].days['w' + j].length,
            color: classColor,
            classname,
            room
          })

        }
      }
    }
    this.setData({
      lessons
    })

  },
  transformClassTime(timeStr) {
    //暂时不区分单双周
    if (timeStr.indexOf('单')){
      timeStr=timeStr.replace('单','')
      console.log(timeStr)
    }
    if (timeStr.indexOf('双')) {
      timeStr=timeStr.replace('双', '')
      console.log(timeStr)
    }
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
  }

});