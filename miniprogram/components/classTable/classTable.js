// components/classTable/classTable.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    classSet: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    table: [],
    weekDays: ['星期一','星期二','星期三','星期四','星期五','星期六','星期天'],

    curCol: 0,
    curRow: 0
  },
 
  lifetimes: {
    ready: function () {
      let table = []
      for (let c = 0; c < 7; c++) {
        let col = []
        for (let r = 0; r < 12; r++ ) {
          let course = {
            hasCourse: false,
            isBeginning: false,
            _id: "",
            classid: 0,
            className: "",
            teacherName: "",
            classType: "",
            location: "",
            weekDescription: "",
            classLen: 0
          }
          col.push(course)
        }
        table.push(col)
      }
      for (let i = 0; i < this.properties.classSet.length; i++) {
        let course = this.properties.classSet[i]
        for (let j = 0; j < course.timeAndPlaceList.length; j++) {
          let c = course.timeAndPlaceList[j].classDay
          let r = course.timeAndPlaceList[j].classSessions
          table[c-1][r-1].hasCourse = true
          table[c-1][r-1].isBeginning = true
          table[c-1][r-1].classid = course.timeAndPlaceList[j].classid
          table[c-1][r-1]._id = course._id
          table[c-1][r-1].className = course.className
          table[c-1][r-1].teacherName = course.teacherName
          table[c-1][r-1].classType = course.classType
          table[c-1][r-1].weekDescription = course.timeAndPlaceList[j].weekDescription
          table[c-1][r-1].location = course.timeAndPlaceList[j].campusName + course.timeAndPlaceList[j].teachingBuildingName + course.timeAndPlaceList[j].classroomName
          table[c-1][r-1].classLen = course.timeAndPlaceList[j].continuingSession
          for (let k = 1; k < table[c-1][r-1].classLen; k++) {
            table[c-1][r-1+k].hasCourse = true
          }
        }
      }
      this.setData({
        table: table
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showModal(e) {
        console.log(e)
        this.setData({
          modalName: e.currentTarget.dataset.target,
          curCol: e.currentTarget.dataset.curcol, 
          curRow: e.currentTarget.dataset.currow
        })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
  }
})
