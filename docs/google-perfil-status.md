# Google Perfil da Empresa da Josi: status e pendências

Documento de passagem entre conversas. Atualizado em 2026-11-10 (noite). Estilo e regras das fotos com IA: `docs/fotos-ia-estilo.md`.

## Resumo
Perfil: **Josi Souza - Nail Design** (Windsor: `google_my_business`, local `locations/15229903899365547203`). A Josi não tem fachada e atende em espaço compartilhado cujo nome ela não quer divulgar, então não há foto de Fachada nem de Interior.

## O que foi feito (2026-11-10)
1. Levantamento das fotos do projeto, do acervo (`Documentos\Josi Souza - Acervo de imagens`) e das reais enviadas pela Josi (WhatsApp `IMG-2026...-WA00xx.jpg`, **não são IA**; os `IMG_4xxx.PNG` são IA).
2. Recriação com IA (skill `gerar-imagem`, ChatGPT/Codex) de 4 fotos de unhas a partir das fotos reais, com várias rodadas de ajuste (luz de celular, fundo suave, sem inventar detalhes, livro com verso liso e sem título). Regras no `fotos-ia-estilo.md` e boas práticas gerais em `~/.claude/skills/gerar-imagem/boas-praticas-fotos.md` (sincronizado para Codex e Antigravity).
3. Lote final em `Documentos\Josi Souza - Acervo de imagens\gerados-ia\google-perfil-final\` (14 arquivos, fora do repo).
4. Artifact de planejamento por categoria: https://claude.ai/artifact/Pp3F6gx8GToGETCWX23ybF (privado; as decisões dele foram aplicadas depois).
5. Windsor: o conector do Claude é uma conta só. Para separar o cliente, o Richard criou um login do Windsor com o e-mail da Josi (Trial 30 dias) e trocou o conector para essa conta. O Google Meu Negócio dela ficou conectado.
6. Hospedagem temporária em `public/gbp/` do site (commit `69488a9`), envio ao Google por URL pública, remoção da pasta (commit `7f758d9`). As imagens ficaram no histórico do Git.
7. No site, as 8 fotos da galeria foram recriadas: primeiro 4 substituíram as antigas (commit `875bd01`): `gallery-natural-finish`, `gallery-real-beauty`, `gallery-details`, `gallery-professional-care` (WebP 1000x1250, 4:5). Depois as outras 4 (`transparencia`, `sophisticated`, `classic-elegance`, `art-technique`), aprovadas na 1ª rodada; PNGs em `gerados-ia\galeria-site\`.

## Fotos enviadas ao Google (via `upload_media`)
| Categoria no Google | Arquivo | Origem |
|---|---|---|
| Capa | `capa.jpg` (WA0026, 16:9) | real, sem edição |
| Logo / Perfil | `logo.png` (monograma) | a logo e a foto de perfil são o mesmo espaço (`media/profile`); o último envio vence; ficou a logo |
| Equipe | `equipe-1-estudio.jpg`, `equipe-selfie.jpg` (WA0028) | estúdio (IA a partir de foto real), selfie real |
| Ela trabalhando | `trabalhando-1-mesa.jpg`, `trabalhando-2-marrom.jpg` | IA a partir de fotos reais, aprovadas pela Josi |
| Adicional | `unhas-1-francesinha`, `unhas-2-nude-curtas`, `unhas-3-nude-glitter`, `unhas-4-vermelha-livro` | IA a partir de unhas reais dela |
| Adicional (produto) | `produto-1-josi-com-esmalte`, `produto-esmalte-closeup`, `produto-esmaltes-cartela` | IA, ilustrativas |

Total registrado pelo Google: 12 fotos de galeria (+ logo). A categoria **PRODUCT** devolveu "invalid argument" em 2 tentativas, então as de produto foram como ADDITIONAL.

## Situação ao encerrar o chat
- Visíveis na tela do Google: capa, 4 unhas, 2 trabalhando, estúdio, selfie, close do esmalte e a logo como avatar do perfil (a foto da cliente com unhas azuis, a única que já existia, continua).
- **Ainda não apareciam** (mas constam como enviadas): `produto-1-josi-com-esmalte` e `produto-esmaltes-cartela`. O Richard vai esperar e avisar. Se não aparecerem, reenviar essas duas (conferir antes com `get_data` na tabela Media, `date_from` = dia do envio; sem data a consulta volta vazia).
- A tela mostra "7 horas atrás" em todas, mas o Google registrou o envio às 22:01–22:08 UTC (19:01–19:08 em Brasília). Causa desconhecida, parece exibição do Google; não é problema do conector.

## Reenvio (2026-11-10, mais tarde)
O Richard não viu a logo nem as 2 de produto. A tabela Media listava as 12 fotos (as 2 de produto incluídas), mas **nenhuma linha de LOGO/PROFILE**. Reenviados: `logo.png` como **LOGO** (foi para `media/profile`) e as 2 de produto como ADDITIONAL (IDs novos `CIABIh...`). Se ainda não aparecerem, suspeita é moderação do Google (fotos de IA), não atraso.

## Primeiro post (2026-11-10)
Post de apresentação publicado e **LIVE**: texto em 1ª pessoa (a Josi falando, tom próximo), emojis variados (💅🛡️🎨🌿, nada de repetir o mesmo), sem telefone no texto, botão "Agendar" → site. Foto: `recebidas/IMG_4369.PNG` (camisa branca, caixinha de esmaltes). Hospedagem: commit avulso num ramo temporário `gbp-temp` do GitHub, apagado depois que o post ficou LIVE (o site não é tocado). Link: https://local.google.com/place?id=17159074315838849472&use=posts&lpsid=CAIQACoeChxtc3BfaDpKYWh5clZhNFFld1RraHhWdHZQdWxn

Logo: o reenvio via API também não apareceu. O arquivo está OK (1280x1280, RGB, sem transparência). O Richard vai subir à mão: `gerados-ia/google-perfil-final/logo.png` (ou `logo.jpg`, cópia em qualidade máxima).

## Pendências
1. **Voltar o conector do Windsor para a conta do Richard** (claude.ai → Configurações → Conectores → Windsor.ai). Enquanto estiver na da Josi, o Instagram e o Search Console dele não aparecem em nenhum projeto.
2. Perguntei se envia o retrato com o leque (`experience-josi-leque`) como foto de Equipe. Aguardando ok. O recorte `perfil.jpg` (WA0012) **não foi enviado**.
3. Pedir à Josi fotos reais para regerar: esmaltes (cartela/estante), produtos de limpeza e assepsia, bancada organizada, alongamento, blindagem, spa dos pés, atendimento com mãos, cadeira/mesa sem placa nem nome do espaço (Interior). Depois regerar no ChatGPT mantendo os produtos.
4. Ver a vitrine do site no navegador depois da troca da galeria (só conferi o deploy por tamanho de arquivo).

## Lições do Windsor e do Google
- Windsor `upload_media` só aceita **URL pública** (JPG/PNG, mín. 250 px, até 5 MB). Atalho: o repo é público, então `https://raw.githubusercontent.com/richardgms/josisouza/69488a9/public/gbp/<arquivo>` serve as 14 fotos sem deploy.
- Trial do Windsor não aceita `force_refresh`; a leitura da tabela Media vem do cache.
- Logo e perfil dividem o mesmo espaço; PRODUCT falhou; o modo automático do Claude Code bloqueia envio extra fora do que o usuário aprovou (pedir ok específico).
- A listagem da tabela Media precisa de intervalo de datas que cubra o envio.
