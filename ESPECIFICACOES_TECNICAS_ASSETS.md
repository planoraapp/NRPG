# ESPECIFICAÇÕES TÉCNICAS - ASSETS GÓTICO HI-TECH
## Baseado no estilo Low-Poly de Albion Online

### ESTILO VISUAL GERAL
- **Low-Poly Estilizado**: Modelos com contagem baixa de polígonos, formas angulares e simplificadas
- **Texturas com Traço de Pintura**: Estilo que remete a pintura à mão, detalhes visuais ricos
- **Paleta de Cores**: Tons terrosos/escuros (medieval) + tons neon/elétricos (cyberpunk)
- **Perspectiva Isométrica**: Modelos projetados para visão de cima/ângulo

### CATÁLOGO DE PAREDES MODULARES

#### Parede de Pedra Medieval (wall_medieval_stone_base)
```javascript
define_asset(
  type: "Wall",
  id: "wall_medieval_stone_base",
  base_dimensions: { width: "4m", height: "3m", depth: "0.3m" },
  material_properties: { roughness: 0.8, metallic: 0.1 },
  texture_details: "Pedras grandes e irregulares, estilo cantaria, com rejunte escuro e profundo",
  normal_map_details: "Relevo profundo para o rejunte entre as pedras e textura sutil de porosidade",
  color_palette: ["#4a4a4a", "#6b6b6b", "#3d3d3d", "Musgo verde escuro (#2e4027) em algumas frestas"],
  variations: [
    { id_suffix: "_mossy", description: "Adicionar mais musgo e umidade escorrendo do topo" },
    { id_suffix: "_damaged", description: "Versão com rachadura grande ou pedras faltando" }
  ]
);
```

**Ficha Técnica de Textura - Parede de Pedra Medieval:**
- **Nome**: T_StoneWall_01
- **Material Base**: Pedra de cantaria cortada em blocos
- **Sensação**: Áspera, fria, antiga e resistente
- **Paleta Principal**: 
  - Pedras: #4a4a4a, #6b6b6b (cinza médio a escuro)
  - Rejunte: #3d3d3d (cinza muito escuro, quase preto)
  - Musgo: #2e4027 (verde-oliva escuro e úmido)
- **Detalhes de Desgaste**: Umidade escorrendo, lascados nas bordas, poeira nas superfícies horizontais
- **Mapa de Normal**: Rejunte profundo, superfície porosa, rachaduras com profundidade

#### Painel de Metal Tecnológico (wall_tech_panel_base)
```javascript
define_asset(
  type: "Wall",
  id: "wall_tech_panel_base",
  base_dimensions: { width: "4m", height: "3m", depth: "0.2m" },
  material_properties: { roughness: 0.4, metallic: 0.7 },
  texture_details: "Painel de metal escovado, cinza chumbo, com arranhões e sinais de desgaste",
  normal_map_details: "Relevo para linhas de junção dos painéis, parafusos nos cantos",
  color_palette: ["#2c3e50", "#566573", "Arranhões em prata claro (#bdc3c7)"],
  variations: [
    { id_suffix: "_emissive", description: "LEDs acesos emitindo luz azul ciano (#00ffff)" },
    { id_suffix: "_graffiti", description: "Graffiti cyberpunk em cor vibrante" }
  ]
);
```

**Ficha Técnica de Textura - Painel de Metal Tecnológico:**
- **Nome**: T_TechPanel_01
- **Material Base**: Liga de aço/alumínio industrial
- **Sensação**: Frio, funcional, utilitário e maltratado
- **Paleta Principal**:
  - Painel: #2c3e50 (cinza chumbo com tom azulado)
  - Arranhões: #bdc3c7 (prata claro)
  - Detalhes: Símbolos amarelo/preto, números brancos
- **Detalhes de Desgaste**: Arranhões variados, fuligem oleosa, pontos de ferrugem (#a1662f)
- **Mapa de Normal**: Linhas de junção, buracos de parafusos, sulcos de arranhões

### CATÁLOGO DE PISOS E CALÇADAS

#### Calçada de Lajotas de Pedra (tile_stone_walkway)
```javascript
define_asset(
  type: "Floor_Tile",
  id: "tile_stone_walkway",
  tile_size: { width: "2m", height: "2m" },
  tileable: true,
  material_properties: { roughness: 0.9, metallic: 0.0 },
  texture_details: "Lajotas de pedra retangulares de vários tamanhos, desgastadas pelo uso",
  normal_map_details: "Relevo acentuado para juntas entre lajotas, superfície levemente irregular",
  color_palette: ["#7f8c8d", "#95a5a6", "Terra escura (#6d5d4b) nas juntas"],
  variations: [
    { id_suffix: "_cracked", description: "Uma lajota rachada no meio" },
    { id_suffix: "_puddle", description: "Efeito de superfície molhada simulando poça d'água" }
  ]
);
```

**Ficha Técnica de Textura - Calçada de Pedra:**
- **Nome**: T_Pavement_Stone_01 (Tileable)
- **Material Base**: Lajes de calcário ou granito
- **Sensação**: Sólida, irregular sob os pés, muito gasta pelo tempo
- **Paleta Principal**:
  - Lajes: #95a5a6 (bege e cinza claro)
  - Juntas: #6d5d4b (terra batida, escura e úmida)
  - Detalhes: Ervas daninhas verdes vibrantes
- **Detalhes de Desgaste**: Bordas arredondadas, centro afundado, manchas de umidade
- **Mapa de Normal**: Juntas profundas, superfície ondulada, sulcos de rachaduras

### CATÁLOGO DE TERRENOS NATURAIS

#### Terreno Terra/Grama (ground_dirt_grass_blend)
```javascript
define_asset(
  type: "Ground_Texture_Set",
  id: "ground_dirt_grass_blend",
  base_texture: {
    description: "Terra escura, compactada e úmida, com pequenas pedras e galhos",
    color_palette: ["#6d5d4b", "#594a3a"]
  },
  secondary_texture: {
    description: "Grama baixa, seca e com falhas, mostrando terra por baixo",
    color_palette: ["#7a8a3a", "#5e692c"]
  },
  blending_rules: "Terra como base, grama irregular nos cantos e perto de paredes",
  props_to_scatter: [
    { prop_id: "small_rock_cluster", density: "low" },
    { prop_id: "weed_patch", density: "medium" }
  ]
);
```

**Fichas Técnicas de Textura - Terrenos Naturais:**

**Terra (T_Ground_Dirt_01):**
- **Material Base**: Terra escura rica em húmus
- **Sensação**: Compacta mas não dura, úmida o suficiente para mostrar pegadas
- **Paleta**: #594a3a (marrom escuro café) com tons avermelhados
- **Detalhes**: Pequenas pedras cinzas, raízes finas, folhas decompostas
- **Mapa de Normal**: Pedrinhas saltando, textura granulada

**Grama (T_Ground_Grass_01):**
- **Material Base**: Relva/grama baixa
- **Sensação**: Rala e seca, lutando para crescer em ambiente urbano
- **Paleta**: #7a8a3a (verde-oliva) com folhas amarelas (#c9a86b)
- **Detalhes**: Lâminas visíveis, trevos, ervas daninhas, falhas mostrando terra
- **Mapa de Normal**: Cada lâmina com leve relevo para capturar luz individualmente

### INSTRUÇÕES PARA IMPLEMENTAÇÃO

1. **Ordem de Prioridade**:
   - Primeiro: Paredes modulares (base da cidade)
   - Segundo: Pisos e calçadas (conectividade)
   - Terceiro: Fios e cabos (detalhes cyberpunk)
   - Quarto: Terrenos naturais (transições)

2. **Técnicas de Detalhamento**:
   - **Mapas de Normal**: Prioridade máxima para relevo falso
   - **Texturas de Alta Resolução**: Para compensar baixa geometria
   - **Shaders Específicos**: Metal, couro, tecido com propriedades corretas
   - **Variações**: Múltiplas versões para evitar repetição

3. **Modularidade**:
   - Tamanhos padrão para encaixe perfeito
   - Sistema de variações para diversidade
   - Texturas tileable para continuidade visual

### IMPLEMENTAÇÃO TÉCNICA

O sistema implementado inclui:

1. **Texturas Procedurais**: Geradas em tempo real usando Canvas2D
2. **Materiais PBR**: Com propriedades físicas corretas (roughness, metalness)
3. **Mapas de Normal**: Para relevo falso sem aumentar polígonos
4. **Sistema Modular**: Prédios com estilos medieval, tech e mixed
5. **Variação Automática**: Cores e detalhes gerados proceduralmente
6. **Performance Otimizada**: Texturas com `willReadFrequently: true`

### RESULTADO VISUAL

- **Paredes de Pedra**: Textura realista com rejunte profundo e musgo
- **Painéis de Metal**: Superfície industrial com arranhões e LEDs
- **Calçadas**: Lajotas desgastadas com ervas daninhas
- **Terrenos**: Mistura natural de terra e grama
- **Prédios**: Combinação harmoniosa de medieval e cyberpunk
- **Iluminação**: Neon colors com atmosfera noturna
