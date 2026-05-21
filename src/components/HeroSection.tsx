import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Code2, Palette, Zap, Globe, Star } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import heroBg from '@/assets/hero-bg.jpg';

const floatingCards = [
  { icon: Code2,   x: 'left-2',  y: 'top-[36%]',   delay: 0,   dur: 4.5 },
  { icon: Palette, x: 'right-2', y: 'bottom-[38%]', delay: 1.2, dur: 5.5 },
  { icon: Globe,   x: 'left-2',  y: 'bottom-[30%]', delay: 0.7, dur: 6   },
  { icon: Star,    x: 'right-2', y: 'top-[30%]',    delay: 2,   dur: 5   },
];

const stats = [
  { end: 50,  suffix: '+', label: 'Projetos Entregues' },
  { end: 8,   suffix: '+', label: 'Anos de Experiência' },
  { end: 100, suffix: '%', label: 'Clientes Satisfeitos' },
];

const HeroSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView  = useInView(statsRef, { once: true });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full noise-bg">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/88 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* Aurora orbs */}
      <motion.div
        className="absolute top-[18%] left-[30%] w-[min(700px,90vw)] h-[420px] rounded-full blur-[150px] bg-primary/8 pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[18%] right-[18%] w-[340px] h-[340px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'hsl(213 94% 68% / 0.07)' }}
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.07, 0.13, 0.07] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-[55%] right-[35%] w-[250px] h-[250px] rounded-full blur-[100px] bg-primary/5 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* Content */}
      <div className="section-container relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4" />
            <span>Soluções Web Profissionais em Angola</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-4"
          >
            Transformo Ideias em{' '}
            <span className="text-gradient">Experiências Digitais</span>{' '}
            Extraordinárias
          </motion.h1>

          {/* Typewriter rotating roles */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg font-semibold text-primary mb-5 min-h-[28px]"
          >
            <TypeAnimation
              sequence={[
                'Web Designer & Desenvolvedor Full-Stack', 3000,
                'Especialista em Sites Institucionais',    2500,
                'Criador de Lojas Virtuais de Sucesso',   2500,
                'Desenvolvedor de Sistemas Web Robustos', 2500,
              ]}
              wrapper="span"
              speed={55}
              deletionSpeed={80}
              repeat={Infinity}
            />
          </motion.div>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Especializado em criar sites profissionais, sistemas web robustos e
            lojas virtuais que convertem visitantes em clientes em Angola.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#contacto"
              className="btn-primary text-lg group"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#portfolio"
              className="btn-outline text-lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver Portfólio
            </motion.a>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-1 tracking-tight">
                  {isInView
                    ? <CountUp end={stat.end} suffix={stat.suffix} duration={2.5} />
                    : `0${stat.suffix}`}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating icon cards — only on very wide screens */}
        <div className="absolute inset-0 pointer-events-none hidden 2xl:block" style={{ zIndex: 0 }}>
          {floatingCards.map((item, i) => (
            <div key={i} className={`absolute ${item.x} ${item.y}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.15 }}
              >
                <motion.div
                  animate={{ y: [-7, 7, -7] }}
                  transition={{ duration: item.dur, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
                  className="w-16 h-16 rounded-2xl bg-card/75 backdrop-blur-md border border-border/60 flex items-center justify-center shadow-xl"
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
