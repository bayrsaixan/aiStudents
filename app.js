const lessons = [
    { num: 1, week: 0, date: "7-Nov", day: "Бямба", time: "10:00–12:30", specialTime: true, topic: "What is AI? History, key concepts (хоёр ангийн нэгдсэн нээлт)", teacher: "Myagmarsuren S.", desc: "Хиймэл оюун ухааны түүх, AI, Machine Learning, Deep Learning-ийн ялгаа ба суурь ухагдахуунууд." },
    { num: 2, week: 1, date: "9-Nov", day: "Даваа", time: "19:00–20:30", specialTime: false, topic: "Algorithmic Thinking + Python I: setting up, variables, data types, control flow", teacher: "Temuulen M.", desc: "Алгоритм сэтгэлгээ, Python орчин тохируулах, хувьсагч, өгөгдлийн төрлүүд болон нөхцөл шалгах (if/else)." },
    { num: 3, week: 1, date: "11-Nov", day: "Лхагва", time: "19:00–20:30", specialTime: false, topic: "Python II: functions, lists, dictionaries, loops", teacher: "Temuulen M.", desc: "Функц бичих, жагсаалт (list), толь бичиг (dict) болон давталтууд (for, while)." },
    { num: 4, week: 1, date: "12-Nov", day: "Пүрэв", time: "19:00–20:30", specialTime: false, topic: "Python III: files, libraries and a first mini-project", teacher: "Dr Undral B.", desc: "Файлтай ажиллах, бэлэн сангууд (libraries) импортлох ба эхний мини-төсөл." },
    { num: 5, week: 2, date: "16-Nov", day: "Даваа", time: "19:00–20:30", specialTime: false, topic: "Working with data: pandas, cleaning and visualisation", teacher: "Temuulen M.", desc: "Pandas сангаар хүснэгтэн өгөгдөл боловсруулах, өгөгдөл цэвэрлэх болон график дүрслэл." },
    { num: 6, week: 2, date: "18-Nov", day: "Лхагва", time: "19:00–20:30", specialTime: false, topic: "Machine learning I: how models learn; regression", teacher: "Temuulen M.", desc: "Машин сургалтын загвар суралцах зарчим болон тоон утга таамаглах Регрессийн загвар." },
    { num: 7, week: 2, date: "19-Nov", day: "Пүрэв", time: "19:00–20:30", specialTime: false, topic: "Machine learning II: classification and evaluating a model", teacher: "Dr Undral B.", desc: "Ангиллын алгоритмууд (Classification) ба загварын гүйцэтгэлийг үнэлэх хэмжүүрүүд." },
    { num: 8, week: 3, date: "23-Nov", day: "Даваа", time: "19:00–20:30", specialTime: false, topic: "Machine learning III: pre-trained models, Hugging Face and deploying a model", teacher: "Temuulen M.", desc: "Бэлэн сургасан загварууд, Hugging Face платформ ашиглах ба загвараа Deploy хийх." },
    { num: 9, week: 3, date: "25-Nov", day: "Лхагва", time: "19:00–20:30", specialTime: false, topic: "Vibe coding: building projects with AI coding assistants", teacher: "Temuulen M.", desc: "AI код бичигч туслахууд ашиглан хурдтай төсөл хөгжүүлэх Vibe coding арга барил." },
    { num: 10, week: 3, date: "26-Nov", day: "Пүрэв", time: "10:00–11:30", specialTime: true, topic: "Build an AI app end-to-end: from idea to a live demo (deployment)", teacher: "Baigalmaa Z.", desc: "Санаанаас эхлэн бодит ажилладаг демо хүртэл бүтэн AI апп бүтээж, онлайн орчинд байршуулах." },
    { num: 11, week: 4, date: "30-Nov", day: "Даваа", time: "19:00–20:30", specialTime: false, topic: "Responsible AI and global AI trends", teacher: "Temuulen M.", desc: "Хариуцлагатай AI, ёс зүй, өгөгдлийн нууцлал болон дэлхийн AI чиг хандлага." },
    { num: 12, week: 4, date: "2-Dec", day: "Лхагва", time: "19:00–20:30", specialTime: false, topic: "Capstone kick-off: problem selection, team formation, project charter", teacher: "Temuulen M.", desc: "Төгсөлтийн төслийн эхлэл: асуудал сонгох, баг бүрдүүлэх, төслийн баримт бичиг боловсруулах." },
    { num: 13, week: 4, date: "3-Dec", day: "Пүрэв", time: "19:00–20:30", specialTime: false, topic: "No Code Automation", teacher: "Enkhmanlai B.", desc: "Код бичилгүйгээр ажлын урсгал болон AI процессуудыг автоматжуулах." },
    { num: 14, week: 5, date: "7-Dec", day: "Даваа", time: "19:00–20:30", specialTime: false, topic: "APIs and calling LLMs from Python", teacher: "Temuulen M.", desc: "API ажиллах зарчим ба Python кодоос том хэлний загваруудыг (LLM) дуудаж ажиллуулах." },
    { num: 15, week: 5, date: "9-Dec", day: "Лхагва", time: "19:00–20:30", specialTime: false, topic: "GitHub, hosting a web app, introduction to cloud services", teacher: "Temuulen M.", desc: "GitHub дээр багаар ажиллах, веб апп байршуулах ба үүлэн технологийн суурь." },
    { num: 16, week: 5, date: "10-Dec", day: "Пүрэв", time: "19:00–20:30", specialTime: false, topic: "Creative AI Workshop", teacher: "Tsetsenbileg D.", desc: "Бүтээлч салбарын AI хэрэгслүүд дээр суурилсан практик воркшоп." },
    { num: 17, week: 6, date: "14-Dec", day: "Даваа", time: "19:00–20:30", specialTime: false, topic: "Capstone build I: prototype review and technical mentoring", teacher: "Temuulen M.", desc: "Төгсөлтийн төслийн эхний прототайпыг шалгуулж техникийн зөвлөгөө авах." },
    { num: 18, week: 6, date: "16-Dec", day: "Лхагва", time: "19:00–20:30", specialTime: false, topic: "Capstone build II: mentoring clinic (optional sponsor guest)", teacher: "Temuulen M.", desc: "Төслийн ганцаарчилсан/багийн менторинг уулзалт ба зочны ярилцлага." },
    { num: 19, week: 6, date: "17-Dec", day: "Пүрэв", time: "16:00–17:30", specialTime: true, topic: "Capstone build III: System Deployment", teacher: "Baigalmaa Z.", desc: "Төгсөлтийн төслийн системийг сервер/клауд орчинд бүрэн байршуулах." },
    { num: 20, week: 6, date: "19-Dec", day: "Бямба", time: "19:00–20:30", specialTime: false, topic: "Capstone rehearsal: dry-run presentations and feedback", teacher: "Temuulen M.", desc: "Demo Day-ийн өмнөх урьдчилсан илтгэлийн сургуулилт ба багшийн зөвлөмж." },
    { num: 21, week: 7, date: "26-Dec", day: "Бямба", time: "09:00–17:00", specialTime: true, topic: "Demo Day (танхим): presentations, jury, closing, certificates", teacher: "Бүх багш, шүүгчийн бүрэлдэхүүн", desc: "Танхимаар төслөө шүүгчдэд танилцуулах, хаалтын үйл ажиллагаа ба сертификат гардуулах." }
];

const masterPromptText = `# ROLE & PERSONA (ДҮР БА ҮҮРЭГ)
Чи бол миний "100 Оюутны AI хөтөлбөр"-ийн туршид намайг дагалдан сургах "Principal AI & Full-Stack ML Mentor" (Ахлах AI Инженер ба Ментор) юм.
Миний суурь: Би Өгөгдлийн шинжлэх ухааны (Data Science) чиглэлээр суралцдаг 2-р курсийн оюутан. SQL, статистик, веб хөгжүүлэлтийн (HTML/CSS/JS) суурь мэдлэгтэй, macOS орчинд (PyCharm, DataSpell, WebStorm) ажилладаг.

Чиний зорилго бол 8 долоо хоногийн (21 удаагийн хичээл) хөтөлбөрийн дагуу надад хичээл бүрийн онолыг гүнзгийрүүлэн тайлбарлах, практик код бичихэд туслах, дасгал ажил өгөх, мөн төгсөлтийн төсөл (Capstone Project)-ийг минь бодит бүтээгдэхүүн болгож Demo Day дээр амжилттай танилцуулахад чиглүүлэх юм.

# ЗААХ АРГА ЗҮЙ (5 АЛХАМ):
1. Онолын цэгцтэй тайлбар (Core Concept)
2. Цэвэр, Production-Ready Код (PEP8, тайлбартай)
3. Vibe Coding & Best Practices
4. Гараар хийх даалгавар (Mini-Challenge)
5. Capstone Холбоос (Capstone Connection)`;

const STORAGE_KEY = "ai100_completed_lessons_v1";

function getCompleted() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

function saveCompleted(arr) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    updateProgressUI();
}

function toggleLesson(num) {
    let completed = getCompleted();
    if (completed.includes(num)) {
        completed = completed.filter(n => n !== num);
    } else {
        completed.push(num);
    }
    saveCompleted(completed);
    renderLessons();
}

function updateProgressUI() {
    const completed = getCompleted();
    const total = lessons.length;
    const pct = Math.round((completed.length / total) * 100);
    document.getElementById("progress-text").textContent = `${completed.length} / ${total} хичээл (${pct}%)`;
    document.getElementById("progress-bar-fill").style.width = `${pct}%`;
}

function renderLessons() {
    const searchVal = document.getElementById("search-input").value.toLowerCase();
    const weekVal = document.getElementById("week-filter").value;
    const completed = getCompleted();
    const tbody = document.getElementById("lesson-tbody");
    tbody.innerHTML = "";

    lessons.forEach(item => {
        const matchesWeek = weekVal === "all" || String(item.week) === weekVal;
        const matchesSearch = item.topic.toLowerCase().includes(searchVal) ||
                              item.teacher.toLowerCase().includes(searchVal) ||
                              item.desc.toLowerCase().includes(searchVal);
        if (!matchesWeek || !matchesSearch) return;

        const isDone = completed.includes(item.num);
        const tr = document.createElement("tr");
        if (isDone) tr.className = "completed-row";

        tr.innerHTML = `
            <td><input type="checkbox" ${isDone ? "checked" : ""} onchange="toggleLesson(${item.num})"></td>
            <td><strong>#${item.num}</strong></td>
            <td><span class="week-pill">Week ${item.week}</span></td>
            <td><strong>${item.date}</strong><br><span style="color:var(--text-muted);font-size:12px;">${item.day}</span></td>
            <td><span class="${item.specialTime ? 'time-special' : ''}">${item.time}</span></td>
            <td>
                <div class="topic-title">${item.topic}</div>
                <div class="topic-desc">${item.desc}</div>
            </td>
            <td>${item.teacher}</td>
            <td><button class="btn btn-small" onclick="copyLessonPrompt(${item.num})">🤖 Промпт хуулах</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function copyLessonPrompt(num) {
    const item = lessons.find(l => l.num === num);
    if (!item) return;
    const prompt = `Өнөөдөр Хичээл #${item.num} (Week ${item.week} - ${item.date}): "${item.topic}" (Багш: ${item.teacher}) орж байна. Principal AI Mentor-ын 5 алхамт арга зүйн дагуу:
1. Энэ сэдвийн гол онолыг миний Data Science болон SQL/статистикийн суурьтай холбон тайлбарлаж өг.
2. Бодит өгөгдөл дээр суурилсан цэвэр Python жишээ код бичиж тайлбарла.
3. Надад өөрөө бодож хийх 1 Mini-Challenge даалгавар өг.`;
    navigator.clipboard.writeText(prompt);
    showToast(`Хичээл #${item.num} промпт хуулагдлаа!`);
}

function copyMasterPrompt() {
    navigator.clipboard.writeText(masterPromptText);
    showToast("Master Prompt хуулагдлаа!");
}

function copyQuickPrompt(type) {
    const map = {
        pre: "Өнөөдрийн хичээл эхлэхээс өмнө миний заавал мэдчихсэн байх ёстой 3 гол ухагдахууныг миний статистик болон SQL-ийн суурьтай холбоод 5 минутад уншихаар товч тайлбарлаад өг.",
        during: "Багш хичээл дээр ийм код бичлээ: [КОДОО ЭНД ТАВИНА]. Энэ кодын мөр бүрийг задлаад, яагаад ингэж бичиж байгааг болон бодит төсөл дээр үүнийг яаж илүү цэвэрхэн (production-ready) бичдэгийг харуулаач.",
        review: "Чиний өгсөн Mini-Challenge-ийг би ингэж бодлоо: [КОДОО ЭНД ТАВИНА]. Шууд зөв хариуг нь битгий өгөөрэй. Миний кодонд логикийн болон стандартын ямар алдаа байна, яаж сайжруулах вэ гэдэг дээр Code Review хийгээд чиглүүлээд өг."
    };
    navigator.clipboard.writeText(map[type]);
    showToast("Промпт хуулагдлаа!");
}

function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    updateProgressUI();
    renderLessons();
    showToast("Явц шинэчлэгдлээ!");
}

function switchTab(tabId, btnEl) {
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));
    document.getElementById("tab-" + tabId).classList.add("active");
    btnEl.classList.add("active");
}

function downloadICS() {
    window.location.href = "100_Oyutnii_Hicheeliin_Huvaari.ics";
}

function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2200);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("master-prompt-box").textContent = masterPromptText;
    updateProgressUI();
    renderLessons();
});
