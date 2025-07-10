import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-subtle-gradient">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-civic-gradient rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Pnyx</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-background rounded-lg shadow-card p-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              By accessing and using the Pnyx platform ("Service"), you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pnyx is a digital platform designed to facilitate democratic engagement between citizens and their local 
              government. The platform provides tools for community discussions, official announcements, and civic participation.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To access certain features of the Service, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your password and account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>Post content that is unlawful, harmful, threatening, abusive, or defamatory</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Attempt to gain unauthorized access to other user accounts</li>
              <li>Use the Service for any commercial purposes without permission</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Content Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Users are responsible for the content they post on the platform. We reserve the right to remove any 
              content that violates these terms or is deemed inappropriate for civic discourse. All content should 
              promote constructive dialogue and democratic participation.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of 
              the Service, to understand our practices regarding the collection and use of your information.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pnyx shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, 
              use, goodwill, or other intangible losses.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any significant 
              changes to these terms. Your continued use of the Service after such modifications constitutes 
              acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may terminate or suspend your account and access to the Service immediately, without prior notice 
              or liability, if you breach any of these terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any questions about these Terms & Conditions, please contact us at:
              <br />
              Email: legal@pnyx.com
              <br />
              Address: Democracy Avenue, Civic Center
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;