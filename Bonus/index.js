let numbers = [
  -23, 42, 21, 90, 54, 362, -12, 57, 78, 84, 35, 546, 128, 7, 15, 65, 28,
];

for (let i = 1; i < numbers.length; i++) {
  let key = numbers[i];
  let j = i - 1;

  while (j >= 0 && numbers[j] > key) {
    numbers[j + 1] = numbers[j];
    j = j - 1;
  }
  numbers[j + 1] = key;
}

console.log(numbers);

let numberz = [
  -448, -457, 180, -217, 160, -317, -287, 349, 202, 285, -489, 302, 271, -476,
  -355, 337, -14, 88, -201, -260, -1, 469, -157, 266, 315, -403, 441, -125, 114,
  -92, -464, -472, -88, -164, 126, 408, 432, -157, 9, -347, 81, -399, -192, -33,
  -56, 93, -20, 429, -9, -327, 79, 361, 250, 8, -116, -23, 14, 487, 33, -467,
  -35, 319, -98, -411, -499, 113, -144, 366, -192, -84, 490, 72, 178, 325, 299,
  76, 103, 148, -487, 469, 411, -422, -324, -347, -210, -68, -482, 177, 13, -26,
  5, 373, 408, -426, 49, 440, -123, -399, 427, 415, 281, -35, -120, 14, 5, -213,
  141, -397, -385, -414, -127, 468, 221, -340, -71, 184, -96, 247, 263, -64,
  -48, -259, -119, -278, 31, 436, -89, -126, -174, -208, -490, -79, -248, 175,
  314, 268, 88, 36, 490, -101,
];

for (let i = 1; i < numberz.length; i++) {
  let key = numberz[i];
  let j = i - 1;

  while (j >= 0 && numberz[j] > key) {
    numberz[j + 1] = numberz[j];
    j = j - 1;
  }
  numberz[j + 1] = key;
}

console.log(numberz);
