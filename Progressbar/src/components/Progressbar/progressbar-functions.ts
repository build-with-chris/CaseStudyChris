const FREE_SHIPPING = 25
const GIFT = 75

function calculateProgress(cartValue: number){
    /* the free shipping is placed at a third and the gift at the end. 
    so the calculation adapts to those goals*/
    if (cartValue <= FREE_SHIPPING) {
        return (cartValue/ FREE_SHIPPING) * 33
    } else if (cartValue < GIFT) {
        return 25 + ((cartValue - FREE_SHIPPING) / (GIFT - FREE_SHIPPING)) * 66
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
    /*no bottom text if the value is above 75€ */
  if (cartValue < FREE_SHIPPING) {
    return "Du bist auf dem besten Weg!";
  } else if (cartValue < GIFT) {
    return "Versand gesichert – weiter so!";
  } else {
    return "";
  }
}

export {calculateProgress, getTopText, getBottomText}