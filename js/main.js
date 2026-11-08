(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Cabeçalho: linha inferior ao fazer scroll
     ======================================================================== */
  const header = $('#header');
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* Tema escuro (padrão) / claro, escolhido pelo visitante
     ======================================================================== */
  const root = document.documentElement;
  const themeToggle = $('#theme-toggle');
  const themeColor = $('meta[name="theme-color"]');

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    themeColor.content = theme === 'light' ? '#f6f4ef' : '#0f1012';
    themeToggle.setAttribute('aria-label', theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro');
  };

  applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
  themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Sem armazenamento disponível: o tema muda apenas nesta visita
    }
  });

  /* Menu móvel
     ======================================================================== */
  const menuToggle = $('#menu-toggle');
  const mobileNav = $('#mobile-nav');

  const setMenuOpen = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    mobileNav.classList.toggle('is-open', open);
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  $$('a', mobileNav).forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  /* Ligação activa na navegação, conforme a secção visível
     ======================================================================== */
  const navLinks = $$('.nav a');
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach((link) => {
      const section = $(link.getAttribute('href'));
      if (section) sectionObserver.observe(section);
    });
  }

  /* Entrada suave dos elementos ao fazer scroll
     ======================================================================== */
  const reveals = $$('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('is-in'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((element) => revealObserver.observe(element));

    // Salvaguarda para scroll muito rápido: revela tudo o que já está acima do fundo do ecrã
    let pending = false;
    const revealPassed = () => {
      pending = false;
      const remaining = reveals.filter((element) => !element.classList.contains('is-in'));
      remaining.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add('is-in');
          revealObserver.unobserve(element);
        }
      });
      if (remaining.length === 0) window.removeEventListener('scroll', onScroll);
    };
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(revealPassed);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Currículo: janela de visualização em ecrãs largos com leitor de PDF;
     nos restantes casos a ligação abre o PDF num separador novo
     ======================================================================== */
  const cvDialog = $('#cv-dialog');
  const cvFrame = $('#cv-frame');
  const wideScreen = window.matchMedia('(min-width: 768px)');
  const canShowPdfInline = () => wideScreen.matches
    && navigator.pdfViewerEnabled !== false
    && typeof cvDialog.showModal === 'function';

  $$('[data-cv-view]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (!canShowPdfInline()) return;
      event.preventDefault();
      if (!cvFrame.getAttribute('src')) cvFrame.src = `${link.getAttribute('href')}#view=FitH`;
      cvDialog.showModal();
    });
  });
  $('#cv-dialog-close').addEventListener('click', () => cvDialog.close());
  cvDialog.addEventListener('click', (event) => {
    if (event.target === cvDialog) cvDialog.close();
  });

  /* Filtro do portfólio
     ======================================================================== */
  const filters = $$('.filter');
  const projects = $$('.project');

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.filter;
      filters.forEach((other) => other.setAttribute('aria-pressed', String(other === filter)));
      projects.forEach((project) => {
        project.hidden = category !== 'Todos' && project.dataset.category !== category;
        project.classList.add('is-in');
      });
    });
  });

  /* Perguntas frequentes: só uma aberta de cada vez
     (o atributo name dos <details> já o faz nos browsers recentes)
     ======================================================================== */
  const faqItems = $$('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  /* Avisos
     ======================================================================== */
  const toasts = $('#toasts');
  const TOAST_DURATION = 6000;

  const closeToast = (toast) => {
    if (toast.classList.contains('is-closing')) return;
    toast.classList.add('is-closing');
    setTimeout(() => toast.remove(), 200);
  };

  const showToast = ({ title, description, error = false }) => {
    toasts.replaceChildren();

    const toast = document.createElement('div');
    toast.className = `toast${error ? ' toast--error' : ''}`;
    toast.setAttribute('role', error ? 'alert' : 'status');
    toast.innerHTML = `
      <svg class="icon" aria-hidden="true"><use href="#i-${error ? 'alert-circle' : 'check-circle-2'}"></use></svg>
      <div class="toast-copy"><div class="toast-title"></div><div class="toast-desc"></div></div>
      <button type="button" class="toast-close" aria-label="Fechar aviso">
        <svg class="icon icon-sm" aria-hidden="true"><use href="#i-x"></use></svg>
      </button>`;
    $('.toast-title', toast).textContent = title;
    $('.toast-desc', toast).textContent = description;
    $('.toast-close', toast).addEventListener('click', () => closeToast(toast));
    toasts.append(toast);

    let timer = setTimeout(() => closeToast(toast), TOAST_DURATION);
    toast.addEventListener('mouseenter', () => clearTimeout(timer));
    toast.addEventListener('mouseleave', () => {
      timer = setTimeout(() => closeToast(toast), TOAST_DURATION);
    });
  };

  /* Formulário de contacto (EmailJS)
     ======================================================================== */
  const form = $('#contact-form');
  const submit = $('#contact-submit');
  const submitIdle = $('#submit-idle');
  const submitBusy = $('#submit-busy');
  const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

  const setSubmitting = (busy) => {
    submit.disabled = busy;
    submitIdle.hidden = busy;
    submitBusy.hidden = !busy;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const { serviceId, templateId, publicKey, toEmail } = window.EMAILJS_CONFIG || {};
    const notConfigured = [serviceId, templateId, publicKey].some(
      (value) => !value || value.startsWith('cole_aqui'),
    );

    if (notConfigured) {
      showToast({
        title: 'Formulário não configurado',
        description: 'Configure as credenciais do EmailJS em js/config.js.',
        error: true,
      });
      setSubmitting(false);
      return;
    }

    const data = new FormData(form);
    const name = data.get('name').trim();
    const email = data.get('email').trim();
    const phone = data.get('phone').trim() || '—';
    const service = data.get('service');
    const originalMessage = data.get('message').trim();

    // O template do EmailJS pode não usar todas as variáveis: os dados do contacto
    // seguem também dentro da mensagem, para chegarem sempre ao email.
    const message = [
      originalMessage,
      '',
      '— Dados do contacto —',
      `Nome: ${name}`,
      `Email: ${email}`,
      `Telefone: ${phone}`,
      `Tipo de projecto: ${service}`,
    ].join('\n');

    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name,
            email,
            phone,
            service,
            message,
            original_message: originalMessage,
            title: `Pedido de orçamento: ${service} — ${name}`,
            time: new Date().toLocaleString('pt-PT', { timeZone: 'Africa/Luanda', dateStyle: 'long', timeStyle: 'short' }),
            // Nomes alternativos usados com frequência em templates do EmailJS
            from_name: name,
            from_email: email,
            user_name: name,
            user_email: email,
            to_email: toEmail,
            reply_to: email,
          },
        }),
      });
      if (!response.ok) throw new Error(`EmailJS: ${response.status}`);

      showToast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Obrigado pelo contacto. Respondo-lhe em breve.',
      });
      form.reset();
    } catch {
      showToast({
        title: 'Não foi possível enviar a mensagem',
        description: 'Por favor, tente pelo WhatsApp: +244 931 601 440.',
        error: true,
      });
    }

    setSubmitting(false);
  });

  /* Ano do rodapé
     ======================================================================== */
  $('#year').textContent = new Date().getFullYear();
})();
