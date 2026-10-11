# Drakono valtys – tinklapio demo versija

Statinė demo versija (HTML / CSS / JS, be jokių priklausomybių), skirta parodyti klientui
koncepciją prieš perkeliant į WordPress. Nuotraukos – iš Pexels (nemokama licencija).

## Peržiūra

```bash
python3 -m http.server 8765
```

Tada atidarykite http://localhost:8765 (arba tiesiog dukart spustelėkite `index.html`).

## Struktūra

| Failas | Paskirtis |
| --- | --- |
| `index.html` | Visas puslapis (LT tekstas – numatytoji kalba) |
| `assets/css/style.css` | Stiliai, animacijos, responsive, `prefers-reduced-motion` |
| `assets/js/main.js` | Parallax, reveal, 3D tilt, skaitikliai, galerija, 3 žingsnių užklausos forma |
| `assets/js/i18n.js` | EN vertimų žodynas ir kalbos perjungimas (`?lang=en` arba LT/EN mygtukai) |

## Kas yra demo, o kas – „placeholder“

Prieš paleidžiant tikrą svetainę su klientu reikia patvirtinti:

- **Kainas** (290 €, 520 €, 25 €/asm.) – orientacinės, sugalvotos demo tikslais.
- **Kontaktus** – `+370 600 00 000`, `info@drakonovaltys.lt` yra netikri.
- **Vietas** – Vilnius (Neris), Trakai, Kaunas – pasirinkimų sąrašas formoje, tikslinti.
- **Kapitono biografiją, statistiką („300+ komandų“, „15+ metų“) ir atsiliepimus** – pavyzdiniai tekstai.
- **Nuotraukas** – pakeisti kliento komandų nuotraukomis (Pexels nuotraukų ID yra `index.html`).
  Kliento logotipas (`assets/img/logo.png`, PNG su permatomu fonu) ir kapitono nuotrauka
  (`assets/img/kapitonas.jpg`, Trakai) jau įkelti – naudojami header'yje, footer'yje, favicon'e ir
  kapitono sekcijoje visose trijose versijose (kopijos yra `v2/assets/img` ir `v3/assets/img`).

## Perkėlimas į WordPress

1. **Tema.** Paprasčiausias kelias – sukurti savo temą: `header.php` (antraštė iš `index.html`),
   `footer.php`, `front-page.php` (sekcijos), o `style.css` / `main.js` / `i18n.js` prijungti per
   `wp_enqueue_style()` ir `wp_enqueue_script()`. Alternatyva – sekcijas įkelti kaip HTML blokus
   į Elementor / Gutenberg ir CSS įdėti per „Additional CSS“.
2. **Užklausos forma.** Demo forma duomenų niekur nesiunčia (rašo į naršyklės konsolę).
   WordPress'e ją pakeičia **WPForms**, **Fluent Forms** arba **Contact Form 7** su tais pačiais
   laukais: renginio tipas, data, paros metas, dalyvių skaičius, vieta, papildomos paslaugos,
   vardas, įmonė, telefonas, el. paštas, žinutė, sutikimas. Mygtukai „Užsakyti…“ sekcijose
   perduoda `data-prefill` (renginio tipą) ir `data-package` (paketą) – formoje tai galima
   atkartoti per paslėptus laukus arba URL parametrus.
3. **Kalbos.** JS perjungimas skirtas tik demo. WordPress'e naudoti **Polylang** (nemokamas) arba
   **WPML** – atskiri LT ir EN puslapiai; vertimų tekstai jau paruošti `assets/js/i18n.js`.
4. **Nuotraukos.** Įkelti į Media Library ir pakeisti `images.pexels.com` nuorodas.

## v2 – Salient kryptis (pastelinė versija)

Katalogas `v2/` – ta pati struktūra ir turinys, kitas dizainas:

- **Paletė:** švelni (off-white, mėtinė, smėlio, levandų fonai; akcentai – pastelinė žalsva `#5FB3AE` ir koralinė `#F2A48E`), be tamsių sekcijų.
- **Šriftai:** Fraunces (antraštės, kursyvinis akcentas) + Mulish (tekstas).
- **Salient elementai:** padalintas hero su apvalinta nuotrauka ir plaukiojančiomis kortelėmis, lenktos sekcijų jungtys, apvalinta statistikos juosta, blob gradientų fonai, mygtukai su „fill“ hover efektu, rodyklinės nuorodos.
- **Peržiūra:** http://localhost:8765/v2/ (tas pats `python3 -m http.server 8765` iš šaknies).

Užklausos forma, LT/EN perjungimas ir visi placeholder'iai – tokie patys kaip v1.
