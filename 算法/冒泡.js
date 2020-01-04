//依次对比，比右边大则交换位置
//已经冒泡过的不用再排序
//复杂度O(n^2)
var arr = [3, 9, 6, 7, 44, 21, 1, 5, 8];
function bubbleSort(arr) {
  for (var j = 0; j < arr.length; j++)
    for (var i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
}

bubbleSort(arr);
console.log(arr);

//快速排序
//随便找个人，遍历一次，比他高的站左边，矮的站右边
//复杂度O(n*lg n)
//空间占用太多
var arr2 = [3, 7, 5, 9, 0, 2, 1, 33, 22];
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var flag = arr[0];
  var left = [];
  var right = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < flag) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), flag, ...quickSort(right)];
}
var arr3 = quickSort(arr2);
console.log(arr3);


//原地快排