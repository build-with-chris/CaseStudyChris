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
<ProgressBar cartValue={20} />
```

Ich habe hier ein paar wenige Abweichungen eingebaut, die für mich mehr Sinn ergeben haben:
1. die beiden Schwellenwerte nehmen jeweils 50% des balkens ein. Sprich bei 25€ ist der Balken bereits halb gefüllt. Die weitere Hälfte wird nur halb so schnell gefüllt (bis 75€).
2. Außerdem habe ich statt einen statischen Wert im Top Text dynamische Werte angegeben und eine motivierende Nachricht im unteren Text.
3. Buttons um den Warenkorbwert zu erhöhen (useState) für einfachere Demonstration

