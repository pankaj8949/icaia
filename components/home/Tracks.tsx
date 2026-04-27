import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../common/SectionHeader";

const TRACKS = [
  {
    name: "Core AI & Computational Methods",
    subtopics: [
      "Machine Learning & Deep Learning",
      "Data Science & Big Data Analytics",
      "Natural Language Processing (NLP)",
      "Computer Vision & Pattern Recognition",
    ]
  },
  {
    name: "AI in Healthcare Technologies",
    subtopics: [
      "AI for Medical Imaging & Diagnostics",
      "Clinical Decision Support Systems",
      "Predictive Analytics & Disease Modeling",
      "Telemedicine & Remote Patient Monitoring",
    ]
  },
  {
    name: "Health Informatics & Digital Health Systems",
    subtopics: [
      "Electronic Health Records (EHR) Analytics",
      "Health Data Interoperability",
      "IoT in Healthcare (Wearables, Sensors)",
      "Smart Hospitals & Digital Ecosystems",
    ]
  },
  {
    name: "AI in Healthcare Management & Operations",
    subtopics: [
      "Hospital Management Systems",
      "Resource Optimization & Scheduling",
      "Healthcare Supply Chain Analytics",
      "Decision-Making Systems for Administrators",
    ]
  },
  {
    name: "Ethics, Security & Governance",
    subtopics: [
      "Ethical AI in Healthcare",
      "Data Privacy & Cybersecurity",
      "Bias, Fairness, and Explainability",
      "Regulatory and Policy Frameworks",
    ]
  },
  {
    name: "Robotics & Intelligent Medical Systems",
    subtopics: [
      "Surgical Robotics",
      "Rehabilitation Robotics",
      "Intelligent Assistive Systems",
    ]
  },
  {
    name: "AI in Business, Policy & Healthcare Economics",
    subtopics: [
      "AI-Driven Healthcare Business Models",
      "Cost Optimization & Healthcare Economics",
      "Policy, Governance, and Implementation Strategies",
    ]
  },
  {
    name: "Emerging & Interdisciplinary Areas",
    subtopics: [
      "AI for Public Health & Epidemiology",
      "Smart Cities & Healthcare Integration",
      "Sustainability in Healthcare Systems",
      "Human-AI Collaboration in Medicine",
    ]
  },
];

export default function Tracks() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeader title="Conference Tracks" />
        <Accordion className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
          {TRACKS.map((track) => (
            <AccordionItem key={track.name} value={track.name}>
              <Card className="bg-[#211833]  text-white rounded-xl shadow-lg transition hover:scale-[1.03] border-none">
                <AccordionTrigger className="px-7 py-6 text-lg font-semibold text-left rounded-t-xl border-none ">
                  {track.name}
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pl-7 pb-5">
                    <ul className="list-disc text-base space-y-2">
                      {track.subtopics?.map((sub, i) => (
                        <li key={i} className="ml-4 text-white">{sub}</li>
                      ))}
                    </ul>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
