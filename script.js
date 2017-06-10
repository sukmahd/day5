// var nama;
// nama = prompt('Masukan nama: ');
//
// if(nama == ' ')
//   {
//     nama = 'rahasia';
//     console.log('hallo ' + nama);
//   }
// else
//   {
//     console.log('hallo ' + nama);
//   }
//
var soal1 = {
  soal: 'Apa Kepanjangan dari HTML ? ',
  jawaban: 'a',
  pilihan: ['a. hypertext markup language','b. HaTi Mark language',' c. Hasalam']
}

var soal2 = {
  soal: 'Apa Kepanjangan dari CSS ? ',
  jawaban: 'c',
  pilihan: ['a. CasandraStyleSheet','b. CarisaStyleSheet', 'c. CascandingStyleSheet']
}

var soal3 = {
  soal: 'Apa Kepanjangan dari JS ? ',
  jawaban: 'a',
  pilihan: ['a. JavaScript', 'b. JavaShop', 'c. JanganSalah']
}

var soal4 = {
  soal: 'siapa nama instruktur di phase-0 ? ',
  jawaban: 'b',
  pilihan: ['a. Ariel', 'b. Ryan', 'c. Mukidi']
}

var arrSoal = [soal1, soal2, soal3, soal4];
//
// function panggilSoal(nama, soal)
// {
//   var count = 0;
//   console.log('Hallo selamat datang di quiz interaktif ini :) ');
//   console.log('Silahkan jawab 4 soal berikut');
//   for(var i = 0; i < soal.length; i++)
//     {
//       var a = prompt(soal[i].soal +'\n'+ soal[i].pilihan);
//       if(a == soal[i].jawaban)
//         {
//           alert('anda benar');
//           count += 1;
//         }
//       else {
//         alert('jawaban anda salah');
//       }
//     }
//   return count;
// }
//
// console.log('anda berhasil menjawab ' + panggilSoal(nama,arrSoal) + ' soal');

var listSoal = document.getElementById('list-soal');

var soal = document.getElementsByClassName('soal');

for(var i = 0; i < soal.length; i++)
{
  var p = document.createElement('p');
  var pText = document.createTextNode(arrSoal[i].soal)
  p.appendChild(pText);
  soal[i].appendChild(p);

  for(var j = 0; j < arrSoal[i].pilihan.length; j++)
  {
    var pilihan = document.createElement('div');
    var pilihanClassAtt = document.createAttribute('class');
    pilihanClassAtt.value = 'pilihan';

    pilihan.setAttributeNode(pilihanClassAtt);

    var pilihanText = document.createTextNode(arrSoal[i].pilihan[j])
    pilihan.appendChild(pilihanText);
    soal[i].appendChild(pilihan);
  }
}
