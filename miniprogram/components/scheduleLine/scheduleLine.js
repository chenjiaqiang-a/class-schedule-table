//components/scheduleLine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    notes: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    notes: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function() {
      this.setData({
        notes: this.properties.notes
      })
    }
  }
})
