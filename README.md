# Princelink

Premium business management and consulting website for Princelink.

## Stack

- React 18 + TypeScript
- Vite
- React Router
- Lucide icons
- Manrope headings and Inter body typography

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Routes

- `/` — Home
- `/about` — About Princelink
- `/services` — Six confirmed service areas
- `/approach` — Diagnose, Strategise, Implement, Evaluate
- `/insights` — Editorial topics and honest empty state until articles are approved
- `/contact` — Enquiry form

## Important integration note

The contact form currently validates entries in the browser and clearly reports that no message has been sent. It must be connected to an approved company inbox or backend before it can receive enquiries. Official contact details, social accounts, mission and vision approval, and the official logo can be added when supplied.

Photography is currently loaded from Unsplash image URLs. Replace with approved company-owned/licensed assets before production if required.
