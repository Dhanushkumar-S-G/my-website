import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Card_1 = ({children }: {children: React.ReactNode }) => {
	return (
		<Card className="shadow-[5px_5px_0px_0px_var(--border)]">
			<CardContent>{children}</CardContent>
		</Card>
	);
};
