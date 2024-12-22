import { cn } from "@/lib/utils";
import Image from "next/image";
import { textVariants } from "./ui/text";

export function Logo() {
    return (
        <div className="flex items-center justify-start space-x-2 py-2">
            <Image src="/logo.png" className="h-10 w-10" alt="Stack Quiz Logo" width={150} height={150} priority/>
            <h1 className={cn(textVariants({ variant: "titleM" }))}>Stack Quiz</h1>
        </div>
    )
}
