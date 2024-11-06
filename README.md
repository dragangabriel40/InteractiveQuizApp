Proiect Quiz App

Quiz App este o aplicație web interactivă pentru quizuri, care permite utilizatorilor să aleagă categorii de întrebări, să adauge întrebări noi și să-și testeze cunoștințele prin intermediul unui sistem de quiz. Proiectul este construit folosind Next.js și React, având o interfață intuitivă și modernă, ușor de utilizat.

Funcționalități principale:

Alegerea și afișarea întrebărilor din diferite categorii.
Posibilitatea de a adăuga întrebări noi, salvate în local storage.
Răspuns la întrebări și afișarea scorului final.
Navigare între întrebări și categorii.
Instrucțiuni de Instalare și Rulare
Cerințe preliminare
Node.js versiunea 14+
Git (opțional pentru clonare)
Pași pentru instalare
Clonarea proiectului:

git clone https://github.com/username/quiz-app.git
cd quiz-app

Instalarea dependențelor:
npm install

Rularea proiectului:

npm run dev
Aplicația va fi disponibilă la http://localhost:3000.

Build-ul pentru producție:
npm run build

Rularea în modul de producție:
npm start

Structura fișierelor
/pages: Conține toate rutele și paginile aplicației, inclusiv paginile de categorie, quiz, întrebări și pagina finală.
/pages/api: Conține endpoint-ul API pentru întrebări, unde sunt preluate datele din questions.json.
/public: Conține fișiere statice, cum ar fi imaginile și fișierul questions.json.
/components: Conține componentele reutilizabile ale aplicației.
/styles: Fișierele CSS modules folosite pentru a stiliza componentele aplicației.
Structura Ramurilor (Branches)
