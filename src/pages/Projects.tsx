import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ProjectCard from "@/components/ProjectCard";
import bioCngImage from "@/assets/bio-cng.jpg";
import solarImage from "@/assets/solar-farm.jpg";
import coldStorageImage from "@/assets/cold-storage.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Bio-CNG Plant Project",
      description: "Convert organic waste and dung into clean energy. Provides rural employment and sustainable income for farmers.",
      investment: "₹3-10 Crore",
      roi: "3-5 years",
      category: "Green Energy",
      image: bioCngImage,
    },
    {
      title: "Solar Farm Project",
      description: "Ground-mounted solar farms for rural landowners. Long-term PPA-based revenue and clean energy generation.",
      investment: "₹5-25 Crore",
      roi: "4-6 years",
      category: "Renewable Energy",
      image: solarImage,
    },
    {
      title: "Community Cold Storage",
      description: "Solar-powered cold rooms for fruits and vegetables. Reduces post-harvest losses significantly.",
      investment: "₹1-3 Crore",
      roi: "3-4 years",
      category: "Infrastructure",
      image: coldStorageImage,
    },
    {
      title: "Agro Processing Unit",
      description: "Food processing facility for grains, pulses, and fruits. Creates employment for rural youth.",
      investment: "₹2-8 Crore",
      roi: "3-5 years",
      category: "Processing",
      image: coldStorageImage,
    },
    {
      title: "Organic Fertilizer Unit",
      description: "Bio-compost and organic manure production facility. High demand in organic farming sector.",
      investment: "₹50 Lakh - 2 Crore",
      roi: "2-3 years",
      category: "Agriculture",
      image: bioCngImage,
    },
    {
      title: "Aquaculture Farm",
      description: "Modern fish farming with bio-floc technology. High-profit sustainable aquaculture model.",
      investment: "₹10-50 Lakh",
      roi: "1-2 years",
      category: "Aquaculture",
      image: solarImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sustainable Projects for Farmers</h1>
            <p className="text-xl md:text-2xl mb-8">
              Explore ready-to-start green and agri-based ventures. Download DPRs instantly.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Download All Section */}
        <section id="downloads" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Download Complete DPR Library</h2>
            <p className="text-lg mb-8 opacity-90">
              Get all project reports in one ZIP file for offline reference
            </p>
            <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
              Download All DPRs (ZIP)
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Projects;
