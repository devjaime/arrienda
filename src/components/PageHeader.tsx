interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({ badge, title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
            {badge}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
