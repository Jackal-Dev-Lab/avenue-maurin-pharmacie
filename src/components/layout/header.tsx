import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Search, ShoppingCart, Menu, X, User, Heart, Sun, Moon, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const mainCategories = [{
    name: "Pharmacie",
    path: "/categories/pharmacie"
  }, {
    name: "Parapharmacie",
    path: "/categories/parapharmacie"
  }, {
    name: "Promotions",
    path: "/promotions"
  }, {
    name: "Conseils",
    path: "/conseils"
  }, {
    name: "À propos",
    path: "/a-propos"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const subCategories = [{
    name: "Saisonnier",
    path: "/categories/saisonnier"
  }, {
    name: "Beauté",
    path: "/categories/beaute"
  }, {
    name: "Nutrition",
    path: "/categories/nutrition"
  }, {
    name: "Bébé",
    path: "/categories/bebe"
  }, {
    name: "Immunité",
    path: "/categories/immunite"
  }, {
    name: "Articulations",
    path: "/categories/articulations"
  }, {
    name: "Sommeil & Stress",
    path: "/categories/sommeil-stress"
  }];
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implementation of actual dark mode toggle would go here
  };
  return <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-white"}`}>
      {/* Top Bar */}
      <div className="hidden md:flex bg-pharmacy-dark text-white justify-between items-center px-6 py-1.5">
        <div className="flex items-center space-x-4">
          <a href="tel:+33467270000" className="flex items-center text-sm hover:underline">
            <PhoneCall size={14} className="mr-1" />
            <span>04 67 27 75 55   </span>
          </a>
          <span className="text-sm">1479 Avenue de Maurin, 34070 Montpellier</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-white hover:text-white/80" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <select className="bg-transparent text-sm border-0 focus:ring-0 cursor-pointer">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <Logo size="medium" />
          </Link>

          {/* Search on desktop */}
          <div className="hidden md:flex relative w-full max-w-xl mx-8">
            <Input type="text" placeholder="Rechercher un produit, une marque..." className="pl-10 pr-4 py-2 rounded-full bg-muted" />
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/favoris" className="flex flex-col items-center justify-center">
              <Heart size={24} className="mb-1" />
              <span className="text-xs">Favoris</span>
            </Link>
            <Link to="/mon-compte" className="flex flex-col items-center justify-center">
              <User size={24} className="mb-1" />
              <span className="text-xs">Compte</span>
            </Link>
            <Link to="/panier" className="flex flex-col items-center justify-center relative">
              <ShoppingCart size={24} className="mb-1" />
              {cartItemCount > 0 && <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 rounded-full">
                  {cartItemCount}
                </Badge>}
              <span className="text-xs">Panier</span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
              <Search size={22} />
            </button>
            <Link to="/panier" className="relative">
              <ShoppingCart size={22} />
              {cartItemCount > 0 && <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 rounded-full">
                  {cartItemCount}
                </Badge>}
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu size={22} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center py-4 border-b">
                    <Logo size="small" />
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X size={18} />
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex-1 overflow-auto py-6">
                    <ul className="space-y-4">
                      {mainCategories.map(category => <li key={category.path}>
                          <Link to={category.path} className="block py-2 px-4 hover:bg-muted rounded-md">
                            {category.name}
                          </Link>
                        </li>)}
                      <li className="pt-4 border-t mt-4">
                        <span className="px-4 text-sm font-medium text-muted-foreground">Catégories de produits</span>
                        <ul className="mt-2 space-y-2">
                          {subCategories.map(category => <li key={category.path}>
                              <Link to={category.path} className="block py-2 px-4 hover:bg-muted rounded-md text-sm">
                                {category.name}
                              </Link>
                            </li>)}
                        </ul>
                      </li>
                      <li className="pt-4 border-t mt-4">
                        <Link to="/mon-compte" className="flex items-center px-4 py-2">
                          <User size={18} className="mr-2" />
                          <span>Mon compte</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/favoris" className="flex items-center px-4 py-2">
                          <Heart size={18} className="mr-2" />
                          <span>Mes favoris</span>
                        </Link>
                      </li>
                      <li className="flex items-center justify-between px-4 py-2">
                        <div className="flex items-center">
                          {isDarkMode ? <Sun size={18} className="mr-2" /> : <Moon size={18} className="mr-2" />}
                          <span>Mode {isDarkMode ? "clair" : "sombre"}</span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                          {isDarkMode ? "Activer" : "Activer"}
                        </Button>
                      </li>
                      <li>
                        <div className="flex items-center justify-between px-4 py-2">
                          <span>Langue</span>
                          <select className="bg-transparent border rounded p-1">
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                          </select>
                        </div>
                      </li>
                    </ul>
                  </nav>
                  <div className="border-t py-4">
                    <a href="tel:+33467270000" className="flex items-center justify-center py-2 px-4 bg-pharmacy-DEFAULT text-white rounded-md">
                      <PhoneCall size={16} className="mr-2" />
                      <span>04 67 27 00 00</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && <div className="md:hidden pt-4 pb-2 border-t mt-4">
            <div className="relative">
              <Input type="text" placeholder="Rechercher..." className="pl-10 pr-4 py-2 rounded-full bg-muted" autoFocus />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>}

        {/* Desktop Navigation */}
        <nav className="hidden md:block mt-4">
          <ul className="flex items-center space-x-8">
            {mainCategories.map(category => <li key={category.path}>
                <Link to={category.path} className="text-base font-medium hover:text-pharmacy-DEFAULT transition-colors">
                  {category.name}
                </Link>
              </li>)}
          </ul>
        </nav>
      </div>

      {/* Categories Navigation (Desktop only) */}
      <div className="hidden md:block bg-muted border-t">
        <div className="container">
          <ul className="flex items-center space-x-6 overflow-x-auto py-2 text-sm">
            {subCategories.map(category => <li key={category.path}>
                <Link to={category.path} className="whitespace-nowrap hover:text-pharmacy-DEFAULT transition-colors">
                  {category.name}
                </Link>
              </li>)}
          </ul>
        </div>
      </div>
    </header>;
}