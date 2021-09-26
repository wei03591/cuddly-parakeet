// index.js
var benjin,lilv,sum,i;
Page({
  startnum:function(e){
    benjin=parseFloat(e.detail.value);
  },
  endnum:function(e){
    lilv = parseFloat(e.detail.value);
  },
  calc:function(){
    for(i = 0;i<5;i++){
      benjin = benjin * lilv + benjin ;
    }
    this.setData({
      sum : parseInt(benjin)
    })
  }

})