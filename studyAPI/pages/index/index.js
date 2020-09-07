//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://v.juhe.cn/weather/index',
      data: {
        cityname: "东莞",
        key:"1e0635a42d0ea1b4f725fd91de82c1b0"
      },
      success:function(res){
        console.log(res);
      }
    })
  },

  
})
