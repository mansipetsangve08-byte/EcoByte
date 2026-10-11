# 🌿 EcoByte — Sustainable Electronics Lifecycle & E-Waste Management

EcoByte is a modern, responsive platform dedicated to responsible electronic waste disposal, certified DoD 5220.22-M data sanitization, and verified closed-loop circular material recovery.

---

## ✨ Features

- **Doorstep Pickup Scheduling**: Book free e-waste collection with time windows, category specification, and DoD data wipe certification requests.
- **Collection Hubs Directory & Interactive Map**: Locate certified collection centers across metropolitan areas with operational hours and accepted materials streams.
- **User Dashboard & ESG Analytics**: Track personal and corporate recycling metrics, total kg diverted, greenhouse CO₂ offset, and earn EcoPoints.
- **Verifiable Green Certificates**: Download ISO 14001:2015 and R2v3 compliant disposal manifests.
- **User & Enterprise Authentication**: Secure sign-in and onboarding for recyclers and industrial logistics partners.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons & Typography**: Google Fonts Inter & Material Symbols Outlined, [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.18.0 or newer)
- npm or yarn

### Installation

```bash
git clone https://github.com/mansipetsangve08-byte/EcoByte.git
cd EcoByte
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the website.

---

## 📁 Project Structure

```
ecobyte/
├── public/                 # Static SVG icons and assets
├── src/
│   ├── app/
│   │   ├── auth/           # Login and Registration portal
│   │   │   └── success/    # Onboarding confirmation
│   │   ├── centers/        # Directory of certified collection centers
│   │   ├── dashboard/      # User metrics, impact summary & history
│   │   ├── globals.css     # Design tokens and tailwind styles
│   │   ├── layout.tsx      # Root application layout
│   │   └── page.tsx        # Homepage & hero section
│   └── components/
│       ├── CollectionMapSection.tsx  # Dynamic collection hub locator map
│       ├── Footer.tsx                # Compliance & footer links
│       ├── Logo.tsx                  # EcoByte brand SVG component
│       ├── Navbar.tsx                # Responsive navigation & CTA bar
│       └── PickupModal.tsx           # Doorstep pickup booking modal
├── package.json
└── tsconfig.json
```

---

## 📜 License & Compliance

Complies with R2v3, ISO 14001:2015, and EPA Sustainable Materials Management standards.
