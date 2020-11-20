// miniprogram/pages/main/main.js
const notes = {
  _id: "陈家强",
  _openid: "10086",
  data: [{
    date: "2020-10-20",
    events: [{
      id: 0,
      deadline: "2020-11-03",
      content: "完成离散第十一次作业",
      isCompleted: true
    }, {
      id: 1,
      deadline: "2020-11-22",
      content: "完成形教课论文",
      isCompleted: false
    }]
  }, {
    date: "2020-10-21",
    events:[{
      id: 0,
      deadline: "2020-11-29",
      content: "参加数学建模竞赛",
      isCompleted: false
    }, {
      id: 1,
      deadline: "2020-12-11",
      content: "新生风采大会评审",
      isCompleted: false
    }]
  }]
}

const table = {}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0,

    user: notes.userName,
    id: notes.userID,
    notes: notes.data
  },

  onLoad: function() {

  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  }
})