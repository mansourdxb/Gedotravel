# Behaviors — travco.com/en/

## Navigation Scroll Behavior
- **Trigger:** Scroll past ~50px from top
- **State A (top):** `navigation-transparent`, height 100px, bg `rgba(0,0,0,0)`, no shadow
- **State B (scrolled):** `navigation-animated`, height 70px, bg `rgba(0,0,0,0.8)`, no shadow
- **Transition:** `background 0.3s, height 0.3s`
- **Logo:** White logo (`logo-white.png`, 200×99) stays the same in both states
- **Nav links:** White text (18px, 400 weight) in both states

## Hero Slider
- **Library:** Slick.js (`.slick-slider.slider_wrap`)
- **Auto-play:** Yes (time-driven cycling)
- **Slides:** 7 total
- **Slide background:** `linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(...) center center / cover no-repeat`
- **Text:** Left-aligned, vertically centered
  - Title: Prata serif, 44px, 600 weight, white, `text-shadow: rgb(0,0,0) 1px 1px 2px`
  - Subtitle: Noto Sans, white, lighter weight
  - CTA button: Red bg `rgb(230,0,0)`, white text, 8px radius, 21px font
- **Navigation:** Left/right circle arrows at right edge

## Service Tab Bar
- **Interaction model:** Click-driven
- **Active tab:** Red text `rgb(230,0,0)`, likely with underline/indicator
- **Tab icons:** Custom icon font (flaticon-*, fa-mytravel-*) + custom SVG for Private Jet & eSIM
- **Form panels:** Each tab reveals different search form (destination, date, room type, etc.)
- **Position:** Overlaps bottom of hero slider, sits above destinations section

## Destination Carousel
- **Library:** Slick.js
- **Cards:** 7 destinations (Aswan, Hurghada, Sharm El Sheikh, Cairo, Luxor, Marsa Alam + possibly Mersa Matruh)
- **Card style:** Rounded corners (~16px), image fills card, gradient overlay at bottom, white text
- **Card content:** Destination name (large) + "{N} Tours" (smaller)
- **Hover:** Likely scale or shadow change (needs verification)
- **Navigation:** Circle arrows (outline left, filled red right) + "View All Destinations" text link

## Excursion Carousel
- **Same pattern as Destinations carousel**
- **Cards:** 10 excursion types
- **"View All Types" link**

## Partner Logos Carousel
- **Auto-scrolling** (continuous slide)
- **Red arrow buttons** on sides
- **Logos are grayscale/original, no hover effects observed**

## Scroll-to-Top Button
- **Appears:** After scrolling past first viewport
- **Position:** Fixed, bottom-right
- **Style:** Red circle with white up-arrow
- **Behavior:** Smooth scroll to top on click

## No Smooth Scroll Library Detected
- No `.lenis` class or Locomotive Scroll wrappers found
- Standard browser scrolling behavior
