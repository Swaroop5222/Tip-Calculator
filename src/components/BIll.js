import HomePage from "./HomePage";

export default function Bill({ bill, setBill }) {
return (
<div>
    <label>How much was your Bill?</label>
    <input
    type="text"
    placeholder="Bill Value"
    value={bill}
    onChange={(e) => setBill(Number(e.target.value))}
    ></input>
</div>
);
}
