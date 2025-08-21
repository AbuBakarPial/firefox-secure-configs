// =======
// System-Only Font Configuration
// =======
// Use this if you want to force only system fonts and eliminate all web fonts

// Force system fonts only
user_pref("browser.display.use_document_fonts", 0);

// System font preferences (modify based on your OS)
// Windows
user_pref("font.name.sans-serif.x-western", "Arial");
user_pref("font.name.serif.x-western", "Times New Roman");
user_pref("font.name.monospace.x-western", "Courier New");
user_pref("font.name-list.emoji", "Segoe UI Emoji");

// Linux (uncomment if using Linux)
// user_pref("font.name.sans-serif.x-western", "Noto Sans");
// user_pref("font.name.serif.x-western", "Noto Serif");
// user_pref("font.name.monospace.x-western", "DejaVu Sans Mono");
// user_pref("font.name-list.emoji", "Noto Color Emoji");

// macOS (uncomment if using macOS)
// user_pref("font.name.sans-serif.x-western", "Helvetica");
// user_pref("font.name.serif.x-western", "Times");
// user_pref("font.name.monospace.x-western", "Monaco");
// user_pref("font.name-list.emoji", "Apple Color Emoji");

// Lock font sizes
user_pref("font.size.variable.x-western", 16);
user_pref("font.size.fixed.x-western", 13);

// Disable all web font loading
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.downloadable_fonts.freetype.enabled", false);
user_pref("layout.css.font-loading-api.enabled", false);
user_pref("layout.css.font-display.enabled", false);

// Force consistent rendering
user_pref("layout.css.font-variations.enabled", false);
user_pref("gfx.font_rendering.harfbuzz_lcd", false);