import { fetchGitHubUser } from './api.js';
import {
    getSearchInput,
    clearSearchInput,
    showLoader,
    clearResults,
    renderUserProfile,
    onSearchButtonClick,
    showAlert
} from './dom.js';

/**
 * Manipulador de busca de usuário GitHub
 */
async function handleSearchUser() {
    const userName = getSearchInput();

    // Validação: verifica se o campo está vazio
    if (!userName) {
        showAlert('Por favor, digite um nome de usuário do Github');
        return;
    }

    try {
        // Mostra loader durante a busca
        showLoader();

        // Busca dados do usuário na API
        const userData = await fetchGitHubUser(userName);

        // Renderiza o perfil do usuário
        renderUserProfile(userData);

        // Limpa o campo de entrada
        clearSearchInput();

    } catch (error) {
        // Limpa resultados em caso de erro
        clearResults();
        console.error('Erro ao buscar o perfil do usuário:', error);

        if (error.message === 'Usuário não encontrado') {
            showAlert('Usuário não encontrado. Por favor, tente novamente.');
        } else {
            showAlert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        }
    }
}

// Inicializa o event listener do botão de busca
onSearchButtonClick(handleSearchUser);