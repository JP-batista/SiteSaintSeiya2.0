interface ProgressBarProps {
    current: number;
    total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
    const progress = (current / total) * 100;
    return (
        <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden mb-6">
            <div
                className="bg-yellow-500 h-full"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}
