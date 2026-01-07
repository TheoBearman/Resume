"use client";

import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { ResumeHeader } from "@/components/resume/resume-header";
import { Summary } from "@/components/resume/summary";
import { WorkExperience } from "@/components/resume/work-experience";
import { Education } from "@/components/resume/education";
import { Qualifications } from "@/components/resume/qualifications";
import { Awards } from "@/components/resume/awards";
import { Skills } from "@/components/resume/skills";
import { Section } from "@/components/ui/section"; // Keep for spacing/layout if needed or for the empty slots

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 bg-background text-foreground animate-fade-in">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-background print:space-y-4">

        <ResumeHeader />

        <Summary />

        <WorkExperience />

        <Education />

        <Qualifications />

        <Awards />

        <Skills />

        <Section className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl || "",
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
