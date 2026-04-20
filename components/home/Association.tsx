import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Partner = {
    name: string;
    region: string;
    image: string;
    imageAlt: string;
    description: string;
    /** Skip the image optimizer (server fetch). Required for some hosts that resolve to IPs Next blocks. */
    unoptimized?: boolean;
};

const partners: Partner[] = [
    {
        name: "Tashkent State University of Economics",
        region: "Uzbekistan",
        image:
            "https://storage.kun.uz/source/4/ZQI3Xj_ISZTxRVv6SLQKvZlkS8dFDmnX.jpg",
        imageAlt: "Tashkent State University of Economics",
        description:
            "A leading institution in Uzbekistan for economics and business education, with strong research and international academic ties.",
        unoptimized: true,
    },
    {
        name: "IILM University",
        region: "University of Delhi, India",
        image:
            "https://ictbpai.iilm.edu/wp-content/uploads/2025/05/Greater-Noida-Campus_2.jpg",
        imageAlt: "IILM University campus",
        description:
            "IILM (Institute for Integrated Learning in Management) offers management and professional programs across Delhi NCR, combining academic rigor with industry exposure.",
        unoptimized: true,
    },
    {
        name: "Shanti Educational Research Foundations",
        region: "India",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Educational and research collaboration",
        description:
            "A research-oriented foundation supporting multidisciplinary work in science, technology, and management, and strengthening collaboration across institutions.",
        unoptimized: true,
    },
];

export default function Association() {
    return (
        <section className="bg-linear-to-r from-primary/5 via-white to-secondary/5 py-14">
            <div className="container mx-auto px-4">
                <SectionHeader title="In Association With" />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
                    {partners.map((p) => (
                        <Card
                            key={p.name}
                            className="group overflow-hidden border-none shadow-xl bg-white/95 backdrop-blur flex flex-col rounded-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        >
                            <div className="relative min-h-[220px] w-full shrink-0 overflow-hidden">
                                <Image
                                    src={p.image}
                                    alt={p.imageAlt}
                                    fill
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    unoptimized={p.unoptimized ?? false}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                                <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                                    <p className="text-[0.65rem] uppercase tracking-[0.18em] line-clamp-2">
                                        {p.name}
                                    </p>
                                    <p className="text-base font-semibold">{p.region}</p>
                                </div>
                            </div>
                            <CardContent className="p-6 space-y-4 flex flex-col flex-1">
                                <Badge variant="secondary" className="w-fit">
                                    Partner institution
                                </Badge>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-primary leading-snug">
                                        {p.name}
                                    </h3>
                                    <p className="text-sm font-semibold text-muted-foreground">
                                        {p.region}
                                    </p>
                                </div>
                                <p className="text-sm leading-relaxed text-justify text-muted-foreground flex-1">
                                    {p.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
