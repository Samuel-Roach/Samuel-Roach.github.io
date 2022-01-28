module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'monokai-pink': '#FF6188',
                'monokai-orange': '#FC9867',
                'monokai-yellow': '#FFD866',
                'monokai-green': '#A9DC76',
                'monokai-blue': '#78DCE8',
                'monokai-purple': '#AB9DF2',
                'monokai-black': '#2D2A2E'
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}