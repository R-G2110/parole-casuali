const apiURL = 'https://flynn.boolean.careers/exercises/api/random/word';

// let n = document.getElementById('input-number');
// let number;
// let error = '';
// let phrase;

// const generatePhrase = document.querySelector('.btn-generate');
// const resetInput = document.querySelector('.btn-reset');

// generatePhrase.addEventListener('click', function() {
//     let number = parseInt(n.value); // Assicurati che number sia un numero intero
//     console.log(number);
//     if (number > 0 && !isNaN(number)) {
//         let requests = [];
//         for (let i = 0; i < number; i++) {
//             requests.push(axios.get(apiURL)); // Aggiungi le richieste in un array
//         }

//         Promise.all(requests)
//             .then(responses => {
//                 let phrase = responses.map(response => response.data.response); // Estrai le frasi dalle risposte
//                 document.getElementById('phrase-output').innerHTML = phrase.join(' ');
//             })
//             .catch(error => {
//                 console.error('Errore nella richiesta:', error);
//             });
//     } else {
//         document.getElementById('phrase-output').innerHTML = 'Numero inserito non valido!';
//     }
// });

// resetInput.addEventListener('click', function(){
//     n.value = ''; // Resetta il valore dell'input-number a una stringa vuota
//     phrase = [];
//     document.getElementById('phrase-output').innerHTML = phrase;
// });
        let n = document.getElementById('input-number');
        let number;
        let error = '';
        let phrase;
        const loader = document.getElementById('loader');

        const generatePhrase = document.querySelector('.btn-generate');
        const resetInput = document.querySelector('.btn-reset');

        generatePhrase.addEventListener('click', function() {
            phrase = [];
            document.getElementById('phrase-output').innerHTML = phrase;
            let number = parseInt(n.value); // Assicurati che number sia un numero intero
            console.log(number);
            if (number > 0 && !isNaN(number)) {
                loader.classList.remove('hidden'); // Mostra il loader
                let requests = [];
                for (let i = 0; i < number; i++) {
                    requests.push(axios.get(apiURL)); // Aggiungi le richieste in un array
                }

                Promise.all(requests)
                    .then(responses => {
                        let phrase = responses.map(response => response.data.response); // Estrai le frasi dalle risposte
                        document.getElementById('phrase-output').innerHTML = phrase.join(' ');
                    })
                    .catch(error => {
                        console.error('Errore nella richiesta:', error);
                    })
                    .finally(() => {
                        loader.classList.add('hidden'); // Nascondi il loader quando hai completato tutte le richieste
                    });
            } else {
                document.getElementById('phrase-output').innerHTML = 'Numero inserito non valido!';
            }
        });

        resetInput.addEventListener('click', function(){
            n.value = ''; // Resetta il valore dell'input-number a una stringa vuota
            phrase = [];
            document.getElementById('phrase-output').innerHTML = phrase;
        });