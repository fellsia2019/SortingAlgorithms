const arr = [
  24, 123125, 2, 5, 111, 52, 0, 2, 1, 123125, 2, 1, 4, 12, 4, 111, 5, 10, 2, 3,
  123125, 2, 5, 5, 5, 5, 2, 2, 123125, 2, 123125, 123125, 123125, 2, 0, 0, 10,
  10, 10, 10, 12, 123125, 2, 0, 5, 123, 62, 25, 23, 623, 2, 2, 212, 1, 61, 2,
  113,
];
console.log("arr.length перед сортировкй:", arr.length);

// ----------------Первый способ реализации этого алгоритма по Wiki-----------------
// Самый примитивный способ решение алгоритма QuickSort
// много хранения в памяти
// в Wiki указано следующее по поводу данной реализации:
// "На практике она не используется, а служит лишь в образовательных целях, так как использует дополнительную память, чего можно избежать."
function quickSort_simple(arr) {
  if (!arr || arr.length < 2) return arr;
  const pivotIndex = Math.floor(Math.random() * arr.length);

  let less = [];
  let great = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] > arr[pivotIndex]) {
      great.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return [
    ...quickSort_simple(less),
    arr[pivotIndex],
    ...quickSort_simple(great),
  ];
}
// const sortedArr = quickSort_simple(arr);
// console.log(sortedArr, sortedArr.length);
// ---------------- END

// ----------------Второй способ реализации этого алгоритма по Wiki-----------------
// Данный способ должен быть мутабельным
// У данного способа реализации этого алгоритма есть два варианта разбиения массива и выбора опорного эл-та

// 1. С разбиением Ломуто
function quickSort_partitionLomyto(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // для экономии памяти можно не сохранять pivot
    // но для полной ясности я оставлю так
    const pivot = arr[high];
    let wallIndex = low;

    for (let i = low; i < high; i++) {
      if (arr[i] <= pivot) {
        const swap = arr[i];
        arr[i] = arr[wallIndex];
        arr[wallIndex] = swap;
        wallIndex += 1;
      }
    }

    const swap = arr[high];
    arr[high] = arr[wallIndex];
    arr[wallIndex] = swap;

    quickSort_partitionLomyto(arr, low, wallIndex - 1);
    quickSort_partitionLomyto(arr, wallIndex + 1, high);
  }
}

// quickSort_partitionLomyto(arr);
// console.log("arr:", arr);
// ---------------- END С разбиением Ломуто

// 2. С разбиением Хаора
function partitionHaora(arr, low, high) {
  const pivot = arr[Math.floor((low + high) / 2)];

  let i = low;
  let j = high;
  while (i <= j) {
    while (arr[j] > pivot) {
      j--;
    }
    while (arr[i] < pivot) {
      i++;
    }
    // ищем эл-т который больше pivot и находится перед ним
    // ищем эл-т который меньше pivot и находится после него

    if (i <= j) {
      const swap = arr[i];
      arr[i] = arr[j];
      arr[j] = swap;
      j--;
      i++;
    }
  }
  return i;
}
function quickSort_partitionHaora(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const p = partitionHaora(arr, low, high);
    quickSort_partitionHaora(arr, low, p - 1);
    quickSort_partitionHaora(arr, p, high);
  }
}

// quickSort_partitionHaora(arr);
// console.log("arr:", arr);
// ---------------- END С разбиением Хаора
