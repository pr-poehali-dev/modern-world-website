import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PORTRAIT_URL =
  "https://cdn.poehali.dev/projects/a64c7fc6-bd82-4dba-92af-b22a2243ed5f/bucket/f10e1b12-e033-45c2-be02-c694d1bac50b.jpeg";

const NAV_LINKS = [
  { label: "Обо мне", href: "#about" },
  { label: "Опыт", href: "#experience" },
  { label: "Навыки", href: "#skills" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Достижения", href: "#achievements" },
  { label: "Блог", href: "#blog" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contacts" },
];

const EXPERIENCE = [
  {
    period: "2020 — наст. время",
    role: "Управляющий",
    company: "JudoTS",
    description:
      "Стратегическое руководство, развитие ключевых партнёрств, управление командой из 50+ человек. Рост выручки в 3 раза за 4 года.",
  },
  {
    period: "2016 — 2020",
    role: "Директор по развитию",
    company: "Название компании",
    description:
      "Выход на новые рынки, запуск 5 продуктовых линеек, формирование отдела продаж с нуля.",
  },
  {
    period: "2012 — 2016",
    role: "Руководитель проектов",
    company: "Название компании",
    description:
      "Управление портфелем проектов на $10M+, координация межфункциональных команд.",
  },
];

const SKILLS = [
  { name: "Стратегическое планирование", level: 95 },
  { name: "Управление командой", level: 90 },
  { name: "Финансовый анализ", level: 85 },
  { name: "Переговоры", level: 92 },
  { name: "Маркетинг и брендинг", level: 78 },
  { name: "Управление проектами", level: 88 },
];

const PORTFOLIO = [
  {
    title: "Проект Alpha",
    category: "Стратегия",
    description: "Реструктуризация бизнеса и выход на международные рынки.",
    result: "+180% выручка",
  },
  {
    title: "Проект Beta",
    category: "Развитие",
    description: "Запуск нового продукта от идеи до $5M ARR за 18 месяцев.",
    result: "5 000 клиентов",
  },
  {
    title: "Проект Gamma",
    category: "Консалтинг",
    description: "Оптимизация операционных процессов для сети из 12 филиалов.",
    result: "−30% операционные затраты",
  },
  {
    title: "Проект Delta",
    category: "Партнёрства",
    description: "Привлечение стратегического инвестора и закрытие раунда.",
    result: "$8M инвестиций",
  },
];

const ACHIEVEMENTS = [
  { number: "12+", label: "лет опыта" },
  { number: "50+", label: "реализованных проектов" },
  { number: "3×", label: "рост выручки" },
  { number: "200+", label: "партнёров" },
];

const BLOG_POSTS = [
  {
    date: "15 апреля 2026",
    category: "Стратегия",
    title: "Как выстроить систему принятия решений в кризис",
    excerpt:
      "Три принципа, которые помогли мне вывести компанию из убытков за 6 месяцев.",
  },
  {
    date: "3 марта 2026",
    category: "Лидерство",
    title: "Почему ваша команда не выполняет задачи — и что с этим делать",
    excerpt:
      "Разбираю главные ошибки руководителей и предлагаю конкретные инструменты.",
  },
  {
    date: "18 февраля 2026",
    category: "Партнёрства",
    title: "Переговоры на $10M: что я узнал, сделав 300 сделок",
    excerpt:
      "Личный опыт и техники, которые работают даже в самых сложных переговорах.",
  },
];

const TESTIMONIALS = [
  {
    name: "Александр Петров",
    role: "CEO, TechCorp",
    text: "Профессионализм и глубокое понимание бизнеса — именно то, чего нам не хватало. Результаты превзошли все ожидания.",
  },
  {
    name: "Мария Соколова",
    role: "Основатель, StartupXYZ",
    text: "Благодаря этому сотрудничеству мы привлекли инвестиции и выросли в 2 раза. Рекомендую без оговорок.",
  },
  {
    name: "Дмитрий Волков",
    role: "Партнёр, Invest Group",
    text: "Редкое сочетание стратегического мышления и практической реализации. Всегда в срок, всегда результат.",
  },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, visible } = useScrollAnimation();
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-ibm text-sm font-medium text-[var(--text-secondary)] tracking-widest uppercase">
          {name}
        </span>
        <span className="font-cormorant text-lg text-[var(--gold)]">{level}%</span>
      </div>
      <div className="h-px bg-[var(--border-subtle)] relative overflow-hidden">
        <div
          className="h-px bg-[var(--gold)] transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Введите имя";
    if (!form.email.trim()) e.email = "Введите email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Некорректный email";
    if (!form.subject.trim()) e.subject = "Введите тему";
    if (!form.message.trim()) e.message = "Введите сообщение";
    else if (form.message.trim().length < 20)
      e.message = "Сообщение слишком короткое (мин. 20 символов)";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  const handleChange = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  if (sent) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 border border-[var(--gold)] flex items-center justify-center mx-auto mb-6">
          <Icon name="Check" size={28} className="text-[var(--gold)]" />
        </div>
        <p className="font-cormorant text-2xl text-[var(--text-primary)] mb-2">
          Сообщение отправлено
        </p>
        <p className="font-ibm text-sm text-[var(--text-muted)] tracking-wide">
          Отвечу в течение 24 часов
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-ibm text-xs tracking-widest uppercase text-[var(--text-muted)] mb-2">
            Имя
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`w-full bg-transparent border-b py-3 font-ibm text-[var(--text-primary)] text-sm outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--gold)] ${
              errors.name ? "border-red-500" : "border-[var(--border-subtle)]"
            }`}
            placeholder="Ваше имя"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400 font-ibm">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block font-ibm text-xs tracking-widest uppercase text-[var(--text-muted)] mb-2">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full bg-transparent border-b py-3 font-ibm text-[var(--text-primary)] text-sm outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--gold)] ${
              errors.email ? "border-red-500" : "border-[var(--border-subtle)]"
            }`}
            placeholder="email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400 font-ibm">{errors.email}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block font-ibm text-xs tracking-widest uppercase text-[var(--text-muted)] mb-2">
          Тема
        </label>
        <input
          type="text"
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={`w-full bg-transparent border-b py-3 font-ibm text-[var(--text-primary)] text-sm outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--gold)] ${
            errors.subject ? "border-red-500" : "border-[var(--border-subtle)]"
          }`}
          placeholder="Тема обращения"
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-400 font-ibm">{errors.subject}</p>
        )}
      </div>
      <div>
        <label className="block font-ibm text-xs tracking-widest uppercase text-[var(--text-muted)] mb-2">
          Сообщение
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full bg-transparent border-b py-3 font-ibm text-[var(--text-primary)] text-sm outline-none transition-colors resize-none placeholder:text-[var(--text-muted)] focus:border-[var(--gold)] ${
            errors.message ? "border-red-500" : "border-[var(--border-subtle)]"
          }`}
          placeholder="Расскажите о вашем запросе..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400 font-ibm">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group flex items-center gap-3 border border-[var(--gold)] px-8 py-4 font-ibm text-xs tracking-widest uppercase text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-primary)] transition-all duration-300 disabled:opacity-50"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border border-current border-t-transparent rounded-full animate-spin" />
            Отправка...
          </>
        ) : (
          <>
            Отправить сообщение
            <Icon
              name="ArrowRight"
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </>
        )}
      </button>
    </form>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border-subtle)]"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("#hero")}
            className="font-cormorant text-xl font-semibold tracking-wide text-[var(--text-primary)]"
          >
            ТШ<span className="text-[var(--gold)]">.</span>
          </button>
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-ibm text-xs tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            className="lg:hidden text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] px-6 pb-6 pt-2">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="block w-full text-left py-3 font-ibm text-xs tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors border-b border-[var(--border-subtle)] last:border-0"
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-1/2 h-full bg-[var(--bg-secondary)] clip-hero" />
          <div className="absolute top-20 right-[10%] w-px h-40 bg-[var(--gold)] opacity-30" />
          <div className="absolute bottom-32 left-[5%] w-20 h-px bg-[var(--gold)] opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="font-ibm text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-6">
              Личный бренд / Профессиональное представление
            </p>
            <h1 className="font-cormorant text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] mb-6 text-[var(--text-primary)]">
              Темирлан
              <br />
              <span className="italic text-[var(--text-secondary)]">Шахнавазов</span>
            </h1>
            <div className="w-12 h-px bg-[var(--gold)] mb-6" />
            <p className="font-ibm text-base font-light text-[var(--text-muted)] leading-relaxed mb-10 max-w-md">
              Стратег. Предприниматель. Лидер. Помогаю компаниям расти и выходить
              на новый уровень через системное мышление и практический опыт.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contacts")}
                className="group flex items-center gap-3 bg-[var(--gold)] px-8 py-4 font-ibm text-xs tracking-widest uppercase text-[var(--bg-primary)] hover:bg-[var(--gold-light)] transition-all duration-300"
              >
                Связаться
                <Icon
                  name="ArrowRight"
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollTo("#portfolio")}
                className="group flex items-center gap-3 border border-[var(--border-subtle)] px-8 py-4 font-ibm text-xs tracking-widest uppercase text-[var(--text-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
              >
                Портфолио
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative ml-auto w-[420px] h-[520px]">
              <div className="absolute inset-0 border border-[var(--gold)] opacity-20 translate-x-4 translate-y-4" />
              <img
                src={PORTRAIT_URL}
                alt="Портрет"
                className="relative z-10 w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 border border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 backdrop-blur-sm px-5 py-4">
                <p className="font-cormorant text-xl text-[var(--text-primary)]">
                  Управляющий — JudoTS
                </p>
                <p className="font-ibm text-xs tracking-widest uppercase text-[var(--gold)] mt-1">
                  12+ лет экспертизы
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 lg:py-32 border-t border-[var(--border-subtle)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="font-ibm text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
                  01 — Обо мне
                </p>
                <h2 className="font-cormorant text-5xl font-light text-[var(--text-primary)]">
                  О себе
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-cormorant text-2xl font-light text-[var(--text-secondary)] leading-relaxed mb-6 italic">
                  «Спорт научил меня дисциплине и характеру — именно это я привношу
                  в каждое дело, за которое берусь.»
                </p>
                <p className="font-ibm text-sm font-light text-[var(--text-muted)] leading-relaxed mb-4">
                  Мне 19 лет, я студент Тюменского государственного университета
                  и профессиональный спортсмен. Совмещаю учёбу, спорт и управление
                  командой JudoTS.
                </p>
                <p className="font-ibm text-sm font-light text-[var(--text-muted)] leading-relaxed mb-8">
                  Спорт сформировал во мне целеустремлённость, умение работать в команде
                  и добиваться результата даже в сложных условиях. Эти качества я
                  применяю в управлении и развитии JudoTS.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Спорт",
                    "Дзюдо",
                    "Лидерство",
                    "ТюмГУ",
                    "JudoTS",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="font-ibm text-xs tracking-widest uppercase text-[var(--text-muted)] border border-[var(--border-subtle)] px-4 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="py-24 lg:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-ibm text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
              02 — Опыт
            </p>
            <h2 className="font-cormorant text-5xl font-light text-[var(--text-primary)] mb-16">
              Карьерный путь
            </h2>
          </AnimatedSection>
          <div className="space-y-0">
            {EXPERIENCE.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-[var(--border-subtle)] hover:border-[var(--gold)] transition-colors">
                  <div className="lg:col-span-3">
                    <p className="font-ibm text-xs tracking-widest uppercase text-[var(--gold)]">
                      {item.period}
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-cormorant text-2xl text-[var(--text-primary)]">
                          {item.role}
                        </h3>
                        <p className="font-ibm text-sm text-[var(--text-muted)] tracking-wide mt-0.5">
                          {item.company}
                        </p>
                      </div>
                      <Icon
                        name="ArrowUpRight"
                        size={18}
                        className="text-[var(--border-subtle)] group-hover:text-[var(--gold)] transition-colors mt-1 flex-shrink-0"
                      />
                    </div>
                    <p className="font-ibm text-sm font-light text-[var(--text-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="py-24 lg:py-32 border-t border-[var(--border-subtle)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-4">
                <p className="font-ibm text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
                  03 — Навыки
                </p>
                <h2 className="font-cormorant text-5xl font-light text-[var(--text-primary)]">
                  Экспертиза
                </h2>
              </div>
              <div className="lg:col-span-8 flex items-end">
                <p className="font-ibm text-sm font-light text-[var(--text-muted)] leading-relaxed">
                  Ключевые компетенции, сформированные за годы практической работы с
                  компаниями разного масштаба.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
            {SKILLS.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="py-24 lg:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-ibm text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
              04 — Портфолио
            </p>
            <h2 className="font-cormorant text-5xl font-light text-[var(--text-primary)] mb-16">
              Избранные проекты
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-subtle)]">
            {PORTFOLIO.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="group bg-[var(--bg-secondary)] p-8 hover:bg-[var(--bg-primary)] transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-ibm text-xs tracking-widest uppercase text-[var(--gold)] border border-[var(--gold)] px-3 py-1">
                      {item.category}
                    </span>
                    <Icon
                      name="ArrowUpRight"
                      size={18}
                      className="text-[var(--border-subtle)] group-hover:text-[var(--gold)] transition-colors"
                    />
                  </div>
                  <h3 className="font-cormorant text-3xl text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-ibm text-sm font-light text-[var(--text-muted)] leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="border-t border-[var(--border-subtle)] pt-4">
                    <p className="font-cormorant text-xl text-[var(--gold)] italic">
                      {item.result}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section
        id="achievements"
        className="py-24 lg:py-32 border-t border-[var(--border-subtle)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-ibm text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4 text-center">
              05 — Достижения
            </p>
            <h2 className="font-cormorant text-5xl font-light text-[var(--text-primary)] mb-16 text-center">
              Результаты в цифрах
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-subtle)]">
            {ACHIEVEMENTS.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="bg-[var(--bg-primary)] p-8 lg:p-12 text-center">
                  <p className="font-cormorant text-6xl lg:text-7xl font-light text-[var(--gold)] mb-2">
                    {item.number}
                  </p>
                  <p className="font-ibm text-xs tracking-widest uppercase text-[var(--text-muted)]">
                    {item.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section
        id="blog"
        className="py-24 lg:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="font-ibm text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
                  06 — Блог
                </p>
                <h2 className="font-cormorant text-5xl font-light text-[var(--text-primary)]">
                  Публикации
                </h2>
              </div>
              <button className="hidden lg:flex items-center gap-2 font-ibm text-xs tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors group">
                Все статьи
                <Icon
                  name="ArrowRight"
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </AnimatedSection>
          <div className="space-y-0">
            {BLOG_POSTS.map((post, i) => (
              <AnimatedSection key={i}>
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-[var(--border-subtle)] hover:border-[var(--gold)] transition-colors cursor-pointer">
                  <div className="lg:col-span-2">
                    <p className="font-ibm text-xs text-[var(--text-muted)]">
                      {post.date}
                    </p>
                    <span className="inline-block mt-2 font-ibm text-xs tracking-widest uppercase text-[var(--gold)]">
                      {post.category}
                    </span>
                  </div>
                  <div className="lg:col-span-10">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-cormorant text-2xl text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors mb-2">
                          {post.title}
                        </h3>
                        <p className="font-ibm text-sm font-light text-[var(--text-muted)] leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <Icon
                        name="ArrowUpRight"
                        size={18}
                        className="text-[var(--border-subtle)] group-hover:text-[var(--gold)] transition-colors mt-1 ml-6 flex-shrink-0"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="py-24 lg:py-32 border-t border-[var(--border-subtle)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-ibm text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
              07 — Отзывы
            </p>
            <h2 className="font-cormorant text-5xl font-light text-[var(--text-primary)] mb-16">
              Что говорят партнёры
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--border-subtle)]">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={i}>
                <div className="bg-[var(--bg-primary)] p-8 lg:p-10">
                  <Icon
                    name="Quote"
                    size={24}
                    className="text-[var(--gold)] opacity-60 mb-6"
                  />
                  <p className="font-cormorant text-xl font-light text-[var(--text-secondary)] leading-relaxed mb-8 italic">
                    "{t.text}"
                  </p>
                  <div className="border-t border-[var(--border-subtle)] pt-6">
                    <p className="font-ibm text-sm font-medium text-[var(--text-primary)]">
                      {t.name}
                    </p>
                    <p className="font-ibm text-xs tracking-wide text-[var(--text-muted)] mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section
        id="contacts"
        className="py-24 lg:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="font-ibm text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
                  08 — Контакты
                </p>
                <h2 className="font-cormorant text-5xl font-light text-[var(--text-primary)] mb-8">
                  Начнём?
                </h2>
                <p className="font-ibm text-sm font-light text-[var(--text-muted)] leading-relaxed mb-10">
                  Готов обсудить ваш проект, партнёрство или консультацию. Отвечаю в
                  течение 24 часов.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-3 font-ibm text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
                  >
                    <Icon name="Mail" size={16} className="text-[var(--gold)]" />
                    hello@judots.ru
                  </a>
                  <a
                    href="tel:+79199294168"
                    className="flex items-center gap-3 font-ibm text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
                  >
                    <Icon name="Phone" size={16} className="text-[var(--gold)]" />
                    +7 (919) 929-41-68
                  </a>
                  <div className="flex items-center gap-3 font-ibm text-sm text-[var(--text-muted)]">
                    <Icon name="MapPin" size={16} className="text-[var(--gold)]" />
                    Тюмень, Россия
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  {["linkedin", "instagram", "twitter"].map((s) => (
                    <button
                      key={s}
                      className="w-10 h-10 border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                    >
                      <Icon name="ExternalLink" size={14} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-8">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border-subtle)] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-ibm text-xs text-[var(--text-muted)] tracking-wide">
            © 2026 Темирлан Шахнавазов. Все права защищены.
          </p>
          <p className="font-cormorant text-sm text-[var(--text-muted)] italic">
            Профессионализм. Результат. Доверие.
          </p>
        </div>
      </footer>
    </div>
  );
}