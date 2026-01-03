import HomePage from "./HomePage";

export default function Service({ curFeedBack, setCurFeedBack  ,children}) {

return (
<div>
    <label>{children}</label>
    <select
    value={curFeedBack}
    onChange={(e) => setCurFeedBack(e.target.value)}
    >
    <option value="0"> Dissatisfied(0%) </option>
    <option value="5">It was Okay(5%)</option>
    <option value="10">It was Good(10%)</option>
    <option value="20">Absolutely Amazing(20%)</option>
    </select>
</div>
);
}

