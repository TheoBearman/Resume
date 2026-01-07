import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

export function Summary() {
    return (
        <Section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground text-justify print:text-[12px]">
                {RESUME_DATA.summary}
            </p>
        </Section>
    );
}
