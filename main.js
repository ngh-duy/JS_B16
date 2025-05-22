window.addEventListener("DOMContentLoaded",
    view
);
let lesson = [
    "Tổng các số dương trong mảng.",
    "Đếm có bao nhiêu số dương trong mảng.",
    "Tìm số nhỏ nhất trong mảng.",
    "Tìm số dương nhỏ nhất trong mảng.",
    "Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.",
    "Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).",
    "Sắp xếp mảng theo thứ tự tăng dần.",
    "Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.",
    "Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?",
    "So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn."
]
let array = [];
let realArray = [];
function saveArray(e) {
    e.preventDefault();
    const number = document.getElementById("array-number").value;
    array = number.split(",").map(val => parseInt(val));


}
function saveRealArray(e) {
    e.preventDefault();
    const realNumber = document.getElementById("realArray-number").value;
    realArray = realNumber.split(",").map(val => parseFloat(val));
}
function view() {
    const select = document.getElementById("select-lesson");
    for (let index = 0; index < lesson.length; index++) {
        select.innerHTML += `<option value="${index + 1}" id="option${index}">Câu ${index + 1}: ${lesson[index]}</option>`;
    }
}
let countNumerPositive = 0;
function sumPositiveNumber(arr) {
    let tong = 0;
    for (let number of arr) {
        if (number > 0) {
            countNumerPositive++;
            tong += number;
        }
    }
    return tong;
}
function minArray(arr) {
    ascendingNumber(arr);
    return arr[0];
}
function minArrayNumberPositive(arr) {
    ascendingNumber(arr);
    for (let number of arr) {
        if (number > 0)
            return number;
    }
    return -1;
}
function evenNumber(arr) {
    for (let index = arr.length - 1; index >= 0; index--) {
        if (arr[index] % 2 === 0) {
            return array[index];
        }
    }
    return -1;
}
function closeModal(id) {
    document.getElementById("modal").classList.add("hidden");
}
function swapTwoNumber(indexA, indexB) {
    const c = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = c;
}
function submitSwap(e) {
    e.preventDefault();
    const idNumber1 = document.getElementById("number1").value;
    const idNumber2 = document.getElementById("number2").value;
    swapTwoNumber(idNumber1, idNumber2);
    document.getElementById("resuilt").innerHTML = `Mảng sau khi hoán đổi vị trí là: ${array} `
    document.getElementById("modal").classList.add("hidden");
}
function ascendingNumber(arr) {
    arr.sort((a, b) => a - b);
}
function primeNumber(arr) {
    for (let number of arr) {
        let dem = 0;
        if (number < 2)
            continue;
        for (let i = 1; i < number; i++) {
            if (number % i == 0) {
                dem++;
            }
        }
        if (dem == 1)
            return number;

    }
    return -1;
}
function seachInteger(realArr) {
    let countInteger = 0;
    for (const rNumber of realArr) {
        if (Number.isInteger(rNumber * 1)) {
            countInteger++;
        }
    }
    return countInteger;
}
function compareNumberPosNegArray(arr) {
    let numberPositive = 0;
    let numberNegative = 0;
    for (const number of arr) {
        if (number < 0) {
            numberNegative++;
        } else if (number > 0) {
            numberPositive++;
        }
    }
    if (numberNegative > numberPositive) {
        document.getElementById("resuilt").innerHTML = `Số lượng số âm ${numberNegative} lớn hơn số lượng số dương ${numberPositive} trong mảng : ${arr} `
    } else if (numberNegative < numberPositive) {
        document.getElementById("resuilt").innerHTML = `Số lượng số âm ${numberNegative} nhỏ hơn số lượng số dương ${numberPositive} trong mảng : ${arr} `
    } else {
        document.getElementById("resuilt").innerHTML = `Số lượng số âm ${numberNegative} bằng với số lượng số dương ${numberPositive} trong mảng : ${arr} `
    }
}
function KQ(e) {
    e.preventDefault();
    const optionLession = document.getElementById("select-lesson").value * 1;
    if (optionLession === 9) {
        document.getElementById("form2").classList.remove("hidden");
    } else if (optionLession !== 9 && array.length === 0) {
        document.getElementById("form2").classList.add("hidden");
        alert("Bạn phải nhập mảng trước khi chọn câu thực hiện");
        return;
    }
    switch (optionLession) {
        case 1:
            const sumPositive = sumPositiveNumber(array);
            document.getElementById("resuilt").innerHTML = `Tổng các số dương là: ${sumPositive} `
            break;
        case 2:
            sumPositiveNumber(array);
            document.getElementById("resuilt").innerHTML = `Tổng số dương có trong mảng là : ${countNumerPositive} `
            break;
        case 3:
            const minNumer = minArray(array);
            document.getElementById("resuilt").innerHTML = `Số nhỏ nhất trong mảng là: ${minNumer} `
            break;
        case 4:
            const minNumerPositive = minArrayNumberPositive(array);
            if (minNumerPositive === -1)
                document.getElementById("resuilt").innerHTML = `Không có số dương nhỏ nhất trong mảng !!!`;

            else
                document.getElementById("resuilt").innerHTML = `Số dương nhỏ nhất trong mảng là : ${minNumerPositive} `
            break;
        case 5:
            const numberEven = evenNumber(array);
            if (numberEven === -1)
                document.getElementById("resuilt").innerHTML = `Không có số chẵn nào trong mảng !!!`;

            else
                document.getElementById("resuilt").innerHTML = `Số chẵn cuối cùng trong mảng là : ${numberEven} `
            break;
        case 6:
            document.getElementById("modal").classList.remove("hidden");
            break;
        case 7:
            ascendingNumber(array);
            document.getElementById("resuilt").innerHTML = `Mảng sau khi sắp xếp tăng dần là : ${array} `
            break;
        case 8:
            console.log(primeNumber(array));

            if (primeNumber(array) === -1)
                document.getElementById("resuilt").innerHTML = `Mảng : ${array} => Không có số nguyên tố.`
            else
                document.getElementById("resuilt").innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${primeNumber(array)} `
            break;
        case 9:
            if (realArray.length !== 0) {
                document.getElementById("resuilt").innerHTML = `Số lượng số nguyên trong mảng số thực vừa nhập là: ${seachInteger(realArray)} `
            }

            break;
        case 10:
            compareNumberPosNegArray(array);
            // compareNumberPosNegArray(realArray);
            break;
        default:
            break;
    }
}