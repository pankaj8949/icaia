import SectionHeader from "../common/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ASSOCIATION_IMAGE =
    "https://iilm.ac.in/uploads/all/40/conversions/Group-20050-(1)-full.webp";


export default function Association() {
    return (
        <section className="bg-linear-to-r from-primary/5 via-white to-secondary/5 py-14">
            <div className="container mx-auto px-4">
                <SectionHeader title="In Association With" />
                <Card className="max-w-6xl mx-auto overflow-hidden border-none shadow-2xl bg-white/95 backdrop-blur">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative h-full">
                            <img
                                src={ASSOCIATION_IMAGE}
                                alt="IILM campus"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white space-y-1">
                                <p className="text-xs uppercase tracking-[0.2em]">IILM</p>
                                <p className="text-lg font-semibold">India</p>
                            </div>
                        </div>
                        <CardContent className="p-8 space-y-6">
                            <Badge variant="secondary" className="w-fit">Partner Institution</Badge>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-primary">IILM University</h3>
                                <p className="text-lg font-semibold text-muted-foreground">India</p>
                            </div>
                            <p className="text-base leading-relaxed text-justify text-muted-foreground">
                                IILM (Institute for Integrated Learning in Management) is a leading Indian institution
                                with a long-standing focus on management and professional education. With campuses
                                across Delhi NCR, it offers programs that blend academic rigor with industry exposure,
                                research, and holistic development for students pursuing careers in business, law, and
                                related fields.
                            </p>
                            
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>
    );
}

