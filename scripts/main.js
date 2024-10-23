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

// Função para tocar acordes
function playChord() {
    const selectedChord = document.getElementById('chord').value;
    const notes = chords[selectedChord];

    const output = document.getElementById('output');
    output.innerHTML = `Notas do acorde ${selectedChord}: ${notes.join(', ')}`;
    
    // Simulação de som (básica) usando a API de Web Audio
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;

    notes.forEach((note, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = getFrequency(note);
        gainNode.gain.setValueAtTime(1, now + index * 0.2);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + index * 0.5);
        
        oscillator.start(now + index * 0.2);
        oscillator.stop(now + index * 0.5);
    });
}

// Frequências das notas (simplificado)
function getFrequency(note) {
    const frequencies = {
        'C': 261.63, 'C#': 277.18, 'D': 293.66, 'Eb': 311.13,
        'E': 329.63, 'F': 349.23, 'F#': 369.99, 'G': 392.00,
        'G#': 415.30, 'A': 440.00, 'Bb': 466.16, 'B': 493.88
    };
    return frequencies[note] || 0;
}

// Associa o botão de tocar acorde à função
document.getElementById('playChord').addEventListener('click', playChord);
