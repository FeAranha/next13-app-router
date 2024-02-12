# Arquitetura do Next.js

Em uma aplicação React tradicional, o usuário acessa diretamente o front-end, que é construído com JavaScript, CSS e HTML. No entanto, o usuário precisa esperar o carregamento desses arquivos, o que pode resultar em uma tela em branco até que tudo seja carregado. Somente após o carregamento do JavaScript, a aplicação começa a funcionar e pode buscar dados da API, por exemplo.

SPA:

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b030109-af40-4394-9dc6-b8c93cc701b8/0534663d-4c76-4946-bf33-430c77c2f078/Untitled.png)

Já o Next.js introduz o conceito de Server Side Rendering (SSR), onde o servidor Node.js busca os arquivos necessários para renderizar apenas a página que o usuário está acessando. Isso significa que o HTML é montado pelo servidor e enviado pronto para o usuário, não sendo necessário o carregamento completo do JavaScript no navegador. O Next.js também permite buscar dados da API no servidor, facilitando a transição de dados entre a API e a aplicação.

SSR:

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b030109-af40-4394-9dc6-b8c93cc701b8/6f4eb342-16a4-4391-9aca-0857b3c1f291/Untitled.png)

Essa arquitetura do Next.js possibilita o uso de funcionalidades avançadas do React, como os Server Components, que revolucionam o desenvolvimento front-end. O Next.js é o único framework que suporta essa nova arquitetura do React, tornando-o uma escolha recomendada para criar aplicações React atualmente.


# Árvore de componentes no Next.js

A cor laranja indica server components e azul para client components, normalmente queremos as pages.tsx como server components, pois é onde possui a maior parte de HTML, CSS e quanto mais estatico mais leve. Sempre pensamos num novo componente como server componente e conforme necessidade alteramos para client component. Lembrando que quando houver interação do usuário deve ser um client component, podendo isolar apenas a parte que usa JS.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b030109-af40-4394-9dc6-b8c93cc701b8/fbeb42a2-014b-4b6f-9992-c74d4ea7db20/Untitled.png)

Neste exemplo de loja, como podemos fazer a interação entre o AddToCart e Cart? Ao clicar em add o compoente Cart deve ser atualizado, podemos utilizar Contextos e para isso os componentes devem estar no mesmo nivel, então basta involve-los por um client component:

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b030109-af40-4394-9dc6-b8c93cc701b8/7c6922cc-69c9-42d3-8c3e-711b30d4fff2/Untitled.png)

É necessárrio que os server component(laranja) sejam enviados ao CartContext(client componente, azul) como children .