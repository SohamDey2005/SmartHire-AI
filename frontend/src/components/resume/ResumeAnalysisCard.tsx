import type { ResumeAnalysis } from "../../services/resumeService";

interface Props {
    analysis: ResumeAnalysis;
}

function SkillSection({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function ResumeAnalysisCard({
    analysis,
}: Props) {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-8 mt-8">

            <h2 className="text-2xl font-bold mb-8">
                AI Resume Analysis
            </h2>

            <SkillSection
                title="Technical Skills"
                items={analysis.technical_skills}
            />

            <SkillSection
                title="Soft Skills"
                items={analysis.soft_skills}
            />

            <SkillSection
                title="Frameworks"
                items={analysis.frameworks}
            />

            <SkillSection
                title="Tools"
                items={analysis.tools}
            />

            <SkillSection
                title="Databases"
                items={analysis.databases}
            />

            <SkillSection
                title="Cloud"
                items={analysis.cloud}
            />

            <SkillSection
                title="Certifications"
                items={analysis.certifications}
            />

            {/* Education */}

            {analysis.education.length > 0 && (
                <div className="mb-8">

                    <h3 className="text-lg font-semibold mb-3">
                        Education
                    </h3>

                    {analysis.education.map((edu, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4 mb-3"
                        >
                            <h4 className="font-semibold">
                                {edu.degree}
                            </h4>

                            <p>
                                {edu.institution}
                            </p>

                            <p className="text-gray-600">
                                {edu.start_date} - {edu.end_date}
                            </p>

                            {(edu.gpa || edu.grade) && (
                                <p>
                                    {edu.gpa || edu.grade}
                                </p>
                            )}
                        </div>
                    ))}

                </div>
            )}

            {/* Experience */}

            {analysis.experience.length > 0 && (
                <div className="mb-8">

                    <h3 className="text-lg font-semibold mb-3">
                        Experience
                    </h3>

                    {analysis.experience.map((exp, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4 mb-3"
                        >
                            <h4 className="font-semibold">
                                {exp.title}
                            </h4>

                            <p>
                                {exp.company}
                            </p>

                            {exp.location && (
                                <p className="text-gray-600">
                                    {exp.location}
                                </p>
                            )}

                            <p className="text-gray-600">
                                {exp.start_date} - {exp.end_date}
                            </p>

                            <ul className="list-disc ml-5 mt-2">
                                {exp.description.map((line, i) => (
                                    <li key={i}>
                                        {line}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}

                </div>
            )}

            {/* Projects */}

            {analysis.projects.length > 0 && (
                <div>

                    <h3 className="text-lg font-semibold mb-3">
                        Projects
                    </h3>

                    {analysis.projects.map((project, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4 mb-3"
                        >
                            <h4 className="font-semibold">
                                {project.title}
                            </h4>

                            <p className="text-gray-600">
                                {project.start_date} - {project.end_date}
                            </p>

                            <div className="flex flex-wrap gap-2 my-3">
                                {project.tech_stack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="list-disc ml-5">
                                {project.description.map((line, i) => (
                                    <li key={i}>
                                        {line}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}