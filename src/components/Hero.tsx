import { Button } from "@/components/ui/button";
import { ChevronRight, Users, MessageSquare, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/pnyx-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-subtle-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Democratic engagement at Pnyx" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-civic-blue/10 border border-civic-blue/20 mb-8">
            <Building2 className="w-4 h-4 text-civic-blue mr-2" />
            <span className="text-sm font-medium text-civic-blue">Modern Democratic Engagement</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-civic-blue bg-clip-text text-transparent">
            Welcome to Pnyx
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Where Democracy Meets Digital Innovation
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with your local government and fellow citizens. Engage in meaningful discussions, 
            stay informed with official announcements, and participate in the democratic process 
            like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/auth">
              <Button variant="civic" size="xl" className="group">
                Join Your Community
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="#features">
              <Button variant="civic-outline" size="xl">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-civic-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">Democratic</div>
              <div className="text-sm text-muted-foreground">Participation</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-civic-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">Open</div>
              <div className="text-sm text-muted-foreground">Dialogue</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-civic-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">Transparent</div>
              <div className="text-sm text-muted-foreground">Governance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-civic-blue rounded-full flex justify-center">
          <div className="w-1 h-2 bg-civic-blue rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;