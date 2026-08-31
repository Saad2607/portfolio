import SectionHeading from "../components/SectionHeading";
import FeaturedProject from "../components/FeaturedProject";
import { projectsData } from "../data/projectsData";

const FeaturedWork = ({ onSelectProject }) => {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="FLAGSHIP PORTFOLIO"
        title="Featured"
        highlight="Engineering Work"
        subtitle="A selection of production-ready, full-stack ecosystems solving real-world challenges."
      />

      <div className="space-y-12 md:space-y-16">
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.id}
            project={project}
            index={index}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
