# Whitepaper: Google Ads Conversion Tracking & ROAS-Messung in Shopify (Health E-Commerce)

## Zielsetzung

Dieses Whitepaper stellt ein umsetzungsorientiertes Konzept zur Integration von Google Ads Conversion Tracking in Shopify vor. Ziel ist die saubere und DSGVO-konforme Messung des ROAS (Return on Ad Spend) unter Berücksichtigung der branchenspezifischen Anforderungen im Nahrungsergänzungsmittelbereich. Die technische Umsetzung basiert auf Shopify Plus, Enhanced Conversions, Consent Mode v2 und Liquid-Variablen.

---

## 1. Grundlagen: Google Ads Conversion Tracking & ROAS

- **ROAS = Conversion-Wert / Werbekosten**
- Damit ROAS korrekt gemessen werden kann, muss Google Ads bei jedem Checkout der exakte **Warenwert (`value`)** übermittelt werden.
- Der Conversion-Tag wird in der Bestellbestätigungsseite eingebunden und beinhaltet:
  - `value` (Bestellwert)
  - `currency` (Währung)
  - `transaction_id` (zur Dublettenvermeidung)
  - Optional: `user_data` (gehashte Kundendaten für Enhanced Conversions)

---

## 2. Methoden zur Integration in Shopify

| Methode              | Vorteile                               | Nachteile                                 |
|----------------------|----------------------------------------|--------------------------------------------|
| Google Channel App   | Schnelle Einrichtung, native Integration | Keine Kontrolle, kein Enhanced Tracking   |
| Google Tag Manager   | Flexible Steuerung, skalierbar         | Zusätzliche Drittanbieter-Integration nötig |
| Manuelle Einbindung  | Volle Kontrolle über Code & Variablen  | Höherer Pflegeaufwand                      |

> Für Shopify Plus empfiehlt sich die **manuelle Einbindung über `checkout.liquid` oder „Zusätzliche Skripte“**, um maximale Kontrolle über Datenübergabe und Datenschutz zu gewährleisten.

---

## 3. Wichtige Shopify Liquid-Variablen für Google Ads

Folgende Liquid-Variablen sind relevant und können im Conversion-Tag verwendet werden:

| Liquid Variable              | Zweck                                  | Transformation für Google Ads             |
|-----------------------------|----------------------------------------|-------------------------------------------|
| `{{ checkout.total_price }}` | Conversion-Wert (Brutto)                | `value` in `gtag`                         |
| `{{ checkout.currency }}`    | Währung                                 | `currency` in `gtag`                      |
| `{{ checkout.order_id }}`    | Eindeutige Bestell-ID                   | `transaction_id`                          |
| `{{ checkout.email }}`       | Kunden-E-Mail (Enhanced Conversion)     | SHA256-Hash über JS vor dem Senden        |

### Beispielhafte Einbindung:

```liquid
<script>
if (window.Shopify && Shopify.customer_consent.analytics === true) {
  const email = '{{ checkout.email | downcase | strip }}';
  sha256(email).then(function(hashedEmail) {
    gtag('event', 'conversion', {
      'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
      'value': {{ checkout.total_price | money_without_currency }},
      'currency': '{{ checkout.currency }}',
      'transaction_id': '{{ checkout.order_id }}',
      'user_data': { 'email': hashedEmail }
    });
  });
}
</script>liquid```

## 4. DSGVO & Enhanced Conversions im Health-Kontext

- Enhanced Conversions nutzen personenbezogene Daten (z. B. E-Mail-Adresse) und erfordern **aktive Zustimmung (Opt-in)**.
- Im Bereich Nahrungsergänzung müssen Retargeting- und Tracking-Maßnahmen so gestaltet sein, dass **keine Gesundheitsdaten** erkennbar sind oder kombiniert werden (z. B. „Reizdarm-Seiten“) ohne explizite Einwilligung.
- Mit **Consent Mode v2** können Conversions modelliert werden, wenn kein Consent vorliegt (statt vollständig zu entfallen).
- DSGVO-Konformität erfordert:
  - Transparente Datenschutzerklärung (inkl. Google Ads & Hashing)
  - Logging der Consent-Zustimmung
  - Verzicht auf krankheitsspezifisches Retargeting

---

## 5. Testing & Debugging

- Verwendung von **Google Tag Assistant** oder `gtag_report_conversion` zur Funktionsprüfung
- **Netzwerk-Analyse** im Browser zur Überprüfung, ob ein Aufruf an  
  `https://www.googleadservices.com/pagead/conversion/...` erfolgt
- Debugging von Enhanced Conversions über Google Ads:  
  *Tools > Enhanced Conversions > Status prüfen*
- Shopify Bestellstatusseite testbar mit dem Parameter:  
  `?debug=true`

---

## 6. Fazit & Ausblick

Durch die Kombination aus Shopify Plus, manuellem Tagging, Liquid-Variablen und DSGVO-konformer Enhanced Conversion lässt sich eine robuste, transparente und zukunftssichere Tracking-Infrastruktur aufbauen.

### 🔭 Ausblick – Weiterentwicklungsmöglichkeiten:
- **Remarketing-Listen** auf Basis von Käuferverhalten (nur mit Consent)
- **Warenkorbabbruch-Tracking** zur Conversion-Steigerung
- **Serverseitiges Tagging (Server-Side GTM)** für noch mehr Datenschutzkontrolle und Datenqualität

---

**Erstellt von:** Christoph Hermann  
**Stand:** Juli 2025