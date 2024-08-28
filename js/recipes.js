document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        { title: 'Salada de Quinoa', description: 'Uma salada refrescante com quinoa e vegetais.', impact: 'Baixo' },
        { title: 'Smoothie Verde', description: 'Um smoothie nutritivo com espinafre e frutas.', impact: 'Baixo' },
        { title: 'Sopa de Lentilhas', description: 'Sopa rica em proteínas e fibras.', impact: 'Moderado' }
    ];

    const recipeList = document.getElementById('recipe-list');
    
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe-item');
        recipeElement.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <p>Impacto Ambiental: ${recipe.impact}</p>
        `;
        recipeList.appendChild(recipeElement);
    });
});
