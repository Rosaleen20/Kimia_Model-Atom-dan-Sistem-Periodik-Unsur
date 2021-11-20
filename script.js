const kunciJawaban = [2, 4, 0, 3, 2, 1, 4, 0, 3, 0];
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let seven = 0;
let eight = 0;
let nine = 0;
let ten = 0;
let jawabanBenar = 1;
let jawabanSalah = 1;
let soalDikerjakan = 1;
let nilaiTotal = 1;

const papanNilai = document.querySelector(".nilai");
const jumlahBenar = document.querySelector(".benar");
const jumlahSoalDikerjakan = document.querySelector(".jmlSoal");
const jumlahSalah = document.querySelector(".salah");

function benar(e) {
  alert("Jawaban Anda benar!");
  e.style.backgroundColor = "Green";
  papanNilai.innerHTML = nilaiTotal++ * 10;
  jumlahBenar.innerHTML = jawabanBenar++;
  jumlahSoalDikerjakan.innerHTML = soalDikerjakan++;
}
function salah(e) {
  e.style.backgroundColor = "red";
  jumlahSalah.innerHTML = jawabanSalah++;
  jumlahSoalDikerjakan.innerHTML = soalDikerjakan++;
}

const satu = document.querySelectorAll("#Soal1 p a");
satu.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e == satu[2] && one == 0) {
      benar(e);
    } else if (e != satu[2] && one == 0) {
      salah(e);    
      alert("Jawaban Anda salah!\nJawaban yang benar adalah C. Aufbau");
      satu[2].style.backgroundColor = "Blue";
    }
    one++;
  });
});

const dua = document.querySelectorAll("#Soal2 p a");
dua.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e == dua[4] && two == 0) {
      benar(e);
    } else if (e != dua[4] && two == 0) {
      salah(e);
      alert("Jawaban Anda salah!\nJawaban yang benar adalah E. Bohr");
      dua[4].style.backgroundColor = "Blue";
    }
    two++;
  });
});
const tiga = document.querySelectorAll("#Soal3 p a");

tiga.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e == tiga[0] && three == 0) {
      benar(e);
    } else if (e != tiga[0] && three == 0) {
      salah(e);
      alert("Jawaban Anda salah!\nJawaban yang benar adalah A. Membesar");
      tiga[0].style.backgroundColor = "Blue";
    }
    three++;
  });
});

const empat = document.querySelectorAll("#Soal4 p a");

empat.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e == empat[3] && four == 0) {
      benar(e);
    } else if (e != empat[3] && four == 0) {
      salah(e);
      alert("Jawaban Anda salah!\nJawaban yang benar adalah D. 6");
      empat[3].style.backgroundColor = "Blue";
    }
    four++;
  });
});

const lima = document.querySelectorAll("#Soal5 p a");
lima.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e == lima[2] && five == 0) {
      benar(e);
    } else if (e != lima[2] && five == 0) {
      salah(e);
      alert("Jawaban Anda salah!\nJawaban yang benar adalah C. 50");
      lima[2].style.backgroundColor = "Blue";
    }
    five++;
  });
});

const enam = document.querySelectorAll("#Soal6 p a");
enam.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e == enam[1] && six == 0) {
      benar(e);
    } else if (e != enam[1] && six == 0) {
      salah(e);
      alert("Jawaban Anda salah!\nJawaban yang benar adalah B. 2-8-8-1");
      enam[1].style.backgroundColor = "Blue";
    }
    six++;
  });
});

const tujuh = document.querySelectorAll("#Soal7 p a");
tujuh.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e == tujuh[4] && seven == 0) {
      benar(e);
    } else if (e != tujuh[4] && seven == 0) {
      salah(e);
      alert("Jawaban Anda salah!\nJawaban yang benar adalah E. Jumlah proton semakin banyak, namun di sisi lain jumlah kulit tidak bertambah, sehingga daya tarik inti atom semakin besar");
      tujuh[4].style.backgroundColor = "Blue";
    }
    seven++;
  });
});

const delapan = document.querySelectorAll("#Soal8 p a");
delapan.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e == delapan[0] && eight == 0) {
      benar(e);
    } else if (e != delapan[0] && eight == 0) {
      salah(e);
      alert("Jawaban Anda salah!\nJawaban yang benar adalah A. Isoton");
      delapan[0].style.backgroundColor = "Blue";
    }
    eight++;
  });
});

const sembilan = document.querySelectorAll("#Soal9 p a");
sembilan.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e == sembilan[3] && nine == 0) {
      benar(e);
    } else if (e != sembilan[3] && nine == 0) {
      salah(e);
      alert("Jawaban Anda salah!\nJawaban yang benar adalah D. 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s1");
      sembilan[3].style.backgroundColor = "Blue";
    }
    nine++;
  });
});

const sepuluh = document.querySelectorAll("#Soal10 p a");
sepuluh.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e == sepuluh[0] && ten == 0) {
      benar(e);
    } else if (e != sepuluh[0] && ten == 0) {
      salah(e);
      alert("Jawaban Anda salah!\nJawaban yang benar adalah A. Br, Ac, Ca, K");
      sepuluh[0].style.backgroundColor = "Blue";
    }
    ten++;
  });
});
