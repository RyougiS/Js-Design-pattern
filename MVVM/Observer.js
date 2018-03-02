/*
//测试
var library = {
    book1: {
        name: ''
    },
    book2: ''
};
observe(library);
library.book1.name = 'vue document';
library.book2 = '未出现';
*/

function Observer(data) {
    this.data = data;
    this.walk(data)
}

Observer.prototype = {
    walk: function (data) {
        var self = this;
        Object.keys(data).forEach(function(key) {
            self.defineReactive(data, key, data[key]);
        });
    },
    defineReactive: function (data,key,val) {
        var dep = new Dep();//植入一个订阅器
        var childObj = observe(val);
        Object.defineProperty(data,key,{
            enumerable:true,
            configurable:true,
            get: function getter() {

                if (Dep.target) { //// 判断是否需要添加订阅者
                    dep.addSub(Dep.target);//添加一个订阅器
                }

                return val
            },
            set: function setter(newVal) {
                if (val === newVal) {
                    return
                }
                val = newVal;
                console.log("已被监听","新的属性值是:"+newVal);

                dep.notify(); // 如果数据变化，通知所有订阅者
            }
        })
    }
}


function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }
    return new Observer(value);
};

function Dep () {
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};
Dep.target = null;
