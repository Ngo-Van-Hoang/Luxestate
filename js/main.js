//BAI 1 
// let even = a => {
//     if (a % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// const result = even(12)
// console.log(result);

//-------------------------------------------------------------------------------------------

//BAI 2
// let divisible = a => {
//     if (a % 3 === 0) {
//         console.log('Số' + " " + a + " " + 'chia hết cho 3');
//     } else {
//         console.log('Số' + " " + a + " " + 'không hết cho 3');
//     }
// }
// const result = divisible(10);
// console.log(result);

//-------------------------------------------------------------------------------------------

//BAI 3
// let a = 4,
//     b = 12;
// console.log('Tổng:\na + b = ', a + b);
// console.log('Chia lấy nguyên:\na / b = ', a / b);
// console.log('Chia lấy dư:\na % b = ', a % b);

//-------------------------------------------------------------------------------------------

//BAI 4
// let firstname = 'Ngô Văn';
// let lastname = 'Hoàng';
// console.log('Họ và tên:' + ' ' + firstname.concat(' ' + lastname));

//-------------------------------------------------------------------------------------------

//BAI 5
// let compare = (a, b) => {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// }
// const result = compare(2, 3);
// console.log(result);

//-------------------------------------------------------------------------------------------

//BAI 6
// let string = 'happy news year';
// console.log(string.length);
// console.log(string.indexOf('y'));
// console.log(string.lastIndexOf('y'));
// console.log(string.replace('happy', 'Chúc mừng'));

//-------------------------------------------------------------------------------------------

//BAI 7
// Viết hàm nhập vào điểm của một học sinh và in ra kết quả tương ứng nếu: 
// a. Điểm lớn hơn 8 thì in ra Excellence -
// b. Điểm từ 7 đến 8 thì in ra Good 
// c. Điểm từ 4 - 6 thì in ra Not Good 
// d. Nhỏ hơn 4 thì in ra Bad


// let scores = a => {
//     if (a > 8) {
//         console.log('Excellence');
//     } else if (a >= 7 && a <= 8) {
//         console.log('Good');
//     } else if (a >= 4 && a < 7) {
//         console.log('Not Good');
//     } else {
//         console.log('Bad');
//     }
// }
// scores(3.5);

//-------------------------------------------------------------------------------------------

//BAI 8
// let = ConvertTitle = (string) => {
//     let sentence = string.toLowerCase().split(' ');
//     for (var i = 0; i < sentence.length; i++) {
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     return sentence.join(" ");
// }

// let result = ConvertTitle('HOC lập TRình JavAScript');
// console.log(result)

//-------------------------------------------------------------------------------------------

//BAI 9
// Viết hàm định dạng số giây luôn có 2 chữ số. Ví dụ: Nếu người dùng nhập vào: 12 => 12. nếu 
// người dùng nhập vào: 5 => 05

// const formatSeconds = ('4')
// console.log('Số giây: ' + formatSeconds.padStart(2, '0') + 's');

//-------------------------------------------------------------------------------------------

//BAI 10
// let domain = (string) => {
//     let location = string.indexOf('@');
//     let extract = string.substring(location + 1);
//     return extract;
// }
// let result = domain('cfdcircle@gmail.com')
// console.log(result);

//-------------------------------------------------------------------------------------------

//BAI 11

// let convertString = ('javascript cho nguoi moi bat dau')
// console.log(convertString.replace(/ /g, '-'));

//-------------------------------------------------------------------------------------------

//BAI 12
// let sum = 0;
// for (i = 0; i < 10; i++) {
//     sum += i;
// }
// console.log(sum); 

//-------------------------------------------------------------------------------------------

//BAI 13
// for (i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// let i = 0;
// while (i <= 20) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }

//-------------------------------------------------------------------------------------------

//BAI 14
// let myArray = [
//     'Front-End',
//     'HTML',
//     'CSS',
//     'Javascript',
//     'ReactJs'
// ]
// console.log(myArray.splice(0, 3));

//-------------------------------------------------------------------------------------------

//BAI 15
// let CFD_Circle = [
//     'Front-End Newbie',
//     'Web Responsive',
//     'Front-End Master',
//     'React JS Master'
// ]
// for (i = 0; i < CFD_Circle.length; i++) {
//     console.log(i, CFD_Circle[i]);
// }
// console.log('In ra các khóa học được ngăn cách nhau bằng dấu ",": ' + '\n' + CFD_Circle.join(', '));
// console.log('Tên khóa học ở vị trí số 2: ' + CFD_Circle[2]);
// console.log(CFD_Circle.push('Angular', 'Vue'));
// console.log(CFD_Circle);

//-------------------------------------------------------------------------------------------

//BAI 16
// let sum = 0;
// let integer = array => {
//     for (i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum;
// }
// let array = [1, 2, 3, 4, 5]
// console.log(integer(array));

//-------------------------------------------------------------------------------------------

//BAI 17
// let randomNumber = (a, b) => {
//     let random = Math.random() * (b - a);
//     return Math.round(random) + a;
// }
// console.log(randomNumber(10, 100));

//-------------------------------------------------------------------------------------------

//BAI 18

// let delay4s = () => {
//     alert('Mất 4s cuộc đời');
// }
// setTimeout(delay4s, 4000);

//-------------------------------------------------------------------------------------------

let CFD = [
    Newbie = {
        name: 'FE Newbie',
        price: 5000,
        date: '29 / 09 / 2022'
    },
    WebResponsive = {
        name: 'Web Responsive',
        price: 5000,
        date: '29 / 09 / 2022'
    },
    Master = {
        name: 'Front-End Master',
        price: 5000,
        date: '29 / 09 / 2022'
    },
    ReactJS = {
        name: 'ReactJS Master',
        price: 5000,
        date: '29 / 09 / 2022'
    }
]
console.log(CFD);
































//BAI 1
// function even(a) {
//     if (a % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// const kq = even(2)
// console.log(kq);

//BAI 2
// function divisible(a) {
//     if (a % 3 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// const kq = divisible(9);
// console.log(kq);

//BAI 3
// a = 4;
// b = 12;
// console.log('a + b =', a + b);
// console.log('a % b =', a % b);
// console.log('a / b =', a / b);

//BAI 4
// const firstname = 'Ngo';
// const name = 'Hoang';
// console.log(firstname + " " + name);

//BAI 5
// function compare(a, b) {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// }
// const kq = compare(2, 3)
// console.log(kq);

//BAI 6
// const string = 'happy news year'
// console.log(string.length);
// console.log(string.indexOf('y'));
// console.log(string.lastIndexOf('y'));
// console.log(string.replace('happy', 'sad'))

//BAI 7
// function input(a) {
//     if (a > 8) {
//         return 1
//     } else if (a >= 7 && a <= 8) {
//         return 2
//     } else if (a >= 4 && a < 7) {
//         return 3
//     } else {
//         return 4
//     }
// }
// const kq = input(6)
// console.log(kq);

//BAI 8
// const String = 'HỌC lập TRình JavAScript';
// const ConvertLowercase = String.toLowerCase();
// const kq1 = ConvertLowercase.charAt(0).toUpperCase() + ConvertLowercase.substr(1, 3);
// const kq2 = ConvertLowercase.charAt(4).toUpperCase() + ConvertLowercase.substr(5, 3);
// const kq3 = ConvertLowercase.charAt(8).toUpperCase() + ConvertLowercase.substr(9, 5);
// const kq4 = ConvertLowercase.charAt(14).toUpperCase() + ConvertLowercase.substr(15);
// const kqreal = kq1.concat(kq2, kq3, kq4)
// console.log(kqreal);