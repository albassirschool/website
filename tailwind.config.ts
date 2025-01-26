import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: (theme: (path: string) => string | undefined | { [key: string]: string }) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
            strong: {
              color: 'inherit',
              fontWeight: '600',
            },
            h1: {
              color: 'inherit',
              fontWeight: '800',
            },
            h2: {
              color: 'inherit',
              fontWeight: '700',
            },
            h3: {
              color: 'inherit',
              fontWeight: '600',
            },
            h4: {
              color: 'inherit',
              fontWeight: '600',
            },
            code: {
              color: theme('colors.gray.900'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            blockquote: {
              color: 'inherit',
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.gray.200'),
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            ul: {
              listStyleType: 'disc',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em',
            },
            'ol > li': {
              position: 'relative',
              paddingLeft: '1.75em',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.100'),
            },
            hr: {
              borderColor: theme('colors.gray.700'),
            },
            code: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [typography, forms],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'media',
} satisfies Config;