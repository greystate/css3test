window.Specs = {
	"css3-background": {
		"title": "Backgrounds and Borders Level 3",
		"links": {
			"tr": "css-backgrounds-3",
			"dev": "css-backgrounds"
		},
		"properties": {
			"background-repeat": {
				"links": {
					"tr": "#the-background-repeat",
					"dev": "#background-repeat"
				},
				"tests": ["space", "round"].concat(["repeat", "space", "round", "no-repeat"].times(2))
			},
			"background-attachment": {
				"links": {
					"tr": "#the-background-attachment",
					"dev": "#background-attachment"
				},
				"tests": "local"
			},
			"background-position": {
				"links": {
					"tr": "#the-background-position",
					"dev": "#background-position"
				},
				"tests": ["bottom 10px right 20px", "bottom 10px right", "top right 10px"]
			},
			"background-clip": {
				"links": {
					"tr": "#the-background-clip",
					"dev": "#background-clip"
				},
				"tests": ["border-box", "padding-box", "content-box"]
			},
			"background-origin": {
				"links": {
					"tr": "#the-background-origin",
					"dev": "#background-origin"
				},
				"tests": ["border-box", "padding-box", "content-box"]
			},
			"background-size": {
				"links": {
					"tr": "#the-background-size",
					"dev": "#background-size"
				},
				"tests": ["auto", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"]
			},
			"background": {
				"links": {
					"tr": "#the-background",
					"dev": "#background"
				},
				"tests": [
					"url(foo.png), url(bar.svg)",
					"top left / 50% 60%",
					"border-box",
					"border-box padding-box",
					"url(foo.png) bottom right / cover padding-box content-box"
				]
			},
			"border-top-left-radius": {
				"links": {
					"tr": "#the-border-radius",
					"dev": "#border-radius"
				},
				"tests": ["0", "50%", "250px 100px"]
			},
			"border-top-right-radius": {
				"links": {
					"tr": "#the-border-radius",
					"dev": "#border-radius"
				},
				"tests": ["0", "50%", "250px 100px"]
			},
			"border-bottom-right-radius": {
				"links": {
					"tr": "#the-border-radius",
					"dev": "#border-radius"
				},
				"tests": ["0", "50%", "250px 100px"]
			},
			"border-bottom-left-radius": {
				"links": {
					"tr": "#the-border-radius",
					"dev": "#border-radius"
				},
				"tests": ["0", "50%", "250px 100px"]
			},
			"border-radius": {
				"links": {
					"tr": "#the-border-radius",
					"dev": "#border-radius"
				},
				"tests": ["10px", "50%", "10px / 20px", "2px 4px 8px 16px", "2px 4px 8px 16px / 2px 4px 8px 16px"]
			},
			"border-image-source": {
				"links": {
					"tr": "#the-border-image-source",
					"dev": "#border-image-source"
				},
				"tests": ["none", "url(foo.png)"]
			},
			"border-image-slice": {
				"links": {
					"tr": "#the-border-image-slice",
					"dev": "#border-image-slice"
				},
				"tests": ["10", "30%"].times(1, 4).concat(["fill 30%", "fill 10", "fill 2 4 8% 16%", "30% fill", "10 fill", "2 4 8% 16% fill"])
			},
			"border-image-width": {
				"links": {
					"tr": "#the-border-image-width",
					"dev": "#border-image-width"
				},
				"tests": ["10px", "5%", "28", "auto", "10px 10px", "5% 10px", "28 10px", "auto 10px", "10px 5%", "5% 5%", "28 5%", "auto 5%", "10px 28", "5% 28", "28 28", "auto 28", "10px auto", "5% auto", "28 auto", "auto auto", "10px 10% 10", "5% 10px 20 auto"]
			},
			"border-image-outset": {
				"links": {
					"tr": "#the-border-image-outset",
					"dev": "#border-image-outset"
				},
				"tests": ["10px", "20", "10px 20", "10px 20px", "20 30", "2px 3px 4", "1 2px 3px 4"]
			},
			"border-image-repeat": {
				"links": {
					"tr": "#the-border-image-repeat",
					"dev": "#border-image-repeat"
				},
				"tests": ["stretch", "repeat", "round", "space"].times(1, 2)
			},
			"border-image": {
				"links": {
					"tr": "#the-border-image",
					"dev": "#border-image"
				},
				"tests": [
					"url(foo.png) 10", "url(foo.png) 10%", "url(foo.png) 10% fill",
					"url(foo.png) 10 round", "url(foo.png) 10 stretch repeat",
					"url(foo.png) 10 / 10px", "url(foo.png) 10 / 10% / 10px",
					"url(foo.png) fill 10 / 10% / 10px", "url(foo.png) fill 10 / 10% / 10px space"
				]
			},
			"box-shadow": {
				"links": {
					"tr": "#the-box-shadow",
					"dev": "#box-shadow"
				},
				"tests": [
					"1px 1px", "0 0 black", "1px 2px 3px black", "1px 2px 3px 4px black",
					"inset 1px 1px", "1px 2px 3px 4px black inset"
				]
			}
		}
	},

	"css-backgrounds-4": {
		"title": "Backgrounds and Borders Level 4",
		"links": {
			"dev": "css-backgrounds-4",
		},
		"properties": {
			"background-position-x": {
				"links": {
					"dev": "#background-position-longhands"
				},
				"tests": ["right", "center", "50%", "left, left", "left, right", "right, left", "left, 0%", "10%, 20%, 40%", "0px", "30px", "0%, 10%, 20%, 30%", "left, left, left, left, left", "calc(20px)", "calc(20px + 1em)", "calc(20px / 2)", "calc(20px + 50%)", "calc(50% - 10px)", "calc(-20px)", "calc(-50%)", "calc(-20%)", "right 20px", "left 20px", "right -50px", "left -50px", "right 20px"]
			},
			"background-position-y": {
				"links": {
					"dev": "#background-position-longhands"
				},
				"tests": ["bottom", "center", "50%", "top, top", "top, bottom", "bottom, top", "top, 0%", "10%, 20%, 40%", "0px", "30px", "0%, 10%, 20%, 30%", "top, top, top, top, top", "calc(20px)", "calc(20px + 1em)", "calc(20px / 2)", "calc(20px + 50%)", "calc(50% - 10px)", "calc(-20px)", "calc(-50%)", "calc(-20%)", "bottom 20px", "top 20px", "bottom -50px", "top -50px", "bottom 20px"]
			}
		}
	},

	"css3-images": {
		"title": "Image Values Level 3",
		"links": {
			"tr": "css3-images",
			"dev": "css-images-3"
		},
		"values": {
			"properties": [
				"background-image",
				"list-style-image",
				"border-image",
				"cursor",
				"content"
			],
			"linear-gradient()": {
				"links": {
					"tr": "#linear-gradients",
					"dev": "#linear-gradients"
				},
				"tests": [
					"linear-gradient(white, black)",
					"linear-gradient(to right, white, black)",
					"linear-gradient(45deg, white, black)",
					"linear-gradient(white 50%, black)",
					"linear-gradient(white 5px, black)",
					"linear-gradient(white, #f06, black)",
					"linear-gradient(currentColor, black)",
					"linear-gradient(red -50px, white calc(-25px + 50%), blue 100%)"
				]
			},
			"radial-gradient()": {
				"links": {
					"tr": "#radial-gradients",
					"dev": "#radial-gradients"
				},
				"tests": [
					"radial-gradient(white, black)",
					"radial-gradient(circle, white, black)",
					"radial-gradient(ellipse, white, black)",
					"radial-gradient(closest-corner, white, black)",
					"radial-gradient(circle closest-corner, white, black)",
					"radial-gradient(farthest-side, white, black)",
					"radial-gradient(circle farthest-side, white, black)",
					"radial-gradient(50%, white, black)",
					"radial-gradient(60% 60%, white, black)"/*,
					"radial-gradient(at 60% 60%, white, black)",
					"radial-gradient(30% 30% at 20% 20%, white, black)",
					"radial-gradient(5em circle at top left, yellow, blue)",
					"radial-gradient(circle farthest-side at top left, white, black)"*/
				]
			},
			"repeating-linear-gradient()": {
				"links": {
					"tr": "#repeating-gradients",
					"dev": "#repeating-gradients"
				},
				"tests": "repeating-linear-gradient(white, black)"
			},
			"repeating-radial-gradient()": {
				"links": {
					"tr": "#repeating-gradients",
					"dev": "#repeating-gradients"
				},
				"tests": "repeating-radial-gradient(white, black)"
			},
		},
		"properties": {
			"object-fit": {
				"links": {
					"tr": "#object-fit",
					"dev": "#the-object-fit"
				},
				"tests": ["fill", "contain", "cover", "none", "scale-down"]
			},
			"object-position": {
				"links": {
					"tr": "#object-position",
					"dev": "#the-object-position"
				},
				"tests": ["50% 50%", "center", "top right", "bottom 10px right 20px"]
			},
			"image-orientation": {
				"links": {
					"tr": "#image-orientation",
					"dev": "#the-image-orientation"
				},
				"tests": ["from-image", "0deg", "90deg", "45deg", "45deg flip", "1turn", "100grad", "2rad"]
			},
			"image-rendering": {
				"links": {
					"dev": "#the-image-rendering"
				},
				"tests": ["auto", "smooth", "high-quality", "crisp-edges", "pixelated"]
			},
		}
	},

	"css-images-4": {
		"title": "Image Values Level 4",
		"links": {
			"tr": "css-images-4",
			"dev": "css-images-4"
		},
		"values": {
			"properties": [
				"background-image",
				"list-style-image",
				"border-image",
				"cursor",
				"content"
			],
			"linear-gradient()": {
				"links": {
					"tr": "#linear-gradients",
					"dev": "#linear-gradients"
				},
				"tests": [
					"linear-gradient(45deg, #f06 25%, yellow 25% 50%, #f06 50% 75%, yellow 75%)"
				]
			},
			"radial-gradient()": {
				"links": {
					"tr": "#radial-gradients",
					"dev": "#radial-gradients"
				},
				"tests": [
					"radial-gradient(center, red 0% 25%, blue 25% 75%, red 75% 100%)"
				]
			},
			"conic-gradient()": {
				"links": {
					"tr": "#conic-gradients",
					"dev": "#conic-gradients"
				},
				"tests": [
					"conic-gradient(white, black)",
					"conic-gradient(from 5deg, white, black)",
					"conic-gradient(at top left, white, black)",
					"conic-gradient(white 50%, black)",
					"conic-gradient(white 5deg, black)",
					"conic-gradient(white, #f06, black)",
					"conic-gradient(currentColor, black)",
					"conic-gradient(black 25%, white 0deg 50%, black 0deg 75%, white 0deg)"
				]
			},
			"repeating-conic-gradient()": {
				"links": {
					"tr": "#repeating-gradients",
					"dev": "#repeating-gradients"
				},
				"tests": [
					"repeating-conic-gradient(white, black)",
					"repeating-conic-gradient(hsla(0, 0%, 100%, .2) 0deg 15deg, hsla(0, 0%, 100%, 0) 0deg 30deg)"
				]
			},
			"image()": {
				"links": {
					"tr": "#image-notation",
					"dev": "#image-notation"
				},
				"tests": [
					"image('sprites.png#xywh=10,30,60,20')",
					"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
					"image('dark.png', black)",
					"image(green)"
				]
			},
			"image-set()": {
				"links": {
					"tr": "#image-set-notation",
					"dev": "#image-set-notation"
				},
				"tests": [
					"image-set('foo.png' 1x, 'foo-2x.png' 2x, 'foo-print.png' 600dpi)"
				]
			},
			"element()": {
				"links": {
					"tr": "#element-notation",
					"dev": "#element-notation"
				},
				"tests": "element(#foo)"
			},
			"cross-fade()": {
				"links": {
					"tr": "#cross-fade-function",
					"dev": "#cross-fade-function"
				},
				"tests": [
					"cross-fade(url(a.png), url(b.png))",
					"cross-fade(url(a.png) 50%, url(b.png))",
					"cross-fade(url(a.png) 50%, white)"
				]
			}
		},
		"properties": {
			"image-resolution": {
				"links": {
					"tr": "#the-image-resolution",
					"dev": "#the-image-resolution"
				},
				"tests": [
					"from-image", "from-image snap", "snap from-image",
					"1dppx", "1dpcm", "300dpi", "from-image 300dpi", "300dpi from-image", "300dpi from-image snap"
				]
			}
		}
	},

	"css3-selectors": {
		"title": "Selectors Level 3",
		"links": {
			"tr": "selectors-3",
			"dev": "selectors-3"
		},
		"selectors": {
			"Sibling combinator": {
				"links": {
					"tr": "#sibling-combinators",
					"dev": "#sibling-combinators"
				},
				"tests": "foo ~ bar"
			},
			"::before": {
				"links": {
					"tr": "#gen-content",
					"dev": "#gen-content"
				},
				"tests": "::before"
			},
			"::after": {
				"links": {
					"tr": "#gen-content",
					"dev": "#gen-content"
				},
				"tests": "::after"
			},
			"::first-letter": {
				"links": {
					"tr": "#first-letter",
					"dev": "#first-letter"
				},
				"tests": "::first-letter"
			},
			"::first-line": {
				"links": {
					"tr": "#first-line",
					"dev": "#first-line"
				},
				"tests": "::first-line"
			},
			"[att^=val]": {
				"links": {
					"tr": "#attribute-substrings",
					"dev": "#attribute-substrings"
				},
				"tests": ["[att^=val]", "[att^=\"val\"]"]
			},
			"[att*=val]": {
				"links": {
					"tr": "#attribute-substrings",
					"dev": "#attribute-substrings"
				},
				"tests": ["[att*=val]", "[att*=\"val\"]"]
			},
			"[att$=val]": {
				"links": {
					"tr": "#attribute-substrings",
					"dev": "#attribute-substrings"
				},
				"tests": ["[att$=val]", "[att$=\"val\"]"]
			},
			"Namespaces": {
				"links": {
					"tr": "#attrnmsp",
					"dev": "#attrnmsp"
				},
				"tests": ["*|html", "[*|attr]", "[*|attr=val]", "*|html[*|attr]"]
			},
			":target": {
				"links": {
					"tr": "#target-pseudo",
					"dev": "#target-pseudo"
				},
				"tests": ":target"
			},
			":enabled": {
				"links": {
					"tr": "#enableddisabled",
					"dev": "#enableddisabled"
				},
				"tests": ":enabled"
			},
			":disabled": {
				"links": {
					"tr": "#enableddisabled",
					"dev": "#enableddisabled"
				},
				"tests": ":disabled"
			},
			":checked": {
				"links": {
					"tr": "#checked",
					"dev": "#checked"
				},
				"tests": ":checked"
			},
			":indeterminate": {
				"links": {
					"tr": "#indeterminate",
					"dev": "#indeterminate"
				},
				"tests": ":indeterminate"
			},
			":root": {
				"links": {
					"tr": "#root-pseudo",
					"dev": "#root-pseudo"
				},
				"tests": ":root"
			},
			":nth-child": {
				"links": {
					"tr": "#nth-child-pseudo",
					"dev": "#nth-child-pseudo"
				},
				"tests": [
					":nth-child(even)", ":nth-child(odd)",
					":nth-child(n)", ":nth-child(-n)", ":nth-child(0n)",
					":nth-child(1)", ":nth-child(-1)", ":nth-child(0)",
					":nth-child(n+1)", ":nth-child(3n+1)", ":nth-child(3n + 1)",
					":nth-child(-n+1)", ":nth-child(-n-1)", ":nth-child(3n-1)"
				]
			},
			":nth-last-child": {
				"links": {
					"tr": "#nth-last-child-pseudo",
					"dev": "#nth-last-child-pseudo"
				},
				"tests": [
					":nth-last-child(even)", ":nth-last-child(odd)",
					":nth-last-child(n)", ":nth-last-child(-n)", ":nth-last-child(0n)",
					":nth-last-child(1)", ":nth-last-child(-1)", ":nth-last-child(0)",
					":nth-last-child(n+1)", ":nth-last-child(3n+1)", ":nth-last-child(3n + 1)",
					":nth-last-child(-n+1)", ":nth-last-child(-n-1)", ":nth-last-child(3n-1)"
				]
			},
			":nth-of-type": {
				"links": {
					"tr": "#nth-of-type-pseudo",
					"dev": "#nth-of-type-pseudo"
				},
				"tests": [
					":nth-of-type(even)", ":nth-of-type(odd)",
					":nth-of-type(n)", ":nth-of-type(-n)", ":nth-of-type(0n)",
					":nth-of-type(1)", ":nth-of-type(-1)", ":nth-of-type(0)",
					":nth-of-type(n+1)", ":nth-of-type(3n+1)", ":nth-of-type(3n + 1)",
					":nth-of-type(-n+1)", ":nth-of-type(-n-1)", ":nth-of-type(3n-1)"
				]
			},
			":nth-last-of-type": {
				"links": {
					"tr": "#nth-last-of-type-pseudo",
					"dev": "#nth-last-of-type-pseudo"
				},
				"tests": [
					":nth-last-of-type(even)", ":nth-last-of-type(odd)",
					":nth-last-of-type(n)", ":nth-last-of-type(-n)", ":nth-last-of-type(0n)",
					":nth-last-of-type(1)", ":nth-last-of-type(-1)", ":nth-last-of-type(0)",
					":nth-last-of-type(n+1)", ":nth-last-of-type(3n+1)", ":nth-last-of-type(3n + 1)",
					":nth-last-of-type(-n+1)", ":nth-last-of-type(-n-1)", ":nth-last-of-type(3n-1)"
				]
			},
			":last-child": {
				"links": {
					"tr": "#last-child-pseudo",
					"dev": "#last-child-pseudo"
				},
				"tests": ":last-child"
			},
			":only-child": {
				"links": {
					"tr": "#only-child-pseudo",
					"dev": "#only-child-pseudo"
				},
				"tests": ":only-child"
			},
			":first-of-type": {
				"links": {
					"tr": "#first-of-type-pseudo",
					"dev": "#first-of-type-pseudo"
				},
				"tests": ":first-of-type"
			},
			":last-of-type": {
				"links": {
					"tr": "#last-of-type-pseudo",
					"dev": "#last-of-type-pseudo"
				},
				"tests": ":last-of-type"
			},
			":only-of-type": {
				"links": {
					"tr": "#only-of-type-pseudo",
					"dev": "#only-of-type-pseudo"
				},
				"tests": ":only-of-type"
			},
			":empty": {
				"links": {
					"tr": "#empty-pseudo",
					"dev": "#empty-pseudo"
				},
				"tests": ":empty"
			},
			":not()": {
				"links": {
					"tr": "#negation",
					"dev": "#negation"
				},
				"tests": [":not(*)", ":not(element)", ":not(.class):not(#id):not([attr]):not(:link)"]
			}
		}
	},

	"selectors": {
		"title": "Selectors Level 4",
		"links": {
			"tr": "selectors-4",
			"dev": "selectors-4"
		},
		"selectors": {
			":indeterminate": {
				"links": {
					"tr": "#indeterminate",
					"dev": "#indeterminate"
				},
				"tests": ":indeterminate"
			},
			":blank": {
				"links": {
					"tr": "#blank",
					"dev": "#blank"
				},
				"tests": ":blank"
			},
			":placeholder-shown": {
				"links": {
					"tr": "#placeholder",
					"dev": "#placeholder"
				},
				"tests": ":placeholder-shown"
			},
			":default": {
				"links": {
					"tr": "#the-default-pseudo",
					"dev": "#the-default-pseudo"
				},
				"tests": ":default"
			},
			":valid": {
				"links": {
					"tr": "#validity-pseudos",
					"dev": "#validity-pseudos"
				},
				"tests": ":valid"
			},
			":invalid": {
				"links": {
					"tr": "#validity-pseudos",
					"dev": "#validity-pseudos"
				},
				"tests": ":invalid"
			},
			":in-range": {
				"links": {
					"tr": "#range-pseudos",
					"dev": "#range-pseudos"
				},
				"tests": ":in-range"
			},
			":out-of-range": {
				"links": {
					"tr": "#range-pseudos",
					"dev": "#range-pseudos"
				},
				"tests": ":out-of-range"
			},
			":required": {
				"links": {
					"tr": "#opt-pseudos",
					"dev": "#opt-pseudos"
				},
				"tests": ":required"
			},
			":optional": {
				"links": {
					"tr": "#opt-pseudos",
					"dev": "#opt-pseudos"
				},
				"tests": ":optional"
			},
			":read-only": {
				"links": {
					"tr": "#rw-pseudos",
					"dev": "#rw-pseudos"
				},
				"tests": ":read-only"
			},
			":read-write": {
				"links": {
					"tr": "#rw-pseudos",
					"dev": "#rw-pseudos"
				},
				"tests": ":read-write"
			},
			":focus-visible": {
				"links": {
					"tr": "#the-focus-visible-pseudo",
					"dev": "#the-focus-visible-pseudo"
				},
				"tests": ":focus-visible"
			},
			":focus-within": {
				"links": {
					"tr": "#the-focus-within-pseudo",
					"dev": "#the-focus-within-pseudo"
				},
				"tests": ":focus-within"
			},
			":current": {
				"links": {
					"tr": "#the-current-pseudo",
					"dev": "#the-current-pseudo"
				},
				"tests": ":current"
			},
			":current()": {
				"links": {
					"tr": "#the-current-pseudo",
					"dev": "#the-current-pseudo"
				},
				"tests": ":current(p, li, dt, dd)"
			},
			":past": {
				"links": {
					"tr": "#the-past-pseudo",
					"dev": "#the-past-pseudo"
				},
				"tests": ":past"
			},
			":future": {
				"links": {
					"tr": "#the-future-pseudo",
					"dev": "#the-future-pseudo"
				},
				"tests": ":future"
			},
			":scope": {
				"links": {
					"tr": "#the-scope-pseudo",
					"dev": "#the-scope-pseudo"
				},
				"tests": ":scope"
			},
			":any-link": {
				"links": {
					"tr": "#the-any-link-pseudo",
					"dev": "#the-any-link-pseudo"
				},
				"tests": ":any-link"
			},
			":local-link": {
				"links": {
					"tr": "#the-local-link-pseudo",
					"dev": "#the-local-link-pseudo"
				},
				"tests": ":local-link"
			},
			":target-within": {
				"links": {
					"tr": "#the-target-within-pseudo",
					"dev": "#the-target-within-pseudo"
				},
				"tests": ":target-within"
			},
			":lang()": {
				"links": {
					"tr": "#the-lang-pseudo",
					"dev": "#the-lang-pseudo"
				},
				"tests": [":lang(zh, \"*-hant\")"]
			},
			":not()": {
				"links": {
					"tr": "#negation",
					"dev": "#negation"
				},
				"tests": [":not(em, #foo)"]
			},
			":where()": {
				"links": {
					"tr": "#zero-matches",
					"dev": "#zero-matches"
				},
				"tests": [":where(em, #foo)", ":where(:not(:hover))"]
			},
			":is()": {
				"links": {
					"tr": "#matches",
					"dev": "#matches"
				},
				"tests": [":is(em, #foo)", ":is(:not(:hover))"]
			},
			":has()": {
				"links": {
					"tr": "#relational",
					"dev": "#relational"
				},
				"tests": [
					"a:has(> img)",
					"dt:has(+ dt)",
					"section:not(:has(h1, h2, h3, h4, h5, h6))",
					"section:has(:not(h1, h2, h3, h4, h5, h6))"
				]
			},
			":nth-child of": {
				"links": {
					"tr": "#the-nth-child-pseudo",
					"dev": "#the-nth-child-pseudo"
				},
				"tests": [":nth-child(-n+3 of li.important)", ":nth-child(even of :not([hidden])"]
			},
			"||": {
				"links": {
					"tr": "#the-column-combinator",
					"dev": "#the-column-combinator"
				},
				"tests": "foo || bar"
			},
			":nth-col()": {
				"links": {
					"tr": "#the-nth-col-pseudo",
					"dev": "#the-nth-col-pseudo"
				},
				"tests": [
					":nth-col(even)", ":nth-col(odd)",
					":nth-col(n)", ":nth-col(-n)", ":nth-col(0n)",
					":nth-col(1)", ":nth-col(-1)", ":nth-col(0)",
					":nth-col(n+1)", ":nth-col(3n+1)", ":nth-col(3n + 1)",
					":nth-col(-n+1)", ":nth-col(-n-1)", ":nth-col(3n-1)"
				]
			},
			":nth-last-col()": {
				"links": {
					"tr": "#the-nth-last-col-pseudo",
					"dev": "#the-nth-last-col-pseudo"
				},
				"tests": [
					":nth-last-col(even)", ":nth-last-col(odd)",
					":nth-last-col(n)", ":nth-last-col(-n)", ":nth-last-col(0n)",
					":nth-last-col(1)", ":nth-last-col(-1)", ":nth-last-col(0)",
					":nth-last-col(n+1)", ":nth-last-col(3n+1)", ":nth-last-col(3n + 1)",
					":nth-last-col(-n+1)", ":nth-last-col(-n-1)", ":nth-last-col(3n-1)"
				]
			},
			"[att^=val i]": {
				"links": {
					"tr": "#attribute-case",
					"dev": "#attribute-case"
				},
				"tests": ["[att^=val i]", "[att^=\"val\" i]", "[att^=val I]", "[att^=\"val\" I]"]
			},
			"[att*=val i]": {
				"links": {
					"tr": "#attribute-case",
					"dev": "#attribute-case"
				},
				"tests": ["[att*=val i]", "[att*=\"val\" i]", "[att*=val I]", "[att*=\"val\" I]"]
			},
			"[att$=val i]": {
				"links": {
					"tr": "#attribute-case",
					"dev": "#attribute-case"
				},
				"tests": ["[att$=val i]", "[att$=\"val\" i]", "[att$=val I]", "[att$=\"val\" I]"]
			},
			"[att^=val s]": {
				"links": {
					"tr": "#attribute-case",
					"dev": "#attribute-case"
				},
				"tests": ["[att^=val s]", "[att^=\"val\" s]", "[att^=val S]", "[att^=\"val\" S]"]
			},
			"[att*=val s]": {
				"links": {
					"tr": "#attribute-case",
					"dev": "#attribute-case"
				},
				"tests": ["[att*=val s]", "[att*=\"val\" s]", "[att*=val S]", "[att*=\"val\" S]"]
			},
			"[att$=val s]": {
				"links": {
					"tr": "#attribute-case",
					"dev": "#attribute-case"
				},
				"tests": ["[att$=val s]", "[att$=\"val\" s]", "[att$=val S]", "[att$=\"val\" S]"]
			}
		}
	},

	"css-pseudo": {
		"title": "Pseudo-Elements Level 4",
		"links": {
			"tr": "css-pseudo",
			"dev": "css-pseudo-4"
		},
		"selectors": {
			"::selection": {
				"links": {
					"tr": "#highlight-selectors",
					"dev": "#highlight-selectors"
				},
				"tests": ["::selection"]
			},
			"::inactive-selection": {
				"links": {
					"tr": "#highlight-selectors",
					"dev": "#highlight-selectors"
				},
				"tests": ["::inactive-selection"]
			},
			"::spelling-error": {
				"links": {
					"tr": "#highlight-selectors",
					"dev": "#highlight-selectors"
				},
				"tests": ["::spelling-error"]
			},
			"::grammar-error": {
				"links": {
					"tr": "#highlight-selectors",
					"dev": "#highlight-selectors"
				},
				"tests": ["::grammar-error"]
			},
			"::marker": {
				"links": {
					"tr": "#marker-pseudo",
					"dev": "#marker-pseudo"
				},
				"tests": ["::marker"]
			},
			"::placeholder": {
				"links": {
					"tr": "#placeholder-pseudo",
					"dev": "#placeholder-pseudo"
				},
				"tests": ["::placeholder"]
			}
		}
	},

	"css-scoping": {
		"title": "Scoping Level 1",
		"links": {
			"tr": "css-scoping",
			"dev": "css-scoping"
		},
		"selectors": {
			":host": {
				"links": {
					"tr": "#host-selector",
					"dev": "#host-selector"
				},
				"tests": ":host"
			},
			":host()": {
				"links": {
					"tr": "#host-selector",
					"dev": "#host-selector"
				},
				"tests": [":host(*)", ":host(.foo)"]
			},
			":host-context()": {
				"links": {
					"tr": "#host-selector",
					"dev": "#host-selector"
				},
				"tests": [":host-context(*)", ":host-context(.foo)"]
			},
			"::slotted()": {
				"links": {
					"dev": "#slotted-pseudo"
				},
				"tests": ["::slotted(*)", "::slotted(.foo)"]
			}
		}
	},

	/*
	 * Note: the following media queries must be true in supporting UAs!
	 */
	"css3-mediaqueries": {
		"title": "Media Queries Level 3",
		"links": {
			"tr": "css3-mediaqueries",
			"dev": "mediaqueries-3"
		},
		"Media queries": {
			"negation": {
				"links": {
					"tr": "#media0",
					"dev": "#media0"
				},
				"tests": ["not print", "not all and (width:1px)"]
			},
			"width": {
				"links": {
					"tr": "#width",
					"dev": "#width"
				},
				"tests": ["(width)", "(min-width:1px)", "(max-width:1000000px)"]
			},
			"height": {
				"links": {
					"tr": "#height",
					"dev": "#height"
				},
				"tests": ["(height)", "(min-height:1px)", "(max-height:1000000px)"]
			},
			"device-width": {
				"links": {
					"tr": "#device-width",
					"dev": "#device-width"
				},
				"tests": ["(device-width)", "(min-device-width:1px)", "(max-device-width:1000000px)"]
			},
			"device-height": {
				"links": {
					"tr": "#device-height",
					"dev": "#device-height"
				},
				"tests": ["(device-height)", "(min-device-height:1px)", "(max-device-height:1000000px)"]
			},
			"orientation": {
				"links": {
					"tr": "#orientation",
					"dev": "#orientation"
				},
				"tests": "(orientation:portrait), (orientation:landscape)"
			},
			"aspect-ratio": {
				"links": {
					"tr": "#aspect-ratio",
					"dev": "#aspect-ratio"
				},
				"tests": [
					"(aspect-ratio)",
					"(min-aspect-ratio:1/1000000)",
					"(min-aspect-ratio:1 / 1000000)",
					"(max-aspect-ratio:1000000/1)",
				]
			},
			"device-aspect-ratio": {
				"links": {
					"tr": "#device-aspect-ratio",
					"dev": "#device-aspect-ratio"
				},
				"tests": [
					"(device-aspect-ratio)",
					"(min-device-aspect-ratio:1/1000000)",
					"(min-device-aspect-ratio:1 / 1000000)",
					"(max-device-aspect-ratio:1000000/1)",
				]
			},
			"color": {
				"links": {
					"tr": "#color",
					"dev": "#color"
				},
				"tests": [
					"(color)", "(min-color: 0)", "(max-color: 100)"
				]
			},
			"color-index": {
				"links": {
					"tr": "#color-index",
					"dev": "#color-index"
				},
				"tests": [
					"all, (color-index)",
					"(min-color-index: 0)",
					"(max-color-index: 10000000)"
				]
			},
			"monochrome": {
				"links": {
					"tr": "#monochrome",
					"dev": "#monochrome"
				},
				"tests": [
					"all, (monochrome)", "(min-monochrome: 0)", "(max-monochrome: 10000)"
				]
			},
			"resolution": {
				"links": {
					"tr": "#resolution",
					"dev": "#resolution"
				},
				"tests": [
					"(resolution)",
					"(min-resolution: 1dpi)",
					"(max-resolution: 1000000dpi)",
					"(max-resolution: 1000000dpcm)"
				]
			},
			"scan": {
				"links": {
					"tr": "#scan",
					"dev": "#scan"
				},
				"tests": ["not tv, (scan: progressive)", "not tv, (scan: interlace)"]
			},
			"grid": {
				"links": {
					"tr": "#grid",
					"dev": "#grid"
				},
				"tests": ["all, (grid)", "(grid: 0), (grid: 1)"]
			}
		}
	},

	"mediaqueries-4": {
		"title": "Media Queries Level 4",
		"links": {
			"tr": "mediaqueries-4",
			"dev": "mediaqueries-4"
		},
		"Media queries": {
			"resolution": {
				"links": {
					"tr": "#resolution",
					"dev": "#resolution"
				},
				"tests": ["(resolution: infinite)"]
			},
			"hover": {
				"links": {
					"tr": "#hover",
					"dev": "#hover"
				},
				"tests": ["(hover)", "(hover: none)", "(hover: hover)"]
			},
			"any-hover": {
				"links": {
					"tr": "#any-input",
					"dev": "#any-input"
				},
				"tests": ["(any-hover)", "(any-hover: none)", "(any-hover: hover)"]
			},
			"pointer": {
				"links": {
					"tr": "#pointer",
					"dev": "#pointer"
				},
				"tests": ["(pointer)", "(pointer: none)", "(pointer: coarse)", "(pointer: fine)"]
			},
			"any-pointer": {
				"links": {
					"tr": "#any-input",
					"dev": "#any-input"
				},
				"tests": ["(any-pointer)", "(any-pointer: none)", "(any-pointer: coarse)", "(any-pointer: fine)"]
			},
			"update": {
				"links": {
					"tr": "#update",
					"dev": "#update"
				},
				"tests": ["(update)", "(update: none)", "(update: slow)", "(update: fast)"]
			},
			"overflow-block": {
				"links": {
					"tr": "#mf-overflow-block",
					"dev": "#mf-overflow-block"
				},
				"tests": ["(overflow-block: none)", "(overflow-block: scroll)", "(overflow-block: optional-paged)", "(overflow-block: paged)"]
			},
			"overflow-inline": {
				"links": {
					"tr": "#mf-overflow-inline",
					"dev": "#mf-overflow-inline"
				},
				"tests": ["(overflow-inline: none)", "(overflow-inline: scroll)"]
			},
			"color-gamut": {
				"links": {
					"tr": "#color-gamut",
					"dev": "#color-gamut"
				},
				"tests": ["(color-gamut)", "(color-gamut: srgb)", "(color-gamut: p3)", "(color-gamut: rec2020)"]
			},
			"aspect-ratio": {
				"links": {
					"tr": "#aspect-ratio",
					"dev": "#aspect-ratio"
				},
				"tests": [
					"(aspect-ratio: 1280.1/720.01)",
					"(max-aspect-ratio: 1280.1/720.01)",
					"(min-aspect-ratio: 0.2)",
				]
			},
			"device-aspect-ratio": {
				"links": {
					"tr": "#device-aspect-ratio",
					"dev": "#device-aspect-ratio"
				},
				"tests": [
					"(device-aspect-ratio:1280.1/720.01)",
					"(max-device-aspect-ratio:1280.1/720.01)",
					"(min-device-aspect-ratio:0.2)",
				]
			}
		}
	},

	"mediaqueries-5": {
		"title": "Media Queries Level 5",
		"links": {
			"dev": "mediaqueries-5"
		},
		"Media queries": {
			"prefers-reduced-motion": {
				"links": {
					"dev": "#prefers-reduced-motion"
				},
				"tests": ["(prefers-reduced-motion: no-preference)", "(prefers-reduced-motion: reduce)"]
			},
			"prefers-reduced-transparency": {
				"links": {
					"dev": "#prefers-reduced-transparency"
				},
				"tests": ["(prefers-reduced-transparency: no-preference)", "(prefers-reduced-transparency: reduce)"]
			},
			"prefers-contrast": {
				"links": {
					"dev": "#prefers-contrast"
				},
				"tests": ["(prefers-contrast: no-preference)", "(prefers-contrast: high)", "(prefers-contrast: low)"]
			},
			"prefers-color-scheme": {
				"links": {
					"dev": "#prefers-color-scheme"
				},
				"tests": ["(prefers-color-scheme: no-preference)", "(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"]
			},
			"scripting": {
				"links": {
					"dev": "#scripting"
				},
				"tests": ["(scripting: none)", "(scripting: initial-only)", "(scripting: enabled)"]
			},
			"light-level": {
				"links": {
					"dev": "#light-level"
				},
				"tests": ["(light-level: dim)", "(light-level: normal)", "(light-level: washed)"]
			},
			"environment-blending": {
				"links": {
					"dev": "#environment-blending"
				},
				"tests": ["(environment-blending: opaque)", "(environment-blending: additive)", "(environment-blending: subtractive)"]
			},
			"inverted-colors": {
				"links": {
					"dev": "#inverted"
				},
				"tests": ["(inverted-colors: none)", "(light-level: inverted)"]
			}
		}
	},

	"css3-ui": {
		"title": "Basic User Interface Level 3",
		"links": {
			"tr": "css-ui-3",
			"dev": "css-ui-3"
		},
		"properties": {
			"box-sizing": {
				"links": {
					"tr": "#box-sizing",
					"dev": "#box-sizing"
				},
				"tests": ["border-box", "content-box"]
			},
			"outline-offset": {
				"links": {
					"tr": "#outline-offset",
					"dev": "#outline-offset"
				},
				"tests": ["-5px", "0", "5px"]
			},
			"resize": {
				"links": {
					"tr": "#resize",
					"dev": "#resize"
				},
				"tests": ["none", "both", "horizontal", "vertical"]
			},
			"text-overflow": {
				"links": {
					"tr": "#text-overflow",
					"dev": "#text-overflow"
				},
				"tests": ["clip", "ellipsis"]
			},
			"cursor": {
				"links": {
					"tr": "#cursor",
					"dev": "#cursor"
				},
				"tests": [
					"url(foo.png) 2 2, auto", "default", "none", "context-menu", "cell", "vertical-text", "alias", "copy", "no-drop", "not-allowed",
					"grab", "grabbing", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "col-resize", "row-resize", "all-scroll", "zoom-in",
					"zoom-out"
				]
			},
			"caret-color": {
				"links": {
					"tr": "#caret-color",
					"dev": "#caret-color"
				},
				"tests": ["auto", "green"]
			}
		}
	},

	"css-ui-4": {
		"title": "Basic User Interface Level 4",
		"links": {
			"tr": "css-ui-4",
			"dev": "css-ui-4"
		},
		"properties": {
			"appearance": {
				"links": {
					"tr": "#appearance-switching",
					"dev": "#appearance-switching"
				},
				"tests": ["auto", "none"]
			},
			"caret": {
				"links": {
					"tr": "#caret",
					"dev": "#caret"
				},
				"tests": ["auto", "green", "bar", "green bar"]
			},
			"caret-shape": {
				"links": {
					"tr": "#caret-shape",
					"dev": "#caret-shape"
				},
				"tests": ["auto", "bar", "block", "underscore"]
			},
			"text-overflow":["clip", "ellipsis", "fade", "fade(10px)", "fade(10%)", "'foo'"].times(1, 2),
			"user-select": {
				"links": {
					"tr": "#content-selection",
					"dev": "#content-selection"
				},
				"tests": ["auto", "text", "none", "contain", "all"]
			},
			"nav-up": {
				"links": {
					"tr": "#nav-dir",
					"dev": "#nav-dir"
				},
				"tests": ["auto", "#foo", "#foo current", "#foo root"]
			},
			"nav-right": {
				"links": {
					"tr": "#nav-dir",
					"dev": "#nav-dir"
				},
				"tests": ["auto", "#foo", "#foo current", "#foo root"]
			},
			"nav-down": {
				"links": {
					"tr": "#nav-dir",
					"dev": "#nav-dir"
				},
				"tests": ["auto", "#foo", "#foo current", "#foo root"]
			},
			"nav-left": {
				"links": {
					"tr": "#nav-dir",
					"dev": "#nav-dir"
				},
				"tests": ["auto", "#foo", "#foo current", "#foo root"]
			}
		}
	},

	"css3-transitions": {
		"title": "Transitions",
		"links": {
			"tr": "css-transitions-1",
			"dev": "css-transitions-1"
		},
		"properties": {
			"transition-property": {
				"links": {
					"tr": "#transition-property-property",
					"dev": "#transition-property-property"
				},
				"tests": ["none", "all", "width", "width, height"]
			},
			"transition-duration": {
				"links": {
					"tr": "#transition-duration-property",
					"dev": "#transition-duration-property"
				},
				"tests": ["0s", "1s", "100ms"]
			},
			"transition-timing-function": {
				"links": {
					"tr": "#transition-timing-function-property",
					"dev": "#transition-timing-function-property"
				},
				"tests": [
					"ease", "linear", "ease-in", "ease-out", "ease-in-out",
					"cubic-bezier(.5, .5, .5, .5)",
					"cubic-bezier(.5, 1.5, .5, -2.5)",
					"step-start", "step-end", "steps(3, start)", "steps(5, end)"
				]
			},
			"transition-delay": {
				"links": {
					"tr": "#transition-delay-property",
					"dev": "#transition-delay-property"
				},
				"tests": ["1s", "-1s"]
			},
			"transition": {
				"links": {
					"tr": "#transition-shorthand-property",
					"dev": "#transition-shorthand-property"
				},
				"tests": "1s 2s width linear"
			}
		}
	},

	"css-easing-1": {
		"title": "Easing Functions",
		"links": {
			"tr": "css-easing-1",
			"dev": "css-easing-1"
		},
		"properties": {
			"transition-timing-function": {
				"links": {
					"tr": "#easing-functions",
					"dev": "#easing-functions"
				},
				"tests": ["steps(2, jump-start)", "steps(2, jump-end)", "steps(1, jump-both)", "steps(2, jump-none)"]
			}
		}
	},

	"css3-animations": {
		"title": "Animations",
		"links": {
			"tr": "css-animations-1",
			"dev": "css-animations"
		},
		"properties": {
			"animation-name": {
				"links": {
					"tr": "#animation-name",
					"dev": "#animation-name"
				},
				"tests": ["foo", "foo, bar"]
			},
			"animation-duration": {
				"links": {
					"tr": "#animation-duration",
					"dev": "#animation-duration"
				},
				"tests": ["0s", "1s", "100ms"]
			},
			"animation-timing-function": {
				"links": {
					"tr": "#animation-timing-function",
					"dev": "#animation-timing-function"
				},
				"tests": [
					"ease", "linear", "ease-in", "ease-out", "ease-in-out",
					"cubic-bezier(.5, .5, .5, .5)",
					"cubic-bezier(.5, 1.5, .5, -2.5)",
					"step-start", "step-end", "steps(3, start)", "steps(5, end)"
				]
			},
			"animation-iteration-count": {
				"links": {
					"tr": "#animation-iteration-count",
					"dev": "#animation-iteration-count"
				},
				"tests": ["infinite", "8", "4.35"]
			},
			"animation-direction": {
				"links": {
					"tr": "#animation-direction",
					"dev": "#animation-direction"
				},
				"tests": ["normal", "alternate", "reverse", "alternate-reverse"]
			},
			"animation-play-state": {
				"links": {
					"tr": "#animation-play-state",
					"dev": "#animation-play-state"
				},
				"tests": ["running", "paused"]
			},
			"animation-delay": {
				"links": {
					"tr": "#animation-delay",
					"dev": "#animation-delay"
				},
				"tests": ["1s", "-1s"]
			},
			"animation-fill-mode": {
				"links": {
					"tr": "#animation-fill-mode",
					"dev": "#animation-fill-mode"
				},
				"tests": ["none", "forwards", "backwards", "both"]
			},
			"animation": {
				"links": {
					"tr": "#animation",
					"dev": "#animation"
				},
				"tests": "foo 1s 2s infinite linear alternate both"
			}
		},
		"@rules": {
			"@keyframes": {
				"links": {
					"tr": "#keyframes",
					"dev": "#keyframes"
				},
				"tests": "@keyframes foo"
			}
		}
	},

	"css-transforms-1": {
		"title": "Transforms Level 1",
		"links": {
			"tr": "css-transforms-1",
			"dev": "css-transforms"
		},
		"properties": {
			"transform": {
				"links": {
					"tr": "#transform-property",
					"dev": "#transform-property"
				},
				"tests": [
					"none",
					"translate(5px)", "translate(5px, 10px)", "translateY(5px)", "translateX(5px)", "translateY(5%)", "translateX(5%)",
					"scale(2)", "scale(2, -1)", "scaleX(2)", "scaleY(2.5)",
					"rotate(45deg)",
					"skew(45deg)", "skew(45deg, 15deg)", "skewX(45deg)", "skewY(45deg)",
					"matrix(1,-.2,0,1,0,0)", "matrix(1,-.2,0,1,10,10)",
					"translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)",
					"translate3d(0, 0, 5px)", "translateZ(5px)",
					"scale3d(1, 0, -1)", "scaleZ(1.5)",
					"rotate3d(1, 1, 1, 45deg)", "rotateX(-45deg)", "rotateY(-45deg)", "rotateZ(-45deg)",
					"matrix3d(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)", "matrix3d(0,0,0,0,0,0,0,0,0,0,1,0,10,10,0,1)",
					"translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) scale3d(-1, 0, .5)",
					"perspective(600px)"
				]
			},
			"transform-origin": {
				"links": {
					"tr": "#transform-origin-property",
					"dev": "#transform-origin-property"
				},
				"tests": ["10px", "top", "top left", "50% 100%", "left 0%", "left 50% 0"]
			},
			"transform-box": {
				"links": {
					"tr": "#transform-box",
					"dev": "#transform-box"
				},
				"tests": ["border-box", "fill-box", "view-box"]
			}
		}
	},

	"css-transforms-2": {
		"title": "Transforms Level 2",
		"links": {
			"dev": "css-transforms-2"
		},
		"properties": {
			"translate": {
				"links": {
					"dev": "#individual-transforms"
				},
				"tests": ["none", "50%", "50% 50%", "50% 50% 10px"]
			},
			"scale": {
				"links": {
					"dev": "#individual-transforms"
				},
				"tests": ["none"].concat(["2"].times(1, 3))
			},
			"rotate": {
				"links": {
					"dev": "#individual-transforms"
				},
				"tests": ["none"].concat(["", "x", "y", "z", "-1 0 2"].and(["45deg"])).concat(["45deg"].and(["x", "y", "z", "-1 0 2"]))
			},
			"transform-style": {
				"links": {
					"dev": "#transform-style-property"
				},
				"tests": ["auto", "flat", "preserve-3d"]
			},
			"perspective": {
				"links": {
					"dev": "#perspective-property"
				},
				"tests": ["none", "600px"]
			},
			"perspective-origin": {
				"links": {
					"dev": "#perspective-origin-property"
				},
				"tests": ["10px", "top", "top left", "50% 100%", "left 0%"]
			},
			"backface-visibility": {
				"links": {
					"dev": "#backface-visibility-property"
				},
				"tests": ["visible", "hidden"]
			}
		}
	},

	"css-motion-1": {
		"title": "Motion Path Module Level 1",
		"links": {
			"tr": "motion-1",
			"dev": "motion-1",
			"devtype": "fxtf"
		},
		"properties": {
			"offset": {
				"links": {
					"tr": "#offset-shorthand",
					"dev": "#offset-shorthand"
				},
				"tests": [
					"auto",
					"center",
					"200px 100px ray(45deg closest-side)",
					"200px 100px ray(45deg closest-side) 10%",
					"200px 100px ray(45deg closest-side) 10% reverse",
					"200px 100px ray(45deg closest-side) 10% reverse 45deg",
					"200px 100px ray(45deg closest-side) 10% 45deg reverse",
					"200px 100px ray(45deg closest-side) 45deg 10%",
					"200px 100px ray(45deg closest-side) 45deg reverse 10%",
					"200px 100px ray(45deg closest-side) reverse 10%",
					"auto / center",
					"center / 200px 100px",
					"200px 100px ray(45deg closest-side) / 200px 100px",
					"200px 100px ray(45deg closest-side) 10% / 200px 100px",
					"200px 100px ray(45deg closest-side) 10% reverse / 200px 100px",
					"200px 100px ray(45deg closest-side) 10% reverse 45deg / 200px 100px",
					"200px 100px ray(45deg closest-side) 10% 45deg reverse / 200px 100px",
					"200px 100px ray(45deg closest-side) 45deg 10% / 200px 100px",
					"200px 100px ray(45deg closest-side) 45deg reverse 10% / 200px 100px",
					"200px 100px ray(45deg closest-side) reverse 10% / 200px 100px",
				]
			},
			"offset-path": {
				"links": {
					"tr": "#offset-path-property",
					"dev": "#offset-path-property"
				},
				"tests": [
					"none",
					"ray(45deg closest-side)", "ray(45deg farthest-side)", "ray(45deg closest-corner)",
					"ray(45deg farthest-corner)", "ray(45deg sides)", "ray(0.25turn sides contain)",
					"ray(100grad closest-side contain)", "ray(calc(180deg - 0.25turn) closest-side)",
					"inset(10% round 10% 40% 10% 40%)", "ellipse(at top 50% left 20%)", "circle(at right 5% top)",
					"margin-box", "border-box", "padding-box", "content-box", "fill-box", "stroke-box", "view-box",
					"circle(60%) margin-box",
					"polygon(100% 0, 100% 100%, 0 100%)",
					"path('M 20 20 H 80 V 30')",
					"url(image.png)", "url(#id)",
				]
			},
			"offset-distance": {
				"links": {
					"tr": "#offset-distance-property",
					"dev": "#offset-distance-property"
				},
				"tests": "10%"
			},
			"offset-position": {
				"links": {
					"tr": "#offset-position-property",
					"dev": "#offset-position-property"
				},
				"tests": ["auto", "200px", "200px 100px", "center"]
			},
			"offset-anchor": {
				"links": {
					"tr": "#offset-anchor-property",
					"dev": "#offset-anchor-property"
				},
				"tests": ["auto", "200px", "200px 100px", "center"]
			},
			"offset-rotate": {
				"links": {
					"tr": "#offset-rotate-property",
					"dev": "#offset-rotate-property"
				},
				"tests": ["auto", "0deg", "reverse", "-45deg", "auto 180deg", "reverse 45deg", "2turn reverse"]
			}

		}
	},

	"css-text-3": {
		"title": "Text Level 3",
		"links": {
			"tr": "css-text-3",
			"dev": "css-text-3"
		},
		"properties": {
			"text-transform": {
				"links": {
					"tr": "#text-transform",
					"dev": "#text-transform-property"
				},
				"tests": ["full-width", "full-size-kana", "capitalize full-width", "capitalize full-width full-size-kana"]
			},
			"tab-size": {
				"links": {
					"tr": "#tab-size-property",
					"dev": "#tab-size-property"
				},
				"tests": ["4", "1em"]
			},
			"line-break": {
				"links": {
					"tr": "#line-break-property",
					"dev": "#line-break-property"
				},
				"tests": ["auto", "loose", "normal", "strict", "anywhere"]
			},
			"word-break": {
				"links": {
					"tr": "#word-break-property",
					"dev": "#word-break-property"
				},
				"tests": ["normal", "keep-all", "break-all"]
			},
			"white-space": {
				"links": {
					"tr": "#white-space-property",
					"dev": "#white-space-property"
				},
				"tests": ["break-spaces"]
			},
			"hyphens": {
				"links": {
					"tr": "#hyphenation",
					"dev": "#hyphenation"
				},
				"tests": ["auto", "manual", "none"]
			},
			"overflow-wrap": {
				"links": {
					"tr": "#overflow-wrap-property",
					"dev": "#overflow-wrap-property"
				},
				"tests": ["normal", "break-word", "anywhere"]
			},
			"word-wrap": {
				"links": {
					"tr": "#overflow-wrap-property",
					"dev": "#overflow-wrap-property"
				},
				"tests": ["normal", "break-word", "anywhere"]
			},
			"text-align": {
				"links": {
					"tr": "#text-align-property",
					"dev": "#text-align-property"
				},
				"tests": ["start", "end", "left", "right", "center", "justify", "match-parent", "justify-all"]
			},
			"text-align-all": {
				"links": {
					"tr": "#text-align-all-property",
					"dev": "#text-align-all-property"
				},
				"tests": ["start", "end", "left", "right", "center", "justify", "match-parent"]
			},
			"text-align-last": {
				"links": {
					"tr": "#text-align-last-property",
					"dev": "#text-align-last-property"
				},
				"tests": ["auto", "start", "end", "left", "right", "center", "justify", "match-parent"]
			},
			"text-justify": {
				"links": {
					"tr": "#text-justify-property",
					"dev": "#text-justify-property"
				},
				"tests": ["auto", "none", "inter-word", "inter-character"]
			},
			"word-spacing": {
				"links": {
					"tr": "#word-spacing-property",
					"dev": "#word-spacing-property"
				},
				"tests": ["50%"]
			},
			"text-indent": {
				"links": {
					"tr": "#text-indent-property",
					"dev": "#text-indent-property"
				},
				"tests": ["1em hanging", "1em each-line", "1em hanging each-line"]
			},
			"hanging-punctuation": {
				"links": {
					"tr": "#hanging-punctuation-property",
					"dev": "#hanging-punctuation-property"
				},
				"tests": [
					"none", "first", "last", "force-end", "allow-end", "first last", "first force-end",
					"first force-end last", "first allow-end last"
				]
			}
		}
	},

	"css-text-4": {
		"title": "Text Level 4",
		"links": {
			"tr": "css-text-4",
			"dev": "css-text-4"
		},
		"properties": {
			"text-space-collapse": {
				"links": {
					"tr": "#white-space-collapsing",
					"dev": "#white-space-collapsing"
				},
				"tests": ["collapse", "discard", "preserve", "preserve-breaks", "preserve-spaces"]
			},
			"text-space-trim": {
				"links": {
					"tr": "#white-space-trim",
					"dev": "#white-space-trim"
				},
				"tests": [
					"none", "trim-inner", " discard-before", "discard-after",
					"trim-inner discard-before", "trim-inner discard-before discard-after"
				]
			},
			"text-wrap": {
				"links": {
					"tr": "#text-wrap",
					"dev": "#text-wrap"
				},
				"tests": ["wrap", "nowrap", "balance "]
			},
			"wrap-before": {
				"links": {
					"tr": "#wrap-before",
					"dev": "#wrap-before"
				},
				"tests": ["auto", "avoid", "avoid-line", "avoid-flex", "line", "flex"]
			},
			"wrap-after": {
				"links": {
					"tr": "#wrap-before",
					"dev": "#wrap-before"
				},
				"tests": ["auto", "avoid", "avoid-line", "avoid-flex", "line", "flex"]
			},
			"wrap-inside": {
				"links": {
					"tr": "#wrap-inside",
					"dev": "#wrap-inside"
				},
				"tests": ["auto", "avoid"]
			},
			"hyphenate-character": {
				"links": {
					"tr": "#hyphenate-character",
					"dev": "#hyphenate-character"
				},
				"tests": ["auto", "'\2010'"]
			},
			"hyphenate-limit-zone": {
				"links": {
					"tr": "#hyphenate-size-limits",
					"dev": "#hyphenate-size-limits"
				},
				"tests": ["1%", "1em"]
			},
			"hyphenate-limit-chars": {
				"links": {
					"tr": "#hyphenate-char-limits",
					"dev": "#hyphenate-char-limits"
				},
				"tests": ["auto", "5", "auto 3", "5 4 3"]
			},
			"hyphenate-limit-lines": {
				"links": {
					"tr": "#hyphenate-line-limits",
					"dev": "#hyphenate-line-limits"
				},
				"tests": ["no-limit", "2"]
			},
			"hyphenate-limit-last": {
				"links": {
					"tr": "#hyphenate-line-limits",
					"dev": "#hyphenate-line-limits"
				},
				"tests": ["none", "always", "column", "page", "spread"]
			}
		}
	},

	"css-text-decor-3": {
		"title": "Text Decoration Level 3",
		"links": {
			"tr": "css-text-decor-3",
			"dev": "css-text-decor-3"
		},
		"properties": {
			"text-decoration": {
				"links": {
					"tr": "#text-decoration-property",
					"dev": "#text-decoration-property"
				},
				"tests": "underline dotted green"
			},
			"text-decoration-line": {
				"links": {
					"tr": "#text-decoration-line-property",
					"dev": "#text-decoration-line-property"
				},
				"tests": ["none", "underline", "overline", "line-through", "underline overline"]
			},
			"text-decoration-color": {
				"links": {
					"tr": "#text-decoration-color-property",
					"dev": "#text-decoration-color-property"
				},
				"tests": "white"
			},
			"text-decoration-style": {
				"links": {
					"tr": "#text-decoration-style-property",
					"dev": "#text-decoration-style-property"
				},
				"tests": ["solid", "double", "dotted", "dashed", "wavy"]
			},
			"text-underline-position": {
				"links": {
					"tr": "#text-underline-position-property",
					"dev": "#text-underline-position-property"
				},
				"tests": ["auto", "under", "left", "right", "under left", "under right"]
			},
			"text-emphasis-style": {
				"links": {
					"tr": "#text-emphasis-style-property",
					"dev": "#text-emphasis-style-property"
				},
				"tests": ["none", "filled", "open", "dot", "circle", "double-circle", "triangle", "sesame", "open dot", "'foo'"]
			},
			"text-emphasis-color": {
				"links": {
					"tr": "#text-emphasis-color-property",
					"dev": "#text-emphasis-color-property"
				},
				"tests": "green"
			},
			"text-emphasis": {
				"links": {
					"tr": "#text-emphasis-property",
					"dev": "#text-emphasis-property"
				},
				"tests": "open dot green"
			},
			"text-emphasis-position": {
				"links": {
					"tr": "#text-emphasis-position-property",
					"dev": "#text-emphasis-position-property"
				},
				"tests": ["over left", "over right", "under left", "under right"]
			},
			"text-shadow": {
				"links": {
					"tr": "#text-shadow-property",
					"dev": "#text-shadow-property"
				},
				"tests": ["none", "1px 1px", "0 0 black", "1px 2px 3px black"]
			}
		}
	},

	"css-text-decor-4": {
		"title": "Text Decoration Level 4",
		"links": {
			"tr": "css-text-decor-4",
			"dev": "css-text-decor-4"
		},
		"properties": {
			"text-decoration": {
				"tests": ["underline solid blue 1px"]
			},
			"text-decoration-skip": {
				"links": {
					"tr": "#text-decoration-skip-property",
					"dev": "#text-decoration-skip-property"
				},
				"tests": [
					"none", "objects", "objects spaces", "objects leading-spaces", "objects trailing-spaces", "objects leading-spaces trailing-spaces",
					"objects leading-spaces trailing-spaces edges", "objects leading-spaces trailing-spaces edges box-decoration", "objects edges",
					"objects box-decoration", "spaces", "spaces edges", "spaces edges box-decoration", "spaces box-decoration", "leading-spaces",
					"leading-spaces trailing-spaces edges", "leading-spaces trailing-spaces edges box-decoration", "edges", "edges box-decoration",
					"box-decoration"
				]
			},
			"text-decoration-skip-ink": {
				"links": {
					"tr": "#text-decoration-skip-ink-property",
					"dev": "#text-decoration-skip-ink-property"
				},
				"tests": ["none", "auto"]
			},
			"text-underline-offset": {
				"links": {
					"tr": "#underline-offset",
					"dev": "#underline-offset"
				},
				"tests": ["auto", "from-font", "3px"]
			},
			"text-decoration-thickness": {
				"links": {
					"tr": "#underline-offset",
					"dev": "#text-decoration-width-property"
				},
				"tests": ["auto", "from-font", "3px"]
			}
		}
	},

	"css-content-3": {
		"title": "Generated Content Level 3",
		"links": {
			"tr": "css-content-3",
			"dev": "css-content-3"
		},
		"properties": {
			"quotes": {
				"links": {
					"tr": "#quotes",
					"dev": "#quotes"
				},
				"tests": ["auto"]
			}
		}
	},

	"css-line-grid-1": {
		"title": "Line Grid Level 1",
		"links": {
			"tr": "css-line-grid-1",
			"dev": "css-line-grid-1"
		},
		"properties": {
			"box-snap": {
				"links": {
					"tr": "#box-snap",
					"dev": "#box-snap"
				},
				"tests": ["none", "block-start", "block-end", "center", "baseline", "last-baseline"]
			},
			"line-grid": {
				"links": {
					"tr": "#line-grid",
					"dev": "#line-grid"
				},
				"tests": ["match-parent", "create"]
			},
			"line-snap": {
				"links": {
					"tr": "#line-snap",
					"dev": "#line-snap"
				},
				"tests": ["none", "baseline", "contain"]
			}
		}
	},

	"css3-fonts": {
		"title": "Fonts Level 3",
		"links": {
			"tr": "css-fonts-3",
			"dev": "css-fonts"
		},
		"properties": {
			"font-stretch": {
				"links": {
					"tr": "#font-stretch-prop",
					"dev": "#font-stretch-prop"
				},
				"tests": [
					"normal", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "semi-expanded",
					"expanded", "extra-expanded", "ultra-expanded"
				]
			},
			"font-size-adjust": {
				"links": {
					"tr": "#font-size-adjust-prop",
					"dev": "#font-size-adjust-prop"
				},
				"tests": ["none", ".5"]
			},
			"font-synthesis": {
				"links": {
					"tr": "#font-synthesis-prop",
					"dev": "#font-synthesis-prop"
				},
				"tests": ["none", "weight", "style", "weight style", "style weight"]
			},
			"font-kerning": {
				"links": {
					"tr": "#font-kerning-prop",
					"dev": "#font-kerning-prop"
				},
				"tests": ["auto", "normal", "none"]
			},
			"font-variant-position": {
				"links": {
					"tr": "#font-variant-position-prop",
					"dev": "#font-variant-position-prop"
				},
				"tests": ["normal", "sub", "super"]
			},
			"font-variant-ligatures": {
				"links": {
					"tr": "#font-variant-ligatures-prop",
					"dev": "#font-variant-ligatures-prop"
				},
				"tests": [
					"normal", "none",
					"common-ligatures", "no-common-ligatures",
					"discretionary-ligatures", "no-discretionary-ligatures",
					"historical-ligatures", "no-historical-ligatures",
					"contextual", "no-contextual",
					"common-ligatures discretionary-ligatures historical-ligatures contextual"
				]
			},
			"font-variant-caps": {
				"links": {
					"tr": "#font-variant-caps-prop",
					"dev": "#font-variant-caps-prop"
				},
				"tests": [
					"normal", "small-caps", "all-small-caps", "petite-caps", "all-petite-caps", "titling-caps", "unicase"
				]
			},
			"font-variant-numeric": {
				"links": {
					"tr": "#font-variant-numeric-prop",
					"dev": "#font-variant-numeric-prop"
				},
				"tests": [
					"normal",
					"lining-nums", "oldstyle-nums",
					"proportional-nums", "tabular-nums",
					"diagonal-fractions", "stacked-fractions",
					"ordinal", "slashed-zero",
					"lining-nums proportional-nums diagonal-fractions",
					"oldstyle-nums tabular-nums stacked-fractions ordinal slashed-zero",
					"slashed-zero ordinal tabular-nums stacked-fractions oldstyle-nums"
				]
			},
			"font-variant-alternates": [
				"normal",
				"historical-forms"
				// TODO add tests for functions
			],
			"font-variant-east-asian": {
				"links": {
					"tr": "#font-variant-east-asian-prop",
					"dev": "#font-variant-east-asian-prop"
				},
				"tests": [
					"normal",
					"jis78", "jis83", "jis90", "jis04", "simplified", "traditional",
					"full-width", "proportional-width",
					"ruby", "simplified full-width ruby"
				]
			},

			"font-feature-settings": {
				"links": {
					"tr": "#font-feature-settings-prop",
					"dev": "#font-feature-settings-prop"
				},
				"tests": ["normal", "'c2sc'", "'smcp' on", "'liga' off", "'smcp', 'swsh' 2"]
			}
		},
		"descriptors": {
			"unicode-range": {
				"links": {
					"tr": "#unicode-range-desc",
					"dev": "#unicode-range-desc"
				},
				"tests": ["U+416", "U+0-7F", "U+A5, U+4E00-9FFF", "U+30??"]
			}
		},
		"@rules": {
			"@font-face": {
				"links": {
					"tr": "#font-face-rule",
					"dev": "#font-face-rule"
				},
				"tests": "@font-face"
			}
		}
	},

	"css4-fonts": {
		"title": "Fonts Level 4",
		"links": {
			"tr": "css-fonts-4",
			"dev": "css-fonts-4"
		},
		"properties": {
			"font-size": {
				"links": {
					"tr": "#font-size-prop",
					"dev": "#font-size-prop"
				},
				"tests": ["xxx-large"]
			},
			"font-variant": {
				"links": {
					"tr": "#font-variant-prop",
					"dev": "#font-variant-prop"
				},
				"tests": [
					"none", "normal", "all-petite-caps", "historical-forms", "super", "sub lining-nums contextual ruby"
				]
			},
			"font-feature-settings": {
				"links": {
					"tr": "#font-feature-settings-prop",
					"dev": "#font-feature-settings-prop"
				},
				"tests": ["normal", "'swsh' 2"]
			},
			"font-language-override": {
				"links": {
					"tr": "#font-language-override",
					"dev": "#font-language-override"
				},
				"tests": ["normal", "'SRB'"]
			},
			"font-weight": {
				"links": {
					"tr": "#font-weight-prop",
					"dev": "#font-weight-prop"
				},
				"tests": ["1", "90", "750", "1000"]
			},
			"font-min-size": {
				"links": {
					"tr": "#font-min-max-size-prop",
					"dev": "#font-min-max-size-prop"
				},
				"tests": ["12pt", "small", "smaller", "80%", "0"]
			},
			"font-max-size": {
				"links": {
					"tr": "#font-min-max-size-prop",
					"dev": "#font-min-max-size-prop"
				},
				"tests": ["100pt", "xx-large", "larger", "120%", "infinity"]
			},
			"font-style": {
				"links": {
					"tr": "#font-style-prop",
					"dev": "#font-style-prop"
				},
				"tests": ["oblique 15deg", "oblique -15deg", "oblique 0deg"]
			},
			"font-optical-sizing": {
				"links": {
					"tr": "#font-optical-sizing-def",
					"dev": "#font-optical-sizing-def"
				},
				"tests": ["none", "auto"]
			},
			"font-palette": {
				"links": {
					"tr": "#font-palette-prop",
					"dev": "#font-palette-prop"
				},
				"tests": ["normal", "light", "dark"]
			}
		},
		"@rules": {
			"@font-feature-values": {
				"links": {
					"tr": "#font-feature-values",
					"dev": "#font-feature-values"
				},
				"tests": "@font-feature-values Jupiter Sans"
			},
			"@font-palette-values": {
				"links": {
					"tr": "#font-palette-values",
					"dev": "#font-palette-values"
				},
				"tests": "@font-palette-values Augusta"
			}
		}
	},

	"css3-writing-modes": {
		"title": "Writing Modes",
		"links": {
			"tr": "css-writing-modes-3",
			"dev": "css-writing-modes-3"
		},
		"properties": {
			"direction": {
				"links": {
					"tr": "#direction",
					"dev": "#direction"
				},
				"tests": ["ltr", "rtl"]
			},
			"unicode-bidi": {
				"links": {
					"tr": "#unicode-bidi",
					"dev": "#unicode-bidi"
				},
				"tests": ["normal", "embed", "isolate", "bidi-override", "isolate-override", "plaintext"]
			},
			"writing-mode": {
				"links": {
					"tr": "#block-flow",
					"dev": "#block-flow"
				},
				"tests": ["horizontal-tb", "vertical-rl", "vertical-lr"]
			},
			"text-orientation": {
				"links": {
					"tr": "#text-orientation",
					"dev": "#text-orientation"
				},
				"tests": ["mixed", "upright", "sideways"]
			},
			"text-combine-upright": {
				"links": {
					"tr": "#text-combine-upright",
					"dev": "#text-combine-upright"
				},
				"tests": ["none", "all"]
			}
		}
	},

	"css-color-3": {
		"title": "Color Level 3",
		"links": {
			"tr": "css-color-3",
			"dev": "css-color-3"
		},
		"values": {
			"properties": [
				"color",
				"background-color",
				"border-color",
				"text-decoration-color",
				"column-rule-color"
			],
			"rgba": {
				"links": {
					"tr": "#rgba-color",
					"dev": "#rgba-color"
				},
				"tests": "rgba(0,0,0,.5)"
			},
			"#RGB": {
				"links": {
					"tr": "#rgb-color",
					"dev": "#rgb-color"
				},
				"tests": ["#F06", "#FF0066"]
			},
			"hsl": {
				"links": {
					"tr": "#hsl-color",
					"dev": "#hsl-color"
				},
				"tests": "hsl(0,0%,0%)"
			},
			"hsla": {
				"links": {
					"tr": "#hsla-color",
					"dev": "#hsla-color"
				},
				"tests": "hsla(0,0%,0%,.5)"
			},
			"transparent": {
				"links": {
					"tr": "#transparent",
					"dev": "#transparent"
				},
				"tests": "transparent"
			},
			"currentColor": {
				"links": {
					"tr": "#currentcolor",
					"dev": "#currentcolor"
				},
				"tests": "currentColor"
			}
		},
		"properties": {
			"opacity": {
				"links": {
					"tr": "#transparency",
					"dev": "#transparency"
				},
				"tests": ["-5", "0", ".5", "1", "2"]
			}
		}
	},

	"css-color-4": {
		"title": "Color Level 4",
		"links": {
			"tr": "css-color-4",
			"dev": "css-color"
		},
		"values": {
			"properties": [
				"color",
				"background-color",
				"border-color",
				"text-decoration-color",
				"column-rule-color"
			],
			"Comma-less colors": {
				"links": {
					"tr": "#funcdef-rgb",
					"dev": "#funcdef-rgb"
				},
				"tests": ["rgb(0% 20% 70%)", "rgb(0 64 185)", "hsl(0 0% 0%)"]
			},
			"/ alpha": {
				"links": {
					"tr": "#funcdef-rgb",
					"dev": "#funcdef-rgb"
				},
				"tests": ["rgba(0% 20% 70% / 50%)", "rgba(0% 20% 70% / .5)", "rgba(0 64 185 / 50%)", "rgba(0 64 185 / .5)", "hsla(0 0% 0% /.5)"]
			},
			"optional alpha": {
				"links": {
					"tr": "#funcdef-rgb",
					"dev": "#funcdef-rgb"
				},
				"tests": ["rgb(0% 20% 70% / 50%)", "rgb(0% 20% 70% / .5)", "rgb(0 64 185 / 50%)", "rgb(0 64 185 / .5)", "hsl(0 0% 0% / .5)"]
			},
			"Hex with alpha": {
				"links": {
					"tr": "#hex-notation",
					"dev": "#hex-notation"
				},
				"tests": ["#000F", "#000000FF"]
			},
			"rebeccapurple": {
				"links": {
					"tr": "#named-colors",
					"dev": "#named-colors"
				},
				"tests": "rebeccapurple"
			},
			"hwb()": {
				"links": {
					"tr": "#the-hwb-notation",
					"dev": "#the-hwb-notation"
				},
				"tests": ["hwb(0 0% 0%)", "hwb(0 0% 0% / .5)"]
			},
			"lab()": {
				"links": {
					"tr": "#specifying-lab-lch",
					"dev": "#specifying-lab-lch"
				},
				"tests": ["lab(0 0 0)", "lab(0 0 0 /.5)"]
			},
			"lch()": {
				"links": {
					"tr": "#specifying-lab-lch",
					"dev": "#specifying-lab-lch"
				},
				"tests": ["lch(0 0 0)", "lch(0 0 0 / .5)"]
			},
			"gray()": {
				"links": {
					"tr": "#grays",
					"dev": "#grays"
				},
				"tests": ["gray(50)", "gray(50 / .5)"]
			},
			"color()": {
				"links": {
					"tr": "#color-function",
					"dev": "#color-function"
				},
				"tests": [
					"color(.2 .4 .6)",
					"color(image-p3 .2. 4 .6)",
					"color(foo .2 .4 .6)",
					"color(.2 .4 .6 / .5)",
					"color(image-p3 .2 .4 .6  / .5)",
					"color(foo .2 .4 .6 / .5)"
				]
			},
			"device-cmyk()": {
				"links": {
					"tr": "#cmyk-colors",
					"dev": "#cmyk-colors"
				},
				"tests": ["device-cmyk(.2 .3 .4 .5)", "device-cmyk(.2 .3 .4 .5 / .5)", "device-cmyk(.2 .3 .4 .5 / 50%)"]
			}
		},
		"properties": {
			"opacity": {
				"links": {
					"tr": "#transparency",
					"dev": "#transparency"
				},
				"tests": ["45%"]
			}
		}
	},

	"css-color-adjust-1": {
		"title": "Color Adjustment Level 1",
		"links": {
			"tr": "css-color-adjust-1",
			"dev": "css-color-adjust-1"
		},
		"properties": {
			"color-adjust": {
				"links": {
					"tr": "#perf",
					"dev": "#perf"
				},
				"tests": ["economy", "exact"]
			}
		}
	},

	"css3-multicol": {
		"title": "Multi-column Layout",
		"links": {
			"tr": "css-multicol-1",
			"dev": "css-multicol"
		},
		"properties": {
			"column-width": {
				"links": {
					"tr": "#cw",
					"dev": "#cw"
				},
				"tests": ["10em", "auto"]
			},
			"column-count": {
				"links": {
					"tr": "#cc",
					"dev": "#cc"
				},
				"tests": ["2", "auto"]
			},
			"columns": {
				"links": {
					"tr": "#columns",
					"dev": "#columns"
				},
				"tests": ["100px", "3", "10em 2", "auto 2", "10em auto", "auto auto", "2 10em", "auto 10em", "2 auto"]
			},
			"column-rule-color": {
				"links": {
					"tr": "#crc",
					"dev": "#crc"
				},
				"tests": "red"
			},
			"column-rule-style": {
				"links": {
					"tr": "#crs",
					"dev": "#crs"
				},
				"tests": ["none", "solid", "dotted"]
			},
			"column-rule-width": {
				"links": {
					"tr": "#crw",
					"dev": "#crw"
				},
				"tests": "1px"
			},
			"column-rule": {
				"links": {
					"tr": "#column-rule",
					"dev": "#cr"
				},
				"tests": ["transparent", "1px solid black"]
			},
			"column-span": {
				"links": {
					"tr": "#column-span",
					"dev": "#column-span"
				},
				"tests": ["none", "all"]
			},
			"column-fill": {
				"links": {
					"tr": "#cf",
					"dev": "#cf"
				},
				"tests": ["auto", "balance", "balance-all"]
			}
		}
	},

	"css-values-3": {
		"title": "Values and Units Level 3",
		"links": {
			"tr": "css-values-3",
			"dev": "css-values-3"
		},
		"values": {
			"properties": [
				"width",
				"padding"
			],
			"rem": {
				"links": {
					"tr": "#font-relative-lengths",
					"dev": "#font-relative-lengths"
				},
				"tests": "5rem"
			},
			"ch": {
				"links": {
					"tr": "#font-relative-lengths",
					"dev": "#font-relative-lengths"
				},
				"tests": "5ch"
			},
			"vw": {
				"links": {
					"tr": "#viewport-relative-lengths",
					"dev": "#viewport-relative-lengths"
				},
				"tests": "5vw"
			},
			"vh": {
				"links": {
					"tr": "#viewport-relative-lengths",
					"dev": "#viewport-relative-lengths"
				},
				"tests": "5vh"
			},
			"vmin": {
				"links": {
					"tr": "#viewport-relative-lengths",
					"dev": "#viewport-relative-lengths"
				},
				"tests": "5vmin"
			},
			"vmax": {
				"links": {
					"tr": "#viewport-relative-lengths",
					"dev": "#viewport-relative-lengths"
				},
				"tests": "5vmax"
			},
			"q": {
				"links": {
					"tr": "#absolute-lengths",
					"dev": "#absolute-lengths"
				},
				"tests": "5q"
			},
			"attr()": {
				"links": {
					"tr": "#attr-notation",
					"dev": "#attr-notation"
				},
				"tests": ["attr(data-px)", "attr(data-px px)", "attr(data-px px, initial)"]
			},
			"calc()": {
				"links": {
					"tr": "#calc-notation",
					"dev": "#calc-notation"
				},
				"tests": [
					"calc(1px + 2px)",
					"calc(5px*2)",
					"calc(5px/2)",
					"calc(100%/3 - 2*1em - 2*1px)",
					"calc(attr(data-px)*2)",
					"calc(5px - 10px)",
					"calc(1vw - 1px)",
					"calc(calc(100%))"
				]
			}
		},
		"properties": {
			"transform": [
				"rotate(calc(15deg + 30deg))"
			]
		}
	},

	"css-values-4": {
		"title": "Values and Units Level 4",
		"links": {
			"tr": "css-values-4",
			"dev": "css-values-4"
		},
		"values": {
			"properties": [
				"width",
				"padding"
			],
			"toggle()": {
				"links": {
					"tr": "#toggle-notation",
					"dev": "#toggle-notation"
				},
				"tests": ["toggle(1px, 2px)"]
			},
			"min()": {
				"links": {
					"tr": "#calc-notation",
					"dev": "#comp-func"
				},
				"tests": ["max(10 * (1vw + 1vh) / 2, 12px)"]
			},
			"max()": {
				"links": {
					"tr": "#calc-notation",
					"dev": "#comp-func"
				},
				"tests": ["max(10 * (1vw + 1vh) / 2, 12px)"]
			},
			"clamp()": {
				"links": {
					"tr": "#calc-notation",
					"dev": "#comp-func"
				},
				"tests": ["clamp(12px, 10 * (1vw + 1vh) / 2, 100px)"]
			}
		}
	},

	"css-env-1": {
		"title": "Environment Variables Level 1",
		"links": {
			"dev": "css-env-1"
		},
		"values": {
			"properties": [
				"width",
				"padding"
			],
			"env()": {
				"links": {
					"tr": "#env-function",
					"dev": "#env-function"
				},
				"tests": [
					"env(safe-area-inset-top)", "env(safe-area-inset-top, 12px)",
					"env(safe-area-inset-right)", "env(safe-area-inset-right, 12px)",
					"env(safe-area-inset-bottom)", "env(safe-area-inset-bottom, 12px)",
					"env(safe-area-inset-left)", "env(safe-area-inset-left, 12px)"
				]
			}
		}
	},

	"css3-regions": {
		"title": "Regions",
		"links": {
			"tr": "css-regions-1",
			"dev": "css-regions"
		},
		"properties": {
			"flow-from": {
				"links": {
					"tr": "#flow-from",
					"dev": "#flow-from"
				},
				"tests": ["none", "named-flow"]
			},
			"flow-into": {
				"links": {
					"tr": "#the-flow-into-property",
					"dev": "#the-flow-into-property"
				},
				"tests": ["none", "named-flow"]
			},
			"region-fragment": {
				"links": {
					"tr": "#the-region-fragment-property",
					"dev": "#the-region-fragment-property"
				},
				"tests": ["auto", "break"]
			}
		}
	},

	"css3-flexbox": {
		"title": "Flexible Box Layout",
		"links": {
			"tr": "css-flexbox-1",
			"dev": "css-flexbox-1"
		},
		"properties": {
			"align-content": {
				"links": {
					"tr": "#align-content-property",
					"dev": "#align-content-property"
				},
				"tests": ["flex-start", "flex-end", "space-between", "space-around"]
			},
			"align-items": {
				"links": {
					"tr": "#align-items-property",
					"dev": "#align-items-property"
				},
				"tests": ["flex-start", "flex-end"]
			},
			"align-self": {
				"links": {
					"tr": "#align-items-property",
					"dev": "#align-items-property"
				},
				"tests": ["flex-start", "flex-end"]
			},
			"display": {
				"links": {
					"tr": "#flex-containers",
					"dev": "#flex-containers"
				},
				"tests": ["flex", "inline-flex"]
			},
			"flex": {
				"links": {
					"tr": "#flex-property",
					"dev": "#flex-property"
				},
				"tests": ["none", "5 7 10%"]
			},
			"flex-basis": {
				"links": {
					"tr": "#flex-basis-property",
					"dev": "#flex-basis-property"
				},
				"tests": ["auto", "content", "1px"]
			},
			"flex-direction": {
				"links": {
					"tr": "#flex-direction-property",
					"dev": "#flex-direction-property"
				},
				"tests": ["row", "row-reverse", "column", "column-reverse"]
			},
			"flex-flow": {
				"links": {
					"tr": "#flex-flow-property",
					"dev": "#flex-flow-property"
				},
				"tests": ["row", "row-reverse", "column", "column-reverse", "wrap", "wrap-reverse"]
			},
			"flex-grow": {
				"links": {
					"tr": "#flex-grow-property",
					"dev": "#flex-grow-property"
				},
				"tests": ["0", "5"]
			},
			"flex-shrink": {
				"links": {
					"tr": "#flex-shrink-property",
					"dev": "#flex-shrink-property"
				},
				"tests": ["1", "10"]
			},
			"flex-wrap": {
				"links": {
					"tr": "#flex-wrap-property",
					"dev": "#flex-wrap-property"
				},
				"tests": ["nowrap", "wrap", "wrap-reverse"]
			},
			"justify-content": {
				"links": {
					"tr": "#justify-content-property",
					"dev": "#justify-content-property"
				},
				"tests": ["flex-start", "flex-end", "space-between", "space-around"]
			},
			"min-height": {
				"links": {
					"tr": "#min-size-auto",
					"dev": "#min-size-auto"
				},
				"tests": ["auto"]
			},
			"min-width": {
				"links": {
					"tr": "#min-size-auto",
					"dev": "#min-size-auto"
				},
				"tests": ["auto"]
			},
			"order": {
				"links": {
					"tr": "#order-property",
					"dev": "#order-property"
				},
				"tests": ["0", "1"]
			}
		}
	},

	"css-grid-1": {
		"title": "Grid Layout Level 1",
		"links": {
			"tr": "css-grid-1",
			"dev": "css-grid"
		},
		"properties": {
			"display": {
				"links": {
					"tr": "#grid-containers",
					"dev": "#grid-containers"
				},
				"tests": ["grid", "inline-grid"]
			},
			"grid-template-columns": {
				"links": {
					"tr": "#track-sizing",
					"dev": "#track-sizing"
				},
				"tests": [
					"none", "auto", "100px", "1fr", "100px 1fr auto",
					"repeat(2, 100px 1fr)",
					"repeat(4, 10px [col-start] 250px [col-end]) 10px",
					"100px 1fr max-content minmax(min-content, 1fr)",
					"repeat(auto-fill, minmax(25ch, 1fr))",
					"10px [col-start] 250px [col-end]",
					"[first nav-start] 150px [main-start] 1fr [last]",
					"10px [col-start] 250px [col-end] 10px [col-start] 250px [col-end] 10px",
					"[a] auto [b] minmax(min-content, 1fr) [b c d] repeat(2, [e] 40px) repeat(5, auto)"
				]
			},
			"grid-template-rows": {
				"links": {
					"tr": "#track-sizing",
					"dev": "#track-sizing"
				},
				"tests": [
					"none", "auto", "100px", "1fr", "100px 1fr auto",
					"repeat(2, 100px 1fr)",
					"100px 1fr max-content minmax(min-content, 1fr)",
					"10px [row-start] 250px [row-end]",
					"[first header-start] 50px [main-start] 1fr [footer-start] 50px [last]"
				]
			},
			"grid-template-areas": {
				"links": {
					"tr": "#grid-template-areas-property",
					"dev": "#grid-template-areas-property"
				},
				"tests": ["none", "'articles'", "'head head'", "'head head' 'nav main' 'foot ....'"]
			},
			"grid-template": {
				"links": {
					"tr": "#explicit-grid-shorthand",
					"dev": "#explicit-grid-shorthand"
				},
				"tests": ["none", "auto 1fr auto / auto 1fr", "[header-top] 'a   a   a' [header-bottom] [main-top] 'b   b   b' 1fr [main-bottom] / auto 1fr auto"]
			},
			"grid-auto-columns": {
				"links": {
					"tr": "#auto-tracks",
					"dev": "#auto-tracks"
				},
				"tests": [
					"auto", "1fr", "100px", "max-content", "minmax(min-content, 1fr)", "min-content max-content auto",
					"100px 150px 390px", "100px minmax(100px, auto) 10% 0.5fr fit-content(400px)"
				]
			},
			"grid-auto-rows": {
				"links": {
					"tr": "#auto-tracks",
					"dev": "#auto-tracks"
				},
				"tests": [
					"auto", "1fr", "100px", "100px 30%", "100px 30% 1em", "min-content", "minmax(min-content, 1fr)",
					"min-content max-content auto", "100px minmax(100px, auto) 10% 0.5fr fit-content(400px)"
				]
			},
			"grid-auto-flow": {
				"links": {
					"tr": "#grid-auto-flow-property",
					"dev": "#grid-auto-flow-property"
				},
				"tests": ["row", "column", "row dense", "column dense"]
			},
			"grid": {
				"links": {
					"tr": "#grid-shorthand",
					"dev": "#grid-shorthand"
				},
				"tests": [
					"auto-flow 1fr / 100px",
					"none / auto-flow 1fr",
					"auto-flow / auto 1fr",
					"repeat(auto-fill, 5em) / auto-flow 1fr",
					" auto-flow 1fr / repeat(auto-fill, 5em)",
					"'H    H ' 'A    B ' 'F    F ' 30px / auto 1fr"
				]
			},
			"grid-row-start": {
				"links": {
					"tr": "#line-placement",
					"dev": "#line-placement"
				},
				"tests": ["auto", "4", "C", "C 2", "span C", "span 1"]
			},
			"grid-column-start": {
				"links": {
					"tr": "#line-placement",
					"dev": "#line-placement"
				},
				"tests": ["auto", "4", "C", "C 2", "span C", "span 1"]
			},
			"grid-row-end": {
				"links": {
					"tr": "#line-placement",
					"dev": "#line-placement"
				},
				"tests": ["auto", "4", "C", "C 2", "span C", "span 1"]
			},
			"grid-column-end": {
				"links": {
					"tr": "#line-placement",
					"dev": "#line-placement"
				},
				"tests": ["auto", "4", "C", "C 2", "span C", "span 1"]
			},
			"grid-column": {
				"links": {
					"tr": "#placement-shorthands",
					"dev": "#placement-shorthands"
				},
				"tests": ["auto", "1", "-1", "1 / 1", "1 / -1", "auto / auto", "2 / span 2"]
			},
			"grid-row": {
				"links": {
					"tr": "#placement-shorthands",
					"dev": "#placement-shorthands"
				},
				"tests": ["auto", "1", "-1", "1 / 1", "1 / -1", "auto / auto", "2 / span 2"]
			},
			"grid-area": {
				"links": {
					"tr": "#placement-shorthands",
					"dev": "#placement-shorthands"
				},
				"tests": ["1 / 1", "1 / span 1", "span / 10 / -1"]
			},
			"grid-column-gap": {
				"links": {
					"tr": "#gutters",
					"dev": "#gutters"
				},
				"tests": ["0", "1em"]
			},
			"grid-row-gap": {
				"links": {
					"tr": "#gutters",
					"dev": "#gutters"
				},
				"tests": ["0", "1em"]
			},
			"grid-gap": {
				"links": {
					"tr": "#gutters",
					"dev": "#gutters"
				},
				"tests": ["0 0", "0 1em", "1em", "1em 1em"]
			}
		}
	},

	"css-grid-2": {
		"title": "Grid Layout Level 2",
		"links": {
			"tr": "css-grid-2",
			"dev": "css-grid-2"
		},
		"properties": {
			"grid-template-columns": {
				"links": {
					"tr": "#subgrid-per-axis",
					"dev": "#subgrid-per-axis"
				},
				"tests": ["subgrid"]
			},
			"grid-template-rows": {
				"links": {
					"tr": "#subgrid-per-axis",
					"dev": "#subgrid-per-axis"
				},
				"tests": ["subgrid"]
			}
		}
	},

	"css3-align": {
		"title": "Box Alignment",
		"links": {
			"tr": "css-align-3",
			"dev": "css-align"
		},
		"properties": {
			"align-self": {
				"links": {
					"tr": "#align-self-property",
					"dev": "#align-self-property"
				},
				"tests": ["auto", "normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start"]
			},
			"align-items": {
				"links": {
					"tr": "#align-items-property",
					"dev": "#align-items-property"
				},
				"tests": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start"]
			},
			"align-content": {
				"links": {
					"tr": "#align-justify-content",
					"dev": "#align-justify-content"
				},
				"tests": ["normal", "baseline", "first baseline", "last baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "unsafe start ", "safe start"]
			},
			"justify-self": {
				"links": {
					"tr": "#justify-self-property",
					"dev": "#justify-self-property"
				},
				"tests": ["auto", "normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start", "left", "right", "safe right"]
			},
			"justify-items": {
				"links": {
					"tr": "#justify-items-property",
					"dev": "#justify-items-property"
				},
				"tests": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start", "left", "right", "safe right", "legacy", "legacy left", "legacy right", "legacy center"]
			},
			"justify-content": {
				"links": {
					"tr": "#align-justify-content",
					"dev": "#align-justify-content"
				},
				"tests": ["normal", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "unsafe start ", "safe start", "left", "right", "safe right"]
			},
			"place-content": {
				"links": {
					"tr": "#place-content",
					"dev": "#place-content"
				},
				"tests": ["normal", "baseline", "first baseline", "last baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "unsafe start ", "safe start", "normal normal", "baseline normal", "first baseline normal", "space-between normal", "center normal", "unsafe start normal", "normal stretch", "baseline stretch", "first baseline stretch", "space-between stretch", "center stretch", "unsafe start stretch", "normal safe right", "baseline safe right", "first baseline safe right", "space-between safe right", "center safe right", "unsafe start safe right"]
			},
			"place-items": {
				"links": {
					"tr": "#place-items-property",
					"dev": "#place-items-property"
				},
				"tests": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start", "normal normal", "stretch normal", "baseline normal", "first baseline normal", "self-start normal", "unsafe start normal", "normal stretch", "stretch stretch", "baseline stretch", "first baseline stretch", "self-start stretch", "unsafe start stretch", "normal last baseline", "stretch last baseline", "baseline last baseline", "first baseline last baseline", "self-start last baseline", "unsafe start last baseline", "normal legacy left", "stretch legacy left", "baseline legacy left", "first baseline legacy left", "self-start legacy left", "unsafe start legacy left"]
			},
			"gap": {
				"links": {
					"tr": "#gap-shorthand",
					"dev": "#gap-shorthand"
				},
				"tests": ["0 0", "0 1em", "1em", "1em 1em"]
			},
			"column-gap": {
				"links": {
					"tr": "#column-row-gap",
					"dev": "#column-row-gap"
				},
				"tests": ["0", "1em", "normal"]
			},
			"row-gap": {
				"links": {
					"tr": "#column-row-gap",
					"dev": "#column-row-gap"
				},
				"tests": ["0", "1em"]
			}
		}
	},

	"css-cascade-3": {
		"title": "Cascading and Inheritance Level 3",
		"links": {
			"tr": "css-cascade-3",
			"dev": "css-cascade-3"
		},
		"values": {
			"properties": [
				"color",
				"font-weight",
				"background-image",
				"width"
			],
			"unset": {
				"links": {
					"tr": "#inherit-initial",
					"dev": "#inherit-initial"
				},
				"tests": "unset"
			}
		},
		"properties": {
			"all": {
				"links": {
					"tr": "#all-shorthand",
					"dev": "#all-shorthand"
				},
				"tests": ["initial", "inherit", "unset"]
			}
		}
	},

	"css-cascade-4": {
		"title": "Cascading and Inheritance Level 4",
		"links": {
			"tr": "css-cascade-4",
			"dev": "css-cascade"
		},
		"values": {
			"properties": [
				"color",
				"font-weight",
				"background-image",
				"all"
			],
			"revert": {
				"links": {
					"tr": "#default",
					"dev": "#default"
				},
				"tests": "revert"
			}
		},
		"properties": {
			"all": {
				"links": {
					"tr": "#all-shorthand",
					"dev": "#all-shorthand"
				},
				"tests": "revert"
			}
		}
	},

	"css3-conditional": {
		"title": "Conditional Rules",
		"links": {
			"tr": "css3-conditional",
			"dev": "css-conditional-3"
		},
		"@rules": {
			"@support": {
				"links": {
					"tr": "#at-supports",
					"dev": "#at-supports"
				},
				"tests": [
					"@supports (color: green)",
					"@supports not (foo: bar)",
					"@supports (color: green) or (color: red)",
					"@supports (color: green) and (color: red)",
					"@supports (color: green) and (not (foo: bar))",
					"@supports (color: green) or (not (foo: bar))"
				]
			}
		}
	},

	"css-masking": {
		"title": "Masking",
		"links": {
			"tr": "css-masking-1",
			"dev": "css-masking-1",
			"devtype": "fxtf"
		},
		"properties": {
			"clip-path": {
				"links": {
					"tr": "#the-clip-path",
					"dev": "#the-clip-path"
				},
				"tests": [
					"url('#clip')",
					"inset(50%)",
					"circle()",
					"ellipse()",
					"polygon(0 10px, 30px 0)",
					"circle() border-box",
					"border-box",
					"padding-box",
					"content-box",
					"margin-box",
					"fill-box",
					"stroke-box",
					"view-box",
					"none"
				]
			},
			"clip-rule": {
				"links": {
					"tr": "#the-clip-rule",
					"dev": "#the-clip-rule"
				},
				"tests": ["nonzero", "evenodd"]
			},
			"mask-image": {
				"links": {
					"tr": "#the-mask-image",
					"dev": "#the-mask-image"
				},
				"tests": ["none", "linear-gradient(black 0%, transparent 100%)", "url(image.png)"]
			},
			"mask-mode": {
				"links": {
					"tr": "#the-mask-mode",
					"dev": "#the-mask-mode"
				},
				"tests": ["alpha", "luminance", "match-source"]
			},
			"mask-repeat": {
				"links": {
					"tr": "#the-mask-repeat",
					"dev": "#the-mask-repeat"
				},
				"tests": ["repeat-x", "repeat-y"].concat(["repeat", "space", "round", "no-repeat"].times(1, 2))
			},
			"mask-position": {
				"links": {
					"tr": "#the-mask-position",
					"dev": "#the-mask-position"
				},
				"tests": ["center", "left 50%", "bottom 10px right 20px", "bottom 10px right", "top right 10px"]
			},
			"mask-clip": {
				"links": {
					"tr": "#the-mask-clip",
					"dev": "#the-mask-clip"
				},
				"tests": ["border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box", "no-clip"]
			},
			"mask-origin": {
				"links": {
					"tr": "#the-mask-origin",
					"dev": "#the-mask-origin"
				},
				"tests": ["border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box"]
			},
			"mask-size": {
				"links": {
					"tr": "#the-mask-size",
					"dev": "#the-mask-size"
				},
				"tests": ["auto", "10px", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"]
			},
			"mask-composite": {
				"links": {
					"tr": "#the-mask-composite",
					"dev": "#the-mask-composite"
				},
				"tests": ["add", "subtract", "intersect", "exclude"]
			},
			"mask": {
				"links": {
					"tr": "#the-mask",
					"dev": "#the-mask"
				},
				"tests": ["top", "space", "url(image.png)", "url(image.png) luminance", "url(image.png) luminance top space"]
			},
			"mask-border-source": {
				"links": {
					"tr": "#the-mask-border-source",
					"dev": "#the-mask-border-source"
				},
				"tests": ["none", "url(image.png)"]
			},
			"mask-border-slice": {
				"links": {
					"tr": "#the-mask-border-slice",
					"dev": "#the-mask-border-slice"
				},
				"tests": ["0 fill", "50% fill", "1.1 fill", "0 1 fill", "0 1 2 fill", "0 1 2 3 fill"]
			},
			"mask-border-width": {
				"links": {
					"tr": "#the-mask-border-width",
					"dev": "#the-mask-border-width"
				},
				"tests": ["auto", "10px", "50%", "1", "1.0", "auto 1", "auto 1 50%", "auto 1 50% 1.1"]
			},
			"mask-border-outset": {
				"links": {
					"tr": "#the-mask-border-outset",
					"dev": "#the-mask-border-outset"
				},
				"tests": ["0", "1.1", "0 1", "0 1 2", "0 1 2 3"]
			},
			"mask-border-repeat": {
				"links": {
					"tr": "#the-mask-border-repeat",
					"dev": "#the-mask-border-repeat"
				},
				"tests": ["stretch", "repeat", "round", "space"].times(1, 2)
			},
			"mask-border": {
				"links": {
					"tr": "#the-mask-border",
					"dev": "#the-mask-border"
				},
				"tests": [
					"url(image.png)",
					"url(image.png) 10px",
					"url(image.png) space",
					"url(image.png) 1 fill",
					"url(image.png) 1 fill 10px",
					"url(image.png) 1 fill 10px",
					"url(image.png) 1 fill 10px 2"
				]
			},
			"mask-type": {
				"links": {
					"tr": "#the-mask-type",
					"dev": "#the-mask-type"
				},
				"tests": ["luminance", "alpha"]
			}
		}
	},

	"compositing": {
		"title": "Compositing and Blending",
		"links": {
			"tr": "compositing-1",
			"dev": "compositing-1",
			"devtype": "fxtf"
		},
		"properties": {
			"mix-blend-mode": {
				"links": {
					"tr": "#mix-blend-mode",
					"dev": "#mix-blend-mode"
				},
				"tests": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
			},
			"isolation": {
				"links": {
					"tr": "#isolation",
					"dev": "#isolation"
				},
				"tests": ["auto", "isolate"]
			},
			"background-blend-mode": {
				"links": {
					"tr": "#background-blend-mode",
					"dev": "#background-blend-mode"
				},
				"tests": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "normal, multiply"]
			}
		}
	},

	"css-display": {
		"title": "Display",
		"links": {
			"tr": "css-display-3",
			"dev": "css-display"
		},
		"properties": {
			"display": {
				"links": {
					"tr": "#the-display-properties",
					"dev": "#the-display-properties"
				},
				"tests": [
					"run-in", "flow", "flow-root",
					"block flow", "inline flow", "run-in flow",
					"block flow-root", "inline flow-root", "run-in flow-root",
					"block table", "inline table", "run-in table",
					"block flex", "inline flex", "run-in flex",
					"block grid", "inline grid", "run-in grid",
					"block ruby", "inline ruby", "run-in ruby",
					"inline list-item", "list-item inline flow", "list-item block flow"
				]
			}
		}
	},

	"css-shapes-1": {
		"title": "Shapes Level 1",
		"links": {
			"tr": "css-shapes-1",
			"dev": "css-shapes"
		},
		"properties": {
			"shape-outside": {
				"links": {
					"tr": "#shape-outside-property",
					"dev": "#shape-outside-property"
				},
				"tests": [
					"none", "inset(10% round 10% 40% 10% 40%)", "ellipse(at top 50% left 20%)", "circle(at right 5% top)",
					"polygon(100% 0, 100% 100%, 0 100%)", "margin-box", "border-box", "padding-box", "content-box",
					"inset(10% round 10% 40% 10% 40%) margin-box", "ellipse(at top 50% left 20%) margin-box",
					"circle(at right 5% top) margin-box", "polygon(100% 0, 100% 100%, 0 100%) margin-box", "attr(src url)",
					"url(image.png)"
				]
			},
			"shape-image-threshold": {
				"links": {
					"tr": "#shape-image-threshold-property",
					"dev": "#shape-image-threshold-property"
				},
				"tests": ["0", "1", "0.0", "0.1"]
			},
			"shape-margin": {
				"links": {
					"tr": "#shape-margin-property",
					"dev": "#shape-margin-property"
				},
				"tests": ["0", "10px", "50%"]
			}
		}
	},

	"css-shapes-2": {
		"title": "Shapes Level 2",
		"links": {
			"dev": "css-shapes-2"
		},
		"properties": {
			"shape-inside": {
				"links": {
					"dev": "#shape-inside-property"
				},
				"tests": [
					"auto", "outside-shape", "shape-box", "display", "inset(10% round 10% 40% 10% 40%)",
					"ellipse(at top 50% left 20%)", "circle(at right 5% top)", "polygon(100% 0, 100% 100%, 0 100%)",
					"url(image.png)"
				]
			},
			"shape-padding": {
				"links": {
					"dev": "#shape-padding-property"
				},
				"tests": ["0", "10px", "50%"]
			}
		}
	},

	"css3-exclusions": {
		"title": "Exclusions",
		"links": {
			"tr": "css3-exclusions",
			"dev": "css-exclusions"
		},
		"properties": {
			"wrap-flow": {
				"links": {
					"tr": "#wrap-flow-property",
					"dev": "#wrap-flow-property"
				},
				"tests": ["auto", "both", "start", "end", "minimum", "maximum", "clear"]
			},
			"wrap-through": {
				"links": {
					"tr": "#wrap-through-property",
					"dev": "#wrap-through-property"
				},
				"tests": ["wrap", "none"]
			}
		}
	},

	"filter-effects": {
		"title": "Filter Effects Level 1",
		"links": {
			"tr": "filter-effects-1",
			"dev": "filter-effects-1",
			"devtype": "fxtf"
		},
		"properties": {
			"filter": {
				"links": {
					"tr": "#FilterProperty",
					"dev": "#FilterProperty"
				},
				"tests": [
					"none",
					"url(#id)",
					"url(image.svg#id)",
					"blur(5px)",
					"brightness(0.5)",
					"contrast(150%)",
					"drop-shadow(15px 15px 15px black)",
					"grayscale(50%)",
					"hue-rotate(50deg)",
					"invert(50%)",
					"opacity(50%)",
					"sepia(50%)",
					"saturate(150%)",
					"grayscale(100%) sepia(100%)"
				]
			},
			"flood-color": {
				"links": {
					"tr": "#FloodColorProperty",
					"dev": "#FloodColorProperty"
				},
				"tests": ["black", "#FFF"]
			},
			"flood-opacity": {
				"links": {
					"tr": "#FloodOpacityProperty",
					"dev": "#FloodOpacityProperty"
				},
				"tests": ["1", "0", "0.2", "45%"]
			},
			"color-interpolation-filters": {
				"links": {
					"tr": "#ColorInterpolationFiltersProperty",
					"dev": "#ColorInterpolationFiltersProperty"
				},
				"tests": ["auto", "sRGB", "linearRGB"]
			},
			"lighting-color": {
				"links": {
					"tr": "#LightingColorProperty",
					"dev": "#LightingColorProperty"
				},
				"tests": ["white", "#000"]
			}
		}
	},

	"filters-2": {
		"title": "Filter Effects Level 2",
		"links": {
			"dev": "filter-effects-2",
			"devtype": "fxtf"
		},
		"properties": {
			"backdrop-filter": {
				"links": {
					"dev": "#BackdropFilterProperty"
				},
				"tests": [
					"none",
					"url(#id)",
					"url(image.svg#id)",
					"blur(5px)",
					"brightness(0.5)",
					"contrast(150%)",
					"drop-shadow(15px 15px 15px black)",
					"grayscale(50%)",
					"hue-rotate(50deg)",
					"invert(50%)",
					"opacity(50%)",
					"sepia(50%)",
					"saturate(150%)",
					"grayscale(100%) sepia(100%)"
				]
			}
		}
	},

	"pointerevents": {
		"title": "Pointer Events",
		"links": {
			"tr": "pointerevents2",
			"dev": "pointerevents",
			"devtype": "github"
		},
		"properties": {
			"touch-action": {
				"links": {
					"tr": "#the-touch-action-css-property",
					"dev": "#the-touch-action-css-property"
				},
				"tests": ["auto", "none", "pan-x", "pan-y", "pan-x pan-y", "manipulation"]
			}
		}
	},

	"fullscreen": {
		"title": "Fullscreen API",
		"links": {
			"dev": "fullscreen",
			"devtype": "whatwg"
		},
		"selectors": {
			"::backdrop": {
				"links": {
					"dev": "#::backdrop-pseudo-element"
				},
				"tests": "::backdrop"
			},
			":fullscreen": {
				"links": {
					"dev": "#:fullscreen-pseudo-class"
				},
				"tests": ":fullscreen"
			}
		}
	},

	"css3-break": {
		"title": "Fragmentation",
		"links": {
			"tr": "css-break-3",
			"dev": "css-break"
		},
		"properties": {
			"break-before": {
				"links": {
					"tr": "#break-between",
					"dev": "#break-between"
				},
				"tests": ["auto", "avoid", "avoid-page", "page", "left", "right", "recto", "verso", "avoid-column", "column", "avoid-region", "region "]
			},
			"break-after": {
				"links": {
					"tr": "#break-between",
					"dev": "#break-between"
				},
				"tests": ["auto", "avoid", "avoid-page", "page", "left", "right", "recto", "verso", "avoid-column", "column", "avoid-region", "region "]
			},
			"break-inside": {
				"links": {
					"tr": "#break-within",
					"dev": "#break-within"
				},
				"tests": ["auto", "avoid", "avoid-page", "avoid-column", "avoid-region "]
			},
			"box-decoration-break": {
				"links": {
					"tr": "#break-decoration",
					"dev": "#break-decoration"
				},
				"tests": ["slice", "clone"]
			},
			"orphans": {
				"links": {
					"tr": "#widows-orphans",
					"dev": "#widows-orphans"
				},
				"tests": ["1", "2"]
			},
			"widows": {
				"links": {
					"tr": "#widows-orphans",
					"dev": "#widows-orphans"
				},
				"tests": ["1", "2"]
			}
		}
	},

	"css3-positioning": {
		"title": "Positioned Layout",
		"links": {
			"tr": "css-position-3",
			"dev": "css-position"
		},
		"properties": {
			"position": {
				"links": {
					"tr": "#position",
					"dev": "#position"
				},
				"tests": ["sticky"]
			},
			"inset-before": {
				"links": {
					"dev": "#logical-box-offsets-beaso"
				},
				"tests": ["auto", "10px", "50%"]
			},
			"inset-after": {
				"links": {
					"dev": "#logical-box-offsets-beaso"
				},
				"tests": ["auto", "10px", "50%"]
			},
			"inset-start": {
				"links": {
					"dev": "#logical-box-offsets-beaso"
				},
				"tests": ["auto", "10px", "50%"]
			},
			"inset-end": {
				"links": {
					"dev": "#logical-box-offsets-beaso"
				},
				"tests": ["auto", "10px", "50%"]
			}
		}
	},

	"css-will-change": {
		"title": "Will Change",
		"links": {
			"tr": "css-will-change-1",
			"dev": "css-will-change"
		},
		"properties": {
			"will-change": {
				"links": {
					"tr": "#will-change",
					"dev": "#will-change"
				},
				"tests": ["scroll-position", "contents", "transform", "top, left"]
			}
		}
	},

	"cssom-view": {
		"title": "CSSOM View Module",
		"links": {
			"tr": "cssom-view-1",
			"dev": "cssom-view"
		},
		"properties": {
			"scroll-behavior": {
				"links": {
					"tr": "#smooth-scrolling",
					"dev": "#smooth-scrolling"
				},
				"tests": ["auto", "smooth "]
			}
		}
	},

	"css-ruby-1": {
		"title": "Ruby",
		"links": {
			"tr": "css-ruby-1",
			"dev": "css-ruby-1"
		},
		"properties": {
			"display": {
				"links": {
					"tr": "#ruby-display",
					"dev": "#ruby-display"
				},
				"tests": ["ruby", "ruby-base", "ruby-text", "ruby-base-container", "ruby-text-container"]
			},
			"ruby-position": {
				"links": {
					"tr": "#rubypos",
					"dev": "#rubypos"
				},
				"tests": ["over", "under", "inter-character"]
			},
			"ruby-merge": {
				"links": {
					"tr": "#collapsed-ruby",
					"dev": "#collapsed-ruby"
				},
				"tests": ["separate", "collapse", "auto"]
			},
			"ruby-align": {
				"links": {
					"tr": "#ruby-align-property",
					"dev": "#ruby-align-property"
				},
				"tests": ["start", "center", "space-between", "space-around"]
			}
		}
	},

	"css-scroll-snap": {
		"title": "Scroll Snap",
		"links": {
			"tr": "css-scroll-snap-1",
			"dev": "css-scroll-snap-1"
		},
		"properties": {
			"scroll-margin": {
				"links": {
					"tr": "#scroll-margin",
					"dev": "#scroll-margin"
				},
				"tests": ["0px", "6px 5px", "10px 20px 30px", "10px 20px 30px 40px", "20px 3em 1in 5rem", "calc(2px)", "calc(3 * 25px)", "calc(3 * 25px) 5px 10em calc(1vw - 5px)"]
			},
			"scroll-margin-block": {
				"links": {
					"tr": "#margin-longhands-logical",
					"dev": "#margin-longhands-logical"
				},
				"tests": ["10px", "10px 10px"]
			},
			"scroll-margin-block-end": {
				"links": {
					"tr": "#margin-longhands-logical",
					"dev": "#margin-longhands-logical"
				},
				"tests": ["10px"]
			},
			"scroll-margin-block-start": {
				"links": {
					"tr": "#margin-longhands-logical",
					"dev": "#margin-longhands-logical"
				},
				"tests": ["10px"]
			},
			"scroll-margin-bottom": {
				"links": {
					"tr": "#margin-longhands-physical",
					"dev": "#margin-longhands-physical"
				},
				"tests": ["10px"]
			},
			"scroll-margin-inline": {
				"links": {
					"tr": "#margin-longhands-logical",
					"dev": "#margin-longhands-logical"
				},
				"tests": ["10px", "10px 10px"]
			},
			"scroll-margin-inline-start": {
				"links": {
					"tr": "#margin-longhands-logical",
					"dev": "#margin-longhands-logical"
				},
				"tests": ["10px"]
			},
			"scroll-margin-inline-end": {
				"links": {
					"tr": "#margin-longhands-logical",
					"dev": "#margin-longhands-logical"
				},
				"tests": ["10px"]
			},
			"scroll-margin-left": {
				"links": {
					"tr": "#margin-longhands-physical",
					"dev": "#margin-longhands-physical"
				},
				"tests": ["10px"]
			},
			"scroll-margin-right": {
				"links": {
					"tr": "#margin-longhands-physical",
					"dev": "#margin-longhands-physical"
				},
				"tests": ["10px"]
			},
			"scroll-margin-top": {
				"links": {
					"tr": "#margin-longhands-physical",
					"dev": "#margin-longhands-physical"
				},
				"tests": ["10px"]
			},
			"scroll-padding": {
				"links": {
					"tr": "#scroll-padding",
					"dev": "#scroll-padding"
				},
				"tests": ["auto", "0px", "6px 5px", "10px 20px 30px", "10px 20px 30px 40px", "10px auto 30px auto", "10%", "20% 3em 1in 5rem", "calc(2px)", "calc(50%)", "calc(3 * 25px)", "calc(3 * 25px) 5px 10% calc(10% - 5px)"]
			},
			"scroll-padding-block": {
				"links": {
					"tr": "#padding-longhands-logical",
					"dev": "#padding-longhands-logical"
				},
				"tests": ["10px", "50%", "10px 50%", "50% 50%"]
			},
			"scroll-padding-block-end": {
				"links": {
					"tr": "#padding-longhands-logical",
					"dev": "#padding-longhands-logical"
				},
				"tests": ["10px", "50%"]
			},
			"scroll-padding-block-start": {
				"links": {
					"tr": "#padding-longhands-logical",
					"dev": "#padding-longhands-logical"
				},
				"tests": ["10px", "50%"]
			},
			"scroll-padding-bottom": {
				"links": {
					"tr": "#padding-longhands-physical",
					"dev": "#padding-longhands-physical"
				},
				"tests": ["10px", "50%"]
			},
			"scroll-padding-inline": {
				"links": {
					"tr": "#padding-longhands-logical",
					"dev": "#padding-longhands-logical"
				},
				"tests": ["10px", "50%", "10px 50%", "50% 50%"]
			},
			"scroll-padding-inline-end": {
				"links": {
					"tr": "#padding-longhands-logical",
					"dev": "#padding-longhands-logical"
				},
				"tests": ["10px", "50%"]
			},
			"scroll-padding-inline-start": {
				"links": {
					"tr": "#padding-longhands-logical",
					"dev": "#padding-longhands-logical"
				},
				"tests": ["10px", "50%"]
			},
			"scroll-padding-left": {
				"links": {
					"tr": "#padding-longhands-physical",
					"dev": "#padding-longhands-physical"
				},
				"tests": ["10px", "50%"]
			},
			"scroll-padding-right": {
				"links": {
					"tr": "#padding-longhands-physical",
					"dev": "#padding-longhands-physical"
				},
				"tests": ["10px", "50%"]
			},
			"scroll-padding-top": {
				"links": {
					"tr": "#padding-longhands-physical",
					"dev": "#padding-longhands-physical"
				},
				"tests": ["10px", "50%"]
			},
			"scroll-snap-align": {
				"links": {
					"tr": "#scroll-snap-align",
					"dev": "#scroll-snap-align"
				},
				"tests": ["none", "start", "end", "center", "none start", "end center", "center start", "end none", "center center"]
			},
			"scroll-snap-stop": {
				"links": {
					"tr": "#scroll-snap-stop",
					"dev": "#scroll-snap-stop"
				},
				"tests": ["normal", "always"]
			},
			"scroll-snap-type": {
				"links": {
					"tr": "#scroll-snap-type",
					"dev": "#scroll-snap-type"
				},
				"tests": [
					"none", "x mandatory", "y mandatory", "block mandatory", "inline mandatory", "both mandatory",
					"x proximity", "y proximity", "block proximity", "inline proximity", "both proximity"
				]
			}
		}
	},

	"css-scroll-anchoring": {
		"title": "Scroll Anchoring",
		"links": {
			"dev": "css-scroll-anchoring"
		},
		"properties": {
			"overflow-anchor": {
				"links": {
					"dev": "#exclusion-api"
				},
				"tests": ["none", "auto"]
			}
		}
	},

	"css-logical-1": {
		"title": "Logical Properties",
		"links": {
			"tr": "css-logical-1",
			"dev": "css-logical-1",
		},
		"properties": {
			"caption-side": {
				"links": {
					"tr": "#caption-side",
					"dev": "#caption-side"
				},
				"tests": ["inline-start", "inline-end"]
			},
			"float": {
				"links": {
					"tr": "#float-clear",
					"dev": "#float-clear"
				},
				"tests": ["inline-start", "inline-end"]
			},
			"clear": {
				"links": {
					"tr": "#float-clear",
					"dev": "#float-clear"
				},
				"tests": ["inline-start", "inline-end"]
			},
			"text-align": {
				"links": {
					"tr": "#text-align",
					"dev": "#text-align"
				},
				"tests": ["start", "end"]
			},
			"resize": {
				"links": {
					"tr": "#resize",
					"dev": "#resize"
				},
				"tests": ["block", "inline"]
			},
			"block-size": {
				"links": {
					"tr": "#dimension-properties",
					"dev": "#dimension-properties"
				},
				"tests": ["100px"]
			},
			"inline-size": {
				"links": {
					"tr": "#dimension-properties",
					"dev": "#dimension-properties"
				},
				"tests": ["100px"]
			},
			"min-block-size": {
				"links": {
					"tr": "#dimension-properties",
					"dev": "#dimension-properties"
				},
				"tests": ["100px"]
			},
			"min-inline-size": {
				"links": {
					"tr": "#dimension-properties",
					"dev": "#dimension-properties"
				},
				"tests": ["100px"]
			},
			"max-block-size": {
				"links": {
					"tr": "#dimension-properties",
					"dev": "#dimension-properties"
				},
				"tests": ["100px"]
			},
			"max-inline-size": {
				"links": {
					"tr": "#dimension-properties",
					"dev": "#dimension-properties"
				},
				"tests": ["100px"]
			},
			"margin-block": {
				"links": {
					"tr": "#margin-properties",
					"dev": "#margin-properties"
				},
				"tests": ["10px", "10px 10px"]
			},
			"margin-block-start": {
				"links": {
					"tr": "#margin-properties",
					"dev": "#margin-properties"
				},
				"tests": ["10px"]
			},
			"margin-block-end": {
				"links": {
					"tr": "#margin-properties",
					"dev": "#margin-properties"
				},
				"tests": ["10px"]
			},
			"margin-inline": {
				"links": {
					"tr": "#margin-properties",
					"dev": "#margin-properties"
				},
				"tests": ["10px", "10px 10px"]
			},
			"margin-inline-start": {
				"links": {
					"tr": "#margin-properties",
					"dev": "#margin-properties"
				},
				"tests": ["10px"]
			},
			"margin-inline-end": {
				"links": {
					"tr": "#margin-properties",
					"dev": "#margin-properties"
				},
				"tests": ["10px"]
			},
			"inset": {
				"links": {
					"tr": "#inset-properties",
					"dev": "#inset-properties"
				},
				"tests": ["10px", "10px 10px", "10px 10px 10px", "10px 10px 10px 10px"]
			},
			"inset-block": {
				"links": {
					"tr": "#inset-properties",
					"dev": "#inset-properties"
				},
				"tests": ["10px", "10px 10px"]
			},
			"inset-block-start": {
				"links": {
					"tr": "#inset-properties",
					"dev": "#inset-properties"
				},
				"tests": ["10px"]
			},
			"inset-block-end": {
				"links": {
					"tr": "#inset-properties",
					"dev": "#inset-properties"
				},
				"tests": ["10px"]
			},
			"inset-inline": {
				"links": {
					"tr": "#inset-properties",
					"dev": "#inset-properties"
				},
				"tests": ["10px", "10px 10px"]
			},
			"inset-inline-start": {
				"links": {
					"tr": "#inset-properties",
					"dev": "#inset-properties"
				},
				"tests": ["10px"]
			},
			"inset-inline-end": {
				"links": {
					"tr": "#inset-properties",
					"dev": "#inset-properties"
				},
				"tests": ["10px"]
			},
			"padding-block": {
				"links": {
					"tr": "#padding-properties",
					"dev": "#padding-properties"
				},
				"tests": ["10px", "10px 10px"]
			},
			"padding-block-start": {
				"links": {
					"tr": "#padding-properties",
					"dev": "#padding-properties"
				},
				"tests": ["10px"]
			},
			"padding-block-end": {
				"links": {
					"tr": "#padding-properties",
					"dev": "#padding-properties"
				},
				"tests": ["10px"]
			},
			"padding-inline": {
				"links": {
					"tr": "#padding-properties",
					"dev": "#padding-properties"
				},
				"tests": ["10px", "10px 10px"]
			},
			"padding-inline-start": {
				"links": {
					"tr": "#padding-properties",
					"dev": "#padding-properties"
				},
				"tests": ["10px"]
			},
			"padding-inline-end": {
				"links": {
					"tr": "#padding-properties",
					"dev": "#padding-properties"
				},
				"tests": ["10px"]
			},
			"border-block": {
				"links": {
					"tr": "#border-shorthands",
					"dev": "#border-shorthands"
				},
				"tests": ["1px", "2px dotted", "medium dashed green"]
			},
			"border-block-start": {
				"links": {
					"tr": "#border-shorthands",
					"dev": "#border-shorthands"
				},
				"tests": ["1px", "2px dotted", "medium dashed green"]
			},
			"border-block-start-width": {
				"links": {
					"tr": "#border-width",
					"dev": "#border-width"
				},
				"tests": ["thin"]
			},
			"border-block-start-width": {
				"links": {
					"tr": "#border-width",
					"dev": "#border-width"
				},
				"tests": ["thin"]
			},
			"border-block-start-style": {
				"links": {
					"tr": "#border-style",
					"dev": "#border-style"
				},
				"tests": ["dotted"]
			},
			"border-block-start-color": {
				"links": {
					"tr": "#border-color",
					"dev": "#border-color"
				},
				"tests": ["navy"]
			},
			"border-block-end": {
				"links": {
					"tr": "#border-shorthands",
					"dev": "#border-shorthands"
				},
				"tests": ["1px", "2px dotted", "medium dashed green"]
			},
			"border-block-end-width": {
				"links": {
					"tr": "#border-width",
					"dev": "#border-width"
				},
				"tests": ["thin"]
			},
			"border-block-end-style": {
				"links": {
					"tr": "#border-style",
					"dev": "#border-style"
				},
				"tests": ["dotted"]
			},
			"border-block-end-color": {
				"links": {
					"tr": "#border-color",
					"dev": "#border-color"
				},
				"tests": ["navy"]
			},
			"border-block-width": {
				"links": {
					"tr": "#border-width",
					"dev": "#border-width"
				},
				"tests": ["thin 2px"]
			},
			"border-block-style": {
				"links": {
					"tr": "#border-style",
					"dev": "#border-style"
				},
				"tests": ["dotted dashed"]
			},
			"border-block-color": {
				"links": {
					"tr": "#border-color",
					"dev": "#border-color"
				},
				"tests": ["navy blue"]
			},
			"border-inline": {
				"links": {
					"tr": "#border-shorthands",
					"dev": "#border-shorthands"
				},
				"tests": ["1px", "2px dotted", "medium dashed green"]
			},
			"border-inline-start": {
				"links": {
					"tr": "#border-shorthands",
					"dev": "#border-shorthands"
				},
				"tests": ["1px", "2px dotted", "medium dashed green"]
			},
			"border-inline-start-width": {
				"links": {
					"tr": "#border-width",
					"dev": "#border-width"
				},
				"tests": ["thin"]
			},
			"border-inline-start-style": {
				"links": {
					"tr": "#border-style",
					"dev": "#border-style"
				},
				"tests": ["dotted"]
			},
			"border-inline-start-color": {
				"links": {
					"tr": "#border-color",
					"dev": "#border-color"
				},
				"tests": ["navy"]
			},
			"border-inline-end": {
				"links": {
					"tr": "#border-shorthands",
					"dev": "#border-shorthands"
				},
				"tests": ["1px", "2px dotted", "medium dashed green"]
			},
			"border-inline-end-width": {
				"links": {
					"tr": "#border-width",
					"dev": "#border-width"
				},
				"tests": ["thin"]
			},
			"border-inline-end-style": {
				"links": {
					"tr": "#border-style",
					"dev": "#border-style"
				},
				"tests": ["dotted"]
			},
			"border-inline-end-color": {
				"links": {
					"tr": "#border-color",
					"dev": "#border-color"
				},
				"tests": ["navy"]
			},
			"border-inline-width": {
				"links": {
					"tr": "#border-width",
					"dev": "#border-width"
				},
				"tests": ["thin 2px"]
			},
			"border-inline-style": {
				"links": {
					"tr": "#border-style",
					"dev": "#border-style"
				},
				"tests": ["dotted dashed"]
			},
			"border-inline-color": {
				"links": {
					"tr": "#border-color",
					"dev": "#border-color"
				},
				"tests": ["navy blue"]
			},
			"border-start-start-radius": {
				"links": {
					"tr": "#border-radius-shorthands",
					"dev": "#border-radius-properties"
				},
				"tests": ["0", "50%", "250px 100px"]
			},
			"border-start-end-radius": {
				"links": {
					"tr": "#border-radius-shorthands",
					"dev": "#border-radius-properties"
				},
				"tests": ["0", "50%", "250px 100px"]
			},
			"border-end-start-radius": {
				"links": {
					"tr": "#border-radius-shorthands",
					"dev": "#border-radius-properties"
				},
				"tests": ["0", "50%", "250px 100px"]
			},
			"border-end-end-radius": {
				"links": {
					"tr": "#border-radius-shorthands",
					"dev": "#border-radius-properties"
				},
				"tests": ["0", "50%", "250px 100px"]
			},
			"margin": {
				"links": {
					"tr": "#logical-shorthand-keyword",
					"dev": "#logical-shorthand-keyword"
				},
				"tests": ["logical 5px 10px 15px 20px"]
			},
			"padding": {
				"links": {
					"tr": "#logical-shorthand-keyword",
					"dev": "#logical-shorthand-keyword"
				},
				"tests": ["logical 5px 10px 15px 20px"]
			},
			"border-color": {
				"links": {
					"tr": "#logical-shorthand-keyword",
					"dev": "#logical-shorthand-keyword"
				},
				"tests": ["logical red green blue yellow"]
			},
			"border-style": {
				"links": {
					"tr": "#logical-shorthand-keyword",
					"dev": "#logical-shorthand-keyword"
				},
				"tests": ["logical solid dotted dashed none"]
			},
			"border-width": {
				"links": {
					"tr": "#logical-shorthand-keyword",
					"dev": "#logical-shorthand-keyword"
				},
				"tests": ["logical 5px 10px 15px 20px"]
			}
		}
	},

	"css-lists": {
		"title": "Lists Level 3",
		"links": {
			"tr": "css-lists-3",
			"dev": "css-lists-3"
		},
		"properties": {
			"list-style-type": {
				"links": {
					"tr": "#text-markers",
					"dev": "#text-markers"
				},
				"tests": [
					"disclosure-closed", "disclosure-open",
					"hebrew",
					"cjk-decimal", "cjk-ideographic",
					"hiragana", "katakana", "hiragana-iroha", "katakana-iroha",
					"japanese-informal", "japanese-formal", "korean-hangul-formal",
					"korean-hanja-informal", "korean-hanja-formal",
					"simp-chinese-informal", "simp-chinese-formal",
					"trad-chinese-informal", "trad-chinese-formal",
					"cjk-heavenly-stem", "cjk-earthly-branch",
					"trad-chinese-informal", "trad-chinese-formal",
					"simp-chinese-informal", "simp-chinese-formal",
					"japanese-informal", "japanese-formal",
					"arabic-indic", "persian", "urdu",
					"devanagari", "gurmukhi", "gujarati",
					"oriya", "kannada", "malayalam", "bengali",
					"tamil", "telugu", "thai", "lao",
					"myanmar", "khmer",
					"hangul", "hangul-consonant",
					"ethiopic-halehame", "ethiopic-numeric",
					"ethiopic-halehame-am",
					"ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et",
					"other-style", "inside", "outside", "\\32 style",
					'"-"', "'-'",
					"symbols(\"*\" \"\\2020\" \"\\2021\" \"\\A7\")",
					"symbols(cyclic '*' '\\2020' '\\2021' '\\A7')"
				]
			},
			"marker-side": {
				"links": {
					"tr": "#marker-side",
					"dev": "#marker-side"
				},
				"tests": ["match-self", "match-parent"]
			},
			"counter-reset": {
				"links": {
					"tr": "#counter-reset",
					"dev": "#counter-reset"
				},
				"tests": ["foo", "foo 1", "foo 1 bar", "foo 1 bar 2", "none"]
			},
			"counter-set": {
				"links": {
					"tr": "#increment-set",
					"dev": "#increment-set"
				},
				"tests": ["foo", "foo 1", "foo 1 bar", "foo 1 bar 2", "none"]
			},
			"counter-increment": {
				"links": {
					"tr": "#increment-set",
					"dev": "#increment-set"
				},
				"tests": ["foo", "foo 1", "foo 1 bar", "foo 1 bar 2", "none"]
			},
			"content": {
				"links": {
					"tr": "#counter-functions",
					"dev": "#counter-functions"
				},
				"tests": [
					"counter(chno, upper-latin) '. '",
					"counter(section, upper-roman) ' - '",
					"' [' counter(bq, decimal) ']'",
					"counter(notecntr, disc) ' '",
					"counter(p, none)",
					"counter(h1, upper-alpha) '.' counter(h2, decimal) ' '",
					"'(' counters(list-item, '.') ') '"
				]
			}
		}
	},

	"css-counter-styles": {
		"title": "Counter Styles Level 3",
		"links": {
			"tr": "css-counter-styles-3",
			"dev": "css-counter-styles-3"
		},
		"@rules": {
			"@counter-style": {
				"links": {
					"tr": "#the-counter-style-rule",
					"dev": "#the-counter-style-rule"
				},
				"tests": "@counter-style foo"
			}
		}
	},

	"css-overflow-3": {
		"title": "Overflow Level 3",
		"links": {
			"tr": "css-overflow-3",
			"dev": "css-overflow-3"
		},
		"properties": {
			"line-clamp": {
				"links": {
					"tr": "#line-clamp",
					"dev": "#line-clamp"
				},
				"tests": ["none", "1", "5 clip", "5 ellipsis", "5 \"… (continued on next page)\""]
			},
			"max-lines": {
				"links": {
					"tr": "#max-lines",
					"dev": "#max-lines"
				},
				"tests": ["none", "1"]
			},
			"overflow-x": {
				"links": {
					"tr": "#overflow-properties",
					"dev": "#overflow-properties"
				},
				"tests": ["visible", "hidden", "clip", "scroll", "auto"]
			},
			"overflow-y": {
				"links": {
					"tr": "#overflow-properties",
					"dev": "#overflow-properties"
				},
				"tests": ["visible", "hidden", "clip", "scroll", "auto"]
			},
			"overflow-inline": {
				"links": {
					"tr": "#logical",
					"dev": "#logical"
				},
				"tests": ["visible", "hidden", "clip", "scroll", "auto"]
			},
			"overflow-block": {
				"links": {
					"tr": "#logical",
					"dev": "#logical"
				},
				"tests": ["visible", "hidden", "clip", "scroll", "auto"]
			},
			"continue": {
				"links": {
					"tr": "#continue",
					"dev": "#continue"
				},
				"tests": ["auto", "discard"]
			}
		}
	},

	"css-overflow-4": {
		"title": "Overflow Level 4",
		"links": {
			"tr": "css-overflow-4",
			"dev": "css-overflow-4"
		},
		"selectors": {
			"::nth-fragment()": {
				"links": {
					"tr": "#fragment-pseudo-element",
					"dev": "#fragment-pseudo-element"
				},
				"tests": [
					":nth-fragment(even)", ":nth-fragment(odd)",
					":nth-fragment(n)", ":nth-fragment(-n)", ":nth-fragment(0n)",
					":nth-fragment(1)", ":nth-fragment(-1)", ":nth-fragment(0)",
					":nth-fragment(n+1)", ":nth-fragment(3n+1)", ":nth-fragment(3n + 1)",
					":nth-fragment(-n+1)", ":nth-fragment(3n-1)"
				]
			}
		}
	},

	"css-containment": {
		"title": "Containment",
		"links": {
			"dev": "css-contain"
		},
		"properties": {
			"contain": {
				"links": {
					"dev": "#contain-property"
				},
				"tests": ["none", "strict", "content", "size", "layout", "style", "paint"]
			}
		}
	},

	"css-sizing-3": {
		"title": "Intrinsic & Extrinsic Sizing",
		"links": {
			"tr": "css-sizing-3",
			"dev": "css-sizing-3"
		},
		"properties": {
			"width": {
				"links": {
					"tr": "#preferred-size-properties",
					"dev": "#preferred-size-properties"
				},
				"tests": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"]
			},
			"min-width": {
				"links": {
					"tr": "#min-size-properties",
					"dev": "#min-size-properties"
				},
				"tests": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"]
			},
			"max-width": {
				"links": {
					"tr": "#max-size-properties",
					"dev": "#max-size-properties"
				},
				"tests": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"]
			},
			"height": {
				"links": {
					"tr": "#preferred-size-properties",
					"dev": "#preferred-size-properties"
				},
				"tests": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"]
			},
			"min-height": {
				"links": {
					"tr": "#min-size-properties",
					"dev": "#min-size-properties"
				},
				"tests": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"]
			},
			"max-height": {
				"links": {
					"tr": "#max-size-properties",
					"dev": "#max-size-properties"
				},
				"tests": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"]
			},
			"column-width": {
				"links": {
					"tr": "#column-sizing",
					"dev": "#column-sizing"
				},
				"tests": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"]
			}
		}
	},

	"overscroll-behavior": {
		"title": "Overscroll Behavior",
		"links": {
			"dev": "css-overscroll-behavior"
		},
		"properties": {
			"overscroll-behavior": {
				"links": {
					"dev": "#overscroll-behavior-properties"
				},
				"tests": ["contain", "none", "auto"].times(1, 2)
			},
			"overscroll-behavior-x": {
				"links": {
					"dev": "#overscroll-behavior-longhands-physical"
				},
				"tests": ["contain", "none", "auto"]
			},
			"overscroll-behavior-y": {
				"links": {
					"dev": "#overscroll-behavior-longhands-physical"
				},
				"tests": ["contain", "none", "auto"]
			}
		}
	},

	"css-scrollbars-1": {
		"title": "Scrollbars Level 1",
		"links": {
			"tr": "css-scrollbars-1",
			"dev": "css-scrollbars"
		},
		"properties": {
			"scrollbar-color": {
				"links": {
					"tr": "#scrollbar-color",
					"dev": "#scrollbar-color"
				},
				"tests": ["auto", "dark", "light", "red blue"]
			},
			"scrollbar-width": {
				"links": {
					"tr": "#scrollbar-width",
					"dev": "#scrollbar-width"
				},
				"tests": ["auto", "thin", "none", "12px"]
			}
		}
	},

	"webvtt": {
		"title": "WebVTT",
		"links": {
			"tr": "webvtt1",
			"dev": "webvtt",
			"devtype": "github"
		},
		"selectors": {
			"::cue": {
				"links": {
					"tr": "#the-cue-pseudo-element",
					"dev": "#the-cue-pseudo-element"
				},
				"tests": ["::cue"]
			},
			"::cue()": {
				"links": {
					"tr": "#the-cue-pseudo-element",
					"dev": "#the-cue-pseudo-element"
				},
				"tests": ["::cue(span)"]
			},
			"::cue-region": {
				"links": {
					"tr": "#the-cue-region-pseudo-element",
					"dev": "#the-cue-region-pseudo-element"
				},
				"tests": ["::cue-region"]
			},
			"::cue-region()": {
				"links": {
					"tr": "#the-cue-region-pseudo-element",
					"dev": "#the-cue-region-pseudo-element"
				},
				"tests": ['::cue-region(span)']
			}
		}
	},

	"css-paint-api-1": {
		"title": "Painting API Level 1",
		"links": {
			"tr": "css-paint-api-1",
			"dev": "css-paint-api-1",
			"devtype": "houdini"
		},
		"values": {
			"properties": [
				"background-image",
				"list-style-image",
				"border-image",
				"cursor",
				"content"
			],
			"paint()": {
				"links": {
					"tr": "#paint-notation",
					"dev": "#paint-notation"
				},
				"tests": [
					"paint(company-logo)", "paint(chat-bubble, blue)", "paint(failing-argument-syntax, 1px, 2px)", "paint(arc, purple, 0.4turn, 0.8turn, 40px, 15px)"
				]
			}
		}
	},

	"css-layout-api-1": {
		"title": "Layout API Level 1",
		"links": {
			"tr": "css-layout-api-1",
			"dev": "css-layout-api-1",
			"devtype": "houdini"
		},
		"properties": {
			"display": {
				"links": {
					"tr": "#layout-api-containers",
					"dev": "#layout-api-containers"
				},
				"tests": "layout(foo)"
			}
		}
	},

	"css-shadow-parts": {
		"title": "Shadow Parts",
		"links": {
			"tr": "css-shadow-parts-1",
			"dev": "css-shadow-parts"
		},
		"selectors": {
			"::part": {
				"links": {
					"tr": "#part",
					"dev": "#part"
				},
				"tests": ["::part(label)"]
			}
		}
	},

	"css-variables": {
		"title": "Custom Properties for Cascading Variables",
		"links": {
			"tr": "css-variables",
			"dev": "css-variables-1"
		},
		"declaration": {
			"--*": {
				"links": {
					"tr": "#defining-variables",
					"dev": "#defining-variables"
				},
				"tests": ["--foo: 2px"]
			},
			"var(--*)": {
				"links": {
					"tr": "#using-variables",
					"dev": "#using-variables"
				},
				"tests": [
					"width: var(--foo)", "width: var(--FOO)", "width: var(--foo, 4px)",
					"color: rgba(255, 255, 255, var(--foo, .2) )"
				]
			}
		}
	},

	"fill-stroke": {
		"title": "Fill and Stroke Level 3",
		"links": {
			"tr": "fill-stroke-3",
			"dev": "fill-stroke",
			"devtype": "fxtf"
		},
		"properties": {
			"fill": {
				"links": {
					"tr": "#fill-shorthand",
					"dev": "#fill-shorthand"
				},
				"tests": [
					"url(foo.png), url(bar.svg)",
					"top left / 50% 60%",
					"border-box",
					"border-box padding-box",
					"url(foo.png) bottom right / cover padding-box content-box"
				]
			},
			"fill-rule": {
				"links": {
					"tr": "#fill-rule",
					"dev": "#fill-rule"
				},
				"tests": ["nonzero", "evenodd"]
			},
			"fill-break": {
				"links": {
					"tr": "#fill-break",
					"dev": "#fill-break"
				},
				"tests": ["bounding-box", "slice", "clone"]
			},
			"fill-color": {
				"links": {
					"tr": "#fill-color",
					"dev": "#fill-color"
				},
				"tests": "green"
			},
			"fill-image": {
				"links": {
					"tr": "#fill-image",
					"dev": "#fill-image"
				},
				"tests": [
					"url(foo.png)",
					"image('sprites.png#xywh=10,30,60,20')",
					"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
					"image('dark.png', black)",
					"image(green)",
					"linear-gradient(to bottom, yellow 0%, blue 100%)",
					"child",
					"child(2)"
				]
			},
			"fill-origin": {
				"links": {
					"tr": "#fill-origin",
					"dev": "#fill-origin"
				},
				"tests": ["match-parent", "fill-box", "stroke-box", "content-box", "padding-box", "border-box"]
			},
			"fill-position": {
				"links": {
					"tr": "#fill-position",
					"dev": "#fill-position"
				},
				"tests": ["center", "left 50%", "bottom 10px right 20px", "bottom 10px right", "top right 10px"]
			},
			"fill-size": {
				"links": {
					"tr": "#fill-size",
					"dev": "#fill-size"
				},
				"tests": ["auto", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"]
			},
			"fill-repeat": {
				"links": {
					"tr": "#fill-repeat",
					"dev": "#fill-repeat"
				},
				"tests": ["repeat-x", "repeat-y"].concat(["repeat", "space", "round", "no-repeat"].times(1, 2))
			},
			"fill-opacity": {
				"links": {
					"tr": "#fill-opacity",
					"dev": "#fill-opacity"
				},
				"tests": ["0.5", "45%"]
			},
			"stroke": {
				"links": {
					"tr": "#stroke-shorthand",
					"dev": "#stroke-shorthand"
				},
				"tests": [
					"url(foo.png), url(bar.svg)",
					"top left / 50% 60%",
					"border-box",
					"border-box padding-box",
					"url(foo.png) bottom right / cover padding-box content-box"
				]
			},
			"stroke-width": {
				"links": {
					"tr": "#stroke-width",
					"dev": "#stroke-width"
				},
				"tests": ["0", "1px", "25%"]
			},
			"stroke-align": {
				"links": {
					"tr": "#stroke-align",
					"dev": "#stroke-align"
				},
				"tests": ["center", "inset", "outset "]
			},
			"stroke-linecap": {
				"links": {
					"tr": "#stroke-linecap",
					"dev": "#stroke-linecap"
				},
				"tests": ["butt", "round", "square "]
			},
			"stroke-linejoin": {
				"links": {
					"tr": "#stroke-linejoin",
					"dev": "#stroke-linejoin"
				},
				"tests": [
					"crop", "arcs", "miter", "bevel", "round", "fallback",
					"crop bevel", "arcs round", "miter fallback"
				]
			},
			"stroke-miterlimit": {
				"links": {
					"tr": "#stroke-miterlimit",
					"dev": "#stroke-miterlimit"
				},
				"tests": "4"
			},
			"stroke-break": {
				"links": {
					"tr": "#stroke-break",
					"dev": "#stroke-break"
				},
				"tests": ["bounding-box", "slice", "clone "]
			},
			"stroke-dasharray": {
				"links": {
					"tr": "#stroke-dasharray",
					"dev": "#stroke-dasharray"
				},
				"tests": ["none", "0", "4px", "4px 12%", "4px 12% 3em", "4px 12% 3em 5px", "4px 12% 3em 5px 10%"]
			},
			"stroke-dashoffset": {
				"links": {
					"tr": "#stroke-dashoffset",
					"dev": "#stroke-dashoffset"
				},
				"tests": ["0", "4px", "12%"]
			},
			"stroke-dash-corner": {
				"links": {
					"tr": "#corner-control",
					"dev": "#corner-control"
				},
				"tests": ["none", "15px"]
			},
			"stroke-dash-justify": {
				"links": {
					"tr": "#corner-control",
					"dev": "#corner-control"
				},
				"tests": [
					"none", "stretch", "compress", "dashes", "gaps",
					"stretch dashes", "compress gaps dashes",
					"stretch gaps", "compress dashes gaps"
				]
			},
			"stroke-color": {
				"links": {
					"tr": "#stroke-color",
					"dev": "#stroke-color"
				},
				"tests": "green"
			},
			"stroke-image": {
				"links": {
					"tr": "#stroke-image",
					"dev": "#stroke-image"
				},
				"tests": [
					"url(foo.png)",
					"image('sprites.png#xywh=10,30,60,20')",
					"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
					"image('dark.png', black)",
					"image(green)",
					"linear-gradient(to bottom, yellow 0%, blue 100%)",
					"child",
					"child(2)"
				]
			},
			"stroke-origin": {
				"links": {
					"tr": "#stroke-origin",
					"dev": "#stroke-origin"
				},
				"tests": ["match-parent", "fill-box", "stroke-box", "content-box", "padding-box", "border-box"]
			},
			"stroke-position": {
				"links": {
					"tr": "#stroke-position",
					"dev": "#stroke-position"
				},
				"tests": ["center", "left 50%", "bottom 10px right 20px", "bottom 10px right", "top right 10px"]
			},
			"stroke-size": {
				"links": {
					"tr": "#stroke-size",
					"dev": "#stroke-size"
				},
				"tests": ["auto", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"]
			},
			"stroke-repeat": {
				"links": {
					"tr": "#stroke-repeat",
					"dev": "#stroke-repeat"
				},
				"tests": ["repeat-x", "repeat-y"].concat(["repeat", "space", "round", "no-repeat"].times(1, 2))
			},
			"stroke-opacity": {
				"links": {
					"tr": "#stroke-opacity",
					"dev": "#stroke-opacity"
				},
				"tests": ["0.5", "45%"]
			}
		}
	}
};
