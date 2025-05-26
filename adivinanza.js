document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const submitButton = document.getElementById('submit-answer');
    const resultDisplay = document.getElementById('result-display');
    const scoreDisplayElement = document.getElementById('score-display');
    const finalMessageElement = document.getElementById('final-message');

    const challenges = [
        {
            question: "¿Qué tiene un ojo, pero no puede ver?",
            options: ["Una pelota", "Una aguja", "Una nube"],
            correctAnswer: "Una aguja"
        },
        {
            question: "¿Qué tiene cuello, pero no cabeza?",
            options: ["Una camisa", "Una botella", "Un río"],
            correctAnswer: "Una botella"
        },
        {
            question: "¿Qué está lleno de agujeros pero todavía retiene agua?",
            options: ["Una red", "Una esponja", "Un cubo"],
            correctAnswer: "Una esponja"
        },
        {
            question: "¿Qué te pertenece, pero otras personas lo usan más que tú?",
            options: ["Tu coche", "Tu casa", "Tu nombre"],
            correctAnswer: "Tu nombre"
        },
        {
            question: "¿Qué está siempre delante de ti pero no se puede ver?",
            options: ["Tu sombra", "Tu pasado", "El futuro"],
            correctAnswer: "El futuro"
        },
        {
            question: "Tengo ciudades, pero no casas. Tengo montañas, pero no árboles. Tengo agua, pero no peces. ¿Qué soy?",
            options: ["Un globo terráqueo", "Un libro", "Un mapa"],
            correctAnswer: "Un mapa"
        },
        {
            question: "Tiene raíces que nadie ve, es más alto que los árboles, sube, sube, y nunca crece. ¿Qué es?",
            options: ["Una torre", "El humo", "Una montaña"],
            correctAnswer: "Una montaña"
        },
        {
            question: "¿Qué habla sin boca y oye sin oídos? No tiene cuerpo, pero cobra vida con el viento.",
            options: ["Un tambor", "Un pájaro", "Un eco"],
            correctAnswer: "Un eco"
        },
        {
            question: "Se corta en una mesa, pero nunca se come. ¿Qué es?",
            options: ["Pan", "Madera", "Una baraja de cartas"],
            correctAnswer: "Una baraja de cartas"
        },
        {
            question: "¿Qué debe romperse antes de que puedas usarlo?",
            options: ["Una nuez", "Un huevo", "Un cristal"],
            correctAnswer: "Un huevo"
        },
         {
            question: "¿Qué es ligero como una pluma, pero ni siquiera el hombre más fuerte puede sostenerlo por cinco minutos?",
            options: ["Una pluma", "Arena", "La respiración"],
            correctAnswer: "La respiración"
        },
        {
            question: "¿Qué ocurre una vez en un minuto, dos veces en un momento, y nunca en mil años?",
            options: ["La letra 'E'", "El número 0", "La letra 'M'"],
            correctAnswer: "La letra 'M'"
        },
        {
            question: "¿Qué tiene un pulgar y cuatro dedos pero no está vivo?",
            options: ["Una mano", "Un guante", "Una rama"],
            correctAnswer: "Un guante"
        },
        {
            question: "¿Qué viaja por todo el mundo quedándose en un rincón?",
            options: ["Un avión", "Una carta", "Un sello de correos"],
            correctAnswer: "Un sello de correos"
        },
        {
            question: "¿Qué tipo de habitación no tiene puertas ni ventanas?",
            options: ["Un sótano", "Un armario", "Un champiñón"],
            correctAnswer: "Un champiñón"
        },
        {
            question: "¿Qué está lleno durante el día y vacío por la noche?",
            options: ["Un armario", "Un zapato", "Una media"],
            correctAnswer: "Un zapato"
        },
        {
            question: "¿Qué tiene cama, pero nunca duerme, y boca, pero nunca come?",
            options: ["Una cueva", "Un río", "Un libro"],
            correctAnswer: "Un río"
        },
        {
            question: "Siempre tengo hambre y siempre me deben alimentar; el dedo que muerdo pronto se pondrá rojo.",
            options: ["Un animal", "El fuego", "Una máquina"],
            correctAnswer: "El fuego"
        },
        {
            question: "¿Qué es negro cuando lo consigues, rojo cuando lo usas y gris cuando terminas con él?",
            options: ["Un lápiz", "El carbón", "Una manzana"],
            correctAnswer: "El carbón"
        },
        {
             question: "Tengo lagos sin agua, montañas sin piedra y ciudades sin edificios. ¿Qué soy?",
             options: ["Un planeta", "Un mapa", "Una pintura"],
             correctAnswer: "Un mapa"
         },
        {
            question: "¿Qué puedes quedarte después de dárselo a alguien?",
            options: ["Un secreto", "Tu palabra", "Un regalo"],
            correctAnswer: "Tu palabra"
        },
        {
            question: "¿Qué tiene teclas, pero no cerraduras, y espacio, pero no habitaciones?",
            options: ["Un piano", "Una casa", "Un teclado"],
            correctAnswer: "Un teclado"
        },
        {
            question: "¿Qué tiene cabeza y cola, pero no cuerpo?",
            options: ["Una serpiente", "Una moneda", "Una historia"],
            correctAnswer: "Una moneda"
        },
        {
            question: "¿Qué es alto cuando es joven y bajo cuando es viejo?",
            options: ["Un árbol", "Una persona", "Una vela"],
            correctAnswer: "Una vela"
        },
        {
            question: "¿Qué siempre está llegando, pero nunca llega?",
            options: ["Un tren", "El correo", "Mañana"],
            correctAnswer: "Mañana"
        },
        {
            question: "¿Qué sube pero nunca baja?",
            options: ["Una cometa", "Un globo", "Tu edad"],
            correctAnswer: "Tu edad"
        },
        {
            question: "¿Qué invento te permite ver a través de una pared?",
            options: ["Rayos X", "Un espejo", "Una ventana"],
            correctAnswer: "Una ventana"
        },
        {
            question: "¿A qué pregunta nunca puedes responder sinceramente que sí?",
            options: ["¿Estás ahí?", "¿Tienes hambre?", "¿Ya estás dormido?"],
            correctAnswer: "¿Ya estás dormido?"
        },
        {
            question: "Soy tomado de una mina, y encerrado en una caja de madera, de la cual nunca soy liberado, y sin embargo soy usado por casi todo el mundo. ¿Qué soy?",
            options: ["El carbón", "Un diamante", "La mina de lápiz"],
            correctAnswer: "La mina de lápiz"
        },
        {
            question: "La gente pobre lo tiene. La gente rica lo necesita. Si lo comes, mueres. ¿Qué es?",
            options: ["El veneno", "Nada", "La deuda"],
            correctAnswer: "Nada"
        },
        {
            question: "¿Qué tiene manecillas, pero no puede aplaudir?",
            options: ["Una persona", "Un árbol", "Un reloj"],
            correctAnswer: "Un reloj"
        },
        {
            question: "¿Qué tiene lengua, pero no puede hablar?",
            options: ["Una persona", "Un zapato", "Un libro"],
            correctAnswer: "Un zapato"
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
                scoreDisplayElement.textContent = `Adivinanza ${currentChallengeIndex + 1} de ${shuffledChallenges.length}`;
            }
             const shuffledOptions = shuffleArray([...current.options]); 

            shuffledOptions.forEach((optionText) => {  
                const button = document.createElement('button');
                button.classList.add('cyber-button', 'option-button');
                button.textContent = optionText;
                button.addEventListener('click', () => selectAnswer(optionText, button));
                optionsElement.appendChild(button);
            });
            submitButton.disabled = true;
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
        const optionsButtons = document.querySelectorAll('#options .cyber-button');

        optionsButtons.forEach(button => {
            button.disabled = true;  
            if (button.textContent === current.correctAnswer) {
                button.classList.add('correct-answer');
            } else if (button.textContent === selectedOption) {
                button.classList.add('incorrect-answer');
            }
        });

        if (selectedOption === current.correctAnswer) {
            resultDisplay.textContent = "¡Correcto! Encriptación exitosa.";
            correctAnswersCount++;
        } else {
            resultDisplay.textContent = `Incorrecto. La respuesta correcta era: ${current.correctAnswer}`;
        }

        currentChallengeIndex++;
        setTimeout(displayQuestion, 3000); 
    }

    function showFinalMessage() {
        questionElement.textContent = ''; 
        optionsElement.innerHTML = ''; 
        submitButton.style.display = 'none'; 
        resultDisplay.textContent = ''; 
        if (scoreDisplayElement) {
             scoreDisplayElement.textContent = '';
        }

        let message = '';
        const totalChallenges = shuffledChallenges.length;  
        if (!finalMessageElement) {
            console.error("Elemento 'final-message' no encontrado.");
            return;
        }
        finalMessageElement.classList.remove('discouragement', 'encouragement', 'show');

        if (correctAnswersCount === 0) {
            message = `Resultado: 0 de ${totalChallenges} sabes que es un burro pues eso eres ¡Pero no te rindas talvez superes a una hormiga!`;
            finalMessageElement.classList.add('discouragement');
        } else if (correctAnswersCount <= totalChallenges / 2) {
            message = `Resultado: ${correctAnswersCount} de ${totalChallenges} estas mitad mitad. PERO Sigue adelante, ¡puedes mejorar!`;
            finalMessageElement.classList.add('encouragement');
        } else {
            message = `¡Felicitaciones si piensas! Has obtenido ${correctAnswersCount} de ${totalChallenges} correctas. ¡Tu lógica es impecable!`;
        }
        finalMessageElement.textContent = message;
        finalMessageElement.classList.add('show');
    }
    displayQuestion();
});