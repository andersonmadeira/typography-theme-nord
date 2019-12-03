const theme = {
  title: 'Nord',
  baseFontSize: '16px',
  baseLineHeight: '1.5',
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Rubik',
      styles: ['400']
    }
  ],
  headerFontFamily: ['Rubik', 'sans-serif'],
  bodyFontFamily: ['Rubik', 'sans-serif'],
  bodyColor: '#434C5E',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 400,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.1
    },
    a: {
      color: options.bodyColor,
      textDecoration: 'underline'
    },
    'a:hover,a:active': {
      color: '#88C0D0'
    },
    blockquote: {
      ...scale(1 / 5),
      color: '#4C566A',
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid #4C566A`
    },
    'blockquote > :last-child': {
      marginBottom: 0
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight
    },
    'blockquote cite:before': {
      content: '"— "'
    }
  })
}

export default theme
