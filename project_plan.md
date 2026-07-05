# ISDIA 2027 - International Summit on Disability Inclusion & Accessibility

## 1. Project Description
A prestigious multi-edition web portal for the International Summit on Disability Inclusion & Accessibility 2027, co-hosted by "Lead Disability Inclusive Society" and "Hope Inclusive Consultancy Inc." The platform serves global delegates, policymakers, corporate heads, volunteers, and academics with a warm sunset gold + platinum silver aesthetic, WCAG 2.2 AAA compliance, and multi-language support.

## 2. Page Structure

### Directory 1: The Gateway (General Info)
- `/` - Home / Inaugural Hero Section
- `/co-hosts` - Co-Host Profiles (Lead & Hope Consultancy)
- `/mission` - Summit Charter & Mission Statement
- `/faq` - Official FAQ & Accessibility Travel Information

### Directory 2: The Core Agenda
- `/agenda` - Master 3-Day Multi-Track Agenda Grid
- `/agenda/builder` - Personalized Agenda Builder (My Calendar)
- `/speakers` - Keynote Speaker & Panelist Profiles
- `/venue` - Interactive Virtual Venue Map

### Directory 3: Registration & Global Portals
- `/register` - Secure Multi-Currency Ticketing Desk
- `/call-for-papers` - Academic Call-for-Papers Upload Hub
- `/sponsors` - Global Sponsor & Exhibitor Packages
- `/volunteer` - Volunteer & Sign-Language Interpreter Sign-up

### Directory 4: Interactive Media Hub
- `/live` - Accessible Hybrid Live-Stream Player
- `/media/archive` - On-Demand Previous Session Video Archive
- `/press` - Press Room & Latest Announcements
- `/gallery` - Photo Lightbox Gallery

### Directory 5: Dynamic Networking Platform
- `/login` - Secure Attendee Login
- `/dashboard` - Attendee Dashboard
- `/networking` - Direct Matchmaking Interest Profile Selector
- `/networking/chat` - Peer-to-Peer Accessible Chat Room
- `/partners` - Partner Spotlights & Digital Booths

### Directory 6: Year-Over-Year Archives
- `/archives` - Previous Summits Archive Portal
- `/archives/research` - Historic Research Paper & Slide Deck Repository
- `/archives/hall-of-fame` - Past Keynote Hall of Fame

## 3. Core Features
- [x] Hero section with video background + countdown timer + separate stats banner
- [x] Light, bright, warm cream aesthetic (sunset gold + platinum on light base)
- [x] Annual conference data structure for easy year-over-year updates
- [x] Horizontal swipeable agenda track carousel with dot indicators
- [x] WCAG 2.2 AAA semantic structure with ARIA landmarks
- [x] Golden focus rings on all interactive elements
- [x] aria-live regions for dynamic content
- [x] Glassmorphic card design with platinum borders
- [x] Golden shimmer hover animations on CTAs
- [x] Multi-track agenda grid with timezone dual-clock
- [x] Personalized agenda builder with calendar export
- [x] Speaker and panelist profiles
- [x] Venue map (Google Maps embed)
- [x] Multi-currency ticketing page with payment methods display
- [ ] Stripe payment integration for secure checkout
- [x] Call-for-papers submission system
- [x] Sponsor & exhibitor packages display
- [x] Volunteer sign-up form
- [x] Live-stream player (accessible)
- [x] Video archive library
- [x] Press room with announcements
- [x] Photo gallery with lightbox
- [x] Attendee login & dashboard
- [x] Matchmaking interest selector
- [x] Peer-to-peer chat
- [x] Partner spotlights
- [x] Year-over-year archives
- [x] Font scaler (up to 300%)
- [x] Dyslexia font mode toggle
- [x] High-contrast mode toggle
- [x] Multi-language support (EN, FR, AR, ES)
- [ ] Plain-language toggle for accessibility
- [ ] Global timezone synchronizer
- [x] Open Graph meta tags for social sharing

## 4. Data Model Design

### Table: registrations
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| email | text | Registrant email |
| full_name | text | Full name |
| ticket_type | text | General, Corporate, Academic, Student, Special Needs |
| currency | text | Payment currency |
| amount | numeric | Ticket price |
| payment_status | text | pending, completed, refunded |
| created_at | timestamptz | Registration time |

### Table: paper_submissions
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| submitter_name | text | Author name |
| email | text | Contact email |
| title | text | Paper title |
| abstract | text | Paper abstract |
| file_url | text | Uploaded paper URL |
| accessibility_score | integer | Accessibility check score |
| status | text | submitted, under_review, accepted, rejected |
| created_at | timestamptz | Submission time |

### Table: volunteer_applications
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| full_name | text | Applicant name |
| email | text | Contact email |
| role | text | Volunteer or Sign-Language Interpreter |
| availability | text | Available dates |
| created_at | timestamptz | Application time |

### Table: speakers
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| name | text | Speaker name |
| title | text | Professional title |
| bio | text | Biography |
| photo_url | text | Speaker photo |
| session_title | text | Session title |
| track | text | Agenda track |
| day | text | Day 1, 2, or 3 |
| time_slot | text | Session time |

### Table: agenda_sessions
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| title | text | Session title |
| description | text | Session description |
| track | text | Track name |
| day | text | Day 1, 2, or 3 |
| start_time | time | Start time |
| end_time | time | End time |
| venue_room | text | Room name |
| speaker_id | uuid | FK to speakers |

## 5. Backend / Third-party Integration Plan
- **Supabase**: Database for registrations, submissions, speakers, agenda, volunteers. Auth for attendee login.
- **Cloudinary**: Media uploads for paper submissions and gallery images.
- **Stripe**: Multi-currency payment processing for ticket sales.
- **Google Maps**: Venue map embed.

## 6. Development Phase Plan

### Phase 1: Core Website Foundation + All Directories ✅ COMPLETED
- Goal: Build the complete visual website structure with all 24 pages across 6 directories
- Deliverable: Homepage with cinematic hero + countdown, co-host profiles, mission charter, FAQ, agenda grid with filtering, speaker profiles with track/day filters, venue map, registration ticketing desk, call-for-papers, sponsors packages, volunteer sign-up, live-stream player, video archive, press room, photo gallery, attendee login, dashboard, networking matchmaking, chat room, partner spotlights, year-over-year archives portal — all with glassmorphic design system and accessibility foundations

### Phase 2: Supabase + Backend Integration
- Goal: Connect Supabase, set up database tables for registrations, paper submissions, volunteers, speakers, agenda, auth, and RLS policies
- Deliverable: Working registration system, paper submission, volunteer sign-up, speaker/agenda data from database, attendee authentication

### Phase 3: Payments, Media Upload & Accessibility Controls
- Goal: Integrate Stripe for ticketing, Cloudinary for media uploads, and the full Universal Control Desk
- Deliverable: Multi-currency checkout, paper/slide upload with accessibility checks, font scaler, dyslexia mode, high-contrast toggle, multi-language engine, plain-language toggle

### Phase 4: Interactive Features & Polish
- Goal: Build the real-time networking features, agenda builder with calendar sync, and final polish
- Deliverable: Working chat system, matchmaking algorithm, personalized agenda with timezone sync, animations, final accessibility audit