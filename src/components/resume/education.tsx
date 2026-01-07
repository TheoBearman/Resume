import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

export function Education() {
    return (
        <Section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl font-bold">Education</h2>
            {RESUME_DATA.education.map((education, index) => {
                return (
                    <Card key={education.school} className="border-border bg-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-2 text-base text-justify">
                                <h3 className="font-semibold leading-none text-justify">
                                    {education.school}
                                </h3>
                                <div className="text-sm tabular-nums text-muted-foreground mt-1 sm:mt-0">
                                    {education.start} - {education.end}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="mt-2">{education.degree}</CardContent>
                        <CardContent className="mt-2 text-xs text-justify print:text-[12px]">
                            {education.description}
                        </CardContent>
                    </Card>
                );
            })}
        </Section>
    );
}
