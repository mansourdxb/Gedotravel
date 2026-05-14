# Page Topology — travco.com/en/

Page height: ~4000px | Viewport: 1440×900

## Section Map (top → bottom)

### 1. Navigation (fixed overlay)
- **Position:** fixed, top 0, z-index 19998
- **Height:** 100px (initial) → 70px (scrolled)
- **Class:** `.navigation.rlr-navigation.fixed-top`
- **Initial class:** `navigation-transparent` → scrolled: `navigation-animated`
- **Contents:** Logo (left), menu items (center-left), utility items (right)
- **Menu items:** Destinations (dropdown), Programs & Hotels (link), Services (dropdown), Travco (dropdown)
- **Utility items:** Calendar icon, Phone icon, USD dropdown, Country flag + "Travco Egypt" dropdown, Login

### 2. Hero Slider (section.main_slider, top 0, height 900px)
- **Background:** black
- **Slider:** Slick.js, 7 slides, auto-play
- **Each slide:** CSS background-image with gradient overlay + text content + CTA button
- **Slide structure:** `.bg-img` (full viewport bg) + `.container > .slide_content > .title_wrap`
- **Interaction model:** Time-driven auto-play + click arrows

### 3. Service Tabs Bar (top ~860px, overlapping hero bottom)
- **Position:** relative, z-index 10
- **6 tabs:** Packages, Day Trips & Excursions, Transfers, Hotels, Private Jet, eSIM
- **Each tab has icon + label, click switches form panel below**
- **Interaction model:** Click-driven tab switching

### 4. Destinations Carousel (section#Destinations, top ~900px, height ~840px)
- **Title:** "Unveiling Exquisite Treasures"
- **Subtitle:** "Unlock Secret Gems for Unforgettable Discoveries in Egypt"
- **Carousel:** Slick.js, 7 destination cards
- **Cards:** Rounded image cards with destination name + tour count overlay
- **Navigation:** Prev/Next circle arrows + "View All Destinations" link
- **Interaction model:** Click arrows or drag to navigate

### 5. Excursions Carousel (section#Stories, top ~1772px, height ~672px)
- **Title:** "Unforgettable Egypt Excursions!"
- **Subtitle:** "Discover More, Worry Less!..."
- **Carousel:** Slick.js, 10 excursion type cards
- **Same card pattern as Destinations**
- **Navigation:** Prev/Next arrows + "View All Types" link

### 6. TripAdvisor Reviews (section#tripadvisor-reviews, top ~2476px, height ~381px)
- **Title:** "TripAdvisor® Traveler Reviews"
- **Embedded TripAdvisor widget** (green bg panel)
- **"Bravo!" badge + "rated excellent by 336 travelers" + Travelers' Choice 2025**

### 7. Partners Logos (section#partners, top ~2889px, height ~150px)
- **Auto-scrolling logo carousel** (Slick.js)
- **Logos:** IATA, Italian Chamber of Commerce Egypt, USTOA, JATA, AHK, AMC, DRV, + more
- **Red prev/next arrows**

### 8. Footer (footer.footer, top ~3116px, height ~884px)
- **Background:** black (rgb(0,0,0))
- **Sub-sections:**
  - Newsletter (white text, email input, red Subscribe button, reCAPTCHA, decorative paper airplane images)
  - Link columns (4): Our Services, Top Destinations, About Us, Contacts
  - Contact info: phone, email, address
  - Social icons: Facebook, X, Instagram, YouTube, WhatsApp (colored circles)
  - TripAdvisor badge
  - Copyright bar: "Copyright © 2026 Travco Travel Company of Egypt" | legal links | "Powered By T.I.T Solutions"

## Floating Elements
- **Scroll-to-top button:** Fixed bottom-right, red circle with up arrow, appears after scrolling
- **Navigation bar:** Fixed top, transparent → semi-transparent black on scroll
