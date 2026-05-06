'use client';

import "./Counter.css";
import { useState } from "react";

export default function Counter({ id, initialValue, onChange }: { id?: number | string, initialValue?: number, onChange?: (val: number) => void }) {
    const [value, setValue] = useState<number>(initialValue || 0);
    const changeValue = (val: number) => {
        onChange?.(value + val);
        setValue(value + val);
    }

    return (
        <div className="counter">
            <h1>Counter #{id}</h1>
            <span>{value}</span>
            <button onClick={() => changeValue(1)}>[+] Increment</button>
            <button onClick={() => changeValue(-1)}>[-] Decrement</button>
        </div>
    );
}