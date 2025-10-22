import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx,js,jsx}'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'qwik',
  jsxStyleProps: 'all',
  theme: {
    tokens: {
      colors: {
        darkdd: { value: '#071518' },
        darkd: { value: '#0f1b1e' },
        dark: { value: '#161f21' },
        darkl: { value: '#2f383b' },
        darkll: { value: '#495a5c' },
        light: { value: '#e0e9eb' },
        lightl: { value: '#fafbfb' },
        lightll: { value: '#ffffff' },
        lightd: { value: '#b4cacf' },
        lightdd: { value: '#7fa0a8' },
        r: { value: '#f24432' },
        rd: { value: '#d2210f' },
        rdd: { value: '#a51101' },
        rl: { value: '#ff6958' },
        rll: { value: '#ff8d81' },
      },
      fonts: {
        sans: {
          value:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        },
        mono: { value: 'InputMonoNarrow ExLight, monospace' },
      },
      fontWeights: {
        normal: { value: '400' },
        semibold: { value: '600' }
      },
      lineHeights: {
        body: { value: '1.8' }
      },
      fontSizes: {
        's-6': { value: '8px' },
        's-5': { value: '9px' },
        's-4': { value: '11px' },
        's-3': { value: '12px' },
        's-2': { value: '13px' },
        's-1': { value: '15px' },
        s0: { value: '16px' },
        s1: { value: '19px' },
        s2: { value: '21px' },
        s3: { value: '24px' },
        s4: { value: '28px' },
        s5: { value: '32px' },
        s6: { value: '48px' },
        s7: { value: '62px' },
        s8: { value: '80px' },
        s9: { value: '96px' },
      },
      spacing: {
        's-6': { value: '8px' },
        's-5': { value: '9px' },
        's-4': { value: '11px' },
        's-3': { value: '12px' },
        's-2': { value: '13px' },
        's-1': { value: '15px' },
        s0: { value: '16px' },
        s1: { value: '19px' },
        s2: { value: '21px' },
        s3: { value: '24px' },
        s4: { value: '28px' },
        s5: { value: '32px' },
        s6: { value: '48px' },
        s7: { value: '62px' },
        s8: { value: '80px' },
        s9: { value: '96px' },
      },
      borderWidths: {
        's-6': { value: '8px' },
        's-5': { value: '9px' },
        's-4': { value: '11px' },
        's-3': { value: '12px' },
        's-2': { value: '13px' },
        's-1': { value: '15px' },
      },
      sizes: {
        container: { value: '28rem' }
      }
    },
    breakpoints: {
      xs: '350px',
      sm: '700px',
      md: '1000px',
      lg: '1200px',
    },
  },
})
