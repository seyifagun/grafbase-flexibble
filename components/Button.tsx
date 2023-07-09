import React,{MouseEventHandler} from 'react';
import Image from "next/image";

type Props = {
    title: string,
}

const Button = ({title}:Props) => (
    <button
        className={`flexCenter gap-3 px-4 py-3`}
    >
        {title}
    </button>
)

export default Button