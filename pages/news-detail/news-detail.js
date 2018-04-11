const { formatTime } = require('../../utils/util.js')
// pages/news-detail/news-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    date: '',
    source: '',
    readCount: 0,
    firstImage: 'about:blank',
    content: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.getNewsDetail(options.id)
  },
  getNewsDetail(id) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      method: 'GET',
      data: { id },
      success: res => {
        const result = res.data.result
        if (!result) return
        let { title, date, source, firstImage, content, readCount } = result
        date = formatTime(new Date(date))
        this.setData({
          content,
          date,
          title,
          source,
          firstImage,
          readCount
        })
      }
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