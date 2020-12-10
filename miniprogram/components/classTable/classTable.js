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
    onChange: {
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
    weekDays: ['星期一','星期二','星期三','星期四','星期五','星期六','星期天'],
    index: null,
    picker: ['必修', '选修'],
    multiArray: [
      ['望江校区', '江安校区','华西校区'],
      ['东二教', '东三教', '基教楼A座', '基教楼C座'],
    ],
    objectMultiArray: [
      [{
          id: 0,
          name: '望江校区'
        },
        {
          id: 1,
          name: '江安校区'
        },
        {
          id: 2,
          name: '华西校区'
        }
      ],
      [{
          id: 0,
          name: '东二教'
        },
        {
          id: 1,
          name: '东三教'
        },
        {
          id: 2,
          name: '基教楼A座'
        },
        {
          id: 3,
          name: '基教楼C座'
        }
      ],
    ],
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
    onAdd:function(){
      setTimeout(() => {
        this.hideModal()

        this.setData({
          loadModalAdd: false,
          hasContent: false
        })
      }, 500)
    },
    onChange:function(){

    },
    onDelete: function () {
      this.setData({
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
    onClassChange: function (e) {
      if (e.detail.value) {
        this.setData({
          className: e.detail.value,
          timeAndPlaceList: e.detail.value,
          
        })
      } else {
        this.setData({
          className: e.detail.value,
          timeAndPlaceList: e.detail.value,
          
        })
      }
    },
    PickerChange(e) {
      console.log(e);
      this.setData({
        index: e.detail.value
      })
    },
    MultiChange(e) {
      this.setData({
        multiIndex: e.detail.value
      })
    },
    MultiColumnChange(e) {
      let data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ['东二教', '东三教', '基教楼A座', '基教楼C座'];
              break
            case 1:
              data.multiArray[1] = ['一教A座', '一教B座', '一教C座', '一教D座', '综合楼B座', '综合楼C座', '文科楼一区', '文科楼二区', '文科楼三区'];
              break
            case 2:
              data.multiArray[1] = ['九教', '十教'];
              break;
          }
          data.multiIndex[1] = 0;
          break;
      }
      this.setData(data);
    },
  }
})
