import { useEffect, useState } from 'react';

export function ProgressBar({ current, total }: { current: number; total: number }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress((current / total) * 100);
    }, [current, total]);

    return (
        <div className="w-full rounded-full bg-secondary p-1.5 ">
            <div
                className="bg-primary h-4 rounded-full"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
