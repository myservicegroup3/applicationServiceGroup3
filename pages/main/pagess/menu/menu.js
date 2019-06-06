// pages/main/pagess/menu/menu.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 一类
    north: ['北食堂1', '北食堂2', '北食堂3','北食堂4',],
    //另一类
    south: ['南食堂1', '南食堂2', '南食堂3', '南食堂4',],
    //一类的图
    north_img: ['../../../../image/w1.png', '../../../../image/w6.png', '../../../../image/w8.png','../../../../image/doge.jpg'],
    //另一类的图
    south_img: ['../../../../image/w1.png', '../../../../image/w6.png', '../../../../image/w8.png', '../../../../image/doge.jpg'],


    suiji1:-1,
    suiji2: -1,
    menuwhich:0,
    dd:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData)
    var that = this;
    that.setData({
      menuwhich:app.globalData.which
    })
    var pages = getCurrentPages();
    var currPage = null;
    var prevPage = null;

    currPage = pages[pages.length - 1];
    prevPage = pages[pages.length - 2];
    var random1 = Math.floor(Math.random() * 4);
    var random2 = Math.floor(Math.random() * 4);
    this.setData({
      suiji1: random1,
      suiji2: random2,
    })
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