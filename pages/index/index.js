const { formatTime } = require('../../utils/util.js')
//index.js
//获取应用实例
const app = getApp()

const newsCategory = [
  { id: 'gn', name: '国内' },
  { id: 'gj', name: '国际' },
  { id: 'cj', name: '财经' },
  { id: 'yl', name: '娱乐' },
  { id: 'js', name: '纪实' },
  { id: 'ty', name: '台湾' },
  { id: 'other', name: '综合' }
]

Page({
  data: {
    newsCategory,
    currCate: 0,
    currNewsList: [],
    swiperImages: []
  },
  onLoad() {
    this.getNews()
  },
  handleCateChange(e) {
    const index = e.target.dataset.index
    this.setData({
      currCate: index
    }, this.getNews)
  },
  getNews() {
    const type = newsCategory[this.data.currCate].id
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      method: 'GET',
      data: { type },
      success: res => {
        this.genNewsList(res)
      }
    })
  },
  genNewsList(res) {
    let newsList = res.data.result
    newsList = newsList.map(n => {
      const date = new Date(n.date)
      n.formatedDate = formatTime(date)
      return n
    })
    this.setData({
      currNewsList: newsList
    })
  },
  handleNewsClick(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/news-detail/news-detail?id=' + id,
    })
  }
})
