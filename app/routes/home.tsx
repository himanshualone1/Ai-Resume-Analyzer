import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "smart feedback for your Dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications and Resume Ratings</h1>
        <h2>Review your progress with AI-powered insights</h2>

      </div>
    </section>

    {resumes.map((resume) => (
      <div>
        <h1>
          {
            resume.jobTitle
            }
        </h1>
      </div>
    ))
    }

  </main>
}
