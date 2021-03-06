var subjectUtil = require('../../utils/subjectUtil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (movieId) {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1500
    })
    this.loadMovie(movieId.id)
    wx.hideToast()
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
    
  },
  loadMovie: function (movieId) {
    var page = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/subject/' + movieId,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var subject = res.data;
        subjectUtil.processSubject(subject);
        page.setData({ movie: subject });
      }
    })
  },
})