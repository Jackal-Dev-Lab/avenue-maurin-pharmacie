
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check } from "lucide-react";

export function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }
    
    // Here you would typically send the email to your newsletter service
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setIsValidEmail(true);
    setEmail("");
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-pharmacy-DEFAULT text-white py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Mail size={48} className="mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Restez informés !</h2>
          <p className="mb-6 md:text-lg">
            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités santé, 
            promotions et conseils personnalisés de votre pharmacie.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsValidEmail(true);
                }}
                className={`bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:ring-white/50 h-12 ${
                  !isValidEmail ? "border-red-300 focus:ring-red-300" : ""
                }`}
              />
              {!isValidEmail && (
                <p className="absolute text-xs text-red-300 mt-1">
                  Merci d'entrer une adresse email valide.
                </p>
              )}
            </div>
            <Button 
              type="submit" 
              className="bg-white text-pharmacy-DEFAULT hover:bg-pharmacy-light transition-colors h-12 px-6"
            >
              {isSubmitted ? (
                <>
                  <Check size={18} className="mr-2" />
                  <span>Merci !</span>
                </>
              ) : (
                "S'inscrire"
              )}
            </Button>
          </form>
          
          <p className="text-sm mt-6 text-white/80">
            En vous inscrivant, vous acceptez de recevoir nos communications par email. 
            Vous pourrez vous désinscrire à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
}
