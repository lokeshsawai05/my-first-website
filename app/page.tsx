import { Download, Github, Linkedin, Mail, MapPin, Phone, User } from "lucide-react";
import Nav from "@/components/Nav";
import Section, { Placeholder } from "@/components/Section";
import { about, achievements, education, experience, interests, profile, projects, skills } from "@/lib/content";

const code: [string, string][] = [
  ["class Developer:", ""],
  ["    name = ", '"Lokesh Sawai"'],
  ["    degree = ", '"B.Sc. Computer Science"'],
  ["    languages = ", '["Python", "Java", "C", "C++"]'],
  ["    learning = ", "True"],
];

export default function Home() {
  return (
    <>
      <Nav name={profile.name} />
      <main id="top">
        <section className="mx-auto grid max-w-5xl gap-12 px-5 pb-20 pt-32 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="mb-3 text-mute">{profile.tagline}</p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">{profile.name}</h1>
            <p className="mt-5 text-xl text-ink/80">{profile.headline}</p>
            <p className="mt-3 max-w-md text-mute">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-ink px-6 py-3 text-paper transition hover:bg-signal">Explore My Work</a>
              <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 transition hover:border-signal hover:text-signal"><Download size={18} />Download Resume</a>
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-4">
              {profile.photo ? <img src={profile.photo} alt={profile.name} className="h-20 w-20 rounded-full object-cover" />
                : <div role="img" aria-label="Photo placeholder" className="flex h-20 w-20 items-center justify-center rounded-full bg-sky text-signal"><User size={32} /></div>}
              {!profile.photo && <Placeholder>Add your photo in lib/content.ts</Placeholder>}
            </div>
            <pre aria-label="Profile summary written as Python code" className="overflow-x-auto rounded-2xl bg-ink p-5 text-sm leading-7 text-sky">
              {code.map(([a, b], i) => (
                <div key={i} className="line" style={{ animationDelay: `${(i + 1) * 0.18}s` }}>
                  <span className={i === 0 ? "text-signal" : ""}>{a}</span>
                  <span className="text-[#9CC0FF]">{b}</span>
                </div>
              ))}
            </pre>
          </div>
        </section>

        <Section id="about" title="About me" tint>
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed">{about.map((p) => <p key={p}>{p}</p>)}</div>
        </Section>

        <Section id="education" title="Education">
          <ol className="relative ml-2 border-l-2 border-signal/30">
            {education.map((e) => (
              <li key={e.title} className="mb-8 ml-6">
                <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-signal" />
                <p className="text-sm text-signal">{e.years}</p>
                <h3 className="font-display text-xl font-bold">{e.title}</h3>
                <p className="text-mute">{e.place}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills" tint>
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="mb-3 font-display text-lg font-bold">{g.group}</h3>
                <ul className="flex flex-wrap gap-2">{g.items.map((s) => <li key={s} className="rounded-full bg-paper px-4 py-1.5 text-sm">{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <p className="mb-8 max-w-xl text-mute">I haven&apos;t published a project yet, and I&apos;m eager to build real ones in Python and web development. These cards are placeholders to replace.</p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="rounded-2xl border border-dashed border-signal/60 p-6">
                <Placeholder>{p.status}</Placeholder>
                <h3 className="mt-3 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-mute">{p.description}</p>
                <ul className="mt-4 flex gap-2 text-sm">{p.tech.map((t) => <li key={t} className="rounded bg-sky px-2 py-0.5">{t}</li>)}</ul>
                {p.contribution && <p className="mt-3 text-sm"><b>My contribution:</b> {p.contribution}</p>}
                {p.outcome && <p className="mt-1 text-sm"><b>Outcome:</b> {p.outcome}</p>}
                <div className="mt-4 flex gap-4 text-sm">
                  {p.github && <a className="inline-flex items-center gap-1 text-signal" href={p.github}><Github size={16} />Code</a>}
                  {p.live && <a className="text-signal" href={p.live}>Live demo</a>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" tint>
          {experience.length === 0 ? (
            <p className="max-w-xl text-lg">No internship or work experience yet. I&apos;m looking for an opportunity to learn and contribute in a professional IT environment. <Placeholder>Add entries in lib/content.ts</Placeholder></p>
          ) : (
            <ol className="ml-2 border-l-2 border-signal/30">{experience.map((x) => (
              <li key={x.title} className="mb-6 ml-6"><p className="text-sm text-signal">{x.years}</p><h3 className="font-display text-xl font-bold">{x.title}</h3><p className="text-mute">{x.place}</p><p>{x.note}</p></li>
            ))}</ol>
          )}
        </Section>

        <Section id="achievements" title="Achievements & certifications">
          <ul className="max-w-xl space-y-3 text-lg">{achievements.map((a) => <li key={a} className="border-l-4 border-signal pl-4">{a}</li>)}</ul>
          <p className="mt-6 text-sm text-mute">Certifications: none listed on my resume yet. <Placeholder>Add yours</Placeholder></p>
        </Section>

        <Section id="interests" title="Interests" tint>
          <ul className="flex flex-wrap gap-3">{interests.map((i) => <li key={i} className="rounded-full bg-paper px-5 py-2">{i}</li>)}</ul>
          <p className="mt-4 text-sm text-mute">Based on my career objective. Add hobbies in lib/content.ts.</p>
        </Section>

        <Section id="contact" title="Contact me">
          <p className="mb-6 max-w-lg text-lg">Hiring, mentoring or just want to talk code? Send me an email.</p>
          <ul className="space-y-3">
            <li><a className="inline-flex items-center gap-3 hover:text-signal" href={`mailto:${profile.email}`}><Mail size={20} />{profile.email}</a></li>
            <li><a className="inline-flex items-center gap-3 hover:text-signal" href={`tel:${profile.phone}`}><Phone size={20} />{profile.phone}</a></li>
            <li className="inline-flex items-center gap-3"><MapPin size={20} />{profile.location}</li>
            <li className="flex items-center gap-3"><Linkedin size={20} />{profile.linkedin ? <a className="hover:text-signal" href={profile.linkedin}>LinkedIn</a> : <Placeholder>LinkedIn URL</Placeholder>}</li>
            <li className="flex items-center gap-3"><Github size={20} />{profile.github ? <a className="hover:text-signal" href={profile.github}>GitHub</a> : <Placeholder>GitHub URL</Placeholder>}</li>
          </ul>
          <a href={`mailto:${profile.email}`} className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-paper transition hover:bg-signal">Email me</a>
        </Section>
      </main>
      <footer className="bg-ink py-8 text-center text-sm text-sky">© {new Date().getFullYear()} {profile.name} · {profile.tagline}</footer>
    </>
  );
}
