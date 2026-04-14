import React from "react";
import AboutHeader from "@/components/common/AboutHeader";

const CommitteeMemberGrid = ({ members }: { members: { name: string, role: string }[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {members.map((member, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg p-6 shadow">
                <div className="border-l-4 border-primary pl-4 mb-2 font-semibold text-lg">{member.name}</div>
                <div className="text-gray-700">{member.role}</div>
            </div>
        ))}
    </div>
);

const welcomeCommittee = [
    { name: "Dr. Vandana Gupta", role: "Associate Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Shalini Sharma", role: "Associate Professor, Kalindi College, University of Delhi" },
    { name: "Prof. Nidhi Arora", role: "Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Sweety Kataria", role: "Associate Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Reena Jain", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Rajani", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Dharmendra Kumar Meena", role: "Assistant Professor (TIC), Kalindi College, University of Delhi" },
    { name: "Mr. Rajeev Kumar Rai", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Sushil Malik", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Ruby Gupta", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Ms. Neha Singh", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Ms. Mamta", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Anshula Sangwan", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Ms. Kanishka Solanki", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Mrs. Asha Khantwal", role: "Senior Technical Assistant, Kalindi College, University of Delhi" },
    { name: "Mrs. Mamta Sachdeva", role: "Senior Technical Assistant, Kalindi College, University of Delhi" },
];

const technicalCommittee = [
    { name: "Mr Rajeev Kumar Rai", role: "Kalindi College University of Delhi" },
    { name: "Ms Neha Singh", role: "Kalindi College University of Delhi" },
    { name: "Ms Mamta", role: "Kalindi College University of Delhi" },
    { name: "Ms Kanishka Solanki", role: "Kalindi College University of Delhi" },
];

const technicalSessionCommittee = [
    { name: "Dr. Rajeev Kumar", role: "Greater Noida, Kalindi College" },
    { name: "Dr. Vanya Arun", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Himanshu Sharma", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Pankaj", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Chavi Pahwa", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Bharti Choudhary", role: "Kalindi College, Greater Noida" },
    { name: "Prof. (Dr.) Avdhesh Kr. Gupta", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Ankita Awasthi", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Meenu", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Umesh Chandra", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Sanjoy", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Manoj Kumar", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Aastha", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Sanjeev Verma", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Khushboo Gupta", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Mukesh Kumar", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Kuldeep Malik", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Veena", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Pankja Verma", role: "Kalindi College, Greater Noida" },

];

const foodCommittee = [
    { name: "Dr. Priyanka Bhatnagar", role: "Committee Chair, Kalindi College, Greater Noida" },
    { name: "Dr. Shivani Saini", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Nidhi Singh", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Bisma", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Duraivadivel", role: "Kalindi College, Greater Noida" },
];

const sponsorshipCommittee = [
    { name: "Dr. Kshama Pandey", role: "Committee Chair, Kalindi College, Greater Noida" },
    { name: "Dr. Arpit Varshney", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Rakhi Trivedi", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Dimpy Chauhan", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Garima", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Sameer", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Pankaj Sharma", role: "Kalindi College, Greater Noida" },
];

const hospitalityCommittee = [
    { name: "Dr. Naseem Ahmed", role: "Committee Chair, Kalindi College, Greater Noida" },
    { name: "Dr. Vibhav Narayan Singh", role: "Kalindi College, Greater Noida" },
    { name: "Mr. Satish Jha", role: "Kalindi College, Greater Noida" },
    { name: "Mr. Mayank", role: "Kalindi College, Greater Noida" },
    { name: "Mr. Pradeep Upadhyay", role: "Kalindi College, Greater Noida" },
];

const registrationHelpDeskCommittee = [
    { name: "Dr. Shradha Sharma", role: "Committee Chair, Kalindi College, Greater Noida" },
    { name: "Dr. Ashlesha Bhardwaj", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Sunil Bhardwaj", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Geetika", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Manoj Kumar", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Nidhi Rai", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Kushal Mazumder", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Rahul Singh", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Saurabh", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Kuldeep Malik", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Aruna", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Roma Pandey", role: "Kalindi College, Greater Noida" },
];

const printingDesigningCommittee = [
    { name: "Mr. Aditya Saini", role: "Committee Chair, Kalindi College, Greater Noida" },
    { name: "Dr. Kriti Nagarkoti", role: "Kalindi College, Greater Noida" },
    { name: "Dr. K.M. Bala", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Gaurav Upadhyay", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Priti", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Jayanta Biswas", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Monu", role: "Kalindi College, Greater Noida" },
];

const publicitySocialMediaCommittee = [
    { name: "Dr. Heena Khera", role: "Committee Chair, Kalindi College, Greater Noida" },
    { name: "Dr. Vinti Dhaka", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Kuldeep Malik", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Prince Solanki", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Rahul Singh", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Aastha", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Saurabh", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Neha", role: "Kalindi College, Greater Noida" },
    { name: "Ms. Smriti Sethi", role: "Kalindi College, Greater Noida" },
];

const culturalCommittee = [
    { name: "Dr. Khushboo Gupta", role: "Committee Chair, Kalindi College, Greater Noida" },
    { name: "Dr. Pawan Soni", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Mukesh", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Surbhi Rani", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Akansha", role: "Kalindi College, Greater Noida" },
    { name: "Ms. Priyanka Singh", role: "Kalindi College, Greater Noida" },
];

const publicationCommittee = [
    { name: "Prof. Narendra Kumar", role: "Committee Chair, Kalindi College, Greater Noida" },
    { name: "Dr. Rajeev Kumar", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Pranav Srivastava", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Jaswinder Singh", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Gaurav Upadhyay", role: "Kalindi College, Greater Noida" },
    { name: "Dr. K.K. Mishra", role: "Kalindi College, Greater Noida" },
    { name: "Dr. Swati", role: "Kalindi College, Greater Noida" },
];

const Section = ({ title, members }: { title: string, members: { name: string, role: string }[] }) => (
    <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">{title}</h2>
        <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-8"></div>
        <CommitteeMemberGrid members={members} />
    </section>
);

export default function OtherCommitteesPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Committees"
                date="14 – 15 October"
                // image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <Section title="Welcome Committee" members={welcomeCommittee} />
                <Section title="Technical Committee" members={technicalCommittee} />
                <Section title="Technical Session Committee" members={technicalSessionCommittee} />
                <Section title="Food Committee" members={foodCommittee} />
                <Section title="Sponsorship Committee" members={sponsorshipCommittee} />
                <Section title="Transportation, Accommodation & Hospitality Committee" members={hospitalityCommittee} />
                <Section title="Registration Committee & Help Desk" members={registrationHelpDeskCommittee} />
                <Section title="Printing and Designing Committee" members={printingDesigningCommittee} />
                <Section title="Publicity & Social Media Committee" members={publicitySocialMediaCommittee} />
                <Section title="Cultural Committee" members={culturalCommittee} />
                <Section title="Publication Committee" members={publicationCommittee} />
            </div>
        </div>
    );
}
