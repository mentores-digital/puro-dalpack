# Estrutura de desenvolvimento para Lojas integradas

## Início
Essa estrutura do projeto está hospedada e atualizada no GitHub (https://github.com/mentores-digital/Estrutura-de-temas-LI) .


Para esta versão rodar é necessário ter a versão do Node v14.16.1

Link: https://nodejs.org/ja/blog/release/v14.16.1/

Feito o clone do repositório é necessário iniciar o ambiente de desenvolvimento, instalando os recursos necessários com o seguinde comando:

`npm install` ou `yarn install`

Lembrando que, após a instalação, é recomendado que seja executado o comando `npm audit fix`.

Após a estrutura toda estar instalada no seu diretório de desenvolvimento, há dois meios de gerar os arquivos:

- Modo de Desenvolvimento: `npm run start` ou `yarn start` irá levantar um "servidor" de desenvolivmento para a compilação em tempo real _(não minificados para debug)_.
- Modo de produção: `npm run build` ou `yarn build` irá gerar os arquivos minificados e compilados para ser inserido no Loja Integrada.


## Observações sobre o npm run build e npm run start

- Após a instalação de todos os pontos, ao executar o npm run build, provávelmente retornará erro, portanto, deve executar os seguintes passos:

- Executar o `npm run start` e dar um um save em qualquer arquivo js, scss e html.

- Assim, pare a execução do run start e execute `npm run build`.

- Após essa primeira execução do `npm run start` e `npm run build`, não é mais necessário realizar os passos acima. A partir do momento em que o ambiente estiver instalado e tiver executado os passos acima uma vez, daqui pra frente, utilizar apenas o `npm run build && npm run build` para subir os arquivos.

- No caso da Loja Integrada, observou-se que utilizar o comando `npm run build && npm run build` acaba evitando o problema da cache de maneira mais eficiente, recomendo que utilize sempre esse comando para subir as alterações na Loja Integrada. Basicamente, ele executa o mesmo comando duas vezes na sequência, quando um terminar o outro comando inicia.

- Este ponto trata-se de um bug que ainda não foi corrigido. Sugestão: tente corrigir tal bug para apenas fazer o upload apenas com o `npm run build && npm run build`, o problema (muito provavelmente está no arquivo `gulpfile.js`).


## Não esqueça de declarar o .env

Neste repositório, existe o arquivo `.env.example`, nele deve ser inserido as informações do servidor que hospeda os arquivos da Loja Integrada, assim que preencher os dados mudar o nome do arquivo de `.env.example` para `.env`. Lembrando que, cada projeto da Loja Integrada possui uma pasta específica, portanto, quando for declarar o `PROJECT=` coloque o nome do projeto em que está trabalhando, caso ainda não exista.

Para conseguir as informações de acesso do `.env`, converse com os outros devs, eles terão tal informação.


## Execução do ambiente em máquinas Windows

Foi identificado que em máquinas Windows a instalação do ambiente e a execução do `npm run start` e `npm run build && npm run build` resultam em erro. Em uma certa ocasião, consegui resolver a situação executando os seguintes comandos (lembrando que tais passos são levados em conta que ainda não foi instalado o node e o ambiente).

- Clone o repositório para sua máquina
- Instale o node-v14.16.1 (https://nodejs.org/ja/blog/release/v14.16.1/)
- `npm install`
- `npm audit fix`
- `npm install -g dotenv-extended`
- `npm install dotenv`
- `npm audit fix`
- `npm install -g win-node-env`
- Em seguida, realizar os mesmos passos de `Observações sobre o npm run build e npm run start`

Em alguns casos, ainda assim pode não funcionar, mas indico verificar o retorno de erros e realizar a respectiva correção.

## Tecnologias do projeto
Para o padrão de projeto, optamos em desenvolver o sistema utilizando as tecnologias:
- **SASS:** O desenvolvedor deverá utilizar SASS para desenvolver os estilos do projeto, assim adicionando dinamicidade e facilidade no desenvolvimento do tema.
- **JS Vanilla:**, O desenvolvedor deverá utilizar somente JS puro para o desenvolvimento dos temas a partir dessa estrutura. Isso evitará problemas de conflitos de versão, plugins mau utilizados e principalmente domínio do código fonte pela equipe.
- **HTML5:** O desenvolvedor deverá ser bem crítico com a semantica do HTML, seguindo as boas práticas estabelecidas na versão 5 do HTML.

## Padrões de projeto
Aqui setaremos alguns padrões de projetos que planejamos para a fácil construção dos temas e principalmente para a manutenção do projeto.

#### Classes de Estilo
Recomenda-se que sejam utilizados prefixos de classes para segmentar as nossas classes e identificadores dos padrões do LI. Para isso segue nos arquivos os exemplos do puro, onde as classes e ids tem um prefixo determinado:

```scss 
    #puro {
        &-section {
            .puro {
                &-title    { ... }
                &-subtitle { ... }
                &-descript { ... }
            }
        }
    }
```
#### JavaScript
Recomenda-se que seja utilizado somente JS Puro, o famoso Vanilla (**Não utilize JQuery nos projetos**). Como pedra fundamental para que tenhamos um software manutenível e sob total domínio da Mentores. Para isso aqui cito alguns padrões desejados nesse tipo de projetos:
...

## Estrutura
A estrutura hierárquica proposta foi desenvolvida para termos um padrão de desenvolvimento técnico e automático de funcionalidades para o tema puro ou qualquer outro tema customizado para os clientes de Loja Integrada. Composta pela estrutura:

<pre>
/Buid
/node_modules
/src
--/html
--/javascript
--/sass
----/abstracts
----/components
----/pages
</pre>

### build:
Diretório onde os arquivos compilados para publicação na Loja Integrada estarão disponíveis (tanto em modo dev como prod).

### node_modules:
Esse diretório é onde estão os componentes do node para o funcionamento do Gulp, esse diretório será gerado assim que o projeto for iniciado pelo comando ``npm install`` ou ``yarn install`` _(Não mexa nesse diretório)_.

### src:
Diretório onde o código fonte da aplicação deverá ser editado/alocado, sendo dividido em especialidades ou linguagens.

### html:
Diretório onde devem estar **todos** os arquivos html do tema. Esse diretório será a fonte para o compilador minificar (em produção) os arquivos html do tema.

### javascript
Diretório onde devem estar **todos** os arquivos js não minificados do tema. Esse diretório será a fonte para o compilador minificar (em produção) os arquivos js do tema.

O diretório library dentro desse diretório, tem a função de hospedar todos os scripts de terceiros que serão necessários para o funcionamento do seu scritp. _Exemplo: lightbox, carousel, etc._

### sass
Diretório onde devem estar **todos** os arquivos scss não minificados do tema. Esse diretório será a fonte para o compilador minificar (em produção) os arquivos scss do tema.

Nesse diretório existem subdiretórios que são responsáveis pelas especialidades e organização da estrutura:

- **Abstract:** Responsável em hospedar os arquivos de abstração, como: _cores, fontes, resets, etc._
- **components:** Responsável em hospedar os arquivos de componentização do layout, como: _botões, títulos, textos, etc_
- **pages:** Responsável em hospedar os arquivos de estilo páginas, ou seja, contém todos os estilos direcionados específicamente a uma página em especial.

O arquivo **main.scss** é o responsável por chamar os outros scripts de estilo internos aos diretórios citados acima, ou seja, será necessária a declaração dos itens de componentes e pages para que o compilador acate suas mudanças. Além disso é responsável pela declaração da ordem de carregamento dos scripts.

### Loja integrada 
Em uma recente mudança, foram colocados os arquivos de CSS e JS "compilados" em um servidor próprio para ser consumido pela Loja Integrada atravez de tags HTML de inclusão, isso porque o processo de salvar localmente, abrir o LI, colar os scripts, salvar e atualizar o navegador e verificar as mudanças era moroso e nada produtivo, além disso temos as limitações de números de caracteres de cada tipo de arquivos, quebrando toda a nossa estrutura organizacional e o famigerado cache da plataforma.

Para sanar isso, foi criado uma *task* no Gulp do projeto que faz o upload dos arquivos *css* e *js* para um servidor próprio, fazendo o papel de um CND. Dessa forma sendo necessário somente adicionar o include dos arquivos na plataforma Loja Integrada.

#### **Problemas com cache**
Apesar da solução do *Gulp* ser produtiva, não resolve o problema do cache da plataforma. Então foi criado um "modelo" de inclusão de conteúdos/script para evitar que a plataforma salve em seu cache os arquivos *embedados* do nosso CDN. Sendo necessário adicionar os seguintes scripts JS aos blocos de código da plataforma:

**Para os estilos CSS:**
```js
document.addEventListener("DOMContentLoaded", function() {
    'strict'
    const head   = document.querySelector('head');
    const styles = document.createElement('link');
    styles.rel   = 'stylesheet';
    styles.type  = 'text/css';
    styles.href  = `https://dominiodocdn.com.br/nome-do-projeto/build/style.min.css?version=${Math.floor(Math.random() * 100)}`;
    head.append(styles);
});
```
**Para os scripts JavaScript:**
```js
document.addEventListener("DOMContentLoaded", function() {
    'strict'
    const script = document.createElement('script');
    script.src   = `https://dominiodocdn.com.br/nome-do-projeto/build/scripts.min.js?version=${Math.floor(Math.random() * 100)}`;
    document.body.append(script);
});
```

## Responsáveis técnicos
- Engenheiro: **Vento Macedo** (41) 99503-3349 | rafa.osbourne@gmail.com
- Desenvolvedor: **Rafael Branco** (41) 99888-5121 | rafael.rbranco@hotmail.com
