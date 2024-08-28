document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        { title: 'Salada de Quinoa', description: 'Uma salada refrescante com quinoa e vegetais.', impact: 'Baixo', image: 'salad.jpg' },
        { title: 'Smoothie Verde', description: 'Um smoothie nutritivo com espinafre e frutas.', impact: 'Baixo', image: 'smoothie.jpg' },
        { title: 'Sopa de Lentilhas', description: 'Sopa rica em proteínas e fibras.', impact: 'Moderado', image: 'soup.jpg' }
    ];

    const recipeList = document.getElementById('recipe-list');
    
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe-item');
        recipeElement.innerHTML = `
            <img src="images/${recipe.image}" alt="${recipe.title}">
            <div>
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <p>Impacto Ambiental: ${recipe.impact}</p>
            </div>
        `;
        recipeList.appendChild(recipeElement);
    });
});
