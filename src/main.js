// FreshCart - Main Application Controller with Full Security & DPDP Compliance
import './style.css';
import { 
  INITIAL_FARMERS, 
  INITIAL_PRODUCTS, 
  DELIVERY_SLOTS, 
  INITIAL_ORDERS, 
  I18N, 
  SECURITY_CONFIG, 
  INITIAL_SESSIONS, 
  INITIAL_AUDIT_LOGS,
  INITIAL_USERS
} from './data.js';

// Application State
const state = {
  role: 'consumer', // 'consumer' | 'farmer' | 'rider' | 'admin'
  farmerTab: 'today', // 'today' | 'produce' | 'orders' | 'earnings'
  adminTab: 'audit', // 'audit' | 'kyc' | 'rbac' | 'dpdp'
  currentTab: 'home', // 'home' | 'browse' | 'cart' | 'orders' | 'profile' | 'auth'
  lang: 'en', // 'en' | 'hi'
  frameMode: 'normal', // 'normal' | 'expanded'
  
  // Data
  farmers: JSON.parse(JSON.stringify(INITIAL_FARMERS)),
  products: JSON.parse(JSON.stringify(INITIAL_PRODUCTS)),
  orders: JSON.parse(JSON.stringify(INITIAL_ORDERS)),
  slots: JSON.parse(JSON.stringify(DELIVERY_SLOTS)),
  sessions: JSON.parse(JSON.stringify(INITIAL_SESSIONS)),
  auditLogs: JSON.parse(JSON.stringify(INITIAL_AUDIT_LOGS)),
  securityConfig: SECURITY_CONFIG,
  
  // Auth & User State
  users: JSON.parse(JSON.stringify(INITIAL_USERS)),
  currentUser: JSON.parse(JSON.stringify(INITIAL_USERS[0])), // Priya Sharma by default
  authMode: 'login', // 'login' | 'register'
  isPasswordVisible: false,
  authPhone: '+91 98765 43210',
  isOtpSent: false,
  authConsumerStep: 'phone', // 'phone' | 'otp' | 'address'
  consumerPhoneInput: '9876543210',
  consumerOtpDigits: ['8', '4', '9', '2', '0', '1'],
  consumerOtpTimer: 28,
  consumerAddressFlat: 'Flat A-402, Sunrise Enclave',
  consumerAddressTag: 'Home',

  // Cart: { productId: quantity }
  cart: {
    'prod-1': 1,
    'prod-2': 2
  },
  selectedSlotId: 'slot-1',
  paymentMode: 'upi',
  dpdpConsent: true,
  
  // Filters & Search
  searchQuery: '',
  selectedCategory: 'all',
  
  // Modals
  activeProductModal: null,
  activeFarmerModal: null,
  isAddHarvestOpen: false,
  isReportIssueOpen: false,
  isKycModalOpen: false,
  selectedKycFarmer: null,
  isOtpModalOpen: false,
  otpCountdown: 300,
  toastMessage: null,
  
  // Rider delivery OTP input
  riderOtpInput: '',
  
  // Farmer add harvest
  newHarvest: {
    name: 'Desi Palak (Country Spinach)',
    category: 'Leafy',
    qty: 30,
    price: 35,
    unit: '500g bunch',
    image: '/images/veg_spinach.jpg'
  }
};

// SVG Icon Helper
function icon(name, size = 20, extraClass = '') {
  const icons = {
    home: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    search: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    shoppingBag: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    package: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
    user: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    mapPin: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    chevronRight: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    chevronDown: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    check: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    close: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    shieldCheck: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
    phone: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    leaf: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    clock: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    sun: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    truck: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
    smartphone: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
    maximize: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>`,
    plus: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`,
    lock: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    key: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>`,
    fileText: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
    download: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    trendingUp: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    phoneCall: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mail: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    eye: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    eyeOff: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`,
    arrowLeft: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
    userPlus: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>`,
    logOut: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
    logIn: `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>`
  };
  return icons[name] || '';
}

// Translation Helper
function t(key) {
  return I18N[state.lang][key] || key;
}

// Add Immutable Security Audit Log (Sec 12)
function recordAuditLog(event, actor, target, severity, detail) {
  const newLog = {
    id: `log-${Date.now()}`,
    timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }) + ' IST',
    event,
    actor,
    target,
    severity,
    detail
  };
  state.auditLogs.unshift(newLog);
}

// Calculate Cart Totals
function getCartDetails() {
  let subtotal = 0;
  let itemCount = 0;
  const items = [];

  for (const [prodId, qty] of Object.entries(state.cart)) {
    if (qty > 0) {
      const prod = state.products.find(p => p.id === prodId);
      if (prod) {
        subtotal += prod.price * qty;
        itemCount += qty;
        items.push({ product: prod, qty });
      }
    }
  }

  const deliveryFee = itemCount > 0 ? 20 : 0;
  const farmerSupportFee = itemCount > 0 ? 10 : 0;
  const packagingFee = 0;
  const total = subtotal + deliveryFee + farmerSupportFee;

  return { subtotal, deliveryFee, farmerSupportFee, packagingFee, total, itemCount, items };
}

// Show Toast
function showToast(msg) {
  state.toastMessage = msg;
  renderApp();
  setTimeout(() => {
    if (state.toastMessage === msg) {
      state.toastMessage = null;
      renderApp();
    }
  }, 3200);
}

// Render Top Prototype Toolbar with RBAC Switcher (Sec 5.2)
function renderTopToolbar() {
  return `
    <div class="proto-top-bar">
      <div class="proto-brand">
        <img src="/images/logo.jpg" alt="FreshCart" class="proto-brand-logo" />
        <div>
          <div class="proto-brand-title">FreshCart</div>
          <div class="proto-brand-subtitle">${t('tagline')}</div>
        </div>
      </div>

      <div class="proto-controls">
        <!-- 4-Way RBAC Role Switcher (Section 5.2) -->
        <div class="role-pill">
          <button class="${state.role === 'consumer' ? 'active' : ''}" id="btn-role-consumer" title="Consumer Role">
            👤 Priya (Buyer)
          </button>
          <button class="${state.role === 'farmer' ? 'active' : ''}" id="btn-role-farmer" title="Farmer Role">
            🌾 Ramesh (Farmer)
          </button>
          <button class="${state.role === 'rider' ? 'active' : ''}" id="btn-role-rider" title="Rider Role">
            🛵 Amit (Rider)
          </button>
          <button class="${state.role === 'admin' ? 'active' : ''}" id="btn-role-admin" title="Admin & Security Role">
            🛡️ Security / Admin
          </button>
        </div>

        <!-- Language Switcher -->
        <button class="proto-btn" id="btn-toggle-lang" title="Switch Language">
          🌐 ${state.lang === 'en' ? 'English' : 'हिंदी'}
        </button>

        <!-- User Authentication Status -->
        <button class="proto-user-btn" id="proto-auth-btn" title="Open Sign In / Login Page">
          ${state.currentUser ? icon('user', 14) + ' ' + state.currentUser.name.split(' ')[0] : icon('logIn', 14) + ' Sign In'}
        </button>

        <!-- Device Size Toggle -->
        <button class="proto-btn" id="btn-toggle-device" title="Toggle Bezel Mode">
          ${state.frameMode === 'normal' ? icon('maximize', 14) + ' Expand' : icon('smartphone', 14) + ' Phone'}
        </button>

        <!-- Simulation Step Action -->
        ${state.role === 'consumer' ? `
          <button class="proto-btn active" id="btn-sim-order-step" title="Simulate real-time delivery state">
            ⚡ Advance Order
          </button>
        ` : state.role === 'farmer' ? `
          <button class="proto-btn active" id="btn-farmer-add-harvest" title="Add Today's Morning Harvest">
            ${icon('plus', 14)} Add Harvest
          </button>
        ` : state.role === 'rider' ? `
          <button class="proto-btn active" id="btn-rider-sim-progress" title="Simulate Rider Arrival">
            🛵 Arrived at Door
          </button>
        ` : `
          <button class="proto-btn active" id="btn-admin-certin" title="CERT-In Compliance Check">
            ✓ CERT-In 6h SLA
          </button>
        `}
      </div>
    </div>
  `;
}

// Render Header in Consumer Mode
function renderConsumerHeader() {
  return `
    <header class="consumer-header">
      <!-- Farm-to-Door Morning Delivery Chip -->
      <div class="veggi-delivery-chip">
        <span class="veggi-pulse-dot"></span>
        <span>🌅 ${state.lang === 'en' ? 'MORNING HARVEST · 7:00 AM – 9:00 AM' : 'सुबह की ताज़ा कटाई · 7:00 AM – 9:00 AM'}</span>
      </div>

      <div class="header-top-row">
        <div class="header-location-box" id="header-loc-trigger">
          <div class="header-location-icon">
            ${icon('mapPin', 18)}
          </div>
          <div class="header-location-text">
            <div class="location-label">${state.lang === 'en' ? 'Delivering to' : 'डिलीवरी पता'}</div>
            <div class="location-address">
              ${state.currentUser?.address ? state.currentUser.address.split(',')[0] : 'Sunrise Enclave, Sec 14'} ${icon('chevronDown', 13)}
            </div>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:8px;">
          <!-- User / Auth Button -->
          <button class="header-auth-pill" id="header-auth-trigger" title="${state.currentUser ? 'Account & Profile' : 'Sign In / Login'}">
            ${state.currentUser ? `
              <img src="${state.currentUser.avatar}" alt="${state.currentUser.name}" class="header-user-avatar" />
              <span>${state.currentUser.name.split(' ')[0]}</span>
              
            ` : `
              ${icon('user', 14)}
              <span>${state.lang === 'en' ? 'Sign In' : 'लॉग इन'}</span>
            `}
          </button>

          <button class="lang-switch-btn" id="header-lang-btn">
            ${state.lang === 'en' ? 'अ/A हिंदी' : 'A/अ EN'}
          </button>
        </div>
      </div>

      <div class="header-greeting-row">
        <div class="greeting-text">
          <div class="veggi-brand-pill">🥦 FreshCart • 100% Farm Fresh</div>
          <h1>${state.currentUser ? (state.lang === 'en' ? `Namaste, ${state.currentUser.name.split(' ')[0]}` : `नमस्ते, ${state.currentUser.name.split(' ')[0]} जी`) : (state.lang === 'en' ? 'Namaste, Guest' : 'नमस्ते, अतिथि')}</h1>
          <div class="greeting-tagline">${t('taglineSub')}</div>
        </div>
      </div>

      <div class="header-search-bar">
        ${icon('search', 18)}
        <input 
          type="text" 
          id="search-input" 
          placeholder="${t('searchPlaceholder')}" 
          value="${state.searchQuery}"
        />
        ${state.searchQuery ? `
          <button id="clear-search" style="background:none;border:none;cursor:pointer;color:var(--ink-muted)">
            ${icon('close', 14)}
          </button>
        ` : ''}
      </div>
    </header>
  `;
}

// Render FreshCart Flash Harvest Promo Slider
function renderVeggiPromoSlider() {
  return `
    <div class="veggi-promo-slider">
      <div class="veggi-promo-card emerald" data-promo="flash">
        <div>
          <span class="promo-card-tag">🌱 ${state.lang === 'en' ? 'HARVEST FLASH SALE' : 'सुबह की ताज़ा सेल'}</span>
          <div class="promo-card-title">${state.lang === 'en' ? "Flat 35% OFF on Today's Harvest" : 'आज की ताज़ा कटाई पर 35% छूट'}</div>
          <div class="promo-card-desc">${state.lang === 'en' ? 'Zero cold storage · Picked at 5:30 AM today' : 'बिना कोल्ड स्टोरेज · सुबह 5:30 बजे ताज़ी कटी'}</div>
        </div>
        <div class="promo-card-bottom">
          <span>${state.lang === 'en' ? 'Use Code:' : 'कोड:'} <strong class="promo-code-badge">FRESH35</strong></span>
          <span>${state.lang === 'en' ? 'Claim Deal ➔' : 'ऑफ़र लें ➔'}</span>
        </div>
      </div>

      <div class="veggi-promo-card amber" data-promo="slots">
        <div>
          <span class="promo-card-tag">🌅 ${state.lang === 'en' ? 'MORNING SLOTS' : 'सुबह के स्लॉट'}</span>
          <div class="promo-card-title">${state.lang === 'en' ? 'Picked at Dawn · Delivered by 9 AM' : 'सुबह की कटाई · 9 AM तक घर पर'}</div>
          <div class="promo-card-desc">${state.lang === 'en' ? 'Free farm delivery on orders above ₹149' : '₹149 से ऊपर के ऑर्डर पर फ्री डिलीवरी'}</div>
        </div>
        <div class="promo-card-bottom">
          <span>${state.lang === 'en' ? '7:00 AM – 9:00 AM Slot' : '7:00 AM – 9:00 AM स्लॉट'}</span>
          <span>${state.lang === 'en' ? 'Select Slot ➔' : 'स्लॉट चुनें ➔'}</span>
        </div>
      </div>

      <div class="veggi-promo-card teal" data-promo="direct">
        <div>
          <span class="promo-card-tag">🛡️ ${state.lang === 'en' ? 'DIRECT TO FARMER' : 'सीधे किसान से'}</span>
          <div class="promo-card-title">${state.lang === 'en' ? '100% Direct MSP Payout' : 'किसान को 100% सीधा भुगतान'}</div>
          <div class="promo-card-desc">${state.lang === 'en' ? 'DPDP 2023 protected & bank penny-drop verified' : 'डीपीडीपी 2023 संरक्षित व बैंक सत्यापित'}</div>
        </div>
        <div class="promo-card-bottom">
          <span>${state.lang === 'en' ? 'Zero Middlemen' : 'शून्य बिचौलिए'}</span>
          <span>${state.lang === 'en' ? 'Explore Farms ➔' : 'किसान देखें ➔'}</span>
        </div>
      </div>
    </div>
  `;
}

// Render Freshness Banner Ribbon with Security Seal
function renderFreshnessRibbon() {
  return `
    <div class="freshness-banner-ribbon">
      <div class="ribbon-icon">
        ${icon('leaf', 18)}
      </div>
      <div class="ribbon-text">
        <strong>${state.lang === 'en' ? 'Direct Farm Transparency & Security' : 'सीधे खेत से पारदर्शिता व सुरक्षा'}</strong>
        ${state.lang === 'en' 
          ? 'Harvested today at dawn. 100% direct payment to farmers with bank penny-drop verification. DPDP 2023 protected.'
          : 'आज सुबह की ताज़ा कटाई। बैंक पेनी-ड्रॉप से सत्यापित किसान। डीपीडीपी 2023 अधिनियम से पूरी तरह सुरक्षित।'}
      </div>
    </div>
  `;
}

// Render Nearby Farms Carousel
function renderNearbyFarms() {
  return `
    <div class="section-header">
      <div>
        <h2>${t('nearbyFarms')}</h2>
        <div class="subtext">${state.lang === 'en' ? 'Within 5 km radius of your location' : 'आपके स्थान से 5 किमी के भीतर'}</div>
      </div>
    </div>

    <div class="farms-scroll-row">
      ${state.farmers.map(farmer => `
        <div class="farm-card" data-farmer-id="${farmer.id}">
          <div class="farm-card-top">
            <img src="${farmer.avatar}" alt="${farmer.name}" class="farm-avatar" />
            <div class="farm-info">
              <h3>${state.lang === 'en' ? farmer.name : farmer.hindiName}</h3>
              <div class="farm-sub">${state.lang === 'en' ? farmer.farmName : farmer.hindiFarmName}</div>
              <div class="farm-sub">📍 ${farmer.distance} · ${farmer.size}</div>
            </div>
          </div>
          <div class="farm-trust-row">
            <span class="farm-rating-badge">★ ${farmer.rating}</span>
            <span class="farm-trust-badge">${icon('shieldCheck', 12)} ${farmer.certifications[0]}</span>
            <span class="penny-drop-badge">${icon('check', 10)} KYC Verified</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Render Circular VeggiFresh Category Quick Rail
function renderCategoryPills() {
  const categories = [
    { id: 'all', emoji: '🥦', label: t('allCategories') },
    { id: 'Leafy', emoji: '🥬', label: t('leafy') },
    { id: 'Nightshades', emoji: '🍅', label: t('nightshades') },
    { id: 'Roots', emoji: '🥕', label: t('roots') },
    { id: 'Gourds', emoji: '🥒', label: t('gourds') }
  ];

  return `
    <div class="veggi-categories-rail">
      ${categories.map(c => `
        <button 
          class="veggi-cat-item ${state.selectedCategory === c.id ? 'active' : ''}" 
          data-cat="${c.id}"
          title="${c.label}"
        >
          <div class="veggi-cat-circle">${c.emoji}</div>
          <span class="veggi-cat-title">${c.label}</span>
        </button>
      `).join('')}
    </div>
  `;
}

// Render Products Grid
function renderProductsGrid() {
  let list = state.products;

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.hindiName.includes(q) || 
      p.category.toLowerCase().includes(q)
    );
  }

  if (state.selectedCategory !== 'all') {
    list = list.filter(p => p.category === state.selectedCategory);
  }

  if (list.length === 0) {
    return `
      <div class="empty-state">
        <div class="empty-state-icon">${icon('search', 32)}</div>
        <h3>${state.lang === 'en' ? 'No vegetables found' : 'कोई सब्ज़ी नहीं मिली'}</h3>
        <p style="font-size:12px; color:var(--ink-soft)">
          ${state.lang === 'en' ? 'Try searching for spinach, tomatoes or switch category' : 'पालक या देशी टमाटर खोजें'}
        </p>
      </div>
    `;
  }

  return `
    <div class="section-header" style="padding-top:8px;">
      <div>
        <h2>${t('todaysHarvest')}</h2>
        <div class="subtext">${t('todaysHarvestSub')}</div>
      </div>
      <span class="section-action">${list.length} ${state.lang === 'en' ? 'Available' : 'उपलब्ध'}</span>
    </div>

    <div class="products-grid">
      ${list.map(prod => {
        const farmer = state.farmers.find(f => f.id === prod.farmerId) || state.farmers[0];
        const qtyInCart = state.cart[prod.id] || 0;
        const isToday = prod.freshness === 'today';
        const mrp = Math.round(prod.price * 1.34);
        const discountPct = Math.round(((mrp - prod.price) / mrp) * 100);

        return `
          <div class="product-card" data-product-id="${prod.id}">
            <div class="product-card-thumb-wrap">
              <span class="discount-pill">${discountPct}% OFF</span>
              <img src="${prod.image}" alt="${prod.name}" class="product-card-thumb" loading="lazy" />
              <div class="freshness-stamp ${isToday ? 'today' : 'yesterday'}">
                ${icon('clock', 11)} ${isToday ? t('pickedToday') : t('pickedYesterday')}
              </div>
            </div>

            <div class="product-card-body">
              <div>
                <div class="product-title">${state.lang === 'en' ? prod.name : prod.hindiName}</div>
                <div class="product-farmer-name">
                  🌾 ${state.lang === 'en' ? farmer.name : farmer.hindiName} · ${farmer.distance}
                </div>
                <span class="product-savings-badge">
                  Save ₹${mrp - prod.price} vs Mandi
                </span>
              </div>

              <div class="product-card-footer">
                <div class="product-price-box">
                  <div class="product-price-row">
                    <span class="product-price">₹${prod.price}</span>
                    <span class="product-mandi-strike">₹${mrp}</span>
                  </div>
                  <span class="product-unit">/${prod.unit}</span>
                </div>

                <div class="product-action-wrap" onclick="event.stopPropagation()">
                  ${qtyInCart === 0 ? `
                    <button class="btn-add-item" data-add-prod="${prod.id}">
                      ${t('add')} +
                    </button>
                  ` : `
                    <div class="mini-stepper">
                      <button data-dec-prod="${prod.id}">−</button>
                      <span>${qtyInCart}</span>
                      <button data-inc-prod="${prod.id}">+</button>
                    </div>
                  `}
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Render Floating Basket Bar
function renderFloatingBasketBar() {
  const { total, itemCount } = getCartDetails();
  if (itemCount === 0 || state.currentTab === 'cart') return '';

  return `
    <div class="floating-basket-bar" id="floating-basket-trigger">
      <div class="floating-basket-left">
        <span class="basket-count-chip">${itemCount} ${state.lang === 'en' ? 'items' : 'वस्तुएं'}</span>
        <span class="floating-basket-price">₹${total}</span>
      </div>
      <div class="floating-basket-right">
        <span>${t('viewBasket')}</span>
        ${icon('chevronRight', 16)}
      </div>
    </div>
  `;
}

// Render Cart Screen with DPDP 2023 Consent & Idempotency Check (Sec 7, 8 & 11)
function renderCartScreen() {
  const { subtotal, deliveryFee, farmerSupportFee, packagingFee, total, itemCount, items } = getCartDetails();

  if (itemCount === 0) {
    return `
      <div class="cart-screen-view">
        <h2 class="cart-header-title">${t('cartTitle')}</h2>
        <div class="empty-state" style="margin-top: 40px;">
          <div class="empty-state-icon">
            ${icon('shoppingBag', 36)}
          </div>
          <h3 style="font-family:var(--font-serif); font-size:18px;">${t('emptyCartMsg')}</h3>
          <p style="font-size:12px; color:var(--ink-soft); max-width: 260px;">
            ${state.lang === 'en' 
              ? 'Vegetables are reserved directly from morning farm harvest with zero middlemen.'
              : 'सीधे किसान से सुबह की ताज़ा कटाई बुक करें।'}
          </p>
          <button class="btn-primary" id="btn-cart-browse" style="margin-top: 10px;">
            ${t('browseHarvestBtn')}
          </button>
        </div>
      </div>
    `;
  }

  const groupedByFarmer = {};
  items.forEach(({ product, qty }) => {
    if (!groupedByFarmer[product.farmerId]) {
      groupedByFarmer[product.farmerId] = [];
    }
    groupedByFarmer[product.farmerId].push({ product, qty });
  });

  return `
    <div class="cart-screen-view">
      <h2 class="cart-header-title">${t('cartTitle')} (${itemCount})</h2>

      <!-- 10-Minute Reservation Guarantee Banner -->
      <div class="reservation-timer-chip">
        ${icon('clock', 16)}
        <span>${t('stockReservedBanner')} (9:42 mins left)</span>
      </div>

      <!-- Items Grouped By Farmer -->
      ${Object.entries(groupedByFarmer).map(([farmerId, farmerItems]) => {
        const farmer = state.farmers.find(f => f.id === farmerId) || state.farmers[0];
        return `
          <div class="farmer-cart-group">
            <div class="cart-group-header">
              <img src="${farmer.avatar}" alt="${farmer.name}" />
              <div>
                <strong style="font-size:13px; color:var(--forest);">${state.lang === 'en' ? farmer.farmName : farmer.hindiFarmName}</strong>
                <div style="font-size:11px; color:var(--ink-soft);">🌾 ${farmer.name} · ${farmer.distance}</div>
              </div>
            </div>

            ${farmerItems.map(({ product, qty }) => `
              <div class="cart-item-row">
                <div class="cart-item-info">
                  <div class="cart-item-name">${state.lang === 'en' ? product.name : product.hindiName}</div>
                  <div class="cart-item-price-unit">₹${product.price} / ${product.unit} · <span style="color:var(--forest); font-weight:600;">${product.harvestTime}</span></div>
                </div>

                <div class="mini-stepper">
                  <button data-dec-prod="${product.id}">−</button>
                  <span>${qty}</span>
                  <button data-inc-prod="${product.id}">+</button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }).join('')}

      <!-- Delivery Slot Selection -->
      <div class="slot-select-card">
        <h4>${icon('truck', 16)} ${t('selectSlot')}</h4>
        <div class="slot-chips-list">
          ${state.slots.map(slot => `
            <div 
              class="slot-chip ${state.selectedSlotId === slot.id ? 'selected' : ''}" 
              data-slot-id="${slot.id}"
            >
              <span>${slot.title}</span>
              <span class="slot-tag">${slot.tag}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Itemized Transparent Bill (PRD FR-4.2 & Security Sec 8: Server-side calculated) -->
      <div class="bill-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <h4>${t('billDetails')}</h4>
          <span class="penny-drop-badge">${icon('lock', 10)} Server Calculated</span>
        </div>
        <div class="bill-row">
          <span>${t('subtotal')}</span>
          <span>₹${subtotal}</span>
        </div>
        <div class="bill-row">
          <span>${t('deliveryFee')} (Farm to Doorstep)</span>
          <span>₹${deliveryFee}</span>
        </div>
        <div class="bill-row">
          <span>${t('farmerSupportFee')} (100% to Ramesh/Sunita)</span>
          <span>₹${farmerSupportFee}</span>
        </div>
        <div class="bill-row">
          <span>${t('packagingFee')}</span>
          <span style="color:var(--forest); font-weight:700;">${t('free')}</span>
        </div>
        <div class="bill-row total">
          <span>${t('grandTotal')}</span>
          <span>₹${total}</span>
        </div>
      </div>

      <!-- Payment Method Selection (PCI-DSS Gateway Tokenized - Sec 8) -->
      <div class="slot-select-card">
        <h4>${t('paymentMethod')}</h4>
        <div class="payment-selector">
          <label class="pay-radio-opt ${state.paymentMode === 'upi' ? 'selected' : ''}">
            <input type="radio" name="payment" value="upi" ${state.paymentMode === 'upi' ? 'checked' : ''} />
            <div>
              <span>⚡ ${t('payUpi')}</span>
              <div style="font-size:10px; color:var(--ink-muted);">Tokenized via Razorpay · Card/UPI data never stored</div>
            </div>
          </label>
          <label class="pay-radio-opt ${state.paymentMode === 'cod' ? 'selected' : ''}">
            <input type="radio" name="payment" value="cod" ${state.paymentMode === 'cod' ? 'checked' : ''} />
            <div>
              <span>💵 ${t('payCod')}</span>
              <div style="font-size:10px; color:var(--ink-muted);">Ledger reconciled · Capped at ₹1,500 for safety</div>
            </div>
          </label>
        </div>
      </div>

      <!-- DPDP Act 2023 Explicit Consent Checkbox (Sec 11) -->
      <div class="dpdp-box" style="margin: 0;">
        <label style="display:flex; align-items:flex-start; gap:10px; cursor:pointer;">
          <input type="checkbox" id="dpdp-consent-chk" ${state.dpdpConsent ? 'checked' : ''} style="margin-top:2px;" />
          <span style="font-size:11.5px; color:var(--ink); line-height:1.4;">
            <strong>DPDP Act 2023 Consent:</strong> I agree to Freshcart processing my delivery address and masked contact strictly for fulfilling this farm-fresh order. Data is hosted in India (AWS Mumbai) and never sold.
          </span>
        </label>
      </div>

      <!-- Security Guarantee & Idempotency Token Preview (Sec 7) -->
      <div style="font-size:10.5px; color:var(--ink-muted); text-align:center;">
        🔒 Replay Protected · Idempotency Key: <code style="font-family:monospace;">fc_idem_${Math.floor(1000+Math.random()*9000)}</code>
      </div>

      <!-- Checkout Button -->
      <button class="btn-primary" id="btn-place-order" style="width:100%; height:48px; font-size:15px;">
        ${t('placeOrder')} • ₹${total}
      </button>
    </div>
  `;
}

// Render Order Live Tracking Screen (Sec 4 Location Privacy & Masked Calling)
function renderOrderTrackingScreen() {
  const currentOrder = state.orders[0];
  if (!currentOrder) {
    return `
      <div class="cart-screen-view">
        <h2 class="cart-header-title">${t('orderTrackingTitle')}</h2>
        <div class="empty-state">
          <div class="empty-state-icon">${icon('package', 36)}</div>
          <h3>${state.lang === 'en' ? 'No Active Orders' : 'कोई सक्रिय ऑर्डर नहीं'}</h3>
          <p style="font-size:12px; color:var(--ink-soft)">
            ${state.lang === 'en' ? 'Place an order from today’s harvest to track it live.' : 'आज की ताज़ा कटाई से ऑर्डर करें'}
          </p>
        </div>
      </div>
    `;
  }

  return `
    <div class="tracking-screen-view">
      <!-- Simulated Interactive Route Map with Location Privacy Pill (Sec 4) -->
      <div class="tracking-map-wrap">
        <svg class="sim-map-svg" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#E9EFEA" />
          <path d="M 0 50 Q 150 70 240 40 T 400 60" fill="none" stroke="#D3DFC8" stroke-width="26" />
          <path d="M 50 220 Q 80 140 180 120 T 360 30" fill="none" stroke="#D3DFC8" stroke-width="20" />
          <path d="M 40 180 L 120 150 L 220 130 L 320 70" fill="none" stroke="#FFF" stroke-width="12" stroke-linecap="round" />
          
          <path d="M 60 170 C 110 140, 180 140, 240 100 S 330 80, 340 60" 
                fill="none" stroke="#1F3B2C" stroke-width="5" stroke-dasharray="6,4" />
          
          <!-- Farm Pin -->
          <g transform="translate(60, 170)">
            <circle r="16" fill="#1F3B2C" />
            <text x="0" y="5" text-anchor="middle" font-size="12" fill="#fff">🌾</text>
            <text x="0" y="28" text-anchor="middle" font-size="10" font-weight="700" fill="#12251A">Patel Farm</text>
          </g>

          <!-- Customer Home Pin -->
          <g transform="translate(340, 60)">
            <circle r="16" fill="#E08A2E" />
            <text x="0" y="5" text-anchor="middle" font-size="12" fill="#fff">🏡</text>
            <text x="0" y="28" text-anchor="middle" font-size="10" font-weight="700" fill="#12251A">Your Doorstep</text>
          </g>

          <!-- Moving Delivery Rider on EV -->
          <g transform="translate(210, 115)">
            <circle r="18" fill="#fff" stroke="#1F3B2C" stroke-width="2" />
            <circle r="8" fill="#E08A2E" opacity="0.3">
              <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="0" y="5" text-anchor="middle" font-size="14">🛵</text>
          </g>
        </svg>

        <!-- Floating ETA & OTP Badge -->
        <div class="floating-eta-banner">
          <div class="eta-left">
            <div class="eta-label">${t('eta')}</div>
            <div class="eta-val">18 mins · 08:35 AM</div>
          </div>
          <div class="eta-otp-badge">
            <span>Delivery OTP</span>
            <strong>${currentOrder.deliveryOtp}</strong>
          </div>
        </div>
      </div>

      <div class="tracking-body">
        <!-- Privacy-Protected Telemetry Tag (Sec 4) -->
        <div style="background:#EEF5F1; border:1px solid #D2E7DB; border-radius:var(--radius-sm); padding:6px 10px; font-size:10.5px; color:var(--forest-dark); margin-bottom:12px; display:flex; align-items:center; gap:6px;">
          ${icon('lock', 13)}
          <span><strong>Location Privacy:</strong> Live rider GPS is streamed only while delivery is active. Numbers are masked via relay.</span>
        </div>

        <!-- Delivery Partner / Masked Phone Row -->
        <div class="tracking-partner-card">
          <div class="partner-info">
            <div class="partner-icon-wrap">
              ${icon('truck', 22)}
            </div>
            <div>
              <div style="font-size:13px; font-weight:700; color:var(--ink);">
                ${currentOrder.riderName}
              </div>
              <div style="font-size:11px; color:var(--ink-soft); display:flex; align-items:center; gap:4px;">
                <span class="masked-data-tag">${currentOrder.riderPhone}</span>
                <span class="proxy-protect-badge">Relay</span>
              </div>
            </div>
          </div>
          <div class="partner-actions">
            <button class="btn-icon-round" id="btn-call-rider-proxy" title="Call Rider via Virtual Masked Relay">
              ${icon('phone', 15)}
            </button>
            <button class="btn-icon-round" id="btn-call-farmer-proxy" title="Call Farmer via Virtual Masked Relay">
              🌾
            </button>
          </div>
        </div>

        <!-- 5-Step Order State Machine -->
        <h4 style="font-family:var(--font-serif); font-size:15px; color:var(--forest-dark); margin-bottom:10px;">
          ${state.lang === 'en' ? 'Live Harvest & Order Journey' : 'कटाई व डिलीवरी की स्थिति'}
        </h4>

        <div class="timeline-list">
          ${currentOrder.timeline.map(node => `
            <div class="timeline-node ${node.done ? 'done' : ''} ${node.current ? 'current' : ''}">
              <div class="timeline-dot">
                ${node.done ? icon('check', 11) : ''}
              </div>
              <div class="timeline-text">
                <h4>
                  <span>${node.step}</span>
                  <span class="node-time">${node.time}</span>
                </h4>
                <p>${node.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Order Items with Idempotency Token (Sec 7) -->
        <div class="bill-card" style="margin-top:12px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <h4 style="font-size:12.5px; font-weight:700;">
              ${state.lang === 'en' ? 'Harvest Items in Order' : 'इस ऑर्डर की ताज़ा सब्ज़ियां'} (${currentOrder.id})
            </h4>
            <span style="font-size:10px; font-family:monospace; color:var(--forest);">Idempotent ✓</span>
          </div>
          ${currentOrder.items.map(it => `
            <div class="bill-row">
              <span>${it.name} × ${it.qty}</span>
              <span>₹${it.price * it.qty}</span>
            </div>
          `).join('')}
          <div class="bill-row total">
            <span>${t('grandTotal')} (${currentOrder.paymentMode})</span>
            <span>₹${currentOrder.bill.total}</span>
          </div>
        </div>

        <!-- Report Issue Button (PRD FR-6.4 & Sec 8 Dual-Approval Check) -->
        <button class="btn-primary" id="btn-report-issue" style="margin-top:16px; width:100%; background:transparent; border:1.5px solid var(--forest); color:var(--forest);">
          ${state.lang === 'en' ? 'Need Help or Report Quality Issue' : 'सहायता या गुणवत्ता शिकायत दर्ज करें'}
        </button>
      </div>
    </div>
  `;
}

// Render Browse / Search View
function renderBrowseScreen() {
  return `
    <div class="cart-screen-view">
      <h2 class="cart-header-title">${t('navBrowse')} & Filter</h2>
      
      <div class="header-search-bar" style="border:1px solid var(--line);">
        ${icon('search', 18)}
        <input 
          type="text" 
          id="browse-search-input" 
          placeholder="${t('searchPlaceholder')}" 
          value="${state.searchQuery}"
        />
      </div>

      <div style="margin-top:8px;">
        <label style="font-size:12px; font-weight:700; color:var(--forest-dark); margin-bottom:6px; display:block;">
          ${state.lang === 'en' ? 'Filter by Category' : 'श्रेणी चुनें'}
        </label>
        ${renderCategoryPills()}
      </div>

      <div style="margin-top:8px;">
        ${renderProductsGrid()}
      </div>
    </div>
  `;
}

// Render Dedicated Consumer Login & Onboarding Screen (PRD FR-1.1 & FR-1.2)
function renderAuthScreen() {
  const step = state.authConsumerStep || 'phone';
  const u = state.currentUser || state.users[0];

  return `
    <div class="consumer-login-page">
      <!-- Top Navigation & Utility Bar -->
      <div class="consumer-login-topbar">
        <button class="proto-btn" id="btn-consumer-auth-back" style="padding:6px 12px; font-size:12px; gap:6px;">
          ${icon('arrowLeft', 14)} ${state.lang === 'en' ? 'Back to Market' : 'वापस जाएं'}
        </button>

        <div style="display:flex; align-items:center; gap:8px;">
          <button class="proto-btn" id="btn-consumer-lang-toggle" title="Switch Language" style="padding:6px 10px; font-size:11.5px;">
            🌐 ${state.lang === 'en' ? 'हिंदी' : 'English'}
          </button>
          <button class="proto-btn" id="btn-consumer-skip" style="padding:6px 10px; font-size:11.5px; color:var(--harvest-orange); font-weight:700;">
            ${t('skipLoginBtn')} →
          </button>
        </div>
      </div>

      <!-- Farm-to-Door Hero Header Card -->
      <div class="consumer-login-hero">
        <div class="consumer-brand-pill">
          ${icon('leaf', 12)} FreshCart Farm-to-Door
        </div>
        <h1 class="consumer-hero-title">
          ${t('consumerLoginTitle')}
        </h1>
        <p class="consumer-hero-sub">
          ${t('consumerLoginSub')}
        </p>

        <!-- Trust Badges -->
        <div class="consumer-trust-pills">
          <span class="consumer-trust-pill">
            🌿 ${state.lang === 'en' ? 'Harvested 6 AM Today' : 'आज सुबह 6 बजे की तुड़ाई'}
          </span>
          <span class="consumer-trust-pill">
            🚜 ${state.lang === 'en' ? 'Direct from Verified Farmers' : 'सीधे सत्यापित किसानों से'}
          </span>
          <span class="consumer-trust-pill">
            ⚡ ${state.lang === 'en' ? 'Under 90 Mins Delivery' : '90 मिनट में डिलीवरी'}
          </span>
        </div>
      </div>

      <!-- Multi-Step Consumer Auth Card -->
      <div class="consumer-card">
        ${step === 'phone' ? `
          <!-- STEP 1: MOBILE PHONE NUMBER -->
          <div class="consumer-step-indicator">
            <span>${state.lang === 'en' ? 'Step 1 of 3 • Mobile Verification' : 'चरण 1 / 3 • मोबाइल सत्यापन'}</span>
            <span style="color:var(--ink-soft); font-weight:500;">FR-1.1 PRD</span>
          </div>

          <label style="font-size:13px; font-weight:700; color:var(--forest-dark); display:block; margin-bottom:8px;">
            ${t('enterMobileLabel')}
          </label>

          <div class="consumer-phone-group">
            <div class="country-code-pill">
              <span>🇮🇳</span>
              <span>+91</span>
            </div>
            <input 
              type="tel" 
              id="input-consumer-phone" 
              class="consumer-phone-input" 
              placeholder="98765 43210" 
              maxlength="10" 
              value="${state.consumerPhoneInput || '9876543210'}" 
            />
          </div>

          <!-- Quick 1-Tap Fill for Evaluators -->
          <button type="button" class="quick-helper-btn" id="btn-fill-priya-phone">
            ⚡ ${state.lang === 'en' ? "1-Tap Fill Priya's Number (Consumer Demo)" : 'प्रिया का नंबर भरें (+91 98765 43210)'}
          </button>

          <!-- Primary CTA Button -->
          <button class="btn-otp-action" id="btn-consumer-send-otp">
            <span>${t('sendOtpBtn')}</span>
            ${icon('chevronRight', 16)}
          </button>

          <!-- DPDP 2023 Trust Seal -->
          <div style="font-size:11px; color:var(--ink-muted); text-align:center; margin-top:12px; line-height:1.4; display:flex; align-items:center; justify-content:center; gap:6px;">
            ${icon('shieldCheck', 14)}
            <span>${t('dpdpProtectionNotice')}</span>
          </div>

        ` : step === 'otp' ? `
          <!-- STEP 2: 6-DIGIT OTP VERIFICATION -->
          <div class="consumer-step-indicator">
            <span>${state.lang === 'en' ? 'Step 2 of 3 • Enter 6-Digit Code' : 'चरण 2 / 3 • OTP दर्ज करें'}</span>
            <button id="btn-consumer-change-phone" style="background:none; border:none; color:var(--forest); font-weight:700; font-size:11.5px; cursor:pointer;">
              ✏️ ${t('changeNumberBtn')}
            </button>
          </div>

          <div style="font-size:12.5px; color:var(--ink-soft); margin-bottom:6px;">
            ${t('otpSentTo')} <strong style="color:var(--forest-dark);">+91 ${state.consumerPhoneInput || '98765 43210'}</strong>
          </div>

          <!-- 6 OTP Boxes -->
          <div class="otp-boxes-grid">
            ${state.consumerOtpDigits.map((digit, idx) => `
              <input 
                type="text" 
                maxlength="1" 
                inputmode="numeric" 
                class="otp-digit-box ${digit ? 'filled' : ''}" 
                data-otp-idx="${idx}" 
                value="${digit}" 
              />
            `).join('')}
          </div>

          <!-- 1-Tap Fill Demo OTP -->
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <button type="button" class="quick-helper-btn" id="btn-autofill-consumer-otp" style="margin:0;">
              ⚡ ${t('autoFillOtp')}
            </button>
            <span style="font-size:11px; color:var(--ink-soft); font-weight:600;">
              ⏱️ ${state.lang === 'en' ? 'Resend in 28s' : 'पुनः भेजें 28s'}
            </span>
          </div>

          <!-- Resend Links -->
          <div style="display:flex; gap:10px; margin-bottom:16px;">
            <button type="button" class="proto-btn" id="btn-resend-sms" style="flex:1; justify-content:center; height:34px; font-size:11px;">
              💬 ${t('resendOtpBtn')}
            </button>
            <button type="button" class="proto-btn" id="btn-resend-whatsapp" style="flex:1; justify-content:center; height:34px; font-size:11px; color:#128C7E;">
              📲 ${t('resendWhatsAppBtn')}
            </button>
          </div>

          <!-- Verify CTA -->
          <button class="btn-otp-action" id="btn-consumer-verify-otp">
            ${icon('check', 16)}
            <span>${t('verifyOtpBtn')}</span>
          </button>

        ` : `
          <!-- STEP 3: CONFIRM DELIVERY ADDRESS (FR-1.2) -->
          <div class="consumer-step-indicator">
            <span>${state.lang === 'en' ? 'Step 3 of 3 • Delivery Address' : 'चरण 3 / 3 • डिलीवरी का पता'}</span>
            <span style="color:var(--forest); font-weight:700;">FR-1.2 PRD</span>
          </div>

          <h3 style="font-family:var(--font-serif); font-size:18px; color:var(--forest-dark); margin:0 0 4px 0;">
            ${t('confirmLocationTitle')}
          </h3>
          <p style="font-size:12px; color:var(--ink-soft); margin:0 0 14px 0; line-height:1.4;">
            ${t('confirmLocationSub')}
          </p>

          <!-- Auto-detected Geolocation Card -->
          <div class="consumer-location-preview">
            <div style="display:flex; align-items:flex-start; gap:10px;">
              <div style="background:var(--forest-tint); padding:6px; border-radius:50%; color:var(--forest);">
                ${icon('mapPin', 16)}
              </div>
              <div style="flex:1;">
                <div style="font-size:13.5px; font-weight:700; color:var(--forest-dark);">
                  Sunrise Enclave, Sector 14, Gurugram (122001)
                </div>
                <div style="font-size:11px; color:var(--soil); margin-top:2px;">
                  📍 4.2 km from Patel Organic Farms • Dawn harvest slot: 7:00 AM – 9:00 AM
                </div>
              </div>
            </div>
          </div>

          <label style="font-size:12.5px; font-weight:700; color:var(--ink); display:block; margin-bottom:6px;">
            ${state.lang === 'en' ? 'Flat / House / Tower Number' : 'मकान / फ्लैट नंबर'}
          </label>
          <input 
            type="text" 
            id="input-consumer-flat" 
            class="consumer-phone-input" 
            style="width:100%; margin-bottom:12px;" 
            placeholder="${t('flatPlaceholder')}" 
            value="${state.consumerAddressFlat || 'Flat A-402, Sunrise Enclave'}" 
          />

          <!-- Address Tag Selection -->
          <label style="font-size:12px; font-weight:600; color:var(--ink-soft); display:block; margin-bottom:4px;">
            ${state.lang === 'en' ? 'Save address as:' : 'पते का प्रकार:'}
          </label>
          <div class="address-tag-pills">
            <button type="button" class="address-tag-chip ${state.consumerAddressTag === 'Home' ? 'active' : ''}" data-address-tag="Home">
              🏠 ${state.lang === 'en' ? 'Home' : 'घर'}
            </button>
            <button type="button" class="address-tag-chip ${state.consumerAddressTag === 'Work' ? 'active' : ''}" data-address-tag="Work">
              🏢 ${state.lang === 'en' ? 'Work' : 'कार्यालय'}
            </button>
            <button type="button" class="address-tag-chip ${state.consumerAddressTag === 'Other' ? 'active' : ''}" data-address-tag="Other">
              📍 ${state.lang === 'en' ? 'Other' : 'अन्य'}
            </button>
          </div>

          <!-- Confirm Address CTA -->
          <button class="btn-otp-action" id="btn-consumer-confirm-address">
            ${icon('check', 16)}
            <span>${t('confirmAddressBtn')}</span>
          </button>
        `}
      </div>

      <!-- Quick 1-Tap Demo Switcher (Instant Test for All Personas) -->
      <div class="auth-demo-personas" style="margin-top:4px;">
        <div class="auth-demo-title">
          ${icon('user', 13)} <span>${t('quickPersonaTitle')}</span>
        </div>
        <div class="persona-chips-grid">
          <button type="button" class="persona-card-btn ${state.currentUser?.id === 'usr-1' ? 'active' : ''}" data-switch-persona="usr-1" title="Urban Consumer - Gurugram">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" class="persona-avatar" alt="Priya" />
            <div class="persona-name">Priya Sharma</div>
            <span class="persona-role-tag consumer">${state.lang === 'en' ? 'Buyer (Consumer)' : 'उपभोक्ता'}</span>
          </button>
          <button type="button" class="persona-card-btn ${state.currentUser?.id === 'usr-3' ? 'active' : ''}" data-switch-persona="usr-3" title="Smallholder Farmer - Najafgarh">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" class="persona-avatar" alt="Ramesh" />
            <div class="persona-name">Ramesh Patel</div>
            <span class="persona-role-tag farmer">${state.lang === 'en' ? 'Farmer Portal' : 'किसान'}</span>
          </button>
          <button type="button" class="persona-card-btn ${state.currentUser?.id === 'usr-2' ? 'active' : ''}" data-switch-persona="usr-2" title="Delivery Partner - Local Fleet">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" class="persona-avatar" alt="Dev" />
            <div class="persona-name">Dev Singh</div>
            <span class="persona-role-tag rider">${state.lang === 'en' ? 'Delivery Fleet' : 'डिलीवरी'}</span>
          </button>
        </div>
      </div>

      <!-- Farmer Portal Direct Link -->
      <div style="text-align:center; font-size:12px; color:var(--ink-soft); margin-top:2px;">
        ${state.lang === 'en' ? 'Are you an organic farmer wanting to sell harvest?' : 'क्या आप सब्ज़ी किसान हैं और उपज बेचना चाहते हैं?'}
        <button type="button" id="btn-consumer-switch-farmer" style="background:none; border:none; color:var(--forest); font-weight:700; text-decoration:underline; cursor:pointer; margin-left:4px;">
          ${state.lang === 'en' ? 'Open Farmer Dashboard' : 'किसान पोर्टल खोलें'}
        </button>
      </div>
    </div>
  `;
}

// Render Profile Screen with Security & DPDP Consent Management (Sec 5.1 & 11)
function renderProfileScreen() {
  if (!state.currentUser) {
    return `
      <div class="cart-screen-view">
        <div class="auth-header-card" style="margin-top:12px;">
          <div class="auth-brand-badge">${icon('shieldCheck', 12)} Freshcart Secure Access</div>
          <h2 class="auth-title">${state.lang === 'en' ? 'Sign In to Your Account' : 'अपने खाते में लॉग इन करें'}</h2>
          <p class="auth-sub">${state.lang === 'en' ? 'Sign in with your mobile number to view farm-to-door orders, morning delivery tracking, and saved address.' : 'ऑर्डर ट्रैकिंग व पते के लिए अपने मोबाइल नंबर से साइन इन करें।'}</p>
          <div style="margin-top:16px; display:flex; flex-direction:column; gap:10px;">
            <button class="btn-otp-action" id="btn-profile-open-login">
              ${icon('phone', 16)}
              <span>${state.lang === 'en' ? 'Sign In with Mobile & OTP' : 'मोबाइल और OTP से साइन इन करें'}</span>
            </button>
            <button class="btn-auth-primary" id="btn-profile-open-login" style="height:44px; font-size:14px;">
              ${icon('logIn', 16)} ${t('loginSubmitBtn')} / ${t('signUpSubmitBtn')}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  const user = state.currentUser;

  return `
    <div class="cart-screen-view">
      <!-- Profile Header Row with Avatar & Verification -->
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:8px; background:#FFFFFF; padding:14px; border-radius:var(--radius-lg); border:1px solid var(--line);">
        <img src="${user.avatar}" alt="${user.name}" style="width:54px; height:54px; border-radius:50%; object-fit:cover; border:2px solid var(--forest-tint);" />
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:6px;">
            <h2 style="font-family:var(--font-serif); font-size:19px; color:var(--forest-dark); margin:0;">${user.name}</h2>
            
            <div style="display:inline-flex; align-items:center; gap:5px; background:#EAF5EA; color:var(--forest); font-size:10.5px; font-weight:700; padding:2px 8px; border-radius:12px; margin-top:6px; border:1px solid #C8E6C9;">
              ${icon('check', 11)} ${state.lang === 'en' ? 'Verified Mobile OTP & Aadhaar KYC' : 'सत्यापित मोबाइल व आधार eKYC'}
            </div>
          </div>
          <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">
            ${user.email}
          </div>
          <div style="font-size:11.5px; color:var(--ink-muted); display:flex; align-items:center; gap:4px; margin-top:2px;">
            <span class="masked-data-tag">${user.phone}</span>
            <span>· ${user.address ? user.address.split(',')[0] : 'Sunrise Enclave'}</span>
          </div>

          
            <div style="display:inline-flex; align-items:center; gap:5px; background:#EAF5EA; color:var(--forest); font-size:10.5px; font-weight:700; padding:2px 8px; border-radius:12px; margin-top:6px; border:1px solid #C8E6C9;">
              ${icon('check', 11)} ${state.lang === 'en' ? 'Verified Mobile OTP & Aadhaar KYC' : 'सत्यापित मोबाइल व आधार eKYC'}
            </div>
        </div>
      </div>

      <!-- Account Actions (Switch / Sign Out) -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
        <button class="proto-btn" id="btn-profile-switch-account" style="justify-content:center; height:38px; font-size:12px;">
          ${icon('user', 14)} Switch Account
        </button>
        <button class="btn-danger-sec" id="btn-profile-signout" style="justify-content:center; height:38px; font-size:12px;">
          ${icon('logOut', 14)} ${t('signOutBtn')}
        </button>
      </div>

      <!-- Mobile Device Integrity & Keystore Badge (Sec 9) -->
      <div class="security-integrity-pill">
        ${icon('shieldCheck', 14)}
        <span>${t('securityIntegrityBadge')}</span>
      </div>

      <!-- Active Sessions Manager (Sec 5.1) -->
      <div class="slot-select-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <h4>${icon('smartphone', 15)} ${t('activeSessionsTitle')}</h4>
          <span style="font-size:10px; color:var(--forest); font-weight:700;">Rotating Refresh JWT</span>
        </div>
        
        <div>
          ${state.sessions.map(sess => `
            <div class="session-item-row">
              <div class="session-info">
                <strong>
                  ${sess.device}
                  ${sess.isCurrent ? `<span class="badge-current-device">This Device</span>` : ''}
                </strong>
                <div class="sub">${sess.os} · ${sess.location} · <span style="font-family:monospace;">${sess.ip}</span></div>
              </div>
              ${!sess.isCurrent ? `
                <button class="proto-btn" data-revoke-session="${sess.id}" style="font-size:10.5px; padding:3px 8px;">
                  Sign Out
                </button>
              ` : `
                <span style="font-size:10.5px; color:var(--forest); font-weight:600;">Active</span>
              `}
            </div>
          `).join('')}
        </div>

        <button class="btn-secondary-sec" id="btn-signout-all-devices" style="width:100%; margin-top:8px; justify-content:center;">
          ${t('signOutOtherDevices')}
        </button>
      </div>

      <!-- DPDP Act 2023 Rights & Privacy Center (Sec 11) -->
      <div class="dpdp-box">
        <div class="dpdp-header">
          ${icon('shieldCheck', 16)}
          <span>${t('dpdpConsentTitle')}</span>
        </div>
        <p class="dpdp-notice-text">
          Freshcart is fully compliant with India's <strong>Digital Personal Data Protection Act, 2023</strong>. Data is stored locally in Mumbai AWS data centers with purpose limitation.
        </p>

        <div class="dpdp-actions-row">
          <button class="btn-secondary-sec" id="btn-download-my-data">
            ${icon('download', 14)} ${t('downloadDataBtn')}
          </button>
          <button class="btn-danger-sec" id="btn-request-erasure">
            ${t('requestErasureBtn')}
          </button>
        </div>

        <!-- Grievance Officer Contact (Sec 11 Mandate) -->
        <div style="margin-top:12px; padding-top:10px; border-top:1px dashed var(--line); font-size:11px; color:var(--ink-soft); line-height:1.45;">
          <strong>Data Protection & Grievance Officer:</strong><br/>
          ${SECURITY_CONFIG.dpdpCompliance.grievanceOfficer.name} · <a href="mailto:${SECURITY_CONFIG.dpdpCompliance.grievanceOfficer.email}" style="color:var(--forest);">${SECURITY_CONFIG.dpdpCompliance.grievanceOfficer.email}</a><br/>
          Response SLA: 48 hours · New Delhi & Gurugram, India
        </div>
      </div>

      <!-- Language Preferences -->
      <div class="slot-select-card">
        <h4>${state.lang === 'en' ? 'Language Preferences' : 'भाषा चुनें'}</h4>
        <div style="display:flex; gap:10px;">
          <button class="proto-btn ${state.lang === 'en' ? 'active' : ''}" id="prof-lang-en" style="flex:1; justify-content:center; height:38px;">
            English
          </button>
          <button class="proto-btn ${state.lang === 'hi' ? 'active' : ''}" id="prof-lang-hi" style="flex:1; justify-content:center; height:38px;">
            हिंदी (Hindi)
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render Rider App Mode (Amit) - Sec 4 & 5.2 (Assigned Pickups/Drops with Masked Number)
function renderRiderScreen() {
  const currentOrder = state.orders[0];

  return `
    <div class="cart-screen-view">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="width:44px; height:44px; border-radius:50%; background:var(--forest); color:#fff; display:flex; align-items:center; justify-content:center;">
            ${icon('truck', 22)}
          </div>
          <div>
            <h2 style="font-family:var(--font-serif); font-size:18px;">Rider: Amit Kumar</h2>
            <div style="font-size:11px; color:var(--ink-soft);">Hero Electric EV · DL 03 AX 4812</div>
          </div>
        </div>
        <span class="penny-drop-badge">${icon('check', 10)} On Delivery Duty</span>
      </div>

      <!-- RBAC Notice (Sec 5.2) -->
      <div style="background:#FFF9ED; border:1px solid #FFE4A0; border-radius:var(--radius-sm); padding:6px 10px; font-size:11px; color:var(--soil);">
        🔒 <strong>RBAC Policy Active:</strong> You can only see your assigned delivery and masked customer contact. Customer history is restricted.
      </div>

      <!-- Active Assigned Delivery Run -->
      ${currentOrder ? `
        <div class="slot-select-card" style="border:1.5px solid var(--forest);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="font-size:13px; color:var(--forest);">Active Order #${currentOrder.id}</strong>
            <span class="slot-tag" style="background:var(--forest);">In Transit</span>
          </div>

          <div style="font-size:12px; margin-bottom:10px;">
            <div style="padding:6px 0; border-bottom:1px dashed var(--line);">
              <strong>Pickup (Farm):</strong> Patel Organic Farms, Khed (Ramesh Patel)
            </div>
            <div style="padding:6px 0; border-bottom:1px dashed var(--line);">
              <strong>Drop (Customer):</strong> ${currentOrder.deliveryAddress}
            </div>
            <div style="padding:6px 0; display:flex; align-items:center; justify-content:space-between;">
              <div>
                <strong>Customer:</strong> ${currentOrder.customerName}<br/>
                <span class="masked-data-tag">${currentOrder.customerPhone}</span>
              </div>
              <button class="proto-btn active" id="btn-rider-call-proxy" style="font-size:11px; padding:4px 10px;">
                ${icon('phone', 12)} Call via Masked Proxy
              </button>
            </div>
          </div>

          <!-- OTP Verification Box (Sec 4) -->
          <div style="background:var(--forest-tint); border-radius:var(--radius-md); padding:12px; margin-top:8px;">
            <label style="font-size:12px; font-weight:700; color:var(--forest-dark); display:block; margin-bottom:6px;">
              Enter Customer 4-Digit Delivery OTP
            </label>
            <div style="display:flex; gap:8px;">
              <input 
                type="text" 
                id="rider-otp-input" 
                maxlength="4" 
                placeholder="e.g. 4829" 
                value="${state.riderOtpInput}"
                style="flex:1; height:42px; text-align:center; font-family:var(--font-stamp); font-size:20px; letter-spacing:4px; border:1px solid var(--forest); border-radius:var(--radius-sm); outline:none;"
              />
              <button class="btn-primary" id="btn-rider-verify-otp" style="height:42px; padding:0 16px;">
                Verify & Deliver
              </button>
            </div>
            <div style="font-size:10px; color:var(--ink-soft); margin-top:6px;">
              Order completes and payout is released to farmer upon OTP validation.
            </div>
          </div>
        </div>
      ` : `
        <div class="empty-state">
          <h3>No assigned jobs</h3>
        </div>
      `}
    </div>
  `;
}

// Render Admin & Security Dashboard (Sec 5.2, 7, 8, 12, 13)
function renderAdminDashboard() {
  return `
    <div class="cart-screen-view">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <div style="width:36px; height:36px; border-radius:50%; background:#12251A; color:#72E8A5; display:flex; align-items:center; justify-content:center;">
            ${icon('lock', 18)}
          </div>
          <div>
            <h2 style="font-family:var(--font-serif); font-size:17px; color:var(--forest-dark);">Security & Admin Console</h2>
            <div style="font-size:11px; color:var(--ink-soft);">MFA Active · CERT-In 6-Hour Ready</div>
          </div>
        </div>
        <span class="penny-drop-badge">${icon('check', 10)} AWS Mumbai (ap-south-1)</span>
      </div>

      <!-- Admin Sub Tabs -->
      <div class="category-filter-row" style="padding:0; margin-bottom:6px;">
        <button class="cat-pill ${state.adminTab === 'audit' ? 'active' : ''}" data-admin-subtab="audit">
          📋 Audit Trail (${state.auditLogs.length})
        </button>
        <button class="cat-pill ${state.adminTab === 'kyc' ? 'active' : ''}" data-admin-subtab="kyc">
          📑 Farmer KYC
        </button>
        <button class="cat-pill ${state.adminTab === 'rbac' ? 'active' : ''}" data-admin-subtab="rbac">
          🛡️ RBAC Matrix
        </button>
        <button class="cat-pill ${state.adminTab === 'dpdp' ? 'active' : ''}" data-admin-subtab="dpdp">
          ⚖️ DPDP Compliance
        </button>
      </div>

      <!-- Subtab 1: Immutable Audit Trail (Sec 12) -->
      ${state.adminTab === 'audit' ? `
        <div class="slot-select-card" style="padding:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="font-size:12px; color:var(--forest);">${t('auditLogsTitle')}</strong>
            <button class="proto-btn" id="btn-refresh-audit" style="font-size:10px; padding:2px 8px;">
              Refresh Feed
            </button>
          </div>

          <div class="audit-logs-wrap">
            ${state.auditLogs.map(log => `
              <div class="audit-log-entry">
                <div class="audit-log-top">
                  <span class="audit-log-tag ${log.severity}">${log.event}</span>
                  <span style="color:#788A80; font-size:10px;">${log.timestamp}</span>
                </div>
                <div style="color:#A4BDB0; font-size:10.5px;">
                  Actor: <strong>${log.actor}</strong> · Target: <strong>${log.target}</strong>
                </div>
                <div class="audit-log-msg">${log.detail}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Subtab 2: Farmer KYC Verification Queue (Sec 3 & 5.2) -->
      ${state.adminTab === 'kyc' ? `
        <div class="slot-select-card">
          <h4>Farmer KYC & Payout Verification Queue</h4>
          <p style="font-size:11px; color:var(--ink-soft); margin-bottom:10px;">
            Farmer identity documents are stored in private encrypted S3 buckets. Links expire in 15 minutes.
          </p>

          ${state.farmers.map(farmer => `
            <div style="background:#FAF8F2; border:1px solid var(--line); border-radius:var(--radius-md); padding:10px; margin-bottom:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <strong>${farmer.name} (${farmer.farmName})</strong>
                <span class="penny-drop-badge">${farmer.kyc.status}</span>
              </div>
              <div style="font-size:11.5px; color:var(--ink-soft); line-height:1.4;">
                • Aadhaar UID: <span class="masked-data-tag">${farmer.kyc.aadhaarMasked}</span><br/>
                • Land Registry: <strong>${farmer.kyc.landRecordDoc}</strong><br/>
                • Bank Account: <span class="masked-data-tag">${farmer.kyc.bankMasked}</span> (${farmer.kyc.pennyDropStatus})
              </div>

              <div style="display:flex; gap:8px; margin-top:8px;">
                <button class="btn-secondary-sec" data-preview-kyc="${farmer.id}" style="font-size:11px; padding:5px 10px;">
                  ${icon('fileText', 13)} View Watermarked Doc
                </button>
                <button class="proto-btn active" data-approve-kyc="${farmer.id}" style="font-size:11px; padding:5px 10px;">
                  ${icon('check', 12)} Re-Verify
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Subtab 3: RBAC Access Control Matrix (Sec 5.2) -->
      ${state.adminTab === 'rbac' ? `
        <div class="slot-select-card">
          <h4>Section 5.2: Role-Based Access Control (RBAC)</h4>
          <p style="font-size:11px; color:var(--ink-soft);">
            Client-side restrictions are convenience only. Every endpoint enforces object-level authorization checks.
          </p>

          <table class="rbac-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Can Access</th>
                <th>Cannot Access</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Consumer</strong></td>
                <td>Catalog, own cart, own orders</td>
                <td>Other users' data, Farmer KYC</td>
              </tr>
              <tr>
                <td><strong>Farmer</strong></td>
                <td>Own produce listings, orders, earnings</td>
                <td>Other farmers' data, customer raw numbers</td>
              </tr>
              <tr>
                <td><strong>Rider</strong></td>
                <td>Assigned run pickup & drop</td>
                <td>Other riders' runs, full customer history</td>
              </tr>
              <tr>
                <td><strong>Admin</strong></td>
                <td>KYC approval, audit logs, metrics</td>
                <td>Modifying ledger (immutable append-only)</td>
              </tr>
            </tbody>
          </table>
        </div>
      ` : ''}

      <!-- Subtab 4: DPDP Act 2023 Compliance Status (Sec 11) -->
      ${state.adminTab === 'dpdp' ? `
        <div class="dpdp-box">
          <div class="dpdp-header">
            ${icon('shieldCheck', 16)}
            <span>DPDP Act 2023 Readiness Dashboard</span>
          </div>
          <div style="font-size:11.5px; line-height:1.5; color:var(--ink);">
            • <strong>India Region Hosting:</strong> AWS Mumbai (ap-south-1). Zero cross-border export.<br/>
            • <strong>Consent Version:</strong> v2026.1 registered with cryptographic hash.<br/>
            • <strong>Data Portability:</strong> Machine-readable JSON export available on demand.<br/>
            • <strong>Right to Erasure:</strong> Account anonymization executed within 7 days.<br/>
            • <strong>CERT-In Reporting:</strong> Automated webhook alerts for 6-hour reporting window.
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// Render Farmer App Mode Dashboard
function renderFarmerDashboard() {
  const activeOrder = state.orders[0];

  return `
    <div class="farmer-dashboard-view">
      <!-- Offline Resilience Notice -->
      <div style="background:var(--forest-tint); border:1px solid rgba(31,59,44,0.15); border-radius:var(--radius-md); padding:8px 12px; font-size:11px; display:flex; align-items:center; gap:8px; color:var(--forest-dark);">
        ${icon('leaf', 14)}
        <span>${t('offlineNotice')}</span>
      </div>

      <!-- Farmer Header Card with Penny-Drop Verified Account Badge (Sec 8) -->
      <div class="farmer-head-card">
        <div class="farmer-head-top">
          <div style="display:flex; align-items:center; gap:10px;">
            <img src="/images/farmer_ramesh.jpg" style="width:46px; height:46px; border-radius:50%; border:2px solid var(--harvest-soft); object-fit:cover;" />
            <div>
              <h2 style="font-family:var(--font-serif); font-size:18px;">Ramesh Patel</h2>
              <div style="font-size:11.5px; opacity:0.9;">Patel Organic Farms · Khed</div>
            </div>
          </div>
          <span class="farmer-tag-pill">● Accepting Orders</span>
        </div>

        <div class="farmer-kpi-grid">
          <div class="farmer-kpi-box">
            <div class="kpi-num">₹2,840</div>
            <div class="kpi-label">${t('earningsToday')}</div>
          </div>
          <div class="farmer-kpi-box">
            <div class="kpi-num">₹14,200</div>
            <div class="kpi-label">${t('weeklyEarnings')}</div>
          </div>
        </div>

        <div style="margin-top:10px; font-size:10.5px; opacity:0.9; display:flex; justify-content:space-between; align-items:center;">
          <span>Bank: <code style="font-family:monospace;">HDFC Bank ••••4812</code> (Verified)</span>
          <span>${t('payoutNote')}</span>
        </div>
      </div>

      <!-- Weekly Earnings Chart -->
      <div class="slot-select-card">
        <div style="display:flex; justify-content:space-between; align-items:baseline;">
          <h4>${icon('trendingUp', 16)} Weekly Direct Earnings (₹)</h4>
          <span style="font-size:11px; color:var(--forest); font-weight:700;">+28% vs Mandi</span>
        </div>
        
        <div class="chart-bar-container">
          <div class="chart-col"><div class="chart-bar" style="height:45px;"></div><span class="day">Mon</span></div>
          <div class="chart-col"><div class="chart-bar" style="height:60px;"></div><span class="day">Tue</span></div>
          <div class="chart-col"><div class="chart-bar" style="height:55px;"></div><span class="day">Wed</span></div>
          <div class="chart-col"><div class="chart-bar" style="height:70px;"></div><span class="day">Thu</span></div>
          <div class="chart-col"><div class="chart-bar" style="height:65px;"></div><span class="day">Fri</span></div>
          <div class="chart-col"><div class="chart-bar" style="height:80px;"></div><span class="day">Sat</span></div>
          <div class="chart-col highlight"><div class="chart-bar" style="height:88px;"></div><span class="day">Today</span></div>
        </div>
      </div>

      <!-- Incoming Order Alert with Masked Customer Phone (Sec 4) -->
      ${activeOrder ? `
        <div class="incoming-order-alert">
          <h3>
            ${icon('package', 18)}
            <span>Incoming Order #${activeOrder.id}</span>
          </h3>
          <p style="font-size:12px; color:var(--ink-soft); margin-bottom:8px;">
            Deliver to: <strong>${activeOrder.deliveryAddress}</strong><br/>
            Customer: ${activeOrder.customerName} (<span class="masked-data-tag">${activeOrder.customerPhone}</span>)
          </p>

          <div style="background:#fff; border-radius:var(--radius-sm); padding:8px 10px; margin-bottom:12px; font-size:12px;">
            ${activeOrder.items.map(it => `
              <div style="display:flex; justify-content:space-between; padding:3px 0;">
                <span>${it.name}</span>
                <strong>${it.qty} × ${it.unit}</strong>
              </div>
            `).join('')}
          </div>

          <div style="display:flex; gap:8px;">
            <button class="btn-primary" id="btn-farmer-accept-order" style="flex:1; height:42px; font-size:13px; background:var(--forest);">
              ${t('acceptOrder')}
            </button>
            <button class="btn-primary" id="btn-farmer-pack-order" style="flex:1; height:42px; font-size:13px; background:var(--soil);">
              ${t('markPacked')}
            </button>
          </div>
        </div>
      ` : ''}

      <!-- Active Harvest Listings -->
      <div class="slot-select-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <h4>${t('activeBatches')}</h4>
          <button class="proto-btn active" id="btn-open-add-harvest-modal">
            + Add Harvest
          </button>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          ${state.products.filter(p => p.farmerId === 'farmer-1').map(p => `
            <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px dashed var(--line);">
              <div style="display:flex; align-items:center; gap:10px;">
                <img src="${p.image}" style="width:42px; height:42px; border-radius:8px; object-fit:cover;" />
                <div>
                  <div style="font-size:13px; font-weight:700;">${p.name}</div>
                  <div style="font-size:11px; color:var(--ink-soft);">
                    Stock: <strong>${p.stockAvailable} units</strong> · ₹${p.price}
                  </div>
                </div>
              </div>

              <button class="proto-btn" data-pause-prod="${p.id}" style="font-size:11px;">
                Active ✓
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Render Product Detail Modal
function renderProductDetailModal() {
  if (!state.activeProductModal) return '';
  const prod = state.activeProductModal;
  const farmer = state.farmers.find(f => f.id === prod.farmerId) || state.farmers[0];
  const qtyInCart = state.cart[prod.id] || 0;
  const isToday = prod.freshness === 'today';

  return `
    <div class="modal-overlay" id="product-modal-backdrop">
      <div class="modal-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <button class="btn-close-modal" id="btn-close-product-modal">
          ${icon('close', 18)}
        </button>

        <div class="product-detail-hero">
          <img src="${prod.image}" alt="${prod.name}" />
        </div>

        <div class="product-detail-body">
          <div class="detail-tags-row">
            <span class="freshness-stamp ${isToday ? 'today' : 'yesterday'}" style="position:static;">
              ${icon('clock', 12)} ${isToday ? t('pickedToday') : t('pickedYesterday')} (${prod.harvestTime})
            </span>
            <span class="farm-trust-badge" style="font-size:11px;">Batch #${prod.batchNo}</span>
          </div>

          <h2 class="detail-title">${state.lang === 'en' ? prod.name : prod.hindiName}</h2>
          <p style="font-size:12.5px; color:var(--ink-soft); margin-top:4px;">
            ${state.lang === 'en' ? prod.description : prod.hindiDescription}
          </p>

          <div class="detail-farmer-card" id="detail-farmer-click" data-farmer-id="${farmer.id}">
            <div class="detail-farmer-left">
              <img src="${farmer.avatar}" alt="${farmer.name}" class="detail-farmer-avatar" />
              <div>
                <div style="font-size:14px; font-weight:700; color:var(--ink);">${state.lang === 'en' ? farmer.name : farmer.hindiName}</div>
                <div style="font-size:11px; color:var(--ink-soft);">${state.lang === 'en' ? farmer.farmName : farmer.hindiFarmName} · ${farmer.distance}</div>
                <div style="font-size:11px; color:var(--harvest-orange); font-weight:700;">★ ${farmer.rating} (142 reviews) · Verified KYC ✓</div>
              </div>
            </div>
            <div style="font-size:12px; font-weight:700; color:var(--forest); display:flex; align-items:center; gap:4px;">
              ${t('visitFarm')} ${icon('chevronRight', 14)}
            </div>
          </div>

          <div class="facts-row">
            <div class="fact-box">
              <div class="label">${t('acres')}</div>
              <div class="value">${farmer.size}</div>
            </div>
            <div class="fact-box">
              <div class="label">${t('yearsFarming')}</div>
              <div class="value">${farmer.years}</div>
            </div>
            <div class="fact-box">
              <div class="label">${t('harvestTime')}</div>
              <div class="value">${prod.harvestTime.split(',')[1] || '6:15 AM'}</div>
            </div>
          </div>

          <div class="batch-notes-box">
            <h4>${icon('shieldCheck', 16)} ${t('batchTraceability')}</h4>
            <p>
              ${state.lang === 'en' ? prod.growingMethod : prod.hindiGrowingMethod}. 
              ${state.lang === 'en' 
                ? 'Harvested from block #2 of Patel Organic Farms. Soil test verified: zero chemical residues, rich natural vermicompost fertility.'
                : 'खेत के ब्लॉक नंबर 2 से ताज़ी कटाई। मिट्टी परीक्षण प्रमाणित: शून्य रासायनिक अवशेष, प्राकृतिक वर्मीकम्पोस्ट खाद से पोषित।'}
            </p>
          </div>
        </div>

        <div class="detail-sticky-bar">
          <div class="detail-price-stack">
            <div class="price">₹${prod.price}</div>
            <div class="unit">/${prod.unit}</div>
          </div>

          <div style="display:flex; align-items:center; gap:12px;">
            ${qtyInCart === 0 ? `
              <button class="btn-primary" id="btn-modal-add-cart" data-add-prod="${prod.id}">
                ${icon('shoppingBag', 16)} ${t('addToCart')}
              </button>
            ` : `
              <div class="mini-stepper" style="height:42px; border-radius:var(--radius-md);">
                <button data-dec-prod="${prod.id}" style="width:36px; font-size:18px;">−</button>
                <span style="min-width:32px; font-size:14px;">${qtyInCart} in basket</span>
                <button data-inc-prod="${prod.id}" style="width:36px; font-size:18px;">+</button>
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Farmer Profile Modal with Verified KYC Badge (Sec 3)
function renderFarmerProfileModal() {
  if (!state.activeFarmerModal) return '';
  const farmer = state.activeFarmerModal;
  const farmerProducts = state.products.filter(p => p.farmerId === farmer.id);

  return `
    <div class="modal-overlay" id="farmer-modal-backdrop">
      <div class="modal-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <button class="btn-close-modal" id="btn-close-farmer-modal">
          ${icon('close', 18)}
        </button>

        <div style="position:relative; width:100%; height:160px; overflow:hidden;">
          <img src="${farmer.banner}" style="width:100%; height:100%; object-fit:cover;" />
          <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(18,37,26,0.8), transparent);"></div>
        </div>

        <div style="padding:0 20px 80px; position:relative; margin-top:-40px;">
          <div style="display:flex; align-items:flex-end; justify-content:space-between;">
            <img src="${farmer.avatar}" style="width:80px; height:80px; border-radius:50%; border:3px solid #fff; object-fit:cover; box-shadow:var(--shadow-md);" />
            <button class="proto-btn ${farmer.isFollowed ? 'active' : ''}" id="btn-toggle-follow-farmer" data-farmer-id="${farmer.id}">
              ${farmer.isFollowed ? icon('check', 14) + ' Following' : '+ Follow Farmer'}
            </button>
          </div>

          <h2 style="font-family:var(--font-serif); font-size:22px; color:var(--forest-dark); margin-top:10px;">
            ${state.lang === 'en' ? farmer.name : farmer.hindiName}
          </h2>
          <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">
            🌾 ${state.lang === 'en' ? farmer.farmName : farmer.hindiFarmName} · 📍 ${farmer.location}
          </div>

          <!-- Trust Badges with Penny-Drop Verified Seal -->
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin:10px 0;">
            <span class="penny-drop-badge">${icon('shieldCheck', 12)} Admin KYC Approved</span>
            <span class="penny-drop-badge">${icon('check', 10)} Bank Penny-Drop Verified</span>
            <span class="farm-rating-badge">★ ${farmer.rating}</span>
          </div>

          <p style="font-size:12.5px; color:var(--ink); line-height:1.5; margin:12px 0;">
            ${state.lang === 'en' ? farmer.bio : farmer.hindiBio}
          </p>

          <div class="facts-row">
            <div class="fact-box">
              <div class="label">Total Land</div>
              <div class="value">${farmer.size}</div>
            </div>
            <div class="fact-box">
              <div class="label">Experience</div>
              <div class="value">${farmer.years}</div>
            </div>
            <div class="fact-box">
              <div class="label">Distance</div>
              <div class="value">${farmer.distance}</div>
            </div>
          </div>

          <h4 style="font-family:var(--font-serif); font-size:16px; color:var(--forest-dark); margin:18px 0 10px;">
            ${state.lang === 'en' ? "Today's Harvest from this Farm" : "इस खेत से आज की कटाई"}
          </h4>

          <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;">
            ${farmerProducts.map(p => `
              <div class="product-card" data-product-id="${p.id}">
                <div class="product-card-thumb-wrap" style="aspect-ratio:1;">
                  <img src="${p.image}" class="product-card-thumb" />
                </div>
                <div style="padding:8px 10px;">
                  <div style="font-size:12px; font-weight:700;">${p.name}</div>
                  <div style="font-size:11px; color:var(--forest); font-weight:700;">₹${p.price} / ${p.unit}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Watermarked KYC Preview Modal (Sec 3 & 5.2)
function renderKycPreviewModal() {
  if (!state.isKycModalOpen || !state.selectedKycFarmer) return '';
  const f = state.selectedKycFarmer;

  return `
    <div class="modal-overlay" id="kyc-modal-backdrop">
      <div class="modal-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <button class="btn-close-modal" id="btn-close-kyc-modal">
          ${icon('close', 18)}
        </button>

        <div style="padding:20px 20px 60px;">
          <h2 style="font-family:var(--font-serif); font-size:18px; color:var(--forest-dark); margin-bottom:4px;">
            Confidential KYC Verification Doc
          </h2>
          <div style="font-size:11px; color:var(--ink-soft); margin-bottom:12px;">
            Farmer: <strong>${f.name}</strong> · Expiring Signed URL (15m TTL)
          </div>

          <div class="kyc-watermark-wrap">
            <div class="kyc-watermark">CONFIDENTIAL · FRESHCART AUDIT</div>
            <div style="font-size:13px; font-weight:700; color:var(--forest-dark); margin-bottom:10px;">
              GOVERNMENT OF INDIA VERIFIED RECORD
            </div>

            <div class="kyc-field-row">
              <span>Aadhaar Masked UID:</span>
              <strong style="font-family:monospace;">${f.kyc.aadhaarMasked}</strong>
            </div>
            <div class="kyc-field-row">
              <span>Land Record Extract:</span>
              <strong>${f.kyc.landRecordDoc}</strong>
            </div>
            <div class="kyc-field-row">
              <span>Bank Account:</span>
              <strong style="font-family:monospace;">${f.kyc.bankMasked}</strong>
            </div>
            <div class="kyc-field-row">
              <span>Penny-Drop Match:</span>
              <strong style="color:var(--forest);">${f.kyc.pennyDropStatus}</strong>
            </div>
            <div class="kyc-field-row">
              <span>Encrypted Storage URI:</span>
              <span style="font-family:monospace; font-size:10px;">s3://fc-private-kyc-ap-south-1/</span>
            </div>
          </div>

          <div style="display:flex; gap:10px; margin-top:14px;">
            <button class="btn-primary" id="btn-confirm-approve-kyc" style="flex:1;">
              ${icon('check', 16)} Confirm KYC Verified
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Add Harvest Modal
function renderAddHarvestModal() {
  if (!state.isAddHarvestOpen) return '';

  const mandiEstimate = Math.round(state.newHarvest.price * 0.72);
  const extraGain = state.newHarvest.price - mandiEstimate;

  return `
    <div class="modal-overlay" id="add-harvest-modal-backdrop">
      <div class="modal-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <button class="btn-close-modal" id="btn-close-add-harvest">
          ${icon('close', 18)}
        </button>

        <div style="padding:20px 20px 80px;">
          <h2 style="font-family:var(--font-serif); font-size:20px; color:var(--forest-dark); margin-bottom:4px;">
            ${state.lang === 'en' ? 'Add Today’s Morning Harvest' : 'आज सुबह की ताज़ा कटाई जोड़ें'}
          </h2>
          <p style="font-size:12px; color:var(--ink-soft); margin-bottom:16px;">
            ${state.lang === 'en' ? 'List fresh vegetables directly for consumers in your delivery zone.' : 'सीधे ग्राहकों के लिए अपनी सब्ज़ियों की ताज़ा सूची बनाएं'}
          </p>

          <label style="font-size:12px; font-weight:700; color:var(--forest-dark); display:block; margin-bottom:8px;">
            Select Vegetable Crop
          </label>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-bottom:16px;">
            ${[
              { name: 'Desi Palak', unit: '500g bunch', cat: 'Leafy', img: '/images/veg_spinach.jpg' },
              { name: 'Desi Tamatar', unit: '1 kg', cat: 'Nightshades', img: '/images/veg_tomatoes.jpg' },
              { name: 'Desi Gajar', unit: '500g', cat: 'Roots', img: '/images/veg_carrots.jpg' },
              { name: 'Tender Bhindi', unit: '500g', cat: 'Gourds', img: '/images/veg_okra.jpg' },
              { name: 'Pahadi Aloo', unit: '1 kg', cat: 'Roots', img: '/images/veg_potatoes.jpg' }
            ].map(veg => `
              <div 
                class="slot-chip ${state.newHarvest.name === veg.name ? 'selected' : ''}" 
                data-select-harvest-veg="${veg.name}" 
                data-harvest-unit="${veg.unit}" 
                data-harvest-cat="${veg.cat}"
                data-harvest-img="${veg.img}"
                style="flex-direction:column; align-items:center; text-align:center; padding:8px 4px;"
              >
                <img src="${veg.img}" style="width:36px; height:36px; border-radius:6px; object-fit:cover; margin-bottom:4px;" />
                <span style="font-size:11px;">${veg.name}</span>
              </div>
            `).join('')}
          </div>

          <div class="slot-select-card" style="margin-bottom:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="font-size:13px;">Harvest Quantity</strong>
                <div style="font-size:11px; color:var(--ink-soft);">${state.newHarvest.unit} units available</div>
              </div>
              <div class="mini-stepper" style="height:36px;">
                <button id="btn-harvest-qty-minus">−</button>
                <span style="min-width:32px;">${state.newHarvest.qty}</span>
                <button id="btn-harvest-qty-plus">+</button>
              </div>
            </div>
          </div>

          <div class="slot-select-card" style="margin-bottom:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="font-size:13px;">Your Selling Price</strong>
                <div style="font-size:11px; color:var(--ink-soft);">Price per ${state.newHarvest.unit}</div>
              </div>
              <div class="mini-stepper" style="height:36px;">
                <button id="btn-harvest-price-minus">−</button>
                <span style="min-width:32px;">₹${state.newHarvest.price}</span>
                <button id="btn-harvest-price-plus">+</button>
              </div>
            </div>

            <div style="background:#FFF9ED; border:1px solid #FFE4A0; border-radius:var(--radius-sm); padding:8px 10px; margin-top:10px; font-size:11.5px; color:var(--soil);">
              📊 Mandi Middleman Rate: ~₹${mandiEstimate}. On Freshcart you earn <strong>+₹${extraGain} more per unit (+28%)</strong>!
            </div>
          </div>

          <button class="btn-primary" id="btn-submit-harvest" style="width:100%; height:48px; font-size:15px;">
            ${icon('check', 16)} Publish Today's Harvest (${state.newHarvest.qty} units)
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render Report Issue Modal
function renderReportIssueModal() {
  if (!state.isReportIssueOpen) return '';

  return `
    <div class="modal-overlay" id="issue-modal-backdrop">
      <div class="modal-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <button class="btn-close-modal" id="btn-close-issue-modal">
          ${icon('close', 18)}
        </button>

        <div style="padding:20px 20px 60px;">
          <h2 style="font-family:var(--font-serif); font-size:20px; color:var(--forest-dark); margin-bottom:6px;">
            ${state.lang === 'en' ? 'Report a Quality or Delivery Issue' : 'गुणवत्ता या डिलीवरी समस्या दर्ज करें'}
          </h2>
          <p style="font-size:12px; color:var(--ink-soft); margin-bottom:16px;">
            ${state.lang === 'en' 
              ? 'Freshcart guarantees 100% farm freshness. Issues reported within 24h are refunded or replaced immediately.'
              : '24 घंटे के भीतर रिपोर्ट की गई समस्या पर तुरंत रिफंड या रिप्लेसमेंट।'}
          </p>

          <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
            <label class="pay-radio-opt selected">
              <input type="radio" name="issueType" checked />
              <span>🍃 Produce damaged or wilted</span>
            </label>
            <label class="pay-radio-opt">
              <input type="radio" name="issueType" />
              <span>⚖️ Incorrect weight or missing item</span>
            </label>
            <label class="pay-radio-opt">
              <input type="radio" name="issueType" />
              <span>⏰ Delivery delay or rider issue</span>
            </label>
          </div>

          <textarea 
            placeholder="Add short note (e.g. spinach was wilted upon arrival)" 
            style="width:100%; height:80px; padding:10px; border-radius:var(--radius-md); border:1px solid var(--line); font-family:var(--font-sans); font-size:12.5px; outline:none; resize:none; margin-bottom:16px;"
          ></textarea>

          <button class="btn-primary" id="btn-confirm-report-issue" style="width:100%;">
            Submit for Instant Refund / Credit (₹187)
          </button>
        </div>
      </div>
    </div>
  `;
}

// Mobile OTP & Persona Login Execution
function executeOtpLogin(userObj) {
  state.currentUser = {
    ...userObj,
    provider: 'phone',
    isVerified: true
  };

  // Sync role view with selected user
  if (userObj.role === 'farmer') {
    state.role = 'farmer';
  } else if (userObj.role === 'rider') {
    state.role = 'rider';
  } else {
    state.role = 'consumer';
  }

  // Add session
  const newSession = {
    id: 'sess-otp-' + Date.now(),
    device: 'Mobile Smartphone',
    os: 'Android 14 • Mobile Web',
    location: 'Gurugram, India',
    ip: '49.36.128.42 (Masked)',
    isCurrent: true,
    lastActive: 'Active now'
  };
  state.sessions.unshift(newSession);

  recordAuditLog(
    'AUTH_OTP_SUCCESS',
    userObj.name,
    userObj.phone,
    'info',
    'Mobile OTP login verified for ' + userObj.name + ' (' + userObj.role + '). DPDP 2023 session issued.'
  );

  state.currentTab = state.authReturnTab || 'home';
  showToast(state.lang === 'en' ? '✓ Switched to ' + userObj.name + ' (' + userObj.role + ')!' : '✓ ' + userObj.name + ' के रूप में लॉग इन किया!');
  renderApp();
}

function executeStandardLogin(emailOrPhone) {
  let user = state.users.find(u => u.email.toLowerCase() === emailOrPhone.toLowerCase() || u.phone.includes(emailOrPhone));
  if (!user) {
    user = {
      id: `usr-${Date.now()}`,
      name: emailOrPhone.split('@')[0] || 'Freshcart User',
      email: emailOrPhone.includes('@') ? emailOrPhone : `${emailOrPhone}@freshcart.in`,
      phone: emailOrPhone.includes('@') ? '+91 98765 43210' : emailOrPhone,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      address: 'Sunrise Enclave, Sector 14, Gurugram',
      role: 'consumer',
      provider: 'email',
      isVerified: true
    };
    state.users.push(user);
  }

  state.currentUser = user;
  recordAuditLog('AUTH_PASSWORD_LOGIN', user.name, user.email, 'info', 'Standard password authentication successful. Session issued.');
  showToast(state.lang === 'en' ? `✓ Welcome back, ${user.name}!` : `✓ वापसी पर स्वागत है, ${user.name}!`);
  state.currentTab = state.authReturnTab || 'home';
  renderApp();
}

function executeRegistration(name, email, phone, address, role) {
  const newUser = {
    id: `usr-${Date.now()}`,
    name,
    email,
    phone,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    address,
    role,
    provider: 'email',
    isVerified: true
  };
  state.users.unshift(newUser);
  state.currentUser = newUser;
  if (role === 'farmer') {
    state.role = 'farmer';
  } else {
    state.role = 'consumer';
  }
  recordAuditLog('AUTH_REGISTER_SUCCESS', name, email, 'info', `New ${role} account registered under DPDP Act 2023 with verified phone & address.`);
  showToast(state.lang === 'en' ? `✓ Account created successfully! Welcome to Freshcart, ${name}!` : `✓ खाता सफलतापूर्वक बन गया! फ़्रेशकार्ट में स्वागत है, ${name}!`);
  state.currentTab = 'home';
  renderApp();
}

// Main App Renderer
function renderApp() {
  const app = document.querySelector('#app');
  const cartInfo = getCartDetails();

  app.innerHTML = `
    <!-- Top Prototype Control Bar with 4 RBAC Roles -->
    ${renderTopToolbar()}

    <!-- Main Viewport Shell -->
    <div class="app-viewport-wrapper">
      <div class="mobile-phone-frame ${state.frameMode === 'expanded' ? 'expanded' : ''}">
        <div class="phone-screen">
          <!-- Status Bar -->
          <div class="phone-status-bar">
            <span class="status-time">08:24</span>
            <div class="phone-notch">
              <div class="notch-camera"></div>
            </div>
            <div class="status-icons">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          <!-- Toast Banner -->
          ${state.toastMessage ? `
            <div class="app-toast">
              <span>${state.toastMessage}</span>
              ${icon('check', 16)}
            </div>
          ` : ''}

          <!-- Screen Content Area -->
          <div class="app-screen-content" id="app-screen-scroll">
            ${state.currentTab === 'auth' ? `
              ${renderAuthScreen()}
            ` : state.role === 'consumer' ? `
              ${state.currentTab === 'home' ? `
                ${renderConsumerHeader()}
                ${renderVeggiPromoSlider()}
                ${renderCategoryPills()}
                ${renderFreshnessRibbon()}
                ${renderNearbyFarms()}
                ${renderProductsGrid()}
              ` : ''}

              ${state.currentTab === 'browse' ? `
                ${renderBrowseScreen()}
              ` : ''}

              ${state.currentTab === 'cart' ? `
                ${renderCartScreen()}
              ` : ''}

              ${state.currentTab === 'orders' ? `
                ${renderOrderTrackingScreen()}
              ` : ''}

              ${state.currentTab === 'profile' ? `
                ${renderProfileScreen()}
              ` : ''}
            ` : state.role === 'farmer' ? `
              ${renderFarmerDashboard()}
            ` : state.role === 'rider' ? `
              ${renderRiderScreen()}
            ` : `
              ${renderAdminDashboard()}
            `}
          </div>

          <!-- Floating Basket Bar (Consumer Mode) -->
          ${state.role === 'consumer' && state.currentTab !== 'auth' ? renderFloatingBasketBar() : ''}

          <!-- Bottom Navigation Tab Bar -->
          ${state.role === 'consumer' ? `
            <nav class="bottom-tab-bar">
              <button class="tab-item ${state.currentTab === 'home' ? 'active' : ''}" data-tab="home">
                ${icon('home')}
                <span>${t('navHome')}</span>
              </button>
              <button class="tab-item ${state.currentTab === 'browse' ? 'active' : ''}" data-tab="browse">
                ${icon('search')}
                <span>${t('navBrowse')}</span>
              </button>
              <button class="tab-item ${state.currentTab === 'cart' ? 'active' : ''}" data-tab="cart">
                ${icon('shoppingBag')}
                <span>${t('navCart')}</span>
                ${cartInfo.itemCount > 0 ? `<span class="tab-badge">${cartInfo.itemCount}</span>` : ''}
              </button>
              <button class="tab-item ${state.currentTab === 'orders' ? 'active' : ''}" data-tab="orders">
                ${icon('package')}
                <span>${t('navOrders')}</span>
                ${state.orders.length > 0 ? `<span class="tab-badge">1</span>` : ''}
              </button>
              <button class="tab-item ${state.currentTab === 'profile' ? 'active' : ''}" data-tab="profile">
                ${icon('user')}
                <span>${t('navProfile')}</span>
              </button>
            </nav>
          ` : state.role === 'farmer' ? `
            <nav class="bottom-tab-bar">
              <button class="tab-item ${state.farmerTab === 'today' ? 'active' : ''}" data-farmer-tab="today">
                ${icon('sun')}
                <span>Today</span>
              </button>
              <button class="tab-item ${state.farmerTab === 'produce' ? 'active' : ''}" data-farmer-tab="produce">
                ${icon('leaf')}
                <span>Produce</span>
              </button>
              <button class="tab-item ${state.farmerTab === 'orders' ? 'active' : ''}" data-farmer-tab="orders">
                ${icon('package')}
                <span>Orders</span>
              </button>
              <button class="tab-item ${state.farmerTab === 'earnings' ? 'active' : ''}" data-farmer-tab="earnings">
                ${icon('trendingUp')}
                <span>Earnings</span>
              </button>
            </nav>
          ` : state.role === 'rider' ? `
            <nav class="bottom-tab-bar">
              <button class="tab-item active">
                ${icon('truck')}
                <span>My Drops</span>
              </button>
              <button class="tab-item" id="btn-rider-map-view">
                ${icon('mapPin')}
                <span>Route</span>
              </button>
              <button class="tab-item" id="btn-rider-history">
                ${icon('package')}
                <span>Completed</span>
              </button>
            </nav>
          ` : `
            <nav class="bottom-tab-bar">
              <button class="tab-item active">
                ${icon('shieldCheck')}
                <span>Audit & Security</span>
              </button>
              <button class="tab-item" id="btn-admin-view-farmers">
                ${icon('leaf')}
                <span>Farms</span>
              </button>
              <button class="tab-item" id="btn-admin-view-orders">
                ${icon('package')}
                <span>Ledger</span>
              </button>
            </nav>
          `}

          <!-- Modals -->
          ${renderProductDetailModal()}
          ${renderFarmerProfileModal()}
          ${renderAddHarvestModal()}
          ${renderReportIssueModal()}
          ${renderKycPreviewModal()}
        </div>
      </div>
    </div>
  `;

  bindEvents();
}

// Bind Interactive Event Listeners
function bindEvents() {
  // Role Switchers (Sec 5.2 RBAC)
  document.querySelector('#btn-role-consumer')?.addEventListener('click', () => {
    state.role = 'consumer';
    state.currentTab = 'home';
    recordAuditLog('ROLE_SWITCH', 'User', 'Consumer (Priya)', 'info', 'Switched session context to Priya Sharma.');
    renderApp();
  });

  document.querySelector('#btn-role-farmer')?.addEventListener('click', () => {
    state.role = 'farmer';
    recordAuditLog('ROLE_SWITCH', 'User', 'Farmer (Ramesh)', 'info', 'Switched session context to Ramesh Patel.');
    renderApp();
  });

  document.querySelector('#btn-role-rider')?.addEventListener('click', () => {
    state.role = 'rider';
    recordAuditLog('ROLE_SWITCH', 'User', 'Rider (Amit)', 'info', 'Switched session context to Rider Amit Kumar.');
    renderApp();
  });

  document.querySelector('#btn-role-admin')?.addEventListener('click', () => {
    state.role = 'admin';
    recordAuditLog('ROLE_SWITCH', 'User', 'Admin Console', 'security', 'Privileged Admin session activated via MFA policy.');
    renderApp();
  });

  // Language Toggles
  document.querySelector('#btn-toggle-lang')?.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'hi' : 'en';
    renderApp();
  });

  document.querySelector('#header-lang-btn')?.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'hi' : 'en';
    renderApp();
  });

  document.querySelector('#prof-lang-en')?.addEventListener('click', () => {
    state.lang = 'en';
    renderApp();
  });

  document.querySelector('#prof-lang-hi')?.addEventListener('click', () => {
    state.lang = 'hi';
    renderApp();
  });

  document.querySelector('#btn-toggle-device')?.addEventListener('click', () => {
    state.frameMode = state.frameMode === 'normal' ? 'expanded' : 'normal';
    renderApp();
  });

  // Advance Order Step Simulation
  document.querySelector('#btn-sim-order-step')?.addEventListener('click', () => {
    if (state.orders.length > 0) {
      const ord = state.orders[0];
      const steps = [
        { name: 'placed', title: 'Order Placed' },
        { name: 'accepted', title: 'Order Accepted by Farmer' },
        { name: 'packed', title: 'Packed at Farm' },
        { name: 'out_for_delivery', title: 'Out for Delivery' },
        { name: 'delivered', title: 'Delivered Successfully' }
      ];

      let currentIndex = steps.findIndex(s => s.name === ord.status);
      let nextIndex = (currentIndex + 1) % steps.length;
      ord.status = steps[nextIndex].name;

      ord.timeline.forEach((tl, idx) => {
        tl.done = idx <= nextIndex;
        tl.current = idx === nextIndex;
      });

      state.currentTab = 'orders';
      recordAuditLog('ORDER_STATE_TRANSITION', 'Order State Machine', `Order #${ord.id}`, 'info', `State transitioned to ${steps[nextIndex].title}`);
      showToast(`Order status updated: ${steps[nextIndex].title}!`);
    }
  });

  // Bottom Nav Tabs (Consumer)
  document.querySelectorAll('.tab-item[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      state.currentTab = tab.dataset.tab;
      renderApp();
    });
  });

  // Farmer Tabs
  document.querySelectorAll('.tab-item[data-farmer-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      state.farmerTab = tab.dataset.farmerTab;
      renderApp();
    });
  });

  // Admin Subtabs
  document.querySelectorAll('[data-admin-subtab]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.adminTab = btn.dataset.adminSubtab;
      renderApp();
    });
  });

  // Floating Basket Click
  document.querySelector('#floating-basket-trigger')?.addEventListener('click', () => {
    state.currentTab = 'cart';
    renderApp();
  });

  document.querySelector('#btn-cart-browse')?.addEventListener('click', () => {
    state.currentTab = 'home';
    renderApp();
  });

  // Search Input Handlers
  const searchInput = document.querySelector('#search-input') || document.querySelector('#browse-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderApp();
      const newInp = document.querySelector('#search-input') || document.querySelector('#browse-search-input');
      if (newInp) {
        newInp.focus();
        newInp.setSelectionRange(newInp.value.length, newInp.value.length);
      }
    });
  }

  document.querySelector('#clear-search')?.addEventListener('click', () => {
    state.searchQuery = '';
    renderApp();
  });

  // Category Pills & Circular Rail
  document.querySelectorAll('[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedCategory = btn.dataset.cat;
      renderApp();
    });
  });

  // VeggiFresh Promo Card Clicks
  document.querySelectorAll('[data-promo]').forEach(card => {
    card.addEventListener('click', () => {
      const promoType = card.dataset.promo;
      if (promoType === 'flash') {
        showToast(state.lang === 'en' ? '🎟️ Promo FRESH35 copied! 35% discount applied at checkout.' : '🎟️ प्रोमो FRESH35 लागू! 35% छूट चेकआउट पर मिलेगी।');
      } else if (promoType === 'slots') {
        showToast(state.lang === 'en' ? '🌅 Morning harvest slot (7:00 AM – 9:00 AM) active for your order!' : '🌅 सुबह 7:00 – 9:00 AM का स्लॉट आपके ऑर्डर के लिए सक्रिय है!');
      } else {
        showToast(state.lang === 'en' ? '🛡️ 100% MSP paid directly to verified farmers via UPI.' : '🛡️ किसानों को 100% सीधा भुगतान यूपीआई द्वारा!');
      }
    });
  });

  // Add Item to Cart
  document.querySelectorAll('[data-add-prod]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.addProd;
      state.cart[id] = (state.cart[id] || 0) + 1;
      showToast(state.lang === 'en' ? 'Item added to basket!' : 'सब्ज़ी टोकरी में जुड़ी!');
    });
  });

  // Increase Qty
  document.querySelectorAll('[data-inc-prod]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.incProd;
      state.cart[id] = (state.cart[id] || 0) + 1;
      renderApp();
    });
  });

  // Decrease Qty
  document.querySelectorAll('[data-dec-prod]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.decProd;
      if (state.cart[id] > 1) {
        state.cart[id]--;
      } else {
        delete state.cart[id];
      }
      renderApp();
    });
  });

  // Delivery Slot Selection
  document.querySelectorAll('.slot-chip[data-slot-id]').forEach(chip => {
    chip.addEventListener('click', () => {
      state.selectedSlotId = chip.dataset.slotId;
      renderApp();
    });
  });

  // Payment Radio
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.paymentMode = radio.value;
      renderApp();
    });
  });

  // DPDP Consent Checkbox
  document.querySelector('#dpdp-consent-chk')?.addEventListener('change', (e) => {
    state.dpdpConsent = e.target.checked;
  });

  // Product Card Click -> Detail Modal
  document.querySelectorAll('.product-card[data-product-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.productId;
      state.activeProductModal = state.products.find(p => p.id === id);
      renderApp();
    });
  });

  // Farmer Card Click -> Farmer Profile Modal
  document.querySelectorAll('.farm-card[data-farmer-id], #detail-farmer-click[data-farmer-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.farmerId;
      state.activeFarmerModal = state.farmers.find(f => f.id === id);
      state.activeProductModal = null;
      renderApp();
    });
  });

  // Close Modals
  document.querySelector('#btn-close-product-modal')?.addEventListener('click', () => {
    state.activeProductModal = null;
    renderApp();
  });
  document.querySelector('#product-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'product-modal-backdrop') {
      state.activeProductModal = null;
      renderApp();
    }
  });

  document.querySelector('#btn-close-farmer-modal')?.addEventListener('click', () => {
    state.activeFarmerModal = null;
    renderApp();
  });
  document.querySelector('#farmer-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'farmer-modal-backdrop') {
      state.activeFarmerModal = null;
      renderApp();
    }
  });

  // Follow Farmer Toggle
  document.querySelector('#btn-toggle-follow-farmer')?.addEventListener('click', (e) => {
    const id = e.currentTarget.dataset.farmerId;
    const f = state.farmers.find(farm => farm.id === id);
    if (f) {
      f.isFollowed = !f.isFollowed;
      recordAuditLog('FARMER_FOLLOW_TOGGLE', 'Priya Sharma', f.name, 'info', `Notification alert state: ${f.isFollowed}`);
      showToast(f.isFollowed 
        ? `You will now receive alerts when ${f.name} harvests!` 
        : `Unfollowed ${f.name}`);
    }
  });

  // Place Order Action with Idempotency Key & Audit Log (Sec 7, 8)
  document.querySelector('#btn-place-order')?.addEventListener('click', () => {
    const { total, items } = getCartDetails();
    if (items.length === 0) return;

    if (!state.dpdpConsent) {
      showToast('Please check DPDP Act 2023 Consent to proceed.');
      return;
    }

    const idemKey = `fc_ord_idem_${Date.now()}`;
    const orderId = `FC-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder = {
      id: orderId,
      placedAt: 'Just now',
      slot: 'Tomorrow Morning: 7:00 AM – 9:00 AM',
      farmerId: items[0].product.farmerId,
      farmerName: 'Ramesh Patel',
      farmerPhone: '+91 98234 ••••2',
      farmerPhoneRaw: '+91 98234 51092',
      riderName: 'Amit Kumar',
      riderVehicle: 'Hero EV · DL 03 AX 4812',
      riderPhone: '+91 98102 ••••1',
      riderPhoneRaw: '+91 98102 99401',
      customerName: 'Priya Sharma',
      customerPhone: '+91 98765 ••••0',
      customerPhoneRaw: '+91 98765 43210',
      deliveryOtp: String(Math.floor(1000 + Math.random() * 9000)),
      status: 'placed',
      idempotencyKey: idemKey,
      items: items.map(i => ({
        name: i.product.name,
        qty: i.qty,
        unit: i.product.unit,
        price: i.product.price
      })),
      bill: {
        subtotal: total - 30,
        deliveryFee: 20,
        farmerSupportFee: 10,
        packagingFee: 0,
        total: total
      },
      paymentMode: state.paymentMode === 'upi' ? 'UPI (Tokenized Razorpay Gateway)' : 'Cash on Delivery (Ledger Reconciled)',
      deliveryAddress: 'Flat A-402, Sunrise Enclave, Sector 14',
      timeline: [
        { step: 'Order Placed', time: 'Just now', done: true, current: true, desc: 'Idempotency validated & routed' },
        { step: 'Order Accepted', time: 'Pending', done: false, desc: 'Farmer will confirm availability within 10 mins' },
        { step: 'Freshly Packed', time: 'Pending', done: false, desc: 'Packed directly in farm eco-crate' },
        { step: 'Out for Delivery', time: 'Pending', done: false, desc: 'Rider picks up from farm with masked relay' },
        { step: 'Delivered', time: 'Pending', done: false, desc: 'Doorstep delivery with OTP verification' }
      ]
    };

    state.orders.unshift(newOrder);
    state.cart = {};
    state.currentTab = 'orders';

    recordAuditLog('ORDER_PLACED_IDEMPOTENT', 'Consumer (Priya)', `Order #${orderId}`, 'info', `Idempotency-Key ${idemKey} locked. Total: ₹${total}`);
    recordAuditLog('DPDP_CONSENT_CAPTURED', 'Priya Sharma', 'Order Processing', 'info', 'DPDP Act 2023 Purpose Limitation consent recorded for Order #' + orderId);
    showToast(state.lang === 'en' ? '🎉 Order Placed Securely! Tracking Live...' : '🎉 ऑर्डर सुरक्षित पक्का हुआ! लाइव ट्रैकिंग शुरू...');
  });

  // Virtual Masked Relay Calls (Sec 4)
  document.querySelector('#btn-call-rider-proxy')?.addEventListener('click', () => {
    recordAuditLog('PROXY_CALL_INITIATED', 'Priya Sharma', 'Rider Amit Kumar', 'info', 'Virtual proxy relay dialed. Real phone numbers remained unexposed.');
    showToast('📞 Dialing Rider via Virtual Proxy (+91 11-4091-XXXX) · Real numbers masked');
  });

  document.querySelector('#btn-call-farmer-proxy')?.addEventListener('click', () => {
    recordAuditLog('PROXY_CALL_INITIATED', 'Priya Sharma', 'Farmer Ramesh Patel', 'info', 'Virtual proxy relay dialed. Real phone numbers remained unexposed.');
    showToast('📞 Dialing Farmer via Virtual Proxy (+91 11-4091-XXXX) · Real numbers masked');
  });

  document.querySelector('#btn-rider-call-proxy')?.addEventListener('click', () => {
    recordAuditLog('PROXY_CALL_INITIATED', 'Rider Amit', 'Customer Priya', 'info', 'Rider connected to customer via Freshcart secure relay.');
    showToast('📞 Connected to Customer via Secure Relay · Number Masked');
  });

  // Rider OTP Verification Flow (Sec 4 & 5.2)
  document.querySelector('#rider-otp-input')?.addEventListener('input', (e) => {
    state.riderOtpInput = e.target.value;
  });

  document.querySelector('#btn-rider-verify-otp')?.addEventListener('click', () => {
    const ord = state.orders[0];
    if (ord && state.riderOtpInput === ord.deliveryOtp) {
      ord.status = 'delivered';
      ord.timeline.forEach(t => t.done = true);
      ord.timeline[4].current = true;
      state.riderOtpInput = '';
      recordAuditLog('DELIVERY_CONFIRMED_OTP', 'Rider Amit Kumar', `Order #${ord.id}`, 'security', `Delivery OTP ${ord.deliveryOtp} verified. Payout queued in ledger.`);
      showToast('✓ OTP Verified! Delivery Completed Successfully!');
      renderApp();
    } else {
      recordAuditLog('OTP_MISMATCH_ALERT', 'Rider Amit', `Order #${ord?.id}`, 'denied', 'Incorrect OTP entered.');
      showToast('❌ Invalid OTP! Check code with customer.');
    }
  });

  // DPDP Act 2023 Data Download (Portability - Sec 11)
  document.querySelector('#btn-download-my-data')?.addEventListener('click', () => {
    const exportData = {
      user: {
        name: 'Priya Sharma',
        phone: '+91 98765 ••••0',
        address: 'Flat A-402, Sunrise Enclave, Sector 14',
        dpdpConsentVersion: '2026.1'
      },
      orderHistory: state.orders.map(o => ({
        id: o.id,
        date: o.placedAt,
        total: o.bill.total,
        status: o.status,
        items: o.items
      })),
      exportTimestamp: new Date().toISOString(),
      compliance: 'India Digital Personal Data Protection Act, 2023'
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `freshcart_user_data_priya_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);

    recordAuditLog('DPDP_DATA_EXPORTED', 'Priya Sharma', 'User Profile', 'info', 'Sanitized JSON data export generated.');
    showToast('✓ Your data export has been downloaded.');
  });

  // DPDP Right to Erasure Request (Sec 11)
  document.querySelector('#btn-request-erasure')?.addEventListener('click', () => {
    if (confirm('Request Account & Data Erasure under DPDP Act 2023? Your order records will be anonymized within 7 days.')) {
      recordAuditLog('DPDP_ERASURE_REQUESTED', 'Priya Sharma', 'Account & PII', 'security', 'Formal erasure request filed. Scheduled for anonymization within SLA.');
      showToast('✓ Erasure request recorded with Data Protection Officer (Ref: #ER-8941)');
    }
  });

  // Revoke Other Sessions (Sec 5.1)
  document.querySelectorAll('[data-revoke-session]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.revokeSession;
      state.sessions = state.sessions.filter(s => s.id !== id);
      recordAuditLog('SESSION_REVOKED', 'Priya Sharma', `Session ${id}`, 'security', 'Remote device session revoked. JWT blacklisted.');
      showToast('✓ Remote device signed out and revoked!');
      renderApp();
    });
  });

  document.querySelector('#btn-signout-all-devices')?.addEventListener('click', () => {
    state.sessions = state.sessions.filter(s => s.isCurrent);
    recordAuditLog('ALL_SESSIONS_REVOKED', 'Priya Sharma', 'All Remote Devices', 'security', 'All non-current sessions terminated.');
    showToast('✓ Signed out of all other devices!');
    renderApp();
  });

  // KYC Preview Modal (Admin Mode)
  document.querySelectorAll('[data-preview-kyc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.previewKyc;
      state.selectedKycFarmer = state.farmers.find(f => f.id === id);
      state.isKycModalOpen = true;
      recordAuditLog('KYC_DOCUMENT_VIEWED', 'Admin (A. Verma)', state.selectedKycFarmer.name, 'security', 'Expiring signed S3 link accessed with watermarked audit overlay.');
      renderApp();
    });
  });

  document.querySelector('#btn-close-kyc-modal')?.addEventListener('click', () => {
    state.isKycModalOpen = false;
    renderApp();
  });
  document.querySelector('#kyc-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'kyc-modal-backdrop') {
      state.isKycModalOpen = false;
      renderApp();
    }
  });

  document.querySelector('#btn-confirm-approve-kyc')?.addEventListener('click', () => {
    state.isKycModalOpen = false;
    recordAuditLog('KYC_RE_VERIFIED', 'Admin', state.selectedKycFarmer?.name, 'security', 'KYC and penny-drop bank match approved.');
    showToast('✓ Farmer KYC verified and approved for direct catalog listing!');
  });

  // Report Issue Modal & Dual-Approval Check (Sec 8)
  document.querySelector('#btn-report-issue')?.addEventListener('click', () => {
    state.isReportIssueOpen = true;
    renderApp();
  });
  document.querySelector('#btn-close-issue-modal')?.addEventListener('click', () => {
    state.isReportIssueOpen = false;
    renderApp();
  });
  document.querySelector('#issue-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'issue-modal-backdrop') {
      state.isReportIssueOpen = false;
      renderApp();
    }
  });
  document.querySelector('#btn-confirm-report-issue')?.addEventListener('click', () => {
    state.isReportIssueOpen = false;
    recordAuditLog('REFUND_REQUESTED', 'Priya Sharma', 'Order #FC-9428', 'security', 'Refund for ₹187 requested. Amount < ₹500 auto-approved threshold.');
    showToast(state.lang === 'en' ? '✓ Refund of ₹187 credited to your account!' : '✓ ₹187 का रिफंड आपके खाते में जमा कर दिया गया!');
  });

  // Farmer Actions
  document.querySelector('#btn-farmer-accept-order')?.addEventListener('click', () => {
    if (state.orders.length > 0) {
      state.orders[0].status = 'accepted';
      state.orders[0].timeline[1].done = true;
      state.orders[0].timeline[1].current = true;
      recordAuditLog('ORDER_ACCEPTED_FARMER', 'Farmer Ramesh', 'Order #FC-9428', 'info', 'Farmer confirmed harvest availability.');
      showToast('Order #FC-9428 Accepted by Farmer Ramesh!');
    }
  });

  document.querySelector('#btn-farmer-pack-order')?.addEventListener('click', () => {
    if (state.orders.length > 0) {
      state.orders[0].status = 'packed';
      state.orders[0].timeline[2].done = true;
      state.orders[0].timeline[2].current = true;
      recordAuditLog('ORDER_PACKED_FARMER', 'Farmer Ramesh', 'Order #FC-9428', 'info', 'Produce packed in eco-friendly crate.');
      showToast('Order #FC-9428 marked as Freshly Packed!');
    }
  });

  // Add Harvest Flow
  const openAddHarvest = () => {
    state.isAddHarvestOpen = true;
    renderApp();
  };
  document.querySelector('#btn-farmer-add-harvest')?.addEventListener('click', openAddHarvest);
  document.querySelector('#btn-open-add-harvest-modal')?.addEventListener('click', openAddHarvest);
  
  document.querySelector('#btn-close-add-harvest')?.addEventListener('click', () => {
    state.isAddHarvestOpen = false;
    renderApp();
  });
  document.querySelector('#add-harvest-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'add-harvest-modal-backdrop') {
      state.isAddHarvestOpen = false;
      renderApp();
    }
  });

  document.querySelectorAll('[data-select-harvest-veg]').forEach(item => {
    item.addEventListener('click', () => {
      state.newHarvest.name = item.dataset.selectHarvestVeg;
      state.newHarvest.unit = item.dataset.harvestUnit;
      state.newHarvest.category = item.dataset.harvestCat;
      state.newHarvest.image = item.dataset.harvestImg;
      renderApp();
    });
  });

  document.querySelector('#btn-harvest-qty-plus')?.addEventListener('click', () => {
    state.newHarvest.qty += 5;
    renderApp();
  });
  document.querySelector('#btn-harvest-qty-minus')?.addEventListener('click', () => {
    if (state.newHarvest.qty > 5) state.newHarvest.qty -= 5;
    renderApp();
  });

  document.querySelector('#btn-harvest-price-plus')?.addEventListener('click', () => {
    state.newHarvest.price += 2;
    renderApp();
  });
  document.querySelector('#btn-harvest-price-minus')?.addEventListener('click', () => {
    if (state.newHarvest.price > 10) state.newHarvest.price -= 2;
    renderApp();
  });

  document.querySelector('#btn-submit-harvest')?.addEventListener('click', () => {
    const newBatch = {
      id: `prod-${Date.now()}`,
      name: `${state.newHarvest.name} (Fresh Harvest)`,
      hindiName: state.newHarvest.name,
      category: state.newHarvest.category,
      hindiCategory: state.newHarvest.category,
      price: state.newHarvest.price,
      mandiPrice: Math.round(state.newHarvest.price * 0.72),
      unit: state.newHarvest.unit,
      farmerId: 'farmer-1',
      freshness: 'today',
      harvestTime: 'Today, 8:15 AM',
      batchNo: `FC-${Math.floor(900 + Math.random() * 99)}`,
      stockAvailable: state.newHarvest.qty,
      image: state.newHarvest.image,
      growingMethod: 'Jeevamrut natural compost, freshly harvested',
      hindiGrowingMethod: 'जीवामृत खाद व प्राकृतिक सिंचाई',
      description: `Freshly harvested ${state.newHarvest.name} listed directly by farmer Ramesh. Guaranteed crisp and chemical free.`,
      hindiDescription: `किसान रमेश द्वारा आज सुबह सीधे तोड़ी गई ताज़ी फसल।`
    };

    state.products.unshift(newBatch);
    state.isAddHarvestOpen = false;
    recordAuditLog('BATCH_LISTED_FARMER', 'Farmer Ramesh', `${state.newHarvest.name} (${state.newHarvest.qty} units)`, 'info', `Listed at ₹${state.newHarvest.price}/${state.newHarvest.unit}`);
    showToast(`✓ Published ${state.newHarvest.qty} units of ${state.newHarvest.name} to consumers!`);
  });

  // =========================================================================
  // Dedicated Consumer Login Event Handlers (PRD FR-1.1 & FR-1.2)
  // =========================================================================
  
  // Open Auth Page from Header / Top Toolbar
  const openAuthScreen = () => {
    state.authReturnTab = state.currentTab === 'auth' ? 'home' : state.currentTab;
    state.currentTab = 'auth';
    state.authConsumerStep = 'phone';
    renderApp();
  };

  document.querySelector('#header-auth-trigger')?.addEventListener('click', openAuthScreen);
  document.querySelector('#proto-auth-btn')?.addEventListener('click', openAuthScreen);

  // Back Button
  document.querySelector('#btn-consumer-auth-back')?.addEventListener('click', () => {
    state.currentTab = state.authReturnTab || 'home';
    renderApp();
  });

  // Language Toggle on Login Page
  document.querySelector('#btn-consumer-lang-toggle')?.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'hi' : 'en';
    showToast(state.lang === 'en' ? 'Switched to English' : 'भाषा बदलकर हिंदी कर दी गई');
    renderApp();
  });

  // Skip Login / Explore as Guest
  document.querySelector('#btn-consumer-skip')?.addEventListener('click', () => {
    state.currentTab = 'home';
    showToast(state.lang === 'en' ? 'Browsing as Guest Buyer' : 'अतिथि खरीदार के रूप में देख रहे हैं');
    renderApp();
  });

  // Fill Priya's Demo Phone
  document.querySelector('#btn-fill-priya-phone')?.addEventListener('click', () => {
    state.consumerPhoneInput = '9876543210';
    renderApp();
    const phoneInput = document.querySelector('#input-consumer-phone');
    if (phoneInput) phoneInput.focus();
  });

  // Phone Input Change
  document.querySelector('#input-consumer-phone')?.addEventListener('input', (e) => {
    state.consumerPhoneInput = e.target.value.replace(/\D/g, '');
  });

  // Step 1: Send OTP Button
  document.querySelector('#btn-consumer-send-otp')?.addEventListener('click', () => {
    const raw = (state.consumerPhoneInput || '').trim();
    if (raw.length < 10) {
      showToast(state.lang === 'en' ? 'Please enter a valid 10-digit mobile number' : 'कृपया मान्य 10-अंकीय मोबाइल नंबर दर्ज करें');
      return;
    }
    state.authConsumerStep = 'otp';
    state.consumerOtpDigits = ['8', '4', '9', '2', '0', '1'];
    showToast(state.lang === 'en' ? '✓ 6-Digit OTP sent to +91 ' + raw : '✓ 6-अंकीय OTP भेजा गया: +91 ' + raw);
    renderApp();
  });

  // Edit Phone Number (Back to Step 1)
  document.querySelector('#btn-consumer-change-phone')?.addEventListener('click', () => {
    state.authConsumerStep = 'phone';
    renderApp();
  });

  // Auto-Fill Demo OTP
  document.querySelector('#btn-autofill-consumer-otp')?.addEventListener('click', () => {
    state.consumerOtpDigits = ['8', '4', '9', '2', '0', '1'];
    renderApp();
    showToast(state.lang === 'en' ? '✓ Auto-filled demo verification code (849201)' : '✓ डेमो कोड भर दिया गया (849201)');
  });

  // OTP Digit Box Inputs (Auto-advance and Backspace)
  document.querySelectorAll('[data-otp-idx]').forEach((input, index, allInputs) => {
    input.addEventListener('input', (e) => {
      const val = e.target.value.replace(/\D/g, '');
      state.consumerOtpDigits[index] = val ? val[val.length - 1] : '';
      if (val && index < allInputs.length - 1) {
        allInputs[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && index > 0) {
        allInputs[index - 1].focus();
      }
    });
  });

  // Resend OTP via SMS / WhatsApp
  document.querySelector('#btn-resend-sms')?.addEventListener('click', () => {
    showToast(state.lang === 'en' ? '✓ New OTP sent via SMS to registered mobile' : '✓ नया OTP SMS द्वारा भेजा गया');
  });

  document.querySelector('#btn-resend-whatsapp')?.addEventListener('click', () => {
    showToast(state.lang === 'en' ? '✓ OTP sent to your WhatsApp number' : '✓ WhatsApp पर OTP भेजा गया');
  });

  // Step 2: Verify OTP Button
  document.querySelector('#btn-consumer-verify-otp')?.addEventListener('click', () => {
    const code = state.consumerOtpDigits.join('');
    if (code.length < 6) {
      showToast(state.lang === 'en' ? 'Please enter the complete 6-digit OTP' : 'कृपया पूरा 6-अंकीय OTP दर्ज करें');
      return;
    }
    // Proceed to Step 3: Address Confirmation
    state.authConsumerStep = 'address';
    showToast(state.lang === 'en' ? '✓ Phone verified! Confirm delivery address' : '✓ फोन सत्यापित! डिलीवरी पता चुनें');
    renderApp();
  });

  // Address Tag Chips
  document.querySelectorAll('[data-address-tag]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.consumerAddressTag = btn.dataset.addressTag;
      renderApp();
    });
  });

  // Flat Input Change
  document.querySelector('#input-consumer-flat')?.addEventListener('input', (e) => {
    state.consumerAddressFlat = e.target.value;
  });

  // Step 3: Confirm Address & Log In as Consumer
  document.querySelector('#btn-consumer-confirm-address')?.addEventListener('click', () => {
    const flat = state.consumerAddressFlat || 'Flat A-402, Sunrise Enclave';
    
    // Find or create Priya
    let priya = state.users.find(u => u.id === 'usr-1');
    if (!priya) {
      priya = {
        id: 'usr-1',
        name: 'Priya Sharma',
        phone: '+91 ' + (state.consumerPhoneInput || '9876543210'),
        email: 'priya.sharma@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
        address: flat + ', Sector 14, Gurugram',
        role: 'consumer',
        provider: 'phone',
        isVerified: true
      };
      state.users.unshift(priya);
    } else {
      priya.address = flat + ', Sector 14, Gurugram';
      priya.phone = '+91 ' + (state.consumerPhoneInput || '9876543210');
    }

    executeOtpLogin(priya);
    showToast(state.lang === 'en' ? '✓ Welcome to FreshCart, Priya! Today harvest is ready' : '✓ फ़्रेशकार्ट में आपका स्वागत है, प्रिया! ताज़ा सब्ज़ियाँ उपलब्ध हैं');
  });

  // Farmer Portal Switch Link
  document.querySelector('#btn-consumer-switch-farmer')?.addEventListener('click', () => {
    const farmer = state.users.find(u => u.role === 'farmer') || state.users[2];
    executeOtpLogin(farmer);
  });

  // 1-Tap Demo Switcher
  document.querySelectorAll('[data-switch-persona]').forEach(btn => {
    btn.addEventListener('click', () => {
      const uId = btn.dataset.switchPersona;
      const found = state.users.find(u => u.id === uId);
      if (found) {
        executeOtpLogin(found);
      }
    });
  });

  // Profile Screen Sign In / Switch / Sign Out Actions
  document.querySelector('#btn-profile-open-login')?.addEventListener('click', () => {
    state.authReturnTab = 'profile';
    state.currentTab = 'auth';
    renderApp();
  });

  document.querySelector('#btn-profile-switch-account')?.addEventListener('click', () => {
    state.authReturnTab = 'profile';
    state.currentTab = 'auth';
    renderApp();
  });

  document.querySelector('#btn-profile-signout')?.addEventListener('click', () => {
    const prevName = state.currentUser ? state.currentUser.name : 'User';
    const prevEmail = state.currentUser ? state.currentUser.email : '';
    recordAuditLog('AUTH_LOGOUT', prevName, prevEmail, 'info', 'User explicitly signed out. Active session invalidated.');
    state.currentUser = null;
    state.currentTab = 'auth';
    showToast(state.lang === 'en' ? '✓ You have been signed out safely.' : '✓ आप सुरक्षित रूप से लॉग आउट हो गए हैं।');
    renderApp();
  });
}

// Initial Boot
renderApp();
