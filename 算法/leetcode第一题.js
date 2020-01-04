//从数组中找出a+b，使得其等于sum

const sum = 18;
var arr = [6, 18, 12, 7, 4, 11, 1];

function findSum(arr, sum) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    val = arr[i];
    if (String(val) in obj) {
      console.log("找到了", obj[val], i);
    }
    obj[sum - val] = i;
  }
}
findSum(arr, sum);
