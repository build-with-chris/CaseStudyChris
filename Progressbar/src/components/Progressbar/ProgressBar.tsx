import { Progress } from "@/components/ui/progress"
import PresentIcon from "../icons/PresenetIcon";
import PostIcon from "../icons/PostIcon";
import { calculateProgress, getTopText, getBottomText } from "./progressbar-functions";


interface ProgressBarProps {
    cartValue : number;
}






export default function ProgressBar({ cartValue }: ProgressBarProps) {
    const progress = calculateProgress(cartValue)
    const topText = getTopText(cartValue);
    const bottomText = getBottomText(cartValue);

    

    return (
      <div className="p-10 text-center">
        <p
          className={`p-1 text-xl mb-4 ${
            cartValue >= 75 ? 'text-green-600' : 'text-primary/50'
          }`}
        >
          {topText}
        </p>
        <div className="relative">
  
            <PostIcon
              className={`absolute left-[33%] top-1/2 w-11 h-11 transform -translate-x-1/2 -translate-y-1/2 z-10 ${
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
        (<p className="p-1 text-xl mt-4 text-primary/50">{bottomText}</p>)
        }
        
      </div>
    );
}