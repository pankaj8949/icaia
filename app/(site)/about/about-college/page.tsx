import AboutHeader from '@/components/common/AboutHeader';
import SectionHeader from '@/components/common/SectionHeader';

export default function AboutUniversityPage() {
    return (
        <div className="bg-white">
            <AboutHeader title="University Profile" overlayColor='#d0224a' bgImage='/images/iilm/iilm_uni_back.webp' />
            <div className="container mx-auto px-4 py-16">
                <SectionHeader title="Kalindi College, University of Delhi" />
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Text Content */}
                    <div className="md:w-2/3 text-gray-900 space-y-6 text-lg text-justify">
                        <p>
                            <b>Kalindi College</b> is a constituent college of the <b>University of Delhi</b>, one of India's foremost central universities. Founded in 1967, Kalindi College has built a legacy of academic excellence, empowerment, and inclusive education — primarily dedicated to the education of women. Located in East Patel Nagar, New Delhi, the college is affiliated with the University of Delhi and is recognised by the University Grants Commission (UGC).
                        </p>
                        <p>
                            The college offers a wide range of undergraduate programs across disciplines including Sciences, Commerce, Humanities, and Social Sciences. With a vibrant campus life, dedicated faculty, and a strong emphasis on co-curricular activities, Kalindi College nurtures holistic growth — fostering critical thinking, leadership, creativity, and community engagement among its students.
                        </p>
                    </div>
                    {/* Right: Image */}
                    <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                        <img
                            src="https://images.shiksha.com/mediadata/images/1544001278phpxSUex0.jpeg"
                            alt="Kalindi College, University of Delhi"
                            className="shadow-lg w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* TSUE Section */}
            <div className="container mx-auto px-4 py-16 border-t border-gray-100">
                <SectionHeader title="Tashkent State University of Economics" />
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Text Content */}
                    <div className="md:w-2/3 text-gray-900 space-y-6 text-lg text-justify">
                        <p>
                            <b>Tashkent State University of Economics (TSUE)</b> is one of Uzbekistan's leading higher education institutions dedicated to economics, finance, business, and management. Established on <b>August 13, 1931</b> as the Central Asian Institute of Finance and Economics, TSUE has grown into a premier hub for economic research and professional education in Central Asia, with a rich history spanning nearly a century.
                        </p>
                        <p>
                            The university offers a comprehensive range of undergraduate, postgraduate, and doctoral programs across disciplines including Economics, Finance, Banking, Accounting, Marketing, Management, Digital Economics, Information Systems, and Tourism & Hospitality. Its curriculum is designed to blend rigorous academic theory with practical, real-world business application — producing graduates equipped for dynamic global markets.
                        </p>
                    </div>
                    {/* Right: Image */}
                    <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                        <img
                            src="https://storage.kun.uz/source/4/ZQI3Xj_ISZTxRVv6SLQKvZlkS8dFDmnX.jpg"
                            alt="Tashkent State University of Economics"
                            className="shadow-lg w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* MSDU Section */}
            <div className="container mx-auto px-4 py-16 border-t border-gray-100">
                <SectionHeader title="Maharaja Suhel Dev University, Azamgarh" />
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Text Content */}
                    <div className="md:w-2/3 text-gray-900 space-y-6 text-lg text-justify">
                        <p>
                            <b>Maharaja Suhel Dev University (MSDU)</b>, located in <b>Azamgarh, Uttar Pradesh</b>, is a State University established under the <b>Uttar Pradesh State Universities Act, 1973</b>. Named after the legendary warrior king Maharaja Suhel Dev, the university stands as a beacon of higher education for the Purvanchal region of Uttar Pradesh, serving students from Azamgarh and Mau districts.
                        </p>
                        <p>
                            The university offers a diverse range of undergraduate, postgraduate, and doctoral programs across multiple faculties including Arts, Science, Commerce, Education, Law, Engineering, and Management. It is actively supported by the SAMARTH e-Governance platform and provides modern academic and research infrastructure to its students and faculty.
                        </p>
                    </div>
                    {/* Right: Image */}
                    <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                        <img
                            src="https://msdu.ac.in/uploads/photo-gallery/1754575287_e36eda95cf4fb0bdebe7.jpg"
                            alt="Maharaja Suhel Dev University, Azamgarh"
                            className="shadow-lg w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
