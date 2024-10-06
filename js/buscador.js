// Pega o formulário
const searchForm = document.getElementById('searchForm');
  
// Adiciona um evento ao submeter o formulário
searchForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita o comportamento padrão de enviar o formulário
  
  // Pega o valor do input de busca
  const searchQuery = document.getElementById('searchInput').value;
  
  // Se o campo de busca não estiver vazio, faz a pesquisa no Google com site restrito
  if (searchQuery) {
    const googleSearchURL = `https://www.google.com/search?q=site:aerobus.com.br+${encodeURIComponent(searchQuery)}`;
    
    // Redireciona para o Google com a busca
    window.location.href = googleSearchURL;
  }
});