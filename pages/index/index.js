var count = 0;
var param = {
  data: {
    clickMsg: "_显示点击的内容_"
  },
  // e就是事件对象  包含了很多内容 比如谁被点击了，什么时间被点击了，在什么位置被点击了
  clickMe: function(e) {
    console.log(e);
    count++;
    // e = event
    // 如何区分到底是view0还是view1
    // 通过id就可以区分到底是view0还是view1被点击
    var id = e.currentTarget.id;
    // 把view0上点击的显示出来
    param.data.clickMsg = '显示点击内容' + id + '点击次数' + count;
    // 取得data-xxx的值 空间wxml里面可以携带私有数据
    console.log(e.currentTarget.dataset);
    // setData重新刷新界面数据
    this.setData(param.data);

    
  }
};

Page(param);