// pages/categories/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       yes:true,
       isture1:1,
       istrue2:0,
       istrue3:0
  },
  inleft1:function(){
    this.setData({
      yes:true,
      isture1:1,
      istrue2:0,
      istrue3: 0,
      istrue4: 0,
      istrue5: 0,
      istrue6: 0,
    })
  },
  inleft2: function () {
    this.setData({
      yes: false,
      isture1: 0,
      istrue2: 1,
      istrue3: 0,
      istrue4: 0,
      istrue5: 0,
      istrue6: 0,
    })
  },
  inleft3: function () {
    this.setData({
      yes: false,
      isture1: 0,
      istrue2: 0,
      istrue3: 1,
      istrue4: 0,
      istrue5: 0,
      istrue6: 0,
    })
  },
  inleft4: function () {
    this.setData({
      yes: false,
      isture1: 0,
      istrue2: 0,
      istrue3: 0,
      istrue4: 1,
      istrue5: 0,
      istrue6: 0,
    })
  },
  inleft5: function () {
    this.setData({
      yes: false,
      isture1: 0,
      istrue2: 0,
      istrue3: 0,
      istrue4: 0,
      istrue5: 1,
      istrue6: 0,
    })
  },
  inleft6: function () {
    this.setData({
      yes: false,
      isture1: 0,
      istrue2: 0,
      istrue3: 0,
      istrue4: 0,
      istrue5: 0,
      istrue6: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
     isture1:1,
     istrue2:0,
     istrue3:0
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