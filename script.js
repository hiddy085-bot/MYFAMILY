// 1. DATA YA FAMILIA
const dataFamilia = {
    baba: { 
            jina: "Mzee Idd Samihu",
            picha: "images/baba.jpg",
            kazi: "Mkulima na Mfanyabiashara", 
            kuzaliwa: "12 Mei 1971", 
            makazi: "Lindi, Tanzania", 
            historia: "Mzee Idd ndiye nguzo ya familia. Alisoma shule ya sekondari ya Lindi Tech na amekuwa akijishughulisha na kilimo cha machungwa tangu mwaka 1990."
         },
    mama: { 
            jina: "Mama Rukia Hussein", 
            picha: "images/mama.jpg", 
            kazi: "Mama ntilie na mfanyabiashara mdogo", 
            kuzaliwa: "04 Septemba 1980", makazi: "Lindi, Tanzania", 
            historia: "Mama Rukia amekuwa akifanya biashara ya mama ntilie tangu mwaka 2010."
         },
    dada: {
         jina: "Salma Idd Samihu",
          picha: "images/salma.jpg", 
          kazi: "Mfanyabiashara wa matunda na mboga", 
          kuzaliwa: "22 Desemba 1997", 
          makazi: "Dar es Salaam", 
          historia: "Salma ni mtoto wa kwanza. Ameolewa na ana watoto wawili: Yumna na Yashvir." 
        },
    Kaka1: { 
        jina: "Hussein Idd Samihu", 
        picha: "images/hussein.jpg", 
        kazi: "Mwanafunzi wa Uhandisi wa Kompyuta", 
        kuzaliwa: "14 Oktoba 2001", 
        makazi: "Dar es Salaam / Morogoro", 
        historia: "Hussein ni mtaalamu wa mifumo ya kompyuta."
     },
    Kaka2: { 
        jina: "Ally Idd Samihu", 
        picha: "images/ally.jpg", 
        kazi: "Mjasiriamali wa vifaa vya ujenzi", 
        kuzaliwa: "15 Januari 2003", 
        makazi: "Dar es Salaam", 
        historia: "Ally ni mtoto wa tatu, mwenye ndoto kubwa." 
    },
    dada1: { 
        jina: "Habiba Idd Samihu", 
        picha: "images/habiba.jpg", 
        kazi: "Mfanyabiashara wa nguo na vipodozi", 
        kuzaliwa: "18 Aprili 2005", 
        makazi: "Dar es Salaam", 
        historia: "Habiba ni mtoto wa nne, anajishughulisha na biashara ya nguo." 
    },
    kaka3: { 
        jina: "Zakawi Idd Samihu", 
        picha: "images/zakawi.jpg", 
        kazi: "Mjasiriamali wa nguo", 
        kuzaliwa: "01 Novemba 2008", 
        makazi: "Dar es Salaam", 
        historia: "Zakawi ni mtoto wa tano wa mzee Idd." 
    },
    kaka4: { 
        jina: "Muler Idd Samihu", 
        picha: "images/muler.jpg", 
        kazi: "Mfanyakazi Gereji (DTT)", 
        kuzaliwa: "14 Oktoba 2010", 
        makazi: "Dar es Salaam", 
        historia: "Muler ni mtoto wa sita, anapenda kucheza mpira." 
    },
    dada2: { 
        jina: "Naima Fabiani Miyeye", 
        picha: "images/naima.jpg", 
        kazi: "Mwanafunzi darasa la pili", 
        kuzaliwa: "05 Februari 2019", 
        makazi: "Dar es Salaam", 
        historia: "Naima ni mtoto wa mwisho, anapenda kusoma hadithi." 
    }
};

// 2. NAVIGATION FUNCTION - Updated with all 17 pages
function onyeshaPage(page) {
    const kurasa = ['home-page', 'profiles-page', 'tree-page', 'gallery-page', 'guestbook-page', 'contact-page', 'calendar-page', 'announcements-page', 'budget-page', 'recipes-page', 'polls-page', 'memories-page', 'contributions-page', 'chat-page', 'goals-page', 'health-page', 'importantdates-page'];
    kurasa.forEach(kurasaId => {
        const element = document.getElementById(kurasaId);
        if(element) element.style.display = 'none';
    });
    
    const kurasaKuchaguliwa = document.getElementById(page + '-page');
    if(kurasaKuchaguliwa) {
        kurasaKuchaguliwa.style.display = 'block';
    }
    
    if(page === 'calendar') {
        buildCalendar();
        loadUpcomingEvents();
    }
    if(page === 'announcements') {
        loadAnnouncements();
    }
    if(page === 'gallery') {
        onyeshaPichaZote();
    }
    if(page === 'budget') {
      onyeshaBudget();
    }
    if(page === 'recipes') {
      onyeshaRecipes();
    }
    if(page === 'polls') {
      onyeshaPolls();
    }
    if(page === 'memories') {
      onyeshaMemories();
    }
    if(page === 'home') {
      onyeshaHaliYaHewa();
    }
    if(page === 'contributions') {
      onyeshaMichango();
    }
    if(page === 'goals') {
      onyeshaMalengo();
    }
    if(page === 'health') {
      onyeshaAfya();
    }
    if(page === 'importantdates') {
      onyeshaSikuMuhimu();
      checkUpcomingReminders();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. ONYESHA WASIFU - Fixed (No Jumping)
function onyeshaWasifu(mwanachama) {
    const mtu = dataFamilia[mwanachama];
    if(!mtu) return;
    
    const profJina = document.getElementById('profJina');
    if(profJina) profJina.textContent = mtu.jina;
    
    const profKazi = document.getElementById('profKazi');
    if(profKazi) profKazi.textContent = mtu.kazi;
    
    const profKuzaliwa = document.getElementById('profKuzaliwa');
    if(profKuzaliwa) profKuzaliwa.textContent = mtu.kuzaliwa;
    
    const profMakazi = document.getElementById('profMakazi');
    if(profMakazi) profMakazi.textContent = mtu.makazi;
    
    const profHistoria = document.getElementById('profHistoria');
    if(profHistoria) profHistoria.innerHTML = mtu.historia;
    
    const profPicha = document.getElementById('profPicha');
    if(profPicha) {
        profPicha.style.opacity = '0';
        profPicha.src = mtu.picha;
        profPicha.style.display = 'block';
        setTimeout(() => { profPicha.style.opacity = '1'; }, 50);
    }
    
    const profJina2 = document.getElementById('profJina2');
    if(profJina2) profJina2.textContent = mtu.jina;
    
    const profKazi2 = document.getElementById('profKazi2');
    if(profKazi2) profKazi2.textContent = mtu.kazi;
    
    const profKuzaliwa2 = document.getElementById('profKuzaliwa2');
    if(profKuzaliwa2) profKuzaliwa2.textContent = mtu.kuzaliwa;
    
    const profMakazi2 = document.getElementById('profMakazi2');
    if(profMakazi2) profMakazi2.textContent = mtu.makazi;
    
    const profHistoria2 = document.getElementById('profHistoria2');
    if(profHistoria2) profHistoria2.innerHTML = mtu.historia;
    
    const profPicha2 = document.getElementById('profPicha2');
    if(profPicha2) {
        profPicha2.style.opacity = '0';
        profPicha2.src = mtu.picha;
        profPicha2.style.display = 'block';
        setTimeout(() => { profPicha2.style.opacity = '1'; }, 50);
    }
    
    const profilesPage = document.getElementById('profiles-page');
    const homePage = document.getElementById('home-page');
    
    if(profilesPage && profilesPage.style.display === 'block') {
        // Already on profiles page
    } else if(homePage && homePage.style.display === 'block') {
        // On home page
    } else {
        onyeshaPage('profiles');
    }
}

// 4. BIRTHDAY COUNTDOWN
function kaguaBirthdays() {
    const leo = new Date();
    let ujumbe = "Hakuna birthday ya karibu kwa sasa.";
    const miezi = { "Januari": 0, "Februari": 1, "Machi": 2, "Aprili": 3, "Mei": 4, "Juni": 5, "Julai": 6, "Agosti": 7, "Septemba": 8, "Oktoba": 9, "Novemba": 10, "Desemba": 11 };
    
    let sikuNdogo = Infinity;
    let mwanafamiliaMwenyeBirthday = "";
    
    for (let key in dataFamilia) {
        const mtu = dataFamilia[key];
        const sehemu = mtu.kuzaliwa.split(" ");
        const sikuMtu = parseInt(sehemu[0]);
        const mweziMtu = miezi[sehemu[1]];
        
        let tareheBirthday = new Date(leo.getFullYear(), mweziMtu, sikuMtu);
        if (tareheBirthday < leo && tareheBirthday.toDateString() !== leo.toDateString()) {
            tareheBirthday.setFullYear(leo.getFullYear() + 1);
        }
        
        const sikuZilizobaki = Math.ceil((tareheBirthday - leo) / (1000 * 60 * 60 * 24));
        if (sikuZilizobaki >= 0 && sikuZilizobaki < sikuNdogo) {
            sikuNdogo = sikuZilizobaki;
            mwanafamiliaMwenyeBirthday = mtu.jina;
        }
    }
    
    if (sikuNdogo === 0) {
        ujumbe = "LEO NI SIKU YA KUZALIWA YA " + mwanafamiliaMwenyeBirthday + "!";
        onyeshaArifa(ujumbe, "birthday");
    } else if (sikuNdogo !== Infinity && sikuNdogo !== 365) {
        ujumbe = "Siku " + sikuNdogo + " zimebaki kuelekea Birthday ya " + mwanafamiliaMwenyeBirthday + "!";
    }
    
    const elem = document.getElementById("birthdayMessage");
    if(elem) elem.innerHTML = ujumbe;
}

// 5. LIGHTBOX
function funguaLightbox(src, maelezo) {
    const modal = document.getElementById("lightboxModal");
    const img = document.getElementById("lightboxImg");
    const caption = document.getElementById("lightboxCaption");
    if(modal && img && caption) {
        modal.style.display = "flex";
        img.src = src;
        caption.innerHTML = maelezo;
    }
}

function fungaLightbox() { 
    const modal = document.getElementById("lightboxModal");
    if(modal) modal.style.display = "none"; 
}

// 6. GUESTBOOK
function ongezaUjumbe() {
    const jina = document.getElementById("guestName");
    const txt = document.getElementById("guestText");
    if (!jina.value || !txt.value) {
        alert("Tafadhali jaza jina na ujumbe wako!");
        return;
    }
    let msg = JSON.parse(localStorage.getItem("ujumbeFamilia") || "[]");
    msg.unshift({ 
        jina: jina.value, 
        teksti: txt.value, 
        tarehe: new Date().toLocaleDateString('sw-TZ') 
    });
    localStorage.setItem("ujumbeFamilia", JSON.stringify(msg));
    onyeshaUjumbe();
    updateStats();
    jina.value = "";
    txt.value = "";
    onyeshaArifa("Ujumbe wako umetumwa kikamilifu!", "success");
}

function onyeshaUjumbe() {
    const list = document.getElementById("messagesList");
    if(!list) return;
    let msg = JSON.parse(localStorage.getItem("ujumbeFamilia") || "[]");
    if(msg.length === 0) {
        list.innerHTML = "Hakuna ujumbe bado. Kuwa wa kwanza kuandika!";
    } else {
        list.innerHTML = msg.map(m => {
            return '<div class="single-message">' +
                '<strong>' + m.jina + '</strong> ' +
                '<small>' + m.tarehe + '</small>' +
                '<p>' + m.teksti + '</p>' +
                '</div>';
        }).join('');
    }
    updateStats();
}

// 7. MUSIC
function chezaMuziki() {
    const audio = document.getElementById("familyAudio");
    const btn = document.getElementById("btnMuziki");
    if (audio.paused) { 
        audio.play(); 
        btn.innerHTML = "Pause"; 
    } else { 
        audio.pause(); 
        btn.innerHTML = "Play"; 
    }
}

// 8. SHARE
function shirikiWebsite() {
    const url = window.location.href;
    const ujumbe = "Karibu kutembelea tovuti ya Familia ya Mzee Idd!";
    window.open("https://wa.me/?text=" + encodeURIComponent(ujumbe + " " + url), '_blank');
}

// 9. ADMIN
const NENOSIRI_LA_UTAWALA = "1234";
function funguaAdmin() {
    const nenosiri = prompt("Ingiza Nenosiri:");
    if (nenosiri === NENOSIRI_LA_UTAWALA) {
        const adminBox = document.getElementById("adminBox");
        if(adminBox) adminBox.style.display = "flex";
    } else {
        alert("Nenosiri si sahihi!");
    }
}

function hifadhiMabadilikoAdmin() {
    const titleMpya = document.getElementById("mpyaTitle").value;
    const pichaMpya = document.getElementById("mpyaBg").value;
    
    if(titleMpya) {
        const allTitles = document.querySelectorAll("h1");
        allTitles.forEach(title => {
            title.innerText = titleMpya;
        });
        localStorage.setItem("kichwaChaHabari", titleMpya);
    }
    if(pichaMpya) {
        let pichaZaBackground = JSON.parse(localStorage.getItem("pichaZaAdmin") || "[]");
        pichaZaBackground.push(pichaMpya);
        localStorage.setItem("pichaZaAdmin", JSON.stringify(pichaZaBackground));
    }
    onyeshaArifa("Mabadiliko yamehifadhiwa!", "success");
    const adminBox = document.getElementById("adminBox");
    if(adminBox) adminBox.style.display = "none";
}

// 10. BACKGROUND SLIDESHOW
let pichaZaBackground = ["images/mypic.jpg", "images/mypic1.jpeg", "images/mypic2.jpeg"];
let index = 0;

function badilishaPicha() {
    if (pichaZaBackground.length === 0) return;
    const picha = pichaZaBackground[index];
    document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('" + picha + "')";
    index = (index + 1) % pichaZaBackground.length;
}

// 11. CALENDAR FUNCTIONS - KALENDA YA KWELI (ACTUAL DATES)
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function buildCalendar() {
    const months = ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"];
    const monthYearElement = document.getElementById("mweziMwaka");
    if(monthYearElement) {
        monthYearElement.innerText = months[currentMonth] + " " + currentYear;
    }
    
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    
    let calendarHtml = "";
    let dayCount = 1;
    
    let startDay = firstDay === 0 ? 6 : firstDay - 1;
    
    for(let i = 0; i < 42; i++) {
        if(i < startDay || dayCount > daysInMonth) {
            calendarHtml += '<div class="calendar-day empty"></div>';
        } else {
            let isBirthday = false;
            let eventName = "";
            let isToday = false;
            
            if(dayCount === todayDate && currentMonth === todayMonth && currentYear === todayYear) {
                isToday = true;
            }
            
            for(let key in dataFamilia) {
                const mtu = dataFamilia[key];
                const birthParts = mtu.kuzaliwa.split(" ");
                const birthDay = parseInt(birthParts[0]);
                const birthMonth = getMonthNumber(birthParts[1]);
                
                if(birthDay === dayCount && birthMonth === currentMonth) {
                    isBirthday = true;
                    eventName = "Siku ya kuzaliwa " + mtu.jina;
                    break;
                }
            }
            
            let eventClass = "";
            if(isToday) eventClass = "today";
            if(isBirthday) eventClass = eventClass ? eventClass + " birthday" : "birthday";
            
            calendarHtml += '<div class="calendar-day ' + eventClass + '" onclick="showEvent(\'' + eventName + '\', ' + dayCount + ')">' + 
                '<span class="day-number">' + dayCount + '</span>' +
                '</div>';
            dayCount++;
        }
    }
    
    const calendarDays = document.getElementById("calendarDays");
    if(calendarDays) calendarDays.innerHTML = calendarHtml;
}

function getMonthNumber(monthName) {
    const months = ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"];
    return months.indexOf(monthName);
}

function getMonthName(month) {
    const months = ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"];
    return months[month];
}

function badilishaMwezi(direction) {
    currentMonth += direction;
    if(currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if(currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    buildCalendar();
}

function showEvent(eventName, day) {
    if(eventName && eventName !== "") {
        for(let key in dataFamilia) {
            const mtu = dataFamilia[key];
            const birthParts = mtu.kuzaliwa.split(" ");
            const birthDay = parseInt(birthParts[0]);
            const birthMonth = getMonthNumber(birthParts[1]);
            
            if(birthDay === day && birthMonth === currentMonth) {
                alert(eventName + "\nTarehe: " + day + " " + getMonthName(currentMonth) + " " + currentYear + "\nMakazi: " + mtu.makazi);
                break;
            }
        }
    } else {
        alert(getMonthName(currentMonth) + " " + day + ", " + currentYear);
    }
}

function loadUpcomingEvents() {
    const leo = new Date();
    const upcomingEvents = [];
    
    for(let key in dataFamilia) {
        const mtu = dataFamilia[key];
        const birthParts = mtu.kuzaliwa.split(" ");
        const birthDay = parseInt(birthParts[0]);
        const birthMonth = getMonthNumber(birthParts[1]);
        
        let birthDate = new Date(leo.getFullYear(), birthMonth, birthDay);
        if(birthDate < leo) {
            birthDate = new Date(leo.getFullYear() + 1, birthMonth, birthDay);
        }
        
        const sikuZilizobaki = Math.ceil((birthDate - leo) / (1000 * 60 * 60 * 24));
        
        upcomingEvents.push({
            tarehe: birthDate,
            tukio: "Siku ya kuzaliwa " + mtu.jina,
            sikuZilizobaki: sikuZilizobaki,
            tareheImeandikwa: birthDay + " " + getMonthName(birthMonth) + " " + birthDate.getFullYear()
        });
    }
    
    const specialEvents = [
        { tarehe: new Date(leo.getFullYear(), 0, 1), tukio: "Mwaka Mpya" },
        { tarehe: new Date(leo.getFullYear(), 3, 7), tukio: "Siku ya Nyerere" },
        { tarehe: new Date(leo.getFullYear(), 11, 25), tukio: "Siku ya Krismasi" },
        { tarehe: new Date(leo.getFullYear(), 11, 26), tukio: "Siku ya Sadaka" }
    ];
    
    for(let i = 0; i < specialEvents.length; i++) {
        const event = specialEvents[i];
        let eventDate = new Date(event.tarehe);
        if(eventDate < leo) {
            eventDate = new Date(leo.getFullYear() + 1, event.tarehe.getMonth(), event.tarehe.getDate());
        }
        const sikuZilizobaki = Math.ceil((eventDate - leo) / (1000 * 60 * 60 * 24));
        upcomingEvents.push({
            tarehe: eventDate,
            tukio: event.tukio,
            sikuZilizobaki: sikuZilizobaki,
            tareheImeandikwa: event.tarehe.getDate() + " " + getMonthName(event.tarehe.getMonth()) + " " + eventDate.getFullYear(),
            isSpecial: true
        });
    }
    
    upcomingEvents.sort((a, b) => a.sikuZilizobaki - b.sikuZilizobaki);
    
    const eventsList = document.getElementById("upcomingEventsList");
    if(eventsList) {
        if(upcomingEvents.length === 0) {
            eventsList.innerHTML = "<p>Hakuna matukio yajayo.</p>";
        } else {
            eventsList.innerHTML = upcomingEvents.slice(0, 8).map(event => {
                const specialClass = event.isSpecial ? 'special-event' : '';
                return '<div class="event-item ' + specialClass + '">' +
                    '<strong>' + event.tukio + '</strong>' +
                    '<p class="event-date-text">Tarehe: ' + event.tareheImeandikwa + '</p>' +
                    '<p class="event-days-left">Siku ' + event.sikuZilizobaki + ' zimebaki</p>' +
                    '</div>';
            }).join('');
        }
    }
}

// 12. ANNOUNCEMENTS FUNCTIONS
function tangaza() {
    const title = document.getElementById("announceTitle");
    const content = document.getElementById("announceContent");
    
    if(!title.value || !content.value) {
        alert("Tafadhali jaza kichwa na maelezo ya tangazo!");
        return;
    }
    
    let announcements = JSON.parse(localStorage.getItem("matangazoFamilia") || "[]");
    announcements.unshift({
        kichwa: title.value,
        maelezo: content.value,
        tarehe: new Date().toLocaleDateString('sw-TZ'),
        muda: new Date().toISOString()
    });
    localStorage.setItem("matangazoFamilia", JSON.stringify(announcements));
    loadAnnouncements();
    title.value = "";
    content.value = "";
    onyeshaArifa("Tangazo limetumwa kikamilifu!", "success");
}

function loadAnnouncements() {
    const announcementsList = document.getElementById("announcementsList");
    if(!announcementsList) return;
    
    let announcements = JSON.parse(localStorage.getItem("matangazoFamilia") || "[]");
    
    if(announcements.length === 0) {
        announcementsList.innerHTML = '<div class="announcement-card">' +
            '<h3>Karibu Tovuti Yetu</h3>' +
            '<p>Karibu kwenye tovuti rasmi ya Familia ya Mzee Idd Samihu.</p>' +
            '<small>Imetangazwa: Januari 2026</small>' +
            '</div>';
    } else {
        announcementsList.innerHTML = announcements.map(ann => {
            return '<div class="announcement-card">' +
                '<h3>' + ann.kichwa + '</h3>' +
                '<p>' + ann.maelezo + '</p>' +
                '<small>Imetangazwa: ' + ann.tarehe + '</small>' +
                '</div>';
        }).join('');
    }
}

// ==================== WEATHER WIDGET ====================
function onyeshaHaliYaHewa() {
    const weatherContainer = document.getElementById('weatherWidget');
    if(!weatherContainer) return;
    
    const cities = ['Lindi', 'Dar es Salaam', 'Morogoro'];
    const mockWeather = [
        { city: "Lindi", temp: "32°C", condition: "Jua", icon: "☀️" },
        { city: "Dar es Salaam", temp: "30°C", condition: "Mawingu", icon: "⛅" },
        { city: "Morogoro", temp: "28°C", condition: "Joto", icon: "🌤️" }
    ];
    
    let html = '<div class="weather-grid">';
    mockWeather.forEach(weather => {
        html += '<div class="weather-card">' +
            '<div class="weather-icon">' + weather.icon + '</div>' +
            '<div class="weather-city">' + weather.city + '</div>' +
            '<div class="weather-temp">' + weather.temp + '</div>' +
            '<div class="weather-condition">' + weather.condition + '</div>' +
            '</div>';
    });
    html += '</div>';
    weatherContainer.innerHTML = html;
}

// ==================== NOTIFICATION SYSTEM ====================
function onyeshaArifa(ujumbe, aina = 'info') {
    let arifaContainer = document.getElementById('notificationContainer');
    if(!arifaContainer) {
        const div = document.createElement('div');
        div.id = 'notificationContainer';
        document.body.appendChild(div);
        arifaContainer = div;
    }
    
    const arifa = document.createElement('div');
    arifa.className = 'notification ' + aina;
    arifa.innerHTML = '<div class="notification-content">' +
        '<span>' + ujumbe + '</span>' +
        '<button onclick="this.parentElement.parentElement.remove()">&times;</button>' +
        '</div>';
    
    arifaContainer.appendChild(arifa);
    
    setTimeout(() => {
        if(arifa && arifa.remove) arifa.remove();
    }, 5000);
}

// ==================== BUDGET FUNCTIONS ====================
function ongezaBudget() {
    const jina = document.getElementById('budgetName');
    const kiasi = document.getElementById('budgetAmount');
    const aina = document.getElementById('budgetType');
    const maelezo = document.getElementById('budgetDesc');
    
    if(!jina.value || !kiasi.value) {
        alert("Tafadhali jaza jina na kiasi!");
        return;
    }
    
    let budget = JSON.parse(localStorage.getItem('familyBudget') || '[]');
    budget.unshift({
        id: Date.now(),
        jina: jina.value,
        kiasi: parseFloat(kiasi.value),
        aina: aina.value,
        maelezo: maelezo.value || '',
        tarehe: new Date().toLocaleDateString('sw-TZ')
    });
    localStorage.setItem('familyBudget', JSON.stringify(budget));
    
    jina.value = '';
    kiasi.value = '';
    maelezo.value = '';
    
    onyeshaBudget();
    onyeshaArifa("Mchango/Matumizi yameongezwa!", "success");
}

function onyeshaBudget() {
    const budgetList = document.getElementById('budgetList');
    const totalIncomeEl = document.getElementById('totalIncome');
    const totalExpenseEl = document.getElementById('totalExpense');
    const totalBalanceEl = document.getElementById('totalBalance');
    
    if(!budgetList) return;
    
    let budget = JSON.parse(localStorage.getItem('familyBudget') || '[]');
    let totalIncome = 0;
    let totalExpense = 0;
    
    let html = '';
    for(let i = 0; i < budget.length; i++) {
        const item = budget[i];
        if(item.aina === 'income') {
            totalIncome += item.kiasi;
        } else {
            totalExpense += item.kiasi;
        }
        
        html += '<div class="budget-item ' + item.aina + '">' +
            '<div class="budget-info">' +
            '<div class="budget-name">' + item.jina + '</div>' +
            '<div class="budget-desc">' + (item.maelezo || '') + '</div>' +
            '<div class="budget-date">' + item.tarehe + '</div>' +
            '</div>' +
            '<div class="budget-amount ' + item.aina + '">' + (item.aina === 'income' ? '+' : '-') + ' ' + item.kiasi.toLocaleString() + ' TZS</div>' +
            '<button class="budget-delete" onclick="futaBudget(' + item.id + ')">Futa</button>' +
            '</div>';
    }
    
    if(budget.length === 0) {
        html = '<p style="text-align:center;">Hakuna michango au matumizi bado.</p>';
    }
    
    budgetList.innerHTML = html;
    if(totalIncomeEl) totalIncomeEl.innerText = totalIncome.toLocaleString() + ' TZS';
    if(totalExpenseEl) totalExpenseEl.innerText = totalExpense.toLocaleString() + ' TZS';
    if(totalBalanceEl) totalBalanceEl.innerText = (totalIncome - totalExpense).toLocaleString() + ' TZS';
}

function futaBudget(id) {
    if(confirm("Je, una uhakika unataka kufuta hii?")) {
        let budget = JSON.parse(localStorage.getItem('familyBudget') || '[]');
        budget = budget.filter(item => item.id !== id);
        localStorage.setItem('familyBudget', JSON.stringify(budget));
        onyeshaBudget();
        onyeshaArifa("Imefutwa kikamilifu!", "success");
    }
}

// ==================== RECIPES FUNCTIONS ====================
function ongezaKichocheo() {
    const jina = document.getElementById('recipeName');
    const viungo = document.getElementById('recipeIngredients');
    const utayarishaji = document.getElementById('recipeMethod');
    
    if(!jina.value || !viungo.value || !utayarishaji.value) {
        alert("Tafadhali jaza jina, viungo na utayarishaji!");
        return;
    }
    
    let recipes = JSON.parse(localStorage.getItem('familyRecipes') || '[]');
    recipes.unshift({
        id: Date.now(),
        jina: jina.value,
        viungo: viungo.value,
        utayarishaji: utayarishaji.value,
        tarehe: new Date().toLocaleDateString('sw-TZ')
    });
    localStorage.setItem('familyRecipes', JSON.stringify(recipes));
    
    jina.value = '';
    viungo.value = '';
    utayarishaji.value = '';
    
    onyeshaRecipes();
    onyeshaArifa("Kichocheo kimeongezwa!", "success");
}

function onyeshaRecipes() {
    const recipesGrid = document.getElementById('recipesGrid');
    if(!recipesGrid) return;
    
    let recipes = JSON.parse(localStorage.getItem('familyRecipes') || '[]');
    
    if(recipes.length === 0) {
        recipesGrid.innerHTML = '<div class="recipe-card"><p>Hakuna mapishi bado. Shiriki kichocheo chako!</p></div>';
        return;
    }
    
    let html = '';
    for(let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        html += '<div class="recipe-card">' +
            '<h3>' + recipe.jina + '</h3>' +
            '<h4>Viungo:</h4>' +
            '<p>' + recipe.viungo + '</p>' +
            '<h4>Utayarishaji:</h4>' +
            '<p>' + recipe.utayarishaji + '</p>' +
            '<small>Imetumwa: ' + recipe.tarehe + '</small>' +
            '<button class="delete-btn" style="margin-top:10px;" onclick="futaKichocheo(' + recipe.id + ')">Futa</button>' +
            '</div>';
    }
    recipesGrid.innerHTML = html;
}

function futaKichocheo(id) {
    if(confirm("Je, una uhakika unataka kufuta kichocheo hiki?")) {
        let recipes = JSON.parse(localStorage.getItem('familyRecipes') || '[]');
        recipes = recipes.filter(recipe => recipe.id !== id);
        localStorage.setItem('familyRecipes', JSON.stringify(recipes));
        onyeshaRecipes();
        onyeshaArifa("Kichocheo kimefutwa!", "success");
    }
}

// ==================== POLLS FUNCTIONS ====================
let activePolls = [];

function undaKura() {
    const swali = document.getElementById('pollQuestion');
    const chaguo1 = document.getElementById('pollOption1');
    const chaguo2 = document.getElementById('pollOption2');
    const chaguo3 = document.getElementById('pollOption3');
    
    if(!swali.value || !chaguo1.value || !chaguo2.value) {
        alert("Tafadhali jaza swali na angalau chaguo mbili!");
        return;
    }
    
    let chaguzi = [chaguo1.value, chaguo2.value];
    if(chaguo3.value) chaguzi.push(chaguo3.value);
    
    let polls = JSON.parse(localStorage.getItem('familyPolls') || '[]');
    polls.unshift({
        id: Date.now(),
        swali: swali.value,
        chaguzi: chaguzi,
        kura: new Array(chaguzi.length).fill(0),
        tarehe: new Date().toLocaleDateString('sw-TZ')
    });
    localStorage.setItem('familyPolls', JSON.stringify(polls));
    
    swali.value = '';
    chaguo1.value = '';
    chaguo2.value = '';
    chaguo3.value = '';
    
    onyeshaPolls();
    onyeshaArifa("Kura mpya imeundwa!", "success");
}

function onyeshaPolls() {
    const pollsContainer = document.getElementById('activePolls');
    if(!pollsContainer) return;
    
    let polls = JSON.parse(localStorage.getItem('familyPolls') || '[]');
    
    if(polls.length === 0) {
        pollsContainer.innerHTML = '<div class="poll-card"><p>Hakuna kura zilizopo. Unda kura mpya!</p></div>';
        return;
    }
    
    let html = '';
    for(let i = 0; i < polls.length; i++) {
        const poll = polls[i];
        let totalVotes = poll.kura.reduce((a, b) => a + b, 0);
        
        html += '<div class="poll-card">' +
            '<h3>' + poll.swali + '</h3>';
        
        for(let j = 0; j < poll.chaguzi.length; j++) {
            let percentage = totalVotes > 0 ? (poll.kura[j] / totalVotes * 100).toFixed(1) : 0;
            html += '<div class="poll-option" onclick="pigaKura(' + poll.id + ', ' + j + ')">' +
                '<span>' + poll.chaguzi[j] + '</span>' +
                '<span class="votes">' + poll.kura[j] + ' kura (' + percentage + '%)</span>' +
                '</div>';
        }
        
        html += '<small>Iliundwa: ' + poll.tarehe + '</small>' +
            '<button class="delete-btn" style="margin-top:10px; display:block;" onclick="futaKura(' + poll.id + ')">Futa Kura</button>' +
            '</div>';
    }
    pollsContainer.innerHTML = html;
}

function pigaKura(pollId, optionIndex) {
    let polls = JSON.parse(localStorage.getItem('familyPolls') || '[]');
    const pollIndex = polls.findIndex(p => p.id === pollId);
    if(pollIndex !== -1) {
        polls[pollIndex].kura[optionIndex]++;
        localStorage.setItem('familyPolls', JSON.stringify(polls));
        onyeshaPolls();
        onyeshaArifa("Kura yako imepokelewa!", "success");
    }
}

function futaKura(pollId) {
    if(confirm("Je, una uhakika unataka kufuta kura hii?")) {
        let polls = JSON.parse(localStorage.getItem('familyPolls') || '[]');
        polls = polls.filter(poll => poll.id !== pollId);
        localStorage.setItem('familyPolls', JSON.stringify(polls));
        onyeshaPolls();
        onyeshaArifa("Kura imefutwa!", "success");
    }
}

// ==================== MEMORIES FUNCTIONS ====================
function ongezaKumbukumbu() {
    const title = document.getElementById('memoryTitle');
    const date = document.getElementById('memoryDate');
    const desc = document.getElementById('memoryDesc');
    
    if(!title.value || !date.value || !desc.value) {
        alert("Tafadhali jaza kichwa, tarehe na maelezo!");
        return;
    }
    
    let memories = JSON.parse(localStorage.getItem('familyMemories') || '[]');
    memories.unshift({
        id: Date.now(),
        kichwa: title.value,
        tarehe: date.value,
        maelezo: desc.value,
        imeongezwa: new Date().toLocaleDateString('sw-TZ')
    });
    localStorage.setItem('familyMemories', JSON.stringify(memories));
    
    title.value = '';
    date.value = '';
    desc.value = '';
    
    onyeshaMemories();
    onyeshaArifa("Kumbukumbu imeongezwa!", "success");
}

function onyeshaMemories() {
    const memoriesContainer = document.getElementById('memoriesTimeline');
    if(!memoriesContainer) return;
    
    let memories = JSON.parse(localStorage.getItem('familyMemories') || '[]');
    
    if(memories.length === 0) {
        memoriesContainer.innerHTML = '<div class="memory-card"><div class="memory-year">2026</div><div class="memory-content"><h3>Karibu</h3><p>Ongeza kumbukumbu zako za familia hapa.</p></div></div>';
        return;
    }
    
    let html = '';
    for(let i = 0; i < memories.length; i++) {
        const memory = memories[i];
        html += '<div class="memory-card">' +
            '<div class="memory-year">' + memory.tarehe.split('-')[0] + '</div>' +
            '<div class="memory-content">' +
            '<h3>' + memory.kichwa + '</h3>' +
            '<p>' + memory.maelezo + '</p>' +
            '<small>Imeongezwa: ' + memory.imeongezwa + '</small>' +
            '<button class="delete-btn" style="margin-top:10px;" onclick="futaKumbukumbu(' + memory.id + ')">Futa</button>' +
            '</div>' +
            '</div>';
    }
    memoriesContainer.innerHTML = html;
}

function futaKumbukumbu(id) {
    if(confirm("Je, una uhakika unataka kufuta kumbukumbu hii?")) {
        let memories = JSON.parse(localStorage.getItem('familyMemories') || '[]');
        memories = memories.filter(memory => memory.id !== id);
        localStorage.setItem('familyMemories', JSON.stringify(memories));
        onyeshaMemories();
        onyeshaArifa("Kumbukumbu imefutwa!", "success");
    }
}

// ==================== VIPENGELE VIPYA 5 ====================

// 1. MICHANGO (CONTRIBUTIONS)
function ongezaMchango() {
    const eventType = document.getElementById('eventType');
    const contributorName = document.getElementById('contributorName');
    const amount = document.getElementById('contributionAmount');
    const desc = document.getElementById('contributionDesc');
    
    if(!contributorName.value || !amount.value) {
        alert("Tafadhali jaza jina lako na kiasi cha mchango!");
        return;
    }
    
    let contributions = JSON.parse(localStorage.getItem('familyContributions') || '[]');
    contributions.unshift({
        id: Date.now(),
        eventType: eventType.value,
        name: contributorName.value,
        amount: parseFloat(amount.value),
        desc: desc.value || '',
        date: new Date().toLocaleDateString('sw-TZ')
    });
    localStorage.setItem('familyContributions', JSON.stringify(contributions));
    
    contributorName.value = '';
    amount.value = '';
    desc.value = '';
    
    onyeshaMichango();
    onyeshaArifa("Mchango wako umepokelewa! Asante!", "success");
}

function onyeshaMichango() {
    const contributionsList = document.getElementById('contributionsList');
    const totalContributionsEl = document.getElementById('totalContributions');
    
    if(!contributionsList) return;
    
    let contributions = JSON.parse(localStorage.getItem('familyContributions') || '[]');
    let total = 0;
    
    let html = '';
    for(let i = 0; i < contributions.length; i++) {
        const item = contributions[i];
        total += item.amount;
        
        let eventTypeText = '';
        switch(item.eventType) {
            case 'wedding': eventTypeText = 'Harusi'; break;
            case 'funeral': eventTypeText = 'Mazishi'; break;
            case 'medical': eventTypeText = 'Matibabu'; break;
            case 'education': eventTypeText = 'Elimu'; break;
            default: eventTypeText = 'Nyingine';
        }
        
        html += '<div class="contribution-item">' +
            '<div class="contribution-info">' +
            '<div class="contribution-name">' + item.name + '</div>' +
            '<div class="contribution-desc">' + eventTypeText + (item.desc ? ' - ' + item.desc : '') + '</div>' +
            '<div class="contribution-date">' + item.date + '</div>' +
            '</div>' +
            '<div class="contribution-amount">' + item.amount.toLocaleString() + ' TZS</div>' +
            '<button class="contribution-delete" onclick="futaMchango(' + item.id + ')">Futa</button>' +
            '</div>';
    }
    
    if(contributions.length === 0) {
        html = '<p style="text-align:center;">Hakuna michango bado. Kuwa wa kwanza kuchangia!</p>';
    }
    
    contributionsList.innerHTML = html;
    if(totalContributionsEl) totalContributionsEl.innerText = total.toLocaleString() + ' TZS';
}

function futaMchango(id) {
    if(confirm("Je, una uhakika unataka kufuta mchango huu?")) {
        let contributions = JSON.parse(localStorage.getItem('familyContributions') || '[]');
        contributions = contributions.filter(item => item.id !== id);
        localStorage.setItem('familyContributions', JSON.stringify(contributions));
        onyeshaMichango();
        onyeshaArifa("Mchango umefutwa!", "success");
    }
}

// 2. CHAT ROOM (MAZUNGUMZO)
let chatMessages = [];

function tumaUjumbeChat() {
    const messageInput = document.getElementById('chatMessageInput');
    const usernameInput = document.getElementById('chatUsername');
    
    if(!messageInput.value.trim()) {
        alert("Tafadhali andika ujumbe!");
        return;
    }
    
    let username = usernameInput.value.trim();
    if(!username || username === '') username = "Mtumiaji";
    
    let messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    messages.push({
        id: Date.now(),
        username: username,
        message: messageInput.value,
        time: new Date().toLocaleTimeString('sw-TZ')
    });
    
    if(messages.length > 100) messages = messages.slice(-100);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    
    messageInput.value = '';
    onyeshaChatMessages();
}

function onyeshaChatMessages() {
    const chatContainer = document.getElementById('chatMessages');
    if(!chatContainer) return;
    
    let messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    
    let html = '<div class="chat-message system">' +
        '<div class="sender">Mfumo</div>' +
        '<div class="message">Karibu kwenye mazungumzo ya familia!</div>' +
        '<div class="time">Sasa hivi</div>' +
        '</div>';
    
    for(let i = 0; i < messages.length; i++) {
        const msg = messages[i];
        html += '<div class="chat-message">' +
            '<div class="sender">' + msg.username + '</div>' +
            '<div class="message">' + msg.message + '</div>' +
            '<div class="time">' + msg.time + '</div>' +
            '</div>';
    }
    
    chatContainer.innerHTML = html;
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 3. MALENGO (GOALS)
function ongezaLengo() {
    const title = document.getElementById('goalTitle');
    const target = document.getElementById('goalTarget');
    const deadline = document.getElementById('goalDeadline');
    
    if(!title.value || !target.value) {
        alert("Tafadhali jaza kichwa na target ya lengo!");
        return;
    }
    
    let goals = JSON.parse(localStorage.getItem('familyGoals') || '[]');
    goals.unshift({
        id: Date.now(),
        title: title.value,
        target: parseFloat(target.value),
        current: 0,
        deadline: deadline.value || '',
        completed: false,
        date: new Date().toLocaleDateString('sw-TZ')
    });
    localStorage.setItem('familyGoals', JSON.stringify(goals));
    
    title.value = '';
    target.value = '';
    deadline.value = '';
    
    onyeshaMalengo();
    onyeshaArifa("Lengo limeongezwa!", "success");
}

function onyeshaMalengo() {
    const goalsList = document.getElementById('goalsList');
    const totalGoalsEl = document.getElementById('totalGoals');
    const completedGoalsEl = document.getElementById('completedGoals');
    const pendingGoalsEl = document.getElementById('pendingGoals');
    
    if(!goalsList) return;
    
    let goals = JSON.parse(localStorage.getItem('familyGoals') || '[]');
    let total = goals.length;
    let completed = goals.filter(g => g.completed).length;
    let pending = total - completed;
    
    if(totalGoalsEl) totalGoalsEl.innerText = total;
    if(completedGoalsEl) completedGoalsEl.innerText = completed;
    if(pendingGoalsEl) pendingGoalsEl.innerText = pending;
    
    let html = '';
    for(let i = 0; i < goals.length; i++) {
        const goal = goals[i];
        let progress = (goal.current / goal.target) * 100;
        if(goal.completed) progress = 100;
        
        html += '<div class="goal-item ' + (goal.completed ? 'completed' : '') + '">' +
            '<div class="goal-info">' +
            '<div class="goal-title">' + goal.title + '</div>' +
            '<div class="goal-amount">' + goal.current.toLocaleString() + ' / ' + goal.target.toLocaleString() + ' TZS</div>' +
            (goal.deadline ? '<div class="goal-date">Muda: ' + goal.deadline + '</div>' : '') +
            '<div class="goal-progress"><div class="goal-progress-bar" style="width: ' + progress + '%;"></div></div>' +
            '</div>' +
            '<div class="goal-actions">' +
            (!goal.completed ? '<button class="goal-add" onclick="ongezaMafanikioLengo(' + goal.id + ')">+ Ongeza</button>' : '') +
            '<button class="goal-delete" onclick="futaLengo(' + goal.id + ')">Futa</button>' +
            '</div>' +
            '</div>';
    }
    
    if(goals.length === 0) {
        html = '<p style="text-align:center;">Hakuna malengo bado. Weka lengo la familia!</p>';
    }
    
    goalsList.innerHTML = html;
}

function ongezaMafanikioLengo(goalId) {
    const amount = prompt("Kiasi ulichofanikiwa (TZS):");
    if(amount && !isNaN(amount) && parseFloat(amount) > 0) {
        let goals = JSON.parse(localStorage.getItem('familyGoals') || '[]');
        const index = goals.findIndex(g => g.id === goalId);
        if(index !== -1 && !goals[index].completed) {
            goals[index].current += parseFloat(amount);
            if(goals[index].current >= goals[index].target) {
                goals[index].completed = true;
                onyeshaArifa("Hongera! Lengo '" + goals[index].title + "' limekamilika!", "success");
            }
            localStorage.setItem('familyGoals', JSON.stringify(goals));
            onyeshaMalengo();
            onyeshaArifa("Mafanikio yameongezwa!", "success");
        }
    }
}

function futaLengo(id) {
    if(confirm("Je, una uhakika unataka kufuta lengo hili?")) {
        let goals = JSON.parse(localStorage.getItem('familyGoals') || '[]');
        goals = goals.filter(goal => goal.id !== id);
        localStorage.setItem('familyGoals', JSON.stringify(goals));
        onyeshaMalengo();
        onyeshaArifa("Lengo limefutwa!", "success");
    }
}

// 4. AFYA (HEALTH RECORDS)
function ongezaKumbukumbuAfya() {
    const member = document.getElementById('healthMember');
    const type = document.getElementById('healthType');
    const value = document.getElementById('healthValue');
    const date = document.getElementById('healthDate');
    const notes = document.getElementById('healthNotes');
    
    if(!member.value || !type.value || !value.value) {
        alert("Tafadhali jaza mwanafamilia, aina na thamani!");
        return;
    }
    
    let health = JSON.parse(localStorage.getItem('familyHealth') || '[]');
    health.unshift({
        id: Date.now(),
        member: member.value,
        type: type.value,
        value: value.value,
        date: date.value || new Date().toISOString().split('T')[0],
        notes: notes.value || '',
        recorded: new Date().toLocaleDateString('sw-TZ')
    });
    localStorage.setItem('familyHealth', JSON.stringify(health));
    
    member.value = '';
    type.value = '';
    value.value = '';
    date.value = '';
    notes.value = '';
    
    onyeshaAfya();
    onyeshaArifa("Kumbukumbu ya afya imeongezwa!", "success");
}

function onyeshaAfya() {
    const healthRecords = document.getElementById('healthRecords');
    if(!healthRecords) return;
    
    let health = JSON.parse(localStorage.getItem('familyHealth') || '[]');
    
    let html = '';
    for(let i = 0; i < health.length; i++) {
        const record = health[i];
        html += '<div class="health-record">' +
            '<div class="health-info">' +
            '<div class="health-member">' + record.member + '</div>' +
            '<div class="health-type">' + record.type + ': <span class="health-value">' + record.value + '</span></div>' +
            '<div class="health-date">' + record.date + '</div>' +
            (record.notes ? '<div class="health-notes">' + record.notes + '</div>' : '') +
            '</div>' +
            '<button class="health-delete" onclick="futaKumbukumbuAfya(' + record.id + ')">Futa</button>' +
            '</div>';
    }
    
    if(health.length === 0) {
        html = '<p style="text-align:center;">Hakuna kumbukumbu za afya bado. Ongeza taarifa za afya!</p>';
    }
    
    healthRecords.innerHTML = html;
}

function futaKumbukumbuAfya(id) {
    if(confirm("Je, una uhakika unataka kufuta kumbukumbu hii?")) {
        let health = JSON.parse(localStorage.getItem('familyHealth') || '[]');
        health = health.filter(record => record.id !== id);
        localStorage.setItem('familyHealth', JSON.stringify(health));
        onyeshaAfya();
        onyeshaArifa("Kumbukumbu ya afya imefutwa!", "success");
    }
}

// 5. SIKU MUHIMU (IMPORTANT DATES)
function ongezaSikuMuhimu() {
    const title = document.getElementById('eventTitle');
    const date = document.getElementById('eventDate');
    const category = document.getElementById('eventCategory');
    const desc = document.getElementById('eventDesc');
    
    if(!title.value || !date.value) {
        alert("Tafadhali jaza jina la tukio na tarehe!");
        return;
    }
    
    let events = JSON.parse(localStorage.getItem('importantDates') || '[]');
    events.unshift({
        id: Date.now(),
        title: title.value,
        date: date.value,
        category: category.value,
        desc: desc.value || '',
        added: new Date().toLocaleDateString('sw-TZ')
    });
    localStorage.setItem('importantDates', JSON.stringify(events));
    
    title.value = '';
    date.value = '';
    desc.value = '';
    
    onyeshaSikuMuhimu();
    checkUpcomingReminders();
    onyeshaArifa("Siku muhimu imeongezwa!", "success");
}

function onyeshaSikuMuhimu() {
    const datesList = document.getElementById('importantDatesList');
    if(!datesList) return;
    
    let events = JSON.parse(localStorage.getItem('importantDates') || '[]');
    
    let html = '';
    for(let i = 0; i < events.length; i++) {
        const event = events[i];
        let categoryClass = '';
        let categoryText = '';
        switch(event.category) {
            case 'wedding': categoryClass = 'wedding'; categoryText = 'Harusi'; break;
            case 'anniversary': categoryClass = 'anniversary'; categoryText = 'Kumbukumbu'; break;
            case 'graduation': categoryClass = 'graduation'; categoryText = 'Kuhitimu'; break;
            default: categoryClass = 'other'; categoryText = 'Nyingine';
        }
        
        html += '<div class="date-item">' +
            '<div class="date-info">' +
            '<div class="date-title">' + event.title + '</div>' +
            '<div class="date-date">' + event.date + '</div>' +
            (event.desc ? '<div class="date-desc">' + event.desc + '</div>' : '') +
            '<span class="date-category ' + categoryClass + '">' + categoryText + '</span>' +
            '</div>' +
            '<button class="date-delete" onclick="futaSikuMuhimu(' + event.id + ')">Futa</button>' +
            '</div>';
    }
    
    if(events.length === 0) {
        html = '<p style="text-align:center;">Hakuna siku muhimu zilizowekwa. Ongeza sherehe na matukio!</p>';
    }
    
    datesList.innerHTML = html;
}

function futaSikuMuhimu(id) {
    if(confirm("Je, una uhakika unataka kufuta siku hii muhimu?")) {
        let events = JSON.parse(localStorage.getItem('importantDates') || '[]');
        events = events.filter(event => event.id !== id);
        localStorage.setItem('importantDates', JSON.stringify(events));
        onyeshaSikuMuhimu();
        checkUpcomingReminders();
        onyeshaArifa("Siku muhimu imefutwa!", "success");
    }
}

function checkUpcomingReminders() {
    const remindersList = document.getElementById('upcomingReminders');
    if(!remindersList) return;
    
    let events = JSON.parse(localStorage.getItem('importantDates') || '[]');
    const today = new Date();
    const upcoming = [];
    
    for(let i = 0; i < events.length; i++) {
        const event = events[i];
        const eventDate = new Date(event.date);
        const daysLeft = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
        
        if(daysLeft >= 0 && daysLeft <= 30) {
            upcoming.push({
                title: event.title,
                days: daysLeft,
                date: event.date
            });
        }
    }
    
    upcoming.sort((a, b) => a.days - b.days);
    
    let html = '';
    for(let i = 0; i < upcoming.length; i++) {
        const reminder = upcoming[i];
        let message = '';
        if(reminder.days === 0) message = "LEO!";
        else if(reminder.days === 1) message = "KESHO!";
        else message = "Siku " + reminder.days + " zimebaki";
        
        html += '<div class="reminder-item">' +
            '<span>' + reminder.title + '</span>' +
            '<span class="reminder-days">' + message + '</span>' +
            '</div>';
    }
    
    if(upcoming.length === 0) {
        html = '<p>Hakuna kumbusho la siku muhimu karibu.</p>';
    }
    
    remindersList.innerHTML = html;
}

// ==================== EXPORT ALL DATA ====================
function exportFamilyData() {
    const data = {
        familia: dataFamilia,
        ujumbe: JSON.parse(localStorage.getItem('ujumbeFamilia') || '[]'),
        picha: JSON.parse(localStorage.getItem('pichaZaFamilia') || '[]'),
        matangazo: JSON.parse(localStorage.getItem('matangazoFamilia') || '[]'),
        budget: JSON.parse(localStorage.getItem('familyBudget') || '[]'),
        recipes: JSON.parse(localStorage.getItem('familyRecipes') || '[]'),
        polls: JSON.parse(localStorage.getItem('familyPolls') || '[]'),
        memories: JSON.parse(localStorage.getItem('familyMemories') || '[]'),
        contributions: JSON.parse(localStorage.getItem('familyContributions') || '[]'),
        chat: JSON.parse(localStorage.getItem('chatMessages') || '[]'),
        goals: JSON.parse(localStorage.getItem('familyGoals') || '[]'),
        health: JSON.parse(localStorage.getItem('familyHealth') || '[]'),
        importantDates: JSON.parse(localStorage.getItem('importantDates') || '[]'),
        pichaBackground: JSON.parse(localStorage.getItem('pichaZaAdmin') || '[]'),
        kichwa: localStorage.getItem('kichwaChaHabari') || '',
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'familia_data_' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    URL.revokeObjectURL(url);
    onyeshaArifa("Data zote zimepakuliwa kikamilifu!", "success");
}

// ==================== GALLERY FUNCTIONS ====================
let maxPicha = 100;
let selectedPhotos = [];
let selectModeActive = false;

function chaguaPicha() {
    const input = document.getElementById('pichaInput');
    if(input) input.click();
}

function pachiaPicha() {
    const pichaInput = document.getElementById('pichaInput');
    const files = pichaInput.files;
    const statusDiv = document.getElementById('uploadStatus');
    
    if(!files || files.length === 0) {
        if(statusDiv) {
            statusDiv.style.color = "#e74c3c";
            statusDiv.innerHTML = "Tafadhali chagua picha kwanza! Bonyeza 'Chagua Picha'";
        }
        return;
    }
    
    if(statusDiv) {
        statusDiv.style.color = "#3498db";
        statusDiv.innerHTML = "Inapakia picha " + files.length + "... Tafadhali subiri";
    }
    
    let uploadedCount = 0;
    let errors = [];
    let totalFiles = files.length;
    
    for(let i = 0; i < files.length; i++) {
        const file = files[i];
        
        if(file.size > 5 * 1024 * 1024) {
            errors.push(file.name + " ni kubwa sana (max 5MB)");
            uploadedCount++;
            checkIfComplete();
            continue;
        }
        
        if(!file.type.startsWith('image/')) {
            errors.push(file.name + " si picha halali");
            uploadedCount++;
            checkIfComplete();
            continue;
        }
        
        const reader = new FileReader();
        const fileId = Date.now() + '_' + i + '_' + Math.random().toString(36).substr(2, 9);
        
        reader.onload = (function(f, fid) {
            return function(e) {
                try {
                    let currentPicha = JSON.parse(localStorage.getItem('pichaZaFamilia') || '[]');
                    currentPicha.unshift({
                        id: fid,
                        data: e.target.result,
                        jina: f.name,
                        ukubwa: (f.size / 1024).toFixed(2) + " KB",
                        tarehe: new Date().toLocaleDateString('sw-TZ'),
                        muda: new Date().toISOString()
                    });
                    localStorage.setItem('pichaZaFamilia', JSON.stringify(currentPicha));
                    uploadedCount++;
                    checkIfComplete();
                } catch(err) {
                    errors.push(f.name + " - hitilafu ya kuhifadhi");
                    uploadedCount++;
                    checkIfComplete();
                }
            };
        })(file, fileId);
        
        reader.onerror = function() {
            errors.push(file.name + " - hitilafu ya kusoma faili");
            uploadedCount++;
            checkIfComplete();
        };
        
        reader.readAsDataURL(file);
    }
    
    function checkIfComplete() {
        if(uploadedCount === totalFiles) {
            let message = "";
            if(uploadedCount - errors.length > 0) {
                message = "Picha " + (uploadedCount - errors.length) + " zimepakiwa kikamilifu!";
                if(statusDiv) statusDiv.style.color = "#27ae60";
            }
            if(errors.length > 0) {
                message = "Imezopakwa: " + (uploadedCount - errors.length) + ". Hitilafu: " + errors.join(", ");
                if(statusDiv) statusDiv.style.color = "#e67e22";
            }
            if(statusDiv) statusDiv.innerHTML = message;
            
            pichaInput.value = '';
            onyeshaPichaZote();
            updateStats();
            
            setTimeout(() => {
                if(statusDiv) statusDiv.innerHTML = "";
            }, 5000);
        }
    }
}

function onyeshaPichaZote() {
    const galleryGrid = document.getElementById("galleryGrid");
    if(!galleryGrid) return;
    
    let pichaZilizopo = [];
    try {
        pichaZilizopo = JSON.parse(localStorage.getItem('pichaZaFamilia') || '[]');
    } catch(e) {
        pichaZilizopo = [];
    }
    
    let defaultImages = '<div class="gallery-item" onclick="funguaLightbox(\'images/eid.jpg\', \'Sikukuu ya Eid nyumbani Lindi.\')">' +
        '<img src="images/eid.jpg" alt="Eid Celebration"><div class="gallery-desc">Sikukuu ya Eid</div></div>' +
        '<div class="gallery-item" onclick="funguaLightbox(\'images/shamba.jpg\', \'Kilimo cha machungwa Lindi.\')">' +
        '<img src="images/shamba.jpg" alt="Shamba la Machungwa"><div class="gallery-desc">Kilimo cha Machungwa</div></div>' +
        '<div class="gallery-item" onclick="funguaLightbox(\'images/baba.jpg\', \'Mzee Idd akipumzika shambani.\')">' +
        '<img src="images/baba.jpg" alt="Mzee Idd"><div class="gallery-desc">Mzee Idd</div></div>' +
        '<div class="gallery-item" onclick="funguaLightbox(\'images/mama.jpg\', \'Mama Rukia akipika chakula.\')">' +
        '<img src="images/mama.jpg" alt="Mama Rukia"><div class="gallery-desc">Mama Rukia</div></div>';
    
    if(!pichaZilizopo || pichaZilizopo.length === 0) {
        galleryGrid.innerHTML = defaultImages;
        return;
    }
    
    let additionalImages = "";
    for(let i = 0; i < pichaZilizopo.length; i++) {
        const picha = pichaZilizopo[i];
        additionalImages += '<div class="gallery-item uploaded-item" data-id="' + picha.id + '">' +
            '<img src="' + picha.data + '" alt="Picha ya Familia" onclick="funguaLightbox(\'' + picha.data + '\', \'Picha: ' + (picha.jina || 'Picha kutoka familia') + ' - Iliyopakiwa: ' + picha.tarehe + '\')">' +
            '<div class="gallery-desc">' +
            '<span>' + (picha.jina ? (picha.jina.length > 20 ? picha.jina.substring(0, 20) + '...' : picha.jina) : 'Picha kutoka familia') + '</span>' +
            '<br><small>' + picha.tarehe + '</small>' +
            '<button class="delete-btn" onclick="futaPicha(\'' + picha.id + '\'); event.stopPropagation();">Futa</button>' +
            '</div></div>';
    }
    
    galleryGrid.innerHTML = defaultImages + additionalImages;
}

function futaPicha(pichaId) {
    if(confirm("Je, una uhakika unataka kufuta picha hii?")) {
        let pichaZilizopo = JSON.parse(localStorage.getItem('pichaZaFamilia') || '[]');
        let pichaMpya = pichaZilizopo.filter(picha => picha.id != pichaId);
        
        if(pichaMpya.length === pichaZilizopo.length) {
            alert("Picha haikupatikana!");
            return;
        }
        
        localStorage.setItem('pichaZaFamilia', JSON.stringify(pichaMpya));
        onyeshaPichaZote();
        updateStats();
        onyeshaArifa("Picha imefutwa!", "success");
    }
}

function futaPichaZote() {
    let pichaZilizopo = JSON.parse(localStorage.getItem('pichaZaFamilia') || '[]');
    
    if(pichaZilizopo.length === 0) {
        alert("Hakuna picha za kufuta!");
        return;
    }
    
    if(confirm("ONYO: Utafuta picha ZOTE " + pichaZilizopo.length + " zilizopakiwa! Je, una uhakika?")) {
        localStorage.removeItem('pichaZaFamilia');
        onyeshaPichaZote();
        updateStats();
        onyeshaArifa("Picha zote zimefutwa!", "success");
    }
}

function toggleSelectMode() {
    selectModeActive = !selectModeActive;
    const selectBtn = document.querySelector('.select-mode-btn');
    const bulkControls = document.getElementById('bulkDeleteControls');
    
    if(selectModeActive) {
        if(selectBtn) selectBtn.innerHTML = "Ghairi Uchaguzi";
        if(bulkControls) bulkControls.style.display = "block";
        
        const galleryItems = document.querySelectorAll('.uploaded-item');
        galleryItems.forEach(item => {
            item.style.cursor = "pointer";
            item.onclick = function(e) {
                if(e.target.classList && e.target.classList.contains('delete-btn')) return;
                e.stopPropagation();
                const id = this.getAttribute('data-id');
                toggleSelectPhoto(id);
            };
        });
    } else {
        cancelSelectMode();
        if(selectBtn) selectBtn.innerHTML = "Chagua Picha Nyingi";
        if(bulkControls) bulkControls.style.display = "none";
        
        const galleryItems = document.querySelectorAll('.uploaded-item');
        galleryItems.forEach(item => {
            item.style.cursor = "default";
            item.onclick = null;
        });
    }
}

function toggleSelectPhoto(pichaId) {
    const index = selectedPhotos.indexOf(pichaId);
    if(index === -1) {
        selectedPhotos.push(pichaId);
    } else {
        selectedPhotos.splice(index, 1);
    }
    
    const selectBtn = document.querySelector('.select-mode-btn');
    if(selectBtn && selectedPhotos.length > 0) {
        selectBtn.innerHTML = "Futa Zilizochaguliwa (" + selectedPhotos.length + ")";
    } else if(selectBtn) {
        selectBtn.innerHTML = "Chagua Picha Nyingi";
    }
    
    const galleryItems = document.querySelectorAll('.uploaded-item');
    galleryItems.forEach(item => {
        const id = item.getAttribute('data-id');
        if(selectedPhotos.includes(id)) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

function futaPichaZilizochaguliwa() {
    if(selectedPhotos.length === 0) {
        alert("Hakuna picha ulizochagua!");
        return;
    }
    
    if(confirm("Je, una uhakika unataka kufuta picha " + selectedPhotos.length + " zilizochaguliwa?")) {
        let pichaZilizopo = JSON.parse(localStorage.getItem('pichaZaFamilia') || '[]');
        let pichaMpya = pichaZilizopo.filter(picha => !selectedPhotos.includes(picha.id));
        
        localStorage.setItem('pichaZaFamilia', JSON.stringify(pichaMpya));
        selectedPhotos = [];
        selectModeActive = false;
        onyeshaPichaZote();
        updateStats();
        onyeshaArifa("Picha zilizochaguliwa zimefutwa!", "success");
        
        const selectBtn = document.querySelector('.select-mode-btn');
        if(selectBtn) selectBtn.innerHTML = "Chagua Picha Nyingi";
        
        const bulkControls = document.getElementById('bulkDeleteControls');
        if(bulkControls) bulkControls.style.display = "none";
    }
}

function cancelSelectMode() {
    selectedPhotos = [];
    selectModeActive = false;
    const selectBtn = document.querySelector('.select-mode-btn');
    if(selectBtn) selectBtn.innerHTML = "Chagua Picha Nyingi";
    
    const galleryItems = document.querySelectorAll('.uploaded-item');
    galleryItems.forEach(item => {
        item.classList.remove('selected');
        item.style.cursor = "default";
        item.onclick = null;
    });
}

// 14. PRINT PROFILE
function chapishaWasifu() {
    const jina = document.getElementById("profJina").innerText;
    const kazi = document.getElementById("profKazi").innerText;
    const kuzaliwa = document.getElementById("profKuzaliwa").innerText;
    const makazi = document.getElementById("profMakazi").innerText;
    const historia = document.getElementById("profHistoria").innerHTML;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<!DOCTYPE html>\n');
    printWindow.document.write('<html lang="sw">\n');
    printWindow.document.write('<head>\n');
    printWindow.document.write('<meta charset="UTF-8">\n');
    printWindow.document.write('<title>Wasifu wa ' + jina + '</title>\n');
    printWindow.document.write('<style>\n');
    printWindow.document.write('body { font-family: Arial, sans-serif; padding: 40px; }\n');
    printWindow.document.write('h1 { color: #2ecc71; }\n');
    printWindow.document.write('table { width: 100%; border-collapse: collapse; margin-top: 20px; }\n');
    printWindow.document.write('th { text-align: left; padding: 10px; background: #f0f0f0; width: 30%; }\n');
    printWindow.document.write('td { padding: 10px; border-bottom: 1px solid #ddd; }\n');
    printWindow.document.write('.footer { margin-top: 40px; text-align: center; color: #777; }\n');
    printWindow.document.write('</style>\n');
    printWindow.document.write('</head>\n');
    printWindow.document.write('<body>\n');
    printWindow.document.write('<h1>' + jina + '</h1>\n');
    printWindow.document.write('<tr>\n');
    printWindow.document.write('<tr><th>Kazi</th><td>' + kazi + 'NonNullPrivate=');
    printWindow.document.write('<tr><th>Tarehe ya Kuzaliwa</th><td>' + kuzaliwa + 'NonNullPrivate=');
    printWindow.document.write('<tr><th>Mahali anapoishi</th><td>' + makazi + 'NonNullPrivate=');
    printWindow.document.write('<td><th>Historia</th><td>' + historia + 'NonNullPrivate=');
    printWindow.document.write('<table>\n');
    printWindow.document.write('<div class="footer">\n');
    printWindow.document.write('<p>Familia ya Mzee Idd Samihu - Lindi, Tanzania</p>\n');
    printWindow.document.write('<p>Imechapishwa: ' + new Date().toLocaleDateString('sw-TZ') + '</p>\n');
    printWindow.document.write('</div>\n');
    printWindow.document.write('</body>\n');
    printWindow.document.write('</html>\n');
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
}

// 15. DARK MODE
function badiliMuonekano() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("rangiWebsite", document.body.classList.contains("dark-mode") ? "giza" : "mchana");
}

// 16. ZOOM TREE FUNCTIONS
let treeZoom = 1;
function zoomTree(direction) {
    const treeContainer = document.getElementById("treeContainer");
    if(!treeContainer) return;
    
    if(direction === 'in') {
        treeZoom += 0.1;
    } else if(direction === 'out') {
        treeZoom -= 0.1;
    }
    
    treeZoom = Math.min(Math.max(treeZoom, 0.5), 1.5);
    treeContainer.style.transform = 'scale(' + treeZoom + ')';
    treeContainer.style.transformOrigin = 'center top';
}

function resetTree() {
    treeZoom = 1;
    const treeContainer = document.getElementById("treeContainer");
    if(treeContainer) {
        treeContainer.style.transform = 'scale(1)';
    }
}

// 17. UPDATE STATISTICS
function updateStats() {
    const familiaCount = document.getElementById("familiaCount");
    const pichaCount = document.getElementById("pichaCount");
    const ujumbeCount = document.getElementById("ujumbeCount");
    const matukioCount = document.getElementById("matukioCount");
    
    if(familiaCount) familiaCount.innerText = Object.keys(dataFamilia).length;
    
    let pichaZilizopo = [];
    try {
        pichaZilizopo = JSON.parse(localStorage.getItem('pichaZaFamilia') || '[]');
    } catch(e) { pichaZilizopo = []; }
    if(pichaCount) pichaCount.innerText = pichaZilizopo.length;
    
    let ujumbeZilizopo = [];
    try {
        ujumbeZilizopo = JSON.parse(localStorage.getItem('ujumbeFamilia') || '[]');
    } catch(e) { ujumbeZilizopo = []; }
    if(ujumbeCount) ujumbeCount.innerText = ujumbeZilizopo.length;
    
    if(matukioCount) {
        const leo = new Date();
        let upcomingCount = 0;
        for(let key in dataFamilia) {
            const mtu = dataFamilia[key];
            const birthParts = mtu.kuzaliwa.split(" ");
            const birthDay = parseInt(birthParts[0]);
            const birthMonth = getMonthNumber(birthParts[1]);
            let birthDate = new Date(leo.getFullYear(), birthMonth, birthDay);
            if(birthDate < leo) birthDate = new Date(leo.getFullYear() + 1, birthMonth, birthDay);
            const sikuZilizobaki = Math.ceil((birthDate - leo) / (1000 * 60 * 60 * 24));
            if(sikuZilizobaki <= 30) upcomingCount++;
        }
        matukioCount.innerText = upcomingCount;
    }
}

// 18. BACKUP AND RESTORE
function downloadData() {
    const data = {
        familia: dataFamilia,
        ujumbe: JSON.parse(localStorage.getItem('ujumbeFamilia') || '[]'),
        picha: JSON.parse(localStorage.getItem('pichaZaFamilia') || '[]'),
        matangazo: JSON.parse(localStorage.getItem('matangazoFamilia') || '[]'),
        budget: JSON.parse(localStorage.getItem('familyBudget') || '[]'),
        recipes: JSON.parse(localStorage.getItem('familyRecipes') || '[]'),
        polls: JSON.parse(localStorage.getItem('familyPolls') || '[]'),
        memories: JSON.parse(localStorage.getItem('familyMemories') || '[]'),
        contributions: JSON.parse(localStorage.getItem('familyContributions') || '[]'),
        chat: JSON.parse(localStorage.getItem('chatMessages') || '[]'),
        goals: JSON.parse(localStorage.getItem('familyGoals') || '[]'),
        health: JSON.parse(localStorage.getItem('familyHealth') || '[]'),
        importantDates: JSON.parse(localStorage.getItem('importantDates') || '[]'),
        pichaBackground: JSON.parse(localStorage.getItem('pichaZaAdmin') || '[]'),
        kichwa: localStorage.getItem('kichwaChaHabari') || ''
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'familia_backup_' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    URL.revokeObjectURL(url);
    onyeshaArifa("Backup imepakuliwa kikamilifu!", "success");
}

function restoreData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const data = JSON.parse(evt.target.result);
                if(data.ujumbe) localStorage.setItem('ujumbeFamilia', JSON.stringify(data.ujumbe));
                if(data.picha) localStorage.setItem('pichaZaFamilia', JSON.stringify(data.picha));
                if(data.matangazo) localStorage.setItem('matangazoFamilia', JSON.stringify(data.matangazo));
                if(data.budget) localStorage.setItem('familyBudget', JSON.stringify(data.budget));
                if(data.recipes) localStorage.setItem('familyRecipes', JSON.stringify(data.recipes));
                if(data.polls) localStorage.setItem('familyPolls', JSON.stringify(data.polls));
                if(data.memories) localStorage.setItem('familyMemories', JSON.stringify(data.memories));
                if(data.contributions) localStorage.setItem('familyContributions', JSON.stringify(data.contributions));
                if(data.chat) localStorage.setItem('chatMessages', JSON.stringify(data.chat));
                if(data.goals) localStorage.setItem('familyGoals', JSON.stringify(data.goals));
                if(data.health) localStorage.setItem('familyHealth', JSON.stringify(data.health));
                if(data.importantDates) localStorage.setItem('importantDates', JSON.stringify(data.importantDates));
                if(data.pichaBackground) localStorage.setItem('pichaZaAdmin', JSON.stringify(data.pichaBackground));
                if(data.kichwa) {
                    localStorage.setItem('kichwaChaHabari', data.kichwa);
                    const allTitles = document.querySelectorAll("h1");
                    allTitles.forEach(title => { title.innerText = data.kichwa; });
                }
                onyeshaArifa("Data imerejeshwa kikamilifu! Tafadhali refresh ukurasa.", "success");
                setTimeout(() => location.reload(), 2000);
            } catch(err) {
                alert("Hitilafu katika kurejesha backup: " + err.message);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// ==========================================================================
// 19. VIPENGELE VYA ZIADA - UHIFADHI NA UTHIBITI WA PICHA
// ==========================================================================

// FUNCTION: Hifadhi picha kwenye localStorage kwa usalama
function hifadhiPichaKwaUsalama(pichaData) {
    try {
        let pichaZilizopo = JSON.parse(localStorage.getItem('pichaZaFamilia') || '[]');
        const ipo = pichaZilizopo.some(p => p.id === pichaData.id);
        if(!ipo) {
            pichaZilizopo.unshift(pichaData);
            localStorage.setItem('pichaZaFamilia', JSON.stringify(pichaZilizopo));
            return true;
        }
        return false;
    } catch(e) {
        console.error("Hitilafu ya kuhifadhi picha:", e);
        return false;
    }
}

// FUNCTION: Pata picha zote kutoka localStorage
function pataPichaZote() {
    try {
        return JSON.parse(localStorage.getItem('pichaZaFamilia') || '[]');
    } catch(e) {
        console.error("Hitilafu ya kusoma picha:", e);
        return [];
    }
}

// FUNCTION: Angalia kama localStorage ina nafasi (quota)
function angaliaNafasiLocalStorage() {
    try {
        const test = 'test_' + Date.now();
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return { available: true, message: "Nafasi inapatikana" };
    } catch(e) {
        if(e.name === 'QuotaExceededError') {
            return { available: false, message: "Nafasi imejaa! Futa baadhi ya picha." };
        }
        return { available: false, message: "LocalStorage haifanyi kazi." };
    }
}

// FUNCTION: Futa picha za zamani zaidi (zaidi ya siku 30)
function futaPichaZamani(siku = 30) {
    let pichaZilizopo = pataPichaZote();
    const sasa = new Date();
    const pichaMpya = pichaZilizopo.filter(picha => {
        const mudaPicha = new Date(picha.muda);
        const sikuZilizopita = (sasa - mudaPicha) / (1000 * 60 * 60 * 24);
        return sikuZilizopita <= siku;
    });
    
    if(pichaMpya.length !== pichaZilizopo.length) {
        localStorage.setItem('pichaZaFamilia', JSON.stringify(pichaMpya));
        onyeshaArifa("Picha za zamani zaidi ya siku " + siku + " zimefutwa kiotomatiki!", "info");
        onyeshaPichaZote();
        updateStats();
    }
}

// FUNCTION: Hamisha picha (backup kabla ya kufuta)
function hamishaPichaKablaYaKufuta() {
    let pichaZilizopo = pataPichaZote();
    if(pichaZilizopo.length === 0) {
        alert("Hakuna picha za kuhamisha!");
        return;
    }
    
    const dataStr = JSON.stringify(pichaZilizopo, null, 2);
    const blob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'picha_zikusanywe_' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    URL.revokeObjectURL(url);
    onyeshaArifa("Backup ya picha zimepakuliwa kikamilifu!", "success");
}

// FUNCTION: Rejesha picha kutoka backup
function rejeshaPichaKutokaBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const pichaZilizorejeshwa = JSON.parse(evt.target.result);
                if(Array.isArray(pichaZilizorejeshwa)) {
                    let pichaZilizopo = pataPichaZote();
                    let pichaMpya = [...pichaZilizorejeshwa, ...pichaZilizopo];
                    
                    pichaMpya = pichaMpya.filter((picha, index, self) => 
                        index === self.findIndex(p => p.id === picha.id)
                    );
                    
                    localStorage.setItem('pichaZaFamilia', JSON.stringify(pichaMpya));
                    onyeshaPichaZote();
                    updateStats();
                    onyeshaArifa("Picha " + pichaZilizorejeshwa.length + " zimerejeshwa kikamilifu!", "success");
                } else {
                    alert("Faili si sahihi!");
                }
            } catch(err) {
                alert("Hitilafu katika kurejesha backup: " + err.message);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// FUNCTION: Onyesha idadi ya picha zilizohifadhiwa
function onyeshaTakwimuZaPicha() {
    let pichaZilizopo = pataPichaZote();
    let jumlaUkubwa = 0;
    
    for(let i = 0; i < pichaZilizopo.length; i++) {
        const ukubwa = pichaZilizopo[i].data.length;
        jumlaUkubwa += ukubwa;
    }
    
    const ukubwaMB = (jumlaUkubwa / (1024 * 1024)).toFixed(2);
    const ujumbe = `Picha zilizohifadhiwa: ${pichaZilizopo.length}\nUkubwa: ${ukubwaMB} MB`;
    
    if(confirm(ujumbe + "\n\nJe, unataka kufuta picha za zamani zaidi ya siku 30?")) {
        futaPichaZamani(30);
    }
}

// FUNCTION: Angalia na kurekebisha localStorage ikiwa imeharibika
function rekebishaLocalStorage() {
    try {
        const keys = ['pichaZaFamilia', 'ujumbeFamilia', 'matangazoFamilia', 'familyBudget', 'familyRecipes', 'familyPolls', 'familyMemories', 'familyContributions', 'chatMessages', 'familyGoals', 'familyHealth', 'importantDates'];
        
        for(let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const data = localStorage.getItem(key);
            if(data) {
                try {
                    JSON.parse(data);
                } catch(e) {
                    console.warn(`Data ya ${key} imeharibika, inarekebishwa...`);
                    localStorage.setItem(key, JSON.stringify([]));
                }
            } else {
                localStorage.setItem(key, JSON.stringify([]));
            }
        }
        onyeshaArifa("LocalStorage imerekebishwa kikamilifu!", "success");
    } catch(e) {
        console.error("Hitilafu katika kurekebisha localStorage:", e);
    }
}

// FUNCTION: Futa cache ya picha za background
function futaCacheBackground() {
    if(confirm("Je, una uhakika unataka kufuta picha zote za background?")) {
        localStorage.removeItem('pichaZaAdmin');
        pichaZaBackground = ["images/mypic.jpg", "images/mypic1.jpeg", "images/mypic2.jpeg"];
        index = 0;
        onyeshaArifa("Cache ya picha za background imefutwa!", "success");
        badilishaPicha();
    }
}

// Ongeza buttons za ziada kwenye admin panel
function ongezaButtonsZaZiadaAdmin() {
    const adminActions = document.querySelector('.admin-actions');
    if(adminActions && !document.getElementById('backupPhotosBtn')) {
        const backupPhotosBtn = document.createElement('button');
        backupPhotosBtn.id = 'backupPhotosBtn';
        backupPhotosBtn.className = 'admin-backup';
        backupPhotosBtn.innerHTML = 'Hifadhi Picha';
        backupPhotosBtn.onclick = function() { hamishaPichaKablaYaKufuta(); };
        
        const restorePhotosBtn = document.createElement('button');
        restorePhotosBtn.id = 'restorePhotosBtn';
        restorePhotosBtn.className = 'admin-restore';
        restorePhotosBtn.innerHTML = 'Rejesha Picha';
        restorePhotosBtn.onclick = function() { rejeshaPichaKutokaBackup(); };
        
        const statsPhotosBtn = document.createElement('button');
        statsPhotosBtn.id = 'statsPhotosBtn';
        statsPhotosBtn.className = 'admin-save';
        statsPhotosBtn.innerHTML = 'Takwimu za Picha';
        statsPhotosBtn.onclick = function() { onyeshaTakwimuZaPicha(); };
        
        adminActions.appendChild(backupPhotosBtn);
        adminActions.appendChild(restorePhotosBtn);
        adminActions.appendChild(statsPhotosBtn);
    }
}

// ==========================================================================
// 20. INITIALIZE - KUANZISHA KILA KITU
// ==========================================================================
window.onload = function() {
    if (localStorage.getItem("pichaZaAdmin")) {
        const savedImages = JSON.parse(localStorage.getItem("pichaZaAdmin"));
        pichaZaBackground = pichaZaBackground.concat(savedImages);
    }
    
    if (localStorage.getItem("kichwaChaHabari")) {
        const savedTitle = localStorage.getItem("kichwaChaHabari");
        const allTitles = document.querySelectorAll("h1");
        allTitles.forEach(title => { title.innerText = savedTitle; });
    }
    
    if (localStorage.getItem("rangiWebsite") === "giza") {
        document.body.classList.add("dark-mode");
    }
    
    kaguaBirthdays();
    onyeshaUjumbe();
    badilishaPicha();
    onyeshaPichaZote();
    updateStats();
    loadAnnouncements();
    buildCalendar();
    onyeshaBudget();
    onyeshaRecipes();
    onyeshaPolls();
    onyeshaMemories();
    onyeshaHaliYaHewa();
    onyeshaMichango();
    onyeshaChatMessages();
    onyeshaMalengo();
    onyeshaAfya();
    onyeshaSikuMuhimu();
    checkUpcomingReminders();
    
    // Angalia nafasi ya localStorage
    const nafasi = angaliaNafasiLocalStorage();
    if(!nafasi.available) {
        onyeshaArifa(nafasi.message, "warning");
    }
    
    // Rekebisha localStorage kama inahitajika
    rekebishaLocalStorage();
    
    // Onyesha takwimu za picha
    let pichaZilizopo = pataPichaZote();
    if(pichaZilizopo.length > 50) {
        onyeshaArifa("Una picha " + pichaZilizopo.length + "! Futa baadhi ili kuokoa nafasi.", "reminder");
    }
    
    // Ongeza buttons za ziada kwenye admin panel
    setTimeout(function() {
        ongezaButtonsZaZiadaAdmin();
    }, 1000);
    
    setInterval(badilishaPicha, 5000);
    setInterval(kaguaBirthdays, 3600000);
    setInterval(function() {
        onyeshaChatMessages();
        checkUpcomingReminders();
    }, 10000);
    
    onyeshaPage('home');
};