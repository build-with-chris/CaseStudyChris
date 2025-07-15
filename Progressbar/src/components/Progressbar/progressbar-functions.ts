const FREE_SHIPPING = 25
const GIFT = 75

function calculateProgress(cartValue: number){
    if (cartValue <= FREE_SHIPPING) {
        return (cartValue/ FREE_SHIPPING) * 25
    } else if (cartValue < GIFT) {
        return 25 + ((cartValue - FREE_SHIPPING) / (GIFT - FREE_SHIPPING)) * 75
    } else {
        return 100;
    }
}

function getTopText(cartValue: number): string {
  if (cartValue < FREE_SHIPPING) {
    const remaining = (FREE_SHIPPING - cartValue).toFixed(2);
    return `Nur noch ${remaining} € bis zum kostenlosen Versand!`;
  } else if (cartValue < GIFT) {
    const remaining = (GIFT - cartValue).toFixed(2);
    return `Nur noch ${remaining} € bis zu deinem Gratisprodukt!`;
  } else {
    return "Sie erhalten Geschenk und Versand kostenlos";
  }
}

function getBottomText(cartValue: number): string {
  if (cartValue < FREE_SHIPPING) {
    return "Du bist auf dem besten Weg!";
  } else if (cartValue < GIFT) {
    return "Versand gesichert – weiter so!";
  } else {
    return "";
  }
}

export {calculateProgress, getTopText, getBottomText}