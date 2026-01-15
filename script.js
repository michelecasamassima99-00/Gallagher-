Const datiGallagher = {
    'bambino': ["Il Bambino", "Storia: Le radici? Le mie sono marcite molto prima che io nascessi. Vengo da terre lontane da Aengard, posti dove il sole non sembra mai scaldare davvero. Mio padre... era un uomo con troppa onore e poca testa. È bastata una lettera firmata da un nobile in una terra remota per portarselo via. È andato a combattere una guerra che non era la sua, ed è tornato sotto forma di un pezzo di carta stropicciato che annunciava la sua morte. Mia madre? Il dolore l'ha trasformata in un guscio vuoto. Mi ha guardato e ha visto solo il fantasma di un uomo morto. Mi ha lasciato al mio destino, Mi ha scaricato sulla strada come si fa con i rifiuti.»", "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446389/giovane_fw2eih.png"],
    'ragazzo': ["Il Ragazzo", "Storia: Ho imparato a camminare tra i lupi. Se vuoi sopravvivere alla fame, impari a non sorridere mai. La gente diceva che ero freddo, distaccato... io lo chiamavo non voler morire. Mi sono addestrato finché le mani non hanno smesso di sanguinare. e sono diventato una Lama d'Argento mercenari dell ovest.»", "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446404/ragazzo_faq665.png"],
    'mercenario': ["Il Mercenario", "Storia: Credevo che servire le casate nobili ci desse una dignità. Mi sbagliavo. Eravamo solo cani da guardia con lo stemma lucido. A trent'anni, il mondo mi ha ricordato chi ero davvero. Un'imboscata di quelle sporche. Eravamo circondati, il metallo strideva ovunque. Ho guardato i miei compagni, quelli con cui avevo giurato di morire... e ho visto solo le loro schiene mentre scappavano. Mi hanno venduto per cinque minuti di vita in più. Mi hanno lasciato lì a farmi catturare come un animale. Ma non sapevano che un animale messo all'angolo morde più forte. Sono scappato usando la loro stessa sporca furbizia e ho voltato le spalle a quel passato. Ho tenuto il nome delle Lame d'Argento solo per sputarci sopra ogni volta che lo sento.", "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446391/mercenario_i3kbnk.png"],
    'anziano': ["L'Anziano", `La Ragazza e il Simbolo: Un Momento di Respiro...`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446387/anziano_bbjqne.png"],
    'tatuaggio': ["Segni e Tatuaggi", `Porta un tatuaggio sulla spalla destra...`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446411/tatuaggio_vspdxd.jpg"],
    'aspetto': ["Aspetto Fisico", `Corporatura: ...`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446404/ricordo_znoads.png"],
    'carattere': ["Il Carattere", `L’Uomo del "Vero e Falso": ...`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446404/ricordo2_ysvgil.png"]
};

function apri(chiave) {
    var d = datiGallagher[chiave];
    if (!d) return;

    var titolo = d[0];
    var testo = d[1];
    var immagine = d[2];

    document.getElementById('titolo-storia').innerText = titolo;
    document.getElementById('testo-storia').innerText = testo;
    var f = document.getElementById('img-modale');
    if(immagine) { f.src = immagine; f.style.display = "block"; } else { f.style.display = "none"; }
    
    var tris = document.getElementById('contenitore-tris');
    var controllo = document.getElementById('controllo-tris');
    
    if(titolo === 'Il Bambino') {
        tris.style.display = "flex"; controllo.style.display = "none";
        tris.innerHTML = `
            <img src="https://res.cloudinary.com/dqoncufhc/image/upload/v1768446390/madre_pz7exh.jpg" class="foto-tris" style="width:90px; height:130px; object-fit:cover; margin: 0 2px;">
            <img src="https://res.cloudinary.com/dqoncufhc/image/upload/v1768446386/bambino_vgddck.jpg" class="foto-tris" style="width:90px; height:130px; object-fit:cover; margin: 0 2px;">
            <img src="https://res.cloudinary.com/dqoncufhc/image/upload/v1768446403/padre_ebpoxy.jpg" class="foto-tris" style="width:90px; height:130px; object-fit:cover; margin: 0 2px;">`;
    } 
    else if(titolo === "L'Anziano") {
        tris.style.display = "flex"; controllo.style.display = "none";
        tris.innerHTML = `
            <img src="https://res.cloudinary.com/dqoncufhc/image/upload/v1768446391/incontro_zqbxpq.jpg" class="foto-tris" style="width:140px; height:180px; object-fit:cover; margin-right: 5px;">
            <img src="https://res.cloudinary.com/dqoncufhc/image/upload/v1768446390/candela_ahabqh.gif" class="foto-tris" style="width:140px; height:180px; object-fit:cover; margin-left: 5px;">`;
    }
    else if(titolo === "Il Ragazzo" || titolo === "Il Mercenario") {
        tris.style.display = "flex"; controllo.style.display = "none";
        var fotoSrc = (titolo === "Il Ragazzo") ? "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446403/orfano_yd4ved.png" : "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446413/soldato_qfetgq.png";
        tris.innerHTML = `<img src="${fotoSrc}" class="foto-tris" style="width:200px; height:auto; margin-top: 10px;">`;
    }
    else { tris.style.display = "none"; controllo.style.display = "none"; }
    
    document.getElementById('miuModal').style.display = "block";
}

function regolaTris(valore) { var foto = document.querySelectorAll('.foto-tris'); foto.forEach(img => { img.style.width = valore + "px"; }); }
function chiudi() { document.getElementById('miuModal').style.display = "none"; }
window.onclick = function(event) { if (event.target == document.getElementById('miuModal')) { chiudi(); } }

const audioClick = new Audio('https://res.cloudinary.com/dqoncufhc/video/upload/v1768446386/click_vtol4d.wav');
document.querySelectorAll('.ritratto-box').forEach(v => { 
    v.addEventListener('click', () => { audioClick.currentTime = 0; audioClick.play(); }); 
});

const audioBottiglie = new Audio('https://res.cloudinary.com/dqoncufhc/video/upload/v1768446386/bottiglie_yxfq8d.wav');
document.querySelectorAll('.bottone-bottiglia').forEach(b => { 
    b.addEventListener('click', () => { audioBottiglie.currentTime = 0; audioBottiglie.play(); }); 
});
