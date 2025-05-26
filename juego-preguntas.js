document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const submitButton = document.getElementById('submit-answer');
    const resultDisplay = document.getElementById('result-display');
    const scoreDisplayElement = document.getElementById('score-display');
    const finalMessageElement = document.getElementById('final-message');

    const challenges = [
        {
            question: "En una cena, cinco personas están sentadas alrededor de una mesa redonda. El Sr. Pérez está a la derecha de la Sra. Gómez. El Sr. López está frente al Sr. Pérez. La Sra. Vargas está a la izquierda del Sr. López. ¿Quién está frente a la Sra. Gómez?",
            options: ["Sr. Pérez", "Sr. López", "Sra. Vargas"],
            correctAnswer: "Sra. Vargas"
        },
        {
            question: "Si todos los A son B, y algunos B son C, ¿cuál de las siguientes afirmaciones es necesariamente verdadera?",
            options: ["Todos los A son B", "Algunos A son C", "Algunos C son B"],
            correctAnswer: "Algunos C son B"
        },
        {
            question: "Un tren sale de la ciudad X a las 8:00 AM y viaja a 60 km/h hacia la ciudad Y, que está a 300 km de distancia. Otro tren sale de la ciudad Y a las 9:00 AM y viaja a 80 km/h hacia la ciudad X. ¿A qué hora se cruzarán los dos trenes?",
            options: ["10:00 AM", "10:30 AM", "11:00 AM"],
            correctAnswer: "11:00 AM"
        },
        {
            question: "Tres amigos, Ana, Bruno y Carlos, tienen cada uno una profesión diferente: médico, abogado o ingeniero. Ana dice que no es médico. Bruno dice que es ingeniero. Carlos dice que no es abogado. Solo una de estas afirmaciones es falsa. ¿Cuál es la profesión de cada uno?",
            options: ["Ana-Abogado, Bruno-Ingeniero, Carlos-Médico", "Ana-Ingeniero, Bruno-Médico, Carlos-Abogado", "Ana-Médico, Bruno-Ingeniero, Carlos-Abogado"],
            correctAnswer: "Ana-Abogado, Bruno-Ingeniero, Carlos-Médico"
        },
        {
            question: "Considera la secuencia: 8, 6, 7, 5, 6, 4, ¿cuál es el siguiente número?",
            options: ["3", "5", "7"],
            correctAnswer: "5"
        },
        {
            question: "Si un hombre necesita 3 horas para pintar una casa y otro hombre necesita 5 horas para pintar la misma casa, ¿cuánto tiempo tardarían en pintar la casa juntos?",
            options: ["1 hora y 52.5 minutos", "1 hora y 57 minutos", "2 horas"],
            correctAnswer: "1 hora y 52.5 minutos"
        },
        {
            question: "Hay tres cajas. Una contiene solo manzanas, otra solo naranjas y la tercera contiene manzanas y naranjas. Las tres cajas están etiquetadas incorrectamente. La etiqueta 'Manzanas' está en la caja que contiene naranjas. La etiqueta 'Naranjas' está en la caja que contiene manzanas. La etiqueta 'Manzanas y Naranjas' está en la caja que contiene solo un tipo de fruta. Si solo puedes sacar una fruta de una caja, ¿de qué caja debes sacar para etiquetar las tres correctamente?",
            options: ["La caja etiquetada 'Manzanas'", "La caja etiquetada 'Naranjas'", "La caja etiquetada 'Manzanas y Naranjas'"],
            correctAnswer: "La caja etiquetada 'Manzanas y Naranjas'"
        },
        {
            question: "Un código secreto consiste en tres dígitos diferentes del 0 al 9. La primera pista es: 682 - Un dígito es correcto y en su lugar. La segunda pista es: 614 - Un dígito es correcto pero en el lugar equivocado. La tercera pista es: 206 - Dos dígitos son correctos pero en el lugar equivocado. ¿Cuál es el código secreto?",
            options: ["042", "280", "804"],
            correctAnswer: "042"
        },
        {
            question: "Si un reloj tarda 30 segundos en dar 6 campanadas, ¿cuánto tiempo tardará en dar 12 campanadas?",
            options: ["60 segundos", "66 segundos", "55 segundos"],
            correctAnswer: "66 segundos"
        },
        {
            question: "Cinco personas están en una habitación. Cada persona le da la mano exactamente a otra persona. ¿Cuántos apretones de manos hubo en total?",
            options: ["5", "10", "15"],
            correctAnswer: "10"
        },
        {
            question: "¿Qué palabra no pertenece al siguiente grupo: tulipán, rosa, margarita, mesa?",
            options: ["Tulipán", "Rosa", "Mesa"],
            correctAnswer: "Mesa"
        },
        {
            question: "Si un caracol sube 10 cm durante el día y resbala 5 cm durante la noche, ¿cuántos días tardará en llegar a la cima de una pared de 40 cm?",
            options: ["6 días", "7 días", "8 días"],
            correctAnswer: "7 días"
        },
        {
            question: "¿Cuál es el siguiente número en la secuencia: 1, 4, 9, 16, ?",
            options: ["20", "25", "30"],
            correctAnswer: "25"
        },
        {
            question: "Si tienes 12 cerillas y formas un triángulo equilátero con cada lado de 4 cerillas, ¿cuántos triángulos puedes formar?",
            options: ["1", "3", "5"],
            correctAnswer: "1"
        },
        {
            question: "Un granjero tiene 17 ovejas. Todas menos nueve murieron. ¿Cuántas ovejas le quedan al granjero?",
            options: ["0", "8", "9"],
            correctAnswer: "9"
        },
        {
            question: "Si un zorro tarda 5 minutos en comer una gallina, ¿cuánto tardarán 10 zorros en comer 10 gallinas?",
            options: ["5 minutos", "10 minutos", "50 minutos"],
            correctAnswer: "5 minutos"
        },
        {
            question: "¿Qué letra sigue en la secuencia: O, T, T, F, F, S, S, E, ?",
            options: ["N", "T", "O"],
            correctAnswer: "N"
        },
        {
            question: "Si divides 30 por la mitad y le sumas 10, ¿cuál es el resultado?",
            options: ["25", "70", "15"],
            correctAnswer: "70"
        },
        {
            question: "¿Qué pesa más: un kilo de plumas o un kilo de ladrillos?",
            options: ["Las plumas", "Los ladrillos", "Pesan igual"],
            correctAnswer: "Pesan igual"
        },
        {
            question: "Si ayer fuera mañana, hoy sería domingo. ¿Qué día es hoy realmente?",
            options: ["Viernes", "Sábado", "Domingo"],
            correctAnswer: "Viernes"
        },
        {
            question: "Tres amigos, Ana, Bruno y Carlos, están sentados en fila. Sabemos que Ana no está en el medio. Carlos no está a la izquierda de Bruno. ¿Quién está en el medio?",
            options: ["Ana", "Bruno", "Carlos"],
            correctAnswer: "Bruno"
        },
        {
            question: "Un hombre vive en el décimo piso de un edificio. Cada mañana toma el ascensor hasta la planta baja y sale. Por la tarde, al regresar, toma el ascensor hasta el séptimo piso y luego sube las escaleras los tres pisos restantes. ¿Por qué hace esto?",
            options: [" El ascensor no llega al décimo piso.", "No quiere esperar el ascensor.", "Es demasiado bajo para alcanzar el botón del décimo piso."],
            correctAnswer: "Es demasiado bajo para alcanzar el botón del décimo piso."
        },
        {
            question: "Un padre y su hijo tienen 36 años en total. El padre tiene 30 años más que el hijo. ¿Cuántos años tiene el hijo?",
            options: ["3 años", "6 años", "12 años"],
            correctAnswer: "3 años"
        },
        {
            question: "¿Qué figura continúa la siguiente secuencia: cuadrado, triángulo, círculo, cuadrado, triángulo, ?",
            options: ["Cuadrado", "Circulo", "Triangulo"],
            correctAnswer: "Circulo"
        },
        {
            question: "Si la afirmación 'Todos los cisnes son blancos' es falsa, entonces ¿cuál de las siguientes debe ser verdadera?",
            options: ["Ningún cisne es blanco.", "Todos los cisnes son de otro color.", "Algunos cisnes no son blancos."],
            correctAnswer: "Algunos cisnes no son blancos."
        },
        {
            question: "Si 'no A implica B', entonces ¿qué otra afirmación es necesariamente verdadera?",
            options: ["no B implica A.", "A implica no B.", "B implica A."],
            correctAnswer: "no B implica A."
        },
        {
            question: "En un planeta lejano, existen dos tribus: los Veraces, que siempre dicen la verdad, y los Falsos, que siempre mienten. Te encuentras con un habitante en una bifurcación. Uno de los caminos lleva a la ciudad principal y el otro a la nada. El habitante te dice: 'Si te pregunto si este camino lleva a la ciudad, dirías que sí'. ¿Qué camino debes tomar?",
            options: ["El camino que señala el habitante.", "El camino que no señala el habitante.", "No se puede determinar."], 
            correctAnswer: "El camino que señala el habitante."
        },
        {
            question: "Tres prisioneros están formados en fila india, de manera que el último puede ver a los dos que están delante, el del medio solo puede ver al de delante, y el primero no puede ver a ninguno. El carcelero les dice que tiene cinco sombreros: tres blancos y dos negros. Les coloca un sombrero en la cabeza a cada uno y esconde los dos restantes. Luego le pregunta al último prisionero (el que puede ver a los otros dos): '¿Sabes el color de tu sombrero?'. Él responde que no. Luego le pregunta al prisionero del medio: '¿Sabes el color de tu sombrero?'. Él también responde que no. Finalmente, le pregunta al primer prisionero (el que no ve nada): '¿Sabes el color de tu sombrero?'. Él responde que sí. ¿De qué color es su sombrero?",
            options: ["No se puede deerminar", "Negro", "Blanco"],
            correctAnswer: "Blanco"
        },
        {
            question: "Un lago tiene una superficie cubierta de nenúfares. Cada día, la superficie cubierta se duplica. Si tarda 48 días en cubrir todo el lago, ¿cuánto tardará en cubrir la mitad del lago?",
            options: ["47 Dias", "24 Dias", "25 Dias"],
            correctAnswer: "47 Dias"
        },
        {
            question: "Tienes 100 botellas de vino. Una de ellas ha sido envenenada. El veneno es indetectable, pero cualquiera que beba incluso una pequeña cantidad morirá exactamente al cabo de 24 horas. Tienes 10 prisioneros y exactamente 24 horas para determinar cuál botella está envenenada. ¿Cuál es el mínimo número de prisioneros que necesitas para identificar la botella envenenada?",
            options: ["10", "7", "5"],
            correctAnswer: "7" 
        },
        {
            question: "Un hombre está mirando una fotografía. Alguien le pregunta: '¿Quién está en la fotografía?'. Él responde: 'No tengo hermanos ni hermanas, pero el hijo de este hombre es el hijo de mi padre'. ¿Quién está en la fotografía?",
            options: ["Su padre", "El mismo", "Su hijo"],
            correctAnswer: "Su hijo"
        },
        {
            question: "Hay tres cajas. Una contiene solo manzanas, otra solo naranjas y la tercera contiene manzanas y naranjas. Las tres cajas están etiquetadas incorrectamente. Puedes abrir solo una caja y sacar una sola fruta (sin mirar dentro). Al ver la fruta, puedes determinar correctamente el contenido de las tres cajas. ¿Qué caja debes abrir?",
            options: ["La caja etiquetada como 'manzanas y naranjas'.", "La caja etiquetada como 'manzanas'.", "La caja etiquetada como 'naranjas'."],
            correctAnswer: "La caja etiquetada como 'manzanas y naranjas'."
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
            current.options.forEach((optionText) => {
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
        setTimeout(displayQuestion, 2000);
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
            message = `Resultado: 0 de ${totalChallenges} correctas. Desalentador... ¡Pero no te rindas no puede ser peor!`;
            finalMessageElement.classList.add('discouragement');
        } else if (correctAnswersCount <= totalChallenges / 2) {
            message = `Resultado: ${correctAnswersCount} de ${totalChallenges} MMMM buenas talves. Sigue adelante, ¡puedes mejorar talvez digamos!`;
            finalMessageElement.classList.add('encouragement');
        } else {
            message = `¡Felicitaciones ERES EL ALBERT EINSTEIN! Has obtenido ${correctAnswersCount} de ${totalChallenges} correctas. ¡Tu lógica es impecable!`;
        }
        finalMessageElement.textContent = message;
        finalMessageElement.classList.add('show');
    }
    displayQuestion();
});