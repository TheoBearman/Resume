"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon, LayoutList, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { PrintButton } from "@/components/print-button";
import { PdfExportButton } from "@/components/pdf-export-button";
import { InteractiveTimeline } from "@/components/interactive-timeline";
import { useState } from "react";
import { TimelineViewMode } from "@/types";

// Function to calculate duration between two dates
function getDuration(startDate: string, endDate: string): string {
  // Function to convert month name to month number (0-11)
  const getMonthNumber = (monthName: string): number => {
    const months: Record<string, number> = {
      "january": 0, "february": 1, "march": 2, "april": 3, "may": 4, "june": 5,
      "july": 6, "august": 7, "september": 8, "october": 9, "november": 10, "december": 11
    };
    return months[monthName.toLowerCase()] || 0;
  };

  // Function to parse date strings like "January 2020" or "Jan 2020"
  const parseDate = (dateStr: string): Date => {
    if (dateStr === "Present") {
      return new Date(); // Use current date for "Present"
    }

    // Handle different date formats
    const parts = dateStr.split(" ");
    if (parts.length < 2) {
      console.error(`Invalid date format: ${dateStr}`);
      return new Date();
    }

    const monthStr = parts[0];
    // Extract the year, which should be the last part
    const yearStr = parts[parts.length - 1];
    const year = parseInt(yearStr, 10);
    
    if (isNaN(year)) {
      console.error(`Invalid year in date: ${dateStr}`);
      return new Date();
    }

    const month = getMonthNumber(monthStr);
    return new Date(year, month, 1); // Use first day of month
  };

  // Parse the dates
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  // Calculate difference in months
  const diffYears = end.getFullYear() - start.getFullYear();
  const diffMonths = end.getMonth() - start.getMonth() + (diffYears * 12);
  
  // Ensure we return at least 1 month for any job
  const months = Math.max(1, diffMonths);
  
  // Format the output
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

export default function Page() {
  const [timelineView, setTimelineView] = useState<TimelineViewMode>('traditional');

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 bg-background text-foreground animate-fade-in">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-background print:space-y-4">
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
        <Section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground text-justify print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Work Experience</h2>
            <div className="flex items-center gap-1 border rounded-md p-1">
              <Button
                variant={timelineView === 'traditional' ? 'default' : 'ghost'}
                size="sm"
                className="h-8 text-xs gap-1.5 px-2"
                onClick={() => setTimelineView('traditional')}
                title="Traditional View"
              >
                <LayoutList className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Traditional</span>
              </Button>
              <Button
                variant={timelineView === 'interactive' ? 'default' : 'ghost'}
                size="sm"
                className="h-8 text-xs gap-1.5 px-2"
                onClick={() => setTimelineView('interactive')}
                title="Interactive Timeline"
              >
                <Clock className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Timeline</span>
              </Button>
            </div>
          </div>
          
          {timelineView === 'traditional' ? (
            /* Traditional view */
            Object.entries(
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
                // For jobs that are "Present", they should come first
                if (a.end === "Present") return -1;
                if (b.end === "Present") return 1;
                // Otherwise sort by start date (most recent first)
                return new Date(b.start).getTime() - new Date(a.start).getTime();
              });
              
              // If there's only one job for this company, use the regular card style
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
              
              // For multiple jobs at the same company, use the nested timeline style
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
                        <div key={index} className="relative pl-7 pb-2">
                          {/* Timeline dot and line */}
                          <div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary"></div>
                          {index !== sortedJobs.length - 1 && (
                            <div className="absolute left-[5px] top-4 bottom-0 w-[1px] bg-border"></div>
                          )}
                          
                          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-x-2 mb-1.5">
                            <h4 className="font-mono text-sm font-semibold leading-tight">
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
            })
          ) : (
            /* Interactive timeline view */
            <InteractiveTimeline items={RESUME_DATA.work} getDuration={getDuration} />
          )}
        </Section>
        <Section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
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
        <Section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
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
        <Section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
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
        {/* Projects Section - Uncomment when projects are added to resume-data.tsx
        <Section>
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 print:grid-cols-2 print:gap-2">
            {RESUME_DATA.projects?.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                repoLink={project.repoLink}
              />
            ))}
          </div>
        </Section>
        */}
        <Section className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
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
