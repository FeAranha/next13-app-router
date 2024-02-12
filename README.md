# Arquitetura do Next.js

Em uma aplicação React tradicional, o usuário acessa diretamente o front-end, que é construído com JavaScript, CSS e HTML. No entanto, o usuário precisa esperar o carregamento desses arquivos, o que pode resultar em uma tela em branco até que tudo seja carregado. Somente após o carregamento do JavaScript, a aplicação começa a funcionar e pode buscar dados da API, por exemplo.

SPA:

![SPA](https://github.com/FeAranha/next13-app-router/assets/28874783/cad64d37-101e-471e-9cf8-a4710b2fcbc0)

Já o Next.js introduz o conceito de Server Side Rendering (SSR), onde o servidor Node.js busca os arquivos necessários para renderizar apenas a página que o usuário está acessando. Isso significa que o HTML é montado pelo servidor e enviado pronto para o usuário, não sendo necessário o carregamento completo do JavaScript no navegador. O Next.js também permite buscar dados da API no servidor, facilitando a transição de dados entre a API e a aplicação.

SSR:

![SSR](https://github.com/FeAranha/next13-app-router/assets/28874783/a2a52bb7-8e9c-45ae-a6c1-2f0d85a2d5c2)

Essa arquitetura do Next.js possibilita o uso de funcionalidades avançadas do React, como os Server Components, que revolucionam o desenvolvimento front-end. O Next.js é o único framework que suporta essa nova arquitetura do React, tornando-o uma escolha recomendada para criar aplicações React atualmente.

# Árvore de componentes no Next.js

A cor laranja indica server components e azul para client components, normalmente queremos as pages.tsx como server components, pois é onde possui a maior parte de HTML, CSS e quanto mais estatico mais leve. Sempre pensamos num novo componente como server componente e conforme necessidade alteramos para client component. Lembrando que quando houver interação do usuário deve ser um client component, podendo isolar apenas a parte que usa JS.

![app](https://github.com/FeAranha/next13-app-router/assets/28874783/3e3c0734-c7dd-4c4d-baf5-16249ce068b9)

Neste exemplo de loja, como podemos fazer a interação entre o AddToCart e Cart? Ao clicar em add o compoente Cart deve ser atualizado, podemos utilizar Contextos e para isso os componentes devem estar no mesmo nivel, então basta involve-los por um client component:

![cartContext](https://github.com/FeAranha/next13-app-router/assets/28874783/f75b63bb-2b53-4145-b714-8d29968ee74b)

É necessárrio que os server component(laranja) sejam enviados ao CartContext(client componente, azul) como children .
