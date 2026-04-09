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
    name: "Machine Learning and Deep Learning",
    subtopics: [
      "Supervised and Unsupervised Learning",
      "Neural Networks and Deep Architectures",
      "Reinforcement Learning",
      "Explainable AI",
    ]
  },
  {
    name: "Data Science and Big Data Analytics",
    subtopics: [
      "Data Mining Techniques",
      "Predictive Analytics",
      "Business Intelligence",
      "Big Data Frameworks (Hadoop, Spark)",
    ]
  },
  {
    name: "Artificial Intelligence in Healthcare",
    subtopics: [
      "Medical Imaging and Diagnosis",
      "AI in Drug Discovery",
      "Telemedicine and Smart Healthcare",
      "Health Data Analytics",
    ]
  },
  {
    name: "AI in Business and Management",
    subtopics: [
      "AI in Marketing and Consumer Behavior",
      "Financial Analytics and FinTech",
      "Supply Chain Optimization",
      "Decision Support Systems",
    ]
  },
  {
    name: "Natural Language Processing and Computer Vision",
    subtopics: [
      "Text Mining and Sentiment Analysis",
      "Chatbots and Conversational AI",
      "Image Processing and Object Detection",
      "Video Analytics",
    ]
  },
  {
    name: "Robotics and Intelligent Systems",
    subtopics: [
      "Autonomous Systems",
      "Human-Robot Interaction",
      "Industrial Automation",
      "Smart Manufacturing",
    ]
  },
  {
    name: "AI for Smart Cities and Sustainability",
    subtopics: [
      "Smart Transportation Systems",
      "Energy Optimization",
      "Environmental Monitoring",
      "Urban Planning using AI",
    ]
  },
  {
    name: "Cybersecurity and Ethical AI",
    subtopics: [
      "AI in Cybersecurity",
      "Privacy and Data Protection",
      "Bias and Fairness in AI",
      "AI Governance and Regulations",
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
