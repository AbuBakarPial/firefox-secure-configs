// =======
// Firefox user.js — Secure Daily Driver with Zen Vertical Tabs + Maximum Font Stability
// =======
// Philosophy:
// - Security first: Strict ETP, OCSP/TLS hygiene, third‑party cookie blocking,
//   HTTPS-Only, referrer trimming, minimal unsolicited background traffic.
// - Daily-driver reliability: logins, SSO, captchas, PWAs work.
// - Maximum font stability: prevent baseline/glyph "jumping" and font fallback jitter.
// - For maximum anonymity, use a separate profile with RFP enabled.
// -------- Core Privacy & Tracking Protection --------
user_pref("browser.contentblocking.category", "strict");               // Strict Enhanced Tracking Protection
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
// Cookies and partitioning
user_pref("network.cookie.cookieBehavior", 1);                         // Block third-party cookies
user_pref("privacy.partition.network_state.ocsp_cache", true);         // Partitioned OCSP cache
user_pref("privacy.partition.serviceWorkers", true);                   // Partition SW where supported
// Referrer hardening
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
// Global privacy signals
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);
// Resist Fingerprinting: off globally for login/captcha/timezone compatibility
user_pref("privacy.resistFingerprinting", false);
// -------- Security: TLS, Certificates, Safe Downloads --------
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", false);                             // Resilient to responder outages
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("browser.safebrowsing.downloads.enabled", true);
user_pref("dom.security.https_only_mode", true);                       // Force HTTPS with per‑site exceptions
// -------- Functionality needed for modern logins --------
user_pref("dom.serviceWorkers.enabled", true);                         // Needed by many portals/PWAs
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.webnotifications.enabled", false);
// -------- Reduce Unwanted Background Requests --------
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
// -------- Performance & Stability (safe for daily use) --------
user_pref("dom.ipc.processCount", 8);
user_pref("dom.ipc.processCount.web", 4);
user_pref("dom.ipc.processCount.webIsolated", 2);
user_pref("dom.ipc.keepProcessesAlive.web", 1);
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 6000);
user_pref("media.cache_resume_threshold", 3000);
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 15);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 0.4);
user_pref("mousewheel.min_line_scroll_amount", 20);
user_pref("apz.overscroll.enabled", true);
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("browser.sessionstore.interval", 300000);                    // 5min
// -------- Rendering & Hardware Acceleration --------
// Keep enabled if stable on your GPU/driver; if you see oddities, comment out dmabuf/force lines first.
user_pref("gfx.webrender.enabled", true);
// user_pref("gfx.webrender.all", true);                               // Only if 100% stable
user_pref("media.ffmpeg.vaapi.enabled", true);                         // Linux HW decode
user_pref("widget.dmabuf.force-enabled", true);                        // Wayland DMA-BUF path (toggle off if issues)
user_pref("media.navigator.mediadatadecoder_vpx_enabled", true);
user_pref("javascript.options.wasm_baselinejit", true);
// -------- Fonts — Maximum Stability Approach (prevents all font jumping) --------
// Force system fonts only to prevent web font loading inconsistencies
user_pref("browser.display.use_document_fonts", 0);                   // 0 = use only default fonts
// Set your preferred fonts (ensure these are installed on your system)
user_pref("font.default.x-western", "sans-serif");
user_pref("font.name.sans-serif.x-western", "Arial");                  // Or "Noto Sans", "DejaVu Sans"
user_pref("font.name.serif.x-western", "Times New Roman");             // Or "Noto Serif", "DejaVu Serif"
user_pref("font.name.monospace.x-western", "Courier New");            // Or "JetBrains Mono", "Fira Mono"
// Lock font sizes to prevent reflow
user_pref("font.size.variable.x-western", 16);
user_pref("font.size.fixed.x-western", 13);
// Disable downloadable fonts completely for maximum consistency
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.downloadable_fonts.freetype.enabled", false);
// Disable font inflation that can cause reflow
user_pref("font.size.inflation.minTwips", 0);
user_pref("font.size.inflation.emPerLine", 0);
user_pref("font.size.inflation.lineThreshold", 0);
// Emoji fallback: consistent metrics reduce line-height pops when emojis appear.
user_pref("font.name-list.emoji", "Segoe UI Emoji, Noto Color Emoji, Twitter Color Emoji");
// -------- Vertical Tabs / Zen-like Sidebar --------
user_pref("sidebar.revamp", true);
user_pref("sidebar.position_start", true);
user_pref("sidebar.visibility", "always");
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);
// -------- Zen Browser Sleek Design Additions --------
user_pref("browser.tabs.drawInTitlebar", true);
user_pref("browser.uidensity", 1);
user_pref("browser.compactmode.show", true);
user_pref("browser.toolbars.bookmarks.visibility", "never");
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.trimURLs", false);
// -------- Extras & Hygiene --------
user_pref("extensions.enabledScopes", 5);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
// Optional: stricter cross-site POST leaks (keeps full referrer on same-origin)
user_pref("network.http.referer.trimmingPolicy", 0);
user_pref("network.http.sendRefererHeader", 2);
// Optional: stealthier media device enumeration (enable per-site when needed)
user_pref("media.navigator.enabled", false);
// =======
// Usage Guidance
// =======
// Fonts:
// - This script uses maximum stability approach: only system fonts are used to prevent all font jumping.
// - Ensure you have Arial, Times New Roman, Courier New, and Segoe UI Emoji installed (or change to your preferred fonts).
// - On Linux, install fonts: `sudo apt install fonts-liberation fonts-dejavu-core fonts-noto-color-emoji`
// - On Windows, these fonts are included by default.
// Graphics:
// - If you observe visual glitches on Wayland, try: user_pref("widget.dmabuf.force-enabled", false);
// Privacy:
// - Use Multi-Account Containers for email/banking/work isolation.
// - For high-anonymity sessions, use the tor-like-anonymity.js script in a separate profile.