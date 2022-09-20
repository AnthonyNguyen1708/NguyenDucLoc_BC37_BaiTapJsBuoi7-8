// var numberArr = [];

// function themSo() {

//     var numberValue = document.getElementById("number").value*1;
//     numberArr.push(numberValue)

//     document.getElementById("number").value="";
//     document.getElementById("input-data").innerText = numberArr
// }

// //bai 1
// document.getElementById("btn-tinh-tong").addEventListener("click", function() {
//     var sum = 0;
//     for (index = 0; index < numberArr.length; index++){
//         if (numberArr[index] > 0) {
//             sum += numberArr[index]*1;
//             document.getElementById("tong-so-duong").innerHTML = `<div>Tổng số dương: ${sum}</div>`
//         } else {
//             document.getElementById("tong-so-duong").innerHTML = `<div>Hãy nhập số dương</div>`
//         }
//     }
// });

// //bai 2
// document.getElementById("btn-dem-so").addEventListener("click", function() {

//     var count = 0;
//     for (index = 0; index < numberArr.length; index++){
//         if (numberArr[index] > 0) {
//             count++;
//             document.getElementById("dem-so-duong").innerHTML = `<div>Tổng số dương: ${count}</div>`
//         } else {
//             document.getElementById("dem-so-duong").innerHTML = `<div>Hãy nhập số dương</div>`
//         }
//     }
// });

// //bai 3
// document.getElementById("btn-so-nho").addEventListener("click", function() {
//     var min = numberArr[0];
//     for (var index = 0; index < numberArr.length; index++) {
//         if (numberArr[index] < min) {
//             min = numberArr[index];
//         }

//         document.getElementById("tim-so-nho").innerHTML= `<div>Số nhỏ nhất: ${min}</div>`
//     }

// });

// //bai 4
// document.getElementById("btn-bai4").addEventListener("click", function() {
//     var newArr = [];
//     var minDuong = null;

//     for (index = 0; index < numberArr.length; index++) {
//         if (numberArr[index] > 0) {
//             newArr.push(numberArr[index])
//         }
//     }

//     for (var i = 0; i <= newArr.length; i++){
//         minDuong = newArr[0];
//         if(newArr.length !== 0 ){
//             if (minDuong >= newArr[i] ){
//                 minDuong = newArr[i]
//                 document.getElementById("result-bai4").innerHTML = `Số dương nhỏ nhất: ${minDuong}`
//             }
//         } else {
//             document.getElementById("result-bai4").innerHTML = `Không có số dương`
//         }
//     }
//     document.getElementById("result-bai4").innerHTML= `<div>${ketQuaBai4}</div>`
// })

// //bai 5
// document.getElementById("btn-bai5").addEventListener("click", function() {
//     var soChanCuoiCung = 0;
//     var arrSoChan = [];
//     for (index = 0; index < numberArr.length; index++) {
//         if (numberArr[index]*1 % 2 == 0) {
//             arrSoChan.push(numberArr[index])
//         }
//     }
//     var result = "";
//     var viTriSoChan = arrSoChan.length - 1;
//     soChanCuoiCung = arrSoChan[viTriSoChan]

//     if (arrSoChan.length != 0) {
//         result = `Số chẵn cuối cùng: ${soChanCuoiCung}`
//     } else {
//         result = `Không có số chẵn`
//     }

//     document.getElementById("result-bai5").innerHTML = `<div>${result}</div>`
// })

// //bai 6
// document.getElementById("btn-bai6").addEventListener("click", function() {
//     var pos1 = document.getElementById("txt-vt1").value * 1;
//     var pos2 = document.getElementById("txt-vt2").value * 1;

//     var newIndex = numberArr[pos1];
//     numberArr[pos1] = numberArr[pos2];
//     numberArr[pos2] = newIndex;

//     document.getElementById("result-bai6").innerHTML = `Mảng sau khi đổi: ${numberArr}`
// })

// //bai 7
// document.getElementById("btn-bai7").addEventListener("click", function() {
//     var newArr = null;
//     for (i = 0; i < numberArr.length; i++) {
//         for (j = i + 1; j < numberArr.length; j++) {
//             if (numberArr[i] > numberArr[j]) {
//                 newArr = numberArr[i];
//                 numberArr[i] = numberArr[j];
//                 numberArr[j] = newArr;
//             }
//         }
//     }

//     document.getElementById("result-bai7").innerHTML = `Mảng sau khi đổi: ${numberArr}`
// })

// //bai 8
// document.getElementById("btn-bai8").addEventListener("click", function() {
//     var sntArr = [];
//     var soNguyenTo= null;
//     for (i = 0; i < numberArr.length; i++) {
//         if (numberArr[i] >= 2) {
//             sntArr.push(numberArr[i])
//         } else {
//             soNguyenTo = -1;
//         }
//     }

//     for (j = 0; j < sntArr.length; j++) {
//         if (sntArr[j] == 2) {
//             soNguyenTo = 2;
//             break
//         } else if (sntArr[j] % 2 != 0) {
//             soNguyenTo = sntArr[j];
//             break
//         } else {
//             soNguyenTo = -1
//         }
//     }
//     document.getElementById("result-bai8").innerHTML = `${soNguyenTo}`
// })

var arr = [];

document.getElementById("btn-add-numb").addEventListener("click", function () {
  var newNumb = document.getElementById("number").value * 1;

  arr.push(newNumb);
  document.getElementById("number").value = "";
  document.getElementById("input-data").innerText = arr;
});

//bai 1
document.getElementById("btn-bai1").addEventListener("click", function () {
  var sum = null;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  document.getElementById("result-bai1").innerText = sum;
});

//bai 2
document.getElementById("btn-bai2").addEventListener("click", function () {
  var count = null;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += 1;
    }
  }
  document.getElementById(
    "result-bai2"
  ).innerText = `Có ${count} số dương trong mảng`;
});

//bai 3
document.getElementById("btn-bai3").addEventListener("click", function () {
  var min = arr[0];
  for (i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length; j++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
  }
  document.getElementById("result-bai3").innerText = min;
});

//bai 4
document.getElementById("btn-bai4").addEventListener("click", function () {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  var min = newArr[0];
  for (i = 0; i < newArr.length; i++) {
    for (j = 1; j < newArr.length; j++) {
      if (min > newArr[i]) {
        min = newArr[i];
      }
    }
  }
  document.getElementById("result-bai4").innerText = min;
});
//bai 5
document.getElementById("btn-bai5").addEventListener("click", function () {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  document.getElementById("result-bai5").innerText = newArr[newArr.length - 1];
});

//bai 9
var arr2 = [];

document
  .getElementById("btn-number-bai9")
  .addEventListener("click", function () {
    var newNumb = document.getElementById("number-bai9").value * 1;

    arr2.push(newNumb);
    document.getElementById("number-bai9").value = "";
    document.getElementById("input-data-bai9").innerText = arr2;
  });
document.getElementById("btn-bai9").addEventListener("click", function () {
  var count = null;
  for (i = 0; i < arr2.length; i++) {
    if (Number.isInteger(arr2[i])) {
      count += 1;
    }
  }
  document.getElementById("result-bai9").innerText = count;
});
//bai 10
document.getElementById("btn-bai10").addEventListener("click", function () {
  var posArr = [];
  var negArr = [];
  var result = null;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posArr.push(arr[i]);
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negArr.push(arr[i]);
    }
  }
  if (posArr.length > negArr.length) {
    result = "Lượng số dương nhiều hơn lượng số âm";
  } else if (posArr.length < negArr.length) {
    result = "Lượng số âm nhiều hơn lượng số dương";
  } else {
    result = "Lượng số dương bằng lượng số âm";
  }
  document.getElementById("result-bai10").innerText = result;
});
