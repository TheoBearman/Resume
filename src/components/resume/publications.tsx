import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

export function Publications() {
    if (!RESUME_DATA.publications || RESUME_DATA.publications.length === 0) {
        return null;
    }

    return (
        <Section className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-xl font-bold">Publications & Writing</h2>
            {RESUME_DATA.publications.map((publication, index) => {
                return (
                    <Card key={publication.title} className="border-border bg-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-2 text-base text-justify">
                                <h3 className="font-semibold leading-none text-justify">
                                    <a href={publication.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        {publication.title}
                                    </a>
                                </h3>
                                <div className="text-sm tabular-nums text-muted-foreground mt-1 sm:mt-0">
                                    {publication.date}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="mt-2 text-sm text-primary">
                            {publication.publisher}
                        </CardContent>
                        {publication.description && (
                            <CardContent className="mt-2 text-xs text-justify print:text-[12px]">
                                {publication.description}
                            </CardContent>
                        )}
                    </Card>
                );
            })}
        </Section>
    );
}
