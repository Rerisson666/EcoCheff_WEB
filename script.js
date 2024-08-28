document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        { title: 'Salada de Quinoa', impact: 'Baixo' },
        { title: 'Smoothie Verde', impact: 'Baixo' },
        { title: 'Sopa de Lentilhas', impact: 'Moderado' }
    ];

    const recipeList = document.getElementById('recipe-list');
    const impactReport = document.getElementById('impact-report');
    
    // Render recipes
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `<h3>${recipe.title}</h3><p>Impacto Ambiental: ${recipe.impact}</p>`;
        recipeList.appendChild(recipeElement);
    });

    // Handle preference form submission
    const preferencesForm = document.getElementById('preferences-form');
    preferencesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const preference = document.getElementById('preference').value;
        alert(`Preferência alimentícia salva: ${preference}`);
    });

    // Sample impact report
    impactReport.innerHTML = `
        <p>Relatório de impacto ambiental das receitas:</p>
        <ul>
            ${recipes.map(recipe => `<li>${recipe.title}: ${recipe.impact}</li>`).join('')}
        </ul>
    `;
});
