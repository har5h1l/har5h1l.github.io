import { motion } from 'framer-motion'

export function Section({
  children,
  className = '',
  containerClassName = '',
  animate = true,
  ...props
}) {
  const content = (
    <section className={`section-padding ${className}`} {...props}>
      <div className={`container-custom ${containerClassName}`}>
        {children}
      </div>
    </section>
  )

  if (!animate) return content

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`section-padding ${className}`}
      {...props}
    >
      <div className={`container-custom ${containerClassName}`}>
        {children}
      </div>
    </motion.section>
  )
}

export function PageHeader({ title, subtitle, className = '' }) {
  return (
    <Section className={`pt-24 pb-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-muted-foreground text-balance">
            {subtitle}
          </p>
        )}
      </motion.div>
    </Section>
  )
}

export function SectionHeader({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  )
}

