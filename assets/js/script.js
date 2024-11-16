function showSection(sectionId, clickedButton) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden'); // Agrega la clase 'hidden'
    });

    // Muestra solo la sección seleccionada
    document.getElementById(sectionId).classList.remove('hidden');

    // Quita la clase "selected" de todos los botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    // Añade la clase "selected" al botón que fue presionado
    clickedButton.classList.add('selected');

    // Mostrar/ocultar el nombre en la barra de navegación
    const navName = document.querySelector('.nav-name');
    if (sectionId === 'about') {
        navName.classList.add('hidden'); // Oculta el nombre en "Profile"
    } else {
        navName.classList.remove('hidden'); // Muestra el nombre en otras secciones
    }
}
