//components/scheduleLine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    notes: {
      type: Object
    },
    onAdd: {
      type: Function
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: "",
    endDate: "",
    content: ""
  },

  lifetimes: {
    ready: function () {
      const d = new Date()
      const date = this.formatDate(d)
      d.setMonth(d.getMonth() + 2)
      const endDate = this.formatDate(d)
      this.setData({
        date: date,
        endDate: endDate
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    formatDate: function (d) {
      let Y = d.getFullYear()
      let M = d.getMonth() + 1
      let D = d.getDate()
      if (M < 10) M = "0" + M
      if (D < 10) D = "0" + D
      return Y + "-" + M + "-" + D
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },

    DateChange(e) {
      this.setData({
        date: e.detail.value
      })
    },

    onAdd: function () {
      this.properties.onAdd()
    }
  }
})