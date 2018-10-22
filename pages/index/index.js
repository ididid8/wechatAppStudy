var param = {
  data: {
    message: '微信小程序',
    array: [1, 2, 3, 4, 5],
    view: "APP",
    zhangsan: {name: '张三', age: 18},
    lisi: {name: '李四', age: 28},
    count: 0,
  },
  add: function(e) {
    let count2 = this.data.count + 1;
    this.setData({count: count2})
    console.log(e);
  }
};

Page(param);