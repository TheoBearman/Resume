import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

export function Qualifications() {
    return (
        <Section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-xl font-bold">Qualifications & Certifications</h2>
            {RESUME_DATA.qualifications.map((qualifications, index) => {
                return (
                    <Card key={qualifications.issuer} className="border-border bg-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-2 text-base text-justify">
                                <h3 className="font-semibold leading-none">
                                    {qualifications.issuer}
                                </h3>
                                <div className="text-sm tabular-nums text-muted-foreground mt-1 sm:mt-0">
                                    {qualifications.awarded}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="mt-2">
                            <a className="hover:underline text-primary" href={qualifications.issuerlink} target="_blank" rel="noopener noreferrer">
                                {qualifications.qualification}
                            </a>
                        </CardContent>
                    </Card>
                );
            })}
        </Section>
    );
}
