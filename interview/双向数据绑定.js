function Lue(options) {
    this._init(options);
}
Lue.prototype._init = function (options) {
    this.$options = options;                              //传入的实例配置
    this.$el = document.querySelector(options.el);        //实例绑定的根节点
    this.$data = options.data;                            //实例的数据域
    this.$methods = options.methods;                      //实例的函数域
};
/**对象属性重定义
 * @param key 数据对象名称，本例为"count"
 * @param val 数据对象的值
 */
Lue.prototype.convert = function (key, val) {
    Object.defineProperty(this.$data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log(`获取${val}`);
            return val;
        },
        set: function (newVal) {
            console.log(`更新${newVal}`);
            val = newVal;
        }
    })
};

//遍历数据域，添加getter/setter
Lue.prototype._parseData = function (obj) {
    var value;
    for (var key in obj) {
        //排除原型链上的属性，仅仅遍历对象本身拥有的属性
        if (obj.hasOwnProperty(key)) {
            value = obj[key];
            //如果属性值为对象，则递归解析。本文暂不做实现
            //if(typeof value ==='object'){
            //this._parseData(value);
            //}
            this.convert(key, value);
        }
    }
};