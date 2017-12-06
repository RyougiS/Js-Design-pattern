/*
* @Author: Marte
* @Date:   2017-12-06 17:03:41
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-06 17:16:21
*/

let Event = {
    addEvent:function  (element,type,handle) {
        if (element.addEventListener) {
            element.addEventListener(type,handle,false);
        } else if (element.attachEvent) {
            element.attachEvent('on'+ type,function  () {
                handle.call([element])
            });
        } else {
            element['on' + type] = handler;
        }
    },
    // 移除事件
    removeEvent : function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.datachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },


}