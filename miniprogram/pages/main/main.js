// miniprogram/pages/main/main.js
// const notes =  [{
//     date: "2020-10-20",
//     events: [{
//       id: 0,
//       deadline: "2020-11-03",
//       content: "完成离散第十一次作业",
//       isCompleted: true
//     }, {
//       id: 1,
//       deadline: "2020-11-22",
//       content: "完成形教课论文",
//       isCompleted: false
//     }]
//   }, {
//     date: "2020-10-21",
//     events: [{
//       id: 0,
//       deadline: "2020-11-29",
//       content: "参加数学建模竞赛",
//       isCompleted: false
//     }, {
//       id: 1,
//       deadline: "2020-12-11",
//       content: "新生风采大会评审",
//       isCompleted: false
//     }]
//   }]

const table = {}

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0,

    notes: [],

    onAdd: null
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

    this.setData({
      onAddEvent: this.onAddEvent
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
            notes:notes
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
          console.log(res)
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

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})