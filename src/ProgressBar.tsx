import { Progress } from "@/components/ui/progress"

interface ProgressBarProps {
    cartValue : number;
}

const FREE_SHIPPING = 25
const GIFT = 100

function calculateProgress(cartValue: number){
    if (cartValue <= FREE_SHIPPING) {
        return (cartValue/ FREE_SHIPPING) * 50
    } else if (cartValue < GIFT) {
        return 50 + ((cartValue - FREE_SHIPPING) / (GIFT - FREE_SHIPPING)) * 50 
    } else {
        return 100;
    }

}


export default function ProgressBar({ cartValue }: ProgressBarProps) {
    const progress = calculateProgress(cartValue)

    return(
    <Progress value={progress} />
    )
}