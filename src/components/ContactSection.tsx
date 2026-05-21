import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref     = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const notConfigured = [serviceId, templateId, publicKey].some(
      (v) => !v || v.startsWith('cole_aqui'),
    );

    if (notConfigured) {
      toast({
        title: 'Formulário não configurado',
        description: 'Configure as variáveis do EmailJS em .env.local e reinicie o servidor.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name:    formData.name,
          email:   formData.email,
          phone:   formData.phone || '—',
          service: formData.service,
          message: formData.message,
        },
        { publicKey },
      );

      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Entrarei em contacto consigo em breve.',
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Por favor tente pelo WhatsApp: +244 931 601 440',
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail,  label: 'Email',               value: 'wilsonvicentelucas@gmail.com' },
    { icon: Phone, label: 'Telefone / WhatsApp',  value: '+244 931 601 440' },
    { icon: MapPin,label: 'Localização',          value: 'Luanda, Angola' },
  ];

  return (
    <section id="contacto" className="section-padding bg-muted/30 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
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
            Contacto
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-muted-foreground text-lg">
            Pronto para dar início ao seu projecto? Entre em contacto e receba
            um orçamento personalizado sem compromisso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Informações de Contacto
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="https://wa.me/244931601440"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20BA5C] transition-colors w-full justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nome Completo</label>
                  <input type="text" id="name" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required placeholder="O seu nome"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" id="email" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                  <input type="tel" id="phone" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+244 931 601 440"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">Tipo de Projeto</label>
                  <select id="service" value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors">
                    <option value="">Selecione...</option>
                    <option value="Site Institucional">Site Institucional</option>
                    <option value="Loja Virtual">Loja Virtual</option>
                    <option value="Sistema Web">Sistema Web</option>
                    <option value="Portal de Notícias">Portal de Notícias</option>
                    <option value="Blog">Blog</option>
                    <option value="Plataforma de Reservas">Plataforma de Reservas</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <textarea id="message" value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required rows={5} placeholder="Descreva o seu projeto..."
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    A enviar...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
