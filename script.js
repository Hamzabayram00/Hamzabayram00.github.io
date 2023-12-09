document.addEventListener('DOMContentLoaded', async function () {
    // JSON verilerini elle tanımla
    const yemekData = {
        "corbalar": [
            {
                "ad": "Mercimek Çorbası",
                "malzemeler": ["mercimek", "soğan", "havuç"],
                "tarif": "Soğanı doğrayın, havuçları rendeleyin. Tencerede soğanı kavurun, ardından mercimek ve havuçları ekleyin. Sıcak su ekleyerek pişirin.",
                "resim": "mercimekcorba.jpg"
            },
            {
                "ad": "Domates Çorbası",
                "malzemeler": ["domates", "soğan", "tuz"],
                "tarif": "Soğanı doğrayın, domatesleri rendeleyin. Tencerede soğanı kavurun, ardından rendelenmiş domatesleri ekleyin. Tuz ekleyerek pişirin.",
                "resim": "domatescorba.jpg"
            },
            {
                "ad": "Kelle Paça Çorbası",
                "malzemeler": ["kelle paça", "soğan", "tuz", "baharatlar"],
                "tarif": "Kelle paça, soğan ve baharatları kullanarak lezzetli bir çorba yapın. Yavaşça pişirin ve sıcak servis yapın.",
                "resim": "kellepaca.jpg"
            },
            {
                "ad": "Ezogelin Çorbası",
                "malzemeler": ["kırmızı mercimek", "bulgur", "soğan", "biber salçası"],
                "tarif": "Mercimeği yıkayın, soğanı doğrayın. Tencerede soğanı kavurun, ardından mercimeği ve diğer malzemeleri ekleyin. Pişirirken karıştırın.",
                "resim": "ezogelin.jpg"
            },
            {
                "ad": "Tavuk Suyu Çorbası",
                "malzemeler": ["tavuk suyu", "sebze", "tuz", "nane"],
                "tarif": "Tavuk suyu ve sebzeleri kullanarak besleyici bir çorba hazırlayın. Tuz ve nane ile tatlandırın. Sıcak servis yapın.",
                "resim": "tavuksuyu.jpg"
            },
            {
                "ad": "Mantar Çorbası",
                "malzemeler": ["mantar", "soğan", "krema", "tuz"],
                "tarif": "Mantarları doğrayın, soğanı kavurun. Mantarları ekleyin ve yumuşayana kadar pişirin. Ardından kremayı ekleyin, tuz ekleyerek karıştırın.",
                "resim": "mantarcorba.jpg"
            },
            {
                "ad": "Brokolili Cheddar Çorbası",
                "malzemeler": ["brokoli", "soğan", "cheddar peyniri", "un"],
                "tarif": "Brokolileri doğrayın, soğanı kavurun. Un ekleyip kavurun, ardından brokolileri ekleyin. Sıcak su ilave edin ve karıştırın. Cheddar peyniri ekleyerek eritin.",
                "resim": "brokolicorba.jpg"
            },
            {
                "ad": "Fasulye Çorbası",
                "malzemeler": ["kuru fasulye", "soğan", "sarımsak", "domates"],
                "tarif": "Fasulyeleri haşlayın. Soğanı kavurun, sarımsakları ekleyin. Haşlanmış fasulyeleri ve doğranmış domatesi ekleyin. Tuz ekleyerek pişirin.",
                "resim": "fasulyecorba.jpg"
            },
            {
                "ad": "Kabak Çorbası",
                "malzemeler": ["kabak", "soğan", "süt", "tuz"],
                "tarif": "Kabakları doğrayın, soğanı kavurun. Kabakları ekleyin ve yumuşayana kadar pişirin. Sıcak su ve süt ilave edin. Tuz ekleyerek karıştırın.",
                "resim": "kabakcorba.jpg"
            },
            {
                "ad": "Mercimekli Yoğurt Çorbası",
                "malzemeler": ["mercimek", "yoğurt", "tuz", "nane"],
                "tarif": "Mercimeği haşlayın. Yoğurdu ekleyin ve karıştırın. Tuz ekleyerek karıştırın. Nane ile süsleyerek servis yapın.",
                "resim": "mercimekyogurt.jpg"
            }

        ],
        "ana-yemek": [
            {
                "ad": "Fırın Tavuk",
                "malzemeler": ["tavuk", "baharat", "zeytinyağı"],
                "tarif": "Fırını 200 dereceye ısıtın. Tavuğu baharatlarla harmanlayın ve zeytinyağı ekleyerek fırın tepsisine yerleştirin. 45 dakika pişirin.",
                "resim": "fırındatavuk.jpg"
            },
            {
                "ad": "Et Sote",
                "malzemeler": ["et", "soğan", "domates", "biber"],
                "tarif": "Eti kuşbaşı doğrayın, soğanı ve biberi ince ince doğrayın. Tencerede soğanı kavurun, ardından eti ekleyin. Etler suyunu çekince domates ve biberi ekleyin. 15-20 dakika pişirin.",
                "resim": "etsote.jpg"
            },
            {
                "ad": "Karnabahar Graten",
                "malzemeler": ["Karnabahar", "beşamel sos", "rendelenmiş kaşar peyniri"],
                "tarif": "Karnabaharı haşlayın. Beşamel sos hazırlayın. Haşlanmış karnabaharı fırın kabına yerleştirin, üzerine beşamel sosu ve rendelenmiş kaşar peynirini ekleyin. Fırında kızarana kadar pişirin.",
                "resim": "karnabahargraten.jpg"
            },
            {
                "ad": "Güveçte Tavuk",
                "malzemeler": ["Tavuk but", "patates", "havuç", "soğan", "domates", "baharatlar"],
                "tarif": "Tavuk butlarını baharatlarla marine edin. Sebzeleri doğrayın. Güvece tavukları, sebzeleri ve domatesi ekleyin. Fırında pişirin.",
                "resim": "guvectetavuk.jpg"
            },
            {
                "ad": "Mantar Risotto",
                "malzemeler": ["Mantar", "arborio pirinci", "soğan", "beyaz şarap", "tavuk suyu", "parmesan peyniri"],
                "tarif": "Mantarları doğrayın, soğanı kavurun. Pirinci ekleyip kavurun. Şarabı ekleyin, sonra azar azar tavuk suyu ekleyerek karıştırın. En son parmesan peynirini ekleyin.",
                "resim": "mantarrisotto.jpg"
            },
            {
                "ad": "Fırın Makarna",
                "malzemeler": ["Makarna", "rendelenmiş kaşar peyniri", "beşamel sos", "domates sos"],
                "tarif": "Makarnayı haşlayın. Fırın kabına yerleştirin, üzerine beşamel sos ve domates sosu ekleyin. Rendelenmiş kaşar peyniri serpin. Fırında kızarana kadar pişirin.",
                "resim": "firinmakarna.jpg"
            },
            {
                "ad": "Köfte Izgara",
                "malzemeler": ["Kıyma", "soğan", "baharatlar", "yoğurt", "tahin", "nar ekşisi"],
                "tarif": "Kıymayı yoğurun, baharatlar ekleyin. Köfte şekli verip ızgarada pişirin. Yoğurt, tahin ve nar ekşisi karışımı ile servis yapın.",
                "resim": "koftelizgara.jpg"
            },
            {
                "ad": "Hünkar Beğendi",
                "malzemeler": ["Kuzu eti", "patlıcan", "un", "süt", "tuz", "kaşar peyniri"],
                "tarif": "Kuzu etini pişirin. Patlıcanları közleyin ve püre haline getirin. Unu kavurun, süt ekleyip karıştırın. Patlıcan püresini ekleyin. Üzerine kaşar peyniri serpin.",
                "resim": "hunkarbegendi.jpg"
            },
            {
                "ad": "Kuzu Tandır",
                "malzemeler": ["Kuzu eti", "sarımsak", "soğan", "baharatlar", "zeytinyağı"],
                "tarif": "Kuzu etini sarımsak, soğan ve baharatlarla marine edin. Fırın tepsisine yerleştirin, üzerine zeytinyağı gezdirin. Yavaşça pişirin.",
                "resim": "kuzutandir.jpg"
            },
            {
                "ad": "Fırın Sebzeli Somon",
                "malzemeler": ["Somon fileto", "zeytinyağı", "limon", "taze baharatlar", "sebzeler"],
                "tarif": "Somonu zeytinyağı, limon ve taze baharatlarla marine edin. Fırın tepsisine yerleştirin, etrafına sebzeleri ekleyin. Fırında pişirin.",
                "resim": "firinsebzelisomon.jpg"
            }

        ]
    };

    const kategoriListesi = document.getElementById('kategori-listesi');
    const yemekListesi = document.getElementById('yemek-listesi');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    function gosterKategori(kategori) {
        yemekListesi.innerHTML = "";
        const seciliKategori = yemekData[kategori];

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
                    modalContent.innerHTML = `
                    <h2>${yemek.ad}</h2>
                    <p><strong>Malzemeler:</strong> ${yemek.malzemeler.join(', ')}</p>
                    <p class="tarif"><strong>Tarif:</strong> ${yemek.tarif}</p>
                `;
                    modal.style.display = 'flex';
                });
            });
        } else {
            console.error(`Kategori bulunamadı: ${kategori}`);
        }
    }

    kategoriListesi.addEventListener('click', function (event) {
        const clickedElement = event.target;
        let kategori = clickedElement.id.toLowerCase();

        // If the clicked element doesn't have an id, check the parent element's id
        if (!kategori && clickedElement.parentElement.id) {
            kategori = clickedElement.parentElement.id.toLowerCase();
        }

        if (kategori === 'corbalar' || kategori === 'ana-yemek') {
            gosterKategori(kategori);
        }
    });

    modal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modalContent.addEventListener('click', function (event) {
        event.stopPropagation();
    });


});
