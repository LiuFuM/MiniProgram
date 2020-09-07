// pages/taide/taide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    "articals":[
      {
        id:1,
        "title":"三国演义"
      },{
        id:2,
        "title":"水浒传"
      }
    ]
  },

  /*
   * view被点击
  */
   onClickView: function(event){
     console.log("我被人点击了!");
   },

   /**
    * 点击文章
    */
   onClickArtical: function(event){
     var dataset = event.currentTarget.dataset;
     var id = dataset.id;

     wx.navigateTo({
       url: '/pages/webo/webo?id='+id,
     })


   }
})