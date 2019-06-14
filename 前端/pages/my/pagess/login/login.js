//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '登录成功',
    userInfo: {},
    hasUserInfo: app.globalData.hasUserInfo,
    canIUse: app.globalData.canIUse
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var pages = getCurrentPages();
    var currPage = null; 
    var prevPage = null; 

    currPage = pages[pages.length - 1]; 
    prevPage = pages[pages.length - 2]; 
    ///////////////////////////////////
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    prevPage.setData({
      nickname: this.data.userInfo.nickName,
      imgsrc: this.data.userInfo.avatarUrl,
      out: "退出",
      dd: "quit",
      cc: "back3",
      ff: "fff",
      noreg:'login'
          })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
