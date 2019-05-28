
const app = getApp()

Page({
  data: {
    motto: '登录成功',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var pages = getCurrentPages();
    var currPage = null; //当前页面
    var prevPage = null; //上一个页面

    currPage = pages[pages.length - 1]; //当前页面
    prevPage = pages[pages.length - 2]; //上一个页面
    ///////////////////////////////////////
    wx.showModal({
      title: '退出成功',
      showCancel: false,
      confirmText: '确定'
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      prevPage.setData({
        nickname: app.globalData.userInfo.nickName,
        imgsrc: app.globalData.userInfo.avatarUrl
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        prevPage.setData({
          nickname: res.userInfo.nickName,
          imgsrc: res.userInfo.avatarUrl
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
          prevPage.setData({
            nickname: res.userInfo.nickName,
            imgsrc: res.userInfo.avatarUrl
          })
        }
      })
    }
    prevPage.setData({
      nickname: "点击登录",
      imgsrc: '../../image/doge.jpg',
      out: '未登录',
      dd: "",
      cc: "noregister",
      ff: "fff0",
      noreg: 'noregister'
    })

  },
  ////////////////////////
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})

