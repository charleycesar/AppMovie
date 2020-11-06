# Bem-vindo ao AppMovie 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)

> Este aplicativo permite que você consulte filmes e tv shows. O appMovie utiliza a api do the movie database.

## Preview

![](https://raw.githubusercontent.com/charleycesar/AppMovie/master/assets/screenshots/screen_1.png)
![](https://raw.githubusercontent.com/charleycesar/AppMovie/master/assets/screenshots/screen_2.png)
![](https://raw.githubusercontent.com/charleycesar/AppMovie/master/assets/screenshots/screen_3.png)
![](https://raw.githubusercontent.com/charleycesar/AppMovie/master/assets/screenshots/screen_4.png)
![](https://raw.githubusercontent.com/charleycesar/AppMovie/master/assets/screenshots/screen_5.png)
![](https://raw.githubusercontent.com/charleycesar/AppMovie/master/assets/screenshots/screen_6.png)

## Requerimentos

É necessário instalar as dependências requeridas pelo React Native:

-   [Node >= v13.10.1](https://nodejs.org/en/download/package-manager/)
-   [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
-   [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Instalação de dependências

Supondo que você tenha todos os requisitos instalados, você pode configurar e executar o projeto executando:

-   `yarn install` para instalar as dependências do projeto
-   Seguir as etapas abaixo para cada plataforma.

### Android

-   somente na primeira vez que estiver rodando o projeto, será necessário gerar uma debug key:
    -   `cd android/app`
    -   `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
    -   `cd ../..` Volte para a raiz do projeto
-   `yarn start` Para iniciar o server
-   `yarn android` Para buildar o app (o emulador deve estar aberto)

### Configurações adicionais IOS

-   `cd ios` Entrar na pasta do IOS
-   `pod install` Para instalar as dependências nativas

## IOS

-   `yarn start` Para iniciar o server
-   `yarn ios` Para buildar o app (o emulador deve estar aberto)

## Rodar testes

-   `yarn test` Para executar os testes unitários

## Autor

👤 **Charley Oliveira**

-   Website: https://charleycesar.github.io
-   Github: [@charleycesar](https://github.com/charleycesar)
-   LinkedIn: [@charleydev](https://linkedin.com/in/charleydev)

## 📝 License

Copyright © 2020 [Charley Oliveira](https://github.com/charleycesar).
