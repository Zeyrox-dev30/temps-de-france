// 1. Gestion du Portail des Grands Thèmes
function showThemesPortal() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('portail').classList.add('active');
    
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) bottomNav.style.display = 'none';
    const backBtn = document.getElementById('back-themes-btn');
    if (backBtn) backBtn.style.display = 'none';

    document.getElementById('header-title').innerText = "Histoire de France";
    document.getElementById('header-subtitle').innerText = "Choisissez un thème à explorer";
        if (typeof arcadeInterval !== 'undefined' && arcadeInterval) clearInterval(arcadeInterval);
    const recBadge = document.getElementById('arcade-record-badge');
    if (recBadge) recBadge.innerText = `Record : ${localStorage.getItem('memoire_arcade_record') || 0}`;

    const themesList = document.getElementById('themes-list');
    if (!themesList) return;

       themesList.innerHTML = Object.values(themesData)
        .sort((a, b) => (a.ordre || 99) - (b.ordre || 99))
        .map(theme => {

        const readCourses = JSON.parse(localStorage.getItem(`memoire_read_${theme.id}`) || "[]");
        const pct = theme.cours.length > 0 ? Math.round((readCourses.length / theme.cours.length) * 100) : 0;
        return `
            <div class="card" style="cursor: pointer;" onclick="selectTheme('${theme.id}')">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="date-badge">${theme.periode}</span>
                    <span style="font-size: 0.85rem; font-weight: bold; color: var(--accent);">${pct}% complété</span>
                </div>
                <h3 style="margin: 6px 0; color: var(--primary);">${theme.icone} ${theme.titre}</h3>
                <p style="font-size: 0.9rem; margin-bottom: 10px;">${theme.description}</p>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${pct}%;"></div>
                </div>
            </div>
        `;
    }).join('');
    window.scrollTo(0, 0);
}

function selectTheme(themeId) {
    currentThemeId = themeId;
    appData = themesData[themeId];

    document.getElementById('header-title').innerText = appData.titre;
    document.getElementById('header-subtitle').innerText = appData.periode;
     document.getElementById('theme-welcome-desc').innerText = appData.description;

         const coursBtn = document.getElementById('home-cours-btn');
    if (coursBtn) {
        coursBtn.innerText = `📚 Les Cours (${appData.cours.length} chapitres)`;
    }

    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) bottomNav.style.display = 'flex';
    const backBtn = document.getElementById('back-themes-btn');
    if (backBtn) backBtn.style.display = 'block';

    renderContent();
    renderLexique();
    renderDashboardExtras();
    startQuiz(null);
    navigate('accueil');
}

// 2. Navigation entre les onglets d'un thème
function navigate(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active');
    const navBtn = document.getElementById('nav-' + viewId);
    if (navBtn) navBtn.classList.add('active');
    window.scrollTo(0, 0);
}

// 3. Affichage automatique des Cours, Biographies et Frise
function renderContent() {
    const readCourses = JSON.parse(localStorage.getItem(`memoire_read_${currentThemeId}`) || "[]");

    // Cours détaillés avec lecteur audio optionnel
    const coursList = document.getElementById('cours-list');
    if (coursList) {
        coursList.innerHTML = appData.cours.map(c => {
            const isRead = readCourses.includes(c.id);
            const paragraphes = c.contenu.map(p => `<p style="margin-bottom: 12px;">${p}</p>`).join('');
            const nbQuestions = appData.quiz.filter(q => q.coursId === c.id).length;
            
            const audioHtml = c.audio ? `
                <div class="audio-box">
                    <div class="audio-title">🎙️ ${c.audioTitre || "Archive sonore d'époque"}</div>
                    <audio controls class="audio-player" src="${c.audio}" onerror="this.parentElement.style.display='none'"></audio>
                </div>
            ` : '';

            return `
                <article class="card">
                    <span class="date-badge">${c.date}</span>
                    <h3 style="margin-bottom: 12px; color: var(--primary);">Chapitre ${c.id} : ${c.titre}</h3>
                    ${paragraphes}
                    ${audioHtml}
                    <button class="read-btn ${isRead ? 'done' : ''}" onclick="toggleCourseRead(${c.id})">
                        ${isRead ? '✅ Chapitre lu et validé' : '☑️ Marquer ce chapitre comme lu'}
                    </button>
                    ${nbQuestions > 0 ? `<button class="primary-btn" onclick="startQuiz(${c.id})">📝 Quiz du Chapitre ${c.id} (${nbQuestions} questions) ➔</button>` : ''}
                </article>
            `;
        }).join('');
    }

    

    const bioList = document.getElementById('bio-list');
    if (bioList) {
        bioList.innerHTML = appData.biographies.map(b => `
            <div class="card bio-card">
                <div class="bio-header">
                    <img src="${b.image}" alt="${b.nom}" class="bio-img" onerror="this.src='https://placeholder.com'">
                    <div class="bio-info">
                        <span class="date-badge" style="margin-bottom: 4px;">${b.role}</span>
                        <h3>${b.nom}</h3>
                    </div>
                </div>
                <p>${b.description}</p>
            </div>
        `).join('');
    }

    const timelineList = document.getElementById('timeline-list');
    if (timelineList && appData.frise) {
        timelineList.innerHTML = appData.frise.map(item => `
            <div class="timeline-item" onclick="this.classList.toggle('open')">
                <div class="timeline-dot"></div>
                <div class="timeline-header">
                    <div>
                        <span class="date-badge" style="margin-bottom: 4px;">${item.date}</span>
                        <h3 style="font-size: 1.05rem; color: var(--primary);">${item.titre}</h3>
                    </div>
                    <span class="timeline-arrow">▼</span>
                </div>
                <div class="timeline-details">
                    <p>${item.details}</p>
                </div>
            </div>
        `).join('');
    }

    updateBestScoreDisplay();
}

function updateBestScoreDisplay() {
    const best = localStorage.getItem(`memoire_best_${currentThemeId}`);
    const display = document.getElementById('best-score-display');
    if (!display) return;
    if (best !== null) {
        display.innerText = `🏆 Record au Quiz Général : ${best} / ${appData.quiz.length}`;
    } else {
        display.innerText = `🎯 Aucun quiz général terminé pour ce thème`;
    }
}
// 4. Moteur du Quiz
let activeQuestions = [];
let currentCoursId = null;
let currentQuestion = 0;
let score = 0;

function startQuiz(coursId = null) {
    currentCoursId = coursId;
    currentQuestion = 0;
    score = 0;

    if (coursId !== null) {
        activeQuestions = appData.quiz.filter(q => q.coursId === coursId);
    } else {
        activeQuestions = [...appData.quiz];
    }

    if (coursId !== null) navigate('quiz');
    renderQuizInterface();
    if (activeQuestions.length > 0) loadQuestion();
}

function renderQuizInterface() {
    const titreQuiz = currentCoursId 
        ? `Quiz — Chapitre ${currentCoursId}` 
        : `Grand Quiz Général (${appData.quiz.length} questions)`;

    const selectorHtml = `
        <div style="margin-bottom: 12px; display: flex; flex-wrap: wrap; gap: 6px;">
            <button onclick="startQuiz(null)" style="padding: 6px 10px; border-radius: 6px; border: 1px solid #cbd5e1; background: ${currentCoursId === null ? 'var(--accent)' : 'white'}; color: ${currentCoursId === null ? 'white' : '#0f172a'}; font-size: 0.8rem; cursor: pointer;">Tout (${appData.quiz.length})</button>
            ${appData.cours.map(c => `
                <button onclick="startQuiz(${c.id})" style="padding: 6px 10px; border-radius: 6px; border: 1px solid #cbd5e1; background: ${currentCoursId === c.id ? 'var(--accent)' : 'white'}; color: ${currentCoursId === c.id ? 'white' : '#0f172a'}; font-size: 0.8rem; cursor: pointer;">Chap. ${c.id}</button>
            `).join('')}
        </div>
    `;

    document.getElementById('quiz-container').innerHTML = `
        ${selectorHtml}
        <h3 style="margin-bottom: 10px; color: var(--primary);">${titreQuiz}</h3>
        <p id="question-text" style="font-weight: 600;"></p>
        <div id="options-container"></div>
        <p id="feedback-text"></p>
        <button id="next-btn" class="primary-btn" style="display:none;" onclick="nextQuestion()">Question suivante</button>
    `;
}

function loadQuestion() {
    const q = activeQuestions[currentQuestion];
    document.getElementById('question-text').innerText = `Question ${currentQuestion + 1}/${activeQuestions.length} : ${q.question}`;
    document.getElementById('feedback-text').innerText = "";
    document.getElementById('next-btn').style.display = "none";
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = "";
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    const q = activeQuestions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === q.answer) {
        btnElement.classList.add('correct');
        document.getElementById('feedback-text').innerText = "✅ Bonne réponse ! " + q.explanation;
        score++;
    } else {
        btnElement.classList.add('wrong');
        buttons[q.answer].classList.add('correct');
        document.getElementById('feedback-text').innerText = "❌ Faux. " + q.explanation;
    }
    document.getElementById('next-btn').style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < activeQuestions.length) {
        loadQuestion();
    } else {
        if (currentCoursId === null) {
            const previousBest = parseInt(localStorage.getItem(`memoire_best_${currentThemeId}`) || "0");
            if (score > previousBest) {
                localStorage.setItem(`memoire_best_${currentThemeId}`, score);
            }
            updateBestScoreDisplay();
            renderDashboardExtras();
        }

        document.getElementById('quiz-container').innerHTML = `
            <h3>Quiz terminé !</h3>
            <p style="margin: 12px 0; font-size: 1.1rem;">Votre score : <strong>${score} / ${activeQuestions.length}</strong></p>
            <button class="primary-btn" onclick="startQuiz(${currentCoursId})">Recommencer ce quiz</button>
            <button class="menu-btn" style="margin-top: 10px; text-align: center;" onclick="navigate('cours')">📚 Retourner aux cours</button>
        `;
    }
}

// 5. Lexique et Recherche
function renderLexique(filtre = "") {
    const lexiqueList = document.getElementById('lexique-list');
    if (!lexiqueList || !appData.lexique) return;

    const searchInput = document.getElementById('lexique-search');
    if (searchInput && filtre === "") searchInput.value = "";

    const terme = filtre.toLowerCase().trim();
    const resultats = appData.lexique.filter(item => 
        item.mot.toLowerCase().includes(terme) || 
        item.definition.toLowerCase().includes(terme)
    );

    if (resultats.length === 0) {
        lexiqueList.innerHTML = `<p style="text-align: center; color: #64748b; margin-top: 20px;">Aucun terme trouvé pour « ${filtre} ».</p>`;
        return;
    }

    lexiqueList.innerHTML = resultats.map(item => `
        <div class="card">
            <div class="lexique-term">${item.mot}</div>
            <p>${item.definition}</p>
        </div>
    `).join('');
}

function filterLexique() {
    const valeur = document.getElementById('lexique-search').value;
    renderLexique(valeur);
}

// 6. Progression, Badges et Archive du jour
function toggleCourseRead(coursId) {
    let readCourses = JSON.parse(localStorage.getItem(`memoire_read_${currentThemeId}`) || "[]");
    if (readCourses.includes(coursId)) {
        readCourses = readCourses.filter(id => id !== coursId);
    } else {
        readCourses.push(coursId);
    }
    localStorage.setItem(`memoire_read_${currentThemeId}`, JSON.stringify(readCourses));
    renderContent();
    renderDashboardExtras();
}

function renderDashboardExtras() {
    const archiveBox = document.getElementById('archive-du-jour');
    if (archiveBox && appData.archives && appData.archives.length > 0) {
        const rand = appData.archives[Math.floor(Math.random() * appData.archives.length)];
        archiveBox.innerHTML = `
            <div style="font-style: normal; font-size: 0.8rem; font-weight: bold; color: var(--accent); margin-bottom: 4px;">📜 ARCHIVE HISTORIQUE</div>
            <p style="margin-bottom: 6px;">${rand.texte}</p>
            <div style="font-style: normal; font-size: 0.8rem; color: #64748b;">— ${rand.auteur} (${rand.titre})</div>
        `;
    }

    const readCourses = JSON.parse(localStorage.getItem(`memoire_read_${currentThemeId}`) || "[]");
    const totalCourses = appData.cours.length;
    const pct = totalCourses > 0 ? Math.round((readCourses.length / totalCourses) * 100) : 0;
    
    const progressText = document.getElementById('progress-text');
    const progressFill = document.getElementById('progress-fill');
    if (progressText) progressText.innerText = `${readCourses.length} / ${totalCourses} lus (${pct}%)`;
    if (progressFill) progressFill.style.width = `${pct}%`;

    const bestScore = parseInt(localStorage.getItem(`memoire_best_${currentThemeId}`) || "0");
    const badgesList = [
        {
            icon: "📖",
            titre: "Apprenti Historien",
            desc: "Lire au moins 1 chapitre",
            unlocked: readCourses.length >= 1
        },
        {
            icon: "🏛️",
            titre: "Gardien de la Mémoire",
            desc: "Lire tous les chapitres",
            unlocked: readCourses.length === totalCourses && totalCourses > 0
        },
        {
            icon: "🎯",
            titre: "Élève Aguerri",
            desc: "Réussir 70% du Quiz Général",
            unlocked: bestScore >= Math.ceil(appData.quiz.length * 0.7) && appData.quiz.length > 0
        },
        {
            icon: "🏅",
            titre: "Maître du Thème",
            desc: "Score parfait (100%) au Quiz",
            unlocked: bestScore === appData.quiz.length && appData.quiz.length > 0
        }
    ];

    const badgesContainer = document.getElementById('badges-container');
    if (badgesContainer) {
        badgesContainer.innerHTML = badgesList.map(b => `
            <div class="badge-card ${b.unlocked ? 'unlocked' : ''}">
                <span class="badge-icon">${b.icon}</span>
                <div style="font-weight: bold; font-size: 0.9rem;">${b.titre}</div>
                <div style="font-size: 0.75rem; color: #64748b; margin-top: 3px;">${b.desc}</div>
            </div>
        `).join('');
    }
}

// 7. Mode Sombre
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('memoire_dark_mode', isDark ? '1' : '0');
    document.getElementById('theme-toggle').innerText = isDark ? '☀️' : '🌙';
}

function initTheme() {
    if (localStorage.getItem('memoire_dark_mode') === '1') {
        document.body.classList.add('dark-mode');
        const btn = document.getElementById('theme-toggle');
        if (btn) btn.innerText = '☀️';
    }
}

// Initialisation au démarrage sur le Portail des Thèmes
window.onload = function() {
    initTheme();
    showThemesPortal();
};
// 8. Encyclopédie des Dates Clés (Brevet & Bac)
let encycloFilterTheme = "all";
let isRevisionMode = false;

function openEncyclopedie() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('encyclopedie').classList.add('active');

    document.getElementById('header-title').innerText = "Dates Clés — Brevet & Bac";
    document.getElementById('header-subtitle').innerText = "Tous les repères chronologiques";
    
    const backBtn = document.getElementById('back-themes-btn');
    if (backBtn) backBtn.style.display = 'block';

    encycloFilterTheme = "all";
    renderEncyclopedieFilters();
    renderEncyclopedie();
    window.scrollTo(0, 0);
}

function renderEncyclopedieFilters() {
    const filtersBox = document.getElementById('encyclo-filters');
    if (!filtersBox) return;

    const themes = Object.values(themesData).sort((a, b) => (a.ordre || 99) - (b.ordre || 99));
    
    filtersBox.innerHTML = `
        <button class="chip-btn ${encycloFilterTheme === 'all' ? 'active' : ''}" onclick="setEncycloFilter('all')">Toutes les dates</button>
        ${themes.map(t => `
            <button class="chip-btn ${encycloFilterTheme === t.id ? 'active' : ''}" onclick="setEncycloFilter('${t.id}')">${t.icone} ${t.titre}</button>
        `).join('')}
    `;
}

function setEncycloFilter(themeId) {
    encycloFilterTheme = themeId;
    renderEncyclopedieFilters();
    renderEncyclopedie();
}

function toggleRevisionMode() {
    isRevisionMode = !isRevisionMode;
    const btn = document.getElementById('revision-mode-btn');
    if (btn) {
        btn.style.background = isRevisionMode ? 'var(--accent)' : 'transparent';
        btn.style.color = isRevisionMode ? 'white' : 'var(--accent)';
        btn.innerText = isRevisionMode ? '🙈 Masquer (Actif)' : '👁️ Mode Révision';
    }
    renderEncyclopedie();
}

function renderEncyclopedie() {
    const listBox = document.getElementById('encyclo-list');
    if (!listBox) return;

    const searchVal = (document.getElementById('encyclo-search')?.value || "").toLowerCase().trim();
    const themes = Object.values(themesData).sort((a, b) => (a.ordre || 99) - (b.ordre || 99));

    // Rassembler toutes les dates dans l'ordre chronologique des thèmes
    let allDates = [];
    themes.forEach(theme => {
        if (encycloFilterTheme === "all" || encycloFilterTheme === theme.id) {
            if (theme.frise) {
                theme.frise.forEach(item => {
                    allDates.push({
                        themeTitre: theme.titre,
                        themeIcone: theme.icone,
                        date: item.date,
                        titre: item.titre,
                        details: item.details
                    });
                });
            }
        }
    });

    // Filtrer selon la barre de recherche
    if (searchVal !== "") {
        allDates = allDates.filter(d => 
            d.date.toLowerCase().includes(searchVal) ||
            d.titre.toLowerCase().includes(searchVal) ||
            d.details.toLowerCase().includes(searchVal)
        );
    }

    if (allDates.length === 0) {
        listBox.innerHTML = `<p style="text-align: center; color: #64748b; margin-top: 20px;">Aucune date trouvée.</p>`;
        return;
    }

    listBox.innerHTML = allDates.map(d => `
        <div class="encyclo-card">
            <div class="encyclo-top">
                <span class="date-badge" style="margin: 0;">${d.date}</span>
                <span class="encyclo-theme-tag">${d.themeIcone} ${d.themeTitre}</span>
            </div>
            <div class="${isRevisionMode ? 'blurred-text' : ''}" onclick="this.classList.toggle('revealed')">
                <h3 style="font-size: 1.05rem; margin: 6px 0 4px 0; color: var(--primary);">${d.titre}</h3>
                <p style="font-size: 0.9rem; line-height: 1.45;">${d.details}</p>
            </div>
            ${isRevisionMode ? `<div style="font-size: 0.75rem; color: var(--accent); margin-top: 6px;">👆 Touchez le texte flouté pour vérifier votre réponse</div>` : ''}
        </div>
    `).join('');
}
// 9. Mode Défi Chrono 60 Secondes (Arcade multi-thèmes)
let arcadeQuestionsPool = [];
let arcadeScore = 0;
let arcadeTimeLeft = 60;
let arcadeInterval = null;

function startArcadeMode() {
    // Rassembler et mélanger toutes les questions des 7 thèmes
    arcadeQuestionsPool = [];
    Object.values(themesData).forEach(theme => {
        if (theme.quiz) {
            theme.quiz.forEach(q => {
                arcadeQuestionsPool.push({
                    ...q,
                    themeLabel: `${theme.icone} ${theme.titre}`
                });
            });
        }
    });
    arcadeQuestionsPool.sort(() => Math.random() - 0.5);

    arcadeScore = 0;
    arcadeTimeLeft = 60;

    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('arcade').classList.add('active');

    document.getElementById('header-title').innerText = "Défi Chrono 60s";
    document.getElementById('header-subtitle').innerText = "Toutes époques confondues";
    const backBtn = document.getElementById('back-themes-btn');
    if (backBtn) backBtn.style.display = 'block';

    // Réinitialiser l'interface
    document.getElementById('arcade-container').innerHTML = `
        <span id="arcade-theme-tag" class="date-badge">Thème</span>
        <p id="arcade-question" style="font-weight: 600; font-size: 1.05rem; margin: 8px 0 12px 0;"></p>
        <div id="arcade-options"></div>
    `;

    updateArcadeHud();
    loadNextArcadeQuestion();

    if (arcadeInterval) clearInterval(arcadeInterval);
    arcadeInterval = setInterval(() => {
        arcadeTimeLeft--;
        updateArcadeHud();
        if (arcadeTimeLeft <= 0) {
            endArcadeMode();
        }
    }, 1000);
}

function updateArcadeHud() {
    const timerEl = document.getElementById('arcade-timer');
    const scoreEl = document.getElementById('arcade-score');
    if (timerEl) {
        timerEl.innerText = `⏱️ ${arcadeTimeLeft}s`;
        if (arcadeTimeLeft <= 10) timerEl.classList.add('timer-danger');
        else timerEl.classList.remove('timer-danger');
    }
    if (scoreEl) scoreEl.innerText = `Score : ${arcadeScore}`;
}

function loadNextArcadeQuestion() {
    if (arcadeQuestionsPool.length === 0) {
        // Si toutes les questions ont été posées, on remélange
        Object.values(themesData).forEach(theme => {
            if (theme.quiz) {
                theme.quiz.forEach(q => arcadeQuestionsPool.push({ ...q, themeLabel: `${theme.icone} ${theme.titre}` }));
            }
        });
        arcadeQuestionsPool.sort(() => Math.random() - 0.5);
    }

    const q = arcadeQuestionsPool.pop();
    document.getElementById('arcade-theme-tag').innerText = q.themeLabel;
    document.getElementById('arcade-question').innerText = q.question;

    const optionsBox = document.getElementById('arcade-options');
    optionsBox.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkArcadeAnswer(idx, q.answer, btn);
        optionsBox.appendChild(btn);
    });
}

function checkArcadeAnswer(selected, correct, btnEl) {
    const buttons = document.querySelectorAll('#arcade-options .option-btn');
    buttons.forEach(b => b.disabled = true);

    if (selected === correct) {
        btnEl.classList.add('correct');
        arcadeScore++;
        updateArcadeHud();
    } else {
        btnEl.classList.add('wrong');
        buttons[correct].classList.add('correct');
    }

    // Passage automatique ultra-rapide à la question suivante (0.5 seconde)
    setTimeout(() => {
        if (arcadeTimeLeft > 0) loadNextArcadeQuestion();
    }, 500);
}

function endArcadeMode() {
    clearInterval(arcadeInterval);
    const oldRecord = parseInt(localStorage.getItem('memoire_arcade_record') || "0");
    let newRecordMsg = "";

    if (arcadeScore > oldRecord) {
        localStorage.setItem('memoire_arcade_record', arcadeScore);
        newRecordMsg = `<p style="color: var(--accent); font-weight: bold; margin-bottom: 10px;">🎉 NOUVEAU RECORD PERSONNEL !</p>`;
    }

    document.getElementById('arcade-container').innerHTML = `
        <h3 style="margin-bottom: 8px;">⏱️ Temps écoulé !</h3>
        ${newRecordMsg}
        <p style="font-size: 1.15rem; margin-bottom: 14px;">Bonnes réponses en 60s : <strong>${arcadeScore}</strong></p>
        <button class="primary-btn" onclick="startArcadeMode()">🔄 Rejouer le Défi Chrono</button>
        <button class="menu-btn" style="margin-top: 10px; text-align: center;" onclick="showThemesPortal()">🏠 Retour au Portail</button>
    `;
}

