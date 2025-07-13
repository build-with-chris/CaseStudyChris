import { Progress } from "@/components/ui/progress"
import PresentIcon from "./components/icons/PresenetIcon";
import PostIcon from "./components/icons/PostIcon";
interface ProgressBarProps {
    cartValue : number;
}

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
      <div className="p-10 text-center">
        
        <p className="p-1 text-md mb-4 text-primary/50" >{topText}</p>
        <div className="relative">
  
            <PostIcon
              className={`absolute left-[25%] top-1/2 w-11 h-11 transform -translate-x-1/2 -translate-y-1/2 z-10 ${
                cartValue >= 25 ? "text-green-600 fill-green-600" : "text-gray-400 fill-gray-400"
              }`}
            />

      
            <PresentIcon
              className={`absolute left-[100%] top-1/2 w-11 h-11 transform -translate-x-1/2 -translate-y-1/2 z-10 ${
                cartValue >= 75 ? "text-green-600 fill-green-600" : "text-gray-400 fill-gray-400"
              }`}
            />

        <Progress value={progress} cartValue={cartValue} />

        </div>
        {bottomText && 
        (<p className="p-1 text-md mt-4 text-primary/50">{bottomText}</p>)
        }
        
      </div>
    );
}