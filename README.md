# 100 Оюутны AI Хөтөлбөр — GitHub Pages & Notion Embed Hub

Энэхүү веб аппликейшн нь **100 Оюутны хичээлийн хуваарь** (8 долоо хоног, 21 хичээл)-ийг хянах, хичээл бүрийн ChatGPT промптыг нэг товшилтоор хуулах, мөн **GitHub Pages**-ээр байршуулан **Notion** хуудас дотор шууд суулгах (`Embed`) зориулалттай.

## 📁 Файлын бүтэц
- `index.html` — Үндсэн веб хуудас (Dark/Light mode дэмжинэ)
- `style.css` — Notion загварын цэвэрхэн дизайн
- `app.js` — 21 хичээлийн өгөгдөл, хайлт, шүүлтүүр, `localStorage` явц хадгалагч
- `100_Oyutnii_Hicheeliin_Huvaari.ics` — Apple Calendar хуваарь

## 🚀 GitHub Pages дээр байршуулах заавар (2 минут)
1. GitHub дээр `ai-course-hub` нэртэй шинэ **Public** (эсвэл GitHub Pro эрхтэй бол Private) repository үүсгэнэ.
2. Энэ хавтас доторх файлуудыг WebStorm эсвэл терминалаас push хийнэ:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI 100 Course Notion Hub"
   git branch -M main
   git remote add origin https://github.com/<ТАНЫ_USERNAME>/ai-course-hub.git
   git push -u origin main
   ```
3. GitHub repo-ийнхоо **Settings -> Pages** цэс рүү ороод **Build and deployment** хэсгийн Branch-ийг `main` (`/root`) болгож **Save** дарна.
4. 1 минутын дараа таны веб `https://<ТАНЫ_USERNAME>.github.io/ai-course-hub/` хаяг дээр ажиллаж эхэлнэ.
5. Notion хуудсан дээрээ `/embed` гэж бичээд дээрх URL-аа тавихад интерактив самбар шууд гарч ирнэ.
