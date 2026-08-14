<!DOCTYPE html>
<html lang="id" class="light">
<head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>@yield('title', 'ARSIP KARYA - TRPL Polibatam')</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Literata:opsz,wght@7..72,400&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
<style>
    html {
        scroll-behavior: smooth;
    }

    .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }

    body {
        background-color: #EDEEE7;
        background-image: radial-gradient(circle, rgba(5, 13, 10, 0.07) 1px, transparent 1px);
        background-size: 22px 22px;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #EDEEE7;
    }

    ::-webkit-scrollbar-thumb {
        background: #050d0a;
        border-radius: 999px;
        border: 2px solid #EDEEE7;
    }

    .torn-tab {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px));
    }

    .plaque-row {
        transition: all 0.2s ease-in-out;
    }

    .plaque-row:hover {
        background-color: #ffffff;
        transform: translateY(-2px);
    }

    .blob {
        filter: blur(60px);
        pointer-events: none;
    }

    @keyframes fade-up {
        from {
            opacity: 0;
            transform: translateY(16px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-up {
        animation: fade-up 0.7s ease-out both;
    }

    .delay-1 {
        animation-delay: .08s;
    }

    .delay-2 {
        animation-delay: .18s;
    }

    .delay-3 {
        animation-delay: .28s;
    }

    @keyframes ping-slow {

        0%,
        100% {
            transform: scale(1);
            opacity: .6;
        }

        50% {
            transform: scale(1.4);
            opacity: 0;
        }
    }

    .animate-ping-slow {
        animation: ping-slow 2.5s cubic-bezier(0, 0, .2, 1) infinite;
    }
</style>
<script id="tailwind-config">
    tailwind.config = {
        darkMode: "class",
        theme: {
            extend: {
                colors: {
                    "primary-fixed-dim": "#6E97A3",
                    "secondary-container": "#EE152A",
                    "tertiary-fixed-dim": "#6FB8C7",
                    "on-surface-variant": "#434845",
                    "secondary-fixed-dim": "#C10E22",
                    "tertiary-fixed": "#B7E4EC",
                    "on-error": "#ffffff",
                    "on-secondary-fixed-variant": "#7D0011",
                    "surface-container-low": "#f6f3f2",
                    "surface-container-lowest": "#ffffff",
                    "tertiary-container": "#0F7A93",
                    "error": "#ba1a1a",
                    "outline": "#737875",
                    "secondary": "#D0102A",
                    "on-secondary-fixed": "#410008",
                    "on-primary": "#ffffff",
                    "on-primary-container": "#B9D3D9",
                    "surface-container-highest": "#e4e2e1",
                    "primary": "#004B5F",
                    "surface-container-high": "#eae8e6",
                    "on-primary-fixed-variant": "#1F4750",
                    "on-tertiary-fixed": "#002F38",
                    "surface": "#fcf9f7",
                    "on-secondary-container": "#ffffff",
                    "on-tertiary": "#ffffff",
                    "surface-tint": "#57615c",
                    "on-tertiary-fixed-variant": "#0B4650",
                    "surface-dim": "#dcd9d8",
                    "tertiary": "#0B6E86",
                    "on-tertiary-container": "#075A6E",
                    "on-secondary": "#ffffff",
                    "secondary-fixed": "#FFB4B8",
                    "error-container": "#ffdad6",
                    "inverse-on-surface": "#f3f0ef",
                    "on-surface": "#1b1c1b",
                    "surface-bright": "#fcf9f7",
                    "surface-container": "#f0edec",
                    "inverse-surface": "#303030",
                    "primary-container": "#00303F",
                    "on-primary-fixed": "#00232D",
                    "primary-fixed": "#CFE6EC",
                    "on-error-container": "#93000a",
                    "inverse-primary": "#7FC3D6",
                    "on-background": "#1b1c1b",
                    "background": "#fcf9f7",
                    "outline-variant": "#c3c8c4",
                    "surface-variant": "#e4e2e1"
                },
                borderRadius: {
                    DEFAULT: "0.25rem",
                    lg: "0.375rem",
                    xl: "0.5rem",
                    full: "0.75rem"
                },
                spacing: {
                    gutter: "24px",
                    "margin-mobile": "16px",
                    "plaque-padding": "32px",
                    "margin-desktop": "64px",
                    base: "4px"
                },
                fontFamily: {
                    "metadata-caps": ["IBM Plex Mono"],
                    "label-mono": ["IBM Plex Mono"],
                    "headline-lg": ["Space Grotesk"],
                    "headline-lg-mobile": ["Space Grotesk"],
                    "body-main": ["Literata"],
                    "headline-xl": ["Space Grotesk"],
                    "body-sm": ["Literata"]
                },
                fontSize: {
                    "metadata-caps": ["12px", { lineHeight: "1", letterSpacing: "0.15em", fontWeight: "500" }],
                    "label-mono": ["14px", { lineHeight: "1.2", fontWeight: "400" }],
                    "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
                    "headline-lg-mobile": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
                    "body-main": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
                    "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
                    "body-sm": ["16px", { lineHeight: "1.5", fontWeight: "400" }]
                }
            }
        }
    }
</script>
@stack('styles')
</head>
<body class="text-primary font-body-main min-h-screen flex flex-col">
@yield('content')
</body>
</html>
