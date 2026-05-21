import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Search,
  Gauge,
  Smartphone,
  Code2,
  BarChart3,
  Globe2,
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Otimização SEO',
    description: 'Estrutura técnica e conteúdo optimizados para os motores de busca.',
    stat: '1ª Página',
    statLabel: 'Posicionamento',
  },
  {
    icon: Gauge,
    title: 'Alta Performance',
    description: 'Sites rápidos com carregamento optimizado para melhor experiência.',
    stat: '90+',
    statLabel: 'Score Performance',
  },
  {
    icon: Smartphone,
    title: '100% Responsivo',
    description: 'Design adaptável que funciona perfeitamente em todos os dispositivos.',
    stat: '100%',
    statLabel: 'Mobile-First',
  },
  {
    icon: Code2,
    title: 'Código Semântico',
    description: 'HTML semântico e estruturado para melhor indexação.',
    stat: 'A+',
    statLabel: 'Acessibilidade',
  },
];

const SEOSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="seo" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Globe2 className="w-4 h-4" />
            SEO & Performance
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Preparado para Dominar o{' '}
            <span className="text-gradient">Google</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Todos os projectos são desenvolvidos com as melhores práticas de SEO
            e performance, garantindo visibilidade e resultados desde o primeiro dia.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-card border border-border text-center group hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>

              {/* Stat */}
              <div className="text-3xl font-bold text-foreground mb-1">
                {feature.stat}
              </div>
              <div className="text-xs text-primary font-medium uppercase tracking-wider mb-3">
                {feature.statLabel}
              </div>

              {/* Title & Description */}
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Relatórios e Métricas Detalhadas
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Acompanhe o desempenho do seu site com relatórios completos sobre
                tráfego, posicionamento e conversões. Tomo decisões baseadas em
                dados para optimização contínua.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-6">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Analytics</div>
              </div>
              <div className="text-center">
                <Search className="w-12 h-12 text-primary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Search Console</div>
              </div>
              <div className="text-center">
                <Gauge className="w-12 h-12 text-primary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">PageSpeed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOSection;
