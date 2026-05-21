import { Code2, Linkedin, Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github,   href: '#', label: 'GitHub' },
    { icon: Instagram,href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:wilsonvicentelucas@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Sobre',     href: '#sobre' },
    { label: 'Serviços',  href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contacto',  href: '#contacto' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                Wilson<span className="text-primary">Vicente</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Web Designer & Desenvolvedor Full-Stack especializado em soluções digitais modernas e eficientes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground hover-underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="divider-gradient my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Wilson Vicente. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <span className="text-primary">♥</span> em Angola
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
