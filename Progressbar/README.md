# Progressbar: Versand und Geschenk 
Visualisiert den Fortschritt im Warenkorb bis zum kostenlosen Versand und Gratisprodukt.

## Features
- Dynamischer Fortschrittsbalken (0 € – 75 €)
- Zwei Schwellenwerte:  
  - Versandkostenfrei ab 25 €
  - Gratisprodukt ab 75 €
- Lokalisierte Hinweise über und unter dem Balken
- Farbige Erfolgsanzeige bei Zielerreichung

## Tech Stack
- React + TypeScript
- TailwindCSS
- UI-Component: shadcn/ui

## Anwendung
```tsx
<ProgressBar cartValue={74.99} />
```

Ideal für Shopify-ähnliche Warenkorb-Integrationen.

