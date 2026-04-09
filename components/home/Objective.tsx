import SectionHeader from "../common/SectionHeader";

export default function Objective() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <SectionHeader title="Objective" />

                <div className="text-black text-lg text-justify space-y-4">
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Promote cutting-edge AI research and explore emerging frontiers in machine learning,
                            deep learning, natural language processing, and computer vision.
                        </li>
                        <li>
                            Provide a collaborative platform for researchers, academicians, industry professionals,
                            and policymakers to discuss innovative AI solutions for global challenges.
                        </li>
                        <li>
                            Bridge the gap between theoretical AI research and real-world applications across
                            sectors including healthcare, finance, education, and governance.
                        </li>
                        <li>
                            Encourage interdisciplinary research and foster partnerships between academia and
                            industry for responsible and ethical AI development.
                        </li>
                        <li>
                            Inspire young researchers and innovators to contribute toward a sustainable and
                            AI-powered future aligned with the UN Sustainable Development Goals (SDGs).
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
