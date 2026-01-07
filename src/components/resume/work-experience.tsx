import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { parse, isValid, differenceInMonths } from "date-fns";

// Function to calculate duration between two dates using date-fns
function getDuration(startDate: string, endDate: string): string {
    // Helper to parse date strings like "January 2020", "Jan 2020", or just "2020"
    const parseResumeDate = (dateStr: string): Date => {
        if (dateStr === "Present") {
            return new Date();
        }
        // Try parsing with full month name
        let parsed = parse(dateStr, "MMMM yyyy", new Date());
        if (!isValid(parsed)) {
            // Try abbreviated month
            parsed = parse(dateStr, "MMM yyyy", new Date());
        }
        if (!isValid(parsed)) {
            // Try just year
            parsed = parse(dateStr, "yyyy", new Date());
        }
        if (!isValid(parsed)) {
            // Fallback to current date
            return new Date();
        }
        return parsed;
    };

    const start = parseResumeDate(startDate);
    const end = parseResumeDate(endDate);
    let months = differenceInMonths(end, start);
    // Ensure at least 1 month
    months = Math.max(1, months);

    if (months >= 12) {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        if (remainingMonths === 0) {
            return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
        } else {
            return `${years} ${years === 1 ? 'yr' : 'yrs'} ${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}`;
        }
    } else {
        return `${months} ${months === 1 ? 'mo' : 'mos'}`;
    }
}

export function WorkExperience() {
    return (
        <Section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
            {Object.entries(
                RESUME_DATA.work.reduce<Record<string, typeof RESUME_DATA.work[number][]>>((acc, job) => {
                    const companyName = job.company;
                    if (!acc[companyName]) {
                        acc[companyName] = [];
                    }
                    acc[companyName].push(job);
                    return acc;
                }, {})
            ).map(([company, jobs]) => {
                // Sort jobs in reverse chronological order (newest first)
                const sortedJobs = [...jobs].sort((a, b) => {
                    if (a.end === "Present") return -1;
                    if (b.end === "Present") return 1;
                    return new Date(b.start).getTime() - new Date(a.start).getTime();
                });
                if (sortedJobs.length === 1) {
                    const job = sortedJobs[0];
                    return (
                        <Card key={company} className="border-border bg-card mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-2 text-base text-justify">
                                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none text-justify">
                                        <a>{company}</a>
                                    </h3>
                                    <div className="text-sm tabular-nums text-muted-foreground mt-1 sm:mt-0">
                                        {job.start} - {job.end} · {getDuration(job.start, job.end)}
                                    </div>
                                </div>
                                <h4 className="font-mono text-sm leading-none print:text-[12px] text-muted-foreground">
                                    {job.title}
                                </h4>
                            </CardHeader>
                            <CardContent className="mt-2 text-xs text-justify print:text-[10px]">
                                {job.description}
                            </CardContent>
                        </Card>
                    );
                }
                // Multiple jobs at the same company
                return (
                    <Card key={company} className="border-border bg-card mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <CardHeader className="pb-2">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-2 text-base">
                                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                                    <a>{company}</a>
                                </h3>
                                <div className="text-sm tabular-nums text-muted-foreground mt-1 sm:mt-0">
                                    {sortedJobs[sortedJobs.length - 1].start} - {sortedJobs[0].end} · {getDuration(sortedJobs[sortedJobs.length - 1].start, sortedJobs[0].end)}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-2 pb-0">
                            <div className="space-y-6">
                                {sortedJobs.map((job, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-7 pb-4 sm:pb-6 animate-fade-in animate-slide-up"
                                        style={{ animationDelay: `${index * 0.08 + 0.1}s` }}
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary z-10"></div>
                                        {/* Timeline line with fade-out after last dot */}
                                        {index < sortedJobs.length - 1 ? (
                                            <div className="absolute left-[5px] top-4 bottom-0 w-[1px] bg-border z-0"></div>
                                        ) : (
                                            <div
                                                className="absolute left-[5px] top-4 h-8 w-[1px] z-0"
                                                style={{
                                                    background: 'linear-gradient(to bottom, var(--border-color, #e5e7eb) 0%, transparent 100%)',
                                                    // fallback for border color
                                                }}
                                            ></div>
                                        )}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-x-2 mb-1.5">
                                            <h4 className="font-mono text-sm leading-tight">
                                                {job.title}
                                            </h4>
                                            <div className="text-xs tabular-nums text-muted-foreground mt-1.5 sm:mt-0 whitespace-nowrap">
                                                {job.start} - {job.end} · {getDuration(job.start, job.end)}
                                            </div>
                                        </div>
                                        <p className="mt-1 text-xs text-muted-foreground text-justify print:text-[10px]">
                                            {job.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </Section>
    );
}
