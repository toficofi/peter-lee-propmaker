"use client"

interface Props {
    className?: string;
}

export default function Copyright({className}: Props) {
    const year = new Date().getFullYear();

    return <span className={className}>{year}</span>
}