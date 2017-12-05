/*
* @Author: Marte
* @Date:   2017-12-05 13:35:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-05 14:39:18
*/

// 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

// 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）


function insertionSort (arr) {
    var len = arr.length;
    var preIndex,current;
    for (var i = 0; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0  && arr[preIndex] > current){
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}

function insertionSort( data ) {
    var len = data.length;
    for (var i = 1; i < len; i++) {
        var key = data[i];
        var j = i - 1;
        while ( j >= 0 && data[j] > key) {
            data[j + 1] = data[j];
            j--;
        }
        data[j + 1] = key;
    }
    return data;
}

var dataStore = [ 72 , 1 , 68 , 95 , 75 , 54 , 58 , 10 , 35 , 6 , 28 , 45 , 69 , 13 , 88 , 99 , 24 , 28 , 30 , 31 , 78 , 2 , 77 , 82 , 72 ];

console.log( '原始数据:' + dataStore );
console.log( '插入排序:' + insertionSort( dataStore) );