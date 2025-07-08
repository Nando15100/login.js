const botao_Enviar = document.getElementById('form-login');

// SEMPRE QUE FOR FORMULÁRIO O EVENTO É SUBMIT
botao_Enviar.addEventListener('submit', logar); 

//PREVINE O ENVIO PADRÃO DO FORMULÁRIO
async function logar(event) {
  event.preventDefault(); 

  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!usuario || !senha) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  try {
    const resposta = await fetch('/login_Tipo_Usuario', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, senha })
    });

    const resultado = await resposta.json();

    if (resposta.ok) {
     window.location.href = '../Nome_Da_Pasta_Aonde_Esta_O_Arquivo_Para_Abrir_Depois_De_Logar/Arquivo_Que_Vai_Abrir.html';
    } else {
         alert(resultado.message || 'Usuário ou senha incorretos!');
    }

  } catch (error) {
    console.error('Erro no login:', error);
    alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
  }
}
