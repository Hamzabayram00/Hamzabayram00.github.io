document.addEventListener('DOMContentLoaded', async function () {
    const yemek = new Yemekler();
    const yemekData=yemek.getYemekData();

    const kategoriListesi = document.getElementById('kategori-listesi');
    const yemekListesi = document.getElementById('yemek-listesi');
    const tarifEkraniArkasi = document.getElementById('tarifEkraniArkasi');
    const tarif = document.getElementById('tarif');

    
    function urunGoster(kategori) {
        yemekListesi.innerHTML = "";
        const seciliKategori = yemekData[kategori];
         // Bir kategori bulunuyor mu ve en az bir yemek var mı kontorlü yapılır
        if (seciliKategori && seciliKategori.length > 0) {
            seciliKategori.forEach(yemek => {
                const yemekElement = document.createElement('div');
                yemekElement.classList.add('yemek');
                yemekElement.innerHTML = `
                <img src="images/${yemek.resim}" alt="${yemek.ad}" style="max-width: 100%; max-height: 300px; cursor: pointer;">
                <p style="text-align: center;">${yemek.ad}</p>
            `;
                yemekListesi.appendChild(yemekElement);

                yemekElement.addEventListener('click', function () {
                    tarif.innerHTML = `
                    <h2>${yemek.ad}</h2>
                    <p><strong>Malzemeler:</strong> ${yemek.malzemeler.join(', ')}</p>
                    <p class="tarif"><strong>Tarif:</strong> ${yemek.tarif}</p>
                `;
                tarifEkraniArkasi.style.display = 'flex';
                });
            });
        } else {
            console.error(`Kategori bulunamadı: ${kategori}`);
        }
    }

    // kategorilere tıklama olaylarının kontrolu
    kategoriListesi.addEventListener('click', function (event) {
        const clickedElement = event.target;
        let kategori = clickedElement.id.toLowerCase();

        if (kategori === 'corbalar' || kategori === 'ana-yemek' || kategori === 'tatlilar' || kategori === 'icecekler') {
            urunGoster(kategori);
        }

        if (kategori === 'kalorihesabi') {
            window.location.href = 'kalori.html';
        }
        if (kategori === 'günlükkalorihesabi') {
            window.location.href = 'calculatorbmi.html';
        }
        

    });

    // tariflere tıklama olaylarının kontrolu
    tarifEkraniArkasi.addEventListener('click', function () {
        tarifEkraniArkasi.style.display = 'none';
    });

    tarifEkraniArkasi.addEventListener('click', function (event) {
        event.stopPropagation();
    });


});
