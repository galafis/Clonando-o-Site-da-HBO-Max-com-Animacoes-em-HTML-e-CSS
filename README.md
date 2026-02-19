# Projeto Clone HBO Max

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Animations](https://img.shields.io/badge/CSS-Animations-blueviolet?style=for-the-badge)

</div>

![Imagem Hero do Projeto HBO Max](assets/hbo-max-hero.png)

Este projeto foi desenvolvido como parte do desafio final da Formação HTML e CSS na plataforma DIO. A proposta era criar um clone visual da página inicial da HBO Max utilizando apenas **HTML e CSS**, com foco em **responsividade e animações**.

## 🎯 Objetivo

Colocar em prática todos os conceitos aprendidos durante a formação, especialmente:

- Estruturação semântica com HTML5
- Criação de layouts modernos com Flexbox
- Responsividade com media queries
- Animações utilizando `@keyframes`
- Uso de boas práticas de organização no código

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- Animações com `keyframes`
- Layout flexível e responsivo

## 🗺️ Estrutura da Página e Fluxo de Animações

```mermaid
flowchart TD
    A[index.html] --> B[Header]
    A --> C[Seção Hero]
    A --> D[Seção de Planos]
    A --> E[Seção de Catálogo]
    A --> F[Footer]

    B --> B1[Logo HBO Max]
    B --> B2[Botão de Assinar]

    C --> C1[Título Principal]
    C --> C2[Subtítulo]
    C --> C3[CTA Button]
    C --> C4[Imagem de Fundo\nGradiente Overlay]

    D --> D1[Card Plano Básico]
    D --> D2[Card Plano Padrão]
    D --> D3[Card Plano Premium]

    C1 & C2 & C3 -->|@keyframes fadeInDown| AN1[Animação de Entrada\nfade + slide]
    D1 & D2 & D3 -->|@keyframes fadeInUp| AN2[Animação de Entrada\nstagger delay]
    E -->|@keyframes slideIn| AN3[Animação de Scroll]
    AN1 & AN2 & AN3 --> R[Responsivo via Media Queries\nDesktop · Tablet · Mobile]
```

## 🔗 Repositório base da expert

Estudei e me inspirei no repositório da expert Michele Ambrosio:
[https://github.com/micheleambrosio/hbomax](https://github.com/micheleambrosio/hbomax)


## 💡 O que aprendi com esse desafio

Como estudante de Ciência de Dados, sair um pouco da zona técnica e explorar o front-end me fez enxergar a importância da experiência visual. Conseguir entregar uma interface clara e agradável para os usuários também é parte do valor de um bom produto de dados.

---

Feito com dedicação por um futuro cientista de dados que também curte construir interfaces bonitas e funcionais 💜


## 📋 Descrição do Projeto

Este repositório contém o código-fonte de um clone visual da página inicial da HBO Max, desenvolvido com HTML e CSS. O projeto demonstra a aplicação de conceitos de front-end como estruturação semântica, layout responsivo e animações CSS para criar uma experiência de usuário dinâmica e visualmente atraente. É um exemplo prático de como as habilidades de desenvolvimento web podem complementar a análise de dados, focando na entrega de produtos digitais completos e funcionais.


## 📦 Instalação

Para clonar e executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/galafis/Clonando-o-Site-da-HBO-Max-com-Animacoes-em-HTML-e-CSS.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Clonando-o-Site-da-HBO-Max-com-Animacoes-em-HTML-e-CSS
    ```
3.  **Abra o arquivo `index.html` no seu navegador preferido.**


## 💻 Uso

Após a instalação, basta abrir o arquivo `index.html` em qualquer navegador web moderno para visualizar o clone da página da HBO Max. Explore a responsividade redimensionando a janela do navegador e observe as animações CSS em ação. O projeto é puramente front-end, não requerendo servidor ou configurações adicionais.


## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

**Autor:** Gabriel Demetrios Lafis


# 🎬 HBO Max Clone Project

![HBO Max Project Hero Image](assets/hbo-max-hero.png)

This project was developed as part of the final challenge of the HTML and CSS Training on the DIO platform. The proposal was to create a visual clone of the HBO Max homepage using only **HTML and CSS**, focusing on **responsiveness and animations**.

## 🎯 Objective

To put into practice all the concepts learned during the training, especially:

- Semantic structuring with HTML5
- Creation of modern layouts with Flexbox
- Responsiveness with media queries
- Animations using `@keyframes`
- Use of good code organization practices

## 🚀 Technologies Used

- HTML5
- CSS3
- Animations with `keyframes`
- Flexible and responsive layout

## 🗺️ Page Structure and Animation Flow

```mermaid
flowchart TD
    A[index.html] --> B[Header]
    A --> C[Hero Section]
    A --> D[Plans Section]
    A --> E[Catalog Section]
    A --> F[Footer]

    B --> B1[HBO Max Logo]
    B --> B2[Subscribe Button]

    C --> C1[Main Title]
    C --> C2[Subtitle]
    C --> C3[CTA Button]
    C --> C4[Background Image\nGradient Overlay]

    D --> D1[Basic Plan Card]
    D --> D2[Standard Plan Card]
    D --> D3[Premium Plan Card]

    C1 & C2 & C3 -->|@keyframes fadeInDown| AN1[Entry Animation\nfade + slide]
    D1 & D2 & D3 -->|@keyframes fadeInUp| AN2[Entry Animation\nstagger delay]
    E -->|@keyframes slideIn| AN3[Scroll Animation]
    AN1 & AN2 & AN3 --> R[Responsive via Media Queries\nDesktop · Tablet · Mobile]
```

## 🔗 Expert's base repository

I studied and was inspired by Michele Ambrosio's repository:
[https://github.com/micheleambrosio/hbomax](https://github.com/micheleambrosio/hbomax)


## 💡 What I learned from this challenge

As a Data Science student, stepping out of the technical zone a bit and exploring front-end made me realize the importance of visual experience. Being able to deliver a clear and pleasant interface for users is also part of the value of a good data product.

---

Made with dedication by a future data scientist who also enjoys building beautiful and functional interfaces 💜


## 📋 Project Description

This repository contains the source code for a visual clone of the HBO Max homepage, developed with HTML and CSS. The project demonstrates the application of front-end concepts such as semantic structuring, responsive layout, and CSS animations to create a dynamic and visually appealing user experience. It is a practical example of how web development skills can complement data analysis, focusing on delivering complete and functional digital products.


## 📦 Installation

To clone and run this project locally, follow the steps below:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/galafis/Clonando-o-Site-da-HBO-Max-com-Animacoes-em-HTML-e-CSS.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Clonando-o-Site-da-HBO-Max-com-Animacoes-em-HTML-e-CSS
    ```
3.  **Open the `index.html` file in your preferred browser.**


## 💻 Usage

After installation, simply open the `index.html` file in any modern web browser to view the HBO Max page clone. Explore responsiveness by resizing the browser window and observe the CSS animations in action. The project is purely front-end, requiring no server or additional configurations.


## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

**Author:** Gabriel Demetrios Lafis


---

## English

### Overview

Projeto Clone HBO Max - A project built with HTML, CSS, developed by Gabriel Demetrios Lafis as part of professional portfolio and continuous learning in Data Science and Software Engineering.

### Key Features

This project demonstrates practical application of modern development concepts including clean code architecture, responsive design patterns, and industry-standard best practices. The implementation showcases real-world problem solving with production-ready code quality.

### How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/galafis/Clonando-o-Site-da-HBO-Max-com-Animacoes-em-HTML-e-CSS.git
   ```
2. Follow the setup instructions in the Portuguese section above.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Developed by [Gabriel Demetrios Lafis](https://github.com/galafis)
