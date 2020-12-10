// miniprogram/pages/main/main.js
const table = [{
  _id: "0",
  _openid: "10000100000",
  className: "形势与政策-3",
  teacherName: "刘辉",
  classType: "必修",
  timeAndPlaceList: [{
    classid: 0,
    classDay: 5,
    classSessions: 8,
    campusName: "江安",
    teachingBuildingName: "综合楼C座",
    classroomName: "C306",
    weekDescription: "3-9周单",
    continuingSession: 2
  }]
}, {
  _id: "1",
  _openid: "10000100000",
  className: "马克思主义基本原理概论",
  teacherName: "赵苏丹* 蒋永穆 ",
  classType: "必修",
  timeAndPlaceList: [{
    classDay: 1,
    classSessions: 3,
    campusName: "江安",
    teachingBuildingName: "综合楼C座",
    classroomName: "C503",
    weekDescription: "2-18周",
    continuingSession: 2
  }]
}, {
  _id: "2",
  _openid: "10000100000",
  className: "体育-3",
  teacherName: "ty9* ",
  classType: "必修",
  timeAndPlaceList: [{
    classDay: 3,
    classSessions: 8,
    campusName: "江安",
    teachingBuildingName: "体育场",
    classroomName: "体育场2号",
    weekDescription: "2-17周",
    continuingSession: 2
  }]
}, {
  _id: "3",
  _openid: "10000100000",
  className: "中华文化（文学篇）",
  teacherName: "谢谦* ",
  classType: "任选",
  timeAndPlaceList: [{
    classDay: 1,
    classSessions: 5,
    campusName: "江安",
    teachingBuildingName: "一教B座",
    classroomName: "B307",
    weekDescription: "2-18周",
    continuingSession: 3
  }]
}, {
  _id: "4",
  _openid: "10000100000",
  className: "计算机组成原理实验",
  teacherName: "罗川* ",
  classType: "必修",
  timeAndPlaceList: [{
    classDay: 4,
    classSessions: 1,
    campusName: "江安",
    teachingBuildingName: "实验室",
    classroomName: "二基楼B310B",
    weekDescription: "11-15周",
    continuingSession: 4
  }]
}, {
  _id: "5",
  _openid: "10000100000",
  className: "微信移动终端开发",
  teacherName: "方智阳* 网安外聘1 ",
  classType: "任选",
  timeAndPlaceList: [{
    classDay: 5,
    classSessions: 1,
    campusName: "江安",
    teachingBuildingName: "一教A座",
    classroomName: "A105",
    weekDescription: "4-13周",
    continuingSession: 4
  }]
}, {
  _id: "6",
  _openid: "10000100000",
  className: "计算机新技术专题",
  teacherName: "刘怡光* ",
  classType: "任选",
  timeAndPlaceList: [{
    classDay: 1,
    classSessions: 8,
    campusName: "江安",
    teachingBuildingName: "一教A座",
    classroomName: "A305",
    weekDescription: "2-5周",
    continuingSession: 2
  }, {
    classDay: 4,
    classSessions: 8,
    campusName: "江安",
    teachingBuildingName: "一教A座",
    classroomName: "A305",
    weekDescription: "2-5周",
    continuingSession: 2
  }]
}, {
  _id: "7",
  _openid: "10000100000",
  className: "离散数学",
  teacherName: "陈瑜* ",
  classType: "必修",
  timeAndPlaceList: [{
    classDay: 1,
    classSessions: 1,
    campusName: "江安",
    teachingBuildingName: "一教A座",
    classroomName: "A506",
    weekDescription: "2-18周",
    continuingSession: 2
  }, {
    classDay: 3,
    classSessions: 5,
    campusName: "江安",
    teachingBuildingName: "一教A座",
    classroomName: "A101",
    weekDescription: "2-18周",
    continuingSession: 3
  }]
}, {
  _id: "8",
  _openid: "10000100000",
  className: "计算机组成原理",
  teacherName: "熊勇* ",
  classType: "必修",
  timeAndPlaceList: [{
    classDay: 2,
    classSessions: 5,
    campusName: "江安",
    teachingBuildingName: "一教A座",
    classroomName: "A507",
    weekDescription: "2-17周",
    continuingSession: 3
  }]
}, {
  _id: "9",
  _openid: "10000100000",
  className: "数据结构与算法分析",
  teacherName: "游洪跃* ",
  classType: "必修",
  timeAndPlaceList: [{
    classDay: 4,
    classSessions: 5,
    campusName: "江安",
    teachingBuildingName: "一教A座",
    classroomName: "A420",
    weekDescription: "2-17周",
    continuingSession: 3
  }]
}, {
  _id: "10",
  _openid: "10000100000",
  className: "数据结构与算法分析课程设计",
  teacherName: "游洪跃* ",
  classType: "必修",
  timeAndPlaceList: [{
    classDay: 4,
    classSessions: 8,
    campusName: "江安",
    teachingBuildingName: "实验室",
    classroomName: "二基楼B301",
    weekDescription: "6-15周",
    continuingSession: 2
  }]
}, {
  _id: "11",
  _openid: "10000100000",
  className: "大学英语（创意阅读）-3",
  teacherName: "许竞* ",
  classType: "必修",
  timeAndPlaceList: [{
    classDay: 3,
    classSessions: 3,
    campusName: "江安",
    teachingBuildingName: "一教C座",
    classroomName: "C203",
    weekDescription: "2-18周",
    continuingSession: 2
  }]
}, {
  _id: "12",
  _openid: "10000100000",
  className: "矩阵分析",
  teacherName: "贺喆南* ",
  classType: "必修",
  timeAndPlaceList: [{
    classDay: 2,
    classSessions: 1,
    campusName: "江安",
    teachingBuildingName: "文科楼一区",
    classroomName: "104",
    weekDescription: "2-17周",
    continuingSession: 3
  }]
}]

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0,

    notes: [],
    classSet: [],

    onAddEvent: null,
    onCompleteEvent: null,
    onDeleteEvent: null,

    onAddClass: null,
    onDeleteClass: null
  },

  onLoad: function () {
    const db = wx.cloud.database()

    //加载用户scheduleLine数据
    db.collection("scheduleLine").where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        const data = res.data
        let orderData = []
        for (let i = data.length - 1; i >= 0; i--) {
          orderData.push(data[i])
        }
        this.setData({
          notes: orderData
        })
      }
    })
    //加载用户classTable数据
    db.collection("classTable").where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        const data = res.data
        this.setData({
          classSet: data
        })
      }
    })
    this.setData({
      onAddEvent: this.onAddEvent,
      onCompleteEvent: this.onCompleteEvent,
      onDeleteEvent: this.onDeleteEvent,
      onAddClass: this.onAddClass,
      onDeleteClass: this.onDeleteClass
    })
  },

  onAddEvent: function (event) {
    const db = wx.cloud.database()
    if (event.date === this.data.notes[0].date) {
      const e = [{
        id: this.data.notes[0].events[0].id + 1,
        deadline: event.deadline,
        content: event.content,
        isCompleted: false
      }]
      const events = e.concat(this.data.notes[0].events)
      db.collection("scheduleLine").doc(this.data.notes[0]._id).update({
        data: {
          events: events
        },
        success: (res) => {
          let notes = this.data.notes
          notes[0].events = events
          this.setData({
            notes: notes
          })
        }
      })
    } else {
      db.collection("scheduleLine").add({
        data: {
          date: event.date,
          events: [{
            id: 0,
            deadline: event.deadline,
            content: event.content,
            isCompleted: false
          }]
        },
        success: (res) => {
          const note = [{
            _id: res._id,
            _openid: app.globalData.openid,
            date: event.deadline,
            events: [{
              id: 0,
              deadline: event.deadline,
              content: event.content,
              isCompleted: false
            }]
          }]
          const notes = note.concat(this.data.notes)
          this.setData({
            notes: notes
          })
        }
      })
    }
  },
  onCompleteEvent: function (noteID, eventID) {
    const db = wx.cloud.database()
    let events
    let k
    for (k = 0; k < this.data.notes.length; k++) {
      if (this.data.notes[k]._id === noteID) {
        events = this.data.notes[k].events
        break
      }
    }
    for (let i = 0; i < events.length; i++) {
      if (events[i].id === eventID) {
        events[i].isCompleted = true
        break
      }
    }
    db.collection("scheduleLine").doc(noteID).update({
      data: {
        events: events
      },
      success: (res) => {
        let notes = this.data.notes
        notes[k].events = events
        this.setData({
          notes: notes
        })
      }
    })
  },
  onDeleteEvent: function (noteID, eventID) {
    const db = wx.cloud.database()
    let events = []
    let e = null
    let pos = 0
    for (pos = 0; pos < this.data.notes.length; pos++) {
      if (this.data.notes[pos]._id == noteID) {
        e = this.data.notes[pos].events
        break
      }
    }
    for (let i = 0; i < e.length; i++) {
      if (e[i].id == eventID) {
        continue
      }
      events.push(e[i])
    }
    if (events.length > 0) {
      db.collection("scheduleLine").doc(noteID).update({
        data: {
          events: events
        },
        success: () => {

          const notes = this.data.notes
          notes[pos].events = events
          this.setData({
            notes: notes
          })
        },
      })
    } else {
      db.collection("scheduleLine").doc(noteID).remove({
        success: () => {

          const notes = []
          for (let i = 0; i < this.data.notes.length; i++) {
            if (this.data.notes[i]._id === noteID) {
              continue
            }
            notes.push(this.data.notes[i])
          }
          this.setData({
            notes: notes
          })
        }
      })
    }
  },

  onAddClass: function (course) {
    const db = wx.cloud.database()
    const table = this.data.classSet
    let hasClass = false
    for (let i = 0; i < table.length; i++) {
      if (table[i].className == course.className) {
        hasClass = true
        let timeAndPlaceList = table[i].timeAndPlaceList
        timeAndPlaceList.push(course.timeAndPlaceList[0])
        console.log(timeAndPlaceList)
        timeAndPlaceList[timeAndPlaceList.length - 1].classid = timeAndPlaceList[timeAndPlaceList.length - 2].classid + 1
        db.collection("classTable").doc(table[i]._id).update({
          data: {
            timeAndPlaceList: timeAndPlaceList
          },
          success: () => {
            table[i].timeAndPlaceList = timeAndPlaceList
            this.setData({
              classSet: table
            })
          }
        })
        break
      }
    }
    if (!hasClass) {
      db.collection('classTable').add({
        data: course,
        success: (res) => {
          course._id = res._id
          course._openid = app.globalData.openid
          table.push(course)
          this.setData({
            classSet: table
          })
        }
      })
    }
  },
  onDeleteClass: function (_id, classid) {
    const db = wx.cloud.database()
    let k
    let table = this.data.classSet
    for (k = 0; k < table.length; k++) {
      if (table[k]._id === _id) {
        break
      }
    }
    if (table[k].timeAndPlaceList.length == 1) {
      db.collection("classTable").doc(_id).remove({
        success: () => {
          let newTable = []
          for (let i = 0; i < table.length; i++) {
            if (i == k) {
              continue
            }
            newTable.push(table[i])
          }
          this.setData({
            classSet: newTable
          })
        }
      })
    } else {
      let l
      let place = []
      for (l = 0; l < table[k].timeAndPlaceList.length; l++) {
        if (table[k].timeAndPlaceList[l].classid != classid) {
          place.push(table[k].timeAndPlaceList[l])
        }
      }
      db.collection("classTable").doc(_id).update({
        data: {
          timeAndPlaceList: place
        },
        success: () => {
          table[k].timeAndPlaceList = place
          this.setData({
            classSet: table
          })
        }
      })
    }
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})