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

// Função para gerar as teclas do piano
function createPiano() {
    const pianoDiv = document.getElementById('piano');
    const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const blackNotes = [null, 'C#', 'D#', null, 'F#', 'G#', 'A#', null];

    // Limpa o div piano
    pianoDiv.innerHTML = "";

    // Adiciona teclas brancas
    whiteNotes.forEach((note, index) => {
        const whiteKey = document.createElement('div');
        whiteKey.className = 'piano-key white-key';
        whiteKey.innerText = note;
        pianoDiv.appendChild(whiteKey);

        // Adiciona teclas pretas (com posição relativa)
        if (blackNotes[index]) {
            const blackKey = document.createElement('div');
            blackKey.className = 'piano-key black-key';
            blackKey.style.left = `${(index + 1) * 40 - 12.5}px`;  // Posição correta entre as teclas brancas
            blackKey.innerText = blackNotes[index];
            pianoDiv.appendChild(blackKey);
        }
    });
}

// Função para tocar acorde
function playChord() {
    const selectedChord = document.getElementById('chord').value;
    const notes = chords[selectedChord];

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Notas do acorde ${selectedChord}: ${notes.join(', ')}`;
}

// Inicializar o piano ao carregar a página
window.onload = function() {
    createPiano();

    // Evento de tocar acorde
    document.getElementById('playChord').addEventListener('click', playChord);
};
