import { Card, CardHeader, CardContent } from "../ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"

export type MyCardProps = {
    title: string;
    description: string;
    authorName: string;
    authorRole?: string;
    authorImage?: string;
}
export default function MyCard({
    title, 
    description, 
    authorName, 
    authorRole = "Author", 
    authorImage}: MyCardProps){
    return (
        <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 m-2">
            <CardHeader>
                {/* <img
                    className="h-6 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height="24"
                    width="auto"
                /> */}
                <div className="text-2xl">{title}</div>
            </CardHeader>
            <CardContent>
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <p className="text-sm font-medium">{description}</p>

                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                        <Avatar className="size-12">
                            <AvatarImage
                                src={authorImage}
                                alt={authorName}
                                height="400"
                                width="400"
                                loading="lazy"
                            />
                            <AvatarFallback>{authorName?.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div>
                            <cite className="text-sm font-medium">{authorName}</cite>
                            <span className="text-muted-foreground block text-sm">{authorRole}</span>
                        </div>
                    </div>
                </blockquote>
            </CardContent>
        </Card>
    )
}