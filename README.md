# Bora?

Repositório referente ao desenvolvimento do aplicativo Bora? Da disciplina de Projeto Integrador da UTFPR-CM

O aplicativo foi desenvolvido para a plataforma Android, utilizando o framworkd React Native, e faz uso do banco de dados Firebase e da API de mapa do Google.
O "Bora?" permite a criação e visualização de eventos de diferentes tipos, além de permitir a o usuário a criação de lembretes na agenda, visualização da rota até o evento, e notificações de acordo com os seus interesses, sendo uma ótima forma de descobrir novos eventos.


Passos para utilização do repositório

OBS: o SDK do android já deve estar previamente instalado e configurado
OBS: é necessário realizar os passos abaixo num computador Windows, caso seja realizado num sistema Linux a autenticação via Google não irá funcionar.
OBS: Num sistema Linux é necessário indicar o local do sdk do android por meio de um arquivo chamado "local.properties" que deve ser colocado dentro da pasta android, o conteúdo do arquivo deve ser "sdk.dir = path para o sdk"

1º: Faça o clone do repositório “$ git clone https://github.com/pexee/Bora-ProjetoPI.git"
2º: crie um projeto no firebase e faça a configuração do realtimeDatabase e storage
3º: configure a autenticação do firebase para permitir o login por e-mail/senha e via Google
4º: gere sua chave de SHA-1 de debug "https://developers.google.com/android/guides/client-auth"
5º: adicione um aplicativo no firebase, siga o passo a passo que será mostrado.
6º: crie uma conta de desenvolvedor no Google e habilite as API "maps" e "geocoding"
7º: edite os arquivos "src/components/editarEnderecoFrom..." e "src/components/evento/cadastrarEventoPage5" colocando a chave da api do passo anterior dentro do parâmetro "geocoder.init"
8º: Faça a configuração do Google function executando os comandos dentro da pasta do repositório "$ npm install -g firebase-tools", "$ firebase login" e "$ firebase init" (marque as opções 'functions' e 'database').
9º: instale as dependências com o comando "$ npm install"
10º: inicie o servidor com o comando "$ npm start"
11º: em outra aba do terminal instale o app com o comando "$ react-native run-android"
