const translations = {
  fr: {
    htmlLang: "fr",
    pageTitle: "Et si j'arrêtais de travailler aujourd'hui ?",
    hero: {
      eyebrow: "Planification financière",
      title: "Et si j'arrêtais de travailler aujourd'hui ?",
      subtitle:
        "Estimez le montant que vous pouvez dépenser chaque mois jusqu'à la fin estimée de votre vie, en dilapidant tout votre patrimoine, et en finissant avec 0€ sur votre compte.",
      badges: {
        instant: "Accès immédiat",
        nosignup: "Sans inscription",
        todayEuros: "En euros d'aujourd'hui",
      },
    },
    tabs: {
      basic: "Calcul de base",
      scenarios: "Scénarios",
      reverse: "Mode reverse",
      extraIncome: "Avec revenus complémentaires",
      ageSensitivity: "Sensibilité à l'âge",
      ideas: "Suggestions",
      premium: "Premium",
    },
    fields: {
      currentAge: { label: "Âge actuel", suffix: "ans" },
      endAge: { label: "Âge de fin de vie estimé", suffix: "ans" },
      netWorth: { label: "Patrimoine net actuel", help: "Valeur des biens - crédits en cours + épargne" },
      bequest: { label: "Capital à laisser aux héritiers", help: "Optionnel" },
      returnRate: { label: "Rendement annuel net du patrimoine (net d'imp\u00f4ts)" },
      inflation: { label: "Inflation annuelle moyenne", help: "2 % repr\u00e9sente la moyenne haute observ\u00e9e en France sur les 30 derni\u00e8res ann\u00e9es." },
    },
    results: {
      prefix: "Vous pouvez dépenser",
      prefixNeed: "Vous devez vous enrichir de",
      perMonth: "par mois",
      perMonthNeed: "tous les mois",
      perYear: "par an",
      overYears: "Sur {years} ans",
      realRate: "Taux réel {rate} %",
      summaryYears: "Horizon {years} ans",
      summaryBequest: "Héritage {amount}",
      explainer:
        "Montant constant estimé en euros d'aujourd'hui, hors fiscalité et frais spécifiques.",
    },
    chart: {
      title: "Évolution du patrimoine",
      note: "Calcul basé sur une annuité constante en euros d'aujourd'hui.",
      endMarker: "Âge estimé",
      hoverAge: "Âge",
      hoverWorth: "Patrimoine",
    },
    premium: {
      kicker: "Pour aller plus loin",
      title: "Analyses avancées",
      caption: "Quelques euros suffisent",
      items: {
        reverse:
          "Déterminez le capital nécessaire pour atteindre un niveau de vie cible.",
        extraIncome:
          "Intégrez loyers, pension, dividendes ou activité réduite.",
        ageSensitivity:
          "Visualisez ce que changent quelques années de plus ou de moins.",
      },
    },
    support: {
      title: "Premier résultat gratuit",
      copy:
        "Ce premier calcul reste simple et gratuit. Les analyses avancées peuvent ensuite être proposées contre une petite contribution libre.",
      cta: "Voir les analyses avancées",
    },
    unlock: {
      kicker: "Débloquer l'analyse avancée",
      title: "Aller plus loin que le calcul de base",
      subtitle:
        "Pour quelques euros, l'internaute obtient une vision plus utile pour décider sereinement.",
      trust: {
        instant: "Accès immédiat",
        onetime: "Paiement unique",
        nosub: "Pas d'abonnement",
      },
      preview: {
        scenarios: {
          title: "Scénarios personnalisés",
          copy:
            "Voir immédiatement l'effet d'une inflation plus haute ou d'une vie plus longue.",
        },
        income: {
          title: "Revenus complémentaires",
          copy: "Ajouter pension, loyers, dividendes ou activité réduite.",
        },
        reverse: {
          title: "Capital cible",
          copy:
            "Partir d'un niveau de vie souhaité pour remonter au patrimoine nécessaire.",
        },
      },
    },
    pricing: {
      light: {
        label: "Découverte",
        copy: "Idéal pour explorer les scénarios avancés une première fois.",
        cta: "Débloquer pour 3 €",
      },
      standard: {
        label: "Le plus simple",
        copy:
          "Le montant le plus naturel pour remercier l'outil et tout débloquer.",
        cta: "Contribuer 5 €",
      },
      generous: {
        label: "Soutien",
        copy: "Pour les utilisateurs qui veulent encourager le projet davantage.",
        cta: "Soutenir à 9 €",
      },
      note:
        "Ces boutons sont prêts à être reliés à Stripe, Lemon Squeezy, Paddle ou Ko-fi.",
      statusPlaceholder:
        "Ajoutez maintenant vos vrais liens de paiement dans site-config.js avant la mise en ligne.",
      unlocked: "Accès premium débloqué. Vous pouvez maintenant tester toutes les analyses.",
      betaCta: "Ouvrir gratuitement",
    },
    beta: {
      bannerTitle: "Mode bêta actif.",
      bannerCopy:
        "Les options premium sont actuellement accessibles gratuitement pour les tests.",
      bannerCta: "Ouvrir les analyses premium",
    },
    promo: {
      label: "Code d'accès bêta",
      cta: "Valider",
      help:
        "Pour les premières versions, vous pouvez débloquer gratuitement les options premium avec le code GRATUIT.",
      success: "Code accepté. Les analyses premium sont maintenant ouvertes.",
      invalid: "Code invalide. Essayez avec GRATUIT.",
    },
    scenario: {
      kicker: "Analyse premium",
      title: "Scénarios",
      subtitle:
        "Comparez l'impact d'une inflation plus forte, d'un rendement différent ou d'une espérance de vie plus longue.",
      sliderLabelInflation: "Delta inflation",
      sliderLabelReturn: "Delta rendement",
      sliderLabelYears: "Années",
      cards: [
        {
          title: "Inflation +1 point",
          description: "Même horizon de vie, inflation plus élevée de 1 point.",
        },
        {
          title: "Rendement +1 point",
          description: "Même horizon de vie, rendement annuel net du patrimoine plus élevé de 1 point.",
        },
        {
          title: "5 ans de plus",
          description: "Même inflation, horizon de vie prolongé de 5 ans.",
        },
      ],
      monthly: "par mois",
      delta: "{delta} vs. calcul de base",
    },
    reverse: {
      kicker: "Analyse premium",
      title: "Mode reverse",
      subtitle:
        "Partez d'un niveau de dépense mensuel cible pour estimer le patrimoine net nécessaire.",
      input: "Dépense mensuelle visée",
      output: "Patrimoine estimé nécessaire",
      note: "Pour atteindre {monthly} par mois sur {years} ans avec héritage {bequest}.",
      currentPatrimonyAge: "Avec votre patrimoine actuel, vous tiendrez jusqu'à {age} ans.",
      currentPatrimonyBeyond: "Avec votre patrimoine actuel, vous tiendrez au-delà de {age} ans.",
      chartTitle: "Projection du patrimoine cible",
      chartNote:
        "Évolution du patrimoine nécessaire pour maintenir la dépense mensuelle visée.",
    },
    income: {
      kicker: "Analyse premium",
      title: "Avec revenus complémentaires",
      subtitle:
        "Ajoutez des revenus externes pour voir votre marge de dépense totale.",
      input: "Revenus compl\u00e9mentaires mensuels (nets d'imp\u00f4ts)",
      startAge: "\u00c2ge d\u00e9but",
      endAge: "\u00c2ge fin",
      windowHelp: "P\u00e9riode pendant laquelle vous percevez un revenu compl\u00e9mentaire.",
      output: "Dépense mensuelle totale possible",
      note: "{portfolio} via le patrimoine + {extra} de revenus complémentaires.",
      noteWindow: "Le complément de revenus est pris en compte entre {startAge} et {endAge} ans.",
      chartTitle: "Évolution du patrimoine avec revenus complémentaires",
      chartNote:
        "Projection du patrimoine si une partie du niveau de vie est couverte par des revenus externes.",
    },
    sensitivity: {
      kicker: "Analyse premium",
      title: "Sensibilité à l'âge",
      subtitle:
        "Visualisez rapidement l'effet d'un horizon de vie plus court ou plus long.",
      monthly: "par mois",
      delta: "{delta} vs. {reference}",
    },
    ideas: {
      kicker: "Nous écrire",
      title: "Vos remarques / questions",
      subtitle:
        "Partagez vos remarques, vos questions ou les points qui vous semblent peu clairs.",
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      cta: "Envoyer le message",
      sentMailto:
        "Votre messagerie s'ouvre avec le message prérempli. Il ne reste plus qu'à l'envoyer.",
      sentEndpoint: "Merci, votre message a bien été envoyé.",
      missingConfig:
        "Ajoutez une adresse email ou un endpoint de contact dans la configuration du site.",
      invalid:
        "Merci de renseigner au moins un message, et idéalement votre email pour que l'on puisse vous répondre.",
    },
    consent: {
      title: "Statistiques de visite",
      copy:
        "Nous utilisons Google Analytics pour comprendre l'usage du site et l'am\u00e9liorer. Vous pouvez accepter ou refuser ces statistiques.",
      accept: "Accepter",
      deny: "Refuser",
      manage: "G\u00e9rer les cookies",
      learnMore: "En savoir plus",
    },
    footer: {
      privacy: "Confidentialit\u00e9 et cookies",
      note: "Outil d'estimation, sans conseil financier personnalis\u00e9.",
    },
    errors: {
      required: "Merci de renseigner ce champ.",
      ageRange: "Entrez un âge compris entre {min} et {max} ans.",
      endAgeAfterCurrent: "L'âge de fin de vie doit être supérieur à l'âge actuel.",
      positiveAmount: "Entrez un montant positif ou nul.",
      bequestTooHigh: "Le capital transmis doit être inférieur au patrimoine net actuel.",
      returnRange: "Entrez un taux compris entre -20 % et 30 %.",
      inflationRange: "Entrez un taux compris entre -10 % et 20 %.",
      impossible:
        "Ces hypothèses ne permettent pas de maintenir une dépense durable. Ajustez votre horizon, l'héritage ou le rendement.",
    },
  },
  en: {
    htmlLang: "en",
    pageTitle: "What if I stopped working today?",
    hero: {
      eyebrow: "Financial Planning",
      title: "What if I stopped working today?",
      subtitle:
        "Estimate how much you can spend each month until the estimated end of your life, by spending down all your wealth and finishing with €0 in your account.",
      badges: {
        instant: "Instant access",
        nosignup: "No signup",
        todayEuros: "In today's euros",
      },
    },
    tabs: {
      basic: "Base calculation",
      scenarios: "Scenarios",
      reverse: "Reverse mode",
      extraIncome: "With extra income",
      ageSensitivity: "Age sensitivity",
      ideas: "Ideas",
      premium: "Premium",
    },
    fields: {
      currentAge: { label: "Current age", suffix: "years" },
      endAge: { label: "Estimated age at end of life", suffix: "years" },
      netWorth: { label: "Current net worth", help: "Property value - outstanding loans + savings" },
      bequest: { label: "Capital to leave to heirs", help: "Optional" },
      returnRate: { label: "Net annual portfolio return (after tax)" },
      inflation: { label: "Average annual inflation", help: "2% is roughly the upper-end long-term average observed in France over the past 30 years." },
    },
    results: {
      prefix: "You can spend",
      prefixNeed: "You need to grow your wealth by",
      perMonth: "per month",
      perMonthNeed: "every month",
      perYear: "per year",
      overYears: "Over {years} years",
      realRate: "Real rate {rate}%",
      summaryYears: "Horizon {years} years",
      summaryBequest: "Heirs {amount}",
      explainer:
        "Estimated constant spending in today's euros, excluding taxes and specific fees.",
    },
    chart: {
      title: "Net worth over time",
      note: "Calculation based on a constant annuity in today's euros.",
      endMarker: "Estimated age",
      hoverAge: "Age",
      hoverWorth: "Net worth",
    },
    premium: {
      kicker: "Go further",
      title: "Advanced analysis",
      caption: "A few euros is enough",
      items: {
        reverse: "Estimate the capital needed to reach a target lifestyle.",
        extraIncome: "Include rent, pension, dividends, or reduced work income.",
        ageSensitivity: "See what a few extra or fewer years really change.",
      },
    },
    support: {
      title: "First result stays free",
      copy:
        "This first calculation stays simple and free. Advanced analysis can then be offered for a small voluntary contribution.",
      cta: "See advanced analysis",
    },
    unlock: {
      kicker: "Unlock advanced analysis",
      title: "Go beyond the basic calculation",
      subtitle:
        "For a few euros, visitors get a much more useful view for making a calm decision.",
      trust: {
        instant: "Instant access",
        onetime: "One-time payment",
        nosub: "No subscription",
      },
      preview: {
        scenarios: {
          title: "Custom scenarios",
          copy:
            "Immediately see the effect of higher inflation or a longer life horizon.",
        },
        income: {
          title: "Extra income",
          copy: "Add pension, rent, dividends, or reduced work income.",
        },
        reverse: {
          title: "Target capital",
          copy:
            "Start from a desired lifestyle and work backward to the capital required.",
        },
      },
    },
    pricing: {
      light: {
        label: "Starter",
        copy: "Ideal for exploring advanced scenarios for the first time.",
        cta: "Unlock for €3",
      },
      standard: {
        label: "Best fit",
        copy: "The most natural amount to thank the tool and unlock everything.",
        cta: "Contribute €5",
      },
      generous: {
        label: "Support",
        copy: "For visitors who want to support the project a bit more.",
        cta: "Support with €9",
      },
      note:
        "These buttons are ready to connect to Stripe, Lemon Squeezy, Paddle, or Ko-fi.",
      statusPlaceholder:
        "Add your real payment links in site-config.js before publishing.",
      unlocked: "Premium access unlocked. You can now test every advanced analysis.",
      betaCta: "Open for free",
    },
    beta: {
      bannerTitle: "Beta mode is active.",
      bannerCopy:
        "Premium options are currently accessible for free so early testers can try everything.",
      bannerCta: "Open premium analysis",
    },
    promo: {
      label: "Beta access code",
      cta: "Apply",
      help:
        "For early versions, you can unlock premium options for free with the code GRATUIT.",
      success: "Code accepted. Premium analysis is now open.",
      invalid: "Invalid code. Try GRATUIT.",
    },
    scenario: {
      kicker: "Premium analysis",
      title: "Scenarios",
      subtitle:
        "Compare the effect of higher inflation, a different return, or a longer lifespan.",
      sliderLabelInflation: "Inflation delta",
      sliderLabelReturn: "Return delta",
      sliderLabelYears: "Years",
      cards: [
        { title: "Inflation +1 point", description: "Same lifespan, inflation higher by 1 point." },
        { title: "Return +1 point", description: "Same lifespan, net annual portfolio return higher by 1 point." },
        { title: "5 extra years", description: "Same inflation, lifespan extended by 5 years." },
      ],
      monthly: "per month",
      delta: "{delta} vs. base case",
    },
    reverse: {
      kicker: "Premium analysis",
      title: "Reverse mode",
      subtitle:
        "Start from a target monthly spending level to estimate the net worth required.",
      input: "Target monthly spending",
      output: "Estimated net worth required",
      note: "To reach {monthly} per month over {years} years with heirs amount {bequest}.",
      currentPatrimonyAge: "With your current net worth, you would last until age {age}.",
      currentPatrimonyBeyond: "With your current net worth, you would last beyond age {age}.",
      chartTitle: "Target net worth projection",
      chartNote:
        "How the required net worth would evolve while sustaining the target monthly spending.",
    },
    income: {
      kicker: "Premium analysis",
      title: "With extra income",
      subtitle: "Add external income to see your total spending room.",
      input: "Monthly extra income (after tax)",
      startAge: "Start age",
      endAge: "End age",
      windowHelp: "Period during which you receive extra income.",
      output: "Total monthly spending available",
      note: "{portfolio} from the portfolio + {extra} from extra income.",
      noteWindow: "Extra income is included between ages {startAge} and {endAge}.",
      chartTitle: "Net worth with extra income",
      chartNote:
        "Net worth projection if part of your lifestyle is covered by external income.",
    },
    sensitivity: {
      kicker: "Premium analysis",
      title: "Age sensitivity",
      subtitle: "Quickly see the effect of a shorter or longer life horizon.",
      monthly: "per month",
      delta: "{delta} vs. {reference}",
    },
    ideas: {
      kicker: "Contact us",
      title: "Your feedback / questions",
      subtitle:
        "Share your feedback, your questions, or anything that feels unclear.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      cta: "Send message",
      sentMailto:
        "Your email client is opening with a prefilled draft. You only need to send it.",
      sentEndpoint: "Thank you, your message was sent.",
      missingConfig: "Add a contact email or contact endpoint in the site configuration.",
      invalid:
        "Please enter at least a message, and ideally your email so we can reply.",
    },
    consent: {
      title: "Visitor analytics",
      copy:
        "We use Google Analytics to understand how the site is used and improve it. You can accept or refuse these analytics cookies.",
      accept: "Accept",
      deny: "Decline",
      manage: "Manage cookies",
      learnMore: "Learn more",
    },
    footer: {
      privacy: "Privacy and cookies",
      note: "Estimation tool only, with no personalized financial advice.",
    },
    errors: {
      required: "Please complete this field.",
      ageRange: "Enter an age between {min} and {max} years.",
      endAgeAfterCurrent: "The end-of-life age must be greater than the current age.",
      positiveAmount: "Enter a positive amount or zero.",
      bequestTooHigh: "The amount left to heirs must be lower than current net worth.",
      returnRange: "Enter a rate between -20% and 30%.",
      inflationRange: "Enter a rate between -10% and 20%.",
      impossible:
        "These assumptions do not support a sustainable withdrawal. Adjust your horizon, bequest, or return.",
    },
  },
};

const config = {
  paymentsEnabled: false,
  betaFreeAccess: true,
  promoCode: "GRATUIT",
  analyticsMeasurementId: "",
  paymentLinks: { light: "", standard: "", generous: "" },
  contactEmail: "",
  contactEndpoint: "",
  ...(window.SITE_CONFIG || {}),
};

document.getElementById("premium-preview")?.remove();

const premiumTabs = ["scenarios", "reverse", "income", "sensitivity"];

const state = {
  locale: localStorage.getItem("planner-locale") || "fr",
  activeTab: "basic",
  analyticsConsent: localStorage.getItem("planner-analytics-consent") || "pending",
  consentBannerOpen: !localStorage.getItem("planner-analytics-consent"),
  analyticsLoaded: false,
  premiumUnlocked:
    localStorage.getItem("planner-premium-unlocked") === "true" ||
    config.betaFreeAccess ||
    !config.paymentsEnabled,
  scenarioControls: {
    inflationOffset: 1,
    returnOffset: 1,
    extraYears: 5,
  },
};

const ui = {
  languageSwitch: document.getElementById("language-switch"),
  monthlyResult: document.getElementById("monthly-result"),
  annualResult: document.getElementById("annual-result"),
  resultLabel: document.querySelector(".result-label"),
  resultUnits: [...document.querySelectorAll(".result-unit")],
  resultMeta: document.getElementById("result-meta"),
  summaryYears: document.getElementById("summary-years"),
  summaryRealRate: document.getElementById("summary-real-rate"),
  summaryBequest: document.getElementById("summary-bequest"),
  chart: document.getElementById("wealth-chart"),
  chartTooltip: document.getElementById("chart-tooltip"),
  chartTooltipAge: document.getElementById("chart-tooltip-age"),
  chartTooltipWorth: document.getElementById("chart-tooltip-worth"),
  scenarioGrid: document.getElementById("scenario-grid"),
  sensitivityGrid: document.getElementById("sensitivity-grid"),
  paymentStatus: document.getElementById("payment-status"),
  unlockCta: document.getElementById("unlock-cta"),
  betaBanner: document.getElementById("beta-banner"),
  betaUnlockButton: document.getElementById("beta-unlock-button"),
  promoCode: document.getElementById("promo-code"),
  promoSubmit: document.getElementById("promo-submit"),
  targetMonthly: document.getElementById("target-monthly"),
  extraIncome: document.getElementById("extra-income"),
  incomeStartAge: document.getElementById("income-start-age"),
  incomeEndAge: document.getElementById("income-end-age"),
  reverseRequiredCapital: document.getElementById("reverse-required-capital"),
  reverseSummaryNote: document.getElementById("reverse-summary-note"),
  reverseCurrentPatrimonyNote: document.getElementById("reverse-current-patrimony-note"),
  reverseChart: document.getElementById("reverse-chart"),
  reverseChartTooltip: document.getElementById("reverse-chart-tooltip"),
  reverseChartTooltipAge: document.getElementById("reverse-chart-tooltip-age"),
  reverseChartTooltipWorth: document.getElementById("reverse-chart-tooltip-worth"),
  incomeTotalMonthly: document.getElementById("income-total-monthly"),
  incomeSummaryNote: document.getElementById("income-summary-note"),
  incomeChart: document.getElementById("income-chart"),
  incomeChartTooltip: document.getElementById("income-chart-tooltip"),
  incomeChartTooltipAge: document.getElementById("income-chart-tooltip-age"),
  incomeChartTooltipWorth: document.getElementById("income-chart-tooltip-worth"),
  ideasForm: document.getElementById("ideas-form"),
  ideasName: document.getElementById("idea-name"),
  ideasEmail: document.getElementById("idea-email"),
  ideasMessage: document.getElementById("idea-message"),
  ideasStatus: document.getElementById("ideas-status"),
  consentBanner: document.getElementById("consent-banner"),
  consentAccept: document.getElementById("consent-accept"),
  consentDeny: document.getElementById("consent-deny"),
  consentManage: document.getElementById("consent-manage"),
  panels: [...document.querySelectorAll("[data-panel]")],
  basicOnlyPanels: [...document.querySelectorAll("[data-basic-only]")],
  tabButtons: [...document.querySelectorAll(".tab-button[data-tab]")],
  paymentButtons: [...document.querySelectorAll("[data-payment-tier]")],
  premiumBadges: [...document.querySelectorAll(".premium-lock-badge")],
};

const fields = {
  currentAge: document.getElementById("current-age"),
  endAge: document.getElementById("end-age"),
  netWorth: document.getElementById("net-worth"),
  bequest: document.getElementById("bequest"),
  returnRate: document.getElementById("return-rate"),
  inflationRate: document.getElementById("inflation-rate"),
};

const errorEls = {
  currentAge: document.getElementById("current-age-error"),
  endAge: document.getElementById("end-age-error"),
  netWorth: document.getElementById("net-worth-error"),
  bequest: document.getElementById("bequest-error"),
  returnRate: document.getElementById("return-rate-error"),
  inflationRate: document.getElementById("inflation-rate-error"),
};

let lastCalculation = null;
let lastValues = null;

function t(path, replacements = {}) {
  const value = path.split(".").reduce((acc, key) => acc?.[key], translations[state.locale]);
  if (typeof value !== "string") {
    return value;
  }
  return Object.entries(replacements).reduce(
    (text, [key, replacement]) => text.replaceAll(`{${key}}`, String(replacement)),
    value,
  );
}

function localeId() {
  return state.locale === "fr" ? "fr-FR" : "en-US";
}

function getCurrencyFormatter() {
  return new Intl.NumberFormat(localeId(), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

function getIntegerFormatter() {
  return new Intl.NumberFormat(localeId(), { maximumFractionDigits: 0 });
}

function getDecimalFormatter(digits = 2) {
  return new Intl.NumberFormat(localeId(), {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function analyticsMeasurementId() {
  return String(config.analyticsMeasurementId || "").trim();
}

function clearAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter((name) => name && (name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name === "_gat"));

  const host = window.location.hostname;
  const domainVariants = [host];
  if (host.includes(".")) {
    domainVariants.push(`.${host}`);
  }

  cookieNames.forEach((name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    domainVariants.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    });
  });
}

function disableAnalyticsRuntime() {
  const measurementId = analyticsMeasurementId();
  if (measurementId) {
    window[`ga-disable-${measurementId}`] = true;
  }

  if (typeof window.gtag === "function") {
    try {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    } catch (_error) {
      // Ignore runtime failures while shutting analytics down.
    }
  }

  const analyticsScript = document.querySelector(`script[data-ga-measurement-id="${measurementId}"]`);
  analyticsScript?.remove();
  window.dataLayer = [];
  delete window.gtag;
  state.analyticsLoaded = false;
  clearAnalyticsCookies();
}

function loadAnalytics() {
  const measurementId = analyticsMeasurementId();
  if (!measurementId || state.analyticsLoaded) {
    return;
  }

  window[`ga-disable-${measurementId}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const existingScript = document.querySelector(`script[data-ga-measurement-id="${measurementId}"]`);
  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.dataset.gaMeasurementId = measurementId;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true });
  state.analyticsLoaded = true;
}

function updateConsentUI() {
  const hasChoice = state.analyticsConsent === "granted" || state.analyticsConsent === "denied";
  const showBanner = state.consentBannerOpen || !hasChoice;
  ui.consentBanner?.classList.toggle("hidden", !showBanner);
  ui.consentManage?.classList.toggle("hidden", showBanner);
}

function setAnalyticsConsent(status) {
  const wasGranted = state.analyticsConsent === "granted" || state.analyticsLoaded;
  state.analyticsConsent = status;
  state.consentBannerOpen = false;
  localStorage.setItem("planner-analytics-consent", status);

  if (status === "granted") {
    loadAnalytics();
  } else {
    disableAnalyticsRuntime();
  }

  updateConsentUI();

  if (status === "denied" && wasGranted) {
    window.setTimeout(() => window.location.reload(), 120);
  }
}

function getNiceStep(roughStep) {
  const safeStep = Math.max(roughStep, 1);
  const exponent = Math.floor(Math.log10(safeStep));
  const magnitude = 10 ** exponent;
  const fraction = safeStep / magnitude;

  if (fraction <= 1) {
    return magnitude;
  }
  if (fraction <= 2) {
    return 2 * magnitude;
  }
  if (fraction <= 5) {
    return 5 * magnitude;
  }
  return 10 * magnitude;
}

function getChartYAxis(points) {
  const balances = points.map((point) => point.balance).filter((value) => Number.isFinite(value));
  if (!balances.length) {
    return { min: 0, max: 1, ticks: [0, 0.25, 0.5, 0.75, 1] };
  }

  let minBalance = Math.min(...balances);
  let maxBalance = Math.max(...balances);

  if (minBalance === maxBalance) {
    const padding = Math.max(Math.abs(minBalance) * 0.1, 1);
    minBalance -= padding;
    maxBalance += padding;
  }

  const step = getNiceStep((maxBalance - minBalance) / 4);
  let axisMin = Math.floor(minBalance / step) * step;
  let axisMax = Math.ceil(maxBalance / step) * step;
  let tickCount = Math.round((axisMax - axisMin) / step) + 1;
  const lowerPadding = minBalance - axisMin;
  const upperPadding = axisMax - maxBalance;

  if (tickCount < 5) {
    if (lowerPadding >= upperPadding && axisMin - step >= 0) {
      axisMin -= step;
    } else {
      axisMax += step;
    }
    tickCount = Math.round((axisMax - axisMin) / step) + 1;
  }

  const ticks = Array.from({ length: tickCount }, (_, index) =>
    Number((axisMin + index * step).toFixed(10)),
  );

  return {
    min: axisMin,
    max: axisMax,
    ticks,
  };
}

function normalizeAmount(rawValue) {
  const trimmed = rawValue.trim();
  const sign = trimmed.startsWith("-") ? "-" : "";
  const digits = trimmed.replace(/[^\d]/g, "");
  return `${sign}${digits}`;
}

function parseAmount(rawValue) {
  const normalized = normalizeAmount(rawValue);
  if (!normalized || normalized === "-") {
    return Number.NaN;
  }
  const numeric = Number(normalized);
  return Number.isFinite(numeric) ? numeric : Number.NaN;
}

function formatAmountInput(input, value) {
  if (Number.isFinite(value)) {
    input.value = getIntegerFormatter().format(Math.round(value));
  }
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function readBaseValues() {
  return {
    currentAge: Number(fields.currentAge.value),
    endAge: Number(fields.endAge.value),
    netWorth: parseAmount(fields.netWorth.value),
    bequest: parseAmount(fields.bequest.value || "0"),
    returnRate: Number(fields.returnRate.value),
    inflationRate: Number(fields.inflationRate.value),
  };
}

function clearErrors() {
  Object.entries(errorEls).forEach(([key, el]) => {
    el.textContent = "";
    fields[key].closest(".field").classList.remove("has-error");
  });
}

function setError(fieldName, message) {
  errorEls[fieldName].textContent = message;
  fields[fieldName].closest(".field").classList.add("has-error");
}

function validate(values) {
  const errors = {};
  if (!Number.isFinite(values.currentAge)) {
    errors.currentAge = t("errors.required");
  } else if (values.currentAge < 18 || values.currentAge > 110) {
    errors.currentAge = t("errors.ageRange", { min: 18, max: 110 });
  }

  if (!Number.isFinite(values.endAge)) {
    errors.endAge = t("errors.required");
  } else if (values.endAge < 19 || values.endAge > 120) {
    errors.endAge = t("errors.ageRange", { min: 19, max: 120 });
  } else if (Number.isFinite(values.currentAge) && values.endAge <= values.currentAge) {
    errors.endAge = t("errors.endAgeAfterCurrent");
  }

  if (!Number.isFinite(values.netWorth)) {
    errors.netWorth = t("errors.required");
  } else if (values.netWorth < 0) {
    errors.netWorth = t("errors.positiveAmount");
  }

  if (!Number.isFinite(values.bequest)) {
    errors.bequest = t("errors.required");
  } else if (values.bequest < 0) {
    errors.bequest = t("errors.positiveAmount");
  }

  if (!Number.isFinite(values.returnRate) || values.returnRate < -20 || values.returnRate > 30) {
    errors.returnRate = t("errors.returnRange");
  }

  if (
    !Number.isFinite(values.inflationRate) ||
    values.inflationRate < -10 ||
    values.inflationRate > 20
  ) {
    errors.inflationRate = t("errors.inflationRange");
  }
  return errors;
}

function calculatePlanner(values) {
  const years = values.endAge - values.currentAge;
  const nominalReturn = values.returnRate / 100;
  const inflation = values.inflationRate / 100;
  const realRate = (1 + nominalReturn) / (1 + inflation) - 1;
  const discountedBequest = values.bequest / Math.pow(1 + realRate, years);
  const distributableCapital = values.netWorth - discountedBequest;

  let annualSpending;
  if (Math.abs(realRate) < 1e-9) {
    annualSpending = distributableCapital / years;
  } else {
    annualSpending =
      (distributableCapital * realRate) / (1 - Math.pow(1 + realRate, -years));
  }

  if (!Number.isFinite(annualSpending)) {
    return {
      years,
      realRate,
      bequest: values.bequest,
      annualSpending: Number.NaN,
      monthlySpending: Number.NaN,
      points: [],
    };
  }

  const monthlySpending = annualSpending / 12;
  let balance = values.netWorth;
  const points = [{ age: values.currentAge, balance }];
  for (let step = 1; step <= years; step += 1) {
    balance = balance * (1 + realRate) - annualSpending;
    points.push({ age: values.currentAge + step, balance });
  }
  points[points.length - 1].balance = values.bequest;
  return { years, realRate, bequest: values.bequest, annualSpending, monthlySpending, points };
}

function presentValueFactor(realRate, years, startOffset = 0, endOffset = years) {
  let factor = 0;
  for (let step = 1; step <= years; step += 1) {
    const intervalStart = step - 1;
    if (intervalStart < startOffset || intervalStart >= endOffset) {
      continue;
    }
    factor += 1 / Math.pow(1 + realRate, step);
  }
  return factor;
}

function readIncomeWindow(values) {
  const currentAge = values.currentAge;
  const endAge = values.endAge;
  const rawStart = Number(ui.incomeStartAge.value);
  const rawEnd = Number(ui.incomeEndAge.value);
  const startAge = Number.isFinite(rawStart) ? clamp(Math.round(rawStart), currentAge, endAge) : currentAge;
  const endAgeWindow = Number.isFinite(rawEnd) ? clamp(Math.round(rawEnd), startAge, endAge) : endAge;
  return {
    startAge,
    endAge: endAgeWindow,
    isFullHorizon: startAge === currentAge && endAgeWindow === endAge,
  };
}

function syncIncomeAgeInputs(values) {
  const previousCurrentAge = lastValues?.currentAge;
  const previousEndAge = lastValues?.endAge;
  const currentRaw = Number(ui.incomeStartAge.value);
  const endRaw = Number(ui.incomeEndAge.value);
  const shouldFollowCurrent =
    !Number.isFinite(currentRaw) ||
    ui.incomeStartAge.value === "" ||
    currentRaw === previousCurrentAge ||
    currentRaw < values.currentAge ||
    currentRaw > values.endAge;
  const shouldFollowEnd =
    !Number.isFinite(endRaw) ||
    ui.incomeEndAge.value === "" ||
    endRaw === previousEndAge ||
    endRaw < values.currentAge ||
    endRaw > values.endAge;

  ui.incomeStartAge.min = String(values.currentAge);
  ui.incomeStartAge.max = String(values.endAge);
  ui.incomeEndAge.min = String(values.currentAge);
  ui.incomeEndAge.max = String(values.endAge);

  if (shouldFollowCurrent) {
    ui.incomeStartAge.value = String(values.currentAge);
  }
  if (shouldFollowEnd) {
    ui.incomeEndAge.value = String(values.endAge);
  }

  const normalized = readIncomeWindow(values);
  ui.incomeStartAge.value = String(normalized.startAge);
  ui.incomeEndAge.value = String(normalized.endAge);
}

function calculateIncomeScenario(values, extraIncomeMonthly) {
  const years = values.endAge - values.currentAge;
  const realRate = (1 + values.returnRate / 100) / (1 + values.inflationRate / 100) - 1;
  const distributableCapital = values.netWorth - values.bequest / Math.pow(1 + realRate, years);
  const fullFactor = presentValueFactor(realRate, years);
  const incomeWindow = readIncomeWindow(values);
  const startOffset = incomeWindow.startAge - values.currentAge;
  const endOffset = incomeWindow.endAge - values.currentAge;
  const incomeFactor = presentValueFactor(realRate, years, startOffset, endOffset);
  const extraAnnual = Math.max(0, extraIncomeMonthly || 0) * 12;
  const annualSpending = fullFactor > 0
    ? (distributableCapital + extraAnnual * incomeFactor) / fullFactor
    : Number.NaN;

  if (!Number.isFinite(annualSpending) || annualSpending < 0) {
    return {
      annualSpending: Number.NaN,
      monthlySpending: Number.NaN,
      points: [],
      incomeWindow,
    };
  }

  let balance = values.netWorth;
  const points = [{ age: values.currentAge, balance }];
  for (let step = 1; step <= years; step += 1) {
    const intervalStartAge = values.currentAge + step - 1;
    const extraAnnualThisStep =
      intervalStartAge >= incomeWindow.startAge && intervalStartAge < incomeWindow.endAge
        ? extraAnnual
        : 0;
    balance = balance * (1 + realRate) - (annualSpending - extraAnnualThisStep);
    points.push({ age: values.currentAge + step, balance });
  }
  points[points.length - 1].balance = values.bequest;

  return {
    annualSpending,
    monthlySpending: annualSpending / 12,
    points,
    incomeWindow,
  };
}

function buildProjectionPoints({ startAge, endAge, startingBalance, annualWithdrawal, realRate, floorBalance = 0 }) {
  const years = Math.max(1, Math.round(endAge - startAge));
  let balance = startingBalance;
  const points = [{ age: startAge, balance }];
  for (let step = 1; step <= years; step += 1) {
    balance = balance * (1 + realRate) - annualWithdrawal;
    points.push({ age: startAge + step, balance });
  }
  if (points.length) {
    points[points.length - 1].balance = floorBalance;
  }
  return points;
}

function requiredCapitalForTarget(values, targetMonthly) {
  const years = values.endAge - values.currentAge;
  const realRate = (1 + values.returnRate / 100) / (1 + values.inflationRate / 100) - 1;
  const annual = targetMonthly * 12;
  const discountedBequest = values.bequest / Math.pow(1 + realRate, years);
  let distributableCapital;
  if (Math.abs(realRate) < 1e-9) {
    distributableCapital = annual * years;
  } else {
    distributableCapital = (annual * (1 - Math.pow(1 + realRate, -years))) / realRate;
  }
  return Math.max(0, distributableCapital + discountedBequest);
}

function ageReachedWithCurrentPatrimony(values, targetMonthly) {
  if (!Number.isFinite(targetMonthly) || targetMonthly <= 0) {
    return null;
  }

  const annualRealRate = (1 + values.returnRate / 100) / (1 + values.inflationRate / 100) - 1;
  const monthlyRealRate = Math.pow(1 + annualRealRate, 1 / 12) - 1;
  let balance = values.netWorth;
  const targetBalance = values.bequest;
  const monthlySpend = targetMonthly;
  const maxMonths = 12 * 130;

  for (let month = 0; month <= maxMonths; month += 1) {
    if (balance <= targetBalance) {
      return {
        age: values.currentAge + month / 12,
        beyond: false,
      };
    }
    balance = balance * (1 + monthlyRealRate) - monthlySpend;
  }

  return {
    age: values.currentAge + maxMonths / 12,
    beyond: true,
  };
}

function renderInteractiveChart({
  svg,
  tooltip,
  tooltipAgeEl,
  tooltipWorthEl,
  points,
  currentAge,
  endAge,
}) {
  if (!svg) {
    return;
  }

  svg.innerHTML = "";
  const width = 960;
  const height = 380;
  const margin = { top: 26, right: 26, bottom: 42, left: 72 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const safePoints =
    points && points.length
      ? points
      : [
          { age: currentAge, balance: 0 },
          { age: endAge, balance: 0 },
        ];
  const yAxis = getChartYAxis(safePoints);
  const x = (age) => margin.left + ((age - currentAge) / Math.max(endAge - currentAge, 1)) * chartWidth;
  const y = (balance) =>
    margin.top + chartHeight - ((balance - yAxis.min) / Math.max(yAxis.max - yAxis.min, 1)) * chartHeight;
  const gridLines = yAxis.ticks.map((value) => {
    const gridY = y(value);
    return `
      <line x1="${margin.left}" y1="${gridY}" x2="${width - margin.right}" y2="${gridY}" stroke="#edf0f5" stroke-dasharray="2 8" />
      <text x="${margin.left - 12}" y="${gridY + 5}" text-anchor="end" font-size="14" fill="#778093">${getIntegerFormatter().format(Math.round(value / 1000))}k</text>
    `;
  });
  const tickCount = Math.max(1, Math.min(Math.round(endAge - currentAge) || 1, 10));
  const ageTicks = Array.from({ length: tickCount + 1 }, (_, index) => {
    const age = currentAge + (index * (endAge - currentAge)) / tickCount;
    const tickX = x(age);
    return `
      <line x1="${tickX}" y1="${margin.top}" x2="${tickX}" y2="${margin.top + chartHeight}" stroke="#f2f4f8" />
      <text x="${tickX}" y="${height - 12}" text-anchor="middle" font-size="13" fill="#8a92a2">${Math.round(age)}</text>
    `;
  });
  const path = safePoints
    .map((point, index) => `${index === 0 ? "M" : "L"} ${x(point.age).toFixed(2)} ${y(point.balance).toFixed(2)}`)
    .join(" ");
  const endX = x(endAge);
  svg.innerHTML = `
    <defs>
      <linearGradient id="${svg.id}-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#d71931"></stop>
        <stop offset="100%" stop-color="#7e1220"></stop>
      </linearGradient>
    </defs>
    ${gridLines.join("")}
    ${ageTicks.join("")}
    <line x1="${margin.left}" y1="${margin.top + chartHeight}" x2="${width - margin.right}" y2="${margin.top + chartHeight}" stroke="#dfe5ee" />
    <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + chartHeight}" stroke="#dfe5ee" />
    <rect x="${Math.min(endX, width - margin.right)}" y="${margin.top}" width="${width - margin.right - endX}" height="${chartHeight}" fill="rgba(224, 87, 109, 0.08)" />
    <line x1="${endX}" y1="${margin.top}" x2="${endX}" y2="${margin.top + chartHeight}" stroke="#8a92a2" stroke-dasharray="4 6" />
    <text x="${endX}" y="${margin.top - 8}" text-anchor="middle" font-size="14" fill="#8a92a2">${t("chart.endMarker")}</text>
    <path d="${path}" fill="none" stroke="url(#${svg.id}-gradient)" stroke-width="4" stroke-linecap="round" />
    <rect id="${svg.id}-hover-overlay" x="${margin.left}" y="${margin.top}" width="${chartWidth}" height="${chartHeight}" fill="transparent" pointer-events="all" />
    <line id="${svg.id}-hover-line" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + chartHeight}" stroke="#b9c1d1" stroke-dasharray="4 6" visibility="hidden" />
    <circle id="${svg.id}-hover-dot" cx="${margin.left}" cy="${margin.top}" r="6" fill="#111b36" stroke="#ffffff" stroke-width="3" visibility="hidden" />
  `;

  const hoverOverlay = svg.querySelector(`#${svg.id}-hover-overlay`);
  const hoverLine = svg.querySelector(`#${svg.id}-hover-line`);
  const hoverDot = svg.querySelector(`#${svg.id}-hover-dot`);
  if (!hoverOverlay || !hoverLine || !hoverDot || !tooltip || !tooltipAgeEl || !tooltipWorthEl) {
    return;
  }

  const moneyKFormatter = new Intl.NumberFormat(localeId(), { maximumFractionDigits: 0 });

  const hidePoint = () => {
    hoverLine.setAttribute("visibility", "hidden");
    hoverDot.setAttribute("visibility", "hidden");
    tooltip.classList.add("hidden");
    tooltip.setAttribute("aria-hidden", "true");
  };

  const showPoint = (event) => {
    const panelRect = svg.parentElement.getBoundingClientRect();
    const overlayRect = hoverOverlay.getBoundingClientRect();
    const relativeX = event.clientX - overlayRect.left;
    const ratio = Math.min(1, Math.max(0, relativeX / overlayRect.width));
    const index = Math.min(safePoints.length - 1, Math.max(0, Math.round(ratio * (safePoints.length - 1))));
    const point = safePoints[index];
    const cx = x(point.age);
    const cy = y(point.balance);
    const screenCx = (cx / width) * svg.getBoundingClientRect().width;
    const screenCy = (cy / height) * svg.getBoundingClientRect().height;

    hoverLine.setAttribute("x1", String(cx));
    hoverLine.setAttribute("x2", String(cx));
    hoverLine.setAttribute("visibility", "visible");
    hoverDot.setAttribute("cx", String(cx));
    hoverDot.setAttribute("cy", String(cy));
    hoverDot.setAttribute("visibility", "visible");
    tooltip.classList.remove("hidden");
    tooltip.setAttribute("aria-hidden", "false");
    tooltipAgeEl.textContent = `${t("chart.hoverAge")} ${Math.round(point.age)} ${t("fields.endAge.suffix")}`;
    tooltipWorthEl.textContent = `${t("chart.hoverWorth")} ${moneyKFormatter.format(Math.round(point.balance / 1000))} k€`;
    const svgRect = svg.getBoundingClientRect();
    tooltip.style.left = `${screenCx + (svgRect.left - panelRect.left)}px`;
    tooltip.style.top = `${screenCy + (svgRect.top - panelRect.top)}px`;
  };

  hoverOverlay.addEventListener("mousemove", showPoint);
  hoverOverlay.addEventListener("mouseenter", showPoint);
  hoverOverlay.addEventListener("mouseleave", hidePoint);
}

function renderResults(calculation) {
  if (!Number.isFinite(calculation.annualSpending)) {
    ui.monthlyResult.textContent = "—";
    ui.annualResult.textContent = "—";
    ui.resultMeta.textContent = t("errors.impossible");
    ui.summaryYears.textContent = "—";
    ui.summaryRealRate.textContent = "—";
    ui.summaryBequest.textContent = "—";
    return;
  }
  const money = getCurrencyFormatter();
  ui.monthlyResult.textContent = money.format(calculation.monthlySpending);
  ui.annualResult.textContent = money.format(calculation.annualSpending);
  ui.summaryYears.textContent = t("results.summaryYears", { years: calculation.years });
  ui.summaryRealRate.textContent = t("results.realRate", {
    rate: getDecimalFormatter(2).format(calculation.realRate * 100),
  });
  ui.summaryBequest.textContent = t("results.summaryBequest", {
    amount: money.format(calculation.bequest),
  });
  ui.resultMeta.textContent = `${t("results.overYears", { years: calculation.years })} · ${t(
    "results.realRate",
    { rate: getDecimalFormatter(2).format(calculation.realRate * 100) },
  )}`;
}

function renderChart(calculation, currentAge, endAge) {
  renderInteractiveChart({
    svg: ui.chart,
    tooltip: ui.chartTooltip,
    tooltipAgeEl: ui.chartTooltipAge,
    tooltipWorthEl: ui.chartTooltipWorth,
    points: calculation.points,
    currentAge,
    endAge,
  });
}

function renderResults(calculation) {
  if (!Number.isFinite(calculation.annualSpending)) {
    ui.resultLabel.textContent = t("results.prefix");
    ui.resultUnits[0].textContent = t("results.perMonth");
    ui.resultUnits[1].textContent = t("results.perYear");
    ui.monthlyResult.classList.remove("is-negative");
    ui.annualResult.classList.remove("is-negative");
    ui.monthlyResult.textContent = "—";
    ui.annualResult.textContent = "—";
    ui.resultMeta.textContent = t("errors.impossible");
    ui.summaryYears.textContent = "—";
    ui.summaryRealRate.textContent = "—";
    ui.summaryBequest.textContent = "—";
    return;
  }

  const money = getCurrencyFormatter();
  const isNegative = calculation.monthlySpending < 0;
  ui.resultLabel.textContent = t(isNegative ? "results.prefixNeed" : "results.prefix");
  ui.resultUnits[0].textContent = t(isNegative ? "results.perMonthNeed" : "results.perMonth");
  ui.resultUnits[1].textContent = t("results.perYear");
  ui.monthlyResult.classList.toggle("is-negative", isNegative);
  ui.annualResult.classList.toggle("is-negative", isNegative);
  ui.monthlyResult.textContent = money.format(Math.abs(calculation.monthlySpending));
  ui.annualResult.textContent = money.format(Math.abs(calculation.annualSpending));
  ui.summaryYears.textContent = t("results.summaryYears", { years: calculation.years });
  ui.summaryRealRate.textContent = t("results.realRate", {
    rate: getDecimalFormatter(2).format(calculation.realRate * 100),
  });
  ui.summaryBequest.textContent = t("results.summaryBequest", {
    amount: money.format(calculation.bequest),
  });
  ui.resultMeta.textContent = `${t("results.overYears", { years: calculation.years })} · ${t(
    "results.realRate",
    { rate: getDecimalFormatter(2).format(calculation.realRate * 100) },
  )}`;
}

function buildScenarioScale({ min, max, step, majorEvery, labelFormatter }) {
  const marks = [];
  const span = max - min;
  let index = 0;

  for (let current = min; current <= max + step / 2; current += step) {
    const roundedValue = Number(current.toFixed(4));
    const position = span === 0 ? 0 : ((roundedValue - min) / span) * 100;
    const isMajor = index % majorEvery === 0 || Math.abs(roundedValue - max) < step / 2;
    marks.push(`
      <span class="scenario-mark ${isMajor ? "is-major" : "is-minor"}" style="left: ${position}%;">
        <span class="scenario-mark-line"></span>
        ${isMajor ? `<span class="scenario-mark-label">${labelFormatter(roundedValue)}</span>` : ""}
      </span>
    `);
    index += 1;
  }

  return `<div class="scenario-scale" aria-hidden="true">${marks.join("")}</div>`;
}

function getScenarioCardCopy(index, value) {
  const isEnglish = state.locale === "en";
  const signedValue = `${value >= 0 ? "+" : ""}${getDecimalFormatter(1).format(value)}`;
  const pointWord = Math.abs(value) <= 1.5 ? "point" : "points";

  if (index === 0) {
    return isEnglish
      ? {
          title: `Inflation ${signedValue} ${pointWord}`,
          description: `Same lifespan, inflation adjusted by ${signedValue} ${pointWord}.`,
        }
      : {
          title: `Inflation ${signedValue} ${pointWord}`,
          description: `Même horizon de vie, inflation ajustée de ${signedValue} ${pointWord}.`,
        };
  }

  if (index === 1) {
    return isEnglish
      ? {
          title: `Return ${signedValue} ${pointWord}`,
          description: `Same lifespan, net portfolio return adjusted by ${signedValue} ${pointWord}.`,
        }
      : {
          title: `Rendement ${signedValue} ${pointWord}`,
          description: `Même horizon de vie, rendement annuel net du patrimoine ajusté de ${signedValue} ${pointWord}.`,
        };
  }

  const roundedYears = Math.round(value);
  const signedYears = `${roundedYears >= 0 ? "+" : ""}${roundedYears}`;
  const yearWord = isEnglish
    ? (Math.abs(roundedYears) <= 1 ? "year" : "years")
    : Math.abs(roundedYears) <= 1
      ? "an"
      : "ans";

  return isEnglish
    ? {
        title: `${signedYears} ${yearWord}`,
        description: `Same inflation, lifespan adjusted by ${signedYears} ${yearWord}.`,
      }
    : {
        title: `${signedYears} ${yearWord}`,
        description: `Même inflation, horizon de vie ajusté de ${signedYears} ${yearWord}.`,
      };
}

function buildScenarioCard(index, baseValues, baseCalculation) {
  const adjustments = [
    { inflationOffset: state.scenarioControls.inflationOffset, returnOffset: 0, endAgeOffset: 0 },
    { inflationOffset: 0, returnOffset: state.scenarioControls.returnOffset, endAgeOffset: 0 },
    { inflationOffset: 0, returnOffset: 0, endAgeOffset: state.scenarioControls.extraYears },
  ];
  const adjustedValues = {
    ...baseValues,
    inflationRate: baseValues.inflationRate + adjustments[index].inflationOffset,
    returnRate: baseValues.returnRate + adjustments[index].returnOffset,
    endAge: baseValues.endAge + adjustments[index].endAgeOffset,
  };
  const calculation = calculatePlanner(adjustedValues);
  const diff = calculation.monthlySpending - baseCalculation.monthlySpending;
  const money = getCurrencyFormatter();
  const card = document.createElement("article");
  card.className = "scenario-card";
  let controlLabel = "";
  let controlValue = "";
  let min = 0;
  let max = 10;
  let step = 1;
  let value = 0;
  let controlKey = "";
  let scaleFormatter = (markValue) => String(markValue);
  let majorEvery = 1;
  let cardCopy = getScenarioCardCopy(index, value);

  if (index === 0) {
    controlKey = "inflationOffset";
    controlLabel = t("scenario.sliderLabelInflation");
    value = state.scenarioControls.inflationOffset;
    controlValue = `${getDecimalFormatter(1).format(value)} pt`;
    min = -2;
    max = 4;
    step = 0.5;
    scaleFormatter = (markValue) => getDecimalFormatter(0).format(markValue);
    majorEvery = 2;
  } else if (index === 1) {
    controlKey = "returnOffset";
    controlLabel = t("scenario.sliderLabelReturn");
    value = state.scenarioControls.returnOffset;
    controlValue = `${getDecimalFormatter(1).format(value)} pt`;
    min = -2;
    max = 4;
    step = 0.5;
    scaleFormatter = (markValue) => getDecimalFormatter(0).format(markValue);
    majorEvery = 2;
  } else {
    controlKey = "extraYears";
    controlLabel = t("scenario.sliderLabelYears");
    value = state.scenarioControls.extraYears;
    const roundedYears = Math.round(value);
    const yearSuffix =
      state.locale === "en"
        ? Math.abs(roundedYears) <= 1
          ? "year"
          : "years"
        : Math.abs(roundedYears) <= 1
          ? "an"
          : "ans";
    controlValue = `${roundedYears} ${yearSuffix}`;
    min = -10;
    max = 15;
    step = 1;
    scaleFormatter = (markValue) => `${Math.round(markValue)}`;
    majorEvery = 5;
  }
  cardCopy = getScenarioCardCopy(index, value);

  card.innerHTML = `
    <div class="scenario-control">
      <div class="scenario-control-head">
        <span>${controlLabel}</span>
        <span class="scenario-control-value">${controlValue}</span>
      </div>
      <div class="scenario-slider-shell">
        <input class="scenario-slider" type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-scenario-control="${controlKey}" />
        ${buildScenarioScale({
          min,
          max,
          step,
          majorEvery,
          labelFormatter: scaleFormatter,
        })}
      </div>
    </div>
    <h3>${cardCopy.title}</h3>
    <p>${cardCopy.description}</p>
    <p class="scenario-value">${Number.isFinite(calculation.monthlySpending) ? money.format(calculation.monthlySpending) : "—"}</p>
    <p>${t("scenario.monthly")}</p>
    <p class="scenario-delta ${diff < 0 ? "is-negative" : "is-positive"}">${t("scenario.delta", {
      delta: Number.isFinite(diff) ? `${diff >= 0 ? "+" : ""}${money.format(diff)}` : "—",
    })}</p>
  `;
  return card;
}

function renderPremiumPanels(values, calculation) {
  if (!values || !calculation || !Number.isFinite(calculation.monthlySpending)) {
    ui.scenarioGrid.innerHTML = "";
    ui.sensitivityGrid.innerHTML = "";
    ui.reverseRequiredCapital.textContent = "—";
    ui.reverseSummaryNote.textContent = "";
    ui.reverseCurrentPatrimonyNote.textContent = "";
    ui.incomeTotalMonthly.textContent = "—";
    ui.incomeSummaryNote.textContent = "";
    renderInteractiveChart({
      svg: ui.reverseChart,
      tooltip: ui.reverseChartTooltip,
      tooltipAgeEl: ui.reverseChartTooltipAge,
      tooltipWorthEl: ui.reverseChartTooltipWorth,
      points: [],
      currentAge: 0,
      endAge: 1,
    });
    renderInteractiveChart({
      svg: ui.incomeChart,
      tooltip: ui.incomeChartTooltip,
      tooltipAgeEl: ui.incomeChartTooltipAge,
      tooltipWorthEl: ui.incomeChartTooltipWorth,
      points: [],
      currentAge: 0,
      endAge: 1,
    });
    return;
  }

  ui.scenarioGrid.innerHTML = "";
  [0, 1, 2].forEach((index) => ui.scenarioGrid.appendChild(buildScenarioCard(index, values, calculation)));
  ui.scenarioGrid.querySelectorAll(".scenario-card").forEach((card) => {
    const valueEl = card.querySelector(".scenario-value");
    const deltaEl = card.querySelector(".scenario-delta");
    if (!valueEl || !deltaEl) {
      return;
    }
    const unitEl = deltaEl.previousElementSibling;
    if (!unitEl || unitEl === valueEl || unitEl.classList.contains("scenario-result-row")) {
      return;
    }
    const row = document.createElement("div");
    row.className = "scenario-result-row";
    const movedValue = valueEl.cloneNode(true);
    const movedUnit = unitEl.cloneNode(true);
    movedUnit.className = "scenario-unit";
    row.appendChild(movedValue);
    row.appendChild(movedUnit);
    valueEl.replaceWith(row);
    unitEl.remove();
  });

  const money = getCurrencyFormatter();
  const targetMonthly = parseAmount(ui.targetMonthly.value || "0");
  const reverseCapital = requiredCapitalForTarget(values, targetMonthly);
  ui.reverseRequiredCapital.textContent = Number.isFinite(reverseCapital) ? money.format(reverseCapital) : "—";
  ui.reverseSummaryNote.textContent = t("reverse.note", {
    monthly: money.format(targetMonthly || 0),
    years: calculation.years,
    bequest: money.format(values.bequest),
  });
  const reachedAge = ageReachedWithCurrentPatrimony(values, targetMonthly);
  if (reachedAge) {
    ui.reverseCurrentPatrimonyNote.textContent = t(
      reachedAge.beyond ? "reverse.currentPatrimonyBeyond" : "reverse.currentPatrimonyAge",
      { age: Math.floor(reachedAge.age) },
    );
  } else {
    ui.reverseCurrentPatrimonyNote.textContent = "";
  }
  const reversePoints = Number.isFinite(reverseCapital)
    ? buildProjectionPoints({
        startAge: values.currentAge,
        endAge: values.endAge,
        startingBalance: reverseCapital,
        annualWithdrawal: Math.max(0, targetMonthly) * 12,
        realRate: calculation.realRate,
        floorBalance: values.bequest,
      })
    : [];
  renderInteractiveChart({
    svg: ui.reverseChart,
    tooltip: ui.reverseChartTooltip,
    tooltipAgeEl: ui.reverseChartTooltipAge,
    tooltipWorthEl: ui.reverseChartTooltipWorth,
    points: reversePoints,
    currentAge: values.currentAge,
    endAge: values.endAge,
  });

  const extraIncome = parseAmount(ui.extraIncome.value || "0");
  const incomeScenario = calculateIncomeScenario(values, Number.isFinite(extraIncome) ? extraIncome : 0);
  ui.incomeTotalMonthly.textContent = Number.isFinite(incomeScenario.monthlySpending)
    ? money.format(incomeScenario.monthlySpending)
    : "â€”";
  ui.incomeSummaryNote.textContent = incomeScenario.incomeWindow.isFullHorizon
    ? t("income.note", {
        portfolio: money.format(calculation.monthlySpending),
        extra: money.format(extraIncome || 0),
      })
    : t("income.noteWindow", {
        startAge: incomeScenario.incomeWindow.startAge,
        endAge: incomeScenario.incomeWindow.endAge,
      });
  const incomePoints = incomeScenario.points;
  renderInteractiveChart({
    svg: ui.incomeChart,
    tooltip: ui.incomeChartTooltip,
    tooltipAgeEl: ui.incomeChartTooltipAge,
    tooltipWorthEl: ui.incomeChartTooltipWorth,
    points: incomePoints,
    currentAge: values.currentAge,
    endAge: values.endAge,
  });

  const ages = [values.endAge - 10, values.endAge - 5, values.endAge, values.endAge + 5, values.endAge + 10]
    .filter((age, index, arr) => age > values.currentAge + 1 && arr.indexOf(age) === index);
  ui.sensitivityGrid.innerHTML = "";
  ages.forEach((age) => {
    const scenario = calculatePlanner({ ...values, endAge: age });
    const delta = scenario.monthlySpending - calculation.monthlySpending;
    const card = document.createElement("article");
    card.className = "sensitivity-card";
    const deltaMarkup =
      Math.round(delta) === 0
        ? ""
        : `<p class="sensitivity-card-delta ${delta >= 0 ? "scenario-delta is-positive" : "scenario-delta is-negative"}">${t("sensitivity.delta", {
            delta: `${delta >= 0 ? "+" : ""}${money.format(delta)}`,
            reference: `${Math.round(values.endAge)} ${t("fields.endAge.suffix")}`,
          })}</p>`;
    card.innerHTML = `
      <h3>${Math.round(age)} ${t("fields.endAge.suffix")}</h3>
      <p class="sensitivity-card-value">${Number.isFinite(scenario.monthlySpending) ? money.format(scenario.monthlySpending) : "—"}</p>
      <p>${t("sensitivity.monthly")}</p>
      ${deltaMarkup}
    `;
    ui.sensitivityGrid.appendChild(card);
  });
}

function applyTranslations() {
  document.documentElement.lang = translations[state.locale].htmlLang;
  document.title = translations[state.locale].pageTitle;
  ui.languageSwitch.textContent = state.locale === "fr" ? "EN" : "FR";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translated = t(element.dataset.i18n);
    if (typeof translated === "string") {
      element.textContent = translated;
    }
  });
  ui.promoCode.placeholder = config.promoCode;
}

function formatAmountFields() {
  [fields.netWorth, fields.bequest, ui.targetMonthly, ui.extraIncome].forEach((input) => {
    const amount = parseAmount(input.value || "0");
    if (Number.isFinite(amount)) {
      formatAmountInput(input, amount);
    }
  });
}

function setPaymentStatus(message) {
  ui.paymentStatus.textContent = message || "";
}

function updateAccessUI() {
  ui.tabButtons.forEach((button) => {
    const premium = premiumTabs.includes(button.dataset.tab);
    button.classList.toggle("is-unlocked", premium && state.premiumUnlocked);
  });
  ui.betaBanner.classList.toggle("hidden", !(config.betaFreeAccess || !config.paymentsEnabled) || state.premiumUnlocked);
  const buttonLabel = config.paymentsEnabled && !config.betaFreeAccess ? null : t("pricing.betaCta");
  ui.paymentButtons.forEach((button) => {
    const span = button.querySelector("span");
    if (buttonLabel) {
      span.textContent = buttonLabel;
    } else {
      span.textContent = t(`pricing.${button.dataset.paymentTier}.cta`);
    }
  });
}

if (state.analyticsConsent === "granted") {
  loadAnalytics();
}

function persistPremiumAccess() {
  localStorage.setItem("planner-premium-unlocked", state.premiumUnlocked ? "true" : "false");
}

function refresh() {
  clearErrors();
  const values = readBaseValues();
  syncIncomeAgeInputs(values);
  const errors = validate(values);
  if (Object.keys(errors).length) {
    Object.entries(errors).forEach(([fieldName, message]) => setError(fieldName, message));
    renderResults({ annualSpending: Number.NaN });
    renderChart({ points: [] }, values.currentAge || 0, values.endAge || 1);
    renderPremiumPanels(null, null);
    return;
  }
  const calculation = calculatePlanner(values);
  lastValues = values;
  lastCalculation = calculation;
  renderResults(calculation);
  renderChart(calculation, values.currentAge, values.endAge);
  renderPremiumPanels(values, calculation);
}

function effectivePanel(nextTab) {
  if (premiumTabs.includes(nextTab) && !state.premiumUnlocked) {
    return "unlock";
  }
  return nextTab;
}

function toggleTab(nextTab) {
  state.activeTab = nextTab;
  const visiblePanel = effectivePanel(nextTab);
  ui.tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === nextTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  ui.panels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.panel !== visiblePanel);
  });
  ui.basicOnlyPanels.forEach((panel) => {
    panel.classList.toggle("hidden", nextTab !== "basic");
  });
}

function applyFade() {
  document.body.classList.remove("page-fade");
  void document.body.offsetWidth;
  document.body.classList.add("page-fade");
}

function unlockPremium(message, tab = "scenarios") {
  state.premiumUnlocked = true;
  persistPremiumAccess();
  updateAccessUI();
  setPaymentStatus(message || t("pricing.unlocked"));
  toggleTab(tab);
  refresh();
}

function openPricingSection() {
  toggleTab(state.premiumUnlocked ? "scenarios" : "unlock");
  document.getElementById("payment-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handlePaymentClick(tier) {
  if (!config.paymentsEnabled || config.betaFreeAccess) {
    unlockPremium(t("pricing.unlocked"), tier === "light" ? "scenarios" : tier === "standard" ? "reverse" : "income");
    return;
  }
  const paymentUrl = config.paymentLinks?.[tier];
  if (paymentUrl) {
    window.location.href = paymentUrl;
    return;
  }
  setPaymentStatus(t("pricing.statusPlaceholder"));
}

function handlePromoSubmit() {
  if (ui.promoCode.value.trim().toUpperCase() === String(config.promoCode || "GRATUIT").toUpperCase()) {
    unlockPremium(t("promo.success"));
    return;
  }
  setPaymentStatus(t("promo.invalid"));
}

async function handleIdeasSubmit(event) {
  event.preventDefault();
  const name = ui.ideasName.value.trim();
  const email = ui.ideasEmail.value.trim();
  const message = ui.ideasMessage.value.trim();

  if (!message || !email) {
    ui.ideasStatus.textContent = t("ideas.invalid");
    return;
  }

  if (config.contactEndpoint) {
    try {
      const response = await fetch(config.contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) {
        throw new Error("contact endpoint failed");
      }
      ui.ideasStatus.textContent = t("ideas.sentEndpoint");
      ui.ideasForm.reset();
      return;
    } catch (_error) {
      ui.ideasStatus.textContent = t("ideas.missingConfig");
      return;
    }
  }

  if (config.contactEmail) {
    const subject =
      state.locale === "fr"
        ? "Remarques / questions sur l'outil"
        : "Feedback / questions about the tool";
    const body = [
      name ? `${state.locale === "fr" ? "Nom" : "Name"}: ${name}` : "",
      `${state.locale === "fr" ? "Email" : "Email"}: ${email}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${encodeURIComponent(config.contactEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    ui.ideasStatus.textContent = t("ideas.sentMailto");
    return;
  }

  ui.ideasStatus.textContent = t("ideas.missingConfig");
}

ui.languageSwitch.addEventListener("click", () => {
  state.locale = state.locale === "fr" ? "en" : "fr";
  localStorage.setItem("planner-locale", state.locale);
  applyTranslations();
  applyFade();
  formatAmountFields();
  updateAccessUI();
  refresh();
});

ui.tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleTab(button.dataset.tab);
  });
});

Object.values(fields).forEach((input) => {
  input.addEventListener("input", refresh);
  if (["netWorth", "bequest"].includes(input.name)) {
    input.addEventListener("blur", () => {
      const amount = parseAmount(input.value);
      if (Number.isFinite(amount)) {
        formatAmountInput(input, amount);
      }
      refresh();
    });
  }
});

[ui.targetMonthly, ui.extraIncome].forEach((input) => {
  input.addEventListener("input", refresh);
  input.addEventListener("blur", () => {
    const amount = parseAmount(input.value || "0");
    if (Number.isFinite(amount)) {
      formatAmountInput(input, amount);
    }
    refresh();
  });
});

[ui.incomeStartAge, ui.incomeEndAge].forEach((input) => {
  input.addEventListener("change", refresh);
  input.addEventListener("blur", refresh);
});

ui.unlockCta?.addEventListener("click", openPricingSection);
ui.betaUnlockButton?.addEventListener("click", () => unlockPremium(t("pricing.unlocked")));
ui.promoSubmit?.addEventListener("click", handlePromoSubmit);
ui.promoCode?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handlePromoSubmit();
  }
});
ui.consentAccept?.addEventListener("click", () => setAnalyticsConsent("granted"));
ui.consentDeny?.addEventListener("click", () => setAnalyticsConsent("denied"));
ui.consentManage?.addEventListener("click", () => {
  state.consentBannerOpen = true;
  updateConsentUI();
});
ui.ideasForm?.addEventListener("submit", handleIdeasSubmit);
ui.scenarioGrid?.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  const control = target.dataset.scenarioControl;
  if (!control) {
    return;
  }
  state.scenarioControls[control] = Number(target.value);
  if (lastValues && lastCalculation) {
    renderPremiumPanels(lastValues, lastCalculation);
  }
});

ui.paymentButtons.forEach((button) => {
  button.addEventListener("click", () => handlePaymentClick(button.dataset.paymentTier));
});

applyTranslations();
formatAmountFields();
updateAccessUI();
updateConsentUI();
toggleTab("basic");
refresh();
