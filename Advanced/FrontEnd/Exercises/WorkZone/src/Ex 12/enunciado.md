Cria um componente `TwoLists`.

O componente deve ser composto por _3_ partes:

1. Duas listas `nome` e `apelido`.

2. Um campo de texto e dois botões para adicionar elementos às listas.

3. Um botão que gera um nome aleatório.

Cada uma das listas deve ser composta por uma div com a `role="list"` e devem mapear um array que é guardado no state. Cada um dos elementos que é mapeado deve ser renderizado como uma `span` com a `role="listitem"`.

Deve se poder escrever no input e devem existir dois botões `"Adicionar nome"` e `"Adicionar apelido"`, quando se clica num destes botões, o valor do input deve ser adiconado à lista correspondente e o valor do input deve ser 'limpo'.

Deve ser possível clicar no botão que gera um nome aleatório, que tem o texto `"Gerar Nome"`. Quando clicado, este botão deve gerar uma string com um nome e um apelido escolhidos aleatóriamente das listas, com o formato: `"nome apelido"`.

Deve ser renderizado um parágrafo quando já foi gerado um nome aleatório, com o nome aleatório. O parágrafo deve ter a `role="name"`.

Tem em conta que:

1. O componente TwoLists deve ser exportado por omissão de um ficheiro "TwoLists.js" ou "TwoLists.jsx".

2. O ficheiro "TwoLists.js" deve estar localizado na pasta `src`.