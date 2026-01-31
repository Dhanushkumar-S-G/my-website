import { Card, CardHeader, CardContent } from "../ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
export default function MyCard(){
    return (
        <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 m-2">
            <CardHeader>
                <img
                    className="h-6 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height="24"
                    width="auto"
                />
            </CardHeader>
            <CardContent>
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <p className="text-xl font-medium">Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development</p>

                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                        <Avatar className="size-12">
                            <AvatarImage
                                src="https://tailus.io/images/reviews/shekinah.webp"
                                alt="Shekinah Tshiokufila"
                                height="400"
                                width="400"
                                loading="lazy"
                            />
                            <AvatarFallback>ST</AvatarFallback>
                        </Avatar>

                        <div>
                            <cite className="text-sm font-medium">Shekinah Tshiokufila</cite>
                            <span className="text-muted-foreground block text-sm">Software Ingineer</span>
                        </div>
                    </div>
                </blockquote>
            </CardContent>
        </Card>
    )
}