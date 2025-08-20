# Secure Firefox Configuration Scripts
This repository contains two Firefox configuration scripts that transform your browser into either a secure daily driver or a maximum anonymity tool similar to Tor Browser.

## Scripts

### 1. Secure Daily Driver with Zen Vertical Tabs + Maximum Font Stability (`secure-daily-driver.js`)

**Purpose**: Create a secure, fast, and visually appealing daily-use browser with Zen Browser aesthetics.

**Features**:
- **Chrome-like Speed**: Optimized for fast page loads and rendering
- **Edge-like Smoothness**: Fluid scrolling and animations
- **Mullvad-like Security**: Strong privacy protections without breaking daily use
- **Zen Browser UI**: Sleek vertical tabs and minimalist interface
- **Maximum Font Stability**: Eliminates text "jumping" and layout shifts

**Ideal For**:
- Daily browsing with strong privacy protections
- Users who value both security and aesthetics
- Those frustrated with inconsistent font rendering
- Banking, shopping, and other login-based activities

### 2. Tor-like Anonymity Script (`tor-like-anonymity.js`)

**Purpose**: Transform Firefox into a maximum anonymity tool similar to Tor Browser.

**Features**:
- **Maximum Fingerprinting Resistance**: Makes your browser appear identical to others
- **Complete Network Privacy**: Blocks WebRTC, disables referrers, forces HTTPS
- **No Data Persistence**: Clears all data on shutdown
- **Strict Content Blocking**: Blocks trackers, ads, and malware
- **Telemetry Disabled**: Prevents any data collection

**Ideal For**:
- Journalists and activists
- Whistleblowers
- Political dissidents
- Anyone requiring maximum anonymity
- Security research and testing

**⚠️ Warning**: This script will break many websites and should only be used in a separate Firefox profile.

## Advanced Zen-Style Vertical Tabs (`userChrome.css`)

The included `userChrome.css` file provides a sophisticated vertical tab implementation with Chrome-inspired aesthetics:

### Key Features:
- **Compact Design**: 32px tab height with 260px sidebar width
- **Smart Theming**: Uses system colors with accent color integration
- **Pinned Tab Chips**: Rounded pill design for pinned tabs
- **Audio Indicators**: Accent-colored pills for playing/muted tabs
- **Hover Effects**: Smooth transitions with subtle background changes
- **Slim Scrollbars**: Thin scrollbars for cleaner appearance
- **Responsive Design**: Adapts to different screen resolutions

### Customization Options:
- **Width Adjustment**: Modify `--vt-width` variable (default: 260px)
- **Row Height**: Adjust `--vt-row-height` variable (default: 32px)
- **Font Size**: Change `--vt-font-size` variable (default: 12.5px)
- **Border Radius**: Modify `--vt-radius` variable (default: 8px)
- **Color Scheme**: Automatically adapts to system light/dark theme

### Advanced Features:
- **Group Separators**: Visual dividers for tab groups
- **Unread Indicators**: Bold font for unread/updated tabs
- **Toolbar Integration**: Complements the user.js toolbar settings
- **New Tab Page**: Minimalist styling for about:newtab
- **Bookmarks Panel**: Compact bookmarks interface

## Installation

### For Secure Daily Driver

1. **Create a Firefox Profile** (recommended):
   - Close Firefox
   - Run `firefox -P` (Windows/Linux) or `firefox -ProfileManager` (macOS)
   - Create a new profile named "Secure"

2. **Apply Configuration**:
   - Save `secure-daily-driver.js` as `user.js` in your profile folder
   - Find your profile folder: Help > Troubleshooting Information > Profile Directory > Open Directory

3. **Install Required Extensions**:
   - [Tree Style Tab](https://addons.mozilla.org/firefox/addon/tree-style-tab/) for vertical tabs
   - [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/) for ad blocking

4. **Enable userChrome.css**:
   - Type `about:config` in Firefox
   - Set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`
   - Create a `chrome` folder in your profile directory
   - Add the `userChrome.css` file from this repository

5. **Restart Firefox**

### For Tor-like Anonymity

1. **Create a Dedicated Profile**:
   - Close Firefox
   - Run `firefox -P` (Windows/Linux) or `firefox -ProfileManager` (macOS)
   - Create a new profile named "Anonymity"

2. **Apply Configuration**:
   - Save `tor-like-anonymity.js` as `user.js` in your profile folder

3. **Restart Firefox**

4. **Test Anonymity**:
   - Visit [Browserleaks](https://browserleaks.com/) to test your fingerprinting protection
   - Verify your IP address is hidden (use with VPN or Tor)

## Additional Firefox Settings (GUI Configuration)

Complement the scripts with these manual settings from leading security guides:

### Privacy & Security Settings (Based on Privacy Guides)

1. **Enhanced Tracking Protection**:
   - Go to: `Settings > Privacy & Security > Enhanced Tracking Protection`
   - Set to: **Strict**
   - Enable: **Cookies** and **Tracking content**

2. **HTTPS-Only Mode**:
   - Go to: `Settings > Privacy & Security > HTTPS-Only Mode`
   - Enable: **Enable HTTPS-Only Mode in all windows**

3. **DNS over HTTPS**:
   - Go to: `Settings > General > Network Settings > Settings...`
   - Enable: **Enable DNS over HTTPS**
   - Select: **Cloudflare** or **Custom**

4. **Location Services**:
   - Go to: `Settings > Privacy & Security > Location Services`
   - Disable: **Allow websites to access your location**

### Data Collection Settings (Based on EFF Surveillance Self-Defense)

1. **Telemetry**:
   - Go to: `about:preferences#privacy`
   - Disable: **Send technical and interaction data to Mozilla**
   - Disable: **Allow Firefox to send crash reports**

2. **Studies**:
   - Go to: `about:preferences#privacy`
   - Disable: **Allow Firefox to install and run studies**

3. **Recommendations**:
   - Go to: `about:preferences#privacy`
   - Disable: **Show recommendations from Mozilla as you browse**

### History & Cookies Settings (Based on The New Oil)

1. **History**:
   - Go to: `Settings > Privacy & Security > History`
   - Select: **Use custom settings for history**
   - Enable: **Always use private browsing mode** (for anonymity profile)

2. **Cookies**:
   - Go to: `Settings > Privacy & Security > Cookies and Site Data`
   - Select: **Block third-party cookies** (daily driver)
   - Select: **All cookies** (anonymity profile)

3. **Cache**:
   - Go to: `Settings > Privacy & Security > Cookies and Site Data`
   - Enable: **Delete cookies and site data when Firefox is closed** (anonymity profile)

### Advanced Security Settings

1. **Password Management**:
   - Go to: `Settings > Privacy & Security > Logins and Passwords`
   - Enable: **Ask to save logins and passwords for websites**
   - Enable: **Use a primary password**

2. **Autofill**:
   - Go to: `Settings > Privacy & Security > Forms and Autofill`
   - Disable: **Autofill addresses**
   - Disable: **Autofill credit cards**

3. **Permissions**:
   - Go to: `Settings > Privacy & Security > Permissions`
   - Review and disable: Camera, Microphone, Location, Notifications
   - Set: **Block new requests asking to allow notifications**

## Customization

### Font Settings (Secure Daily Driver)

The script uses system fonts for maximum stability. To customize:

1. Install your preferred fonts
2. Modify these lines in `user.js`:
   ```javascript
   user_pref("font.name.sans-serif.x-western", "Your Sans Font");
   user_pref("font.name.serif.x-western", "Your Serif Font");
   user_pref("font.name.monospace.x-western", "Your Monospace Font");
   ```

### Vertical Tab Customization

The `userChrome.css` file includes several customization variables:

```css
:root {
    --vt-width: 260px;        /* Sidebar width */
    --vt-row-height: 32px;   /* Tab row height */
    --vt-padding-x: 8px;     /* Horizontal padding */
    --vt-font-size: 12.5px;  /* Font size */
    --vt-radius: 8px;        /* Border radius */
    --vt-gap: 4px;           /* Gap between tabs */
}
```

### Performance Tweaks

For better performance on older hardware:

1. **Reduce Tab Rows**:
   ```css
   :root { --vt-row-height: 28px; }
   ```

2. **Narrower Sidebar**:
   ```css
   :root { --vt-width: 220px; }
   ```

3. **Disable Animations**:
   ```css
   .tabbrowser-tab { transition: none !important; }
   ```

## Troubleshooting

### userChrome.css Not Applying

1. Enable legacy user stylesheets:
   - Type `about:config`
   - Set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`
   - Restart Firefox

2. Verify file location:
   - `userChrome.css` must be in the `chrome` folder within your profile directory
   - Ensure the file extension is `.css` (not `.css.txt`)

3. Test with simple CSS:
   ```css
   #main-window { background-color: red !important; }
   ```

### Font Issues

1. Ensure specified fonts are installed:
   - Windows: Arial, Times New Roman, Courier New, Segoe UI Emoji (included by default)
   - Linux: Install with `sudo apt install fonts-liberation fonts-dejavu-core fonts-noto-color-emoji`
   - macOS: Use Font Book to install preferred fonts

2. If you still see font jumping:
   - Try disabling variable fonts: `user_pref("layout.css.font-variations.enabled", false);`
   - Consider using the Tor-like script for maximum consistency

### Site Compatibility Issues

1. For the Secure Daily Driver:
   - Use Multi-Account Containers for problematic sites
   - Temporarily allow third-party cookies for specific sites
   - Try a private window for testing

2. For the Tor-like Script:
   - Many sites will not work - this is expected
   - Use only for maximum anonymity, not daily browsing
   - Consider using Tor Browser instead for most anonymity needs

### Vertical Tab Issues

1. **Tabs not appearing vertically**:
   - Ensure Tree Style Tab extension is installed
   - Check that `toolkit.legacyUserProfileCustomizations.stylesheets` is enabled
   - Verify the CSS file is in the correct location

2. **Sidebar width issues**:
   - Adjust `--vt-width` variable in the CSS
   - Some extensions may override sidebar width
   - Try disabling other sidebar-related extensions

## Security Considerations

1. **Profile Separation**: Always use separate profiles for different purposes
2. **VPN/Proxy**: For maximum anonymity, use with a trusted VPN or Tor
3. **Updates**: Keep Firefox updated for security patches
4. **Extensions**: Only install extensions from trusted sources
5. **Testing**: Always test configurations in a separate profile first
6. **Regular Audits**: Periodically review your settings and extensions

## Recommended Security Resources

These configurations are based on recommendations from leading security organizations:

- **[Privacy Guides](https://www.privacyguides.org/)**: Comprehensive privacy and security guides
- **[EFF Surveillance Self-Defense](https://ssd.eff.org/)**: Electronic Frontier Foundation's security guide
- **[The New Oil](https://thenewoil.org/)**: Practical privacy guides and tools

## Contributing

Feel free to submit issues, enhancement requests, or pull requests. When contributing, please:

1. Clearly describe the change and its purpose
2. Test your changes thoroughly
3. Update documentation as needed
4. Follow the existing code style

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

These configurations are provided "as is" without warranty of any kind. Users are responsible for their own security and privacy. The Tor-like configuration may make your browser fingerprintable in its own way and should not be considered as secure as the official Tor Browser.