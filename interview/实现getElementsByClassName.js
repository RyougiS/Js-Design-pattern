/*
* @Author: Marte
* @Date:   2017-12-11 14:59:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-11 14:59:31
*/


function getElementsByClassName(element, names) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(names);
    } else {
        var result = [];
        element = element.getElementsByTagName('*');
        names = names.split(' ');
        for (var i = 0; element[i]; i++) {
            var flag = 1;
            for (var j = 0; names[j]; j++) {
                if ((' ' + element[i].className + ' ').indexOf(' ' + names[j] + ' ') == -1) {
                    flag = 0;
                    break;
                }
            }
            if (flag) {
                result.push(element[i]);
            }
        }
        return result;
    }
}