document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Perfil atualizado com sucesso!');
    });
});
