function usrInput(q) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(function(resolve, reject) {
    readline.question(q, function(answer) {
      resolve(answer);
      readline.close();
    });
  });
}

(async function main() {
  const question = await usrInput("3辺の長さを入力してください。また、値と値の間はスペースで区切ってください。=>");
  const arr = question.split(" ");
  

  getTriangle(arr);

  
})();


function getTriangle(arr) {
  console.log(35, arr[0], arr[1], arr[2]);

  checkInputLen(arr);

  var res = checkVal(arr);
  var sortedArr = valueSort(res);

  var res = compareVal(sortedArr);

  return console.log(res);
  ;
  
}

function checkInputLen(arr) {
  if(arr.length < 3) {
    console.error("ERROR: 入力する数値が足りません");
    return;
  }
}

function checkVal(arr) {
  var array = [];
  for(var i = 0, len = arr.length; i < len; i++) {
    
    var value = Math.pow(arr[i], 2);
    console.log(51, value);
    
    array.push(value);
  }  

  console.log(57, array);
  return array;
}

function valueSort(arr) {
  var res = arr.sort(numCompare);
  console.log(60, res);
  return res;
}

function numCompare(a, b) {
  // 降順でソート
  // return a - b;
  // 昇順でソート
  return b - a;
}

function compareVal(res) {
  if(res[0] === res[1] && res[0] === res[2]) {
    var res = "正三角形"

  } else if(res[0] + res[1] === res[2]) {
    var res = "直角三角形";

  } else if(res[0] < res[1] + res[2] && res[1] !== res[2]) {
    var res = "鋭角三角形";

  } else if(res[0] < res[1] + res[2] && res[1] === res[2]) {
    var res = "鋭角二等辺三角形";

  } else if(res[0] > res[1] + res[2]) {
    var res = "鈍角三角形";
  }

  return res;

}


/**
 * 三角形の定義
 * 正三角形… a = b = c
 * 直角三角形… a^2 + b^2 = c^2
 * 鋭角二等辺三角形… a^2 < b^2 + c^2
 * 鈍角三角形… a^2 > b^2 + c^2
 * 
 * ---
 * 
 * 【鋭角】
 * 三等辺三角形
 * 二等辺三角形
 * 不等辺三角形
 * 
 * 【直角】
 * 不等辺三角形
 * 二等辺三角形
 * 
 * 【鈍角】
 * 不等辺三角形
 * 二等辺三角形
 */