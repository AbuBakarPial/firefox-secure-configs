// =======
// Font Size and Spacing Fixes
// =======
// Add these to your user.js if you're experiencing font size or spacing issues

// Force consistent font sizes
user_pref("font.minimum-size.x-western", 10);
user_pref("font.size.fixed.x-western", 14);
user_pref("font.size.variable.x-western", 16);

// Control zoom and text size
user_pref("zoom.minPercent", 50);
user_pref("zoom.maxPercent", 300);
user_pref("browser.zoom.full", false);
user_pref("browser.zoom.siteSpecific", false);

// Line height control
user_pref("browser.display.normal_lineheight_calc_control", 1);
user_pref("layout.css.line-height-box.enabled", false);

// Prevent text reflow
user_pref("browser.viewport.layoutWidth", 0);
user_pref("browser.viewport.forceUserScalable", false);

// Font smoothing settings
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50);
user_pref("gfx.font_rendering.cleartype_params.gamma", 2200);
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);