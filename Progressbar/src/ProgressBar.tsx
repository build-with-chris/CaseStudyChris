import { Progress } from "@/components/ui/progress"

interface ProgressBarProps {
    cartValue : number;
}

const FREE_SHIPPING = 25
const GIFT = 75

function calculateProgress(cartValue: number){
    if (cartValue <= FREE_SHIPPING) {
        return (cartValue/ FREE_SHIPPING) * 50
    } else if (cartValue < GIFT) {
        return 50 + ((cartValue - FREE_SHIPPING) / (GIFT - FREE_SHIPPING)) * 50 
    } else {
        return 100;
    }
}

function getTopText(cartValue: number): JSX.Element {
  if (cartValue < FREE_SHIPPING) {
    const remaining = (FREE_SHIPPING - cartValue).toFixed(2);
    return <>Nur noch {remaining} € bis zum kostenlosen Versand!</>;
  } else if (cartValue < GIFT) {
    const remaining = (GIFT - cartValue).toFixed(2);
    return <>Nur noch {remaining} € bis zu deinem Gratisprodukt!</>;
  } else {
    return <span className="text-green-700">Sie erhalten Geschenk und Versand kostenlos</span>;
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


export default function ProgressBar({ cartValue }: ProgressBarProps) {
    const progress = calculateProgress(cartValue)
    const topText = getTopText(cartValue);
    const bottomText = getBottomText(cartValue);

    return (
      <div className="bg-[#F0F4F6] p-10 text-center">
        
        <p className="p-1 text-md mb-4 text-primary/50" >{topText}</p>
        <Progress value={progress} cartValue={cartValue} />
        {bottomText && 
        (<p className="p-1 text-md mt-4 text-primary/50">{bottomText}</p>)
        }
        
      </div>
    );
}