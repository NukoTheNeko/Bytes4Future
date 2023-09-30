Cria um componente `PasswordInput`.

O componente deve incluir um campo de texto do tipo `password` e com a `role="input"`.

Sempre que se escreve no campo de texto, deve alterar o valor do mesmo e verificar a força da password.

A força da password deve ser uma de quatro possibilidades, "" quando o campo está vazio, "Password Forte" quando o comprimento da password é maior do que _10_, "Password Média" quando o comprimento é maior do que _6_ e "Password Fraca" nos outros casos.

Deve ser renderizado um parágrafo com a `role="feedback"` quando:

1. O campo de texto já foi `focado`.

2. Quando a força da password é diferente de `""`.

Deve ainda incluir um botão com o conteúdo `"Mostrar"`, ENQUANTO se está a clicar no botão, o campo de texto deve exibir o valor do mesmo.

Tem em conta que:

1. O componente PasswordInput deve ser exportado por omissão de um ficheiro "PasswordInput.js" ou "PasswordInput.jsx".

2. O ficheiro "PasswordInput.js" deve estar localizado na pasta `src`.