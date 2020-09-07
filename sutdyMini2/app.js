//app.js
App({

  onShow: function(options){

    console.log("=================");
    console.log(options);
    console.log("app.onShow");

  },

  onLaunch: function (options) {
    console.log(options);
    console.log("app.noLaunch");
  },

  onHide: function(){
    console.log("=================");
    console.log("app.onHide");

  },

  onError:function(msg){
    console.log("=================");
    console.log(msg);
  },

  globalData: {
    userInfo: null
  }
})