export function ContactSection() {
  return (
    <section className="py-20 px-[6vw] max-w-6xl mx-auto">
      <h2 className="font-display font-[560] text-2xl mb-2 text-text">
        Contato
      </h2>
      <p className="text-muted text-[15px] mb-8">
        Vamos conversar? Entre em contato por qualquer um dos canais abaixo.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/RaFaSMK"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[12.5px] tracking-wide px-5 py-2.5 rounded-md border border-border text-text transition-colors duration-200 hover:border-cool hover:text-cool hover:bg-cool/[0.06]"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-chaves-souza-a856b524b/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[12.5px] tracking-wide px-5 py-2.5 rounded-md border border-border text-text transition-colors duration-200 hover:border-cool hover:text-cool hover:bg-cool/[0.06]"
        >
          LinkedIn
        </a>
        <a
          href="mailto:rafael012chavess@gmail.com"
          className="font-mono text-[12.5px] tracking-wide px-5 py-2.5 rounded-md border border-border text-text transition-colors duration-200 hover:border-cool hover:text-cool hover:bg-cool/[0.06]"
        >
          Email
        </a>
      </div>
    </section>
  );
}
