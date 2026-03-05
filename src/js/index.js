const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com/users';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {
        try {
            // Agora mostra apenas o texto de carregamento
            profileResults.innerHTML = '<p>Carregando...</p>';

            const response = await fetch(`${BASE_URL}/${userName}`);
            
            if (!response.ok) {
                profileResults.innerHTML = '';
                alert('Usuário não encontrado. Por favor, tente novamente.');
                return;
            }

            const userData = await response.json();
            
            profileResults.innerHTML = `
            <div class="profil-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name || userData.login}</h2>
                    <p>${userData.bio || 'Não possui bio cadastrada 😥.'}</p>
                </div>
            </div>`;

        } catch (error) {
            profileResults.innerHTML = '';
            console.error('Erro ao buscar o perfil do usuário:', error);
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        }
    } else {
        alert('Por favor, digite um nome de usuário do Github');
    }
});