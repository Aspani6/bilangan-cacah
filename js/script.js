// Fungsi untuk mengubah angka menjadi kata-kata lengkap
function numberToWords(num) {
  const angka = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
  ];
  const belasan = [
    "sepuluh",
    "sebelas",
    "dua belas",
    "tiga belas",
    "empat belas",
    "lima belas",
    "enam belas",
    "tujuh belas",
    "delapan belas",
    "sembilan belas",
  ];
  let result = "";

  if (num == 0) {
    return "nol";
  }

  // Ratusan ribu
  if (num >= 100000) {
    if (num == 100000) {
      result += "seratus ribu ";
      return result.trim(); // Selesai, tidak perlu melanjutkan
    } 
    else if (num >= 100000 && num < 200000) {
      result += "seratus ";
    }
    else {
      result += angka[Math.floor(num / 100000)] + " ratus ";
    }
    num %= 100000;
  }

  // Puluhan Ribu
  if (num >= 10000) {
    if (num == 10000) {
      result += "sepuluh ribu ";
      return result.trim(); // Selesai, tidak perlu melanjutkan
    } else if (num >= 10000 && num < 20000) {
      result += belasan[Math.floor((num % 10000) / 1000)] + " ribu ";
      num %= 1000;
    } else {
      result += angka[Math.floor(num / 10000)] + " puluh ";
      num %= 10000;
    }
  }

  // Ribuan
  if (num >= 1000) {
    if (num >= 1000 && num < 2000) {
      result += "seribu ";
    } else {
      result += angka[Math.floor(num / 1000)] + " ribu ";
    }
    num %= 1000;
  }

  // Ratusan
  if (num >= 100) {
    if (num >= 200) result += angka[Math.floor(num / 100)] + " ratus ";
    else result += "seratus ";
    num %= 100;
  }

  // Puluhan dan belasan
  if (num >= 10) {
    if (num >= 10 && num < 20) {
      result += belasan[num - 10] + " ";
      num = 0; // selesai karena sudah belasan
    } else {
      result += angka[Math.floor(num / 10)] + " puluh ";
      num %= 10;
    }
  }

  // Satuan
  if (num > 0) {
    result += angka[num] + " ";
  }

  return result.trim(); // Menghapus spasi berlebih di akhir
}

function splitNumber() {
  const number = document.getElementById("numberInput").value;

  // Mengecek jika angka memiliki maksimal 6 digit
  if (number.length <= 6) {
    const ratusanRibu = Math.floor((number % 1000000) / 100000);
    const puluhanRibu = Math.floor((number % 100000) / 10000);
    const ribuan = Math.floor((number % 10000) / 1000);
    const ratusan = Math.floor((number % 1000) / 100);
    const puluhan = Math.floor((number % 100) / 10);
    const satuan = number % 10;

    // Menampilkan hasil dalam bentuk angka
    document.getElementById("ratusanRibu").textContent = ratusanRibu;
    document.getElementById("puluhanRibu").textContent = puluhanRibu;
    document.getElementById("ribuan").textContent = ribuan;
    document.getElementById("ratusan").textContent = ratusan;
    document.getElementById("puluhan").textContent = puluhan;
    document.getElementById("satuan").textContent = satuan;

    // Mengonversi angka menjadi kalimat teks lengkap
    const resultText = numberToWords(parseInt(number));
    document.getElementById("resultText").textContent = resultText;
  } else {
    alert("Masukkan bilangan hingga 6 digit saja.");
  }
}
