Page({
  data:{
      result:0,
      first:"",
      last:""
  },
  tap:function (e) {
    var val=e.currentTarget.dataset.value;  
    if(this.data.equ){
      var last=this.data.last+val;
      this.setData({
        last:last,
        result:last
      })
    }else{
      var first=this.data.first+val;
      this.setData({
        first:first,
        result:first
      })
    }
  },
  punctuation:function(e){
    var val=e.currentTarget.dataset.symbol;
    this.setData({
      equ:val
    })
  },
  equal:function(){
    var res;
    var first=parseInt(this.data.first);
    var last=parseInt(this.data.last)
    if(this.data.equ){
      if(this.data.equ==="+"){
        res=first+last;
      }else if(this.data.equ==="-"){
        res=first-last;
      }else if(this.data.equ==="*"){
        res=first*last;
      }else if(this.data.equ==="/"){
        res=first/last;
      }
      this.setData({
        result:res,
        first:'',
        last:'',
        equ:null
      })
    }
  },
  nul:function(){
    this.setData({
        result:0,
        first:'',
        last:'',
        equ:null,
      })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})