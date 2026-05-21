import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Palette,
  Zap,
  Shield,
  Code,
  Headphones,
  TrendingUp,
} from 'lucide-react';

const reasons = [
  {
    icon: Palette,
    title: 'Design Profissional',
    description: 'Interfaces modernas e personalizadas que refletem a identidade única da sua marca.',
  },
  {
    icon: Zap,
    title: 'Performance Otimizada',
    description: 'Sites rápidos e responsivos que proporcionam a melhor experiência em qualquer dispositivo.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Avançado',
    description: 'Estratégias de optimização para melhorar o posicionamento nos motores de busca.',
  },
  {
    icon: Shield,
    title: 'Segurança & Escalabilidade',
    description: 'Código seguro e arquitetura preparada para crescer com o seu negócio.',
  },
  {
    icon: Code,
    title: 'Back-end Robusto',
    description: 'Desenvolvimento sólido com as melhores práticas e tecnologias modernas.',
  },
  {
    icon: Headphones,
    title: 'Suporte Dedicado',
    description: 'Acompanhamento contínuo e suporte técnico para garantir o sucesso do projeto.',
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Diferenciais
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Por Que Escolher os{' '}
              <span className="text-gradient">Meus Serviços?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Cada projecto é tratado com dedicação exclusiva, combinando criatividade,
              expertise técnica e foco em resultados para entregar soluções que
              realmente fazem a diferença no seu negócio.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="btn-primary">
                Iniciar Projeto
              </a>
              <a href="#portfolio" className="btn-outline">
                Ver Trabalhos
              </a>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <reason.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
