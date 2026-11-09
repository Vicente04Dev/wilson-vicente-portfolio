# Wilson Vicente — Portfolio

Site profissional de Wilson Vicente, web designer e desenvolvedor full-stack em Luanda, Angola.

Feito apenas com **HTML, CSS e JavaScript**: sem frameworks, sem dependências e sem passo de compilação.

## Ver o site localmente

Abra o `index.html` com duplo clique. Para testar como num servidor real (página 404, `robots.txt`, etc.), use qualquer servidor estático, por exemplo:

```sh
php -S localhost:8000
```

## Estrutura

```
index.html            Página principal (conteúdo, SEO e dados estruturados)
404.html              Página de erro
css/styles.css        Estilos, organizados por secções; cores do tema escuro e claro no topo
js/main.js            Tema, menu, filtro do portfólio, FAQ e formulário de contacto
js/config.js          Credenciais públicas do EmailJS e email de destino do formulário
assets/portfolio/     Capturas dos projectos (WebP)
assets/og-image.jpg   Imagem de partilha em redes sociais e WhatsApp
favicon.*, icon-*.png, apple-touch-icon.png, site.webmanifest
robots.txt, sitemap.xml, llms.txt
```

## Ligações dos projectos

Cada projecto do portfólio tem uma ligação "Visitar site" (`class="project-link"` no `index.html`). As que ainda têm `href="#"` ficam escondidas; basta trocar o `#` pelo endereço do site para a ligação aparecer.

## Clientes e parceiros

Os logótipos originais estão em `assets/parceiros/originais/`. O site usa as versões em `assets/parceiros/*.webp`: monocromáticas (preto com transparência), recortadas e sem slogans pequenos, para ficarem uniformes e mudarem de cor com o tema (no tema escuro são invertidas para branco).

Para acrescentar um cliente: criar o `.webp` no mesmo formato e copiar um `<li class="logo">` nas duas listas da secção `#clientes` (a segunda é a cópia usada no movimento contínuo, com `alt=""`). O `--h` define a altura do logótipo: logótipos largos ficam mais baixos e logótipos estreitos mais altos, para terem o mesmo peso visual.

## Depoimentos

Os depoimentos da secção `#depoimentos` são **fictícios** (exemplos). Substitua-os por depoimentos reais, com autorização dos clientes, antes de divulgar o site. Não os acrescente aos dados estruturados (JSON-LD): o Google penaliza avaliações que não sejam verificáveis.

## Formulário de contacto (EmailJS)

O formulário envia as mensagens pelo [EmailJS](https://www.emailjs.com/), configurado em `js/config.js`.

O email de destino é definido no painel do EmailJS. Em **Email Templates**, no template usado, o campo **To Email** deve ter `{{to_email}}` (ou directamente `wilson.vicente@wilsonvicente.com`) e o campo **Reply To** deve ter `{{reply_to}}`.

A chave do EmailJS em `js/config.js` é pública por natureza: fica sempre visível no browser de quem visita o site.

## Publicar

Envie todos os ficheiros desta pasta (excepto `.git`) para a raiz do domínio, por exemplo em `public_html` na Hostinger. Configure a página de erro 404 do alojamento para usar `404.html`.

Os endereços absolutos (link canónico, Open Graph, `sitemap.xml`, `robots.txt`, `llms.txt` e dados estruturados) usam `https://wilsonvicente.com/`. Se o domínio for outro, actualize-os.

Depois de publicar, submeta `https://wilsonvicente.com/sitemap.xml` no Google Search Console.
