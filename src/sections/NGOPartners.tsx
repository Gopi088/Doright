import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { colors, fontWeights, fonts, radius, shadows } from '../styles/theme';
import { PARTNERS } from '../data/siteContent';
import { ChevronLeftIcon, ChevronRightIcon } from '../components/icons';

export default function NGOPartners() {
  const [active, setActive] = useState(2);
  const total = PARTNERS.items.length;

  const shift = (direction: number) => {
    setActive((value) => (value + direction + total) % total);
  };

  return (
    <Section
      bg={colors.white}
      py="clamp(54px,7vw,86px)"
      style={{ border: `2px solid ${colors.primary}` }}
      ariaLabel="Meet Our NGO Partners"
    >
      <Container style={{ maxWidth: '1040px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(24px,3vw,34px)',
            fontWeight: fontWeights.extrabold,
            color: colors.darkTrue,
            margin: '0 0 18px',
            letterSpacing: '0',
          }}>
            {PARTNERS.title}
          </h2>
          <p style={{
            fontFamily: fonts.body,
            fontWeight: fontWeights.text,
            fontSize: '11.5px',
            color: colors.gray,
            lineHeight: 1.8,
            maxWidth: '870px',
            margin: '0 0 clamp(36px,5vw,56px)',
          }}>
            {PARTNERS.body}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '38px 1fr 38px', alignItems: 'center', gap: '8px' }}>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => shift(-1)}
            aria-label="Previous partner"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: radius.full,
              border: `1px solid ${colors.border}`,
              background: colors.white,
              boxShadow: shadows.sm,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <ChevronLeftIcon size={12} color={colors.gray} />
          </motion.button>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, minmax(90px, 1fr))',
            gap: '10px',
            minWidth: 0,
          }}>
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (active + offset + total) % total;
              const item = PARTNERS.items[index];
              const selected = offset === 0;

              return (
                <motion.button
                  key={`${item.id}-${offset}`}
                  onClick={() => setActive(index)}
                  aria-pressed={selected}
                  aria-label={`Show ${item.name}`}
                  whileHover={{ y: -2 }}
                  style={{
                    height: '72px',
                    border: 0,
                    borderRadius: radius.sm,
                    background: selected ? colors.primary : colors.placeholder,
                    boxShadow: selected ? shadows.primary : 'none',
                  }}
                />
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => shift(1)}
            aria-label="Next partner"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: radius.full,
              border: `1px solid ${colors.border}`,
              background: colors.white,
              boxShadow: shadows.sm,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <ChevronRightIcon size={12} color={colors.gray} />
          </motion.button>
        </div>
      </Container>
    </Section>
  );
}
