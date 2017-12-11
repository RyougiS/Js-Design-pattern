/*
* @Author: Marte
* @Date:   2017-12-11 15:43:37
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-11 15:43:41
*/

var row = 9;
var arry = new Array();
for(var i=0;i<row;i++){
    var arrySon = [];
    for(var j=0;j<i+1;j++){
        if(i==0 || j==0||j==i){
        arrySon.push(1);
        }else{
            arrySon.push(arry[i-1][j-1]+arry[i-1][j]);
        }
    }
    console.log(arrySon);
    arry.push(arrySon)
}