/* ==========================================================================
   M.A.J Logistics S.A — comportamiento del sitio
   1. Idioma ES/EN   2. Preguntas frecuentes   3. Menú móvil   4. Formulario
   Los textos provienen literalmente del prototipo de diseño.
   ========================================================================== */
(function () {
  "use strict";

  var WHATSAPP_CONTACTO = "50688450437"; // +506 8845-0437 — único número de contacto del sitio

  /* ------------------------------------------------------------ diccionarios */
  var SERVICES_ES = [
    ["Desalmacenaje y gestión aduanal", "Presentamos la declaración, coordinamos inspecciones y liberamos su mercancía en el menor tiempo posible."],
    ["Asesoría en clasificación arancelaria", "Determinamos la partida correcta para evitar multas, reclasificaciones y pagos de más."],
    ["Importación marítima", "Contenedores completos y carga consolidada."],
    ["Importación aérea", "Trámite acelerado para carga urgente que llega por el aeropuerto Juan Santamaría."],
    ["Tránsito aduanero", "Movimiento de mercancía entre aduanas y depósitos bajo control aduanero."],
    ["Transporte terrestre y cabotaje", "Traslado del contenedor desde el puerto hasta su bodega, con seguimiento de la unidad."],
    ["Almacén fiscal", "Resguardo de mercancía en depósito autorizado mientras se completa el trámite."],
    ["Trámites ante ministerios", "Notas técnicas y permisos de Salud, MAG, Senasa y demás entes reguladores."]
  ];

  var SERVICES_EN = [
    ["Customs clearance", "We file the declaration, coordinate inspections and release your cargo in the shortest time possible."],
    ["Tariff classification advice", "We determine the correct HS heading to avoid fines, reclassification and overpayment."],
    ["Ocean import", "Full containers and consolidated cargo."],
    ["Air import", "Expedited handling for urgent cargo arriving at Juan Santamaría airport."],
    ["Customs transit", "Movement of goods between customs offices and bonded warehouses."],
    ["Inland transport & cabotage", "Container haulage from the port to your warehouse, with unit tracking."],
    ["Bonded warehouse", "Storage in an authorized facility while clearance is completed."],
    ["Ministry permits", "Technical notes and permits from Health, MAG, Senasa and other regulators."]
  ];

  var STEPS_ES = [
    ["Entendemos su operación", "Revisamos el tipo de carga, origen, destino y los documentos disponibles."],
    ["Trazamos la ruta correcta", "Definimos los próximos pasos con precisión y anticipamos puntos críticos."],
    ["Declaración y liberación", "Transmitimos la declaración aduanera (DUA) ante el Servicio Nacional de Aduanas, coordinamos la inspección si aplica y retiramos la carga."],
    ["Entrega en bodega", "Coordinamos el transporte y confirmamos la entrega."],
    ["Acompañamos hasta el cierre", "Mantenemos la comunicación activa para que el proceso avance con confianza."]
  ];

  var STEPS_EN = [
    ["We understand your operation", "We review cargo type, origin, destination and the documents available."],
    ["We map the right route", "We define next steps precisely and anticipate critical points."],
    ["Declaration and release", "We file the customs declaration (DUA) with the National Customs Service, coordinate inspection when required and pick up the cargo."],
    ["Warehouse delivery", "We arrange haulage and confirm delivery."],
    ["We stay until closing", "Communication stays active so the process moves with confidence."]
  ];

  var FAQ_ES = [
    ["¿Cuánto tarda un desalmacenaje en Limón?", "Con documentación completa y sin inspección, entre 24 y 72 horas después del arribo. Si hay revisión física o permisos de otro ministerio, el plazo depende de la cita que asigne la aduana."],
    ["¿Qué documentos necesito enviar?", "Factura comercial, conocimiento de embarque (BL o guía aérea), lista de empaque y, según el producto, certificados de origen o permisos sanitarios."],
    ["¿Trabajan con importadores nuevos?", "Sí. Si es su primera importación le indicamos paso a paso los registros que necesita y qué esperar en cada etapa."],
    ["¿Cómo se cobran los servicios?", "Se cotiza por operación según el tipo de carga y el trámite requerido. Los impuestos y gastos portuarios se facturan aparte, con su respectivo comprobante."],
    ["¿Atienden clientes fuera de Costa Rica?", "Sí, coordinamos con proveedores y agentes en el exterior, y podemos atender la comunicación en inglés."]
  ];

  var FAQ_EN = [
    ["How long does clearance in Limón take?", "With complete documentation and no inspection, 24 to 72 hours after arrival. With a physical inspection or another ministry's permit, the timeline depends on the appointment customs assigns."],
    ["Which documents do I need to send?", "Commercial invoice, bill of lading (or air waybill), packing list and, depending on the product, certificates of origin or sanitary permits."],
    ["Do you work with first-time importers?", "Yes. If this is your first import we walk you through the registrations you need and what to expect at each stage."],
    ["How are your services charged?", "Quoted per operation based on cargo type and the procedure required. Duties and port charges are billed separately with their receipts."],
    ["Do you serve clients outside Costa Rica?", "Yes, we coordinate with overseas suppliers and agents, and can handle communication in English."]
  ];

  var ES = {
    docTitle: "M.A.J Logistics S.A · Asesores aduaneros en Limón, Costa Rica",
    docDesc: "Asesoría aduanera en Limón, Costa Rica. Desalmacenaje, clasificación arancelaria, importación marítima y aérea, tránsito aduanero y transporte terrestre. 12 años de experiencia.",
    navAbout: "Sobre M.A.J", navServices: "Servicios", navProcess: "Cómo trabajamos", navContact: "Contacto",
    navMenu: "Abrir menú",
    labelAbout: "SOBRE M.A.J", labelServices: "LO QUE HACEMOS", labelProcess: "CÓMO TRABAJAMOS", labelContact: "CONTACTO",
    heroA: "Cada embarque merece ", heroB: "una ruta clara.",
    heroSub: "Asesoría aduanera para mover sus mercancías con precisión, respaldo local y una comunicación que no se pierde en el camino.",
    ctaPrimary: "Conversemos", ctaSecondary: "Ver servicios",
    stat1: "años de experiencia", stat2: "operación local en Limón", stat3: "servicios aduanales",
    aboutTitleA: "La logística no debería sentirse como una caja negra. ", aboutTitleB: "Hacemos visible el camino.",
    aboutP1: "Desde Limón acompañamos a empresas que necesitan importar, exportar y tomar decisiones con información clara. Nuestro trabajo combina criterio aduanero, orden documental y atención cercana.",
    aboutP2: "Doce años operando en el puerto por donde entra la mayoría de la carga del país. Revisamos la documentación antes de que el barco llegue, para que su mercancía no acumule días de almacenaje.",
    baseLabel: "UBICACIÓN", agentLabel: "ASESOR ADUANAL", billingLabel: "CORREO ELECTRÓNICO",
    servicesTitleA: "Precisión en cada ", servicesTitleB: "punto de control.",
    servicesSub: "Un servicio pensado para que cada paso esté documentado, entendido y en movimiento. Atendemos importadores establecidos, pymes que traen su primer contenedor y clientes internacionales.",
    processTitleA: "Una buena ruta empieza ", processTitleB: "escuchando.",
    processSub: "Convertimos la complejidad aduanera en una secuencia sencilla de entender. Usted sabe qué sigue, qué necesitamos y dónde estamos.",
    faqTitle: "PREGUNTAS FRECUENTES",
    contactTitleA: "¿Listos para ", contactTitleB: "moverse?",
    contactSub: "Cuéntenos qué necesita importar o exportar. Le responderemos con una ruta clara para comenzar.",
    formTitle: "Solicitar asesoría",
    fName: "NOMBRE", fCompany: "EMPRESA", fEmail: "CORREO", fPhone: "TELÉFONO",
    fService: "SERVICIO DE INTERÉS", fMessage: "DETALLE DEL EMBARQUE",
    formNote: "Al enviar se abre WhatsApp con su mensaje listo para nuestro asesor aduanal. También puede escribirnos a majlogisticsfacturas@gmail.com.",
    formError: "Indique su nombre, un medio de contacto (correo o teléfono) y el detalle del embarque.",
    submit: "Enviar", submitted: "Abriendo WhatsApp ✓",
    waIntro: "Hola M.A.J Logistics, escribo desde la página web.",
    waName: "Nombre", waCompany: "Empresa", waService: "Servicio",
    waEmail: "Correo", waPhone: "Teléfono", waDetail: "Detalle",
    ccSearch: "Buscar país…", ccLabel: "País",
    xBl: "N.º DE BL O CONTENEDOR (OPCIONAL)", xPort: "PUERTO DE ORIGEN (OPCIONAL)",
    xAwb: "N.º DE GUÍA AÉREA (OPCIONAL)", xAirport: "AEROPUERTO DE ORIGEN (OPCIONAL)",
    xProduct: "DESCRIPCIÓN DEL PRODUCTO (OPCIONAL)",
    waBl: "BL / contenedor", waPort: "Puerto de origen", waAwb: "Guía aérea",
    waAirport: "Aeropuerto de origen", waProduct: "Producto",
    callLabel: "Llamar", saveLabel: "Guardar contacto", fabLabel: "Escribir por WhatsApp",
    vEmail: "Revise el correo: parece incompleto.", vEmailDid: "¿Quiso decir",
    vPhone: "El número parece incompleto para este país."
  };

  var EN = {
    docTitle: "M.A.J Logistics S.A · Customs advisors in Limón, Costa Rica",
    docDesc: "Customs advisory in Limón, Costa Rica. Clearance, tariff classification, ocean and air import, customs transit and inland transport. 12 years of experience.",
    navAbout: "About M.A.J", navServices: "Services", navProcess: "How we work", navContact: "Contact",
    navMenu: "Open menu",
    labelAbout: "ABOUT M.A.J", labelServices: "WHAT WE DO", labelProcess: "HOW WE WORK", labelContact: "CONTACT",
    heroA: "Every shipment deserves ", heroB: "a clear route.",
    heroSub: "Customs advisory to move your goods with precision, local backing and communication that does not get lost along the way.",
    ctaPrimary: "Let's talk", ctaSecondary: "See services",
    stat1: "years of experience", stat2: "local operation in Limón", stat3: "customs services",
    aboutTitleA: "Logistics should not feel like a black box. ", aboutTitleB: "We make the route visible.",
    aboutP1: "From Limón we support companies that need to import, export and make decisions with clear information. Our work combines customs judgment, documentary order and close attention.",
    aboutP2: "Twelve years working at the port where most of the country's cargo arrives. We review documentation before the vessel lands, so your goods do not pile up storage days.",
    baseLabel: "LOCATION", agentLabel: "CUSTOMS ADVISOR", billingLabel: "EMAIL",
    servicesTitleA: "Precision at every ", servicesTitleB: "control point.",
    servicesSub: "A service built so every step is documented, understood and moving. We serve established importers, SMEs bringing in their first container and international clients.",
    processTitleA: "A good route starts ", processTitleB: "with listening.",
    processSub: "We turn customs complexity into a sequence that is simple to follow. You know what comes next, what we need and where things stand.",
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    contactTitleA: "Ready to ", contactTitleB: "move?",
    contactSub: "Tell us what you need to import or export. We will reply with a clear route to get started.",
    formTitle: "Request advice",
    fName: "NAME", fCompany: "COMPANY", fEmail: "EMAIL", fPhone: "PHONE",
    fService: "SERVICE NEEDED", fMessage: "SHIPMENT DETAILS",
    formNote: "Sending opens WhatsApp with your message ready for our customs advisor. You can also write to majlogisticsfacturas@gmail.com.",
    formError: "Please add your name, a way to reach you (email or phone) and the shipment details.",
    submit: "Send", submitted: "Opening WhatsApp ✓",
    waIntro: "Hello M.A.J Logistics, I am writing from your website.",
    waName: "Name", waCompany: "Company", waService: "Service",
    waEmail: "Email", waPhone: "Phone", waDetail: "Details",
    ccSearch: "Search country…", ccLabel: "Country",
    xBl: "BL OR CONTAINER NO. (OPTIONAL)", xPort: "PORT OF ORIGIN (OPTIONAL)",
    xAwb: "AIR WAYBILL NO. (OPTIONAL)", xAirport: "AIRPORT OF ORIGIN (OPTIONAL)",
    xProduct: "PRODUCT DESCRIPTION (OPTIONAL)",
    waBl: "BL / container", waPort: "Port of origin", waAwb: "Air waybill",
    waAirport: "Airport of origin", waProduct: "Product",
    callLabel: "Call", saveLabel: "Save contact", fabLabel: "Message us on WhatsApp",
    vEmail: "Please check the email: it looks incomplete.", vEmailDid: "Did you mean",
    vPhone: "This number looks incomplete for this country."
  };

  function expand(dict, services, steps, faqs) {
    services.forEach(function (s, i) {
      dict["svcTitle" + i] = s[0];
      dict["svcBody" + i] = s[1];
    });
    steps.forEach(function (s, i) {
      dict["stepTitle" + i] = s[0];
      dict["stepBody" + i] = s[1];
    });
    faqs.forEach(function (f, i) {
      dict["faqQ" + i] = f[0];
      dict["faqA" + i] = f[1];
    });
    return dict;
  }

  var DICT = {
    es: expand(ES, SERVICES_ES, STEPS_ES, FAQ_ES),
    en: expand(EN, SERVICES_EN, STEPS_EN, FAQ_EN)
  };

  var lang = "es";

  /* --------------------------------------------------------------- teléfonos */
  // Código ISO -> prefijo telefónico. El nombre sale de Intl.DisplayNames (cambia solo
  // entre español e inglés) y la bandera se arma con el código ISO. Los países que
  // comparten el +1 (EE. UU., Canadá, Caribe) se escriben igual: (###) ###-####.
  var DIAL = {};
  ("AD376 AE971 AF93 AG1 AI1 AL355 AM374 AO244 AR54 AS1 AT43 AU61 AW297 AX358 AZ994 BA387 BB1 " +
   "BD880 BE32 BF226 BG359 BH973 BI257 BJ229 BL590 BM1 BN673 BO591 BQ599 BR55 BS1 BT975 BW267 " +
   "BY375 BZ501 CA1 CC61 CD243 CF236 CG242 CH41 CI225 CK682 CL56 CM237 CN86 CO57 CR506 CU53 " +
   "CV238 CW599 CX61 CY357 CZ420 DE49 DJ253 DK45 DM1 DO1 DZ213 EC593 EE372 EG20 ER291 ES34 " +
   "ET251 FI358 FJ679 FK500 FM691 FO298 FR33 GA241 GB44 GD1 GE995 GF594 GG44 GH233 GI350 GL299 " +
   "GM220 GN224 GP590 GQ240 GR30 GT502 GU1 GW245 GY592 HK852 HN504 HR385 HT509 HU36 ID62 IE353 " +
   "IL972 IM44 IN91 IQ964 IR98 IS354 IT39 JE44 JM1 JO962 JP81 KE254 KG996 KH855 KI686 KM269 KN1 " +
   "KP850 KR82 KW965 KY1 KZ7 LA856 LB961 LC1 LI423 LK94 LR231 LS266 LT370 LU352 LV371 LY218 " +
   "MA212 MC377 MD373 ME382 MF590 MG261 MH692 MK389 ML223 MM95 MN976 MO853 MP1 MQ596 MR222 MS1 " +
   "MT356 MU230 MV960 MW265 MX52 MY60 MZ258 NA264 NC687 NE227 NF672 NG234 NI505 NL31 NO47 NP977 " +
   "NR674 NU683 NZ64 OM968 PA507 PE51 PF689 PG675 PH63 PK92 PL48 PM508 PR1 PS970 PT351 PW680 " +
   "PY595 QA974 RE262 RO40 RS381 RU7 RW250 SA966 SB677 SC248 SD249 SE46 SG65 SH290 SI386 SK421 " +
   "SL232 SM378 SN221 SO252 SR597 SS211 ST239 SV503 SX1 SY963 SZ268 TC1 TD235 TG228 TH66 TJ992 " +
   "TK690 TL670 TM993 TN216 TO676 TR90 TT1 TV688 TW886 TZ255 UA380 UG256 US1 UY598 UZ998 VA39 " +
   "VC1 VE58 VG1 VI1 VN84 VU678 WF681 WS685 XK383 YE967 YT262 ZA27 ZM260 ZW263").split(" ").forEach(function (x) {
    DIAL[x.slice(0, 2)] = x.slice(2);
  });

  // Formato de escritura por país (# = dígito), generado del número móvil de ejemplo de cada
  // país. Es una máscara fija: acomoda cualquier número que se escriba, sea válido o no.
  var MASK = {};
  var MASK_SRC = {
    "#####": "AC FK SH",
    "### ###": "AD",
    "## ### ####": "AE AF AL CG EC ET GH HR HU IE IL LK LR MY MZ NA NZ SA SD TH TJ UA ZA ZW",
    "(###) ###-####": "AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT US VC VG VI",
    "## ######": "AM CY SL TM",
    "### ### ###": "AO AU CC CD CX CZ GQ GW ID KG LI LU PE PL PS PT RO RW SK SS SY TW TZ VN YE",
    "# ## #### ####": "AR",
    "### ######": "AT KE PY UG",
    "### ####": "AW BN BQ BZ FJ FM GM GY IO IS MH MV NR NU PW SR ST TO VU",
    "## #######": "AX FI LY RS ZM",
    "## ### ## ##": "AZ BY CH SE SN UZ",
    "## ### ###": "BA BG BW KH LB LV ME MK SI TN UY XK",
    "#### ######": "BD GB GG IM JE",
    "### ## ## ##": "BE BL DZ ES GE GF GN GP MF MQ MW RE YT",
    "## ## ## ##": "BF BI BT CF DJ DK GA ML MR NE NO PF SJ SM TD TG",
    "#### ####": "BH BO EE GI HK KI LS MN MO MT MU OM PG QA SG SZ TL",
    "## ## ## ## ##": "BJ",
    "## ##### ####": "BR",
    "## ## ## ####": "CI",
    "## ###": "CK",
    "# #### ####": "CL JO",
    "# ## ## ## ##": "CM EH FR MA MC",
    "### #### ####": "CN",
    "### #######": "CO NP PK VE",
    "####-####": "CR GT HN NI PA SV",
    "# #######": "CU SO",
    "### ## ##": "CV KM",
    "# ### ####": "CW MM",
    "#### #######": "DE",
    "## ########": "EG",
    "# ### ###": "ER SC",
    "## ## ##": "FO GL NC PM WF",
    "### ### ####": "GR IQ IR IT KP KZ MX NG PH VA",
    "## ## ####": "HT",
    "##### #####": "IN",
    "## #### ####": "JP KR",
    "### #####": "KW LT",
    "## ## ### ###": "LA",
    "### ## ###": "MD",
    "## ## ### ##": "MG",
    "# #####": "NF",
    "# ########": "NL",
    "### ### ## ##": "RU TR",
    "## #####": "SB WS",
    "####": "TA TK",
    "## ####": "TV"
  };
  Object.keys(MASK_SRC).forEach(function (mask) {
    MASK_SRC[mask].split(" ").forEach(function (iso) { MASK[iso] = mask; });
  });

  function flagOf(iso) {
    return String.fromCodePoint.apply(null, iso.split("").map(function (c) {
      return 127397 + c.charCodeAt(0);
    }));
  }
  function plain(str) {   // minúsculas y sin tildes, para buscar "peru" y hallar "Perú"
    return str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }
  // Aplica la máscara; el separador solo aparece cuando viene otro dígito detrás,
  // así el botón de borrar no se atasca en un guion.
  function formatPhone(iso, raw) {
    var digits = raw.replace(/\D/g, "").replace(/^0+/, "");
    var mask = MASK[iso];
    if (!mask) return digits;
    var out = "", d = 0;
    for (var i = 0; i < mask.length && d < digits.length; i++) {
      if (mask.charAt(i) === "#") out += digits.charAt(d++);
      else out += mask.charAt(i);
    }
    return d < digits.length ? out + " " + digits.slice(d) : out;
  }
  // true = válido, false = incompleto o imposible, null = no se puede saber (sin librería)
  function phoneIsValid(iso, text) {
    if (!window.libphonenumber) return null;
    try {
      var n = libphonenumber.parsePhoneNumberFromString(text, iso);
      return !!(n && n.isValid());
    } catch (e) { return null; }
  }

  // "+34 612..." -> "ES". Para +1 (varios países) se deja el que ya estaba elegido.
  function countryFromInternational(v) {
    if (!window.libphonenumber) return null;
    try {
      var n = libphonenumber.parsePhoneNumberFromString(v);
      if (n && n.country && DIAL[n.country]) return n.country;
      var digits = v.replace(/\D/g, "");
      if (digits.charAt(0) === "1") return DIAL[country.iso] === "1" ? country.iso : "US";
    } catch (e) { /* sin reconocer */ }
    return null;
  }
  var country = { iso: "CR", list: [], active: 0 };
  var ccEl = {
    wrap: document.getElementById("phone-country"),
    btn: document.getElementById("cc-btn"),
    panel: document.getElementById("cc-panel"),
    search: document.getElementById("cc-search"),
    listEl: document.getElementById("cc-list"),
    hidden: document.getElementById("cc-value"),
    phone: document.getElementById("phone-input")
  };

  function buildCountries() {
    var names = null;
    try { names = new Intl.DisplayNames([lang], { type: "region" }); } catch (e) { /* navegador viejo */ }
    country.list = Object.keys(DIAL).map(function (iso) {
      var name = names ? names.of(iso) : iso;
      return { iso: iso, name: name, key: plain(name) };
    }).sort(function (a, b) { return a.name.localeCompare(b.name, lang); });
  }

  function renderCountries() {
    if (!ccEl.wrap) return;
    var q = plain(ccEl.search.value.trim().replace(/^\+/, ""));
    var shown = country.list.filter(function (c) {
      return !q || c.key.indexOf(q) !== -1 || DIAL[c.iso].indexOf(q) === 0 || c.iso.toLowerCase() === q;
    });
    if (q) shown.sort(function (a, b) {          // primero los que empiezan con lo escrito
      return (b.key.indexOf(q) === 0) - (a.key.indexOf(q) === 0);
    });
    else shown.sort(function (a, b) { return (b.iso === "CR") - (a.iso === "CR"); });   // Costa Rica primero
    country.shown = shown;
    country.active = 0;
    ccEl.listEl.innerHTML = "";
    ccEl.listEl.scrollTop = 0;
    shown.forEach(function (c, i) {
      var li = document.createElement("li");
      li.setAttribute("role", "option");
      li.id = "cc-opt-" + c.iso;
      li.dataset.iso = c.iso;
      li.textContent = flagOf(c.iso) + "  " + c.name + "  +" + DIAL[c.iso];
      if (c.iso === country.iso) li.setAttribute("aria-selected", "true");
      if (i === 0) li.classList.add("is-active");
      ccEl.listEl.appendChild(li);
    });
  }

  function paintButton() {
    ccEl.btn.querySelector(".cc-flag").textContent = flagOf(country.iso);
    ccEl.btn.querySelector(".cc-code").textContent = "+" + DIAL[country.iso];
    ccEl.hidden.value = country.iso;
    var m = MASK[country.iso];
    ccEl.phone.placeholder = m ? m.replace(/#/g, "8") : "";
  }

  function pickCountry(iso) {
    country.iso = iso;
    paintButton();
    ccEl.phone.value = formatPhone(iso, ccEl.phone.value);
    closeCountries();
    ccEl.phone.focus();
  }
  function openCountries() {
    ccEl.panel.hidden = false;
    ccEl.btn.setAttribute("aria-expanded", "true");
    ccEl.search.value = "";
    renderCountries();
    var sel = ccEl.listEl.querySelector('[aria-selected="true"]');
    if (sel) sel.scrollIntoView({ block: "nearest" });
    ccEl.search.focus();
  }
  function closeCountries() {
    ccEl.panel.hidden = true;
    ccEl.btn.setAttribute("aria-expanded", "false");
  }
  function moveActive(step) {
    var items = ccEl.listEl.children;
    if (!items.length) return;
    items[country.active].classList.remove("is-active");
    country.active = (country.active + step + items.length) % items.length;
    items[country.active].classList.add("is-active");
    items[country.active].scrollIntoView({ block: "nearest" });
  }

  if (ccEl.wrap) {
    buildCountries();
    paintButton();
    ccEl.btn.addEventListener("click", function () {
      if (ccEl.panel.hidden) openCountries(); else closeCountries();
    });
    ccEl.search.addEventListener("input", renderCountries);
    ccEl.search.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); moveActive(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); moveActive(-1); }
      else if (e.key === "Enter") {
        e.preventDefault();
        var c = country.shown[country.active];
        if (c) pickCountry(c.iso);
      } else if (e.key === "Escape") { closeCountries(); ccEl.btn.focus(); }
    });
    ccEl.listEl.addEventListener("click", function (e) {
      var li = e.target.closest("li");
      if (li) pickCountry(li.dataset.iso);
    });
    document.addEventListener("click", function (e) {
      if (!ccEl.panel.hidden && !ccEl.wrap.contains(e.target)) closeCountries();
    });
    ccEl.phone.addEventListener("input", function () {
      var el = ccEl.phone, v = el.value;
      if (v.charAt(0) === "+") {                              // pegó el número con su código de país
        var iso = countryFromInternational(v);
        if (!iso) return;
        country.iso = iso; paintButton();
        var n = libphonenumber.parsePhoneNumberFromString(v);
        v = n ? n.nationalNumber : v.replace(/\D/g, "").slice(DIAL[iso].length);
      }
      // Se cuenta cuántos dígitos quedan a la izquierda del cursor para devolverlo ahí.
      var caret = el.selectionStart, before = v.slice(0, caret).replace(/\D/g, "").length;
      if (before === 0 && caret > 0) before = 0;
      var f = formatPhone(country.iso, v);
      el.value = f;
      var pos = 0, seen = 0;
      while (pos < f.length && seen < before) { if (/\d/.test(f.charAt(pos))) seen++; pos++; }
      if (before >= f.replace(/\D/g, "").length) pos = f.length;
      try { el.setSelectionRange(pos, pos); } catch (e) { /* sin selección */ }
    });
  }
  function fillCountries() {   // al cambiar de idioma
    if (!ccEl.wrap) return;
    buildCountries();
    if (!ccEl.panel.hidden) renderCountries();
  }

  /* ----------------------------------------------------------------- idioma */
  function applyLang(next) {
    var t = DICT[next];
    if (!t) return;
    lang = next;

    document.documentElement.lang = next;
    document.title = t.docTitle;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.docDesc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t[el.getAttribute("data-i18n")];
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var parts = pair.split(":");
        var value = t[parts[1]];
        if (typeof value === "string") el.setAttribute(parts[0], value);
      });
    });

    fillCountries();
    if (ccEl.wrap) { ccEl.search.placeholder = t.ccSearch; ccEl.btn.setAttribute("aria-label", t.ccLabel); }

    document.querySelectorAll(".pill").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === next;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    // El botón de envío puede estar mostrando su estado de confirmación.
    var submit = document.querySelector(".form-submit");
    if (submit && submit.dataset.sent === "1") submit.textContent = t.submitted;

    try { localStorage.setItem("maj-lang", next); } catch (e) { /* modo privado */ }

    // Al abrir el archivo desde el disco (file://) algunos navegadores no permiten
    // reescribir la dirección; el idioma ya quedó aplicado igual.
    try {
      var url = new URL(window.location.href);
      if (next === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (e) { /* sin reescribir la dirección */ }
  }

  document.querySelectorAll(".pill").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  var initial = new URLSearchParams(window.location.search).get("lang");
  if (!initial) {
    try { initial = localStorage.getItem("maj-lang"); } catch (e) { initial = null; }
  }
  if (initial === "en") applyLang("en");
  else fillCountries();

  /* ---------------------------------------------------- preguntas frecuentes */
  var faqButtons = Array.prototype.slice.call(document.querySelectorAll(".faq-q"));

  function setFaq(btn, open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    var panel = document.getElementById(btn.getAttribute("aria-controls"));
    if (panel) {
      panel.hidden = false;                   // el alto lo controla la clase, no el atributo
      panel.classList.toggle("is-open", open);
    }
  }

  // El marcado deja las respuestas visibles para quien no tenga JavaScript;
  // al arrancar cerramos todas menos la que viene marcada como abierta.
  faqButtons.forEach(function (btn) {
    setFaq(btn, btn.getAttribute("aria-expanded") === "true");
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      faqButtons.forEach(function (other) { setFaq(other, false); }); // una a la vez
      if (!open) setFaq(btn, true);
    });
  });

  /* --------------------------------------------------------------- menú móvil */
  var nav = document.getElementById("site-nav");
  var toggle = document.getElementById("nav-toggle");

  function setNav(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
  }
  if (nav) {
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") setNav(false);
    });
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setNav(false);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 700) setNav(false);
  });

  /* ---------------------------------------------------- formulario → WhatsApp */
  function buildMessage(data, t) {
    var lines = [t.waIntro, ""];
    lines.push(t.waName + ": " + data.nombre);
    if (data.empresa) lines.push(t.waCompany + ": " + data.empresa);
    lines.push(t.waService + ": " + data.servicio);
    data.extras.forEach(function (x) { lines.push(t[x.label] + ": " + x.value); });
    if (data.correo) lines.push(t.waEmail + ": " + data.correo);
    if (data.telefono) lines.push(t.waPhone + ": " + data.telefono);
    lines.push("", t.waDetail + ": " + data.detalle);
    return lines.join("\n");
  }

  function whatsappUrl(message) {
    return "https://wa.me/" + WHATSAPP_CONTACTO + "?text=" + encodeURIComponent(message);
  }

  /* ------------------------------------------- avisos, extras por servicio, borrador */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var EMAIL_TYPOS = {
    "gmial.com": "gmail.com", "gmai.com": "gmail.com", "gmail.co": "gmail.com", "gnail.com": "gmail.com",
    "gmail.con": "gmail.com", "hotmial.com": "hotmail.com", "hotmail.con": "hotmail.com",
    "hotmai.com": "hotmail.com", "yahooo.com": "yahoo.com", "yaho.com": "yahoo.com",
    "outlok.com": "outlook.com", "outlook.con": "outlook.com", "icloud.con": "icloud.com"
  };
  function showMsg(id, input, html) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = "";
    if (html) {
      if (typeof html === "string") el.textContent = html;
      else el.appendChild(html);
    }
    el.hidden = !html;
    input.setAttribute("aria-invalid", html ? "true" : "false");
  }
  // Devuelve true si el correo está bien (o vacío). Con show=true pinta el aviso.
  function checkEmail(show) {
    var input = form && form.correo, t = DICT[lang];
    if (!input) return true;
    var v = input.value.trim();
    if (!v) { showMsg("msg-correo", input, ""); return true; }
    if (!EMAIL_RE.test(v)) { if (show) showMsg("msg-correo", input, t.vEmail); return false; }
    var domain = v.split("@")[1].toLowerCase();
    if (EMAIL_TYPOS[domain]) {
      if (show) {
        var fixed = v.split("@")[0] + "@" + EMAIL_TYPOS[domain];
        var wrap = document.createElement("span");
        wrap.appendChild(document.createTextNode(t.vEmailDid + " "));
        var btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = fixed;
        btn.addEventListener("click", function () {
          input.value = fixed; showMsg("msg-correo", input, ""); saveDraft();
        });
        wrap.appendChild(btn);
        wrap.appendChild(document.createTextNode("?"));
        showMsg("msg-correo", input, wrap);
      }
      return true;   // es un correo válido; solo se sugiere
    }
    showMsg("msg-correo", input, "");
    return true;
  }
  function checkPhone(show) {
    var input = form && form.telefono, t = DICT[lang];
    if (!input) return true;
    var v = input.value.trim();
    if (!v) { showMsg("msg-telefono", input, ""); return true; }
    var ok = phoneIsValid(country.iso, v.charAt(0) === "+" ? v : "+" + DIAL[country.iso] + v.replace(/\D/g, "").replace(/^0+/, ""));
    if (ok === false) { if (show) showMsg("msg-telefono", input, t.vPhone); return false; }
    showMsg("msg-telefono", input, "");
    return true;
  }

  // Campos opcionales según el servicio (0 desalmacenaje, 1 clasificación, 2 marítima, 3 aérea…)
  function updateExtras() {
    var sel = document.getElementById("svc-select");
    if (!sel) return;
    document.querySelectorAll("#svc-extra [data-svc]").forEach(function (row) {
      row.hidden = row.getAttribute("data-svc") !== String(sel.selectedIndex);
    });
  }
  function visibleExtras() {
    var out = [];
    document.querySelectorAll("#svc-extra [data-svc]:not([hidden]) input").forEach(function (inp) {
      var v = inp.value.trim();
      if (v) out.push({ label: inp.getAttribute("data-label"), value: v });
    });
    return out;
  }

  // Borrador: lo escrito sobrevive a un cierre accidental de la pestaña.
  var DRAFT_KEY = "maj-draft";
  var DRAFT_FIELDS = ["nombre", "empresa", "correo", "telefono", "detalle", "x_bl", "x_puerto", "x_guia", "x_aeropuerto", "x_producto"];
  function saveDraft() {
    if (!form) return;
    var d = { pais: country.iso, servicio: form.servicio.selectedIndex };
    DRAFT_FIELDS.forEach(function (n) { d[n] = form[n].value; });
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify(d)); } catch (e) { /* modo privado */ }
  }
  function clearDraft() {
    try { localStorage.removeItem(DRAFT_KEY); } catch (e) { /* modo privado */ }
  }
  function restoreDraft() {
    var d = null;
    try { d = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null"); } catch (e) { d = null; }
    if (!d) return;
    if (d.pais && DIAL[d.pais]) { country.iso = d.pais; paintButton(); }
    DRAFT_FIELDS.forEach(function (n) { if (typeof d[n] === "string") form[n].value = d[n]; });
    form.telefono.value = formatPhone(country.iso, form.telefono.value);
    if (typeof d.servicio === "number" && d.servicio < form.servicio.options.length) form.servicio.selectedIndex = d.servicio;
    updateExtras();
  }

  var form = document.getElementById("contact-form");
  if (form) {
    restoreDraft();
    updateExtras();
    form.servicio.addEventListener("change", updateExtras);
    form.addEventListener("input", saveDraft);
    form.addEventListener("change", saveDraft);
    form.correo.addEventListener("blur", function () { checkEmail(true); });
    form.correo.addEventListener("input", function () { showMsg("msg-correo", form.correo, ""); });
    form.telefono.addEventListener("blur", function () { checkPhone(true); });
    form.telefono.addEventListener("input", function () { showMsg("msg-telefono", form.telefono, ""); });
    document.getElementById("cc-list").addEventListener("click", saveDraft);
  }

  // Botón flotante de WhatsApp: se esconde cuando ya se ve la sección de contacto.
  var fab = document.getElementById("wa-fab"), contactSection = document.getElementById("contacto");
  if (fab && contactSection && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      fab.classList.toggle("is-hidden", entries[0].isIntersecting);
    }, { threshold: 0.15 }).observe(contactSection);
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var t = DICT[lang];
      var error = document.getElementById("form-error");
      var submit = form.querySelector(".form-submit");

      var rawPhone = form.telefono.value.trim();
      var data = {
        nombre: form.nombre.value.trim(),
        empresa: form.empresa.value.trim(),
        correo: form.correo.value.trim(),
        telefono: !rawPhone ? "" : rawPhone.charAt(0) === "+" ? rawPhone : "+" + DIAL[country.iso] + " " + rawPhone,
        servicio: form.servicio.value,
        detalle: form.detalle.value.trim(),
        extras: visibleExtras()
      };

      var missing = !data.nombre ? form.nombre
        : !data.detalle ? form.detalle
        : (!data.correo && !data.telefono) ? form.correo
        : null;

      if (missing) {
        if (error) { error.hidden = false; error.textContent = t.formError; }
        missing.focus();
        return;
      }
      if (error) error.hidden = true;

      // Un correo mal escrito no se deja pasar; un teléfono dudoso solo avisa si hay correo bueno.
      var badEmail = data.correo && !checkEmail(true);
      var badPhone = rawPhone && !checkPhone(true);
      if (badEmail) { form.correo.focus(); return; }
      if (badPhone && !data.correo) { form.telefono.focus(); return; }

      var url = whatsappUrl(buildMessage(data, t));
      // Ojo: pasar "noopener" como opción hace que window.open devuelva null aunque la
      // pestaña sí se abra, y entonces el respaldo de abajo se dispararía siempre,
      // sacando al visitante de la página. Se corta la referencia a mano.
      var win = window.open(url, "_blank");
      if (win) win.opener = null;
      else window.location.href = url;        // solo si el navegador bloqueó la pestaña

      if (submit) {
        submit.dataset.sent = "1";
        submit.textContent = t.submitted;
      }
      clearDraft();
    });
  }

  /* ------------------------------------------------------------- movimiento */
  // Los bloques entran subiendo unos píxeles al asomarse en pantalla. El estado
  // inicial lo pone el CSS (ver "Movimiento" en styles.css); acá solo se decide
  // cuándo revelarlos y con cuánto retraso.
  var REVELABLES = [
    ".hero-copy > *", ".hero-media", ".label", ".about-copy > *", ".fact",
    ".services-head > *", ".panorama", ".service", ".process-intro > *",
    ".step", ".faq-item", ".h2-contact", ".contact-sub", ".channel", ".form-card"
  ].join(",");

  // Grupos que entran en cascada, no todos de golpe.
  [".stats", ".facts", ".services", ".steps", ".faq", ".channels"].forEach(function (sel) {
    var grupo = document.querySelector(sel);
    if (!grupo) return;
    Array.prototype.forEach.call(grupo.children, function (hijo, i) {
      hijo.style.setProperty("--d", Math.min(i * 70, 420) + "ms");
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll(".hero-copy > *"), function (el, i) {
    el.style.setProperty("--d", i * 90 + "ms");
  });

  var revelables = document.querySelectorAll(REVELABLES);
  var quietud = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (quietud || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(revelables, function (el) { el.classList.add("is-visible"); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        observador.unobserve(e.target);        // se revela una sola vez
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -10% 0px" });
    Array.prototype.forEach.call(revelables, function (el) { observador.observe(el); });
  }

  // El encabezado gana una sombra tenue en cuanto la página se despega del inicio.
  var cabecera = document.querySelector(".site-header");
  var ticking = false;
  function marcarCabecera() {
    cabecera.classList.toggle("is-scrolled", window.scrollY > 24);
    ticking = false;
  }
  if (cabecera) {
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(marcarCabecera);
    }, { passive: true });
    marcarCabecera();
  }

  // Expuesto solo para las pruebas automatizadas del repositorio.
  window.__maj = { buildMessage: buildMessage, whatsappUrl: whatsappUrl, dict: DICT };
})();
