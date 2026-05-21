import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Site Institucional',
    description: 'Ideal para empresas que querem marcar presença online com profissionalismo.',
    price: 'Desde 150.000 Kz',
    popular: false,
    features: [
      'Até 5 páginas personalizadas',
      'Design responsivo e moderno',
      'Optimização SEO básica',
      'Formulário de contacto',
      'Integração com redes sociais',
      'Certificado SSL incluído',
      'Entrega em até 15 dias',
    ],
  },
  {
    name: 'Loja Virtual',
    description: 'Para negócios que querem vender online com uma plataforma completa e segura.',
    price: 'Desde 350.000 Kz',
    popular: true,
    features: [
      'Catálogo de produtos ilimitado',
      'Sistema de pagamentos integrado',
      'Gestão de encomendas e stock',
      'Design profissional e personalizado',
      'SEO avançado para e-commerce',
      'Painel de administração intuitivo',
      'Integração com métodos de pagamento locais',
      'Suporte técnico por 30 dias',
    ],
  },
  {
    name: 'Sistema Web',
    description: 'Soluções à medida para automatizar processos e fazer o seu negócio crescer.',
    price: 'Sob Consulta',
    popular: false,
    features: [
      'Desenvolvimento 100% personalizado',
      'Painel de gestão completo',
      'Integração com APIs externas',
      'Base de dados optimizada',
      'Sistema de autenticação seguro',
      'Relatórios e dashboards',
      'Escalável e performante',
      'Suporte e manutenção contínua',
    ],
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="precos" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
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
            Planos & Preços
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Investimento Transparente para o Seu{' '}
            <span className="text-gradient">Projeto</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o plano ideal para as necessidades do seu negócio.
            Todos os projectos incluem design profissional e suporte dedicado.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-card border-primary shadow-[0_0_40px_hsl(217_91%_60%/0.15)]'
                  : 'bg-card border-border hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Star className="w-3 h-3" />
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-foreground">
                  {plan.price}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-border mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className={`w-full justify-center group ${
                  plan.popular ? 'btn-primary' : 'btn-outline'
                }`}
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
