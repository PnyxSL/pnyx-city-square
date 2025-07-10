import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, participate in 
              discussions, or contact us for support. This may include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>Name and email address</li>
              <li>Profile information you choose to provide</li>
              <li>Content you post in discussions and forums</li>
              <li>Communications you send to us</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Facilitate civic engagement and democratic participation</li>
              <li>Monitor and analyze trends and usage patterns</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your 
              consent, except as described in this policy. We may share information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>With your consent or at your direction</li>
              <li>With service providers who assist us in operating our platform</li>
              <li>To comply with legal obligations or protect rights and safety</li>
              <li>In connection with a business transfer or merger</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We retain your personal information for as long as necessary to provide our services and fulfill the 
              purposes described in this policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Portability of your data</li>
              <li>Withdrawal of consent where applicable</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We use cookies and similar tracking technologies to collect and use personal information about you. 
              You can manage your cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you become aware that a child has provided us with personal 
              information, please contact us.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure 
              appropriate safeguards are in place to protect your information in accordance with this privacy policy.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may update this privacy policy from time to time. We will notify you of any material changes by 
              posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@pnyx.com
              <br />
              Address: Democracy Avenue, Civic Center
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;