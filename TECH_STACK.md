# Tech Stack & 3D-UI Integration: The Zenith

The Zenith utilizes a decoupled architecture where the **3D Scene** and **React DOM** communicate through a shared state layer. This ensures that luxury interactions (like a paint color selection) are fluid and reactive.

## Core Technologies
- **Next.js 14 (App Router)**: Framework for high-performance server-side rendering and routing.
- **React Three Fiber (R3F)**: A React renderer for Three.js.
- **Drei**: Essential helpers for R3F (Loaders, Environment, Controls).
- **Zustand**: A lightweight, fast state management library used for the "Bridge".
- **Framer Motion**: For high-end UI micro-animations and page transitions.
- **Supabase**: Real-time inventory database.
- **Stripe**: Secure payment processing.

## The 3D-UI Bridge (Zustand)
We avoid standard React props for frequent 3D updates to prevent unnecessary re-renders of the entire scene. Instead, we use **Zustand** stores.

### Communication Flow:
1. **User Action (DOM)**: User clicks a "Midnight Velvet" paint option in the UI.
2. **State Cluster (Store)**: The `useConfigStore` updates the `paintColor` state.
3. **Reactive Model (3D)**: The car model component, which is subscribed to the store via a selector, updates its material properties instantly.
4. **Camera Sync**: When scrolling (Framer Motion), the scroll position is mapped to the 3D Camera's position via a `useFrame` hook in R3F, creating a "cinematic scroll" experience.

## Performance Optimization
- **Asset Loading**: Models are compressed with Draco and served via Next.js `/public` folder or a CDN.
- **Suspense**: Used for graceful loading states during high-res asset retrieval.
- **Selective Rendering**: Complex effects like SSR (Screen Space Reflections) are toggled based on the user's hardware detection.
