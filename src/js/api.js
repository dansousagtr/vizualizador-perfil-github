const BASE_URL = 'https://api.github.com/users';

/**
 * Busca dados do usuário na API do GitHub
 * @param {string} userName - Nome do usuário do GitHub
 * @returns {Promise<Object>} Dados do usuário
 * @throws {Error} Se houver erro na requisição ou usuário não encontrado
 */
export async function fetchGitHubUser(userName) {
    const response = await fetch(`${BASE_URL}/${userName}`);
    
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }

    return await response.json();
}
