const modules = [
  { id: "M4-L12", species: "Arándano", variety: "Legacy", pathogen: "Botrytis", risk: 84, status: "Pendiente firma" },
  { id: "M2-L07", species: "Avellano", variety: "Barcelona", pathogen: "Fusarium", risk: 62, status: "Monitorear" },
  { id: "M1-L03", species: "Cerezo", variety: "Regina", pathogen: "Pythium", risk: 38, status: "Preventivo" },
  { id: "M5-L18", species: "Arándano", variety: "Duke", pathogen: "Botrytis", risk: 71, status: "Pendiente firma" },
  { id: "M3-L08", species: "Frambueso", variety: "Meeker", pathogen: "Botrytis", risk: 54, status: "Monitorear" },
  { id: "M6-L09", species: "Frutilla", variety: "Albion", pathogen: "Botrytis", risk: 49, status: "Preventivo" },
  { id: "M7-L13", species: "Mora", variety: "Loch Ness", pathogen: "Fusarium", risk: 57, status: "Monitorear" },
  { id: "M8-L41", species: "Boldo", variety: "Panguilemu 1", pathogen: "Estrés abiótico", risk: 29, status: "Preventivo" }
];

const speciesCatalog = [
  { code: "01", species: "Adesmia", varieties: ["Confusa", "Aphylla", "Hystrix"] },
  { code: "02", species: "Arándano", varieties: ["Camelia", "Emerald", "Brillitta", "Duke", "Blue crop", "Elliot", "O'neal", "Legacy", "Titanium", "MegasBlue", "Toro", "Blue gold", "Sharp blue", "Biloxi", "Star", "Dazzle (Ridley 4507)", "Echo (Ridley 0808)", "Eureka (Ridley 1403)", "Eureka sunrise (Ridley 1602)", "Eureka sunset (Ridley 1607)", "Firstblush (Ridley 4514)", "Initio (Ridley 1105)", "Opi (Ridley 1111)", "Twilight (Ridley 1812)", "Splash (Ridley 1212)", "Masena (Ridley 4408)", "Draper", "Blue Ribbon", "Suziblue", "Cargo", "Kalinda", "Lilliah", "Selección D", "Merliah", "Midnight", "Eureka gold (Ridley 1702)", "Eureka Maxx (M16-25-03)", "Selección C (Ridley 0803)", "Legacy 1", "Legacy 2", "Legacy 3", "Liberty", "Selección B (M16-25-09)", "MegaEarly (T11-319)", "MegaCrisp (T111-519)", "Megaone (F116)", "MegaGem (T111-219)", "T112-119", "MegaGrand (T112-219)", "MegaStar (T112-519)", "TH-1332", "Ambrosia (TH-1241)", "TH-1356", "AVA (TH-1797)", "Georgia (TH-1797)", "TH-1801", "Sweet Duchess (TH1321)", "Selección G (E-14-01-117)", "Selección H (E-16-48-58)", "Selección K (E-16-49-43)", "Selección L (E-16-73-97)", "PE04", "PE07", "MSU130", "Orb (CW4-BB)", "MegaCrop (T11-119)", "T111-719", "T111-619", "MegaTreat (F4119)", "T111-919", "T111-819", "Top Shelf", "Selección S (M17-36-04)", "Eureka Dawn (M18-73-01)", "Selección U (M19-49-01)", "Selección Z (A20-06-03)", "Blue Moon", "Stella blue", "Sky Blue", "TH-1322", "Maverick (TH-1493)", "TH-1870", "Royal Blue (TH-1991)", "TH-1994", "T-3075", "T-2604", "A54", "A66", "A81", "A132", "A142", "A307", "BA18", "BA20", "BA22", "BA45", "BA46", "BA71", "BA305", "TS", "V2", "Gladiator (TH-1872)", "Tropical Blue (TH-1993)", "Blue Duchess (TH-1876)", "Early Duchess (TH-1334)", "Selección SLA (M19-30-04)", "Selección PC22-0011 (M21-42-01)", "Miss Jackie (TH-917)", "TH-1484", "TH-1600", "TH-1882", "TH-1579", "TH-1654", "TH-1813", "TH-3206"] },
  { code: "03", species: "Arrayán", varieties: ["Arrayán"] },
  { code: "04", species: "Avellano", varieties: ["Barcelona", "Tonda di Giffoni", "Polinizante Amarillo", "Polinizante Amarillo (Cassina)", "Polinizante Blanco", "Polinizante Azul", "Polinizante Rojo", "Polinizante Rojo (Mortarella)", "Polinizante verde", "Polinizante verde (Romana)", "Selvática 3", "Selvática 4", "Nalú", "Polinizante Naranjo (Bossio)", "Polinizante Morado (101)"] },
  { code: "05", species: "Camote", varieties: ["Blanco", "Morado", "Salyboro", "Sumor", "Costanero", "Tenian", "Puerto rico", "Wunguerbol", "Camenzal", "Beauregard", "Café", "Amarillo", "Jewel", "INIVIT-65", "INIVIT-50", "INIVIT-240", "Cautilo (T-33)", "Yabú (T-34)"] },
  { code: "06", species: "Cerezo", varieties: ["Colt", "Maxma 14", "GiSelA 5", "GiSelA 6", "CAB 6", "GiSelA 3", "GiSelA 12", "GiSelA 13", "GiSelA 17", "Guindo ácido", "Maxma 60", "Skeena", "Regina", "Kordia", "Lapins", "Yamagata C12 Go", "Satonishiki", "Banisyuhu"] },
  { code: "07", species: "Luma Chequen", varieties: ["AC2", "AC3"] },
  { code: "08", species: "Frambueso", varieties: ["P1", "P2", "P3", "P4", "P5", "Diamond Jubilee", "Regina", "Meeker", "San Rafael", "Glen Mor", "Skye", "Lewis", "Glen Carron"] },
  { code: "09", species: "Frutilla", varieties: ["Albion", "Monterrey", "BAU-1", "BAU-4", "JR-2", "JR-8", "PC-3", "PC-12", "JR-3", "JR-6"] },
  { code: "10", species: "Guayacán", varieties: ["Guayacán"] },
  { code: "11", species: "Kiwi", varieties: ["1100903", "1101003", "1101903"] },
  { code: "12", species: "Maqui", varieties: ["34", "35", "36", "39", "49"] },
  { code: "13", species: "Mora", varieties: ["Columbia Star", "Von", "Selección D (LBA19-41-13)", "Selección E (LBA19-41-15)", "Selección G (LBA19-49-08)", "Loch Ness", "Chester dulce", "Juhas", "Maryna"] },
  { code: "14", species: "Moringa", varieties: ["Moringa"] },
  { code: "15", species: "Nogal", varieties: ["Vlach"] },
  { code: "16", species: "CH Bletioides", varieties: ["CH Bletioides"] },
  { code: "17", species: "Papa", varieties: ["Amarilla"] },
  { code: "18", species: "Quillay", varieties: ["Quillay"] },
  { code: "19", species: "Ruil", varieties: ["Semilla", "Llema", "Ruil"] },
  { code: "20", species: "Tralhuén", varieties: ["Tralhuén"] },
  { code: "21", species: "Vides", varieties: ["Vides"] },
  { code: "22", species: "Yuca", varieties: ["Yuca"] },
  { code: "23", species: "Chayote", varieties: ["Chayote"] },
  { code: "24", species: "Luma apiculata", varieties: ["AC1", "AC2"] },
  { code: "25", species: "Chaura", varieties: ["F3"] },
  { code: "26", species: "Zarzaparrilla", varieties: ["Rovada"] },
  { code: "27", species: "Agave", varieties: ["Agave"] },
  { code: "28", species: "Mangave", varieties: ["Mangave"] },
  { code: "29", species: "Aloe", varieties: ["Plicatilis", "Samson"] },
  { code: "30", species: "Pata de canguro", varieties: ["Devil", "Tango", "Tenacity", "Cape red", "Dwarf", "Fire hose", "Harmony", "Tequila"] },
  { code: "31", species: "Echeveria", varieties: ["Agavoide", "Canate", "Craignana", "Moondust"] },
  { code: "32", species: "Plátano", varieties: ["Zebrina"] },
  { code: "33", species: "Phormium", varieties: ["Texax dusky"] },
  { code: "34", species: "Yucca", varieties: ["Blue Velve"] },
  { code: "35", species: "Bailahuén", varieties: ["HB"] },
  { code: "36", species: "Árbol del té", varieties: ["Scoparium"] },
  { code: "37", species: "Rumpiato", varieties: ["Rumpiato sp"] },
  { code: "38", species: "Prunus", varieties: ["Mariana M2624", "Garnem (GxN)", "Nemaguard", "Atlas", "GF677"] },
  { code: "39", species: "Papaya Vasconcelle", varieties: ["Hembra LA2", "Hembra LB2"] },
  { code: "40", species: "Puya", varieties: ["Puya Chilensis", "Puya maulina", "Puya alpestris"] },
  { code: "41", species: "Boldo", varieties: ["Panguilemu 1", "Panguilemu 2", "Panguilemu 3", "Panguilemu 4", "GAP", "Cauquenes 1", "Panguipulli 2"] },
  { code: "42", species: "Canelo", varieties: ["Pelluhue 1", "Pelluhue 3", "S. J. El Picazo", "Victoria 20", "Olmué 21", "Peralillo"] },
  { code: "43", species: "Tuna", varieties: ["Lucy", "Carolina"] }
];

const alerts = [
  {
    id: "ALT-2405",
    module: "M4-L12",
    species: "Arándano Legacy",
    pathogen: "Botrytis",
    confidence: "88%",
    action: "Fungicida preventivo diferenciado",
    status: "Bloqueada"
  },
  {
    id: "ALT-2406",
    module: "M5-L18",
    species: "Arándano Duke",
    pathogen: "Botrytis",
    confidence: "81%",
    action: "Aislar bandeja y repetir captura",
    status: "Bloqueada"
  },
  {
    id: "ALT-2407",
    module: "M2-L07",
    species: "Avellano Barcelona",
    pathogen: "Fusarium",
    confidence: "69%",
    action: "Monitoreo 48 horas",
    status: "Observación"
  }
];

const lotProfiles = {
  "M4-L12": { location: "Invernadero 4 · Mesón 4", species: "Arándano", variety: "Legacy", phase: "Crecimiento activo", module: "M4" },
  "M5-L18": { location: "Invernadero 5 · Mesón 5", species: "Arándano", variety: "Duke", phase: "Crecimiento activo", module: "M5" },
  "M2-L07": { location: "Invernadero 2 · Mesón 7", species: "Avellano", variety: "Barcelona", phase: "Aclimatación", module: "M2" },
  "M1-L03": { location: "Invernadero 1 · Mesón 3", species: "Cerezo", variety: "Regina", phase: "Endurecimiento", module: "M1" },
  "M3-L08": { location: "Invernadero 3 · Mesón 8", species: "Frambueso", variety: "Meeker", phase: "Aclimatación", module: "M3" },
  "M6-L09": { location: "Invernadero 6 · Mesón 9", species: "Frutilla", variety: "Albion", phase: "Crecimiento activo", module: "M6" },
  "M7-L13": { location: "Invernadero 7 · Mesón 7", species: "Mora", variety: "Loch Ness", phase: "Endurecimiento", module: "M7" },
  "M8-L41": { location: "Invernadero 8 · Mesón 8", species: "Boldo", variety: "Panguilemu 1", phase: "Crecimiento activo", module: "M8" }
};

const fieldbook = [
  createFieldbookEntry("M4-L12", "18/06/2026 09:10", "Red neuronal detecta patrón compatible con Botrytis. Riesgo alto por humedad relativa elevada.", "IA asistida"),
  createFieldbookEntry("M4-L12", "18/06/2026 09:18", "Prescripción congelada hasta firma digital del biotecnólogo responsable.", "Gobernanza"),
  createFieldbookEntry("M2-L07", "17/06/2026 16:42", "Se recomienda repetir captura con menor reflejo lumínico. Imagen aceptable, confianza media.", "Operario 2")
];

const diagnosisRules = {
  interveinal_old: {
    nutrition: "Deficiencia probable de magnesio (Mg)",
    pathogen: "Sin patógeno primario evidente",
    confidence: "Media",
    evidence: "Clorosis interveinal que parte en hojas viejas; el Mg es móvil y se remobiliza hacia tejidos jóvenes.",
    action: "Confirmar con análisis foliar/sustrato. Corregir Mg y revisar exceso de K o pH que bloquee absorción."
  },
  yellow_old: {
    nutrition: "Deficiencia probable de nitrógeno (N)",
    pathogen: "Sin patógeno primario evidente",
    confidence: "Media",
    evidence: "Amarilleo general en hojas inferiores y menor crecimiento vegetativo.",
    action: "Ajustar fertirriego nitrogenado en dosis fraccionadas y confirmar conductividad/pH del sustrato."
  },
  yellow_new: {
    nutrition: "Deficiencia probable de hierro (Fe)",
    pathogen: "Sin patógeno primario evidente",
    confidence: "Media",
    evidence: "Clorosis en hojas nuevas con nervaduras verdes, típica de micronutriente poco móvil.",
    action: "Revisar pH alto, carbonatos y raíz activa. Considerar quelato de Fe si el análisis lo confirma."
  },
  edges_burn: {
    nutrition: "Deficiencia probable de potasio (K)",
    pathogen: "Estrés abiótico o salinidad como diferencial",
    confidence: "Media",
    evidence: "Necrosis marginal, bordes quemados y pérdida de turgencia pueden asociarse a K o sales.",
    action: "Revisar CE, humedad y balance K/Ca/Mg. Corregir potasio sin sobrefertilizar."
  },
  purple: {
    nutrition: "Deficiencia probable de fósforo (P)",
    pathogen: "Estrés radicular como diferencial",
    confidence: "Baja-media",
    evidence: "Coloración púrpura/rojiza y crecimiento lento pueden indicar baja disponibilidad de P.",
    action: "Confirmar temperatura de raíz, pH y disponibilidad de fósforo antes de aplicar."
  },
  spots_gray: {
    nutrition: "Nutrición no es causa principal",
    pathogen: "Botrytis cinerea probable",
    confidence: "Alta si hay humedad alta",
    evidence: "Lesiones acuosas, tejido colapsado y moho gris son compatibles con Botrytis en ambientes húmedos.",
    action: "Retirar tejido afectado, mejorar ventilación, reducir mojamiento foliar y evaluar fungicida autorizado SAG para el cultivo."
  },
  wilting: {
    nutrition: "Deficiencia secundaria por daño vascular/radicular",
    pathogen: "Fusarium oxysporum posible",
    confidence: "Media",
    evidence: "Marchitez, clorosis, decaimiento y posible pardeamiento vascular sugieren Fusarium u otro patógeno de suelo.",
    action: "Aislar lote, revisar raíces/tallo, sanitizar herramientas y confirmar en laboratorio antes de tratamiento."
  },
  root_rot: {
    nutrition: "Deficiencia secundaria por baja absorción radicular",
    pathogen: "Pythium spp. probable",
    confidence: "Alta si hay sustrato saturado",
    evidence: "Raíz parda/blanda, cuello acuoso y colapso de plántulas son compatibles con damping-off o pudrición radicular por Pythium.",
    action: "Corregir drenaje, bajar exceso de riego, retirar plantas colapsadas y validar fungicida/biocontrol autorizado SAG."
  }
};

const autoRules = [
  {
    id: "botrytis",
    label: "Botrytis cinerea probable",
    condition: (signal, env) => signal.grayRatio > 0.11 || (signal.brownRatio > 0.08 && env === "humid"),
    nutrition: "No prioritaria; daño compatible con enfermedad fúngica",
    plan: "Aislar bandeja, retirar tejido con moho/lesiones, mejorar ventilación y reducir mojamiento foliar. Evaluar fungicida autorizado Serie SAG 2000 para el cultivo y rotar modo de acción."
  },
  {
    id: "pythium",
    label: "Pythium spp. probable",
    condition: (signal, env) => env === "wet_root" && (signal.darkRatio > 0.18 || signal.brownRatio > 0.06),
    nutrition: "Deficiencia secundaria por baja absorción radicular",
    plan: "Corregir drenaje, bajar frecuencia de riego, retirar plantas colapsadas y validar biocontrol o fungicida autorizado SAG para pudrición radicular."
  },
  {
    id: "fusarium",
    label: "Fusarium oxysporum posible",
    condition: (signal, env) => env === "warm_moist" && signal.yellowRatio > 0.18 && signal.brownRatio > 0.05,
    nutrition: "Deficiencia secundaria por daño vascular",
    plan: "Aislar lote, revisar pardeamiento vascular, sanitizar herramientas, confirmar en laboratorio y evitar mover material vegetal a otros módulos."
  },
  {
    id: "iron",
    label: "Sin patógeno primario evidente",
    condition: (signal) => signal.yellowRatio > 0.28 && signal.greenRatio > 0.22 && signal.brownRatio < 0.06,
    nutrition: "Deficiencia probable de hierro/manganeso",
    plan: "Revisar pH y alcalinidad. Confirmar con análisis foliar/sustrato; si corresponde, aplicar quelato de Fe o corrección de micronutrientes."
  },
  {
    id: "nitrogen",
    label: "Sin patógeno primario evidente",
    condition: (signal) => signal.yellowRatio > 0.22 && signal.greenRatio < 0.2,
    nutrition: "Deficiencia probable de nitrógeno",
    plan: "Ajustar fertirriego nitrogenado en dosis fraccionadas, revisar CE y evitar sobrefertilización."
  },
  {
    id: "potassium",
    label: "Estrés abiótico o patógeno secundario como diferencial",
    condition: (signal) => signal.brownRatio > 0.08 && signal.edgeStress > 0.08,
    nutrition: "Deficiencia probable de potasio o estrés salino",
    plan: "Revisar CE, humedad del sustrato y balance K/Ca/Mg. Corregir potasio solo si análisis lo respalda."
  },
  {
    id: "phosphorus",
    label: "Estrés radicular como diferencial",
    condition: (signal) => signal.purpleRatio > 0.04,
    nutrition: "Deficiencia probable de fósforo",
    plan: "Verificar temperatura de raíz, pH y disponibilidad de P. Evitar aplicación correctiva sin análisis."
  }
];

const normalReferenceProfile = {
  label: "Condición normal SynergiaBIO",
  imageCount: 8,
  source: "Imágenes propias del 07/08/2026",
  expected: [
    "Follaje verde dominante con brotes juveniles verde claro o amarillo suave",
    "Bandejas con crecimiento activo y variabilidad normal entre plantas",
    "El daño se evalúa dentro de hojas y brotes; sustrato, bandejas, malla y pasillos se tratan como fondo",
    "Ausencia de moho gris extendido, necrosis marginal masiva o marchitez generalizada"
  ],
  lots: ["02T107L03", "02T106L03", "02T055L02", "TH-1493", "Maverick", "TH-1241"]
};

const botrytisReferenceProfile = {
  label: "Botrytis cinerea confirmada",
  imageCount: 5,
  source: "Imágenes propias del 07/08/2026",
  expected: [
    "Lesiones marrón claro o acuosas en hojas, tallos, brotes, flores o frutos",
    "Polvillo o pelusa aterciopelada gris sobre el tejido afectado",
    "Micelio visible blanquecino o gris invadiendo tejido dañado",
    "Manchas necróticas canela con aspecto húmedo que se marchitan rápido",
    "Lesiones alargadas café/grisáceas en tallos o brotes débiles"
  ],
  lots: ["Arándano", "Botrytis", "Lesión parda", "Necrosis", "Alta humedad"]
};

const programRows = [
  {
    phase: "Ingreso / aclimatación",
    fertilizer: "Fertirriego base balanceado N-P-K + Ca/Mg según análisis de sustrato.",
    pesticide: "Sanitización, cuarentena de bandejas y monitoreo visual. Sin aplicación curativa si no hay umbral.",
    sag: "Registrar insumos; plaguicidas solo si figuran autorizados y con etiqueta vigente."
  },
  {
    phase: "Crecimiento activo",
    fertilizer: "N fraccionado, K moderado, Mg preventivo si aparece clorosis interveinal.",
    pesticide: "Preventivo de Botrytis solo con humedad alta y antecedente de foco; rotar modo de acción.",
    sag: "Preferir serie 2000 para fungicidas; verificar cultivo, dosis, carencia y HDS."
  },
  {
    phase: "Alerta radicular",
    fertilizer: "Reducir sales, revisar CE/pH y evitar sobre fertilización que dañe raíces.",
    pesticide: "Manejo de Pythium: drenaje, higiene, biocontrol o fungicida autorizado si el diagnóstico lo confirma.",
    sag: "Excluir productos prohibidos, restringidos fuera de condición o cancelados."
  },
  {
    phase: "Foco confirmado",
    fertilizer: "No corregir a ciegas: análisis foliar/sustrato antes de aumentar dosis.",
    pesticide: "Aislar lote, retirar tejido enfermo y aplicar solo con firma del biotecnólogo.",
    sag: "Adjuntar etiqueta/HDS al registro y guardar evidencia del lote tratado."
  }
];


const greenhouseCrops = [
  "Cerezo Regina", "Avellano Barcelona", "Frambueso Meeker", "Arándano Legacy", "Arándano Duke", "Frutilla Albion", "Mora Loch Ness",
  "Boldo Panguilemu 1", "Canelo Pelluhue 1", "Kiwi 1100903", "Maqui 34", "Prunus Mariana M2624", "Tuna Lucy", "Puya Chilensis"
];

const nurseryAssets = Array.from({ length: 14 }, (_, index) => {
  const number = index + 1;
  const risk = [38, 62, 54, 84, 71, 49, 57, 29, 34, 41, 46, 52, 33, 45][index];
  const status = risk >= 75 ? "Crítico" : risk >= 55 ? "Monitoreo" : "Preventivo";
  const supervisor = ["Jefe de vivero", "Operario 1", "Operario 2", "Biotecnóloga"][index % 4];
  return {
    id: `INV-${String(number).padStart(2, "0")}`,
    location: `Invernadero ${number}`,
    crop: greenhouseCrops[index],
    benches: Array.from({ length: 9 }, (_, benchIndex) => ({
      id: `I${String(number).padStart(2, "0")}-M${benchIndex + 1}`,
      name: `Mesón ${benchIndex + 1}`,
      lots: 2 + ((number + benchIndex) % 4),
      plants: 0
    })),
    risk,
    status,
    supervisor
  };
});

const movementHistory = [
  {
    date: "18/06/2026 10:20",
    type: "Ingreso",
    species: "Arándano",
    variety: "Legacy",
    quantity: 480,
    from: "Producción inicial",
    to: "Invernadero 4 · Mesón 3",
    owner: "Jefe de vivero"
  }
];

const plantRegistry = [
  { lot: "M4-L12", species: "Arándano", variety: "Legacy", origin: "Micropropagación", phase: "Crecimiento activo", units: 12480, mortality: "8.7%", quality: "B" },
  { lot: "M5-L18", species: "Arándano", variety: "Duke", origin: "Micropropagación", phase: "Crecimiento activo", units: 10920, mortality: "6.4%", quality: "B" },
  { lot: "M2-L07", species: "Avellano", variety: "Barcelona", origin: "Ex vitro", phase: "Aclimatación", units: 6840, mortality: "4.1%", quality: "A" },
  { lot: "M1-L03", species: "Cerezo", variety: "Regina", origin: "Ex vitro", phase: "Endurecimiento", units: 5120, mortality: "2.8%", quality: "A" },
  { lot: "M3-L08", species: "Frambueso", variety: "Meeker", origin: "Micropropagación", phase: "Aclimatación", units: 4380, mortality: "3.9%", quality: "A" },
  { lot: "M6-L09", species: "Frutilla", variety: "Albion", origin: "Micropropagación", phase: "Crecimiento activo", units: 9320, mortality: "5.2%", quality: "B" },
  { lot: "M7-L13", species: "Mora", variety: "Loch Ness", origin: "Ex vitro", phase: "Endurecimiento", units: 2740, mortality: "3.1%", quality: "A" },
  { lot: "M8-L41", species: "Boldo", variety: "Panguilemu 1", origin: "Material nativo", phase: "Crecimiento activo", units: 1180, mortality: "1.6%", quality: "A" }
];

const environmentReadings = [
  { module: "M4", temp: "24.8 C", humidity: "91%", ph: "5.9", ec: "1.8", risk: 88, status: "Botrytis probable" },
  { module: "M5", temp: "23.9 C", humidity: "87%", ph: "5.7", ec: "1.6", risk: 74, status: "Ventilar" },
  { module: "M2", temp: "21.2 C", humidity: "78%", ph: "6.2", ec: "1.3", risk: 55, status: "Raíz bajo observación" },
  { module: "M1", temp: "19.8 C", humidity: "69%", ph: "6.0", ec: "1.1", risk: 31, status: "Normal" }
];

const predictionRows = [
  { lot: "M4-L12", risk: 86, driver: "Humedad > 90%, lesiones grises, historial Botrytis", horizon: "24-72 h", action: "Aislar y validar fungicida" },
  { lot: "M5-L18", risk: 73, driver: "Mojamiento foliar persistente y baja ventilación", horizon: "3-5 días", action: "Ventilar y repetir captura" },
  { lot: "M2-L07", risk: 61, driver: "Sustrato húmedo y raíz con coloración parda", horizon: "7 días", action: "Ajustar riego y revisar drenaje" },
  { lot: "M1-L03", risk: 34, driver: "Parámetros estables", horizon: "7 días", action: "Monitoreo preventivo" }
];

const recommendationRows = [
  { lot: "M4-L12", nutrition: "Mantener base NPK + Mg", pesticide: "Evaluar fungicida Serie SAG 2000 autorizado para Botrytis", htp: "Pendiente firma", inventory: "Existencias suficiente" },
  { lot: "M5-L18", nutrition: "Reducir mojamiento y controlar CE", pesticide: "Sin aplicación hasta segunda captura", htp: "Observación", inventory: "No requerido" },
  { lot: "M2-L07", nutrition: "Bajar sales; confirmar pH/CE", pesticide: "Biocontrol o fungicida radicular solo con confirmación", htp: "Pendiente revisión", inventory: "Existencias bajas" },
  { lot: "M1-L03", nutrition: "Fertirriego estándar por fase", pesticide: "No aplicar", htp: "Preventivo", inventory: "Correcto" }
];

const inventoryRows = [
  { item: "ACTARA 25 WG", type: "Insecticida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y cultivo antes de aplicar" },
  { item: "AMISTAR TOP", type: "Fungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta, dosis y periodo de reingreso" },
  { item: "AMONIO CUATERNARIO", type: "Sanitizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No plaguicida agrícola", regla: "Uso en higiene; no aplicar sobre plantas sin etiqueta" },
  { item: "AZOTE PLUS", type: "Fertilizante/Bioestimulante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Usar con análisis nutricional" },
  { item: "BANDA CONTROL INSECTOS AMARILLA 30X100 CNBM", type: "Monitoreo", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No plaguicida agrícola", regla: "Monitoreo preventivo" },
  { item: "BANDA CONTROL INSECTOS AZUL 30X100 CNBM", type: "Monitoreo", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No plaguicida agrícola", regla: "Monitoreo preventivo" },
  { item: "BAYFOLAN", type: "Fertilizante foliar", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar solo con diagnóstico nutricional" },
  { item: "BELLIS", type: "Fungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y firma técnica" },
  { item: "BENOMYL", type: "Fungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Revisión manual SAG", regla: "No liberar sin confirmar registro vigente" },
  { item: "BIOBACTER", type: "Biológico", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar uso registrado según etiqueta" },
  { item: "BIOCAP", type: "Biológico/Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Revisión manual SAG", regla: "Coincidencia descartada con BIOCAPSAICIN; confirmar producto exacto" },
  { item: "BIOLIFE FOLIAR", type: "Bioestimulante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con registro de lote" },
  { item: "BIOLIFE RHIZO", type: "Biológico radicular", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con registro de lote" },
  { item: "BRAVO", type: "Fungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y cultivo autorizado" },
  { item: "COMET", type: "Fungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y cultivo autorizado" },
  { item: "CRATER MX 70% WP", type: "Plaguicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta antes de aplicar" },
  { item: "CYPERKILL", type: "Insecticida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y EPP" },
  { item: "DASH", type: "Coadyuvante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Usar solo asociado a etiqueta autorizada" },
  { item: "DIAZOL 50 EW X 10 LTS", type: "Insecticida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y restricciones vigentes" },
  { item: "ENGEO", type: "Insecticida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta, cultivo y carencia" },
  { item: "EXIREL", type: "Insecticida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta, cultivo y carencia" },
  { item: "FADEX H+", type: "Corrector pH/Coadyuvante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar ajuste de agua" },
  { item: "FERTUM NPK 20-20-20", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con análisis nutricional" },
  { item: "FERTUM BOOSTER", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con análisis nutricional" },
  { item: "FERTUM MAX HIERRO", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con análisis nutricional" },
  { item: "FERTUM ROOT", type: "Fertilizante radicular", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con análisis nutricional" },
  { item: "FETRILON COMBI", type: "Fertilizante micronutrientes", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con análisis nutricional" },
  { item: "FOSFATO MONOAMONICO", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar dosis en cuaderno" },
  { item: "FRONTAL 425 SC", type: "Fungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y cultivo autorizado" },
  { item: "GRANDEVO WG X 2KG", type: "Bioinsecticida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y condiciones de uso" },
  { item: "INDAR", type: "Fungicida", existencias: "En stock", minimo: "0", status: "Bloqueado", sagStatus: "Cancelado SAG", regla: "Alerta: coincidencia con INDAR FLO 30 FS en listado SAG cancelados; no aplicar sin revisión técnica" },
  { item: "INVICTO", type: "Plaguicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta antes de aplicar" },
  { item: "KIESEL 44 ORGANIC", type: "Fertilizante/Bioestimulante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar dosis en cuaderno" },
  { item: "MENNO FLORADES", type: "Sanitizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No plaguicida agrícola", regla: "Uso de higiene y desinfección" },
  { item: "METALAXIL", type: "Fungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y cultivo autorizado" },
  { item: "MEZCLA 17-20-20", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con análisis nutricional" },
  { item: "MICROLIFE", type: "Biológico", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar lote tratado" },
  { item: "MURALLA DELTA", type: "Insecticida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta, cultivo y EPP" },
  { item: "NA-PRO", type: "Bioestimulante/Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Coincidencia textual no exacta; no bloquear como plaguicida" },
  { item: "NITRATO DE AMONIO", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar dosis en cuaderno" },
  { item: "NITRATO DE CALCIO", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar dosis en cuaderno" },
  { item: "NITRATO DE MAGNESIO", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar dosis en cuaderno" },
  { item: "NITRATO DE POTACIO", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar dosis en cuaderno" },
  { item: "NOVATEC SOLUB 14-48", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con análisis nutricional" },
  { item: "OLEATBIO PLUS GW", type: "Biológico", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta si se usa como plaguicida" },
  { item: "PERMETRINA 50 CE", type: "Insecticida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta, cultivo y EPP" },
  { item: "PROFULVIC-45", type: "Bioestimulante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar dosis en cuaderno" },
  { item: "PUZZLE SC", type: "Fungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y cultivo autorizado" },
  { item: "RAID AEROSOL TODO INSECTO 360 CC", type: "Insecticida doméstico", existencias: "En stock", minimo: "Revisar", status: "Bloqueado para plantas", sagStatus: "No plaguicida agrícola", regla: "No usar en vivero productivo; solo control doméstico autorizado" },
  { item: "RANGO", type: "Plaguicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar producto exacto antes de aplicar" },
  { item: "REGLONE", type: "Herbicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Revisión manual SAG", regla: "No liberar sin confirmar registro vigente y restricciones" },
  { item: "RUGBY", type: "Nematicida/Insecticida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y restricciones" },
  { item: "SALITRE POTASICO", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar dosis en cuaderno" },
  { item: "SELECRON", type: "Insecticida/Acaricida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Revisión manual SAG", regla: "No liberar sin confirmar registro vigente y restricciones" },
  { item: "SHIRLAN 500 SC", type: "Fungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y cultivo autorizado" },
  { item: "SULFATO DE AMONIO", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Registrar dosis en cuaderno" },
  { item: "SWITCH", type: "Fungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y cultivo autorizado" },
  { item: "TIMOREX GOLD", type: "Biofungicida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta y condiciones de uso" },
  { item: "ULTRASOL CRECIMIENTO", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con análisis nutricional" },
  { item: "ULTRASOL INICIAL", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "Aplicar con análisis nutricional" },
  { item: "UREA", type: "Fertilizante", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "No aplica SAG plaguicidas", regla: "No corresponde a urea fenilmercúrica prohibida" },
  { item: "VERTIMEC", type: "Insecticida/Acaricida", existencias: "En stock", minimo: "Revisar", status: "Disponible", sagStatus: "Por verificar SAG", regla: "Validar etiqueta, cultivo y carencia" }
];

const reportRows = [
  { title: "Reporte fitosanitario semanal", detail: "Alertas, firmas de validación, mortalidad y descartes por lote", cadence: "Semanal" },
  { title: "Cuaderno de campo SAG", detail: "Aplicaciones, productos, etiqueta/HDS y responsable técnico", cadence: "Por evento" },
  { title: "Desempeño productivo", detail: "Supervivencia, calidad A/B/C y avance por fase", cadence: "Mensual" },
  { title: "Auditoría de IA", detail: "Imagen, confianza, recomendación, decisión humana y resultado", cadence: "Continuo" }
];

const securityRows = [
  "JWT/OAuth para acceso por rol",
  "HTTPS obligatorio y cifrado AES-256 en respaldos",
  "Bitácora auditable de diagnósticos, firmas y cambios",
  "Permisos por administrador, biotecnólogo, operario y gerente",
  "Respaldos automáticos y control de versiones del cuaderno",
  "Firma digital antes de liberar cualquier aplicación"
];
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let cameraStream = null;
let hasCapture = false;

function riskClass(risk) {
  if (risk >= 75) return "risk-high";
  if (risk >= 55) return "risk-medium";
  return "risk-low";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function populateCatalogControls() {
  const speciesOptions = speciesCatalog
    .map((item) => `<option value="${item.species}">${item.species} (${item.varieties.length})</option>`)
    .join("");
  safeSet("#speciesFilter", `<option value="all">Todas las especies</option>${speciesOptions}`);
  safeSet("#movementSpecies", speciesOptions);

  const lotOptions = Object.entries(lotProfiles)
    .map(([lot, profile]) => `<option value="${lot}">${lot} · ${profile.species} ${profile.variety}</option>`)
    .join("");
  safeSet("#captureLot", lotOptions);
  populateFieldbookFilter();

  const greenhouseOptions = nurseryAssets
    .map((item) => `<option value="${item.id}">${item.location}</option>`)
    .join("");
  safeSet("#movementFromGreenhouse", `<option value="external">Ingreso externo / propagación</option>${greenhouseOptions}`);
  safeSet("#movementToGreenhouse", greenhouseOptions);
  updateMovementVarieties();
  updateMovementBenches();
}

function splitLocation(location = "") {
  const greenhouseMatch = String(location).match(/Invernadero\s+\d+/i);
  const benchMatch = String(location).match(/Mes[oó]n\s+\d+/i);
  return {
    greenhouse: greenhouseMatch ? greenhouseMatch[0].replace("Invernadero", "Invernadero") : "Invernadero por asignar",
    bench: benchMatch ? benchMatch[0].replace("Meson", "Mesón") : "Mesón por asignar"
  };
}

function fieldbookKey(row) {
  return [
    row.greenhouse || splitLocation(row.location).greenhouse,
    row.bench || splitLocation(row.location).bench,
    row.species,
    row.variety
  ].join("__");
}

function fieldbookLabelFromKey(key) {
  const [greenhouse, bench, species, variety] = key.split("__");
  return `${greenhouse} · ${bench} · ${species} · ${variety}`;
}

function splitCropName(crop = "") {
  const catalogMatch = speciesCatalog
    .filter((item) => crop.startsWith(`${item.species} `) || crop === item.species)
    .sort((a, b) => b.species.length - a.species.length)[0];
  if (!catalogMatch) {
    const [species = "Especie por asignar", ...rest] = String(crop).split(" ");
    return { species, variety: rest.join(" ") || "Variedad por asignar" };
  }
  return {
    species: catalogMatch.species,
    variety: crop.replace(catalogMatch.species, "").trim() || catalogMatch.varieties[0] || "Variedad por asignar"
  };
}

function baseFieldbookGroups() {
  return nurseryAssets.flatMap((greenhouse) => {
    const crop = splitCropName(greenhouse.crop);
    return greenhouse.benches.map((bench) => ({
      lot: `${greenhouse.id}-${bench.id}`,
      location: `${greenhouse.location} · ${bench.name}`,
      greenhouse: greenhouse.location,
      bench: bench.name,
      species: crop.species,
      variety: crop.variety,
      phase: "Sin plantas designadas",
      rows: []
    }));
  });
}

function populateFieldbookFilter(selected = $("#fieldbookFilter")?.value || "all") {
  const keys = [...new Set([...baseFieldbookGroups().map(fieldbookKey), ...fieldbook.map(fieldbookKey)])]
    .sort((a, b) => fieldbookLabelFromKey(a).localeCompare(fieldbookLabelFromKey(b), "es", { numeric: true }));
  const options = keys
    .map((key) => `<option value="${key}">${fieldbookLabelFromKey(key)}</option>`)
    .join("");
  safeSet("#fieldbookFilter", `<option value="all">Todos los cuadernos</option>${options}`);
  if ($("#fieldbookFilter") && (selected === "all" || keys.includes(selected))) {
    $("#fieldbookFilter").value = selected;
  }
}

function updateMovementVarieties() {
  const selectedSpecies = $("#movementSpecies")?.value || speciesCatalog[0].species;
  const catalogItem = speciesCatalog.find((item) => item.species === selectedSpecies) || speciesCatalog[0];
  safeSet("#movementVariety", catalogItem.varieties
    .map((variety) => `<option value="${variety}">${variety}</option>`)
    .join(""));
}

function benchOptions(greenhouseId) {
  const greenhouse = nurseryAssets.find((item) => item.id === greenhouseId) || nurseryAssets[0];
  return greenhouse.benches
    .map((bench) => `<option value="${bench.id}">${bench.name} · ${bench.id}</option>`)
    .join("");
}

function updateMovementBenches() {
  const fromGreenhouse = $("#movementFromGreenhouse")?.value;
  const toGreenhouse = $("#movementToGreenhouse")?.value || nurseryAssets[0].id;
  safeSet("#movementFromBench", fromGreenhouse === "external"
    ? `<option value="external">Sin mesón origen</option>`
    : benchOptions(fromGreenhouse));
  safeSet("#movementToBench", benchOptions(toGreenhouse));
}

function renderModules(filter = "all") {
  const rows = modules
    .filter((item) => filter === "all" || item.species === filter)
    .map((item) => `
      <article class="module-row">
        <div>
          <strong>${item.id} · ${item.species}</strong>
          <small>${item.variety} · Señal probable: ${item.pathogen}</small>
        </div>
        <div class="risk-bar" aria-label="Riesgo ${item.risk}%">
          <span class="${riskClass(item.risk)}" style="width:${item.risk}%"></span>
        </div>
        <span class="badge">${item.risk}%</span>
      </article>
    `)
    .join("");

  $("#moduleList").innerHTML = rows || `
    <article class="module-row">
      <div>
        <strong>Sin lotes activos para esta especie</strong>
        <small>La especie está en el catálogo, pero aún no tiene lote productivo asignado.</small>
      </div>
      <div class="risk-bar" aria-label="Sin riesgo activo"><span class="risk-low" style="width:0%"></span></div>
      <span class="badge">Catálogo</span>
    </article>
  `;
}

function renderAlerts() {
  const header = `
    <div class="alert-row">
      <span>Alerta</span><span>Lote</span><span>Confianza</span><span>Estado</span><span>Acción</span>
    </div>
  `;
  const rows = alerts.map((alert) => `
    <div class="alert-row">
      <strong>${alert.id} · ${alert.pathogen}</strong>
      <span>${alert.module}<br><small>${alert.species}</small></span>
      <span>${alert.confidence}</span>
      <span class="badge">${alert.status}</span>
      <span>${alert.action}</span>
    </div>
  `).join("");
  $("#alertsTable").innerHTML = header + rows;
}

function isSagDiscontinued(row) {
  return ["Cancelado SAG", "Prohibido SAG", "Descontinuado SAG"].includes(row.sagStatus);
}

function syncInventorySagAlerts(source = "Carga de inventario") {
  const activeInventoryAlertIds = new Set();
  inventoryRows.forEach((row, index) => {
    if (!isSagDiscontinued(row)) return;
    const id = `INV-SAG-${String(index + 1).padStart(2, "0")}`;
    activeInventoryAlertIds.add(id);
    const existing = alerts.find((alert) => alert.id === id);
    const alertPayload = {
      id,
      module: "Inventario SAG",
      species: row.item,
      pathogen: row.sagStatus,
      confidence: "Catálogo SAG",
      status: "Bloqueada",
      action: `Bloquear uso de ${row.item}. ${row.regla}. Origen: ${source}.`
    };
    if (existing) Object.assign(existing, alertPayload);
    else alerts.unshift(alertPayload);
  });

  for (let index = alerts.length - 1; index >= 0; index -= 1) {
    const alert = alerts[index];
    if (alert.id?.startsWith("INV-SAG-") && !activeInventoryAlertIds.has(alert.id)) {
      alerts.splice(index, 1);
    }
  }
}

function renderInventoryAlerts() {
  const discontinued = inventoryRows.filter(isSagDiscontinued);
  if (!discontinued.length) {
    safeSet("#inventoryAlerts", `
      <div class="inventory-alert ok">
        <strong>Sin productos descontinuados SAG en stock</strong>
        <span>Las alertas automáticas se activarán solo ante productos cancelados, prohibidos o descontinuados por catálogo SAG.</span>
      </div>
    `);
    return;
  }

  safeSet("#inventoryAlerts", `
    <div class="inventory-alert danger">
      <div>
        <strong>${discontinued.length} producto SAG bloqueado</strong>
        <span>Alerta automática generada solo para productos descontinuados/cancelados por catálogo SAG. Requiere retiro preventivo o firma técnica antes de cualquier decisión.</span>
      </div>
      ${discontinued.map((row) => `<span class="badge danger-badge">${row.item} · ${row.sagStatus}</span>`).join("")}
    </div>
  `);
}

function renderApprovalOptions() {
  $("#approvalAlert").innerHTML = alerts
    .map((alert) => `<option value="${alert.id}">${alert.id} · ${alert.module} · ${alert.pathogen}</option>`)
    .join("");
}

function getLotProfile(lotId) {
  const normalizedLot = normalizeLotId(lotId);
  return lotProfiles[normalizedLot] || {
    location: "Ubicación por asignar",
    species: "Especie por asignar",
    variety: "Variedad por asignar",
    phase: "Fase por asignar",
    module: normalizedLot || "Sin módulo"
  };
}

function normalizeLotId(value) {
  const text = String(value || "").trim();
  const knownLot = Object.keys(lotProfiles).find((lotId) => text.includes(lotId));
  return knownLot || text || "Lote sin identificar";
}

function createFieldbookEntry(lotId, date, detail, owner) {
  const normalizedLot = normalizeLotId(lotId);
  const profile = getLotProfile(normalizedLot);
  const locationParts = splitLocation(profile.location);
  return {
    date,
    lot: normalizedLot,
    location: profile.location,
    greenhouse: locationParts.greenhouse,
    bench: locationParts.bench,
    species: profile.species,
    variety: profile.variety,
    phase: profile.phase,
    detail,
    owner
  };
}

function renderFieldbook(filter = $("#fieldbookFilter")?.value || "all") {
  populateFieldbookFilter(filter);
  const baseGroups = baseFieldbookGroups();
  const groups = baseGroups.reduce((acc, group) => {
    const key = fieldbookKey(group);
    acc[key] = { ...group, rows: [] };
    return acc;
  }, {});

  fieldbook.forEach((row) => {
    const key = fieldbookKey(row);
    const locationParts = splitLocation(row.location);
    if (!groups[key]) {
      groups[key] = {
        lot: row.lot,
        location: row.location,
        greenhouse: row.greenhouse || locationParts.greenhouse,
        bench: row.bench || locationParts.bench,
        species: row.species,
        variety: row.variety,
        phase: row.phase,
        rows: []
      };
    }
    groups[key].rows.push(row);
  });

  const allGroups = Object.values(groups)
    .sort((a, b) => fieldbookLabelFromKey(fieldbookKey(a)).localeCompare(fieldbookLabelFromKey(fieldbookKey(b)), "es", { numeric: true }));
  const visibleGroups = filter === "all" ? allGroups : allGroups.filter((group) => fieldbookKey(group) === filter);
  const visibleRows = visibleGroups.flatMap((group) => group.rows);

  $("#fieldbookSummary").innerHTML = `
    <span class="badge">${visibleGroups.length} cuadernos</span>
    <span class="badge">${visibleRows.length} registros</span>
    <span class="badge">${visibleGroups.filter((group) => group.rows.length === 0).length} sin plantas</span>
  `;

  $("#fieldbookRows").innerHTML = visibleGroups.map((group) => `
    <section class="fieldbook-group">
      <header class="fieldbook-group-header">
        <div>
          <strong>${group.greenhouse} · ${group.bench}</strong>
          <span>${group.species} · ${group.variety} · ${group.phase}</span>
        </div>
        <span class="badge">${group.rows.length ? `${group.rows.length} registros` : "Sin plantas designadas"}</span>
      </header>
      <div class="fieldbook-dimensions">
        <span><strong>Invernadero</strong>${group.greenhouse}</span>
        <span><strong>Mesón</strong>${group.bench}</span>
        <span><strong>Especie</strong>${group.species}</span>
        <span><strong>Variedad</strong>${group.variety}</span>
      </div>
      <div class="fieldbook-group-rows">
        ${group.rows.length ? group.rows.map((row) => `
          <article class="field-entry">
            <small>${row.date}</small>
            <div>
              <strong>${row.owner}</strong>
              <span>${row.detail}</span>
              <small>${row.lot} · ${row.location}</small>
            </div>
            <span class="badge">${row.species} ${row.variety}</span>
          </article>
        `).join("") : `
          <article class="field-entry empty-entry">
            <small>Sin registros</small>
            <div>
              <strong>Mesón disponible</strong>
              <span>No hay plantas designadas ni movimientos registrados para este cuaderno.</span>
              <small>${group.location}</small>
            </div>
            <span class="badge">Vacío</span>
          </article>
        `}
      </div>
    </section>
  `).join("") || `
    <article class="field-entry">
      <small>Sin registros</small>
      <div>
        <strong>No hay entradas para este cuaderno</strong>
        <span>Selecciona otro lote o genera un diagnóstico automático desde Captura.</span>
      </div>
      <span class="badge">Vacío</span>
    </article>
  `;
}

function renderProgram() {
  $("#programTable").innerHTML = programRows.map((row) => `
    <article class="program-row">
      <strong>${row.phase}</strong>
      <p>${row.fertilizer}</p>
      <p>${row.pesticide}</p>
      <span class="badge">${row.sag}</span>
    </article>
  `).join("");
}


function safeSet(selector, html) {
  const node = $(selector);
  if (node) node.innerHTML = html;
}

function renderNurseries() {
  safeSet("#nurseryMap", nurseryAssets.map((item) => `
    <article class="map-card ${riskClass(item.risk)}-card">
      <strong>${item.id}</strong>
      <span>${item.location}</span>
      <div class="risk-bar"><span class="${riskClass(item.risk)}" style="width:${item.risk}%"></span></div>
      <small>${item.crop} - ${item.status} - ${item.benches.length} mesones</small>
    </article>
  `).join(""));

  safeSet("#nurseryTree", nurseryAssets.map((item) => `
    <article class="tree-node">
      <strong>${item.location}</strong>
      <span>${item.crop} - ${item.benches.length} mesones - responsable: ${item.supervisor}</span>
      <div class="bench-grid">
        ${item.benches.map((bench) => `
          <span class="bench-chip">${bench.name}<small>${bench.id} - ${bench.lots} lotes - ${bench.plants.toLocaleString("es-CL")} plantas</small></span>
        `).join("")}
      </div>
    </article>
  `).join(""));

  safeSet("#movementHistory", movementHistory.map((movement) => `
    <article class="movement-row">
      <div>
        <strong>${movement.type} · ${movement.species} ${movement.variety}</strong>
        <span>${movement.date} · ${movement.owner}</span>
      </div>
      <span>${movement.from}</span>
      <span>${movement.to}</span>
      <span class="badge">${movement.quantity.toLocaleString("es-CL")} plantas</span>
    </article>
  `).join(""));
}

function findBench(greenhouseId, benchId) {
  const greenhouse = nurseryAssets.find((item) => item.id === greenhouseId);
  return greenhouse?.benches.find((bench) => bench.id === benchId);
}

function registerPlantMovement(event) {
  event.preventDefault();
  const type = $("#movementType").value;
  const species = $("#movementSpecies").value;
  const variety = $("#movementVariety").value;
  const quantity = Math.max(0, Number($("#movementQuantity").value || 0));
  const fromGreenhouse = $("#movementFromGreenhouse").value;
  const fromBench = $("#movementFromBench").value;
  const toGreenhouse = $("#movementToGreenhouse").value;
  const toBench = $("#movementToBench").value;

  if (!quantity) {
    showToast("Ingresa una cantidad de plantas mayor a cero.");
    return;
  }

  const originAsset = nurseryAssets.find((item) => item.id === fromGreenhouse);
  const targetAsset = nurseryAssets.find((item) => item.id === toGreenhouse);
  const originBench = findBench(fromGreenhouse, fromBench);
  const targetBench = findBench(toGreenhouse, toBench);
  if (!targetAsset || !targetBench) {
    showToast("Selecciona un invernadero y mesón destino válido.");
    return;
  }

  if (type === "Traslado" && originBench) {
    originBench.plants = Math.max(0, originBench.plants - quantity);
  }
  targetBench.plants += quantity;

  const movement = {
    date: new Date().toLocaleString("es-CL", { dateStyle: "short", timeStyle: "short" }),
    type,
    species,
    variety,
    quantity,
    from: originAsset && originBench ? `${originAsset.location} · ${originBench.name}` : "Ingreso externo / propagación",
    to: `${targetAsset.location} · ${targetBench.name}`,
    owner: "Registro operativo"
  };

  movementHistory.unshift(movement);
  fieldbook.unshift({
    date: movement.date,
    lot: `${toGreenhouse}-${toBench}`,
    location: movement.to,
    greenhouse: targetAsset.location,
    bench: targetBench.name,
    species,
    variety,
    phase: type,
    detail: `${type} de ${quantity.toLocaleString("es-CL")} plantas desde ${movement.from} hacia ${movement.to}.`,
    owner: movement.owner
  });

  renderNurseries();
  renderFieldbook();
  showToast(`${type} registrado en vivero y cuaderno de campo.`);
  event.target.reset();
  updateMovementVarieties();
  updateMovementBenches();
}

function renderPlants() {
  const groupedRows = plantRegistry.reduce((acc, row) => {
    if (!acc[row.species]) acc[row.species] = [];
    acc[row.species].push(row);
    return acc;
  }, {});

  safeSet("#plantsTable", Object.entries(groupedRows).map(([species, rows]) => `
    <section class="fieldbook-group">
      <header class="fieldbook-group-header">
        <div>
          <strong>${species}</strong>
          <span>${rows.length} lotes activos en producción</span>
        </div>
        <span class="badge">Separado por especie</span>
      </header>
      <div class="data-table compact-table">
        <div class="data-row data-head"><span>Lote</span><span>Variedad</span><span>Fase</span><span>Plantas</span><span>Mortalidad</span><span>Calidad</span></div>
        ${rows.map((row) => `
          <div class="data-row"><strong>${row.lot}</strong><span>${row.variety}</span><span>${row.phase}</span><span>${row.units.toLocaleString("es-CL")}</span><span>${row.mortality}</span><span class="badge">${row.quality}</span></div>
        `).join("")}
      </div>
    </section>
  `).join(""));

  safeSet("#speciesCatalog", speciesCatalog.map((item) => `
    <article class="catalog-species">
      <header>
        <strong>${item.code} · ${item.species}</strong>
        <span class="badge">${item.varieties.length} variedades</span>
      </header>
      <p>${item.varieties.join(", ")}</p>
    </article>
  `).join(""));
}

function renderReferenceProfile(selector, profile) {
  safeSet(selector, `
    <div class="reference-card">
      <div>
        <strong>${profile.label}</strong>
        <span>${profile.imageCount} imágenes base · ${profile.source}</span>
      </div>
      <div class="reference-tags">
        ${profile.lots.map((lot) => `<span class="badge">${lot}</span>`).join("")}
      </div>
    </div>
    <ul class="reference-list">
      ${profile.expected.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `);
}

function renderImageReferences() {
  renderReferenceProfile("#normalReference", normalReferenceProfile);
  renderReferenceProfile("#botrytisReference", botrytisReferenceProfile);
}

function renderEnvironment() {
  safeSet("#sensorGrid", environmentReadings.map((row) => `
    <article class="sensor-card">
      <strong>${row.module}</strong>
      <span>${row.status}</span>
      <div class="sensor-values"><b>${row.temp}</b><b>${row.humidity}</b><b>pH ${row.ph}</b><b>CE ${row.ec}</b></div>
      <div class="risk-bar"><span class="${riskClass(row.risk)}" style="width:${row.risk}%"></span></div>
    </article>
  `).join(""));
  safeSet("#environmentHeatmap", environmentReadings.map((row) => `<div class="heat-cell ${riskClass(row.risk)}"><strong>${row.module}</strong><span>${row.risk}%</span></div>`).join(""));
}

function renderPredictive() {
  safeSet("#predictionList", predictionRows.map((row) => `
    <article class="prediction-card">
      <div><strong>${row.lot}</strong><span>${row.horizon}</span></div>
      <span class="badge">${row.risk}% riesgo</span>
      <p>${row.action}</p>
    </article>
  `).join(""));
  safeSet("#factorList", predictionRows.map((row) => `
    <article class="factor-card"><strong>${row.lot}</strong><span>${row.driver}</span></article>
  `).join(""));
}

function renderRecommender() {
  const header = `<div class="data-row data-head"><span>Lote</span><span>Fertilidad</span><span>Fitosanitario</span><span>Validación</span><span>Inventario</span></div>`;
  const rows = recommendationRows.map((row) => `
    <div class="data-row"><strong>${row.lot}</strong><span>${row.nutrition}</span><span>${row.pesticide}</span><span class="badge">${row.htp}</span><span>${row.inventory}</span></div>
  `).join("");
  safeSet("#recommendationTable", header + rows);
}

function renderInventory() {
  renderInventoryAlerts();
  const header = `<div class="data-row data-head inventory-row"><span>Insumo</span><span>Tipo</span><span>Existencias</span><span>Estado bodega</span><span>Estado SAG</span><span>Regla</span></div>`;
  const rows = inventoryRows.map((row) => `
    <div class="data-row inventory-row">
      <strong>${row.item}</strong>
      <span>${row.type}</span>
      <span>${row.existencias}<br><small>Mínimo: ${row.minimo}</small></span>
      <span class="badge ${row.status.includes("Bloqueado") ? "warning-badge" : ""}">${row.status}</span>
      <span class="badge ${isSagDiscontinued(row) ? "danger-badge" : row.sagStatus.includes("Revisión") || row.sagStatus.includes("Por verificar") ? "warning-badge" : ""}">${row.sagStatus}</span>
      <span>${row.regla}</span>
    </div>
  `).join("");
  safeSet("#inventoryTable", header + rows);
}

function renderReports() {
  safeSet("#reportList", reportRows.map((row) => `
    <article class="report-card"><strong>${row.title}</strong><span>${row.detail}</span><small>${row.cadence}</small></article>
  `).join(""));
  safeSet("#esgList", `
    <article class="metric success"><span>Agroquímicos evitados</span><strong>21%</strong><small>Estimado por aplicaciones bloqueadas o diferenciadas.</small></article>
    <article class="metric"><span>Lotes con trazabilidad completa</span><strong>96%</strong><small>Imagen, diagnóstico, decisión y resultado.</small></article>
    <article class="metric warning"><span>Alertas sin firma</span><strong>${alerts.filter((a) => a.status === "Bloqueada").length}</strong><small>Permanecen bloqueadas hasta revisión técnica.</small></article>
  `);
}

function renderAdmin() {
  safeSet("#adminList", `
    <article class="tree-node"><strong>Administrador</strong><span>Gestiona usuarios, catálogos, respaldos y auditoría.</span></article>
    <article class="tree-node"><strong>Biotecnólogo</strong><span>Valida diagnósticos, firma planes y bloquea aplicaciones.</span></article>
    <article class="tree-node"><strong>Operario</strong><span>Captura imágenes, registra síntomas y ejecuta tareas aprobadas.</span></article>
    <article class="tree-node"><strong>Gerencia</strong><span>Consulta indicadores, reportes y cumplimiento.</span></article>
  `);
  safeSet("#securityGrid", securityRows.map((item) => `<article class="security-card">${item}</article>`).join(""));
}

function renderSaasModules() {
  renderNurseries();
  renderPlants();
  renderEnvironment();
  renderPredictive();
  renderRecommender();
  renderInventory();
  renderReports();
  renderAdmin();
}
function setView(viewId) {
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.setPhytoView = setView;

function stopCamera() {
  if (!cameraStream) return;
  cameraStream.getTracks().forEach((track) => track.stop());
  cameraStream = null;
  $("#cameraVideo").srcObject = null;
  $("#cameraFrame").classList.remove("camera-on");
  $("#snapBtn").disabled = true;
}

function setPreview(src, sourceLabel) {
  const preview = $("#previewImage");
  preview.src = src;
  hasCapture = true;
  $("#cameraFrame").classList.add("has-media", "has-image");
  $("#cameraFrame").classList.remove("camera-on");
  stopCamera();
  $("#recommendation").innerHTML = `
    <span class="badge">${sourceLabel}</span>
    <p>Imagen cargada correctamente. Presiona detectar automáticamente para estimar deficiencia, posible patógeno y plan de manejo del lote.</p>
  `;
}

function loadImageFile(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showToast("Selecciona un archivo de imagen válido.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => setPreview(reader.result, "Imagen subida");
  reader.readAsDataURL(file);
}

async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    showToast("Este navegador no permite abrir la cámara desde aquí.");
    return;
  }

  try {
    stopCamera();
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });
    const video = $("#cameraVideo");
    video.srcObject = cameraStream;
    hasCapture = false;
    $("#previewImage").removeAttribute("src");
    $("#cameraFrame").classList.add("has-media", "camera-on");
    $("#cameraFrame").classList.remove("has-image");
    $("#snapBtn").disabled = false;
    $("#recommendation").innerHTML = `
      <span class="badge">Cámara activa</span>
      <p>Encuadra la hoja o bandeja y presiona tomar foto para congelar la imagen antes del análisis.</p>
    `;
  } catch (error) {
    showToast("No se pudo abrir la cámara. Revisa permisos del navegador o usa subir imagen.");
  }
}

function takePhoto() {
  const video = $("#cameraVideo");
  if (!cameraStream || !video.videoWidth) {
    showToast("La cámara aún no está lista.");
    return;
  }

  const canvas = $("#captureCanvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  setPreview(canvas.toDataURL("image/jpeg", 0.92), "Foto tomada en campo");
}

function imageToCanvas() {
  const canvas = $("#captureCanvas");
  const preview = $("#previewImage");
  const video = $("#cameraVideo");
  const source = hasCapture && preview.src ? preview : video;

  if (!source || (source.tagName === "VIDEO" && !source.videoWidth)) return null;

  const width = source.videoWidth || source.naturalWidth;
  const height = source.videoHeight || source.naturalHeight;
  const maxSide = 360;
  const scale = Math.min(1, maxSide / Math.max(width, height));
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  canvas.getContext("2d").drawImage(source, 0, 0, canvas.width, canvas.height);
  return canvas;
}

function extractImageSignals() {
  const canvas = imageToCanvas();
  if (!canvas) return null;

  const { data, width, height } = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
  let green = 0;
  let yellow = 0;
  let brown = 0;
  let gray = 0;
  let dark = 0;
  let purple = 0;
  let redSpot = 0;
  let grayMold = 0;
  let darkFruit = 0;
  let edgeStress = 0;
  let total = 0;
  let background = 0;

  for (let i = 0; i < data.length; i += 16) {
    const pixel = i / 4;
    const x = pixel % width;
    const y = Math.floor(pixel / width);
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    const brightness = (r + g + b) / 3;
    const isEdge = x < width * 0.18 || x > width * 0.82 || y < height * 0.18 || y > height * 0.82;
    const isBrown = r > 75 && g > 35 && g < 125 && b < 90 && r > b * 1.2;
    const isDark = brightness < 58;
    const isRedSpot = r > 95 && g > 45 && g < 165 && b < 135 && r > g * 1.05 && r > b * 1.18;
    const isHealthyLeaf = g > r * 1.08 && g > b * 1.08 && brightness > 45;
    const isYoungLeaf = r > 115 && g > 105 && b < 115 && Math.abs(r - g) < 85 && brightness > 95;
    const isPurpleLeafDamage = r > 85 && b > 70 && g < 90 && Math.abs(r - b) < 80 && brightness > 70;
    const isGrayMoldLike = saturation < 0.24 && brightness > 92 && brightness < 190 && Math.abs(r - g) < 28 && Math.abs(g - b) < 34;
    const isHealthyDarkFruit = b > r * 1.08 && b > g * 1.05 && brightness > 22 && brightness < 112 && saturation > 0.18;
    const isFoliarDamage = (isBrown || isRedSpot || isPurpleLeafDamage)
      && brightness > 78
      && saturation > 0.16
      && !isDark
      && !(r < 115 && g < 95 && b < 80);
    const isMoldOnPlant = isGrayMoldLike && (isHealthyLeaf || isYoungLeaf || isFoliarDamage);

    if (isHealthyLeaf) green += 1;
    if (isYoungLeaf) yellow += 1;
    if (isBrown && isFoliarDamage) brown += 1;
    if (saturation < 0.18 && brightness > 70 && brightness < 205) gray += 1;
    if (isDark) dark += 1;
    if (isPurpleLeafDamage) purple += 1;
    if (isRedSpot && isFoliarDamage) redSpot += 1;
    if (isMoldOnPlant) grayMold += 1;
    if (isHealthyDarkFruit) darkFruit += 1;
    if (isEdge && isFoliarDamage) edgeStress += 1;
    if (!isHealthyLeaf && !isYoungLeaf && !isFoliarDamage && !isMoldOnPlant && !isHealthyDarkFruit) background += 1;
    total += 1;
  }

  const foliarPixels = Math.max(1, green + yellow + brown + purple + redSpot + grayMold);
  const plantPixels = Math.max(1, foliarPixels + darkFruit);
  const plantRatio = plantPixels / total;
  const foliarDamageRatio = (brown + purple + redSpot) / foliarPixels;
  const grayMoldRatio = grayMold / foliarPixels;
  const backgroundRatio = background / total;
  const damageRatio = foliarDamageRatio + edgeStress / foliarPixels;

  return {
    greenRatio: green / total,
    yellowRatio: yellow / total,
    brownRatio: brown / foliarPixels,
    grayRatio: gray / total,
    darkRatio: dark / total,
    purpleRatio: purple / foliarPixels,
    redSpotRatio: redSpot / foliarPixels,
    grayMoldRatio,
    darkFruitRatio: darkFruit / plantPixels,
    edgeStress: edgeStress / foliarPixels,
    plantRatio,
    foliarDamageRatio,
    backgroundRatio,
    damageRatio,
    botrytisScore: foliarDamageRatio + (redSpot / foliarPixels) * 0.8 + grayMoldRatio * 1.7
  };
}

function matchesBotrytisReference(signal, environment) {
  const visiblePlant = signal.plantRatio > 0.08 || signal.greenRatio > 0.08;
  const waterSoakedBrown = signal.brownRatio > 0.2 && signal.foliarDamageRatio > 0.24;
  const grayVelvetyMold = signal.grayMoldRatio > 0.055;
  const redBrownSpeckles = signal.redSpotRatio > 0.12 && signal.brownRatio > 0.16;
  const severeLesion = signal.foliarDamageRatio > 0.4 && (grayVelvetyMold || signal.brownRatio > 0.28);
  const humidContext = environment === "humid";
  const classicBotrytis = waterSoakedBrown && grayVelvetyMold;
  const moderateHumidPattern = humidContext && waterSoakedBrown && redBrownSpeckles;
  return visiblePlant && (classicBotrytis || severeLesion || moderateHumidPattern);
}

function matchesBotrytisSuspect(signal, environment) {
  const visiblePlant = signal.plantRatio > 0.08 || signal.greenRatio > 0.08;
  const visibleLeafDamage = signal.foliarDamageRatio >= 0.085;
  const brownLesion = signal.brownRatio >= 0.075;
  const redBrownPoints = signal.redSpotRatio >= 0.035;
  const dryShootOrEdge = signal.edgeStress >= 0.025 || signal.purpleRatio >= 0.025;
  const slightGraySignal = signal.grayMoldRatio >= 0.025;
  const normalButDamaged = environment === "normal" && visibleLeafDamage && (brownLesion || redBrownPoints || dryShootOrEdge);
  const humidCompatible = environment === "humid" && visibleLeafDamage && (brownLesion || redBrownPoints || slightGraySignal);
  return visiblePlant && (normalButDamaged || humidCompatible);
}

function matchesNormalReference(signal, environment) {
  const youngFlush = signal.yellowRatio >= 0.015 && signal.yellowRatio < 0.38;
  const activeGreen = signal.greenRatio > 0.12;
  const fruitingHealthy = signal.darkFruitRatio > 0.015 && signal.greenRatio > 0.16;
  const lowDamage = signal.brownRatio < 0.18 && signal.purpleRatio < 0.06 && signal.redSpotRatio < 0.095;
  const veryLowMold = signal.grayMoldRatio < 0.045;
  const enoughPlant = signal.plantRatio > 0.08;
  const normalSelected = environment === "normal" && signal.botrytisScore < 0.32;
  const backgroundLikely = signal.backgroundRatio > 0.2 && signal.botrytisScore < 0.28;
  return activeGreen && (youngFlush || fruitingHealthy) && lowDamage && veryLowMold && enoughPlant && (normalSelected || backgroundLikely || fruitingHealthy);
}

function diagnosisEvidence(diagnosis, signal, environment) {
  if (diagnosis.id === "botrytis_reference" || diagnosis.id === "botrytis_suspect") {
    return [
      `Lesión marrón/acuosa en tejido vegetal ${(signal.brownRatio * 100).toFixed(1)}%`,
      `Moho grisáceo o micelio compatible ${(signal.grayMoldRatio * 100).toFixed(1)}%`,
      `Daño foliar total ${(signal.foliarDamageRatio * 100).toFixed(1)}%`,
      diagnosis.id === "botrytis_suspect" ? "No se clasifica como sana porque hay daño visible en hojas/brotes" : environment === "humid" ? "Ambiente predisponente: alta humedad/baja ventilación" : "Patrón fuerte aun sin ambiente predisponente seleccionado"
    ];
  }
  if (diagnosis.id === "normal_reference" || diagnosis.id === "healthy") {
    return [
      `Zona foliar priorizada ${(signal.plantRatio * 100).toFixed(1)}% de la imagen`,
      `Daño dentro de hojas bajo ${(signal.foliarDamageRatio * 100).toFixed(1)}%`,
      `Moho gris/micelio no dominante ${(signal.grayMoldRatio * 100).toFixed(1)}%`,
      `Fruto oscuro compatible con arándano sano ${(signal.darkFruitRatio * 100).toFixed(1)}%`,
      "Sustrato, bandejas, malla y entorno quedan clasificados como fondo"
    ];
  }
  return [
    `Verde ${(signal.greenRatio * 100).toFixed(1)}%`,
    `Amarillo ${(signal.yellowRatio * 100).toFixed(1)}%`,
    `Pardo/rojizo ${(signal.foliarDamageRatio * 100).toFixed(1)}%`
  ];
}

function selectAutoDiagnosis(signal, environment) {
  if (matchesBotrytisReference(signal, environment)) {
    return {
      id: "botrytis_reference",
      label: "Botrytis cinerea probable",
      nutrition: "Nutrición no es causa principal; patrón compatible con lesión fúngica",
      plan: "Aislar bandeja, retirar tejido necrosado, reducir humedad/condensación, mejorar ventilación y validar fungicida autorizado SAG para Botrytis antes de aplicar."
    };
  }

  if (matchesBotrytisSuspect(signal, environment)) {
    return {
      id: "botrytis_suspect",
      label: "Botrytis cinerea posible",
      nutrition: "Daño foliar visible; no corresponde clasificar como condición normal",
      plan: "Marcar lote para revisión técnica, repetir captura cercana de hojas/tallos afectados, reducir humedad foliar y confirmar presencia de moho gris o micelio antes de definir fungicida."
    };
  }

  if (environment === "normal" && matchesNormalReference(signal, environment)) {
    return {
      id: "normal_reference",
      label: "Condición normal detectada",
      nutrition: "Sin deficiencia nutricional dominante; brote joven compatible con crecimiento normal",
      plan: "Mantener fertirriego y monitoreo preventivo. Registrar como imagen normal para calibrar el modelo y comparar futuras capturas del mismo lote."
    };
  }

  if (matchesNormalReference(signal, environment)) {
    return {
      id: "normal_reference",
      label: "Condición normal detectada",
      nutrition: "Sin deficiencia nutricional dominante; brote joven compatible con crecimiento normal",
      plan: "Mantener fertirriego y monitoreo preventivo. Registrar como imagen normal para calibrar el modelo y comparar futuras capturas del mismo lote."
    };
  }

  return autoRules.find((rule) => rule.condition(signal, environment)) || {
    id: "healthy",
    label: "Sin patógeno dominante detectado",
    nutrition: "Sin deficiencia nutricional dominante por imagen",
    plan: "Mantener monitoreo preventivo, registrar nueva captura en 72 horas y contrastar con análisis de sustrato si aparecen síntomas."
  };
}

function calculateRisk(signal, environment, diagnosis) {
  if (diagnosis.id === "normal_reference") {
    const fruitConfidenceDiscount = signal.darkFruitRatio > 0.015 ? 4 : 0;
    return Math.max(4, Math.min(20, 10 + Math.round(signal.foliarDamageRatio * 45) - fruitConfidenceDiscount));
  }
  if (diagnosis.id === "botrytis_reference") {
    let score = 58 + Math.round(signal.botrytisScore * 170);
    if (environment === "humid") score += 14;
    return Math.max(62, Math.min(94, score));
  }
  if (diagnosis.id === "botrytis_suspect") {
    let score = 42 + Math.round(signal.foliarDamageRatio * 180) + Math.round(signal.grayMoldRatio * 80);
    if (environment === "humid") score += 10;
    return Math.max(45, Math.min(72, score));
  }

  let score = 28;
  score += Math.round(signal.yellowRatio * 80);
  score += Math.round(signal.brownRatio * 130);
  score += Math.round(signal.grayRatio * 120);
  score += Math.round(signal.darkRatio * (signal.damageRatio > 0.1 ? 45 : 12));
  if (environment === "normal") score -= 18;
  if (environment === "humid" && diagnosis.id === "botrytis") score += 18;
  if (environment === "wet_root" && diagnosis.id === "pythium") score += 22;
  if (environment === "warm_moist" && diagnosis.id === "fusarium") score += 16;
  return Math.max(5, Math.min(96, score));
}

function buildManagementPlan(lotId, diagnosis, risk) {
  const lot = lotProfiles[lotId];
  const urgency = risk >= 75 ? "Alta" : risk >= 55 ? "Media" : "Baja";
  const fertilizer = diagnosis.id === "normal_reference" ? "Mantener programa nutricional vigente; no corregir sin análisis." :
    diagnosis.nutrition.includes("nitrógeno") ? "Fertirriego N fraccionado y control de CE." :
    diagnosis.nutrition.includes("hierro") || diagnosis.nutrition.includes("manganeso") ? "Revisar pH; posible quelato de Fe/Mn tras confirmación." :
    diagnosis.nutrition.includes("potasio") ? "Corregir K solo con respaldo de análisis; revisar sales." :
    diagnosis.nutrition.includes("fósforo") ? "Verificar disponibilidad de P y temperatura radicular." :
    "Mantener fertirriego base balanceado según fase y análisis de sustrato.";
  const sag = diagnosis.id === "normal_reference"
    ? "No corresponde aplicación de plaguicida. Registrar como control sano de referencia."
    : diagnosis.id === "botrytis_suspect"
    ? "No aplicar automáticamente. Registrar sospecha, confirmar signos de moho gris/micelio y validar catálogo SAG antes de cualquier tratamiento."
    : diagnosis.label.includes("probable") || diagnosis.label.includes("posible")
    ? "Consultar catálogo SAG vigente, etiqueta y HDS. Usar solo producto autorizado para cultivo/uso y bloquear aplicación hasta firma técnica."
    : "No generar aplicación de plaguicida sin umbral o confirmación técnica.";

  return {
    lotName: `${lot.species} ${lot.variety}`,
    phase: lot.phase,
    urgency,
    fertilizer,
    pesticide: diagnosis.plan,
    sag
  };
}

function writeAutoFieldbook(lotId, diagnosis, signal, risk, plan, environment = "") {
  const signalText = `verde ${(signal.greenRatio * 100).toFixed(0)}%, amarillo ${(signal.yellowRatio * 100).toFixed(0)}%, lesión marrón ${(signal.brownRatio * 100).toFixed(0)}%, rojizo-pardo ${(signal.redSpotRatio * 100).toFixed(0)}%, moho/micelio gris ${(signal.grayMoldRatio * 100).toFixed(0)}%`;
  const evidenceText = diagnosisEvidence(diagnosis, signal, environment).join("; ");
  fieldbook.unshift(createFieldbookEntry(
    lotId,
    new Date().toLocaleString("es-CL", { dateStyle: "short", timeStyle: "short" }),
    `Detección automática: ${diagnosis.nutrition}; resultado fitosanitario: ${diagnosis.label}; riesgo ${risk}%. Señales imagen: ${signalText}. Características: ${evidenceText}. Plan: ${plan.fertilizer} ${plan.pesticide} SAG: ${plan.sag}`,
    "PhytoAI automático"
  ));
  renderFieldbook();
}

function addAutoAlert(lotId, diagnosis, risk, plan) {
  const lot = lotProfiles[lotId];
  alerts.unshift({
    id: `ALT-${Date.now().toString().slice(-5)}`,
    module: lotId,
    species: `${lot.species} ${lot.variety}`,
    pathogen: diagnosis.label,
    confidence: `${risk}%`,
    action: plan.urgency === "Alta" ? "Aislar y validar tratamiento" : "Monitorear y validar plan",
    status: "Bloqueada"
  });
  renderAlerts();
  renderApprovalOptions();
}

function analyzeImage() {
  if (!hasCapture) {
    showToast("Primero sube una imagen o toma una foto.");
    return;
  }

  const signal = extractImageSignals();
  if (!signal) {
    showToast("No se pudo leer la imagen. Intenta con otra captura.");
    return;
  }

  const lotId = $("#captureLot").value;
  const environment = $("#captureEnvironment").value;
  const diagnosis = selectAutoDiagnosis(signal, environment);
  const risk = calculateRisk(signal, environment, diagnosis);
  const plan = buildManagementPlan(lotId, diagnosis, risk);
  const evidence = diagnosisEvidence(diagnosis, signal, environment);
  if (diagnosis.id !== "normal_reference" && diagnosis.id !== "healthy") {
    addAutoAlert(lotId, diagnosis, risk, plan);
  }
  writeAutoFieldbook(lotId, diagnosis, signal, risk, plan, environment);

  $("#recommendation").innerHTML = `
    <span class="badge">Riesgo ${risk}% · ${plan.urgency}</span>
    <div class="diagnosis-grid">
      <article class="diagnosis-card">
        <strong>Lote</strong>
        <span>${lotId} · ${plan.lotName} · ${plan.phase}</span>
      </article>
      <article class="diagnosis-card">
        <strong>Deficiencia estimada</strong>
        <span>${diagnosis.nutrition}</span>
      </article>
      <article class="diagnosis-card">
        <strong>Posible patógeno</strong>
        <span>${diagnosis.label}</span>
      </article>
      <article class="diagnosis-card">
        <strong>Programa automático</strong>
        <span>${plan.fertilizer} ${plan.pesticide}</span>
      </article>
      <article class="diagnosis-card evidence-card">
        <strong>Características detectadas</strong>
        <span>${evidence.join(" · ")}</span>
      </article>
    </div>
    <p><strong>SAG:</strong> ${plan.sag}</p>
    <p><strong>Cuaderno:</strong> registro automático creado${diagnosis.id === "normal_reference" || diagnosis.id === "healthy" ? " como control sano, sin alerta de aplicación." : " y alerta bloqueada hasta firma técnica."}</p>
  `;
  showToast(diagnosis.id === "normal_reference" ? "Imagen normal registrada en el cuaderno de campo." : "Plan automático generado y escrito en el cuaderno de campo.");
}

function runDiagnosis(event) {
  event.preventDefault();
  const rule = diagnosisRules[$("#leafSymptom").value];
  const environment = $("#environmentSignal").value;
  const severity = $("#severitySignal").value;
  const lot = $("#diagLot").value.trim() || "Lote sin identificar";
  let confidence = rule.confidence;
  let environmentNote = "Validar con monitoreo adicional.";

  if ((environment === "humid" && rule.pathogen.includes("Botrytis")) ||
      (environment === "wet_root" && rule.pathogen.includes("Pythium")) ||
      (environment === "warm_moist" && rule.pathogen.includes("Fusarium"))) {
    confidence = "Alta";
    environmentNote = "El ambiente observado refuerza la hipótesis fitopatológica.";
  }

  const urgency = severity === "high" ? "Alta: aislar lote y solicitar revisión inmediata." :
    severity === "medium" ? "Media: monitorear 24-48 h y registrar evolución." :
    "Baja: seguimiento preventivo y confirmación analítica.";

  $("#diagnosisResult").innerHTML = `
    <span class="badge">${lot} · confianza ${confidence}</span>
    <div class="diagnosis-grid">
      <article class="diagnosis-card">
        <strong>Deficiencia nutricional</strong>
        <span>${rule.nutrition}</span>
      </article>
      <article class="diagnosis-card">
        <strong>Posible patógeno</strong>
        <span>${rule.pathogen}</span>
      </article>
      <article class="diagnosis-card">
        <strong>Evidencia observada</strong>
        <span>${rule.evidence} ${environmentNote}</span>
      </article>
      <article class="diagnosis-card">
        <strong>Acción sugerida</strong>
        <span>${rule.action} Urgencia: ${urgency}</span>
      </article>
    </div>
  `;

  fieldbook.unshift(createFieldbookEntry(
    lot,
    new Date().toLocaleString("es-CL", { dateStyle: "short", timeStyle: "short" }),
    `${rule.nutrition}; posible patógeno: ${rule.pathogen}. Acción: ${rule.action}`,
    "Diagnóstico asistido"
  ));
  renderFieldbook();
  showToast("Diagnóstico generado y agregado al cuaderno de campo.");
}

window.runPhytoDiagnosis = runDiagnosis;

function exportCsv() {
  const filter = $("#fieldbookFilter")?.value || "all";
  const rowsToExport = filter === "all" ? fieldbook : fieldbook.filter((row) => row.lot === filter);
  const rows = [
    ["Fecha", "Lote", "Ubicación", "Especie", "Variedad", "Fase", "Detalle", "Responsable"],
    ...rowsToExport.map((row) => [row.date, row.lot, row.location, row.species, row.variety, row.phase, row.detail, row.owner])
  ];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filter === "all" ? "cuadernos-campo-phytoai.csv" : `cuaderno-${filter}-phytoai.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("CSV del cuaderno de campo generado.");
}

$$(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

$("#speciesFilter").addEventListener("change", (event) => renderModules(event.target.value));
$("#fieldbookFilter").addEventListener("change", (event) => renderFieldbook(event.target.value));
$("#toggleDensity").addEventListener("click", () => document.body.classList.toggle("compact"));
$("#themeToggle")?.addEventListener("click", () => document.body.classList.toggle("dark"));
$("#newAlertBtn").addEventListener("click", () => setView("capture"));
$("#analyzeBtn").addEventListener("click", analyzeImage);
$("#exportBtn").addEventListener("click", exportCsv);
$("#diagnosisForm").addEventListener("submit", runDiagnosis);
$("#movementForm").addEventListener("submit", registerPlantMovement);
$("#movementSpecies").addEventListener("change", updateMovementVarieties);
$("#movementFromGreenhouse").addEventListener("change", updateMovementBenches);
$("#movementToGreenhouse").addEventListener("change", updateMovementBenches);
$("#uploadBtn").addEventListener("click", () => $("#imageInput").click());
$("#imageInput").addEventListener("change", (event) => loadImageFile(event.target.files?.[0]));
$("#cameraBtn").addEventListener("click", startCamera);
$("#snapBtn").addEventListener("click", takePhoto);

$$(".field-btn").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".field-btn").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
  });
});

$("#approvalForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const pin = $("#pinInput").value;
  if (pin.length !== 4) {
    showToast("Ingresa un PIN técnico de 4 dígitos para firmar.");
    return;
  }
  showToast("Firma registrada. La acción queda registrada en el cuaderno de campo.");
});

$("#rejectBtn").addEventListener("click", () => {
  showToast("Alerta rechazada. Se solicitará nueva captura o inspección visual.");
});

populateCatalogControls();
syncInventorySagAlerts("Barbara.xlsx");
renderModules();
renderAlerts();
renderApprovalOptions();
renderFieldbook();
renderProgram();
renderImageReferences();
renderSaasModules();


