# Project Structure: The Zenith

This document outlines the directory structure for The Zenith, a luxury automotive digital experience.

```text
the-zenith/
├── public/
│   ├── models/                # 3D assets (.glb, .gltf)
│   ├── textures/              # Environment maps, PBR textures
│   ├── images/                # High-res photography, UI icons
│   └── fonts/                 # Luxury typography (Inter, Serif variants)
├── src/
│   ├── app/                   # Next.js App Router (Pages & API)
│   │   ├── (shop)/            # Group for inventory and checkout
│   │   │   ├── inventory/
│   │   │   │   └── page.tsx
│   │   │   └── checkout/
│   │   │       └── page.tsx
│   │   ├── configurator/      # Bespoke Configurator route
│   │   │   └── page.tsx
│   │   ├── api/               # API Routes (Stripe, Supabase hooks)
│   │   │   ├── checkout/
│   │   │   └── configurator/
│   │   ├── layout.tsx         # Global layout with Three.js Canvas provider
│   │   └── page.tsx           # Hero / Landing Page
│   ├── components/            # React UI Library
│   │   ├── common/            # Typography, Buttons, Modals
│   │   ├── forms/             # Lead gen and checkout components
│   │   ├── layout/            # Navbar, Footer, Overlays
│   │   └── shop/              # Inventory cards, cart items
│   ├── components-3d/         # React Three Fiber components
│   │   ├── canvas/            # The main Scene container
│   │   ├── objects/           # Car models, lightning, environment
│   │   ├── effects/           # Post-processing configurations
│   │   └── views/             # Specific 3D layouts per page
│   ├── hooks/                 # Custom React hooks (3D state, auth)
│   ├── lib/                   # Utility functions & Shared logic
│   │   ├── supabase/          # Supabase client and types
│   │   ├── stripe/            # Stripe client and actions
│   │   └── utils/             # Framer Motion helpers, formatting
│   ├── store/                 # State Management (Zustand)
│   │   ├── useConfigStore.ts  # Configurator state (Colors, Rims, Interior)
│   │   └── useUIStore.ts      # UI state (Cart, Navigation, Loading)
│   ├── styles/                # Global CSS and Tailwind configs
│   └── types/                 # TypeScript interfaces
├── .env.local                 # External integration keys
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
