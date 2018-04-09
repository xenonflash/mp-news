//index.js
//获取应用实例
const app = getApp()

const newsCategory = [
  {
    id: 'gn',
    name: '国内'
  },
  {
    id: 'gj',
    name: '国际'
  },
  {
    id: 'cj',
    name: '财经'
  },
  {
    id: 'yl',
    name: '娱乐'
  },
  {
    id: 'js',
    name: '纪实'
  },
  {
    id: 'ty',
    name: '台湾'
  },
  {
    id: 'other',
    name: '综合'
  },
]

Page({
  data: {
    newsCategory,
    currCate: 0
  },
  handleCateChange(e) {
    const index = e.target.dataset.index
    this.setData({
      currCate: index
    })
  }
})
