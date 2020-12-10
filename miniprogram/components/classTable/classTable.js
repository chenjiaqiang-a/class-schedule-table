// components/classTable/classTable.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    classSet: {
      type: Array
    },
    onAdd: {
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
    table: [],
    weekDays: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],

    curCol: 0,
    curRow: 0,

    className: "",
    teacherName: "",
    classroomName: "",
    classTypeIndex: 0,
    classType: ['必修', '选修'],
    classLenIndex: 0,
    classLen: [1, 2, 3, 4, 5, 6, 7, 8],
    placeIndex: [0, 0],
    placeArray: [
      ['江安校区', '望江校区', '华西校区'],
      ['一教A座', '一教B座', '一教C座', '一教D座', '综合楼B座', '综合楼C座', '文科楼一区', '文科楼二区', '文科楼三区', '二基楼', '一基楼']
    ],
  },

  lifetimes: {
    ready: function () {
      let table = []
      for (let c = 0; c < 7; c++) {
        let col = []
        for (let r = 0; r < 12; r++) {
          let course = {
            hasCourse: false,
            isBeginning: false,
            _id: "",
            classid: 0,
            className: "",
            teacherName: "",
            classType: "",
            location: "",
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
          table[c - 1][r - 1].hasCourse = true
          table[c - 1][r - 1].isBeginning = true
          table[c - 1][r - 1].classid = course.timeAndPlaceList[j].classid
          table[c - 1][r - 1]._id = course._id
          table[c - 1][r - 1].className = course.className
          table[c - 1][r - 1].teacherName = course.teacherName
          table[c - 1][r - 1].classType = course.classType
          table[c - 1][r - 1].weekDescription = course.timeAndPlaceList[j].weekDescription
          table[c - 1][r - 1].location = course.timeAndPlaceList[j].campusName + course.timeAndPlaceList[j].teachingBuildingName + course.timeAndPlaceList[j].classroomName
          table[c - 1][r - 1].classLen = course.timeAndPlaceList[j].continuingSession
          for (let k = 1; k < table[c - 1][r - 1].classLen; k++) {
            table[c - 1][r - 1 + k].hasCourse = true
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

    onShowAdd: function () {
      this.setData({
        modalName: 'Add'
      })
    },

    onClassNameChange: function (e) {
      this.setData({
        className: e.detail.value
      })
    },
    onTeacherNameChange: function (e) {
      this.setData({
        teacherName: e.detail.value
      })
    },
    onClassroomNameChange: function (e) {
      this.setData({
        classroomName: e.detail.value
      })
    },
    onClassTypeChange: function (e) {
      this.setData({
        classTypeIndex: e.detail.value
      })
    },
    onClassLenChange: function (e) {
      this.setData({
        classLenIndex: e.detail.value
      })
    },
    onPlaceChange(e) {
      this.setData({
        multiIndex: e.detail.value
      })
    },
    onCampusChange(e) {
      let data = {
        placeArray: this.data.placeArray,
        placeIndex: this.data.placeIndex
      };
      data.placeIndex[e.detail.column] = e.detail.value
      if (e.detail.column == 0) {
        switch (data.placeIndex[0]) {
          case 0:
            data.placeArray[1] = ['一教A座', '一教B座', '一教C座', '一教D座', '综合楼B座', '综合楼C座', '文科楼一区', '文科楼二区', '文科楼三区']
            break
          case 1:
            data.placeArray[1] = ['东二教', '东三教', '基教楼A座', '基教楼C座']
            break
          case 2:
            data.placeArray[1] = ['九教', '十教']
            break
        }
        data.placeIndex[1] = 0
      }
      this.setData(data);
    },
    onSubmit: function () {
      this.setData({
        loadModalAdd: true
      })
      const course = {
        className: this.data.className,
        teacherName: this.data.teacherName,
        classType: this.data.classType[this.data.classTypeIndex],
        timeAndPlaceList: [{
          classid: 0,
          classDay: this.data.curCol+1,
          classSessions: this.data.curRow+1,
          campusName: this.data.placeArray[0][this.data.placeIndex[0]],
          teachingBuildingName: this.data.placeArray[1][this.data.placeIndex[1]],
          classroomName: this.data.classroomName,
          continuingSession: this.data.classLen[this.data.classLenIndex]
        }]
      }
      this.properties.onAdd(course)
      setTimeout(() => {
        this.onReset()
        this.setData({
          loadModalAdd: false
        })
      }, 500)
    },
    onReset: function() {
      this.hideModal()
      this.setData({
        className: "",
        teacherName: "",
        classroomName: "",
        classTypeIndex: 0,
        classLenIndex: 0,
        placeIndex: [0, 0],
        placeArray: [
          ['江安校区', '望江校区', '华西校区'],
          ['一教A座', '一教B座', '一教C座', '一教D座', '综合楼B座', '综合楼C座', '文科楼一区', '文科楼二区', '文科楼三区', '二基楼', '一基楼']
        ]
      })
    },

    onTapDelete: function() {
      this.setData({
        toDelete: true
      })
    },
    notDelete: function() {
      this.setData({
        toDelete:false
      })
    },
    onDelete: function () {
      this.setData({
        toDelete: false,
        loadModalDel: true
      })
      const course = this.data.table[this.data.curCol][this.data.curRow]
      this.properties.onDelete(course._id, course.classid)
      setTimeout(() => {
        this.hideModal()
        this.setData({
          loadModalDel: false
        })
      }, 500)
    },

  }
})