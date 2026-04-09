import SectionHeader from "../common/SectionHeader";
export default function Aim() {
    return (
        <section className="bg-[#f5f7fa] py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <SectionHeader title="Conference Theme" />
                <div className="text-black text-lg text-justify space-y-4">
                    <p className="text-2xl font-bold text-center text-[#211833] italic">
                        "Artificial Intelligence for Sustainable and Smart Future"
                    </p>
                    <p>
                        The theme emphasizes the transformative role of Artificial Intelligence in building sustainable,
                        efficient, and intelligent systems across domains. It focuses on leveraging AI technologies to
                        address global challenges such as climate change, healthcare accessibility, smart cities, and
                        digital transformation.
                    </p>
                    <p>The conference will explore how AI can contribute to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Sustainable development goals (SDGs)</li>
                        <li>Smart infrastructure and cities</li>
                        <li>Ethical and responsible AI</li>
                        <li>Industry 4.0 transformation</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
