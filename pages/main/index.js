// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     block1:'block1',
     block3:'block3'
  },

  tomenu: function () {
    wx.navigateTo({
      url: '../main/pagess/menu/menu'
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