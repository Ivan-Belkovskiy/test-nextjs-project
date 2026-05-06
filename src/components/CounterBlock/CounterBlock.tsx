'use client';

import { useState } from "react";
import Counter from "../Counter/Counter";

export default function CounterBlock() {

    const [count01, setCount01] = useState(0);
    const [count02, setCount02] = useState(0);
    const [count03, setCount03] = useState(0);

    return (
        <div className="counter-block flex flex-col gap-5 items-center border-solid border-1 rounded-[5px] p-3">
            <Counter id={1} onChange={(newValue) => setCount01(newValue)} />
            <Counter id={2} onChange={(newValue) => setCount02(newValue)} />
            <Counter id={3} onChange={(newValue) => setCount03(newValue)} />
            <p>Total Count: {count01 + count02 + count03}</p>
        </div>
    );
}