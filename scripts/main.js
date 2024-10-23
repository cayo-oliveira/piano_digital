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

    // Limpa o div piano
    pianoDiv.innerHTML = "";

    for (let i = 0; i < 7; i++) {
        whiteNotes.forEach(note => {
            const keyDiv = document.createElement('div');
            keyDiv.className = 'piano-key white-key';
            keyDiv.innerText = note;
            pianoDiv.appendChild(keyDiv);
        });

        const blackNotes = ['C#', 'D#', null, 'F#', 'G#', 'A#', null];
        blackNotes.forEach((note, index) => {
            if (note) {
                const blackKeyDiv = document.createElement('div');
                blackKeyDiv.className = 'piano-key black-key';
                blackKeyDiv.innerText = note;
                pianoDiv.appendChild(blackKeyDiv);
            }
        });
    }
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
