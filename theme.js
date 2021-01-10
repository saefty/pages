import { minWidth } from "styled-system";

export const theme = {
	breakpoints: ['40em', '52em', '64em'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fonts: {
	  body:
		'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
	  heading: 'inherit',
	  monospace: 'Menlo, monospace',
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
	fontWeights: {
	  body: 400,
	  heading: 700,
	  bold: 700,
	},
	lineHeights: {
	  body: 1.5,
	  heading: 1.4,
	},
	colors: {
	  text: '#121619',
	  background: '#fff',
	  primary: '#006C67',
	  secondary: '#BA1F33',
	  muted: '#F3A712',
	  snow: '#FFFBFF'
	},
	layout: {
		nav: {
			position: 'sticky',
			backgroundColor: 'primary',
		},
		split: {
			height: '100%',
		},
		splitLeft: {
			minWidth: '300px',
			maxWidth: '500px',
			flex: '1 1 auto',
		},
		splitRight: {
			backgroundColor: 'primary',
			color: 'snow',
			minWidth: '50%',
			flex: '1 1 auto',
		}
	},
	text: {
	  heading: {
		fontFamily: 'heading',
		lineHeight: 'heading',
		fontWeight: 'heading',
	  },
	},
	styles: {
	  root: {
		fontFamily: 'body',
		lineHeight: 'body',
		fontWeight: 'body',
	  },
	  h1: {
		variant: 'text.heading',
		fontSize: 5,
	  },
	  h2: {
		variant: 'text.heading',
		fontSize: 4,
	  },
	  h3: {
		variant: 'text.heading',
		fontSize: 3,
	  },
	  h4: {
		variant: 'text.heading',
		fontSize: 2,
	  },
	  h5: {
		variant: 'text.heading',
		fontSize: 1,
	  },
	  h6: {
		variant: 'text.heading',
		fontSize: 0,
	  },
	  pre: {
		fontFamily: 'monospace',
		overflowX: 'auto',
		code: {
		  color: 'inherit',
		},
	  },
	  code: {
		fontFamily: 'monospace',
		fontSize: 'inherit',
	  },
	  table: {
		width: '100%',
		borderCollapse: 'separate',
		borderSpacing: 0,
	  },
	  th: {
		textAlign: 'left',
		borderBottomStyle: 'solid',
	  },
	  td: {
		textAlign: 'left',
		borderBottomStyle: 'solid',
	  },
	}
  }
