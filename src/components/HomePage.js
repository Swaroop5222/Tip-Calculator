import { useState } from "react";
import Bill from "./BIll";
import Service from "./service";
import Reset from "./Reset";
import Output from "./Output";
import Header from "./Header";

export default function HomePage() {
const [bill, setBill] = useState("");
const [curFeedBack, setCurFeedBack] = useState(0);
const [friendFeedBack, setFriendFeedBack] = useState(0);

const tipPercent= (Number(curFeedBack) + Number(friendFeedBack)) / 2
const totalTip = Number(bill) * ( tipPercent / 100);

function handleReset() {
setBill(" ");
setCurFeedBack(0);
setFriendFeedBack(0);
}

return (
<div>
    <Header/>
    <Bill bill={bill} setBill={setBill} />
    <Service curFeedBack={curFeedBack} setCurFeedBack={setCurFeedBack}>
    {"How did you like the Service?"}
    </Service>
    <Service curFeedBack={friendFeedBack} setCurFeedBack={setFriendFeedBack}>
    {"How did your friend like your service?"}
    </Service>
    {bill>0 ? (
    <>
        <Output bill={bill} totalTip={totalTip} />
        <Reset handleReset={handleReset} />
    </>
    ) : null}
</div>
);
}
