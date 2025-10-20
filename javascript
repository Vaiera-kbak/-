// Инициализация Reveal.js
Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    center: false,
    transition: 'slide',
    
    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [ ]
});

// Дополнительные кастомные функции
Reveal.addEventListener('slidechanged', function(event) {
    // Логика при смене слайда
    console.log('Новый слайд:', event.indexh, event.indexv);
});

// Пример кастомной функции
function showLanguageFact(language) {
    alert(Интересный факт о языке ${language});
}
