import logo from "figma:asset/2b23f9efed2fc830bda70fe81ba12dacd61f4446.png";
import psychologistPhoto from "figma:asset/762e5dfe77ad22421a4f8eb96202b67df4213476.png";
import therapyIllustration from "figma:asset/2789ffea64ce9e7d6f57a54f1175db36b80fe932.png";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Brain, Heart, Users, Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function App() {
  const [showCards, setShowCards] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.3) {
        setShowCards(true);
      }

      if (scrollPosition > windowHeight * 0.8) {
        setShowContact(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="min-h-screen w-full relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at right, #6B8E7F 0%, #A8BDAC 35%, #E8EDE6 65%, #FFFFFF 100%)",
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-8 py-8">
          {/* Main Layout Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl">
            {/* Left Content - Logo, Name and Text */}
            <div className="space-y-8">
              {/* Logo and Name Section */}
              <div className="flex items-center gap-6">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-72 w-auto"
                />
                <div>
                  <h1
                    className="text-[#2d5145] leading-tight text-5xl font-bold"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    Nicolly Oliveira
                  </h1>
                  <p
                    className="text-[#6B8E7F] text-xl mt-2"
                    style={{
                      fontFamily: "Quicksand, sans-serif",
                    }}
                  >
                    Psicóloga CRP-08 46175
                  </p>
                </div>
              </div>

              {/* Text Content */}
              <div
                className="space-y-6 max-w-xl pt-4"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Entendo que algumas questões não podem
                    esperar. Estou à disposição para ouvi-lo e
                    oferecer apoio em sua jornada de
                    autoconhecimento e fortalecimento emocional.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Meu objetivo é proporcionar um espaço seguro
                    e acolhedor, onde você possa refletir e
                    crescer pessoalmente. Juntos, exploraremos
                    suas potencialidades e encontraremos formas
                    de enfrentar os desafios do dia a dia. A
                    terapia é um investimento no seu bem-estar,
                    permitindo descobrir seus recursos internos
                    e viver de maneira mais leve e equilibrada.
                  </p>
                </div>

                <div className="pt-4">
                  <Button
                    size="lg"
                    className="bg-[#3D6B5C] hover:bg-[#2d5145] text-white px-8 py-6 shadow-lg"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5541991599013",
                        "_blank",
                      )
                    }
                  >
                    Quero marcar uma sessão
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:ml-auto flex justify-end lg:mr-[-80px]">
              <div className="relative z-10">
                <img
                  src={psychologistPhoto}
                  alt="Psicóloga Nicolly Oliveira"
                  className="w-full max-w-2xl h-[650px] object-cover object-top"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              showCards
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-[#6B8E7F] mb-4"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Como posso ajudar você
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                showCards
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-2 border-[#E8EDE6] hover:border-[#6B8E7F] transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-[#E8EDE6] flex items-center justify-center mb-4">
                    <Brain className="w-7 h-7 text-[#6B8E7F]" />
                  </div>
                  <CardTitle
                    className="text-[#6B8E7F]"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    Autoconhecimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className="text-gray-700"
                    style={{
                      fontFamily: "Quicksand, sans-serif",
                    }}
                  >
                    Explore sua mente e emoções em um ambiente
                    seguro. Descubra seus padrões de pensamento
                    e comportamento para viver de forma mais
                    autêntica.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                showCards
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full border-2 border-[#E8EDE6] hover:border-[#6B8E7F] transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-[#E8EDE6] flex items-center justify-center mb-4">
                    <Heart className="w-7 h-7 text-[#6B8E7F]" />
                  </div>
                  <CardTitle
                    className="text-[#6B8E7F]"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    Bem-estar Emocional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className="text-gray-700"
                    style={{
                      fontFamily: "Quicksand, sans-serif",
                    }}
                  >
                    Desenvolva estratégias para lidar com
                    ansiedade, estresse e outras questões
                    emocionais. Encontre equilíbrio e paz
                    interior.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                showCards
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="h-full border-2 border-[#E8EDE6] hover:border-[#6B8E7F] transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-[#E8EDE6] flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-[#6B8E7F]" />
                  </div>
                  <CardTitle
                    className="text-[#6B8E7F]"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    Relacionamentos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className="text-gray-700"
                    style={{
                      fontFamily: "Quicksand, sans-serif",
                    }}
                  >
                    Melhore suas relações interpessoais. Aprenda
                    a comunicar-se melhor e construir conexões
                    mais saudáveis e significativas.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-[#F8FAF9] py-6">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                showContact
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={therapyIllustration}
                alt="Ilustração de sessão de terapia"
                className="w-full max-w-lg"
              />
            </motion.div>

            {/* Right - Text and Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                showContact
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p
                  className="text-gray-600"
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                  }}
                >
                  Coloque seu bem-estar emocional em primeiro
                  lugar
                </p>

                <h2
                  className="text-[#6B8E7F]"
                  style={{ fontFamily: "Fraunces, serif" }}
                >
                  Uma sessão pode mudar sua vida para sempre!
                </h2>

                <p
                  className="text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                  }}
                >
                  Encontre um espaço acolhedor onde você pode
                  explorar seus sentimentos e enfrentar
                  desafios. Estou aqui para oferecer suporte e
                  orientação, ajudando você a superar obstáculos
                  e alcançar o equilíbrio na vida.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <a
                  href="mailto:psicologia.nicollyolveira@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#6B8E7F] transition-colors"
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                  }}
                >
                  <Mail className="w-5 h-5 text-[#6B8E7F]" />
                  <span>
                    psicologa.nicollyoliveira@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+5541991599013"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#6B8E7F] transition-colors"
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                  }}
                >
                  <Phone className="w-5 h-5 text-[#6B8E7F]" />
                  <span>(41) 99159-9013</span>
                </a>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-[#3D6B5C] hover:bg-[#2d5145] text-white px-8 py-6 w-full md:w-auto shadow-lg"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5541991599013",
                      "_blank",
                    )
                  }
                >
                  Fale comigo pelo WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#3D6B5C] text-white py-12">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* About */}
            <div className="space-y-4">
              <h3
                className="text-white"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Nicolly Oliveira
              </h3>
              <p
                className="text-white/80 text-sm leading-relaxed"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                Psicóloga CRP-08 46175
              </p>
              <p
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                Oferecendo um espaço seguro e acolhedor para seu
                autoconhecimento e crescimento emocional.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3
                className="text-white"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Contato
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:psicologia.nicollyoliveira@gmail.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                  }}
                >
                  <Mail className="w-4 h-4" />
                  <span className="break-all">
                    psicologa.nicollyoliveira@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+5541991599013"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  <span>(41) 99159-9013</span>
                </a>

                <div className="flex gap-4 pt-2">
                  <a
                    href="https://www.linkedin.com/in/nicolly-oliveira-08055b274/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/psicologa.nicolly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <h3
                className="text-white"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Agende sua sessão
              </h3>
              <p
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                Entre em contato e dê o primeiro passo em
                direção ao seu bem-estar emocional.
              </p>
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-[#3D6B5C] px-6 py-5"
                onClick={() =>
                  window.open(
                    "https://wa.me/5541991599013",
                    "_blank",
                  )
                }
              >
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8">
            <p
              className="text-center text-white/60 text-sm"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              © {new Date().getFullYear()} Nicolly Oliveira -
              Psicóloga CRP-08 46175. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}