/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: ["Inter", "sans-serif"],
  			mono: ["Roboto Mono", "monospace"]
  		},
  		fontSize: {
  			xs: ["0.75rem", { lineHeight: "1.5" }],
  			sm: ["0.875rem", { lineHeight: "1.5715" }],
  			base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
  			lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
  			xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
  			'2xl': ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.037em" }],
  			'3xl': ["1.875rem", { lineHeight: "1.3333", letterSpacing: "-0.037em" },],
  			'4xl': ["2.25rem", { lineHeight: "1.2777", letterSpacing: "-0.037em" }],
  			'5xl': ["3rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
  			'6xl': ["4rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
  			'7xl': ["4.5rem", { lineHeight: "1", letterSpacing: "-0.037em" }]
  		},
  		keyframes: {
  			'code-1': {
  				'0%': {
  					opacity: '0'
  				},
  				'2.5%': {
  					opacity: '1'
  				},
  				'97.5%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			'code-2': {
  				'16.2%': {
  					opacity: '0'
  				},
  				'18.75%': {
  					opacity: '1'
  				},
  				'97.5%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			'code-3': {
  				'32.5%': {
  					opacity: '0'
  				},
  				'35%': {
  					opacity: '1'
  				},
  				'97.5%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			'code-4': {
  				'48.75%': {
  					opacity: '0'
  				},
  				'51.25%': {
  					opacity: '1'
  				},
  				'97.5%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			'code-5': {
  				'65%': {
  					opacity: '0'
  				},
  				'72.5%': {
  					opacity: '1'
  				},
  				'97.5%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			'code-6': {
  				'81.25%': {
  					opacity: '0'
  				},
  				'83.75%': {
  					opacity: '1'
  				},
  				'97.5%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			breath: {
  				'0%, 100%': {
  					transform: 'scale(0.95)'
  				},
  				'50%': {
  					transform: 'scale(1.1)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-5%)'
  				}
  			},
  			line: {
  				'0%, 100%': {
  					left: '0',
  					opacity: '0'
  				},
  				'50%': {
  					left: '100%',
  					transform: 'translateX(-100%)'
  				},
  				'10%, 40%, 60%, 90%': {
  					opacity: '0'
  				},
  				'25%, 75%': {
  					opacity: '1'
  				}
  			},
  			'infinite-scroll': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(-100%)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
