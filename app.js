const modules = [
  { id: "M4-L12", species: "Arándano", variety: "Legacy", pathogen: "Botrytis", risk: 84, status: "Pendiente firma" },
  { id: "M2-L07", species: "Avellano", variety: "Barcelona", pathogen: "Fusarium", risk: 62, status: "Monitorear" },
  { id: "M1-L03", species: "Cerezo", variety: "Regina", pathogen: "Pythium", risk: 38, status: "Preventivo" },
  { id: "M5-L18", species: "Arándano", variety: "Duke", pathogen: "Botrytis", risk: 71, status: "Pendiente firma" }
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
  "M4-L12": { location: "Invernadero 4 · Nave A", species: "Arándano", variety: "Legacy", phase: "Crecimiento activo", module: "M4" },
  "M5-L18": { location: "Invernadero 5 · Nave B", species: "Arándano", variety: "Duke", phase: "Crecimiento activo", module: "M5" },
  "M2-L07": { location: "Invernadero 2 · Mesón 7", species: "Avellano", variety: "Barcelona", phase: "Aclimatación", module: "M2" },
  "M1-L03": { location: "Invernadero 1 · Mesón 3", species: "Cerezo", variety: "Regina", phase: "Endurecimiento", module: "M1" }
};

const fieldbook = [
  createFieldbookEntry("M4-L12", "18/06/2026 09:10", "CNN detecta patrón compatible con Botrytis. Riesgo alto por humedad relativa elevada.", "IA asistida"),
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
    plan: "Aislar bandeja, retirar tejido con moho/lesiones, mejorar ventilación y reducir mojamiento foliar. Evaluar fungicida autorizado SAG serie 2000 para el cultivo y rotar modo de acción."
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

  $("#moduleList").innerHTML = rows;
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
  return {
    date,
    lot: normalizedLot,
    location: profile.location,
    species: profile.species,
    variety: profile.variety,
    phase: profile.phase,
    detail,
    owner
  };
}

function fieldbookKey(row) {
  return `${row.lot}__${row.location}__${row.species}__${row.variety}`;
}

function renderFieldbook(filter = $("#fieldbookFilter")?.value || "all") {
  const visibleRows = filter === "all" ? fieldbook : fieldbook.filter((row) => row.lot === filter);
  const groups = visibleRows.reduce((acc, row) => {
    const key = fieldbookKey(row);
    if (!acc[key]) {
      acc[key] = {
        lot: row.lot,
        location: row.location,
        species: row.species,
        variety: row.variety,
        phase: row.phase,
        rows: []
      };
    }
    acc[key].rows.push(row);
    return acc;
  }, {});

  $("#fieldbookSummary").innerHTML = `
    <span class="badge">${Object.keys(groups).length} cuadernos</span>
    <span class="badge">${visibleRows.length} registros</span>
  `;

  $("#fieldbookRows").innerHTML = Object.values(groups).map((group) => `
    <section class="fieldbook-group">
      <header class="fieldbook-group-header">
        <div>
          <strong>${group.lot} · ${group.location}</strong>
          <span>${group.species} · ${group.variety} · ${group.phase}</span>
        </div>
        <span class="badge">${group.rows.length} registros</span>
      </header>
      <div class="fieldbook-group-rows">
        ${group.rows.map((row) => `
          <article class="field-entry">
            <small>${row.date}</small>
            <div>
              <strong>${row.owner}</strong>
              <span>${row.detail}</span>
            </div>
            <span class="badge">${row.species} ${row.variety}</span>
          </article>
        `).join("")}
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
  let edgeStress = 0;
  let total = 0;

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

    if (g > r * 1.08 && g > b * 1.08 && brightness > 45) green += 1;
    if (r > 115 && g > 105 && b < 115 && Math.abs(r - g) < 85) yellow += 1;
    if (isBrown) brown += 1;
    if (saturation < 0.18 && brightness > 70 && brightness < 205) gray += 1;
    if (isDark) dark += 1;
    if (r > 85 && b > 70 && g < 90 && Math.abs(r - b) < 80) purple += 1;
    if (isEdge && (isBrown || isDark)) edgeStress += 1;
    total += 1;
  }

  return {
    greenRatio: green / total,
    yellowRatio: yellow / total,
    brownRatio: brown / total,
    grayRatio: gray / total,
    darkRatio: dark / total,
    purpleRatio: purple / total,
    edgeStress: edgeStress / total
  };
}

function selectAutoDiagnosis(signal, environment) {
  return autoRules.find((rule) => rule.condition(signal, environment)) || {
    id: "healthy",
    label: "Sin patógeno dominante detectado",
    nutrition: "Sin deficiencia nutricional dominante por imagen",
    plan: "Mantener monitoreo preventivo, registrar nueva captura en 72 horas y contrastar con análisis de sustrato si aparecen síntomas."
  };
}

function calculateRisk(signal, environment, diagnosis) {
  let score = 28;
  score += Math.round(signal.yellowRatio * 80);
  score += Math.round(signal.brownRatio * 130);
  score += Math.round(signal.grayRatio * 120);
  score += Math.round(signal.darkRatio * 45);
  if (environment === "humid" && diagnosis.id === "botrytis") score += 18;
  if (environment === "wet_root" && diagnosis.id === "pythium") score += 22;
  if (environment === "warm_moist" && diagnosis.id === "fusarium") score += 16;
  return Math.max(5, Math.min(96, score));
}

function buildManagementPlan(lotId, diagnosis, risk) {
  const lot = lotProfiles[lotId];
  const urgency = risk >= 75 ? "Alta" : risk >= 55 ? "Media" : "Baja";
  const fertilizer = diagnosis.nutrition.includes("nitrógeno") ? "Fertirriego N fraccionado y control de CE." :
    diagnosis.nutrition.includes("hierro") || diagnosis.nutrition.includes("manganeso") ? "Revisar pH; posible quelato de Fe/Mn tras confirmación." :
    diagnosis.nutrition.includes("potasio") ? "Corregir K solo con respaldo de análisis; revisar sales." :
    diagnosis.nutrition.includes("fósforo") ? "Verificar disponibilidad de P y temperatura radicular." :
    "Mantener fertirriego base balanceado según fase y análisis de sustrato.";
  const sag = diagnosis.label.includes("probable") || diagnosis.label.includes("posible")
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

function writeAutoFieldbook(lotId, diagnosis, signal, risk, plan) {
  const signalText = `verde ${(signal.greenRatio * 100).toFixed(0)}%, amarillo ${(signal.yellowRatio * 100).toFixed(0)}%, pardo ${(signal.brownRatio * 100).toFixed(0)}%, gris ${(signal.grayRatio * 100).toFixed(0)}%`;
  fieldbook.unshift(createFieldbookEntry(
    lotId,
    new Date().toLocaleString("es-CL", { dateStyle: "short", timeStyle: "short" }),
    `Detección automática: ${diagnosis.nutrition}; posible patógeno: ${diagnosis.label}; riesgo ${risk}%. Señales imagen: ${signalText}. Plan: ${plan.fertilizer} ${plan.pesticide} SAG: ${plan.sag}`,
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
  addAutoAlert(lotId, diagnosis, risk, plan);
  writeAutoFieldbook(lotId, diagnosis, signal, risk, plan);

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
    </div>
    <p><strong>SAG:</strong> ${plan.sag}</p>
    <p><strong>Cuaderno:</strong> registro automático creado y alerta bloqueada hasta firma técnica.</p>
  `;
  showToast("Plan automático generado y escrito en el cuaderno de campo.");
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
$("#newAlertBtn").addEventListener("click", () => setView("capture"));
$("#analyzeBtn").addEventListener("click", analyzeImage);
$("#exportBtn").addEventListener("click", exportCsv);
$("#diagnosisForm").addEventListener("submit", runDiagnosis);
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
  showToast("Firma registrada. La acción queda trazada en el cuaderno de campo.");
});

$("#rejectBtn").addEventListener("click", () => {
  showToast("Alerta rechazada. Se solicitará nueva captura o inspección visual.");
});

renderModules();
renderAlerts();
renderApprovalOptions();
renderFieldbook();
renderProgram();
