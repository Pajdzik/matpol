# Matpol

Prosta, jednostronicowa strona firmy Matpol oferującej stacjonarne korepetycje z języka polskiego i matematyki w Szczecinie.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona będzie dostępna pod adresem `http://localhost:4321`.

## Konfiguracja treści

Główną stronę edytuj w `src/pages/index.astro`. Przed publikacją uzupełnij tam dane kontaktowe oraz, jeśli są już ustalone, imiona nauczycieli. Numery telefonu są obecnie placeholderami tekstowymi; po otrzymaniu właściwych numerów dodaj do nich również linki `tel:`. W tym samym pliku możesz zmienić adres zajęć (domyślnie: Szczecin, ul. Korepetycyjna 5) i czas lekcji (domyślnie: 60 minut).

Tytuł i opis SEO znajdują się w `src/consts.ts`. Domyślny obraz Open Graph to `public/matpol-logo.jpg`; zastąp go własnym plikiem, jeśli logo będzie miało inną nazwę.

## Budowanie i wdrażanie

```bash
npm run build
npm run deploy
```

Adres kanoniczny i absolutne adresy Open Graph są generowane tylko wtedy, gdy podczas budowania ustawiona jest zmienna `SITE_URL`, na przykład:

```bash
SITE_URL=https://matpol.example npm run build
```

Projekt korzysta z adaptera Cloudflare i może być wdrażany jako statyczna strona na Cloudflare Workers.
