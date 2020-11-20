//index.js
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    loginSuccess: true
  },

  onLoad: function () {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../versionError/versionError'
      })
      return
    }

    if (app.globalData.hasUserInfo) {
      this.setData({
        loginSuccess: app.globalData.hasUserInfo
      })
      this.jumpToMain()
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          hasUserInfo: true
        })
        this.jumpToMain()
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          app.globalData.hasUserInfo = true
          app.globalData.avatarUrl = res.userInfo.avatarUrl
          this.setData({
            hasUserInfo: true
          })
          this.jumpToMain()
        }
      })
    }
  },

  onReady: function () {
    this.setData({
      loginSuccess: false
    })
  },

  onGetUserInfo: function (e) {
    if (!this.data.loginSuccess && e.detail.userInfo) {
      app.globalData.hasUserInfo = true
      app.globalData.userInfo = e.detail.userInfo
      app.globalData.avatarUrl = e.detail.userInfo.avatarUrl
      this.setData({
        loginSuccess: true
      })
      this.jumpToMain();
    }
  },

  jumpToMain: function () {
    wx.redirectTo({
      url: '../main/main'
    })
  }
})