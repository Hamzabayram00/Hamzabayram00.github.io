document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('hesapla-btn').addEventListener('click', function (e) {
    // Sayfa yenilenmesini engelle
    e.preventDefault();
    document.getElementById('sonuclar').style.display = 'none';

    kalorileriHesapla();

    e.preventDefault();
  });
});


// Harris-Benedict Denklemi
//Erkekler için: BMH = aktiviteOranı * (66.5 + (13.75 x kilo) + (5.003 x boy) – (6.755 x yaş))
//Kadınlar için: BMH = aktiviteOranı * (655.1 + (9.563 x kilo) + (1.850 x boy) – (4.676 x yaş))
function kalorileriHesapla() {
  const yas = document.getElementById('yas');
  const cinsiyet = document.querySelector('input[name="cinsiyetRadio"]:checked');
  const kilo = document.getElementById('kilo');
  const boy = document.getElementById('boy');
  const aktivite = document.getElementById('secim-select').value;
  const toplamKaloriler = document.getElementById('toplam-kaloriler');


  const temelKaloriler = cinsiyet.id === 'erkek' ? 66.5 : 655;
  const kiloFaktoru = cinsiyet.id === 'erkek' ? 13.75 : 9.563;
  const boyFaktoru = cinsiyet.id === 'erkek' ? 5.003 : 1.850;
  const yasFaktoru = cinsiyet.id === 'erkek' ? 6.755 : 4.676;

  const aktiviteFaktorleri = {
    "1": 1.2,
    "2": 1.375,
    "3": 1.55,
    "4": 1.725,
    "5": 1.9
  };

  const kaloriler = aktiviteFaktorleri[aktivite] * (temelKaloriler + (kiloFaktoru * parseFloat(kilo.value)) + (boyFaktoru * parseFloat(boy.value)) - (yasFaktoru * parseFloat(yas.value)));

  toplamKaloriler.value = kaloriler.toFixed(2);


  document.getElementById('sonuclar').style.display = 'block';
}




