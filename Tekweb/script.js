document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan elemen-elemen yang diperlukan dari DOM
    const operationSelect = document.getElementById("operation");
    const inputFields = document.getElementById("input-fields");
    const calculateButton = document.getElementById("calculate-button");
    const resultDiv = document.getElementById("result");

    // Menambahkan event listener ke tombol Hitung
    calculateButton.addEventListener("click", function () {
        // Mendapatkan nilai operasi yang dipilih
        const selectedOperation = operationSelect.value;

        // Mengambil nilai-nilai input
        const inputValues = {};

        // Mendapatkan semua input dalam div input-fields
        const inputElements = inputFields.querySelectorAll("input");
        inputElements.forEach(function (input) {
            inputValues[input.name] = parseFloat(input.value);
        });

        // Memanggil fungsi kalkulasi sesuai dengan operasi yang dipilih
        let result = 0;
        switch (selectedOperation) {
            case "fibonacci":
                result = calculateFibonacci(inputValues.n);
                break;
            case "kubus":
                result = calculateKubus(inputValues.sisi);
                break;
            case "balok":
                result = calculateBalok(inputValues.panjang, inputValues.lebar, inputValues.tinggi);
                break;
            case "tabung":
                result = calculateTabung(inputValues.jariJari, inputValues.tinggi);
                break;
            case "kerucut":
                result = calculateKerucut(inputValues.jariJari, inputValues.tinggi);
                break;
            case "limas_tiga":
                result = calculateLimasSegiTiga(inputValues.alas, inputValues.tinggi);
                break;
            case "limas_empat":
                result = calculateLimasSegiEmpat(inputValues.panjang, inputValues.lebar, inputValues.tinggi);
                break;
            case "bola":
                result = calculateBola(inputValues.jariJari);
                break;
            case "prisma":
                result = calculatePrisma(inputValues.alas, inputValues.tinggi);
                break;
            default:
                result = "Operasi tidak valid";
        }

        // Menampilkan hasil perhitungan
        resultDiv.textContent = `Hasil: ${result}`;
    });

    // Menambahkan event listener untuk mengubah input-fields berdasarkan pilihan operasi
    operationSelect.addEventListener("change", function () {
        const selectedOperation = operationSelect.value;

        // Menghapus input yang ada sebelumnya
        inputFields.innerHTML = "";

        // Menambahkan input yang sesuai dengan operasi yang dipilih
        switch (selectedOperation) {
            case "fibonacci":
                inputFields.innerHTML = `<label for="n">Masukkan nilai n:</label><input type="number" name="n" id="n" min="0" required>`;
                break;
            case "kubus":
                inputFields.innerHTML = `<label for="sisi">Masukkan panjang sisi:</label><input type="number" name="sisi" id="sisi" min="0" required>`;
                break;
            case "balok":
                inputFields.innerHTML = `
                    <label for="panjang">Panjang:</label><input type="number" name="panjang" id="panjang" min="0" required>
                    <label for="lebar">Lebar:</label><input type="number" name="lebar" id="lebar" min="0" required>
                    <label for="tinggi">Tinggi:</label><input type="number" name="tinggi" id="tinggi" min="0" required>
                `;
                break;
            case "tabung":
                inputFields.innerHTML = `
                    <label for="jariJari">Jari-jari:</label><input type="number" name="jariJari" id="jariJari" min="0" required>
                    <label for="tinggi">Tinggi:</label><input type="number" name="tinggi" id="tinggi" min="0" required>
                `;
                break;
            case "kerucut":
                inputFields.innerHTML = `
                    <label for="jariJari">Jari-jari:</label><input type="number" name="jariJari" id="jariJari" min="0" required>
                    <label for="tinggi">Tinggi:</label><input type="number" name="tinggi" id="tinggi" min="0" required>
                `;
                break;
            case "limas_tiga":
                inputFields.innerHTML = `
                    <label for="alas">Alas:</label><input type="number" name="alas" id="alas" min="0" required>
                    <label for="tinggi">Tinggi:</label><input type="number" name="tinggi" id="tinggi" min="0" required>
                `;
                break;
            case "limas_empat":
                inputFields.innerHTML = `
                    <label for="panjang">Panjang:</label><input type="number" name="panjang" id="panjang" min="0" required>
                    <label for="lebar">Lebar:</label><input type="number" name="lebar" id="lebar" min="0" required>
                    <label for="tinggi">Tinggi:</label><input type="number" name="tinggi" id="tinggi" min="0" required>
                `;
                break;
            case "bola":
                inputFields.innerHTML = `<label for="jariJari">Masukkan jari-jari bola:</label><input type="number" name="jariJari" id="jariJari" min="0" required>`;
                break;
            case "prisma":
                inputFields.innerHTML = `
                    <label for="alas">Alas:</label><input type="number" name="alas" id="alas" min="0" required>
                    <label for="tinggi">Tinggi:</label><input type="number" name="tinggi" id="tinggi" min="0" required>
                `;
                break;
            default:
                break;
        }
    });
});

// Fungsi-fungsi perhitungan untuk masing-masing operasi
function calculateFibonacci(n) {
    // Inisialisasi deret Fibonacci awal
    const fibonacciSequence = [0, 1];

    // Jika n adalah 0, kembalikan hanya 0
    if (n === 0) {
        return [];
    }

    // Jika n adalah 1, kembalikan deret Fibonacci hingga 1
    if (n === 1) {
        return [0];
    }

    // Iterasi untuk menghitung deret Fibonacci hingga n
    while (fibonacciSequence.length < n) {
        const nextFibonacciNumber = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
        fibonacciSequence.push(nextFibonacciNumber);
    }

    return fibonacciSequence;
}



function calculateKubus(sisi) {
    // Implementasi perhitungan volume kubus
    return sisi * sisi * sisi;
}

function calculateBalok(panjang, lebar, tinggi) {
    // Implementasi perhitungan volume balok
    return panjang * lebar * tinggi;
}

function calculateTabung(jariJari, tinggi) {
    // Implementasi perhitungan volume tabung
    return Math.PI * jariJari * jariJari * tinggi;
}

function calculateKerucut(jariJari, tinggi) {
    // Implementasi perhitungan volume kerucut
    return (1 / 3) * Math.PI * jariJari * jariJari * tinggi;
}

function calculateLimasSegiTiga(alas, tinggi) {
    // Implementasi perhitungan volume limas segi tiga
    return (1 / 3) * (alas * tinggi);
}

function calculateLimasSegiEmpat(panjang, lebar, tinggi) {
    // Implementasi perhitungan volume limas segi empat
    return (1 / 3) * (panjang * lebar * tinggi);
}

function calculateBola(jariJari) {
    // Implementasi perhitungan volume bola
    return (4 / 3) * Math.PI * jariJari * jariJari * jariJari;
}

function calculatePrisma(alas, tinggi) {
    // Implementasi perhitungan volume prisma
    return alas * tinggi;
}
