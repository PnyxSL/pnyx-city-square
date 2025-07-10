import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Bell, 
  Users, 
  Shield, 
  Vote, 
  FileText,
  Building2,
  Globe,
  Heart
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Community Discussions",
      description: "Engage in meaningful conversations about local issues that matter to your community.",
      color: "text-civic-blue"
    },
    {
      icon: Bell,
      title: "Official Announcements",
      description: "Stay updated with real-time notifications from your local government and town hall.",
      color: "text-civic-gold"
    },
    {
      icon: Users,
      title: "Citizen Participation",
      description: "Connect with fellow citizens and participate in democratic processes together.",
      color: "text-civic-blue"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your privacy and data security are our top priorities with end-to-end protection.",
      color: "text-civic-gold"
    },
    {
      icon: Vote,
      title: "Democratic Tools",
      description: "Access tools for polls, surveys, and community decision-making processes.",
      color: "text-civic-blue"
    },
    {
      icon: FileText,
      title: "Government Reports",
      description: "Access transparent reports and documents from your local administration.",
      color: "text-civic-gold"
    },
    {
      icon: Building2,
      title: "Local Focus",
      description: "Tailored specifically for your city's unique needs and governmental structure.",
      color: "text-civic-blue"
    },
    {
      icon: Globe,
      title: "Accessible Design",
      description: "Built with accessibility in mind to ensure everyone can participate.",
      color: "text-civic-gold"
    },
    {
      icon: Heart,
      title: "Community Building",
      description: "Foster stronger connections and build a more engaged local community.",
      color: "text-civic-blue"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Empowering Democratic Engagement
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Pnyx provides the tools and platform needed to strengthen the connection between 
            citizens and their local government, fostering transparency and participation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-civic-gray rounded-2xl flex items-center justify-center group-hover:bg-civic-gradient transition-all duration-300">
                    <Icon className={`w-8 h-8 ${feature.color} group-hover:text-primary-foreground transition-all duration-300`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;