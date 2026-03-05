/**
 * Elementos do DOM
 */
const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

/**
 * Obtém o valor do campo de busca
 * @returns {string} Nome do usuário digitado
 */
export function getSearchInput() {
  return inputSearch.value.trim();
}

/**
 * Limpa o campo de busca
 */
export function clearSearchInput() {
  inputSearch.value = "";
}

/**
 * Mostra um loader na área de resultados
 */
export function showLoader() {
  profileResults.innerHTML = '<div class="loader"></div>';
}

/**
 * Limpa a área de resultados
 */
export function clearResults() {
  profileResults.innerHTML = "";
}

/**
 * Exibe os dados do perfil do usuário
 * @param {Object} userData - Dados do usuário do GitHub
 */
export function renderUserProfile(userData) {
  const name = userData.name || userData.login;
  const bio = userData.bio || "Não possui bio cadastrada 😥.";

  profileResults.innerHTML = `
        <div class="profil-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${name}</h2>
                <p>${bio}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
}

/**
 * Adiciona event listener ao botão de busca
 * @param {Function} callback - Função a ser executada ao clicar
 */
export function onSearchButtonClick(callback) {
  btnSearch.addEventListener("click", callback);
}

/**
 * Mostra um alerta para o usuário
 * @param {string} message - Mensagem do alerta
 */
export function showAlert(message) {
  alert(message);
}
