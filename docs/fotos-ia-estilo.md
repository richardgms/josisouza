# Fotos recriadas com IA: estilo e preferências

Regras para recriar fotos de unhas e da Josi (Google Perfil da Empresa, site, redes). Definidas pelo Richard em 10/11/2026.

## O que pode e o que não pode mudar
- A esmaltação é trabalho real da Josi. Passar a foto real como referência (`-Referencia`) e manter **exatamente** forma, comprimento, cor, acabamento e acessórios (anéis). Nada de desenho novo.
- Pode mudar: posição, cenário/superfície, luz, qualidade, acessório de cena.
- Fotos da Josi: sempre a partir de fotos reais dela (hero, "Refúgio de Bem-Estar" e vídeo do site já seguem isso).
- Imagem é ilustrativa: a Josi aprova antes de publicar.

## Estilo visual
- Aparência de **foto de celular com boa câmera**: luz natural de janela, sombras suaves, nitidez moderada.
- Não pode parecer cinematográfico, hiper-realista nem HDR.
- Fundo **desfocado e com pouca textura** (tecido, mesa). Textura nítida demais denuncia IA.
- Iluminação do fundo coerente com a da mão (sem fundo mais claro que a mão).
- Proporção 4:5 vertical. Sem texto na imagem.

## Armadilhas já vistas
- A IA inventa detalhes que não existem na referência (ondas num dedo, polegar torto). Escrever no prompt "NO extra design" e conferir **dedo a dedo** contra a referência.
- Texto em livro/papel sai errado. Pedir página em branco/desfocada e, se quiser texto, sobrepor o texto da foto real (multiply, só sobre áreas de papel; cortar manchas de mão).
- Conferir sempre polegar e anelar antes de aprovar.

## Livro como acessório (preferência do Richard)
- Livro de **capa mole/fina**, vibe moderna de reflexão (público 30–40 anos). Só a **capa**, sem página de texto nem página em branco.
- Capa **fictícia** com título inventado que não exista (conferido por busca): "Devagar Eu Floresço". Não usar capa de livro real (direito autoral/marca).
- Geometria: retângulo reto, largura constante, aparecendo por inteiro sob todos os dedos. Já saiu livro em "escada" e cortado no indicador; pedir "no steps, no cut-off, no tapering" e conferir.
- Título curto em português; conferir a grafia na saída.

- **Decisão final do livro:** usar só o **verso** (sem título, texto, código de barras ou número), girado ~15° e saindo um pouco do quadro; assim ninguém consegue pesquisar o livro e descobrir que é IA. Verso **claro** (off-white com raminho de flor) contrasta melhor com unhas vermelhas que o terracota. Escolhido: `unhas-vermelhas-livro-verso-a.png`.
- Detalhe de fundo natural (objeto pessoal pequeno e desfocado, como uma presilha) aumenta a credibilidade. Veio do ChatGPT, não foi pedido no prompt. Boas práticas gerais: `~/.claude/skills/gerar-imagem/boas-praticas-fotos.md` (compartilhada com Codex e Antigravity).

## Fluxo
1. Gerar pela skill `gerar-imagem` (Codex, sem custo de API), 3–4 em paralelo (jobs do PowerShell).
2. Salvar fora do repo em `Documentos\Josi Souza - Acervo de imagens\gerados-ia\<destino>\`.
3. Conferir contra a referência, mostrar ao Richard, só então converter/enviar.

## Lote Google Perfil (nov/2026)
Rascunhos e versões intermediárias em `gerados-ia\google-perfil\`; as finais aprovadas e enviadas estão em `gerados-ia\google-perfil-final\` (ver seção abaixo).

## Envio ao Google Perfil da Empresa (feito em 2026-11-10)
- Enviado via Windsor (`google_my_business`, ação `upload_media`) usando URLs públicas temporárias em `public/gbp/` do site, removidas depois do envio. As fotos finais ficam em `Documentos\Josi Souza - Acervo de imagens\gerados-ia\google-perfil-final\`.
- **Logo e foto de perfil ocupam o mesmo espaço** (`media/profile`): o último envio vence. Ficou a logo (monograma).
- A categoria **PRODUCT** retornou "invalid argument" nos 3 envios; as fotos de produto foram como ADDITIONAL.
- Enviado: capa (WA0026 real), logo, equipe (estúdio e selfie), ela trabalhando (2), unhas recriadas (4) e produtos (3, em Adicional). Interior e Fachada: nada, de propósito.
- O Windsor é um conector por conta do Claude: para separar clientes, criar login do Windsor com o e-mail do cliente (Trial de 30 dias) e trocar a conta do conector em Configurações → Conectores durante o envio; depois voltar à própria conta.
- No site, as 8 fotos da galeria já são versões recriadas (PNGs da 2ª leva em `gerados-ia\galeria-site\`).
- Pendente: pedir à Josi fotos reais (esmaltes, produtos de limpeza, bancada, alongamento, blindagem, spa dos pés, atendimento).
