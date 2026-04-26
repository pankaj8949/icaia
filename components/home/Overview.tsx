import SectionHeader from "../common/SectionHeader";

export default function Overview() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <SectionHeader title="Conference Overview" />
                <div className="text-black text-lg text-justify space-y-4">
                    <p>
                        The <strong>International Conference on Artificial Intelligence in Healthcare Technologies and Management (IC-AIHTM 2026)</strong> aims
                        to provide a global platform for researchers, academicians, industry experts, and practitioners to
                        exchange ideas, present innovations, and discuss emerging trends in Artificial Intelligence and its
                        interdisciplinary applications.
                    </p>
                    <p>
                        Artificial Intelligence is rapidly reshaping industries such as healthcare, finance, education,
                        manufacturing, and governance. The conference seeks to explore both theoretical advancements and
                        practical implementations of AI technologies, fostering collaboration between academia and industry.
                    </p>
                    <div>
                        <p className="font-semibold mb-2">Purpose:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Promote cutting-edge AI research</li>
                            <li>Encourage interdisciplinary innovation</li>
                            <li>Bridge the gap between theory and real-world applications</li>
                            <li>Foster global academic collaboration</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-2">Who Should Attend:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Faculty members &amp; researchers</li>
                            <li>PhD scholars &amp; students</li>
                            <li>Industry professionals</li>
                            <li>Policy makers and innovators</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
