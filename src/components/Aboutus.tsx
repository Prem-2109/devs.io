import { Check } from 'lucide-react';
import Title from './Title';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const aboutData = [
    {
        title: "Our Mission",
        desc: "We help startups and businesses design, build, and scale powerful digital products that create meaningful customer experiences.",
        points: [
            "Strategy-driven product development",
            "User-focused design approach",
            "Scalable and modern technologies"
        ]
    },
    {
        title: "What We Do",
        desc: "From strategy to execution, we partner with companies to create high-performance digital experiences.",
        points: [
            "Web & Product Development",
            "UI/UX Design",
            "Performance Optimization"
        ]
    },
    {
        title: "Why Choose Us",
        desc: "We combine creativity, technology, and strategy to deliver solutions that drive real business growth.",
        points: [
            "Modern scalable tech stack",
            "Performance-focused development",
            "Long-term partnership approach"
        ]
    }
];

export default function About() {

    const refs = useRef([]);

    return (
        <section id="about" className="py-20 bg-white/3 border-t border-white/6">

            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="About Us"
                    heading="Building impactful digital products"
                    description="We are a digital agency focused on strategy, design and development — helping brands build meaningful digital experiences and grow sustainably."
                />

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    {aboutData.map((item, i) => (
                        <motion.div
                            key={i}
                            ref={(el) => refs.current[i] = el}
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 70,
                                mass: 1,
                                delay: 0.1 + i * 0.1
                            }}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add("transition", "duration-500", "hover:scale-105");
                                }
                            }}
                            className="p-6 rounded-xl border border-white/8 bg-indigo-950/30 backdrop-blur"
                        >

                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-300 mb-5">
                                {item.desc}
                            </p>

                            <ul className="space-y-3">
                                {item.points.map((point, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-3 text-sm text-gray-300"
                                    >
                                        <Check className="w-4 h-4 text-indigo-400" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                        </motion.div>
                    ))}

                </div>
            </div>

        </section>
    );
}