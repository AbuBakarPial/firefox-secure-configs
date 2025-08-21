// =======
// Additional Font Stability Fixes
// =======
// Add these to your secure-daily-driver.js file if you're still experiencing font issues

// Disable variable fonts (prevents font jumping)
user_pref("layout.css.font-variations.enabled", false);

// Force consistent font rendering
user_pref("gfx.font_rendering.harfbuzz_lcd", false);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 0);
user_pref("gfx.font_rendering.directwrite.force_enabled", true);

// Alternative font settings (uncomment and modify if needed)
// user_pref("font.name.sans-serif.x-western", "Noto Sans");
// user_pref("font.name.serif.x-western", "Noto Serif");
// user_pref("font.name.monospace.x-western", "JetBrains Mono");

// Force font loading strategy
user_pref("gfx.downloadable_fonts.fallback_delay", -1);
user_pref("gfx.downloadable_fonts.timeout", 0);

// Disable font features that cause instability
user_pref("layout.css.font-loading-api.enabled", false);
user_pref("layout.css.font-display.enabled", false);

// Force consistent font metrics
user_pref("browser.display.normal_lineheight_calc_control", 1);
user_pref("browser.display.use_system_colors", false);

// Additional font stability
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);