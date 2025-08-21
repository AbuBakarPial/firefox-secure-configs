// =======
// Font Stability Configuration
// =======
// Use this to fix font jumping and rendering issues
// -------- Core Font Stability --------
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

// -------- Advanced Font Settings --------
user_pref("gfx.downloadable_fonts.fallback_delay", -1);
user_pref("gfx.downloadable_fonts.timeout", 0);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
user_pref("layout.css.font-loading-api.enabled", false);

// -------- Font Smoothing Settings --------
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50);
user_pref("gfx.font_rendering.cleartype_params.gamma", 2200);
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);

// =======
// Installation Instructions
// =======
// 1. Copy these settings to your user.js file
// 2. Restart Firefox
// 3. Clear cache (Ctrl+Shift+Delete)
// 4. Test on sites that had font issues
//
// Note: Ensure Arial, Times New Roman, and Courier New are installed on your system
// For Linux: sudo apt install fonts-liberation fonts-dejavu-core fonts-noto-color-emoji
// For macOS: Use Font Book to install preferred fonts