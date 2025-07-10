import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const benefits = [
    "Direct communication with local government",
    "Real-time updates on community issues",
    "Secure and private discussion forums",
    "Transparent access to government reports",
    "Easy-to-use democratic participation tools",
    "Community-driven problem solving"
  ];

  return (
    <section id="about" className="py-24 bg-civic-gray/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Inspired by Ancient Democracy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Just as the ancient Pnyx hill in Athens served as the birthplace of democracy, 
                our platform creates a modern digital space where citizens and government can 
                come together for meaningful dialogue and democratic participation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that democracy thrives when there are open channels of communication 
                between citizens and their representatives. Pnyx bridges this gap with cutting-edge 
                technology designed specifically for local government engagement.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-civic-blue flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link to="/auth">
              <Button variant="civic" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-civic-gradient rounded-3xl p-8 shadow-civic">
              <div className="bg-background/95 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Pnyx?</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">🏛️ Historical Significance</h4>
                    <p className="text-muted-foreground text-sm">
                      The Pnyx was where Athenian citizens gathered to participate in democracy. 
                      We carry forward this legacy into the digital age.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">🤝 Community First</h4>
                    <p className="text-muted-foreground text-sm">
                      Every feature is designed to strengthen community bonds and promote 
                      meaningful civic engagement.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">🔒 Trust & Security</h4>
                    <p className="text-muted-foreground text-sm">
                      Built with the highest security standards to ensure your voice is heard 
                      safely and your privacy is protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-civic-gold/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-civic-blue/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;