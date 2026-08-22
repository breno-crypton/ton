# Consultora Bruna

Site estático (HTML, CSS e JavaScript puro) de vitrine de vendas de maquininhas de cartão — Ton, Mercado Pago e PagBank.

## Estrutura
- `index.html` — estrutura da página
- `style.css` — estilos
- `script.js` — dados dos produtos, avaliações, dúvidas e toda a lógica do site
- `images/` — imagens (produtos, avatar da consultora, ilustração do hero)

## Configuração
Edite o início de `script.js`:
- objeto `produtos` — fotos, preços, descrições e links de compra
- array `avaliacoes` — depoimentos de clientes
- array `duvidas` — perguntas frequentes

## Foto da Consultora Bruna
Um placeholder circular está em `images/consultora-bruna.svg`. Para trocar pela foto real:
1. Suba a foto (jpg/png, de preferência quadrada) para a pasta `images/`.
2. No `index.html`, troque as 2 ocorrências de `images/consultora-bruna.svg` pelo novo caminho (cabeçalho e rodapé) e a 1 ocorrência dentro do selo do hero.
