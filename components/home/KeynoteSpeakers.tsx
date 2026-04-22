import SectionImageHeader from "../common/SectionImageHeader";

const SPEAKERS = [
    {
        name: "Dr. Ilona Paweloszek",
        affiliation: "Częstochowa University of Technology",
        country: "Poland",
        img: "",
    },
    {
        name: "Dr. Dalia Younis",
        affiliation: "AASTMT University",
        country: "Egypt",
        img: "",
    },
    {
        name: "Dr. Raya Karlibaeva",
        affiliation: "Tashkent State University of Economics",
        country: "Uzbekistan",
        img: "",
    },
    {
        name: "Dr. Aysun Kahraman",
        affiliation: "",
        country: "USA",
        img: "",
    },
    {
        name: "Dr. Manuel Malaver de la Fuente",
        affiliation: "Maritime University of the Caribbean",
        country: "Venezuela",
        img: "",
    },
    {
        name: "Dr. Andreas Gimsa",
        affiliation: "Stirling Technology Institut gemeinnützige GmbH, Potsdam",
        country: "Germany",
        img: "",
    },
    {
        name: "Dr. Ertan Gudekli",
        affiliation: "Istanbul University",
        country: "Turkey",
        img: "",
    },
    {
        name: "Dr. Rajan Iyer",
        affiliation: "Environmental Materials Theoretical Physics, Arizona",
        country: "USA",
        img: "",
    },
    {
        name: "Dr. Sidney Soares Filho",
        affiliation: "University of Fortaleza (UNIFOR)",
        country: "Brazil",
        img: "",
    },
    {
        name: "Dr. Gulshat Karlibaeva",
        affiliation: "Tashkent State University of Economics",
        country: "Uzbekistan",
        img: "",
    },
    {
        name: "Dr. Liliana Guran",
        affiliation: "Babeș-Bolyai University",
        country: "Romania",
        img: "/images/speakers/liliana.jpg",
    },
    {
        name: "Dr. Monika Bota",
        affiliation: "Babeș-Bolyai University",
        country: "Romania",
        img: "/images/speakers/monalika_bota.jpg",
    },
    {
        name: "Dr. Devendra Kumar",
        affiliation: "CET",
        country: "Oman",
        img: "",
    },
    {
        name: "Dr. Magdalena Rzemieniak",
        affiliation: "Lublin University of Technology",
        country: "Poland",
        img: "",
    },
    {
        name: "Dr. Leszek Ziora",
        affiliation: "Częstochowa University of Technology",
        country: "Poland",
        img: "",
    },
];

const LIST_OF_SPEAKERS = [
    {
        name: "Dr. Nonita Sharma",
        affiliation: "Associate Professor, IT Department, IGDTUW, Delhi",
        country: "India",
        img: "",
    },
    {
        name: "Dr. Sahil",
        affiliation: "Assistant Professor, CSE Department, NIT Delhi",
        country: "India",
        img: "",
    },
    {
        name: "Dr. Ashema Hasti",
        affiliation:
            "Assistant Professor, Computer Science Department, Mata Sundri College for Women, University of Delhi",
        country: "India",
        img: "",
    },
    {
        name: "Dr. Shikha Agarwal",
        affiliation:
            "Assistant Professor, Computer Science, IP College for Women, University of Delhi",
        country: "India",
        img: "",
    },
    {
        name: "Dr. Ankit Kumar Jaiswal",
        affiliation:
            "Assistant Professor, CSE (School of Engineering), Jawaharlal Nehru University (JNU), New Delhi",
        country: "India",
        img: "",
    },
    {
        name: "Dr. Sakshi Taaresh Khanna",
        affiliation:
            "Assistant Professor, Computer Science, Ram Lal Anand College, University of Delhi",
        country: "India",
        img: "",
    },
    {
        name: "Dr. Shweta Sankhwar",
        affiliation: "Assistant Professor, Computer Science, Maitreyi College",
        country: "India",
        img: "",
    },
    {
        name: "Dr. Aakanksha",
        affiliation:
            "Associate Professor, Computer Science, Shaheed Rajguru College of Applied Sciences for Women, University of Delhi",
        country: "India",
        img: "",
    },
];

function SpeakerCard({ speaker }: { speaker: typeof SPEAKERS[0] }) {
    return (
        <div className="bg-[#232335] rounded-md overflow-hidden shadow-md flex flex-col w-full max-w-[275px] p-4 text-white">
            <div>
                <div className="h-1.5 w-12 bg-primary my-1.5"></div>
                <div className="font-semibold text-sm md:text-base leading-tight mb-1">{speaker.name}</div>
                <div className="text-xs opacity-90 leading-tight whitespace-normal mb-1">{speaker.affiliation}</div>
                <div className="text-xs opacity-70 leading-tight whitespace-normal">{speaker.country}</div>
            </div>
        </div>
    );
}

export default function KeynoteSpeakers() {
    return (
        <section className="bg-white">
            <SectionImageHeader title="Keynote Speakers" image="/images/speakers-bg.jpg" />
            <div className="container mx-auto px-4 py-8 md:py-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#232335]">International Speakers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center">
                    {SPEAKERS.map((speaker) => (
                        <SpeakerCard key={speaker.name} speaker={speaker} />
                    ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-14 text-center text-[#232335]">
                    List of Speakers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center">
                    {LIST_OF_SPEAKERS.map((speaker) => (
                        <SpeakerCard key={speaker.name} speaker={speaker} />
                    ))}
                </div>
            </div>
        </section>
    );
}
