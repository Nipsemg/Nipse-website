import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  User, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Heart,
  Star,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent } from './components/ui/card';
import './App.css';

// Importando as imagens
import logoSquare from './assets/logo_square.png';
import logo from './assets/logo.png';
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';
import hero from './assets/hero.png';
import missionBg from './assets/mission-bg.png';

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Barra superior */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <p>Frete Grátis para todo o Brasil em compras acima de R$ 350 | WhatsApp: (38) 9999-9999</p>
      </div>
      
      {/* Header principal */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="NIPSE Confecções" className="h-12 w-auto" />
          </div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#produtos" className="text-foreground hover:text-primary transition-colors">Produtos</a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Quem Somos</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
            <a href="#atacado" className="text-foreground hover:text-primary transition-colors">Atacado</a>
          </nav>

          {/* Ações do usuário */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-muted rounded-lg px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar produtos..." 
                className="border-0 bg-transparent focus:ring-0 w-48"
              />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            {/* Menu mobile */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t pt-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Início</a>
              <a href="#produtos" className="text-foreground hover:text-primary transition-colors">Produtos</a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Quem Somos</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
              <a href="#atacado" className="text-foreground hover:text-primary transition-colors">Atacado</a>
              <div className="flex items-center space-x-2 bg-muted rounded-lg px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar produtos..." 
                  className="border-0 bg-transparent focus:ring-0"
                />
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

// Componente Hero Section
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: slide1,
      title: "NIPSE: Feita pra quem sente o lar como extensão da alma",
      subtitle: "Descubra a maciez e o conforto que só o 100% algodão pode oferecer",
      cta: "Conheça a Coleção Cama"
    },
    {
      image: slide2,
      title: "Sinta o Toque da Qualidade",
      subtitle: "Conforto que Abraça, Qualidade que Permanece",
      cta: "Explore Nossos Produtos"
    },
    {
      image: slide3,
      title: "De Espinosa para o Brasil",
      subtitle: "Cada Peça, uma História Bordada com Afeto",
      cta: "Nossa História"
    }
  ];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-8"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    {slide.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

// Componente Valores
const ValoresSection = () => {
  const valores = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Qualidade que Acolhe",
      description: "Produtos feitos para durar, com a maciez e o conforto que você merece."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Elegância que Encanta",
      description: "Design sofisticado que transforma seu ambiente, refletindo seu bom gosto."
    },
    {
      icon: <img src={logoSquare} alt="Artesanato" className="h-8 w-8" />,
      title: "Inovação que Respeita as Raízes",
      description: "Tecnologia e tradição se unem para criar peças únicas, com a alma mineira."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Valores em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Na NIPSE, cada produto é a materialização de nossos pilares
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {valor.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{valor.title}</h3>
                  <p className="text-muted-foreground">{valor.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <img src={logo} alt="NIPSE Confecções" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 mb-4">
              O abraço do Norte de Minas no seu lar. Qualidade, conforto e tradição em cada peça.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#sobre" className="hover:text-primary-foreground transition-colors">Quem Somos</a></li>
              <li><a href="#produtos" className="hover:text-primary-foreground transition-colors">Produtos</a></li>
              <li><a href="#blog" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#atacado" className="hover:text-primary-foreground transition-colors">Atacado</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(38) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@nipse.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Espinosa, MG</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 NIPSE Confecções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// Botão flutuante do WhatsApp
const WhatsAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <Button
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
        onClick={() => window.open('https://wa.me/5538999999999', '_blank')}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </motion.div>
  );
};

// Componente principal


export default App;



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ValoresSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}


