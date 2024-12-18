import Image from "next/image";
import { Text } from "../ui/text";

export function QuizHeader({ title, icon, background }: { title: string, icon: string, background: string }) {
    return (
        <div className="inline-flex items-center space-x-6">
            <Image
                src={icon}
                alt={title}
                width={56}
                height={56}
                className="h-10 w-10  lg:h-14 lg:w-14 rounded-lg p-2"
                style={{ backgroundColor: background }}
            />
            <Text variant={'headingS'}>{title}</Text>
        </div>
    )
}
