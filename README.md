# class-schedule-table
## 功能
- 登录（index）
  - 第一次登录，请求权限
  - 已得到权限直接进入小程序主页面（main）
- 备忘录（scheduleLine）
  - 添加一条任务
  - 点击已完成
  - 删除记录
  - **批量删除
- 课表（classTable）
  - 添加一节课
  - 删除一节课
  - 查看课程详细内容
  - 修改课程内容
  - **定制课表模板
  - **爬虫获得准确课表
## 分工
- 前端
  - scheduleLine的布局样式
  - scheduleLine的前端逻辑
    - 添加按钮，实现点击弹出交互，填写deadline和事件内容，再点击“添加”，添加一条任务。
    - 完成按钮，实现点击弹出确认提示，点击取消不进行任何处理，点击确定完成任务。
    - 删除按钮，实现点击弹出确认提示，点击取消不进行任何处理，点击确定删除任务。
  - scheduleLine的前后端交互
    - 添加任务时，同步更新数据库，增加记录
    - 完成任务时，同步更新数据库
    - 删除任务时，同步删除对应记录
  - classTable的布局样式
    - 对课程表的样式进行改进（最左列、添加课程后的样式）
  - classTable的前端逻辑
    - 双击没有课程的区域，弹出提示框，提示是否添加课程，选择否不进行任何处理，选择是进入课程设置页面，输入相关课程信息（名称、课时等）后点击确定添加课程
    - 双击课程区域，弹出课程详细信息，点击关闭关闭弹框；点击删除弹出确认弹窗，确认删除；点击修改进入修改页面，修改课程信息后点击确认完成修改
  - classTable的前后端交互
    - 增加课程时同步更新数据库，增加记录
    - 修改课程时同步更新数据库
    - 删除课程时同步删除记录
- 后端
  - 云函数
    - 登录api
  - 数据库管理

## 接口约定
  - scheduleLine 用户的任务信息格式
    - data是数据的总集合
    - data数组中的每一项为某个用户的某一天的记录
  ```
{
  "data": [{
    "_id": "1000000000",
    "_openid": "1000000000",
    "date": "2020-10-20",
    "events": [{
      "id": 0,
      "deadline": "2020-11-03",
      "content": "完成离散第十一次作业",
      "isCompleted": true
    }, {
      "id": 1,
      "deadline": "2020-11-22",
      "content": "完成形教课论文",
      "isCompleted": false
    }]
  }, {
    "_id": "1000000000",
    "_openid": "1000000000",
    "date": 2020-10-21",
    "events":[{
      "id": 0,
      "deadline": Date("2020-11-29"),
      "content": "参加数学建模竞赛",
      "isCompleted": false
    }, {
      "id": 1,
      "deadline": Date("2020-12-11"),
      "content": "新生风采大会评审",
      "isCompleted": false
    }]
  }]
}
  ```
  - classTable 一个用户的课程信息格式
    - data是数据的总集合
    - data数组中的每一项为某个用户的某一节课的详细信息
  ```
{
  "data": [
  {
      _id: "0",
      _openid: "10000100000",
      className: "形势与政策-3",
      teacherName: "刘辉",
      classType: "必修",
      timeAndPlaceList: [{
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
      TeacherName: "赵苏丹* 蒋永穆 ",
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
      TeacherName: "ty9* ",
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
      TeacherName: "谢谦* ",
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
      TeacherName: "罗川* ",
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
      TeacherName: "方智阳* 网安外聘1 ",
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
      TeacherName: "刘怡光* ",
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
      TeacherName: "陈瑜* ",
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
      TeacherName: "熊勇* ",
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
      TeacherName: "游洪跃* ",
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
      TeacherName: "游洪跃* ",
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
      TeacherName: "许竞* ",
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
      TeacherName: "贺喆南* ",
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
}
  ```
