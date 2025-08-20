// =======
// Firefox user.js — Tor-like Anonymity Configuration
// =======
// WARNING: This script prioritizes anonymity over usability. Many websites will break.
// Use in a separate profile for maximum anonymity, not as a daily driver.
// -------- Maximum Fingerprinting Resistance --------
user_pref("privacy.resistFingerprinting", true);                         // Core anti-fingerprinting
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);   // Block addon manager fingerprinting
user_pref("privacy.resistFingerprinting.letterboxing", true);            // Letterboxing to standardize screen size
user_pref("privacy.window.maxInnerWidth", 1400);                        // Standardized max width
user_pref("privacy.window.maxInnerHeight", 900);                        // Standardized max height
// -------- Network Privacy --------
user_pref("network.http.sendRefererHeader", 0);                          // Never send referrer
user_pref("network.http.referer.trimmingPolicy", 2);                     // Trim to origin
user_pref("network.http.referer.XOriginPolicy", 2);                      // Only send on same origin
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);              // Trim to origin on cross-site
user_pref("dom.security.https_only_mode", true);                         // Force HTTPS
user_pref("dom.security.https_only_mode_pbm", true);                    // HTTPS in private windows
// -------- DNS and Connection Privacy --------
user_pref("network.trr.mode", 3);                                        // TRR only (DoH)
user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");    // Cloudflare DNS
user_pref("network.trr.bootstrapAddress", "1.1.1.1");                    // DoH fallback
user_pref("network.dns.disablePrefetch", true);                          // Disable DNS prefetching
user_pref("network.prefetch-next", false);                              // Disable prefetching
user_pref("network.predictor.enabled", false);                          // Disable predictor
user_pref("network.http.speculative-parallel-limit", 0);                 // Disable speculative connections
user_pref("browser.urlbar.speculativeConnect.enabled", false);          // Disable speculative connect
// -------- Cookie and Storage Privacy --------
user_pref("network.cookie.cookieBehavior", 5);                           // Block all third-party cookies and isolate first-party
user_pref("privacy.firstparty.isolate", true);                           // First-party isolation
user_pref("privacy.partition.network_state", true);                     // Partition network cache
user_pref("privacy.partition.serviceWorkers", true);                     // Partition service workers
user_pref("dom.storage_access.enabled", false);                          // Disable storage access API
// -------- Media and Device Privacy --------
user_pref("media.peerconnection.enabled", false);                        // Disable WebRTC (prevents IP leaks)
user_pref("media.peerconnection.ice.default_address_only", true);        // Additional WebRTC protection
user_pref("media.peerconnection.ice.no_host", true);                     // Hide local IP
user_pref("media.peerconnection.ice.proxy_only", true);                  // Force proxy
user_pref("media.navigator.enabled", false);                             // Disable getUserMedia
user_pref("media.getusermedia.screensharing.enabled", false);            // Disable screen sharing
user_pref("camera.control.face_detection.enabled", false);               // Disable face detection
user_pref("camera.control.autofocus.enabled", false);                    // Disable autofocus
user_pref("device.sensors.enabled", false);                             // Disable device sensors
user_pref("dom.vr.enabled", false);                                      // Disable VR
user_pref("dom.gamepad.enabled", false);                                // Disable gamepad
user_pref("dom.battery.enabled", false);                                // Disable battery API
user_pref("dom.webaudio.enabled", false);                               // Disable Web Audio API
// -------- Font and Canvas Privacy --------
user_pref("gfx.downloadable_fonts.enabled", false);                     // Disable downloadable fonts
user_pref("gfx.downloadable_fonts.freetype.enabled", false);             // Disable freetype fonts
user_pref("browser.display.use_document_fonts", 0);                     // Use only default fonts
user_pref("canvas.capturestream.enabled", false);                       // Disable canvas capture
user_pref("dom.event.clipboardevents.enabled", false);                  // Disable clipboard events
user_pref("dom.indexedDB.enabled", false);                              // Disable IndexedDB
user_pref("dom.cache.enabled", false);                                  // Disable cache API
// -------- Time and Language Privacy --------
user_pref("javascript.use_us_english_locale", true);                    // Force US English locale
user_pref("intl.regional_prefs.use_os_locales", false);                 // Don't use OS locale
user_pref("privacy.spoof_english", 2);                                  // Spoof English as primary language
// -------- Search and Address Bar Privacy --------
user_pref("browser.search.suggest.enabled", false);                      // Disable search suggestions
user_pref("browser.urlbar.suggest.searches", false);                     // Disable URL bar search suggestions
user_pref("browser.urlbar.suggest.history", false);                      // Disable history suggestions
user_pref("browser.urlbar.suggest.bookmark", false);                     // Disable bookmark suggestions
user_pref("browser.urlbar.suggest.openpage", false);                     // Disable open page suggestions
user_pref("browser.formfill.enable", false);                            // Disable form autofill
// -------- Telemetry and Data Collection --------
user_pref("toolkit.telemetry.enabled", false);                          // Disable telemetry
user_pref("toolkit.telemetry.unified", false);                          // Disable unified telemetry
user_pref("toolkit.telemetry.archive.enabled", false);                  // Disable telemetry archive
user_pref("experiments.enabled", false);                                // Disable experiments
user_pref("experiments.supported", false);                              // Disable experiment support
user_pref("experiments.activeExperiment", false);                       // Disable active experiments
user_pref("network.allow-experiments", false);                          // Disable network experiments
user_pref("datareporting.healthreport.uploadEnabled", false);            // Disable health reports
user_pref("datareporting.policy.dataSubmissionEnabled", false);          // Disable data submission
user_pref("app.shield.optoutstudies.enabled", false);                   // Disable shield studies
user_pref("browser.discovery.enabled", false);                          // Disable discovery
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); // Disable new tab telemetry
user_pref("browser.newtabpage.activity-stream.telemetry", false);       // Disable activity stream telemetry
// -------- Updates and Extensions --------
user_pref("app.update.auto", false);                                    // Disable automatic updates
user_pref("app.update.enabled", false);                                 // Disable update checking
user_pref("extensions.update.enabled", false);                           // Disable extension updates
user_pref("extensions.update.autoUpdateDefault", false);                // Disable automatic extension updates
user_pref("extensions.getAddons.showPane", false);                      // Disable add-ons pane
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);  // Disable extension recommendations
// -------- Content Blocking --------
user_pref("privacy.trackingprotection.enabled", true);                   // Enable tracking protection
user_pref("privacy.trackingprotection.pbmode.enabled", true);            // Enable in private mode
user_pref("browser.contentblocking.category", "strict");                 // Strict content blocking
user_pref("privacy.trackingprotection.cryptomining.enabled", true);       // Block cryptominers
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);     // Block fingerprinters
user_pref("privacy.trackingprotection.socialtracking.enabled", true);    // Block social trackers
// -------- Security Settings --------
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);      // Treat unsafe negotiation as broken
user_pref("security.OCSP.enabled", 1);                                   // Enable OCSP
user_pref("security.OCSP.require", true);                               // Require OCSP
user_pref("security.cert_pinning.enforcement_level", 2);                 // Enforce certificate pinning
user_pref("browser.safebrowsing.downloads.enabled", true);               // Enable safe browsing
user_pref("browser.safebrowsing.malware.enabled", true);                // Enable malware protection
user_pref("browser.safebrowsing.phishing.enabled", true);                // Enable phishing protection
// -------- Session and History --------
user_pref("browser.sessionstore.privacy_level", 2);                     // Don't store extra session data
user_pref("browser.sessionstore.resume_from_crash", false);             // Don't restore after crash
user_pref("browser.history.enabled", false);                             // Disable history
user_pref("places.history.enabled", false);                             // Disable places history
user_pref("browser.formfill.enable", false);                            // Disable form fill
user_pref("browser.download.manager.retention", 0);                     // Don't retain download history
user_pref("privacy.sanitize.sanitizeOnShutdown", true);                 // Sanitize on shutdown
user_pref("privacy.clearOnShutdown.cache", true);                       // Clear cache on shutdown
user_pref("privacy.clearOnShutdown.cookies", true);                     // Clear cookies on shutdown
user_pref("privacy.clearOnShutdown.downloads", true);                    // Clear downloads on shutdown
user_pref("privacy.clearOnShutdown.formdata", true);                    // Clear form data on shutdown
user_pref("privacy.clearOnShutdown.history", true);                      // Clear history on shutdown
user_pref("privacy.clearOnShutdown.offlineApps", true);                  // Clear offline apps on shutdown
user_pref("privacy.clearOnShutdown.sessions", true);                    // Clear sessions on shutdown
user_pref("privacy.clearOnShutdown.siteSettings", true);                // Clear site settings on shutdown
// -------- UI and Behavior --------
user_pref("browser.ctrlTab.recentlyUsedLimit", 0);                      // Disable Ctrl+Tab preview
user_pref("browser.bookmarks.max_backups", 0);                          // Don't create bookmark backups
user_pref("browser.bookmarks.autoExportHTML", false);                    // Don't export bookmarks
user_pref("browser.newtabpage.enabled", false);                         // Disable new tab page
user_pref("browser.newtab.preload", false);                             // Disable new tab preload
user_pref("browser.startup.homepage", "about:blank");                   // Blank homepage
user_pref("browser.startup.page", 0);                                   // Start with blank page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);  // Disable top sites
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);   // Disable snippets
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Disable top stories
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // Disable Pocket
user_pref("extensions.pocket.enabled", false);                           // Disable Pocket
user_pref("extensions.screenshots.disabled", true);                      // Disable screenshots
user_pref("browser.shell.checkDefaultBrowser", false);                  // Don't check default browser
user_pref("browser.aboutHomeSnippets.updateUrl", "");                   // Disable about:home snippets
user_pref("browser.uitour.enabled", false);                             // Disable UI tour
user_pref("browser.uitour.url", "");                                    // Disable UI tour URL
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);      // Disable what's new panel
// -------- Additional Privacy --------
user_pref("dom.push.enabled", false);                                   // Disable push notifications
user_pref("dom.push.connection.enabled", false);                        // Disable push connections
user_pref("dom.webnotifications.enabled", false);                        // Disable web notifications
user_pref("dom.serviceWorkers.enabled", false);                         // Disable service workers
user_pref("dom.storage.enabled", false);                                // Disable storage API
user_pref("dom.workers.enabled", false);                                // Disable web workers
user_pref("dom.indexedDB.enabled", false);                              // Disable IndexedDB
user_pref("dom.caches.enabled", false);                                  // Disable cache API
user_pref("dom.webaudio.enabled", false);                               // Disable Web Audio API
user_pref("media.eme.enabled", false);                                  // Disable DRM
user_pref("media.gmp-widevinecdm.enabled", false);                      // Disable Widevine DRM
user_pref("media.gmp-widevinecdm.visible", false);                      // Hide Widevine DRM
user_pref("pdfjs.disabled", true);                                       // Disable PDF viewer
user_pref("pdfjs.enabledCache.state", false);                           // Disable PDF cache
user_pref("dom.ipc.plugins.enabled", false);                             // Disable plugins
user_pref("plugin.state.flash", 0);                                     // Disable Flash
// =======
// Usage Guidance
// =======
// WARNING: This script will break many websites. Use only for maximum anonymity.
// 1. Create a dedicated Firefox profile for this configuration
// 2. Use with a VPN or Tor for maximum anonymity
// 3. Do not use for regular browsing or logging into accounts
// 4. Consider using the Tor Browser instead for most anonymity needs
// 5. This configuration may make your browser fingerprintable in its own way
// 6. Test in a separate profile before relying on it for sensitive activities