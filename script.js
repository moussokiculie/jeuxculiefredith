/* =========================================================
   TypeRush — script.js
   Test de vitesse de frappe en JavaScript pur (aucune librairie)
   ========================================================= */

   (() => {
    'use strict';
  
    /* ---------- Banque de textes ----------
       Au moins 5 textes par niveau, entre 30 et 120 mots. */
    const TEXTS = {
      easy: [
        "Le chat dort sur le tapis pendant que le soleil brille à travers la fenêtre. Dans le jardin les fleurs poussent doucement et les oiseaux chantent chaque matin. La vie au village est calme et chaque jour ressemble un peu au précédent mais cela ne dérange personne ici.",
        "Mon frère aime jouer au ballon dans le parc avec ses amis tous les samedis. Ils courent partout et rient beaucoup. Après le match ils mangent une glace au chocolat à la fraise et parlent de leur prochaine partie de football le week end suivant.",
        "Hier soir nous avons regardé un film puis nous avons mangé du pop corn salé. Le film était drôle et tout le monde a beaucoup ri. Ensuite nous sommes allés nous promener dans la rue principale avant de rentrer se coucher tranquillement chez nous.",
        "Le matin je me lève tôt pour boire un café chaud avant de partir travailler. La route est calme et les rues sont encore vides. J'aime ce moment de la journée car il est paisible et me permet de bien commencer ma journée.",
        "Dans la cuisine ma mère prépare une soupe de légumes pour le repas du soir. Elle ajoute des carottes des pommes de terre et un peu de sel. Toute la maison sent bon et nous avons hâte de nous mettre à table tous ensemble.",
        "Pendant les vacances nous allons souvent à la plage pour nager dans la mer. Le sable est chaud sous nos pieds et l'eau est fraîche et agréable. Le soir nous regardons le coucher du soleil assis sur une grande serviette colorée."
      ],
      medium: [
        "L'apprentissage d'une nouvelle langue demande de la patience et une pratique régulière chaque jour. Il est important de lire, d'écouter et de parler le plus souvent possible pour progresser rapidement. Beaucoup de personnes utilisent des applications mobiles pour réviser leur vocabulaire pendant leurs trajets quotidiens, ce qui rend l'apprentissage plus accessible et flexible dans un emploi du temps chargé.",
        "La gestion du temps au travail reste un défi pour de nombreux employés dans des entreprises modernes. Planifier ses tâches à l'avance, hiérarchiser les priorités et éviter les distractions permet d'être plus efficace. Certaines méthodes comme la technique Pomodoro encouragent à travailler par courtes sessions concentrées suivies de pauses régulières, ce qui améliore la productivité globale sur la durée.",
        "Le réchauffement climatique affecte de plus en plus les écosystèmes naturels à travers le monde entier. Les glaciers fondent plus rapidement, le niveau des mers augmente et certaines espèces animales doivent migrer pour survivre. Les gouvernements et les citoyens sont appelés à réduire leur empreinte carbone en adoptant des comportements plus responsables au quotidien, notamment dans les transports et l'alimentation.",
        "Cuisiner ses propres repas permet souvent de mieux contrôler la qualité et la quantité des ingrédients utilisés. De plus en plus de personnes choisissent de privilégier les produits locaux et de saison pour soutenir les producteurs de leur région. Cette démarche favorise également une alimentation plus saine et plus respectueuse de l'environnement, tout en réduisant les déchets liés aux emballages industriels.",
        "Les réseaux sociaux ont profondément transformé la manière dont les gens communiquent et partagent des informations au quotidien. Ils permettent de rester en contact avec des amis éloignés, mais ils posent aussi des questions sur la vie privée et la désinformation. Il est donc essentiel de développer un esprit critique face aux contenus partagés en ligne, surtout chez les plus jeunes utilisateurs.",
        "Pratiquer une activité sportive régulièrement contribue grandement à améliorer la santé physique et mentale d'une personne. Courir, nager ou faire du vélo aide à réduire le stress et à renforcer le système cardiovasculaire sur le long terme. De nombreux experts recommandent au moins trente minutes d'exercice modéré chaque jour pour préserver un bon équilibre général dans la vie de tous les jours."
      ],
      hard: [
        "Le développement logiciel moderne repose souvent sur l'architecture en microservices, permettant de découpler les fonctionnalités d'une application en composants indépendants. Chaque service communique via des API REST ou des protocoles comme gRPC, et peut être déployé séparément grâce à des conteneurs Docker orchestrés par Kubernetes (v1.28+). Cette approche améliore la scalabilité, mais ajoute de la complexité au niveau du monitoring, de la latence réseau et de la gestion des erreurs distribuées.",
        "En 2026, la consommation énergétique mondiale a augmenté de 3,2% par rapport à l'année précédente, atteignant environ 620 exajoules selon les estimations préliminaires. Les énergies renouvelables (solaire, éolien, hydraulique) représentent désormais 31% du mix énergétique global, contre 27% en 2023. Toutefois, les combustibles fossiles — charbon, pétrole et gaz naturel — restent dominants, notamment dans les secteurs du transport lourd et de l'industrie manufacturière à forte intensité énergétique.",
        "L'algorithme de tri rapide (quicksort) possède une complexité moyenne de O(n log n), mais peut atteindre O(n²) dans le pire des cas, notamment lorsque le pivot est mal choisi sur des données déjà triées. Pour pallier ce problème, on utilise souvent une stratégie de pivot médian ou un choix aléatoire. D'autres algorithmes, comme le tri fusion, garantissent une complexité stable de O(n log n) au prix d'une consommation mémoire supplémentaire de O(n).",
        "Selon le rapport financier du troisième trimestre, le chiffre d'affaires de l'entreprise s'élève à 4,7 millions d'euros, soit une hausse de 12,5% par rapport au T2. Les charges d'exploitation ont quant à elles progressé de 8,3%, principalement en raison de l'augmentation des coûts logistiques (+15%) et des matières premières (+9,1%). La marge nette se stabilise donc à 18,2%, un chiffre jugé satisfaisant par les analystes financiers du secteur.",
        "Le système immunitaire humain repose sur deux mécanismes principaux : l'immunité innée, rapide mais non spécifique, et l'immunité adaptative, plus lente mais hautement ciblée grâce aux lymphocytes T et B. Lors d'une infection virale, les cellules présentatrices d'antigènes (CPA) déclenchent une cascade de signaux chimiques — cytokines, interleukines — qui activent la production d'anticorps spécifiques en 7 à 10 jours environ, selon le pathogène rencontré.",
        "La syntaxe JavaScript ES6+ introduit plusieurs concepts essentiels : les fonctions fléchées (=>), la déstructuration d'objets/tableaux, les template literals (`${variable}`), ainsi que les promesses (Promise) et la syntaxe async/await pour gérer l'asynchronisme. Par exemple, `const {nom, age} = utilisateur;` extrait directement des propriétés d'un objet, tandis qu'une Promise.all([p1, p2]) permet d'exécuter plusieurs opérations asynchrones en parallèle avant de continuer l'exécution du code."
      ]
    };
  
    const STORAGE_KEY = 'typerush_best_scores';
  
    /* ---------- Références DOM ---------- */
    const homeScreen = document.getElementById('home-screen');
    const gameScreen = document.getElementById('game-screen');
    const resultOverlay = document.getElementById('result-overlay');
  
    const startBtn = document.getElementById('start-btn');
    const homeBtn = document.getElementById('home-btn');
    const restartBtn = document.getElementById('restart-btn');
    const retryBtn = document.getElementById('retry-btn');
    const backHomeBtn = document.getElementById('back-home-btn');
  
    const diffButtons = document.querySelectorAll('.diff-btn');
    const textDisplay = document.getElementById('text-display');
    const hiddenInput = document.getElementById('hidden-input');
  
    const timerEl = document.getElementById('timer');
    const liveWpmEl = document.getElementById('live-wpm');
    const liveAccuracyEl = document.getElementById('live-accuracy');
  
    const resultWpmEl = document.getElementById('result-wpm');
    const resultAccuracyEl = document.getElementById('result-accuracy');
    const resultTimeEl = document.getElementById('result-time');
    const performanceMessageEl = document.getElementById('performance-message');
    const newRecordEl = document.getElementById('new-record');
  
    const bestEasyEl = document.getElementById('best-easy');
    const bestMediumEl = document.getElementById('best-medium');
    const bestHardEl = document.getElementById('best-hard');
  
    /* ---------- État du jeu ---------- */
    let selectedDifficulty = 'easy';
    let targetText = '';
    let charSpans = [];
    let typedCount = 0;
    let correctCount = 0;
    let totalKeystrokes = 0;
  
    let timerInterval = null;
    let startTime = null;
    let hasStarted = false;
    let isFinished = false;
  
    /* ---------- Gestion du meilleur score (localStorage) ---------- */
    function getBestScores() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : { easy: null, medium: null, hard: null };
      } catch (e) {
        return { easy: null, medium: null, hard: null };
      }
    }
  
    function saveBestScore(difficulty, wpm) {
      const scores = getBestScores();
      const current = scores[difficulty];
      let isNewRecord = false;
  
      if (current === null || wpm > current) {
        scores[difficulty] = wpm;
        isNewRecord = true;
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
        } catch (e) {
          /* localStorage indisponible : on ignore silencieusement */
        }
      }
      return isNewRecord;
    }
  
    function renderBestScores() {
      const scores = getBestScores();
      bestEasyEl.textContent = scores.easy !== null ? `${scores.easy} WPM` : '— WPM';
      bestMediumEl.textContent = scores.medium !== null ? `${scores.medium} WPM` : '— WPM';
      bestHardEl.textContent = scores.hard !== null ? `${scores.hard} WPM` : '— WPM';
    }
  
    /* ---------- Choix du texte ---------- */
    function pickRandomText(difficulty) {
      const pool = TEXTS[difficulty];
      return pool[Math.floor(Math.random() * pool.length)];
    }
  
    /* ---------- Construction de l'affichage du texte ---------- */
    function renderText(text) {
      textDisplay.innerHTML = '';
      charSpans = [];
  
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char;
        textDisplay.appendChild(span);
        charSpans.push(span);
      });
  
      if (charSpans.length > 0) {
        charSpans[0].classList.add('current');
      }
    }
  
    /* ---------- Chronomètre ---------- */
    function startTimer() {
      startTime = performance.now();
      timerInterval = setInterval(() => {
        const elapsed = (performance.now() - startTime) / 1000;
        timerEl.textContent = elapsed.toFixed(1) + 's';
        updateLiveWpm(elapsed);
      }, 100);
    }
  
    function stopTimer() {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }
  
    function getElapsedSeconds() {
      if (!startTime) return 0;
      return (performance.now() - startTime) / 1000;
    }
  
    /* ---------- Calculs WPM / précision ---------- */
    function computeWpm(elapsedSeconds) {
      if (elapsedSeconds <= 0) return 0;
      const words = correctCount / 5; // 1 mot = 5 caractères
      const minutes = elapsedSeconds / 60;
      return Math.round(words / minutes);
    }
  
    function computeAccuracy() {
      if (totalKeystrokes === 0) return 100;
      return Math.round((correctCount / totalKeystrokes) * 100);
    }
  
    function updateLiveWpm(elapsedSeconds) {
      liveWpmEl.textContent = String(computeWpm(elapsedSeconds));
      liveAccuracyEl.textContent = computeAccuracy() + '%';
    }
  
    /* ---------- Démarrage d'une partie ---------- */
    function startNewGame(difficulty) {
      selectedDifficulty = difficulty;
      targetText = pickRandomText(difficulty);
  
      typedCount = 0;
      correctCount = 0;
      totalKeystrokes = 0;
      hasStarted = false;
      isFinished = false;
      startTime = null;
  
      stopTimer();
      timerEl.textContent = '0.0s';
      liveWpmEl.textContent = '0';
      liveAccuracyEl.textContent = '100%';
  
      hiddenInput.value = '';
      renderText(targetText);
  
      homeScreen.classList.add('hidden');
      resultOverlay.classList.add('hidden');
      gameScreen.classList.remove('hidden');
  
      textDisplay.classList.add('focused');
      hiddenInput.focus();
    }
  
    /* ---------- Gestion de la frappe ---------- */
    function handleInput() {
      if (isFinished) return;
  
      const value = hiddenInput.value;
  
      // Démarrage du chronomètre dès la première frappe
      if (!hasStarted && value.length > 0) {
        hasStarted = true;
        startTimer();
      }
  
      // Empêcher de taper au-delà de la longueur du texte
      if (value.length > targetText.length) {
        hiddenInput.value = value.slice(0, targetText.length);
        return;
      }
  
      typedCount = value.length;
      correctCount = 0;
      totalKeystrokes = value.length;
  
      for (let i = 0; i < charSpans.length; i++) {
        const span = charSpans[i];
        span.classList.remove('correct', 'incorrect', 'current');
  
        if (i < value.length) {
          if (value[i] === targetText[i]) {
            span.classList.add('correct');
            correctCount++;
          } else {
            span.classList.add('incorrect');
          }
        }
      }
  
      if (typedCount < charSpans.length) {
        charSpans[typedCount].classList.add('current');
      }
  
      const elapsed = getElapsedSeconds();
      updateLiveWpm(elapsed);
  
      if (value.length === targetText.length) {
        finishGame();
      }
    }
  
    function finishGame() {
      isFinished = true;
      stopTimer();
      textDisplay.classList.remove('focused');
  
      const elapsed = getElapsedSeconds();
      const finalWpm = computeWpm(elapsed);
      const finalAccuracy = computeAccuracy();
  
      resultWpmEl.textContent = `${finalWpm} WPM`;
      resultAccuracyEl.textContent = `${finalAccuracy}%`;
      resultTimeEl.textContent = `${elapsed.toFixed(1)}s`;
  
      performanceMessageEl.textContent = getPerformanceMessage(finalWpm, finalAccuracy);
  
      const isNewRecord = saveBestScore(selectedDifficulty, finalWpm);
      newRecordEl.classList.toggle('hidden', !isNewRecord);
      renderBestScores();
  
      setTimeout(() => {
        resultOverlay.classList.remove('hidden');
      }, 350);
    }
  
    function getPerformanceMessage(wpm, accuracy) {
      if (accuracy < 80) return "Concentre-toi sur la précision avant la vitesse 🎯";
      if (wpm >= 70) return "Frappe impressionnante, tu es très rapide ! ⚡";
      if (wpm >= 45) return "Très bon rythme, continue comme ça ! 👏";
      if (wpm >= 25) return "Bon travail, la régularité va t'aider à progresser 💪";
      return "Bon début, entraîne-toi pour gagner en vitesse 🙂";
    }
  
    function goHome() {
      stopTimer();
      isFinished = true;
      gameScreen.classList.add('hidden');
      resultOverlay.classList.add('hidden');
      homeScreen.classList.remove('hidden');
      renderBestScores();
    }
  
    /* ---------- Écouteurs d'évènements ---------- */
    diffButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        diffButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDifficulty = btn.dataset.difficulty;
      });
    });
  
    startBtn.addEventListener('click', () => startNewGame(selectedDifficulty));
    restartBtn.addEventListener('click', () => startNewGame(selectedDifficulty));
    retryBtn.addEventListener('click', () => startNewGame(selectedDifficulty));
    homeBtn.addEventListener('click', goHome);
    backHomeBtn.addEventListener('click', goHome);
  
    textDisplay.addEventListener('click', () => {
      hiddenInput.focus();
    });
  
    hiddenInput.addEventListener('input', handleInput);
  
    hiddenInput.addEventListener('blur', () => {
      if (!isFinished) {
        textDisplay.classList.remove('focused');
      }
    });
  
    hiddenInput.addEventListener('focus', () => {
      if (!isFinished) {
        textDisplay.classList.add('focused');
      }
    });
  
    /* ---------- Initialisation ---------- */
    renderBestScores();
  })();