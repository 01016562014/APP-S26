const apps = [
  { id: "phone", name: "الهاتف", icon: "☎", color: "phone", url: "tel:" },
  { id: "messages", name: "الرسائل", icon: "▰", color: "messages", url: "sms:" },
  { id: "camera", name: "الكاميرا", icon: "◉", color: "camera", action: openCamera },
  { id: "gallery", name: "صور Google", icon: "▧", color: "gallery", url: "https://photos.google.com/" },
  { id: "playstore", name: "متجر Play", icon: "▶", color: "playstore", url: "https://play.google.com/store" },
  { id: "play-services", name: "خدمات Google Play", icon: "G", color: "google", url: "https://play.google.com/store/apps/details?id=com.google.android.gms" },
  { id: "google", name: "Google", icon: "G", color: "google", url: "https://www.google.com/" },
  { id: "gmail", name: "Gmail", icon: "M", color: "gmail", url: "https://mail.google.com/" },
  { id: "maps", name: "خرائط Google", icon: "⌖", color: "maps", url: "https://maps.google.com/" },
  { id: "youtube", name: "YouTube", icon: "▶", color: "youtube", url: "https://www.youtube.com/" },
  { id: "drive", name: "Google Drive", icon: "△", color: "drive", url: "https://drive.google.com/" },
  { id: "calendar", name: "تقويم Google", icon: "٣١", color: "calendar", url: "https://calendar.google.com/" },
  { id: "chrome", name: "Chrome", icon: "◉", color: "chrome", url: "https://www.google.com/chrome/" },
  { id: "meet", name: "Google Meet", icon: "▣", color: "meet", url: "https://meet.google.com/" },
  { id: "gemini", name: "Gemini", icon: "✦", color: "gemini", url: "https://gemini.google.com/" },
  { id: "keep", name: "Google Keep", icon: "▤", color: "notes", url: "https://keep.google.com/" },
  { id: "contacts", name: "جهات اتصال Google", icon: "●", color: "contacts", url: "https://contacts.google.com/" },
  { id: "google-one", name: "Google One", icon: "1", color: "google", url: "https://one.google.com/" },
  { id: "browser", name: "الإنترنت", icon: "◎", color: "browser", url: "https://www.google.com/" },
  { id: "settings", name: "الضبط", icon: "⚙", color: "settings", action: showSettings },
  { id: "clock", name: "الساعة", icon: "◷", color: "clock", action: showClock },
  { id: "calculator", name: "الحاسبة", icon: "＋", color: "calculator", action: showCalculator },
  { id: "music", name: "YouTube Music", icon: "♫", color: "music", url: "https://music.youtube.com/" }
];

const appIconMarkup = {
  phone: '<path d="M7.1 3.8 4.8 5a2 2 0 0 0-.9 2.3 17.8 17.8 0 0 0 12.8 12.8 2 2 0 0 0 2.3-.9l1.2-2.3-4.1-2-1.3 1.7a14.5 14.5 0 0 1-5.5-5.5L11 9.8z" fill="currentColor"/>',
  messages: '<path d="M4.2 5.5h15.6a1.7 1.7 0 0 1 1.7 1.7v8.2a1.7 1.7 0 0 1-1.7 1.7h-8l-5.5 3v-3H4.2a1.7 1.7 0 0 1-1.7-1.7V7.2a1.7 1.7 0 0 1 1.7-1.7" fill="currentColor"/><circle cx="8" cy="11.3" r="1" fill="#268f75"/><circle cx="12" cy="11.3" r="1" fill="#268f75"/><circle cx="16" cy="11.3" r="1" fill="#268f75"/>',
  camera: '<path d="M4 7.5h3l1.4-2h7.2l1.4 2h3a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 18V9A1.5 1.5 0 0 1 4 7.5Z" fill="currentColor"/><circle cx="12" cy="13.2" r="4" fill="#808b9d"/><circle cx="12" cy="13.2" r="2.5" fill="#dce8f8"/><circle cx="18" cy="9.7" r=".8" fill="#dce8f8"/>',
  gallery: '<path d="M12 11c-2.2-1-2.4-4.9-.5-7 2.4 1.3 3.3 4.9 1.1 7.1l-.6-.1Z" fill="#ffcf4a"/><path d="M13 12c1-2.2 4.9-2.4 7-.5-1.3 2.4-4.9 3.3-7.1 1.1l.1-.6Z" fill="#ff6d7f"/><path d="M12 13c2.2 1 2.4 4.9.5 7-2.4-1.3-3.3-4.9-1.1-7.1l.6.1Z" fill="#8d75ff"/><path d="M11 12c-1 2.2-4.9 2.4-7 .5 1.3-2.4 4.9-3.3 7.1-1.1l-.1.6Z" fill="#31d4b0"/><path d="M11.5 11.5c-1.3-1.8.2-4.4 2.3-4.5 1.4 1.8.6 4.1-1.4 5.1l-.9-.6Z" fill="#ff678f"/><circle cx="12" cy="12" r="2" fill="#fff"/>',
  playstore: '<path d="M5 3.7 14.2 12 5 20.3a1.5 1.5 0 0 1-.7-1.3V5a1.5 1.5 0 0 1 .7-1.3Z" fill="#34a853"/><path d="m5 3.7 11 6.2-2.1 2.1L5 3.7Z" fill="#4285f4"/><path d="m5 20.3 11-6.2-2.1-2.1L5 20.3Z" fill="#ea4335"/><path d="m16 9.9 3.3 1.9a.3.3 0 0 1 0 .5L16 14.1 13.9 12 16 9.9Z" fill="#fbbc04"/>',
  "play-services": '<text x="12" y="18" fill="#fff" font-size="17" font-weight="700" text-anchor="middle" font-family="Arial,sans-serif">G</text>',
  google: '<text x="12" y="18" fill="#fff" font-size="17" font-weight="700" text-anchor="middle" font-family="Arial,sans-serif">G</text>',
  gmail: '<path d="M4 7.2 12 13l8-5.8v10.3a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5V7.2Z" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/><path d="m4.5 7 7.5 5.7L19.5 7" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>',
  maps: '<path d="m3.5 6 5-2 7 2 5-2v14l-5 2-7-2-5 2V6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8.5 4v14m7-12v14" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 7a3 3 0 0 0-3 3c0 2.2 3 5.5 3 5.5s3-3.3 3-5.5a3 3 0 0 0-3-3Z" fill="#ea4335"/><circle cx="12" cy="10" r="1" fill="#fff"/>',
  youtube: '<rect x="3" y="5.5" width="18" height="13" rx="4" fill="rgba(255,255,255,.2)"/><path d="m10 9 5 3-5 3V9Z" fill="#fff"/>',
  drive: '<path d="m8.2 4 4.1.1 7.1 12.2-2.1 3.7H13L5.9 7.7 8.2 4Z" fill="#4285f4"/><path d="M8.2 4 3 13l2.2 3.3L12.3 4H8.2Z" fill="#0f9d58"/><path d="M5.2 16.3h14.2L17.3 20H7.4l-2.2-3.7Z" fill="#fbbc04"/>',
  calendar: '<rect x="3.5" y="4.5" width="17" height="16" rx="4" fill="#fff"/><path d="M3.5 8a3.5 3.5 0 0 1 3.5-3.5h10A3.5 3.5 0 0 1 20.5 8v2h-17V8Z" fill="#18c6b8"/><path d="M8 3.5v3m8-3v3" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><text x="12" y="17.6" fill="#242a32" font-size="8" font-weight="700" text-anchor="middle" font-family="Arial,sans-serif">31</text>',
  chrome: '<circle cx="12" cy="12" r="9" fill="#fbbc05"/><path d="M12 12 7.5 20a9 9 0 0 1-4.3-12.5h9.2L12 12Z" fill="#34a853"/><path d="M3.2 7.5A9 9 0 0 1 20.2 7H12l-1.8 3.2-7-.7Z" fill="#ea4335"/><circle cx="12" cy="12" r="4" fill="#4285f4" stroke="#fff" stroke-width="1.4"/>',
  meet: '<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h7A2.5 2.5 0 0 1 16 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 16.5v-9Z" fill="#34a853"/><path d="m16 9 4-3v12l-4-3V9Z" fill="#4285f4"/>',
  gemini: '<path d="M12 2.5c1.2 5.1 3.4 7.3 9.5 9.5-6.1 1.3-8.3 3.5-9.5 9.5-1.3-6-3.5-8.2-9.5-9.5 6-2.2 8.2-4.4 9.5-9.5Z" fill="currentColor"/>',
  keep: '<path d="M8 3.5h8l-.8 3.2a6.7 6.7 0 0 1 3.3 5.8v6.2H5.5v-6.2a6.7 6.7 0 0 1 3.3-5.8L8 3.5Z" fill="currentColor"/><path d="M9 21h6m-5-7h4" stroke="#805819" stroke-width="1.5" stroke-linecap="round"/>',
  contacts: '<circle cx="12" cy="8" r="4" fill="#fff"/><path d="M4 20a8 8 0 0 1 16 0H4Z" fill="#fff"/><path d="M19.2 5.1a2.1 2.1 0 1 1 0 4.2" fill="none" stroke="#ffd4dc" stroke-width="1.4" stroke-linecap="round"/>',
  "google-one": '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9.5 12.5 8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  browser: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 12h17M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  settings: '<path d="m10 2.7 4-.1.9 2.5 2 .8 2.3-1.1 2.1 3.6-1.8 1.9.1 2.2 1.7 1.9-2 3.7-2.5-.9-2 .9-.9 2.5h-4l-.9-2.5-2-.8-2.4 1.1-2-3.6 1.7-1.9-.1-2.2-1.7-1.9 2-3.7 2.5.9 2-.9.9-2.4Z" fill="#f4f5f8"/><circle cx="12" cy="11" r="3.3" fill="#50545d"/><circle cx="12" cy="11" r="1.5" fill="#d6d9df"/>',
  clock: '<circle cx="12" cy="12" r="9.5" fill="#fff"/><circle cx="12" cy="12" r="7.5" fill="none" stroke="#bec6d2" stroke-width=".8"/><path d="M12 6.5V12l4 2.6" fill="none" stroke="#65738b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="1" fill="#65738b"/>',
  calculator: '<rect x="4" y="3" width="16" height="18" rx="7" fill="#f5f5f2"/><rect x="12.2" y="4.6" width="5.8" height="14.8" rx="2.8" fill="#18bf58"/><circle cx="8.2" cy="8" r="2.1" fill="#42464b"/><path d="M8.2 6.7v2.6M6.9 8h2.6" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><circle cx="8.2" cy="13" r="2" fill="#42464b"/><path d="M7 13h2.4" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><path d="M15.1 8h0m0 4h0m0 4h0" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>',
  music: '<path d="M10 17V5l10-2v12" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><ellipse cx="7" cy="17" rx="3.5" ry="2.5" fill="currentColor"/><ellipse cx="17" cy="15" rx="3.5" ry="2.5" fill="currentColor"/>'
};

function createAppIconGraphic(appId) {
  const markup = appIconMarkup[appId];
  if (!markup) return undefined;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.innerHTML = markup;
  return svg;
}

function createAppIcon(app) {
  const icon = document.createElement("span");
  icon.className = `app-icon icon-${app.color} app-${app.id}`;
  icon.setAttribute("aria-hidden", "true");
  const graphic = createAppIconGraphic(app.id);
  if (graphic) icon.append(graphic);
  else icon.textContent = app.icon;
  return icon;
}

const drawer = document.querySelector("#drawer");
const search = document.querySelector("#app-search");
const quickSettings = document.querySelector("#quick-settings");
const quickTileGrid = document.querySelector("#quick-tiles");
const shadeCustomization = document.querySelector("#shade-customization");
const shadeCustomizationList = document.querySelector("#shade-customization-list");
const systemSettings = document.querySelector("#system-settings");
const settingsContent = document.querySelector("#settings-content");
const aboutContent = document.querySelector("#about-content");
const settingsSearch = document.querySelector("#settings-search-input");
const cameraPanel = document.querySelector("#camera-panel");
const calculatorPanel = document.querySelector("#calculator-panel");
const calculatorDisplay = document.querySelector("#calculator-display");
const appViewer = document.querySelector("#app-viewer");
const appViewerFrame = document.querySelector("#app-viewer-frame");
const appViewerAddress = document.querySelector("#app-viewer-address");
const appViewerUrl = document.querySelector("#app-viewer-url");
const appViewerLocal = document.querySelector("#app-viewer-local");
const lockScreen = document.querySelector("#lock-screen");
const cameraPreview = document.querySelector("#camera-preview");
const cameraMessage = document.querySelector("#camera-message");
const toast = document.querySelector("#toast");
let cameraStream;
let cameraFacingMode = "environment";
let toastTimeout;
let calculatorExpression = "";
let simulatedVolume = 65;
let shadeGestureStart;
let drawerGestureStart;
const shadeGestureThreshold = 70;
const shadeCustomizationStorageKey = "s26-shade-customization-v1";
const defaultQuickTileOrder = [...quickTileGrid.children].map((tile) => tile.dataset.toggle);
const navigationPanel = document.querySelector("#recents-panel");
const recentApps = [];
let currentSettingsPage = "main";
let lockPin = "";
let enteredPin = "";
let lockSwipeStartY = null;
let returnFromLock = { destination: "home", page: "main" };

const wallpaperNames = ["dusk", "aurora", "peach", "ocean"];
const themeColors = {
  violet: "#d0bcff",
  blue: "#b7c8ff",
  green: "#a5d5b7",
  rose: "#f0b9d1"
};
const lockClockStyles = ["stack", "rounded", "minimal"];

function renderApps(container, list) {
  container.replaceChildren(...list.map((app) => {
    const button = document.createElement("button");
    button.className = "app-tile";
    button.type = "button";
    button.setAttribute("aria-label", `فتح ${app.name}`);

    const icon = createAppIcon(app);

    const name = document.createElement("span");
    name.className = "app-name";
    name.textContent = app.name;

    button.append(icon, name);
    button.addEventListener("click", () => {
      closeOverlays();
      openApp(app);
    });
    return button;
  }));
}

function addRecentApp(app) {
  if (!app) return;
  const index = recentApps.findIndex((recent) => recent.id === app.id);
  if (index >= 0) recentApps.splice(index, 1);
  recentApps.unshift(app);
  recentApps.splice(6);
  renderRecentApps();
}

function renderRecentApps() {
  const container = document.querySelector("#recent-apps");
  container.replaceChildren(...recentApps.map((app) => {
    const card = document.createElement("button");
    card.className = "recent-card";
    card.type = "button";
    card.setAttribute("aria-label", `العودة إلى ${app.name}`);

    const icon = createAppIcon(app);

    const name = document.createElement("strong");
    name.textContent = app.name;
    card.append(icon, name);
    card.addEventListener("click", () => {
      closeOverlays();
      openApp(app);
    });
    return card;
  }));
  document.querySelector("#recents-empty").hidden = recentApps.length > 0;
}

function openApp(app) {
  addRecentApp(app);
  if (app.action) {
    app.action();
    return;
  }
  if (app.url) {
    openAppViewer(app);
  }
}

function navigateAppViewer(rawUrl) {
  const candidate = rawUrl.trim();
  const normalizedUrl = /^[a-z][a-z\d+.-]*:/i.test(candidate)
    ? candidate
    : `https://${candidate}`;
  let destination;
  try {
    destination = new URL(normalizedUrl);
  } catch {
    showToast("عنوان الموقع غير صالح.");
    return;
  }
  if (destination.protocol !== "http:" && destination.protocol !== "https:") {
    showToast("يمكن فتح مواقع HTTP وHTTPS فقط داخل الهاتف.");
    return;
  }
  appViewerFrame.hidden = false;
  appViewerLocal.hidden = true;
  document.querySelector("#app-viewer-notice").hidden = false;
  appViewerFrame.src = destination.href;
  appViewerUrl.value = destination.href;
  document.querySelector("#open-app-external").href = destination.href;
}

function openAppViewer(app) {
  const viewerName = document.querySelector("#app-viewer-name");
  const viewerIcon = document.querySelector("#app-viewer-icon");
  const externalLink = document.querySelector("#open-app-external");
  externalLink.setAttribute("aria-label", "فتح خارج الهاتف");
  viewerName.textContent = app.name;
  viewerIcon.replaceChildren(createAppIcon(app));
  appViewer.hidden = false;

  if (app.url.startsWith("http://") || app.url.startsWith("https://")) {
    appViewerAddress.hidden = app.id !== "browser" && app.id !== "chrome";
    navigateAppViewer(app.url);
    return;
  }

  appViewerAddress.hidden = true;
  appViewerFrame.hidden = true;
  appViewerFrame.src = "about:blank";
  document.querySelector("#app-viewer-notice").hidden = true;
  appViewerLocal.hidden = false;
  document.querySelector("#app-viewer-local-title").textContent = app.name;
  document.querySelector("#app-viewer-local-message").textContent =
    app.id === "phone"
      ? "يمكنك بدء مكالمة من تطبيق الهاتف المثبّت على جهازك."
      : "يمكنك إرسال رسالة من تطبيق الرسائل المثبّت على جهازك.";
  document.querySelector("#app-viewer-local-icon").textContent = app.icon;
  externalLink.href = app.url;
  externalLink.setAttribute("aria-label", `فتح ${app.name} على الجهاز`);
  const localAction = document.querySelector("#app-viewer-local-action");
  localAction.href = app.url;
  localAction.textContent = app.id === "phone" ? "فتح تطبيق الاتصال" : "فتح تطبيق الرسائل";
}

function closeAppViewer() {
  appViewer.hidden = true;
  appViewerFrame.src = "about:blank";
}

function openDrawer() {
  navigationPanel.hidden = true;
  drawer.hidden = false;
  document.querySelector(".device").classList.add("is-drawer-open");
  search.value = "";
  filterApps("");
  requestAnimationFrame(() => search.focus({ preventScroll: true }));
}

function closeDrawer() {
  drawer.hidden = true;
  document.querySelector(".device").classList.remove("is-drawer-open");
}

function filterApps(query) {
  const normalized = query.trim().toLocaleLowerCase("ar");
  const filtered = apps.filter((app) => app.name.toLocaleLowerCase("ar").includes(normalized));
  renderApps(document.querySelector("#drawer-apps"), filtered);
  document.querySelector("#apps-count").textContent = `${filtered.length} تطبيق`;
  document.querySelector("#empty-state").hidden = filtered.length !== 0;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function changeSimulatedVolume(amount) {
  simulatedVolume = Math.max(0, Math.min(100, simulatedVolume + amount));
  const volumeIndicator = document.querySelector("#volume-indicator");
  volumeIndicator.style.setProperty("--volume-level", `${simulatedVolume}%`);
  volumeIndicator.setAttribute("aria-valuenow", String(simulatedVolume));
  showToast(`مستوى الصوت التجريبي ${simulatedVolume}٪`);
}

function showSettings() {
  setShadeCustomizationOpen(false, false);
  drawer.hidden = true;
  navigationPanel.hidden = true;
  quickSettings.hidden = true;
  cameraPanel.hidden = true;
  calculatorPanel.hidden = true;
  aboutContent.hidden = true;
  document.querySelector("#wallpaper-content").hidden = true;
  document.querySelector("#lock-settings-content").hidden = true;
  settingsContent.hidden = false;
  currentSettingsPage = "main";
  document.querySelector("#settings-search-wrap").hidden = true;
  settingsSearch.value = "";
  filterSettings("");
  systemSettings.hidden = false;
}

function openQuickSettings() {
  setShadeCustomizationOpen(false, false);
  drawer.hidden = true;
  navigationPanel.hidden = true;
  systemSettings.hidden = true;
  cameraPanel.hidden = true;
  calculatorPanel.hidden = true;
  quickSettings.hidden = false;
}

function showSettingsSubpage(page) {
  settingsContent.hidden = true;
  aboutContent.hidden = true;
  document.querySelector("#wallpaper-content").hidden = page !== "wallpaper";
  document.querySelector("#lock-settings-content").hidden = page !== "lock";
  document.querySelector("#settings-search-wrap").hidden = true;
  currentSettingsPage = page;
}

function openLockScreen(returnTo = "home") {
  closeOverlays();
  returnFromLock = {
    destination: returnTo,
    page: currentSettingsPage
  };
  enteredPin = "";
  lockScreen.classList.remove("pin-entry-open");
  updateLockPinEntry();
  lockScreen.hidden = false;
  document.querySelector(".simulator-layout").classList.add("is-lock-screen-open");
  document.querySelector(".device").classList.add("is-locked");
  updateClock();
}

function closeLockScreen() {
  lockScreen.hidden = true;
  lockScreen.classList.remove("pin-entry-open");
  document.querySelector(".simulator-layout").classList.remove("is-lock-screen-open");
  document.querySelector(".device").classList.remove("is-locked");
  enteredPin = "";
  updateLockPinEntry();
  if (returnFromLock.destination === "settings") {
    showSettings();
    if (returnFromLock.page !== "main") showSettingsSubpage(returnFromLock.page);
  }
}

function updateLockPinEntry() {
  const isPinConfigured = lockPin.length > 0;
  lockScreen.classList.toggle("has-pin", isPinConfigured);
  document.querySelector("#pin-keypad").hidden = !isPinConfigured;
  document.querySelector("#setup-pin-from-lock").hidden = isPinConfigured;
  document.querySelector("#lock-prompt").textContent = isPinConfigured
    ? "أدخل رمز PIN لفتح المحاكاة"
    : "معاينة شاشة القفل — إعداد رمز PIN لتفعيل القفل";
  document.querySelector("#cancel-lock").textContent = isPinConfigured ? "إلغاء القفل" : "رجوع";
  document.querySelector("#cancel-lock").hidden = isPinConfigured;
  document.querySelector("#lock-error").textContent = "";
  const dots = document.querySelector("#pin-dots");
  dots.replaceChildren(...Array.from({ length: isPinConfigured ? lockPin.length : 0 }, (_, index) => {
    const dot = document.createElement("span");
    dot.className = `pin-dot${index < enteredPin.length ? " is-filled" : ""}`;
    return dot;
  }));
}

function showLockPinEntry() {
  if (!lockPin) return;
  enteredPin = "";
  updateLockPinEntry();
  lockScreen.classList.add("pin-entry-open");
}

function handleLockPinKey(event) {
  const key = event.target.closest("[data-pin-key]")?.dataset.pinKey;
  if (!key || !lockPin || !lockScreen.classList.contains("pin-entry-open")) return;
  if (key === "delete") {
    enteredPin = enteredPin.slice(0, -1);
    updateLockPinEntry();
    return;
  }
  if (enteredPin.length >= lockPin.length) return;
  enteredPin += key;
  updateLockPinEntry();
  if (enteredPin.length !== lockPin.length) return;
  if (enteredPin === lockPin) {
    closeLockScreen();
  } else {
    document.querySelector("#lock-error").textContent = "رمز PIN غير صحيح. حاول مرة أخرى.";
    enteredPin = "";
    window.setTimeout(updateLockPinEntry, 700);
  }
}

function saveLockPin(event) {
  event.preventDefault();
  const currentPin = document.querySelector("#current-pin").value;
  const newPin = document.querySelector("#new-pin").value;
  const confirmPin = document.querySelector("#confirm-pin").value;
  if (lockPin && currentPin !== lockPin) {
    showToast("رمز PIN الحالي غير صحيح.");
    return;
  }
  if (!/^\d{4,8}$/.test(newPin)) {
    showToast("رمز PIN يجب أن يتكون من ٤ إلى ٨ أرقام.");
    return;
  }
  if (newPin !== confirmPin) {
    showToast("تأكيد رمز PIN غير مطابق.");
    return;
  }
  lockPin = newPin;
  document.querySelector("#current-pin-field").hidden = false;
  document.querySelector("#current-pin").value = "";
  document.querySelector("#new-pin").value = "";
  document.querySelector("#confirm-pin").value = "";
  document.querySelector("#pin-status").textContent = "تم تعيين رمز القفل لهذه الجلسة. يمكنك تغييره بإدخال الرمز الحالي.";
  updateLockPinEntry();
  showToast("تم حفظ رمز PIN للمحاكاة.");
}

function updateWallpaperSelection(name) {
  const device = document.querySelector(".device");
  wallpaperNames.forEach((wallpaper) => device.classList.remove(`wallpaper-${wallpaper}`));
  device.classList.add(`wallpaper-${name}`);
  document.querySelectorAll("[data-wallpaper]").forEach((choice) => {
    choice.classList.toggle("is-selected", choice.dataset.wallpaper === name);
  });
}

function updateThemeSelection(theme) {
  document.querySelector(".device").style.setProperty("--accent-color", themeColors[theme]);
  document.querySelectorAll("[data-theme]").forEach((choice) => {
    const selected = choice.dataset.theme === theme;
    choice.classList.toggle("is-selected", selected);
    choice.setAttribute("aria-pressed", String(selected));
  });
}

function updateLockClockSelection(style) {
  const lockScreen = document.querySelector("#lock-screen");
  lockClockStyles.forEach((clockStyle) => lockScreen.classList.remove(`clock-style-${clockStyle}`));
  lockScreen.classList.add(`clock-style-${style}`);
  document.querySelectorAll("[data-lock-clock]").forEach((choice) => {
    const selected = choice.dataset.lockClock === style;
    choice.classList.toggle("is-selected", selected);
    choice.setAttribute("aria-pressed", String(selected));
  });
}

function closeQuickSettings() {
  setShadeCustomizationOpen(false, false);
  quickSettings.hidden = true;
}

function openRecents() {
  closeOverlays();
  renderRecentApps();
  navigationPanel.hidden = false;
}

function closeOverlays() {
  drawer.hidden = true;
  closeAppViewer();
  document.querySelector(".device").classList.remove("is-drawer-open");
  setShadeCustomizationOpen(false, false);
  quickSettings.hidden = true;
  systemSettings.hidden = true;
  aboutContent.hidden = true;
  settingsContent.hidden = false;
  navigationPanel.hidden = true;
  if (!cameraPanel.hidden) closeCamera();
  else cameraPanel.hidden = true;
  calculatorPanel.hidden = true;
}

function navigateHome() {
  closeOverlays();
  document.querySelector("#nav-home").focus({ preventScroll: true });
}

function navigateBack() {
  if (!lockScreen.hidden) {
    if (lockPin) showToast("أدخل رمز PIN لفتح شاشة القفل.");
    else closeLockScreen();
  }
  else if (!systemSettings.hidden && currentSettingsPage !== "main") closeSystemSettings();
  else if (!systemSettings.hidden) closeSystemSettings();
  else if (!quickSettings.hidden) closeQuickSettings();
  else if (!drawer.hidden) closeDrawer();
  else if (!appViewer.hidden) closeAppViewer();
  else if (!cameraPanel.hidden) closeCamera();
  else if (!calculatorPanel.hidden) closeCalculator();
  else if (!navigationPanel.hidden) navigationPanel.hidden = true;
}

function startDrawerGesture(event) {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.target.closest("button, input, a")) return;
  drawerGestureStart = {
    pointerId: event.pointerId,
    startY: event.clientY,
    startX: event.clientX,
    direction: drawer.hidden ? "open" : "close"
  };
}

function startHomeGesture(event) {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.target.closest("button, input, a")) return;
  drawerGestureStart = {
    pointerId: event.pointerId,
    startY: event.clientY,
    startX: event.clientX,
    direction: "open"
  };
}

function finishDrawerGesture(event) {
  if (!drawerGestureStart || event.pointerId !== drawerGestureStart.pointerId) return;
  const deltaY = event.clientY - drawerGestureStart.startY;
  const deltaX = event.clientX - drawerGestureStart.startX;
  if (Math.abs(deltaY) >= shadeGestureThreshold && Math.abs(deltaY) > Math.abs(deltaX) * 1.3) {
    if (drawerGestureStart.direction === "open" && deltaY < 0) openDrawer();
    else if (drawerGestureStart.direction === "close" && deltaY > 0) closeDrawer();
  }
  drawerGestureStart = undefined;
}

function startShadeGesture(event) {
  if (event.button !== undefined && event.button !== 0) return;
  const interactiveTarget = event.target.closest("button, input, a");
  if (interactiveTarget && !interactiveTarget.matches("#open-quick-settings")) return;
  shadeGestureStart = {
    pointerId: event.pointerId,
    startY: event.clientY,
    startX: event.clientX,
    direction: quickSettings.hidden ? "open" : "close"
  };
}

function finishShadeGesture(event) {
  if (!shadeGestureStart || event.pointerId !== shadeGestureStart.pointerId) return;
  const deltaY = event.clientY - shadeGestureStart.startY;
  const deltaX = event.clientX - shadeGestureStart.startX;
  if (Math.abs(deltaY) >= shadeGestureThreshold && Math.abs(deltaY) > Math.abs(deltaX) * 1.3) {
    if (shadeGestureStart.direction === "open" && deltaY > 0) {
      openQuickSettings();
    } else if (shadeGestureStart.direction === "close" && deltaY < 0) {
      closeQuickSettings();
    }
  }
  shadeGestureStart = undefined;
}

function openAboutSettings() {
  currentSettingsPage = "about";
  settingsContent.hidden = true;
  aboutContent.hidden = false;
  document.querySelector("#settings-search-wrap").hidden = true;
}

function closeSystemSettings() {
  if (currentSettingsPage !== "main") {
    aboutContent.hidden = true;
    document.querySelector("#wallpaper-content").hidden = true;
    document.querySelector("#lock-settings-content").hidden = true;
    settingsContent.hidden = false;
    currentSettingsPage = "main";
    return;
  }
  systemSettings.hidden = true;
}

function filterSettings(query) {
  const normalized = query.trim().toLocaleLowerCase("ar");
  document.querySelectorAll(".settings-item").forEach((item) => {
    item.hidden = !item.textContent.toLocaleLowerCase("ar").includes(normalized);
  });
}

function saveShadeCustomization() {
  const state = {
    order: [...quickTileGrid.children].map((tile) => tile.dataset.toggle),
    hidden: [...quickTileGrid.children].filter((tile) => tile.hidden).map((tile) => tile.dataset.toggle)
  };
  try {
    window.localStorage.setItem(shadeCustomizationStorageKey, JSON.stringify(state));
  } catch (error) {
    console.error("Could not save quick settings customization.", error);
    showToast("تعذر حفظ تخصيص الإعدادات السريعة على هذا المتصفح.");
  }
}

function renderShadeCustomization() {
  shadeCustomizationList.replaceChildren();
  [...quickTileGrid.children].forEach((tile, index, tiles) => {
    const tileId = tile.dataset.toggle;
    const title = tile.querySelector("strong").textContent;
    const row = document.createElement("div");
    row.className = "shade-customization-item";

    const visibilityLabel = document.createElement("label");
    visibilityLabel.className = "shade-customization-visibility";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !tile.hidden;
    checkbox.setAttribute("aria-label", `إظهار ${title}`);
    checkbox.addEventListener("change", () => {
      tile.hidden = !checkbox.checked;
      saveShadeCustomization();
    });
    const visibilityText = document.createElement("span");
    visibilityText.textContent = title;
    visibilityLabel.append(checkbox, visibilityText);

    const moveButtons = document.createElement("div");
    moveButtons.className = "shade-customization-move";
    [
      { direction: -1, label: "تحريك لأعلى", symbol: "↑", disabled: index === 0 },
      { direction: 1, label: "تحريك لأسفل", symbol: "↓", disabled: index === tiles.length - 1 }
    ].forEach(({ direction, label, symbol, disabled }) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "shade-customization-arrow";
      button.textContent = symbol;
      button.disabled = disabled;
      button.setAttribute("aria-label", `${label}: ${title}`);
      button.addEventListener("click", () => moveQuickSetting(tile, direction));
      moveButtons.append(button);
    });

    row.append(visibilityLabel, moveButtons);
    shadeCustomizationList.append(row);
  });
}

function moveQuickSetting(tile, direction) {
  const tiles = [...quickTileGrid.children];
  const index = tiles.indexOf(tile);
  const target = tiles[index + direction];
  if (!target) return;
  if (direction < 0) quickTileGrid.insertBefore(tile, target);
  else quickTileGrid.insertBefore(target, tile);
  saveShadeCustomization();
  renderShadeCustomization();
}

function loadShadeCustomization() {
  try {
    const stored = window.localStorage.getItem(shadeCustomizationStorageKey);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (!parsed || !Array.isArray(parsed.order) || !Array.isArray(parsed.hidden)) {
        throw new Error("Stored quick settings customization has an invalid shape.");
      }
      const allowedIds = new Set(defaultQuickTileOrder);
      const order = parsed.order.filter((id, index) =>
        typeof id === "string" && allowedIds.has(id) && parsed.order.indexOf(id) === index
      );
      const hidden = new Set(parsed.hidden.filter((id) => typeof id === "string" && allowedIds.has(id)));
      const completeOrder = [...order, ...defaultQuickTileOrder.filter((id) => !order.includes(id))];
      completeOrder.forEach((id) => {
        const tile = quickTileGrid.querySelector(`[data-toggle="${id}"]`);
        tile.hidden = hidden.has(id);
        quickTileGrid.append(tile);
      });
    }
  } catch (error) {
    console.error("Could not load quick settings customization.", error);
    showToast("تعذر تحميل تخصيص الإعدادات السريعة؛ ستُستخدم الإعدادات الافتراضية.");
  }
  renderShadeCustomization();
}

function setShadeCustomizationOpen(isOpen, returnFocus = true) {
  quickSettings.classList.toggle("is-customizing", isOpen);
  shadeCustomization.hidden = !isOpen;
  const button = document.querySelector("#open-shade-customization");
  button.setAttribute("aria-pressed", String(isOpen));
  button.setAttribute("aria-label", isOpen ? "إنهاء تخصيص الإعدادات السريعة" : "تخصيص الإعدادات السريعة");
  if (!isOpen && returnFocus) button.focus();
}

function toggleQuickSetting(event) {
  const tile = event.target.closest("[data-toggle]");
  if (!tile) return;
  const isActive = tile.getAttribute("aria-pressed") !== "true";
  tile.setAttribute("aria-pressed", String(isActive));
  tile.classList.toggle("is-active", isActive);
  const description = tile.querySelector("small");
  if (description) description.textContent = isActive ? "مفعّل في المحاكاة" : "متوقف في المحاكاة";
  if (tile.dataset.toggle === "airplane" && isActive) {
    ["internet", "bluetooth"].forEach((toggleName) => {
      const relatedTile = document.querySelector(`[data-toggle="${toggleName}"]`);
      relatedTile.setAttribute("aria-pressed", "false");
      relatedTile.classList.remove("is-active");
      relatedTile.querySelector("small").textContent = "متوقف في المحاكاة";
    });
  }
}

function showClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("ar-EG", { hour: "numeric", minute: "2-digit" }).format(now);
  showToast(`الساعة الآن ${time}`);
}

function showCalculator() {
  calculatorExpression = "";
  updateCalculatorDisplay();
  calculatorPanel.hidden = false;
}

function updateCalculatorDisplay() {
  const display = calculatorExpression
    ? calculatorExpression
      .replaceAll("*", "×")
      .replaceAll("/", "÷")
      .replaceAll("-", "−")
      .replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])
    : "٠";
  calculatorDisplay.textContent = display;
}

function handleCalculatorButton(event) {
  const button = event.target.closest("[data-calculator]");
  if (!button) return;

  const action = button.dataset.calculator;
  const value = button.dataset.value;
  if (action === "clear") {
    calculatorExpression = "";
  } else if (action === "delete") {
    calculatorExpression = calculatorExpression.slice(0, -1);
  } else if (action === "digit") {
    calculatorExpression += value;
  } else if (action === "decimal") {
    calculatorExpression += ".";
  } else if (action === "operator") {
    calculatorExpression += value;
  } else if (action === "equals") {
    try {
      const result = calculate(calculatorExpression);
      if (!Number.isFinite(result)) throw new Error("Result is not finite");
      calculatorExpression = String(Number(result.toPrecision(10)));
    } catch {
      showToast("العملية غير صالحة.");
    }
  }
  updateCalculatorDisplay();
}

function closeCalculator() {
  calculatorPanel.hidden = true;
}

function calculate(expression) {
  const tokens = [];
  const tokenPattern = /\s*(?:(\d*\.?\d+)|([()+\-*/]))/y;
  let position = 0;
  while (position < expression.length) {
    tokenPattern.lastIndex = position;
    const match = tokenPattern.exec(expression);
    if (!match) throw new Error("Invalid expression");
    tokens.push(match[1] ?? match[2]);
    position = tokenPattern.lastIndex;
  }

  let index = 0;
  function primary() {
    if (tokens[index] === "+" || tokens[index] === "-") {
      const sign = tokens[index++] === "-" ? -1 : 1;
      return sign * primary();
    }
    if (tokens[index] === "(") {
      index++;
      const value = sum();
      if (tokens[index++] !== ")") throw new Error("Missing closing parenthesis");
      return value;
    }
    const token = tokens[index++];
    if (token === undefined || !/^\d*\.?\d+$/.test(token)) throw new Error("Expected a number");
    return Number(token);
  }
  function product() {
    let value = primary();
    while (tokens[index] === "*" || tokens[index] === "/") {
      const operator = tokens[index++];
      const next = primary();
      value = operator === "*" ? value * next : value / next;
    }
    return value;
  }
  function sum() {
    let value = product();
    while (tokens[index] === "+" || tokens[index] === "-") {
      const operator = tokens[index++];
      const next = product();
      value = operator === "+" ? value + next : value - next;
    }
    return value;
  }

  const result = sum();
  if (index !== tokens.length) throw new Error("Unexpected input");
  return result;
}

function openCamera() {
  cameraPanel.hidden = false;
  cameraMessage.hidden = false;
  document.querySelector("#camera-live").classList.remove("is-active");
}

async function enableCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    showToast("الكاميرا تتطلب HTTPS أو localhost ومتصفحًا يدعمها.");
    return false;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { facingMode: { ideal: cameraFacingMode } }
    });
    cameraStream?.getTracks().forEach((track) => track.stop());
    cameraStream = stream;
    cameraPreview.srcObject = cameraStream;
    await cameraPreview.play();
    cameraMessage.hidden = true;
    document.querySelector("#camera-live").classList.add("is-active");
    document.querySelector("#camera-switch").disabled = false;
    document.querySelector("#capture-photo").disabled = false;
    updateCameraSwitchLabel();
    return true;
  } catch (error) {
    if (error.name === "NotAllowedError" || error.name === "SecurityError") {
      showToast("اسمح للمتصفح باستخدام الكاميرا، وتأكد من فتح الموقع عبر HTTPS.");
    } else {
      showToast("تعذّر تشغيل الكاميرا على هذا الجهاز.");
    }
    cameraStream?.getTracks().forEach((track) => track.stop());
    cameraStream = undefined;
    cameraPreview.srcObject = null;
    document.querySelector("#camera-live").classList.remove("is-active");
    cameraMessage.hidden = false;
    document.querySelector("#camera-switch").disabled = true;
    document.querySelector("#capture-photo").disabled = true;
    return false;
  }
}

function updateCameraSwitchLabel() {
  const switchButton = document.querySelector("#camera-switch");
  const nextCamera = cameraFacingMode === "user" ? "الخلفية" : "الأمامية";
  switchButton.setAttribute("aria-label", `التبديل إلى الكاميرا ${nextCamera}`);
  switchButton.querySelector("span").textContent = cameraFacingMode === "user" ? "الخلفية" : "السلفي";
}

async function switchCamera() {
  if (!cameraStream) return;
  cameraStream.getTracks().forEach((track) => track.stop());
  cameraStream = undefined;
  cameraPreview.srcObject = null;
  document.querySelector("#camera-live").classList.remove("is-active");
  document.querySelector("#camera-switch").disabled = true;
  document.querySelector("#capture-photo").disabled = true;
  cameraMessage.hidden = false;
  cameraFacingMode = cameraFacingMode === "user" ? "environment" : "user";
  updateCameraSwitchLabel();
  await enableCamera();
}

function capturePhoto() {
  if (!cameraPreview.videoWidth || !cameraPreview.videoHeight) {
    showToast("انتظر حتى تظهر معاينة الكاميرا.");
    return;
  }

  const canvas = document.querySelector("#camera-canvas");
  canvas.width = cameraPreview.videoWidth;
  canvas.height = cameraPreview.videoHeight;
  const context = canvas.getContext("2d");
  if (!context) {
    showToast("تعذّر تجهيز الصورة للحفظ.");
    return;
  }
  context.drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);

  try {
    const photo = canvas.toDataURL("image/jpeg", 0.92);
    if (window.PhotoSaver) {
      const result = window.PhotoSaver.savePhoto(photo);
      if (result === "saved") {
        showToast("تم حفظ الصورة في مجلد الصور.");
      } else if (result === "permission_pending") {
        showToast("اسمح بالوصول لحفظ الصورة في المعرض.");
      } else {
        showToast("تعذّر حفظ الصورة. تحقق من مساحة التخزين.");
      }
      return;
    }

    const download = document.createElement("a");
    download.href = photo;
    download.download = `s26-photo-${Date.now()}.jpg`;
    download.click();
    showToast("تم تنزيل الصورة. راجع التنزيلات أو احفظها في الصور.");
  } catch (error) {
    showToast("تعذّر تجهيز الصورة للحفظ.");
  }
}

function closeCamera() {
  cameraStream?.getTracks().forEach((track) => track.stop());
  cameraStream = undefined;
  cameraPreview.srcObject = null;
  document.querySelector("#camera-switch").disabled = true;
  document.querySelector("#capture-photo").disabled = true;
  cameraPanel.hidden = true;
}

function updateClock() {
  const now = new Date();
  const timeOptions = { hour: "2-digit", minute: "2-digit", hourCycle: "h23" };
  const statusTime = document.querySelector("#status-time");
  statusTime.textContent = new Intl.DateTimeFormat("en-GB", timeOptions).format(now);
  statusTime.dateTime = now.toISOString();
  document.querySelector("#hero-time").textContent =
    new Intl.DateTimeFormat("ar-EG", timeOptions).format(now);
  document.querySelector("#hero-date").textContent =
    new Intl.DateTimeFormat("ar-EG", { weekday: "long", day: "numeric", month: "long" }).format(now);
  document.querySelector("#shade-time").textContent =
    new Intl.DateTimeFormat("ar-EG", timeOptions).format(now);
  document.querySelector("#shade-date").textContent =
    new Intl.DateTimeFormat("ar-EG", { weekday: "long", day: "numeric", month: "long" }).format(now);
  document.querySelector("#lock-time").textContent =
    new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(now);
  document.querySelector("#lock-date").textContent =
    new Intl.DateTimeFormat("en-US", { weekday: "long", day: "numeric", month: "long" }).format(now);
}

const homeAppIds = [
  "keep", "settings", "calendar", "gemini",
  "gallery", "clock", "calculator", "maps",
  "playstore", "youtube", "drive", "google"
];
renderApps(
  document.querySelector("#home-apps"),
  homeAppIds.map((id) => apps.find((app) => app.id === id)).filter(Boolean)
);
document.querySelectorAll(".dock-button").forEach((button) => {
  const appId = button.dataset.app ?? (button.id === "open-camera" ? "camera" : "");
  const icon = button.querySelector(".app-icon");
  const graphic = createAppIconGraphic(appId);
  if (icon && graphic) icon.replaceChildren(graphic);
});
filterApps("");
updateClock();
loadShadeCustomization();
document.querySelector("#volume-indicator").style.setProperty("--volume-level", `${simulatedVolume}%`);
window.setInterval(updateClock, 30_000);

document.querySelector("#open-search").addEventListener("click", openDrawer);
document.querySelector("#open-brief").addEventListener("click", () => {
  showToast("ميزة ملخص الآن للعرض فقط.");
});
document.querySelector("#home-screen").addEventListener("pointerdown", startHomeGesture);
drawer.addEventListener("pointerdown", (event) => {
  const startArea = event.target.closest(".drawer-handle, .drawer-heading");
  if (startArea) startDrawerGesture(event);
});
document.addEventListener("pointerup", finishDrawerGesture);
document.addEventListener("pointercancel", () => { drawerGestureStart = undefined; });
document.querySelector("#close-drawer").addEventListener("click", closeDrawer);
document.querySelector("#open-quick-settings").addEventListener("click", openQuickSettings);
document.querySelector("#close-quick-settings").addEventListener("click", closeQuickSettings);
document.querySelector("#open-shade-customization").addEventListener("click", () => {
  setShadeCustomizationOpen(shadeCustomization.hidden);
});
document.querySelector("#finish-shade-customization").addEventListener("click", () => {
  setShadeCustomizationOpen(false);
});
document.querySelector("#reset-shade-customization").addEventListener("click", () => {
  defaultQuickTileOrder.forEach((id) => {
    const tile = quickTileGrid.querySelector(`[data-toggle="${id}"]`);
    tile.hidden = false;
    quickTileGrid.append(tile);
  });
  saveShadeCustomization();
  renderShadeCustomization();
  showToast("تمت إعادة ترتيب أزرار الإعدادات السريعة.");
});
document.querySelector("#open-quick-settings").addEventListener("pointerdown", startShadeGesture);
quickSettings.addEventListener("pointerdown", (event) => {
  const startArea = event.target.closest(".shade-handle, .shade-heading");
  if (startArea) startShadeGesture(event);
});
document.addEventListener("pointerup", finishShadeGesture);
document.addEventListener("pointercancel", () => { shadeGestureStart = undefined; });
quickSettings.addEventListener("click", toggleQuickSetting);
document.querySelector("#brightness-slider").addEventListener("input", (event) => {
  const brightness = Number(event.target.value) / 100;
  document.querySelector(".device").style.setProperty("--display-brightness", brightness.toFixed(2));
});
document.querySelector("#shade-settings").addEventListener("click", showSettings);
document.querySelector("#shade-lock").addEventListener("click", () => openLockScreen("home"));
document.querySelector("#shade-power").addEventListener("click", () => {
  showToast("زر الطاقة تجريبي ولا يوقف جهازك.");
});
document.querySelector("#clear-notifications").addEventListener("click", () => {
  document.querySelector("#notification-list").replaceChildren();
  showToast("تم مسح إشعارات المحاكاة.");
});
document.querySelector("#close-system-settings").addEventListener("click", closeSystemSettings);
document.querySelector("#nav-home").addEventListener("click", navigateHome);
document.querySelector("#nav-back").addEventListener("click", navigateBack);
document.querySelector("#nav-recents").addEventListener("click", openRecents);
document.querySelector("#clear-recents").addEventListener("click", () => {
  recentApps.length = 0;
  renderRecentApps();
});
document.querySelector("#settings-search-button").addEventListener("click", () => {
  const searchWrap = document.querySelector("#settings-search-wrap");
  searchWrap.hidden = !searchWrap.hidden;
  if (!searchWrap.hidden) settingsSearch.focus();
});
document.querySelector("#settings-search-launch").addEventListener("click", () => {
  document.querySelector("#settings-search-wrap").hidden = false;
  settingsSearch.focus();
});
settingsSearch.addEventListener("input", () => filterSettings(settingsSearch.value));
document.querySelector(".settings-list").addEventListener("click", (event) => {
  const item = event.target.closest("[data-setting]");
  if (!item) return;
  if (item.dataset.setting === "about") {
    openAboutSettings();
  } else if (item.dataset.setting === "wallpaper" || item.dataset.setting === "lock") {
    showSettingsSubpage(item.dataset.setting);
  } else {
    showToast(`قسم ${item.querySelector("strong").textContent} — معاينة إعدادات فقط.`);
  }
});
document.querySelector("#wallpaper-content").addEventListener("click", (event) => {
  const wallpaper = event.target.closest("[data-wallpaper]");
  const theme = event.target.closest("[data-theme]");
  if (wallpaper) updateWallpaperSelection(wallpaper.dataset.wallpaper);
  if (theme) updateThemeSelection(theme.dataset.theme);
});
document.querySelectorAll("[data-lock-clock]").forEach((choice) => {
  choice.addEventListener("click", () => updateLockClockSelection(choice.dataset.lockClock));
});
document.querySelector("#preview-lock-from-wallpaper").addEventListener("click", () => openLockScreen("settings"));
document.querySelector("#pin-form").addEventListener("submit", saveLockPin);
document.querySelector("#lock-now").addEventListener("click", () => openLockScreen("settings"));
document.querySelector("#close-app-viewer").addEventListener("click", closeAppViewer);
document.querySelector("#app-viewer-address").addEventListener("submit", (event) => {
  event.preventDefault();
  navigateAppViewer(appViewerUrl.value);
});
document.querySelector("#pin-keypad").addEventListener("click", handleLockPinKey);
document.querySelector("#cancel-lock").addEventListener("click", closeLockScreen);
document.querySelector("#lock-screen-dismiss").addEventListener("click", () => {
  if (lockPin) showLockPinEntry();
  else closeLockScreen();
});
document.querySelector("#lock-swipe-to-pin").addEventListener("click", showLockPinEntry);
lockScreen.addEventListener("pointerdown", (event) => {
  if (lockPin && !lockScreen.classList.contains("pin-entry-open") && !event.target.closest("button")) {
    lockSwipeStartY = event.clientY;
  }
});
lockScreen.addEventListener("pointerup", (event) => {
  if (lockSwipeStartY === null) return;
  const swipeDistance = lockSwipeStartY - event.clientY;
  lockSwipeStartY = null;
  if (swipeDistance > 50) showLockPinEntry();
});
lockScreen.addEventListener("pointercancel", () => {
  lockSwipeStartY = null;
});
document.querySelector("#setup-pin-from-lock").addEventListener("click", () => {
  const previousDestination = returnFromLock.destination;
  const previousPage = returnFromLock.page;
  lockScreen.hidden = true;
  lockScreen.classList.remove("pin-entry-open");
  document.querySelector(".simulator-layout").classList.remove("is-lock-screen-open");
  document.querySelector(".device").classList.remove("is-locked");
  showSettings();
  showSettingsSubpage("lock");
  returnFromLock = { destination: previousDestination, page: previousPage };
});
document.querySelector("#open-camera").addEventListener("click", openCamera);
document.querySelector("#close-camera").addEventListener("click", closeCamera);
document.querySelector("#enable-camera").addEventListener("click", enableCamera);
document.querySelector("#camera-switch").addEventListener("click", switchCamera);
document.querySelector("#capture-photo").addEventListener("click", capturePhoto);
window.addEventListener("native-photo-saved", (event) => {
  showToast(event.detail.success ? "تم حفظ الصورة في مجلد الصور." : "تعذّر حفظ الصورة.");
});
document.querySelector("#close-calculator").addEventListener("click", closeCalculator);
document.querySelector("#calculator-keys").addEventListener("click", handleCalculatorButton);
search.addEventListener("input", () => filterApps(search.value));

document.addEventListener("keydown", (event) => {
  if (lockScreen.hidden && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openDrawer();
  } else if (!lockScreen.hidden && lockScreen.classList.contains("pin-entry-open") && /^[0-9]$/.test(event.key)) {
    event.preventDefault();
    const key = document.querySelector(`[data-pin-key="${event.key}"]`);
    key?.click();
  } else if (!lockScreen.hidden && lockScreen.classList.contains("pin-entry-open") && event.key === "Backspace") {
    event.preventDefault();
    document.querySelector('[data-pin-key="delete"]').click();
  } else if (event.key === "Escape") {
    navigateBack();
  }
});

document.querySelectorAll(".dock-button[data-app]").forEach((button) => {
  button.addEventListener("click", () => openApp(apps.find((app) => app.id === button.dataset.app)));
});
document.querySelector("#side-lock").addEventListener("click", () => openLockScreen("home"));
document.querySelector("#side-volume-up").addEventListener("click", () => changeSimulatedVolume(10));
document.querySelector("#side-volume-down").addEventListener("click", () => changeSimulatedVolume(-10));
document.querySelector("#open-camera").addEventListener("click", () => {
  addRecentApp(apps.find((app) => app.id === "camera"));
});
