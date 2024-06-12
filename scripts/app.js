document.addEventListener('DOMContentLoaded', function() {
    // Beispiel-Fragen (diese würden normalerweise aus der Excel-Datei stammen)
    const questions = [
        "Wie bewerten Sie die digitale Reife Ihres Unternehmens?",
        "Wie gut ist die IT-Infrastruktur in Ihrem Unternehmen?",
        "Wie effektiv sind die digitalen Prozesse in Ihrem Unternehmen?"
    ];

    const form = document.getElementById('assessment-form');
    const resultsContent = document.getElementById('results-content');

    // Fragen dynamisch hinzufügen
    questions.forEach((question, index) => {
        const label = document.createElement('label');
        label.htmlFor = `question-${index}`;
        label.textContent = question;
        
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `question-${index}`;
        input.name = `question-${index}`;
        input.min = 1;
        input.max = 5;
        input.required = true;
        
        form.appendChild(label);
        form.appendChild(input);
    });

    // Formulardaten verarbeiten und Ergebnisse anzeigen
    document.getElementById('submit-assessment').addEventListener('click', function() {
        const answers = questions.map((_, index) => {
            const input = document.getElementById(`question-${index}`);
            return parseInt(input.value);
        });

        // Beispiel-Berechnung der Ergebnisse
        const total = answers.reduce((acc, val) => acc + val, 0);
        const average = total / answers.length;

        resultsContent.innerHTML = `<p>Ihre durchschnittliche Bewertung: ${average.toFixed(2)}</p>`;
    });

    // Kontaktformular
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Nachricht gesendet!');
        contactForm.reset();
    });
});
