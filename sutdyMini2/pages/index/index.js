Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"小小鸭婚礼",
    person:{
      "username":"小小鸭",
      "age":"22"
    },
    books:[
      "西游记",
      "水浒传",
      "红楼梦",
      "新三国"
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var person = this.data.person;
    // person.username = "大白菜";
    // this.setData({
    //   person:person
    // })

    this.setData({
      "person.username":"西红柿"
    })

    this.setData({
      "books[2]":"金瓶梅"
    })

    console.log("page.onLoad");
  },


  onShow:function(event){
    console.log("page.onShow");
  },
  onReady:function(event){
    console.log("page.onReady");
  },

  onHide:function(){
    console.log("page.onHide");
  },

  goToNextPage: function(event){
    wx.navigateTo({
      url: '/pages/mine/mine',
    })
  }

  

})