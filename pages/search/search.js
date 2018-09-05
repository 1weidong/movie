var subjectUtil = require('../../utils/subjectUtil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    movies: []
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
    
  },
  bindKeyInput: function (e) {
    this.setData({inputVal: e.detail.value});
  },
  search: function () {
    var page = this;
    if (page.data.inputVal == "") {
      wx.showModal({
        title: '小提示',
        content: '请输入需要查询的关键词，如：天下无贼',
        showCancel: false,
        confirmText: '知道啦',
        success: function (res) {
          if (res.confirm) {
            return false;
          } 
        }
      })
      return false;
    }
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1500
    })

    wx.request({
      url: 'http://t.yushu.im/v2/movie/search?q=' + page.data.inputVal,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        if (subjects.length == 0) {
          wx.hideToast()
          wx.showModal({
            title: '小提示',
            content: '没有找到你搜索的资源！',
            showCancel: false,
            confirmText: '知道啦',
            success: function (res) {
              if (res.confirm) {
                return false;
              }
            }
          })
          return false;
        }
        subjectUtil.processSubjects(subjects);
        page.setData({ movies: subjects });
        wx.hideToast()
      }
    })
  },
  detail: function (e) {
    getApp().detail(e);
  }
})