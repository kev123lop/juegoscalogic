document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const submitButton = document.getElementById('submit-answer');
    const resultDisplay = document.getElementById('result-display');
    const scoreDisplayElement = document.getElementById('score-display');
    const finalMessageElement = document.getElementById('final-message');

    // Array con las 52 preguntas sobre cine, entretenimiento y anime
    const challenges = [
        {
            question: "¿Quién dirigió la película 'Pulp Fiction'?",
            options: ["Christopher Nolan", "Martin Scorsese", "Quentin Tarantino"],
            correctAnswer: "Quentin Tarantino"
        },
        {
            question: "¿Qué película animada presenta un personaje llamado Totoro?",
            options: ["El viaje de Chihiro", "La Princesa Mononoke", "Mi vecino Totoro"],
            correctAnswer: "Mi vecino Totoro"
        },
        {
            question: "¿Qué actor interpretó a Iron Man en el Universo Cinematográfico de Marvel?",
            options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr."],
            correctAnswer: "Robert Downey Jr."
        },
        {
            question: "¿En qué año se estrenó la primera película de 'Star Wars' (Una nueva esperanza)?",
            options: ["1975", "1977", "1980"],
            correctAnswer: "1977"
        },
        {
            question: "¿Quién compuso la banda sonora de muchas películas de Hayao Miyazaki, como 'El viaje de Chihiro'?",
            options: ["Yuki Kajiura", "Kenji Kawai", "Joe Hisaishi"],
            correctAnswer: "Joe Hisaishi"
        },
        {
            question: "¿Cuál es la película más taquillera de todos los tiempos (sin ajustar por inflación y excluyendo relanzamientos)?",
            options: ["Avengers: Endgame", "Titanic", "Avatar"],
            correctAnswer: "Avatar"
        },
        {
            question: "En el anime 'Attack on Titan', ¿cuál es el nombre del protagonista principal?",
            options: ["Mikasa Ackerman", "Armin Arlert", "Eren Yeager"],
            correctAnswer: "Eren Yeager"
        },
        {
            question: "¿Qué artista pop es conocida por éxitos como 'Like a Prayer' y 'Vogue'?",
            options: ["Janet Jackson", "Mariah Carey", "Madonna"],
            correctAnswer: "Madonna"
        },
        {
            question: "¿Cuál es la ciudad ficticia donde opera Batman?",
            options: ["Metrópolis", "Star City", "Gotham City"],
            correctAnswer: "Gotham City"
        },
        {
            question: "¿Qué serie de anime sigue a un grupo de piratas que buscan el tesoro definitivo, el One Piece?",
            options: ["Naruto", "Bleach", "One Piece"],
            correctAnswer: "One Piece"
        },
        {
            question: "¿Qué director es conocido por películas como 'El origen', 'El caballero oscuro' e 'Interestelar'?",
            options: ["Denis Villeneuve", "James Cameron", "Christopher Nolan"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "¿Cuál es el nombre de la protagonista principal en el anime 'El viaje de Chihiro'?",
            options: ["San", "Sophie", "Chihiro/Sen"],
            correctAnswer: "Chihiro/Sen"
        },
        {
            question: "¿Quién lanzó el álbum superventas 'Thriller'?",
            options: ["Prince", "Stevie Wonder", "Michael Jackson"],
            correctAnswer: "Michael Jackson"
        },
        {
            question: "¿Qué director es conocido por su estilo visual distintivo en películas como 'El Gran Hotel Budapest'?",
            options: ["Taika Waititi", "Edgar Wright", "Wes Anderson"],
            correctAnswer: "Wes Anderson"
        },
        {
            question: "En el anime 'Naruto', ¿cómo se llama la aldea a la que pertenece Naruto?",
            options: ["Aldea Oculta de la Arena", "Aldea Oculta de la Niebla", "Aldea Oculta de la Hoja"],
            correctAnswer: "Aldea Oculta de la Hoja"
        },
        {
            question: "¿Qué popular serie de televisión se desarrolla en el continente ficticio de Westeros?",
            options: ["The Witcher", "El Señor de los Anillos", "Juego de Tronos"],
            correctAnswer: "Juego de Tronos"
        },
        {
            question: "¿Quién es el creador original del manga y anime de 'Dragon Ball'?",
            options: ["Masashi Kishimoto", "Eiichiro Oda", "Akira Toriyama"],
            correctAnswer: "Akira Toriyama"
        },
        {
            question: "¿Qué instrumento musical toca el personaje Kaori en el anime 'Your Lie in April'?",
            options: ["Piano", "Violonchelo", "Violín"],
            correctAnswer: "Violín"
        },
        {
            question: "¿Qué actriz interpretó a Hermione Granger en la saga de películas de 'Harry Potter'?",
            options: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
            correctAnswer: "Emma Watson"
        },
        {
            question: "¿Cuál es el nombre del mundo de juego de realidad virtual en el anime 'Sword Art Online'?",
            options: ["ALfheim Online", "Gun Gale Online", "Aincrad/SAO"],
            correctAnswer: "Aincrad/SAO"
        },
         {
            question: "¿Qué banda lanzó la icónica canción 'Bohemian Rhapsody'?",
            options: ["The Beatles", "Led Zeppelin", "Queen"],
            correctAnswer: "Queen"
        },
        {
            question: "¿Qué película de anime ganó el Premio de la Academia a la Mejor Película de Animación en 2003?",
            options: ["La Princesa Mononoke", "El castillo ambulante", "El viaje de Chihiro"],
            correctAnswer: "El viaje de Chihiro"
        },
        {
            question: "¿Qué famoso director es conocido por películas taquilleras como 'Parque Jurásico' y 'E.T., el extraterrestre'?",
            options: ["George Lucas", "James Cameron", "Steven Spielberg"],
            correctAnswer: "Steven Spielberg"
        },
        {
            question: "En el anime 'Puella Magi Madoka Magica', ¿qué otorga sus poderes a las chicas?",
            options: ["Una varita mágica", "Un familiar", "Una Gema del Alma"],
            correctAnswer: "Una Gema del Alma"
        },
        {
            question: "¿Quién es el vocalista principal de la banda U2?",
            options: ["The Edge", "Adam Clayton", "Bono"],
            correctAnswer: "Bono"
        },
        {
            question: "¿Qué anime presenta a un protagonista que puede transformarse en una máquina de combate gigante llamada Evangelion?",
            options: ["Gundam", "Macross", "Neon Genesis Evangelion"],
            correctAnswer: "Neon Genesis Evangelion"
        },
        {
            question: "¿Qué actriz interpretó a Katniss Everdeen en la saga de películas de 'Los Juegos del Hambre'?",
            options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence"],
            correctAnswer: "Jennifer Lawrence"
        },
        {
            question: "En el anime 'Death Note', ¿cómo se llama el cuaderno que puede matar personas?",
            options: ["Diario Shinigami", "Libro de Almas", "Death Note"],
            correctAnswer: "Death Note"
        },
        {
            question: "¿Qué banda es famosa por la icónica canción 'Stairway to Heaven'?",
            options: ["The Rolling Stones", "The Who", "Led Zeppelin"],
            correctAnswer: "Led Zeppelin"
        },
        {
            question: "¿Cuál es el nombre del personaje principal en el anime 'My Hero Academia'?",
            options: ["Katsuki Bakugo", "Shoto Todoroki", "Izuku Midoriya"],
            correctAnswer: "Izuku Midoriya"
        },
        {
            question: "¿Qué director es conocido por películas animadas como 'El viaje de Chihiro', 'La Princesa Mononoke' y 'Mi vecino Totoro'?",
            options: ["Mamoru Hosoda", "Makoto Shinkai", "Hayao Miyazaki"],
            correctAnswer: "Hayao Miyazaki"
        },
        {
            question: "¿Qué popular servicio de streaming lanzó la serie 'Stranger Things'?",
            options: ["Hulu", "Amazon Prime Video", "Netflix"],
            correctAnswer: "Netflix"
        },
         // --- 20 Preguntas adicionales ---
        {
            question: "¿Quién interpretó a Frodo Bolsón en la trilogía cinematográfica de 'El Señor de los Anillos'?",
            options: ["Viggo Mortensen", "Orlando Bloom", "Elijah Wood"],
            correctAnswer: "Elijah Wood"
        },
        {
            question: "En el anime 'One Piece', ¿cuál es el nombre del capitán de los Piratas de Sombrero de Paja?",
            options: ["Roronoa Zoro", "Nami", "Monkey D. Luffy"],
            correctAnswer: "Monkey D. Luffy"
        },
        {
            question: "¿Qué actor es conocido por interpretar a James Bond en la mayor cantidad de películas?",
            options: ["Sean Connery", "Roger Moore", "Daniel Craig"],
            correctAnswer: "Roger Moore" // 7 películas, igual que Sean Connery si se incluye 'Nunca digas nunca jamás'. Depende de la fuente. Aceptemos Roger Moore como respuesta común.
        },
        {
            question: "En el anime 'Fullmetal Alchemist: Brotherhood', ¿cuál es el nombre del Alquimista de Acero?",
            options: ["Roy Mustang", "Alphonse Elric", "Edward Elric"],
            correctAnswer: "Edward Elric"
        },
        {
            question: "¿Qué famosa banda de rock lanzó el álbum 'The Dark Side of the Moon'?",
            options: ["Led Zeppelin", "The Beatles", "Pink Floyd"],
            correctAnswer: "Pink Floyd"
        },
        {
            question: "En el anime 'Naruto Shippuden', ¿cuál es la técnica ocular que posee Sasuke Uchiha?",
            options: ["Byakugan", "Rinnegan", "Sharingan"],
            correctAnswer: "Sharingan" // Aunque luego obtiene el Rinnegan, el Sharingan es su técnica ocular principal de clan.
        },
        {
            question: "¿Qué actriz ganó un Premio de la Academia por su papel en 'El cisne negro'?",
            options: ["Emma Stone", "Jennifer Lawrence", "Natalie Portman"],
            correctAnswer: "Natalie Portman"
        },
        {
            question: "En el anime 'Hunter x Hunter', ¿cómo se llama la organización criminal conocida por sus miembros con números tatuados?",
            options: ["Los Zoldyck", "El Gen'ei Ryodan (Brigada Fantasma)", "Las Quimeras"],
            correctAnswer: "El Gen'ei Ryodan (Brigada Fantasma)"
        },
        {
            question: "¿Qué película de 1994 es a menudo citada como una de las mejores de la historia, dirigida por Frank Darabont?",
            options: ["Forrest Gump", "Pulp Fiction", "Cadena perpetua"],
            correctAnswer: "Cadena perpetua"
        },
        {
            question: "En el anime 'Code Geass', ¿cuál es el nombre del protagonista que obtiene el poder del Geass?",
            options: ["Suzaku Kururugi", "C.C.", "Lelouch Lamperouge"],
            correctAnswer: "Lelouch Lamperouge"
        },
        {
            question: "¿Qué cantante es conocida como la 'Reina del Pop Latino'?",
            options: ["Shakira", "Jennifer Lopez", "Selena Quintanilla"],
            correctAnswer: "Selena Quintanilla" // Título a menudo asociado póstumamente. Shakira y JLo también son grandes figuras. Usemos Selena.
        },
        {
            question: "En el anime 'Assassination Classroom', ¿cómo se llama el peculiar maestro con tentáculos?",
            options: ["Tadaomi Karasuma", "Irina Jelavić", "Koro-sensei"],
            correctAnswer: "Koro-sensei"
        },
        {
            question: "¿Quién interpretó a Jack Dawson en la película 'Titanic'?",
            options: ["Billy Zane", "Matthew McConaughey", "Leonardo DiCaprio"],
            correctAnswer: "Leonardo DiCaprio"
        },
        {
            question: "En el anime 'Haikyuu!!', ¿cuál es la posición de Shoyo Hinata en el equipo de voleibol?",
            options: ["Armador", "Central", "Rematador Externo"],
            correctAnswer: "Central" 
        },
        {
            question: "¿Qué director es conocido por películas de animación stop-motion como 'El extraño mundo de Jack' y 'Coraline'?",
            options: ["Pixar", "DreamWorks", "Laika"],
           correctAnswer: "Laika"  
        }, {   question: "¿Qué estudio de animación es conocido por películas stop-motion como 'Coraline' y 'ParaNorman'?",
             options: ["Pixar Animation Studios", "DreamWorks Animation", "Laika Studios"],
             correctAnswer: "Laika Studios" 
        },
        {
            question: "En el anime 'Tokyo Ghoul', ¿cómo se llaman las criaturas que se alimentan de carne humana?",
            options: ["Titanes", "Homúnculos", "Ghouls"],
            correctAnswer: "Ghouls"
        },
        {
            question: "¿Qué actor interpretó a Tony Montana en la película 'Scarface' (1983)?",
            options: ["Robert De Niro", "Al Pacino", "Joe Pesci"],
            correctAnswer: "Al Pacino"
        },
        {
            question: "En el anime 'Re:Zero - Starting Life in Another World', ¿cuál es el nombre del protagonista que regresa en el tiempo al morir?",
            options: ["Rem", "Emilia", "Subaru Natsuki"],
            correctAnswer: "Subaru Natsuki"
        },
        {
            question: "¿Qué cantante es conocida por romper récords con álbumes como '21' y '25'?",
            options: ["Beyoncé", "Taylor Swift", "Adele"],
            correctAnswer: "Adele"
        },
        {
            question: "En el anime 'Attack on Titan', ¿cuál es la rama militar que explora fuera de las murallas?",
            options: ["Tropas Estacionarias", "Guarnición", "Cuerpo de Exploración"],
            correctAnswer: "Cuerpo de Exploración"
        }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  
        }
        return array;
    }
    const shuffledChallenges = shuffleArray(challenges);
    let currentChallengeIndex = 0;
    let correctAnswersCount = 0;
    let answered = false;
    let selectedOption = null;
    let selectedButton = null;

    function displayQuestion() {
        if (currentChallengeIndex < shuffledChallenges.length) {
            const current = shuffledChallenges[currentChallengeIndex];  
            questionElement.textContent = current.question;
            optionsElement.innerHTML = '';  
            if (scoreDisplayElement) {
                scoreDisplayElement.textContent = `Pregunta ${currentChallengeIndex + 1} de ${shuffledChallenges.length}`;
            }
             const shuffledOptions = shuffleArray([...current.options]); 

            shuffledOptions.forEach((optionText) => { 
                const button = document.createElement('button');
                button.classList.add('anime-button', 'option-button');
                button.textContent = optionText;
                button.addEventListener('click', () => selectAnswer(optionText, button));
                optionsElement.appendChild(button);
            });
            submitButton.disabled = true;
            submitButton.classList.add('anime-button', 'action-button'); 
            submitButton.textContent = "RESPONDER";  

            resultDisplay.textContent = '';
            answered = false;
            selectedOption = null;
            selectedButton = null;
        } else {
            showFinalMessage();
            if (scoreDisplayElement) {
                scoreDisplayElement.textContent = '';
            }
        }
    }

    function selectAnswer(option, button) {
        if (!answered) {
            if (selectedButton) {
                selectedButton.classList.remove('selected');
            }
            selectedOption = option;
            selectedButton = button;
            selectedButton.classList.add('selected');
            submitButton.disabled = false;
        }
    }

    submitButton.addEventListener('click', () => {
        if (selectedOption && !answered) {
            checkAnswer();
        }
    });

    function checkAnswer() {
        answered = true;
        submitButton.disabled = true;
        const current = shuffledChallenges[currentChallengeIndex];
        const optionsButtons = document.querySelectorAll('#options .anime-button');
        optionsButtons.forEach(button => {
            button.disabled = true; 
            if (button.textContent === current.correctAnswer) {
                button.classList.add('correct-answer');
            } else if (button.textContent === selectedOption) {
                button.classList.add('incorrect-answer');
            }
        });

        if (selectedOption === current.correctAnswer) {
            resultDisplay.textContent = "¡Correcto! Respuesta validada.";  
            resultDisplay.classList.add('correct');
            resultDisplay.classList.remove('incorrect');
            correctAnswersCount++;
        } else {
            resultDisplay.textContent = `Incorrecto. La respuesta correcta era: ${current.correctAnswer}`;
            resultDisplay.classList.add('incorrect');
            resultDisplay.classList.remove('correct');
        }

        currentChallengeIndex++;
        setTimeout(displayQuestion, 3000);  
    }
    function showFinalMessage() {
        questionElement.textContent = '';  
        optionsElement.innerHTML = '';  
        submitButton.style.display = 'none';  
        resultDisplay.textContent = '';  
        resultDisplay.classList.remove('correct', 'incorrect');  

        if (scoreDisplayElement) {
             scoreDisplayElement.textContent = '';
        }

        let message = '';
        const totalChallenges = shuffledChallenges.length;  
        if (!finalMessageElement) {
            console.error("Elemento 'final-message' no encontrado.");
            return;
        }
        finalMessageElement.classList.add('anime-text');  
        finalMessageElement.classList.remove('discouragement', 'encouragement', 'show');
        if (correctAnswersCount === 0) {
            message = `Resultado: 0 de ${totalChallenges} correcto eres un cavernicola. ¡Ánimo, sigue intentándolo!`;  
            finalMessageElement.classList.add('discouragement');
        } else if (correctAnswersCount <= totalChallenges / 2) {
            message = `Resultado: ${correctAnswersCount} de ${totalChallenges} mas o menos pero eres normal. ¡No está mal, puedes mejorar!`;  
            finalMessageElement.classList.add('encouragement');
        } else {
            message = `¡Felicitaciones ERES ALGUIEN SIN VIDA SOCIAL! Has obtenido ${correctAnswersCount} de ${totalChallenges} correctas. ¡Eres un maestro del entretenimiento!`; 
        }
        finalMessageElement.textContent = message;
        finalMessageElement.classList.add('show');
    }
    displayQuestion();
});