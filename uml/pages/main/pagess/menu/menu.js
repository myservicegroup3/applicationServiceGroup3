// pages/main/pagess/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:['这是爱心瓶子','这是面膜','这是镜子','这是doge',],
    img: ['../../../../image/w1.png', '../../../../image/w6.png', '../../../../image/w8.png','../../../../image/doge.jpg'],
    suiji1:-1,
    suiji2: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var random1 = Math.floor(Math.random() * 4);
    var random2 = Math.floor(Math.random() * 4);
    this.setData({
      suiji1: random1,
      suiji2: random2
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