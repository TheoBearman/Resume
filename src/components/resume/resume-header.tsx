import { Button } from "@/components/ui/button";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Link } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { PrintButton } from "@/components/print-button";
import { ThemeToggle } from "@/components/theme-toggle";

export function ResumeHeader() {
    return (
        <div className="flex items-center justify-between animate-slide-up">
            <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
                </div>
                <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                    {RESUME_DATA.about}
                </p>
                <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                    <a
                        className="inline-flex gap-x-1.5 align-baseline leading-none"
                        href={RESUME_DATA.locationLink}
                        target="_blank"
                    >
                        <GlobeIcon className="size-3" />
                        {RESUME_DATA.location}
                    </a>
                </p>
                <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                    {RESUME_DATA.contact.email ? (
                        <Button
                            className="size-8"
                            variant="outline"
                            size="icon"
                            asChild
                        >
                            <a href={`mailto:${RESUME_DATA.contact.email}`}>
                                <MailIcon className="size-4" />
                            </a>
                        </Button>
                    ) : null}
                    {RESUME_DATA.contact.social.map((social) => (
                        <Button
                            key={social.name}
                            className="size-8"
                            variant="outline"
                            size="icon"
                            asChild
                        >
                            <a href={social.url} target="_blank" rel="noopener noreferrer">
                                <social.icon className="size-4" />
                            </a>
                        </Button>
                    ))}
                    <PrintButton />
                    <ThemeToggle />
                </div>
                <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
                    {RESUME_DATA.contact.email ? (
                        <a href={`mailto:${RESUME_DATA.contact.email}`}>
                            <span className="underline">{RESUME_DATA.contact.email}</span>
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
