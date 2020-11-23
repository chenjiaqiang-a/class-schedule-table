// components/classTable/classTable.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    lastTapTime:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    doubleClick: function (e) {
      var curTime = e.timeStamp
      var lastTime = e.currentTarget.dataset.time  // 通过e.currentTarget.dataset.time 访问到绑定到该组件的自定义数据
      if (curTime - lastTime > 0) {
        if (curTime - lastTime < 300) {//是双击事件
          const db = wx.cloud.database()
          db.collection("classTable").add({
            data:{
              classname:"离散数学",
              teachername:"陈瑜",
              place:"江安一教A座A506",
              weeks:"2-18"
            },
            success: res => {
              this.setData({
                classes:{
                  classname:res.classname,
                  teachername:res.teachername,
                  place:res.place,
                  weeks:res.place
                }
              })
              wx.showToast({
                title: '添加成功',
              })
            }
          })
        }
        
      }
      this.setData({
        lastTapTime: curTime
      })
    }
  }
})
