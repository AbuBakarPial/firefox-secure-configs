// =======
// Betterfox Combined - Fastfox + Securefox + Peskyfox + Smoothfox
// =======
// Based on https://github.com/yokoffing/Betterfox
// Optimized for daily use without breakage
// -------- Fastfox - Speed and Performance --------
// Enable hardware acceleration
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.enabled", true);
user_pref("layers.acceleration.force-enabled", true);
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.hardware-video-decoding.force-enabled", true);

// Optimize memory usage
user_pref("browser.lowmemory.enabled", true);
user_pref("browser.lowmemory.mode", 1);
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("browser.sessionstore.interval", 30000);
user_pref("browser.sessionstore.restore_on_demand", true);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true);
user_pref("dom.ipc.processCount", 8);
user_pref("dom.ipc.processCount.web", 4);
user_pref("dom.ipc.processCount.webIsolated", 4);

// Optimize network
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dnsCacheEntries", 1000);
user_pref("network.dnsCacheExpirationGracePeriod", 240);
user_pref("network.http.speculative-parallel-limit", 6);
user_pref("network.http.pipelining", true);
user_pref("network.http.pipelining.ssl", true);
user_pref("network.http.pipelining.maxrequests", 8);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-persistent-connections-per-proxy", 32);

// Optimize page loading
user_pref("nglayout.initialpaint.delay", 0);
user_pref("content.notify.interval", 100000);
user_pref("content.notify.ontimer", true);
user_pref("content.switch.threshold", 100000);
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.capacity", 1048576);
user_pref("browser.cache.disk.smart_size.enabled", true);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 65536);

// -------- Securefox - Security and Privacy --------
// Enhanced Tracking Protection
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

// Cookies and storage
user_pref("network.cookie.cookieBehavior", 1);
user_pref("privacy.partition.network_state.ocsp_cache", true);
user_pref("privacy.partition.serviceWorkers", true);
user_pref("privacy.firstparty.isolate", false);

// HTTPS and security
user_pref("dom.security.https_only_mode", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", false);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("browser.safebrowsing.downloads.enabled", true);

// Referrer and privacy
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);

// Resist Fingerprinting (disabled for daily use)
user_pref("privacy.resistFingerprinting", false);

// -------- Peskyfox - Annoyances and UI --------
// Disable telemetry and data collection
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
user_pref("network.allow-experiments", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// Disable unwanted features
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// UI improvements
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);
user_pref("browser.uidensity", 1);
user_pref("browser.compactmode.show", true);
user_pref("browser.toolbars.bookmarks.visibility", "never");
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.tabs.closeWindowWithLastTab", false);

// -------- Smoothfox - Smooth Scrolling and Animations --------
// Smooth scrolling
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 15);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 0.4);
user_pref("mousewheel.min_line_scroll_amount", 20);
user_pref("apz.overscroll.enabled", true);
user_pref("apz.allow_zooming", true);
user_pref("apz.force_disable_desktop_zooming_scrollbars", false);

// Animation improvements
user_pref("layout.css.prefers-reduced-motion.reduce-animations", false);
user_pref("ui.prefersReducedMotion", 0);
user_pref("gfx.offscreen-canvas.enabled", true);
user_pref("dom.animations-api.core.enabled", true);
user_pref("dom.animations-api.element-animate.enabled", true);

// -------- Font and Rendering Stability --------
// Force system fonts only to prevent web font loading inconsistencies
user_pref("browser.display.use_document_fonts", 0);

// Set your preferred fonts (ensure these are installed on your system)
user_pref("font.default.x-western", "sans-serif");
user_pref("font.name.sans-serif.x-western", "Arial");
user_pref("font.name.serif.x-western", "Times New Roman");
user_pref("font.name.monospace.x-western", "Courier New");

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

// Emoji fallback: consistent metrics reduce line-height pops when emojis appear
user_pref("font.name-list.emoji", "Segoe UI Emoji, Noto Color Emoji, Twitter Color Emoji");

// Font rendering optimization
user_pref("gfx.font_rendering.directwrite.force_enabled", true);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 0);
user_pref("gfx.font_rendering.harfbuzz_lcd", false);
user_pref("layout.css.font-variations.enabled", false);
user_pref("layout.css.font-loading-api.enabled", false);
user_pref("layout.css.font-display.enabled", false);

// Force consistent line height
user_pref("browser.display.normal_lineheight_calc_control", 1);
user_pref("layout.css.line-height-box.enabled", false);

// -------- Additional Stability Settings --------
// Reduce background requests
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);

// Disable unwanted services
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.serviceWorkers.enabled", true);

// Startup and homepage
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage_override.mstone", "ignore");

// URL bar improvements
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.trimURLs", false);

// Extensions and updates
user_pref("extensions.enabledScopes", 5);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("app.update.auto", true);
user_pref("app.update.enabled", true);
user_pref("extensions.update.enabled", true);
user_pref("extensions.update.autoUpdateDefault", true);

// =======
// Usage Notes
// =======
// 1. This configuration combines all four Betterfox components
// 2. Font settings are optimized for maximum stability
// 3. Resist Fingerprinting is disabled for daily use compatibility
// 4. All settings are balanced to avoid website breakage
// 5. Restart Firefox after applying these settings
// 6. Ensure Arial, Times New Roman, and Courier New are installed on your system