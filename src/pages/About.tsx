import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Building, Award, CheckCircle, Globe, Microscope } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To improve global health outcomes through innovative pharmaceutical solutions and unwavering commitment to quality."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the world's most trusted pharmaceutical partner, advancing healthcare through scientific excellence."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Integrity, innovation, and patient-centricity guide every decision we make in our pursuit of healthcare excellence."
    }
  ];

  const achievements = [
    { icon: Users, number: "500K+", label: "Patients Served" },
    { icon: Building, number: "50+", label: "Countries" },
    { icon: Award, number: "25+", label: "Years Experience" }
  ];

  const certifications = [
    "WHO-GMP Certified",
    "FDA Approved",
    "ISO 9001:2015",
    "EU-GMP Compliant",
    "CDSCO Licensed",
    "ICH Guidelines"
  ];

  const milestones = [
    { year: "1999", event: "Company Founded" },
    { year: "2005", event: "First International Export" },
    { year: "2010", event: "WHO-GMP Certification" },
    { year: "2015", event: "FDA Approval" },
    { year: "2020", event: "50+ Countries Presence" },
    { year: "2024", event: "Digital Transformation" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Peony Life Sciences
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Pioneering pharmaceutical excellence since 1999, we combine cutting-edge research 
            with world-class manufacturing to deliver life-changing medicines worldwide.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                NOW YOUR HEALTH IS YOURS
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Peony Life Sciences is a leading pharmaceutical supply chain company dedicated to 
                benefiting customers, the public, and distributors. We specialize in providing 
                high-quality medical supplies and pharmaceutical solutions to healthcare providers 
                worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 70+ products in our portfolio, including veterinary medicines, we ensure 
                secure inventory management and 24/7 customer service support to meet all your 
                pharmaceutical needs.
              </p>
              <Button variant="medical" size="lg">
                Download Our Mobile App
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-subtle p-6 rounded-xl">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-muted-foreground">Serving customers in 50+ countries worldwide</p>
              </div>
              <div className="bg-gradient-subtle p-6 rounded-xl">
                <Microscope className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">R&D Excellence</h3>
                <p className="text-muted-foreground">Continuous innovation in pharmaceutical research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground">Built on strong principles and clear vision</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div key={index} className="group bg-white rounded-xl p-8 shadow-card hover:shadow-medical transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">25+ years of pharmaceutical excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {milestone.year.slice(-2)}
                </div>
                <div className="text-lg font-bold text-primary mb-2">{milestone.year}</div>
                <div className="text-sm text-muted-foreground">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Global Quality Standards</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Our commitment to quality is validated by international certifications and regulatory approvals.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-white font-semibold">{cert}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;