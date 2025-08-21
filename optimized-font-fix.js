// =======
// Optimized Font Stability Configuration
// =======
// This prevents all font jumping and ensures consistent rendering

// -------- Core Font Stability --------
// Force system fonts only to prevent web font loading inconsistencies
user_pref("browser.display.use_document_fonts", 0);

// Set your preferred fonts (ensure these are installed on your system)
user_pref("font.default.x-western", "sans-serif");
user_pref("font.name.sans-serif.x-western", "Arial");                  // Or "Noto Sans", "DejaVu Sans"
user_pref("font.name.serif.x-western", "Times New Roman");             // Or "Noto Serif", "DejaVu Serif"
user_pref("font.name.monospace.x-western", "Courier New");            // Or "JetBrains Mono", "Fira Mono"

// Lock font sizes to prevent reflow
user_pref("font.size.variable.x-western", 16);
user_pref("font.size.fixed.x-western", 13);

// -------- Disable Web Fonts Completely --------
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.downloadable_fonts.freetype.enabled", false);

// -------- Font Rendering Optimization --------
user_pref("gfx.font_rendering.directwrite.force_enabled", true);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 0);
user_pref("gfx.font_rendering.harfbuzz_lcd", false);

// -------- Prevent Font Jumping --------
user_pref("layout.css.font-variations.enabled", false);
user_pref("layout.css.font-loading-api.enabled", false);
user_pref("layout.css.font-display.enabled", false);

// -------- Additional Stability Settings --------
user_pref("font.size.inflation.minTwips", 0);
user_pref("font.size.inflation.emPerLine", 0);
user_pref("font.size.inflation.lineThreshold", 0);

// -------- Emoji Fallback --------
user_pref("font.name-list.emoji", "Segoe UI Emoji, Noto Color Emoji, Twitter Color Emoji");

// -------- Force Consistent Line Height --------
user_pref("browser.display.normal_lineheight_calc_control", 1);
user_pref("layout.css.line-height-box.enabled", false);