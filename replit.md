# Wedding Invitation Website

## Project Overview
This is a wedding invitation website for Jayrald Lladones & Julie Anne Gacilo's wedding on December 2, 2025. The project is a full-stack JavaScript application showcasing a beautiful wedding invitation with multiple sections including hero, slideshow, invitation details, countdown, story, venue information, RSVP, and more.

## Project Architecture
- **Frontend**: React with TypeScript, Vite for bundling, Tailwind CSS + shadcn/ui for styling
- **Backend**: Express.js server with TypeScript
- **Routing**: Wouter (React routing library)
- **State Management**: TanStack Query for server state
- **Database**: In-memory storage (MemStorage) - can be upgraded to PostgreSQL if needed
- **Styling**: Tailwind CSS with custom wedding theme
- **Audio**: Background music integration with user interaction triggers

## Key Features
- Responsive wedding invitation website
- Interactive hero section with invitation opening animation
- Background music that starts on user interaction
- Interactive quiz game for invitation reveal (click pirates to start)
- Score-based invitation designs (premium for 4-5 correct, standard for 0-3 correct)
- Multiple content sections (story, venue, RSVP, FAQ, etc.)
- Modern UI components using shadcn/ui
- Dark/light theme support
- SEO optimized

## Migration Status
Successfully migrated from Lovable to Replit environment:
- [x] Install required dependencies (react-router-dom, sonner, nanoid)
- [x] Convert routing from react-router-dom to wouter 
- [x] Set up proper QueryClient configuration
- [x] Fixed background music functionality with proper autoplay handling
- [x] Enhanced typography with elegant Google Fonts (Playfair Display, Cormorant Garamond, Inter)
- [x] Updated HeroSection with improved font styling and data-testid attributes
- [x] Removed visual artifacts from slideshow section
- [x] Improved InvitationSection layout and styling
- [x] Complete migration verification

## Development Notes
- Uses Replit's full-stack template with Express backend and React frontend
- Server runs on port 5000 and serves both API and frontend
- Vite handles development bundling and HMR
- Audio files are hosted on Cloudinary CDN

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## Recent Changes
- **2024-01-09**: Started migration from Lovable to Replit
- **2024-01-09**: Updated routing system from react-router-dom to wouter
- **2024-01-09**: Created QueryClient setup with proper API request handling
- **2024-01-09**: Fixed background music with improved autoplay handling and fallback interactions
- **2024-01-09**: Enhanced typography with Google Fonts (Playfair Display, Cormorant Garamond, Inter)
- **2024-01-09**: Updated HeroSection with elegant font styling and improved spacing
- **2024-01-09**: Added data-testid attributes for accessibility and testing
- **2024-01-09**: Removed visual artifacts from slideshow section
- **2024-01-09**: Improved InvitationSection layout and styling
- **2024-01-09**: Enhanced StorySection with designer polaroid frames and elegant text layout
- **2024-01-09**: Fixed mobile shadows and glass effects across all components
- **2024-01-09**: Fixed deployment issues for Cloud Run production environment:
  - Updated server.listen() to use PORT environment variable for production deployments
  - Added comprehensive error handling for server startup process
  - Implemented graceful shutdown handlers for SIGTERM and SIGINT signals
  - Verified build output structure with dist/index.js and static assets in dist/public
- **2024-01-09**: Converted website for Vercel deployment:
  - Removed server dependencies and converted to static React site
  - Created vercel.json configuration and .vercelignore file
  - Updated queryClient to work without API endpoints
  - Generated static build in dist/public/ with all assets
  - Created comprehensive deployment guide (VERCEL_DEPLOYMENT.md)
- **2025-01-16**: Complete content overhaul for Ej & Krizza's wedding:
  - Updated all components with new couple names "Ej & Krizza"
  - Changed wedding date to September 7, 2025 at 1:00 PM
  - Updated venues to Sacred Heart of Jesus (ceremony) and Summit Galleria Cebu (reception)
  - Migrated all images from Google Drive to Cloudinary for reliable hosting
  - Updated hero section background with new couple photo
  - Replaced slideshow with 18 new engagement photos
  - Updated story section with 9 new photos and completely new story content
  - Changed "DY Missing Piece" to "The Vow" in story section
  - Updated wedding timeline with new schedule (1:00 PM arrival, 1:30 PM ceremony, etc.)
  - Added "unplugged ceremony" messaging throughout venue section
  - Updated dress code to formal attire requirements with no cocktail dresses or cream/white colors
  - Changed gift message to new wording about monetary gifts for their future
  - Completely rewrote FAQ section with new questions about unplugged ceremony, arrival times, plus-one policy
  - Updated contact information to 0926 002 9824 and paranelmer@gmail.com
  - Changed wedding hashtag to #SeaYouAtTheAisle
  - Updated countdown timer to use correct September 7, 2025 date
  - Updated HTML title and meta description for new couple
  - Updated all venue details with new Cebu locations and Google Maps links
  - Added comprehensive unplugged ceremony note to venue section
  - Updated RSVP deadline to August 20, 2025
  - Transformed website to dark mode with old money aesthetic:
    - Updated CSS variables to use #171610 (dark background), #333333 (medium dark), #ffffff (white text)
    - Converted all hardcoded color references to match dark mode theme
    - Updated all components with new color scheme while maintaining existing layout
    - Enhanced buttons and interactive elements with elegant hover effects
    - Maintained sophisticated wedding aesthetic with dark luxury styling
- **2025-01-16**: Successfully migrated from Replit Agent to Replit environment:
  - Fixed server port configuration from 5173 to 5000 for Replit compatibility
  - All required packages already installed and working
  - Verified website functionality with working background music and user interactions
  - Added comprehensive EntourageSection with complete wedding party details including:
    - Parents (Elmer & Genalyn Paran, Jaymar & Merlyn Manlangit)
    - Principal sponsors (14 couples)
    - Secondary sponsors (Candle, Veil, Cord)
    - Best Man (Brandon Lemoshiro) and Maid of Honor (Daisy Jane Macairan)
    - Groomsmen and Bridesmaids (6 each)
    - Flower Men and Flower Ladies
    - Ring Bearer, Coin Bearer, Bible Bearer
    - Officiating Priest (Rev. Fr. Wilson T. Lagare)
  - Positioned EntourageSection before RSVP section as requested
  - Maintained dark mode aesthetic with elegant card layouts
  - Optimized EntourageSection for mobile responsiveness with:
    - Responsive grid layouts (grid-cols-1 sm:grid-cols-2 md:grid-cols-2)
    - Adaptive text sizes (text-base md:text-lg, text-xl md:text-2xl)
    - Responsive padding and spacing (p-6 md:p-8, mb-6 md:mb-8)
    - Mobile-first design ensuring readability on all device sizes
- **2025-10-04**: Successfully imported GitHub repository to Replit environment:
  - Verified all npm dependencies are properly installed (506 packages)
  - Confirmed server configuration uses 0.0.0.0 host for Replit proxy compatibility
  - Verified Vite server configuration with `allowedHosts: true` for proper iframe proxy support
  - Configured workflow "Start application" to run on port 5000 with webview output
  - Set up deployment configuration for autoscale deployment with build and run commands
  - Verified website is running correctly with all features functional:
    - Background music with user interaction triggers
    - Interactive quiz game for invitation reveal
    - All wedding sections displaying properly
    - Dark mode aesthetic maintained
  - Minor browser console warning: Font decode error for boska-800.woff2 (OTS parsing error) - does not affect functionality
- **2025-10-04**: Updated wedding date and content:
  - Changed wedding date from September 7, 2025 to November 8, 2025 across all components
  - Updated countdown timer to November 8, 2025 at 1:00 PM
  - Updated quiz game questions and answers:
    - Q1: "Who made the first move?" → Answer: The Bride
    - Q2: "Who said 'I love you' first?" → Answer: The Groom
    - Q3: "Who's more likely to remind the other to eat vegetables?" → Answer: The Bride
    - Q4: "Who planned more of the wedding?" → Answer: The Bride & Groom
    - Q5: "Who makes the tastier home-cooked dish?" → Answer: The Groom
  - Updated love story sections with new titles and content:
    - "How We Met": Church ministry meeting and friendship through faith
    - "Dreams Together": Long distance relationship with shared dreams
    - "Oceans Apart": Love bridging miles and oceans
    - "The Decision": Civil union beginning, celebrating love in fullness
    - "Our Future": Promise made possible by God's grace
  - Updated wedding timeline:
    - 12:00 PM: Guest Arrival & Registration
    - 1:00 PM: The Entourage & Wedding Ceremony
    - 3:00 PM: Refreshment & Photobooth
    - 5:00 PM: Dinner & Heartfelt Toast
    - 6:00 PM: A Night to Remember
  - Changed tagline from "A celebration of love from dusk till dawn" to "Our Love Shines Till Evening"
  - Updated HTML title and meta description with Ernesto & Carmela names and November 8, 2025 date
  - Updated footer with correct November 8, 2025 date
  - Updated hero section date display to 11.08.2025
- **2025-09-30**: Added interactive quiz game for invitation reveal:
  - Replaced pirate clicking mechanism with "Open Invitation" button
  - Created QuizGame component with 5 relationship questions:
    1. Who made the first move? (Answer: The Groom)
    2. Who said "I love you" first? (Answer: The Groom)
    3. Who's more likely to start a fight over food? (Answer: The Bride)
    4. Who planned more of the wedding? (Answer: The Bride)
    5. Who's the better cook? (Answer: The Groom)
  - Real-time reaction feedback after each answer with animated emojis and messages
  - Score tracking system (0-5 points)
  - Centered quiz layout for better desktop/mobile experience
  - Updated EnvelopeAnimation with two invitation designs:
    - Premium design (4-5 correct): Golden gradient border, animated sparkles, VIP message, rotating decorative elements
    - Standard design (0-3 correct): Clean white paper with simple decorations
  - Shows "Perfect Score!" message only for 5/5, "Amazing Score!" with actual score for 4/5
  - Implemented functional state updates for reliable score tracking
  - Adjusted invitation paper dimensions: wider (max-w-5xl) and shorter (reduced padding and spacing)
- **2025-10-25**: Complete wedding details update for Jay & Lianne:
  - Updated couple names to Jay Lladones & Julie Anne Gacilo (Jay & Lianne)
  - Changed wedding date to December 2, 2025 at 2:00 PM
  - Updated ceremony venue to Parish of Immaculate Heart of Mary
  - Updated reception venue to Jamesville Hotel and Resort
  - Changed wedding hashtag to #JAYWalaNangSoLIANNE
  - Updated love story to reflect their 7-year LDR journey (Camarines Norte to Antipolo)
  - Updated story cards with new titles and content:
    - "It Started With Friendship"
    - "LDR Journey"
    - "Making It Work"
    - "Seven Years Later"
  - Updated attire guide:
    - Ninong: Coat and Suit
    - Ninangs: Gold formal attire
    - Guests: Semi-formal or formal with touch of green
  - Updated complete entourage list:
    - Parents: Leonardo & Cristina Lladones, Rimar & Pacita Gacilo
    - Principal Sponsors: 10 married couples plus 2 additional female sponsors
    - Best Man: Engr. Daniel Sena
    - Maid of Honor: Stephanie Cortes, Mikaela Isabel Reyes
    - Groomsmen: Robert Gacilo, Jonathan Gacilo
    - Bridesmaids: Maria Sophia Lagartos, Ariane Pauline Castulo
    - Secondary Sponsors: Candle, Veil (4 people), Cord (4 people)
    - Ring Bearer: Jhaziel Tuayon
    - Coin Bearer: Noah Diasanta
    - Bible Bearer: Rouge Vermilion Felipe
  - Updated HTML title and meta descriptions with new couple names and date
  - Updated all footer and header references throughout the site
  - Updated venue images with new ceremony (Parish of Immaculate Heart of Mary) and reception (Jamesville Hotel and Resort) photos
  - Updated Google Maps links for both venues
  - Changed RSVP deadline to November 15, 2025
  - Updated gift message with new heartfelt wording
  - Updated attire section:
    - Principal Sponsors Gentlemen: Black or suits with motif inspired accents
    - Principal Sponsors Ladies: Beige, Gold, or Champagne gowns
    - Guest semi-formal: Emerald green, Sage, Olive green, Gold, or Light gray
    - White and Ivory lovingly reserved for the couple