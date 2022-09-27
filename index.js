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
      document.getElementById("result-bai1").innerText = sum;
    } else {
      document.getElementById("result-bai1").innerText =
        "không có số dương trong mảng được nhập";
    }
  }
});

//bai 2
document.getElementById("btn-bai2").addEventListener("click", function () {
  var count = null;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += 1;
    }
  }
  if (count > 0) {
    document.getElementById(
      "result-bai2"
    ).innerText = `Có ${count} số dương trong mảng`;
  } else {
    document.getElementById("result-bai2").innerText =
      "không có số dương trong mảng được nhập";
  }
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
  if (newArr.length != 0) {
    var min = newArr[0];
    for (i = 0; i < newArr.length; i++) {
      for (j = 1; j < newArr.length; j++) {
        if (min > newArr[i]) {
          min = newArr[i];
        }
      }
    }
    document.getElementById("result-bai4").innerText = min;
  } else {
    document.getElementById("result-bai4").innerText =
      "không có số dương trong mảng được nhập";
  }
});
//bai 5
document.getElementById("btn-bai5").addEventListener("click", function () {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  if (newArr.length != 0) {
    document.getElementById("result-bai5").innerText =
      newArr[newArr.length - 1];
  } else {
    document.getElementById("result-bai5").innerText =
      "không có số chẵn trong mảng được nhập";
  }
});

//bai 6
document.getElementById("btn-bai6").addEventListener("click", function () {
  var pos1 = document.getElementById("txt-vt1").value * 1;
  var pos2 = document.getElementById("txt-vt2").value * 1;

  var newIndex = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = newIndex;

  document.getElementById("result-bai6").innerHTML = `Mảng sau khi đổi: ${arr}`;
});

//bai 7
document.getElementById("btn-bai7").addEventListener("click", function () {
  for (j = arr.length - 1; j >= 0; j--) {
    for (i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        var index = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = index;
      }
    }
  }
  document.getElementById("result-bai7").innerHTML = `Mảng sau khi đổi: ${arr}`;
});

//bai 8

document.getElementById("btn-bai8").addEventListener("click", function () {
  var arr2 = [];
  var soNguyenTo = null;
  for (j = 0; j < arr.length; j++) {
    if (arr[j] >= 2) {
      arr2.push(arr[j]);
    }
  }
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] == 2 || arr2[i] == 3 || arr2[i == 5]) {
      soNguyenTo = arr2[i];
      break;
    } else if (arr2[i] % 2 != 0 && arr2[i] % 3 != 0 && arr2[i] % 5 != 0) {
      soNguyenTo = arr2[i];
      break;
    } else {
      soNguyenTo = -1;
    }
  }
  document.getElementById("result-bai8").innerHTML = soNguyenTo;
  console.log(arr2);
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
