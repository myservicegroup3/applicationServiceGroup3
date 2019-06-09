// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     block1:'block1',
     block3:'block3',
     istrue:0,
     dd:0,

     all:0,
  },

  tomenu: function () {
    wx.navigateTo({
      url: '../main/pagess/menu/menu'
    })
  },
  biass:function(){
      this.setData({
        istrue: 1,
      })
  },
  one: function () {
    var app = getApp();
    console.log(app.globalData);
    app.globalData.which = 1
    this.setData({
      one:1,two:0,three:0,four:0,five:0,six:0,seven:0,eight:0,nine:0
    })
  },
  two: function () {
    var app = getApp();
    console.log(app.globalData);
    app.globalData.which = 2
    this.setData({
      one: 0, two: 1, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0
    })
  },
  three: function () {
    var app = getApp();
    console.log(app.globalData);
    app.globalData.which = 3
    this.setData({
      one: 0, two: 0, three: 1, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0
    })
  },
  four: function () {
    var app = getApp();
    console.log(app.globalData);
    app.globalData.which = 4
    this.setData({
      one: 0, two: 0, three: 0, four: 1, five: 0, six: 0, seven: 0, eight: 0, nine: 0
    })
  },
  five: function () {
    var app = getApp();
    console.log(app.globalData);
    app.globalData.which = 5
    this.setData({
      one: 0, two: 0, three: 0, four: 0, five: 1, six: 0, seven: 0, eight: 0, nine: 0
    })
  },
  six: function () {
    var app = getApp();
    console.log(app.globalData);
    app.globalData.which = 6
    this.setData({
      one: 0, two: 0, three: 0, four: 0, five: 0, six: 1, seven: 0, eight: 0, nine: 0
    })
  },
  seven: function () {
    var app = getApp();
    console.log(app.globalData);
    app.globalData.which = 7
    this.setData({
      one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 1, eight: 0, nine: 0
    })
  },
  eight: function () {
    var app = getApp();
    console.log(app.globalData);
    app.globalData.which = 8
    this.setData({
      one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 1, nine: 0
    })
  },
  nine: function () {
    var app = getApp();
    console.log(app.globalData);
    app.globalData.which = 9
    this.setData({
      one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 1
    })
  },
  ten: function () {
    var app = getApp();
    console.log(app.globalData);
    app.globalData.which = 8
    this.setData({
      one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 1,nine: 1
    })
  },
  //////////////////////
  biass2: function () {
    this.setData({
      istrue: 0,
    })
  },
  normal:function()
  {
    var that=this;
    that.setData({
      block1:'block1',
      block3:'block3'
    })
    this.onLoad();
  },
  diet: function () {
    var that = this;
    that.setData({
      block1: 'block1-2',
      block3: 'block3-2'
    })
    this.onLoad();
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