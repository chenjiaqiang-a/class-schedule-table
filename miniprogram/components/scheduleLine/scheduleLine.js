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
    },
    onComplete: {
      type: Function
    },
    onDelete: {
      type: Function
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    today: "",
    date: "",
    endDate: "",
    content: "",
    hasContent: false
  },

  lifetimes: {
    ready: function () {
      const d = new Date()
      const date = this.formatDate(d)
      d.setMonth(d.getMonth() + 2)
      const endDate = this.formatDate(d)
      this.setData({
        today: date,
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
      if (e.currentTarget.dataset.target == "Add") {
        this.setData({
          modalName: e.currentTarget.dataset.target
        })
      } else {
        this.setData({
          modalName: e.currentTarget.dataset.target,
          noteID: e.target.dataset.noteid, 
          eventID: e.target.dataset.eventid
        })
      }
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },

    onDateChange(e) {
      this.setData({
        date: e.detail.value
      })
    },

    onContentChange: function (e) {
      if (e.detail.value) {
        this.setData({
          content: e.detail.value,
          hasContent: true
        })
      } else {
        this.setData({
          content: e.detail.value,
          hasContent: false
        })
      }
    },

    onReset: function (e) {
      const d = new Date()
      const date = this.formatDate(d)
      this.hideModal()
      this.setData({
        date: date,
        content: "",
        hasContent: false
      })
    },

    onSubmit: function (e) {
      this.setData({
        loadModalAdd: true
      })
      const event = {
        date: this.data.today,
        deadline: e.detail.value.deadline,
        content: e.detail.value.content
      }
      this.properties.onAdd(event)
      setTimeout(() => {
        const d = new Date()
        const date = this.formatDate(d)
        this.hideModal()

        this.setData({
          loadModalAdd: false,
          date: date,
          content: "",
          hasContent: false
        })
      }, 500)
    },

    onComplete: function () {
      this.setData({
        loadModalCom: true
      })
      this.properties.onComplete(this.data.noteID, this.data.eventID)
      setTimeout(() => {
        this.hideModal()
        this.setData({
          loadModalCom: false
        })
      }, 500)
    },
    onDelete: function () {
      this.setData({
        loadModalDel: true
      })
      this.properties.onDelete(this.data.noteID, this.data.eventID)
      setTimeout(() => {
        this.hideModal()
        this.setData({
          loadModalDel: false
        })
      }, 500)
    }
  }
})