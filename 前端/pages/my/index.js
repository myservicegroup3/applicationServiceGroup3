// pages/my/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: "点击登录",
    imgsrc: '../../image/doge.jpg',
    out: '未登录',
    dd: "",
    cc: "noregister",
    ff: "fff0",
    noreg:'noregister'
  },
  quit:function(){
    wx.navigateTo({
      url: 'pagess/quit/quit',
    })
  },
  demo: function () {
    wx.navigateTo({
      url: '../my/pagess/login/login'
    })
  },
  demo1: function () {
    wx.navigateTo({
      url: '../third/pagess/login/login'
    })
  },
  demo2: function () {
    wx.navigateTo({
      url: '../third/pagess/contact/contact'
    })
  },
  demo3: function () {
    wx.navigateTo({
      url: '../third/pagess/setting/setting'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})