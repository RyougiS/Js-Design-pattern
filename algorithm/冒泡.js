/*
* @Author: Marte
* @Date:   2017-12-05 13:35:39
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-05 14:21:26
*/

// 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

// 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

// 针对所有的元素重复以上的步骤，除了最后一个。

// 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。


function bubbleSort (arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) { //相邻元素两两相对比
                var temp = arr[j+1];//元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            };
        };
    };
    return arr;
}

function bubbleSort ( data ) {
    var temp = 0;
    for ( var i = data.length ; i > 0 ; i -- ){
        for( var j = 0 ; j < i - 1 ; j++){
           if( data[j] > data[j + 1] ){
               temp = data[j];
               data[j] = data [j+1];
               data[j+1] = temp;
           }
        }
    }
    return data;
}

var dataStore = [ 72 , 1 , 68 , 95 , 75 , 54 , 58 , 10 , 35 , 6 , 28 , 45 , 69 , 13 , 88 , 99 , 24 , 28 , 30 , 31 , 78 , 2 , 77 , 82 , 72 ];

console.log( '原始数据:' + dataStore );
console.log( '冒泡排序:' + bubbleSort( dataStore) );