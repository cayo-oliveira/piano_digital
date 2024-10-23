// scripts/main.js

// Dicionário de acordes
const chords = {
    "C": ['C', 'E', 'G'],
    "D": ['D', 'F#', 'A'],
    "E": ['E', 'G#', 'B'],
    "F": ['F', 'A', 'C'],
    "G": ['G', 'B', 'D'],
    "A": ['A', 'C#', 'E'],
    "B": ['B', 'D#', 'F#'],
    "Cm": ['C', 'Eb', 'G'],
    "Dm": ['D', 'F', 'A'],
    "Em": ['E', 'G', 'B'],
    "Fm": ['F', 'Ab', 'C'],
    "Gm": ['G', 'Bb', 'D'],
    "Am": ['A', 'C', 'E'],
    "Bm": ['B', 'D', 'F#']
};

// Função para gerar as teclas do piano (apenas uma oitava)
function createPiano() {
    const pianoDiv = document.getElementById('piano');
    const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const blackNotes = [null, 'C#', 'D#', null, 'F#', 'G#', 'A#'];

    // Limpa o div piano
    pianoDiv.innerHTML = "";

    whiteNotes.forEach((note, index) => {
        // Cria as teclas brancas
        const whiteKey = document.createElement('div');
        whiteKey.className = 'piano-key white-key';
        whiteKey.id = note;  // ID é a nota
        whiteKey.innerText = note;
        whiteKey.addEventListener('click', () => highlightChord(note));  // Adiciona evento de clique
        pianoDiv.appendChild(whiteKey);

        // Adiciona as teclas pretas nos locais corretos
        if (blackNotes[index]) {
            const blackKey = document.createElement('div');
            blackKey.className = 'piano-key black-key';
            blackKey.id = blackNotes[index];  // ID é a nota
            blackKey.style.left = `${(index + 1) * 40 - 12.5}px`;  // Posiciona corretamente entre as teclas brancas
            blackKey.innerText = blackNotes[index];
            blackKey.addEventListener('click', () => highlightChord(blackNotes[index]));  // Adiciona evento de clique
            pianoDiv.appendChild(blackKey);
        }
    });
}

// Função para tocar acorde e destacar as teclas tocadas
function playChord() {
    const selectedChord = document.getElementById('chord').value;
    highlightChord(selectedChord);
}

// Função para destacar as teclas de um acorde ou nota
function highlightChord(note) {
    const notes = chords[note] || [note];  // Se a nota não for um acorde, trata como nota individual

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Notas do acorde ${note}: ${notes.join(', ')}`;

    // Remove a classe 'active' de todas as teclas
    document.querySelectorAll('.white-key').forEach(key => key.classList.remove('active-white'));
    document.querySelectorAll('.black-key').forEach(key => key.classList.remove('active-black'));

    // Adiciona a classe 'active' para as teclas que correspondem ao acorde tocado ou nota individual
    notes.forEach(note => {
        const keyElement = document.getElementById(note);
        if (keyElement) {
            if (keyElement.classList.contains('white-key')) {
                keyElement.classList.add('active-white');
            } else if (keyElement.classList.contains('black-key')) {
                keyElement.classList.add('active-black');
            }
        }
    });
}

// Inicializar o piano ao carregar a página
window.onload = function() {
    createPiano();

    // Evento de tocar acorde
    document.getElementById('playChord').addEventListener('click', playChord);
};
