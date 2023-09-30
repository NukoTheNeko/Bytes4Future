Cria um Componente React `ListaComApagar`, que recebe a prop `itens`, que é um array de objetos:

O componente `ListaComApagar` deve:

1. Guardar a prop itens no `state`.

2. Mapear o `state` de forma a que cada `item` mapeado renderize:

    1. Uma div com a `key` com o valor da propriedade `key` de cada `item`. :

        1. Um título de nível 3 com o valor da propriedade `name` de cada `item`.

        2. Um parágrafo com o formato de `preço €` onde `preço` é a propriedade `price` de cada `item`.

        3. Um botão que quando clicado deve remover o `item` da lista do `state`

Tem em conta que:

1. O componente ListaComApagar deve ser exportado por omissão de um ficheiro "ListaComApagar.js" ou "ListaComApagar.jsx".

2. O ficheiro "ListaComApagar.js" deve estar localizado na pasta `src`.