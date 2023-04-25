const btnCopiar = document.getElementById('texto__des--copiar');

function copiarTexto() {
  const texto = document.getElementById('resultado').value;

  if (!navigator.clipboard) {
    // Navegador não suporta a API Clipboard
    return;
  }

  navigator.clipboard.writeText(texto).then(function() {
    console.log('Texto copiado para a área de transferência.');
  }, function() {
    console.error('Falha ao copiar texto para a área de transferência.');
  });
}

btnCopiar.addEventListener('click', function() {
  copiarTexto();
});