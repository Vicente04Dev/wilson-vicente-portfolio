import { useRef } from 'react';
import {
  motion, useInView,
  useMotionValue, useSpring, useTransform,
} from 'framer-motion';
import { Globe, Newspaper, BookOpen, Settings, ShoppingCart, CalendarCheck } from 'lucide-react';

const services = [
  { icon: Globe,         title: 'Sites Institucionais',    description: 'Websites profissionais que transmitem credibilidade e fortalecem a presença digital da sua empresa.' },
  { icon: Newspaper,     title: 'Sites de Notícias',       description: 'Portais de informação modernos e dinâmicos, otimizados para gestão de conteúdo e grande volume de acessos.' },
  { icon: BookOpen,      title: 'Blogs Profissionais',     description: 'Plataformas de conteúdo elegantes e funcionais, ideais para construir autoridade no seu nicho.' },
  { icon: Settings,      title: 'Sistemas Web',            description: 'Soluções personalizadas para automatizar processos e aumentar a produtividade do seu negócio.' },
  { icon: ShoppingCart,  title: 'Lojas Virtuais',          description: 'E-commerce completo e seguro, com experiência de compra otimizada para maximizar as suas vendas.' },
  { icon: CalendarCheck, title: 'Plataformas de Reservas', description: 'Sistemas de agendamento online intuitivos para serviços, hotéis, restaurantes e consultórios.' },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <div style={{ perspective: '900px' }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ boxShadow: '0 0 40px hsl(217 91% 60% / 0.12)' }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const ref     = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicos" className="section-padding bg-muted/30 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Serviços
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Soluções Web Completas para o Seu Negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Desenvolvo projectos personalizados que combinam design sofisticado,
            tecnologia robusta e estratégias de SEO para resultados reais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.09 }}
            >
              <TiltCard className="relative p-6 rounded-xl bg-card border border-border cursor-default group h-full overflow-hidden">
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, hsl(217 91% 60% / 0.06) 0%, transparent 70%)' }}
                />
                <div className="relative z-10">
                  <div className="icon-container mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a href="#contacto" className="btn-primary inline-flex" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            Solicitar Orçamento Personalizado
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
