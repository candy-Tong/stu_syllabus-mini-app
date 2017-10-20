
let class_time = {
  '1': {
    begin: '8:00',
    end: '8:45'
  },
  '2': {
    begin: '8:55',
    end: '9:40'
  },
  '3': {
    begin: '10:00',
    end: '10:45'
  },
  '4': {
    begin: '11:55',
    end: '11:40'
  },
  '5': {
    begin: '11:50',
    end: '12:35'
  },
  '6': {
    begin: '14:00',
    end: '14:45'
  },
  '7': {
    begin: '14:55',
    end: '15:40'
  },
  '8': {
    begin: '16:00',
    end: '16:45'
  },
  '9': {
    begin: '16:55',
    end: '17:40'
  },
  '0': {
    begin: '17:50',
    end: '18:35'
  },
  'A': {
    begin: '19:20',
    end: '20:05'
  },
  'B': {
    begin: '20:15',
    end: '21:00'
  },
  'C': {
    begin: '21:10',
    end: '21:55'
  },
}

function timer() {
  let classesList = []
  setTimeout(function () {
    if (global.classes) {
      let curTime = new Date()
      let week_num = curTime.getDay()
      let hour = curTime.getHours()
      let min = curTime.getMinutes()
      let now_time = hour + ':' + min
      if (week_num === 0) {
        week_num = 7
      }
      for (let i in global.classes) {

        for (let class_index in global.classes[i].class_schedule) {
          class_index = Number(class_index)
          if (global.classes[i].class_schedule[class_index].weeks[global.week - 1] == 1 && global.classes[i].class_schedule[class_index].day_in_week == week_num) {
            classesList.push({
              classes: global.classes[i],
              class_index: class_index
            })
          }
        }
      }


      function sortClasses(a, b) {
        return a.classes.class_schedule[a.class_index].time > b.classes.class_schedule[b.class_index].time
      }
      classesList = classesList.sort(sortClasses)

      // 获取当前正在上的课程

      // 获取下一节课
      let nextClass = classesList.find(function (element) {
        let time = element.classes.class_schedule[element.class_index].time
        let begin_time = class_time[time[0]].begin
        let end_time = class_time[time[time.length - 1]].end
        let [begin_hour, begin_min] = begin_time.split(':')
        let [end_hour, end_min] = end_time.split(':')

        begin_hour = Number(begin_hour)
        begin_min = Number(begin_min)
        end_hour = Number(end_hour)
        end_min = Number(end_min)

        if (hour < begin_hour) {
          return true // 下一节课
        } else if (hour > begin_hour) {
          return false
        } else {
          if (min < begin_min) {
            return true // 下一节课
          } else {
            return false
          }
        }

        if (now_time < begin_time) {
          return true
        } else {
          return false
        }
      })
      // console.log(nextClass.classes.name.replace(/\[.*\]/,''))
      let topBarText
      if(nextClass){
        topBarText = '下一节课：' +nextClass.classes.name.replace(/\[.*\]/, '')
      }else{
        topBarText='好开心哦，今天没课啦'
      }
      

      
      wx.setTopBarText({
        text: topBarText
      })
      if(nextClass){
        setTimeout(function () {
          let time = nextClass.classes.class_schedule[nextClass.class_index].time
          let begin_time = class_time[time[0]].begin
          let end_time = class_time[time[time.length - 1]].end
          wx.setTopBarText({
            text: '时间：' + begin_time + ' - ' + end_time
          })
        }, 5500)
      }
      }
      
    timer()
  }, 12000);
}

module.exports.timer=timer