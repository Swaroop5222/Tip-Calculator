import HomePage from "./HomePage";

export default function Output({bill,totalTip}){
    return(
        <h3>You Pay {totalTip+bill} ({bill}+{totalTip}) Rupees</h3>
    );
}