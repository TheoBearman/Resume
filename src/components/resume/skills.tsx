import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

export function Skills() {
    return (
        <Section className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-xl font-bold">Skills & Interests</h2>
            <div className="flex flex-wrap gap-1 justify-center">
                {RESUME_DATA.skills.map((skill) => {
                    return (
                        <Badge className="print:text-[10px] badge" key={skill}>
                            {skill}
                        </Badge>
                    );
                })}
            </div>
        </Section>
    );
}
