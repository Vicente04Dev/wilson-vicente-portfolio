import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { CheckCircle, Award, Users, Target, Headphones } from 'lucide-react';

const highlights = [
  'Soluções Web Modernas',
  'Design UI/UX de Alto Nível',
  'SEO & Performance Otimizada',
  'Código Limpo e Escalável',
];

const statsCards = [
  { icon: Award,      end: 8,   suffix: '+', label: 'Anos de Experiência',  offset: false },
  { icon: Users,      end: 50,  suffix: '+', label: 'Clientes Satisfeitos', offset: true  },
  { icon: Target,     end: 100, suffix: '%', label: 'Projetos Entregues',   offset: false },
  { icon: Headphones, end: null, suffix: '', label: 'Suporte Dedicado',     offset: true, raw: '24/7' },
];

const AboutSection = () => {
  const ref     = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — animated stat cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {statsCards.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className={`card-service p-6 ${stat.offset ? 'mt-8' : ''}`}
                >
                  <stat.icon className="w-10 h-10 text-primary mb-4" />
                  <div className="text-3xl font-display font-bold text-foreground mb-1 tracking-tight">
                    {isInView ? (
                      stat.raw ? stat.raw : (
                        <CountUp
                          end={stat.end!}
                          suffix={stat.suffix}
                          duration={2.2}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                      )
                    ) : (
                      stat.raw ?? `0${stat.suffix}`
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Sobre Mim
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Wilson Vicente
              <span className="block text-xl lg:text-2xl font-normal text-muted-foreground mt-2">
                Web Designer & Desenvolvedor Full-Stack
              </span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Com mais de 8 anos de experiência no desenvolvimento web, especializei-me
              em criar soluções digitais completas que combinam design elegante com
              tecnologia de ponta. Cada projecto é desenvolvido com foco na experiência
              do utilizador, performance e resultados mensuráveis.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Desde sites institucionais a sistemas complexos e lojas virtuais,
              trabalho com as melhores tecnologias do mercado e técnicas avançadas
              de SEO para garantir que o seu projecto se destaque online.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.45 + index * 0.08 }}
                  className="flex items-center gap-2 text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contacto"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Vamos Conversar
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
