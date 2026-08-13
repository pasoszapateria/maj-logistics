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
    waEmail: "Correo", waPhone: "Teléfono", waDetail: "Detalle"
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
    waEmail: "Email", waPhone: "Phone", waDetail: "Details"
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
    if (data.correo) lines.push(t.waEmail + ": " + data.correo);
    if (data.telefono) lines.push(t.waPhone + ": " + data.telefono);
    lines.push("", t.waDetail + ": " + data.detalle);
    return lines.join("\n");
  }

  function whatsappUrl(message) {
    return "https://wa.me/" + WHATSAPP_CONTACTO + "?text=" + encodeURIComponent(message);
  }

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var t = DICT[lang];
      var error = document.getElementById("form-error");
      var submit = form.querySelector(".form-submit");

      var data = {
        nombre: form.nombre.value.trim(),
        empresa: form.empresa.value.trim(),
        correo: form.correo.value.trim(),
        telefono: form.telefono.value.trim(),
        servicio: form.servicio.value,
        detalle: form.detalle.value.trim()
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
