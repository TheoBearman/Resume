import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

export function Awards() {
    return (
        <Section className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-xl font-bold">Awards & Honours</h2>
            {RESUME_DATA.awards.map((awards, index) => {
                return (
                    <Card key={awards.issuer} className="border-border bg-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-2 text-base text-justify">
                                <h3 className="font-semibold leading-none">
                                    {awards.issuer}
                                </h3>
                                <div className="text-sm tabular-nums text-muted-foreground mt-1 sm:mt-0">
                                    {awards.awarded}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="mt-2">{awards.award}</CardContent>
                        <CardContent className="mt-2 text-xs">
                            {awards.what}
                        </CardContent>
                    </Card>
                );
            })}
        </Section>
    );
}
