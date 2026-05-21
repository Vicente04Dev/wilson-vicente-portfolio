import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Quanto tempo demora a criação de um site?',
    answer:
      'O prazo varia conforme a complexidade do projecto. Um site institucional pode ficar pronto em 10 a 15 dias úteis. Lojas virtuais e sistemas web personalizados podem levar de 3 a 6 semanas. Após a análise do seu projecto, apresento um cronograma detalhado.',
  },
  {
    question: 'Qual é a forma de pagamento?',
    answer:
      'Trabalho com pagamento dividido em fases: uma entrada no início do projecto e o restante na entrega final. Aceito transferência bancária e outros métodos de pagamento disponíveis em Angola. Os valores são apresentados em Kwanzas (Kz).',
  },
  {
    question: 'O site vai funcionar bem no telemóvel?',
    answer:
      'Sim! Todos os sites que desenvolvo são 100% responsivos, ou seja, adaptam-se perfeitamente a qualquer dispositivo — telemóvel, tablet ou computador. A experiência do utilizador é prioridade em todos os projectos.',
  },
  {
    question: 'O que é SEO e por que é importante?',
    answer:
      'SEO (Search Engine Optimization) é o conjunto de técnicas que fazem o seu site aparecer nas primeiras posições do Google. Isto significa mais visibilidade, mais visitas e mais clientes a encontrar o seu negócio online. Todos os meus projectos incluem optimização SEO.',
  },
  {
    question: 'Oferecem suporte após a entrega do site?',
    answer:
      'Sim! Todos os planos incluem um período de suporte técnico gratuito após a entrega. Além disso, ofereço planos de manutenção contínua para garantir que o seu site esteja sempre actualizado, seguro e a funcionar na perfeição.',
  },
  {
    question: 'Posso actualizar o conteúdo do site sozinho?',
    answer:
      'Claro! Os sites são desenvolvidos com painéis de gestão intuitivos que lhe permitem alterar textos, imagens e conteúdos de forma simples, sem necessidade de conhecimentos técnicos. Também forneço formação inicial para que se sinta à vontade.',
  },
  {
    question: 'Desenvolvem lojas virtuais com sistema de pagamento?',
    answer:
      'Sim! As lojas virtuais que desenvolvo incluem integração com os principais sistemas de pagamento disponíveis em Angola, gestão de stock, encomendas, e toda a estrutura necessária para vender online com segurança.',
  },
  {
    question: 'É possível ter um sistema web personalizado para a minha empresa?',
    answer:
      'Com certeza! Desenvolvo sistemas web à medida das necessidades do seu negócio — desde gestão de clientes, controlo de stock, agendamentos, relatórios e muito mais. Cada sistema é pensado para optimizar os processos da sua empresa.',
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
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
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perguntas{' '}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Respostas às dúvidas mais comuns sobre os nossos serviços.
            Não encontrou o que procura? Entre em contacto!
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl bg-card border border-border px-6 data-[state=open]:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary transition-colors py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <a href="#contacto" className="btn-primary">
            Fale Connosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
