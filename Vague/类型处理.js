
//==================================================

/*

||:第一个True    返回第一个值
   第一个false   返回第二个值
&&:第一个True    返回第二个值
   第一个false   返回第一个值

*/





/*
obj和obj   永不相等
obj和str   obj->str再比较
obj与num   obj->str,str->num, 比数字
obj与boo   obj->str,str->num,boo->num,比数字
str与num   str->num.比数字
str与boo   str->num,boo->num,比数字
boo与num   boo->num 比数字
*/

console.log(null == undefined);
console.log(NaN != NaN);
console.log(NaN == NaN);
console.log(null == NaN);

/*isNaN*/
console.log(isNaN('0'));
console.log(isNaN(0));
console.log(isNaN(NaN));
console.log(isNaN([]));
console.log(isNaN([1,2]));
console.log(isNaN({}));
console.log(isNaN(' 2 '));
console.log(isNaN('1.1.1'));
console.log(isNaN(null));
console.log(isNaN(undefined));

/*Number()  return  number  NaN
从头数到尾数中间不能有数字以外的东西
*/
console.log(Number(null));
console.log(Number(undefined));
console.log(Number("1"));
console.log(Number(" 1 "));
console.log(Number("  1  2 "));
console.log(Number(""));
console.log(Number(" "));
console.log(Number([]));
console.log(Number([1]));
console.log(Number([1,2]));
console.log(Number(1.2));
console.log(Number("1,2"));
console.log(Number(NaN));
console.log(Number(true));
console.log(Number(new Date("December 17, 1995 03:24:00");));
console.log(Number(".5"));
console.log(Number(.5));
console.log(Number("12 5"));

/*
parseInt(string, radix); 识别整数
radix 一个介于2和36之间的整数
返回解析后的整数值。 如果被解析参数的第一个字符无法被转化成数值类型，则返回 NaN
parseInt不应该用作 Math.floor()的替代品。
*/
console.log(parseInt(".369"));
console.log(parseInt("0.369"));
console.log(parseInt(.369));
console.log(parseInt([]));
console.log(parseInt([1]));
console.log(parseInt([,11,1]));
console.log(parseInt([11,1]));
console.log(parseInt("34a"));
console.log(parseInt("34a1"));
console.log(parseInt("  34a1"));
console.log(parseInt(" 3 4a1"));
console.log(parseInt("a341"));
console.log(parseInt(null));
console.log(parseInt(undefined));
console.log(parseInt(true));
console.log(parseInt({}));
console.log(parseInt(""));
console.log(parseInt(" "));
console.log(parseInt(new Date()));

/*
parseFloat()
*/
console.log(parseFloat("0.369"));
console.log(parseFloat("0.2.3"));
console.log(parseFloat("2.34a"));
console.log(parseFloat([.32,1]));
console.log(parseFloat(" .34"));
console.log(parseFloat(" .3 4"));
console.log(parseFloat({}));

/*
Boolean
*/
Boolean(0)
//false
Boolean(NaN)
//false
Boolean(null)
//false
Boolean(undefined)
//false
Boolean("")
//false


/*
隐式转换
*/
0 == [] //√
{} : [object Object]

{} + []
//0
[] + {}
//"[object Object]"
[] + []
//""
{} + {}
//"[object Object][object Object]"
[] + null
//"null"
{} + undefined
//NaN
{} +5
//5
[] + 5
//"5"
null + undefined
//NaN
