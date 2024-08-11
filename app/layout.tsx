import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Page Title',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <main className="main">{children}</main>
                <footer className="footer">
                    Built by: &nbsp;
                    <a
                        href="https://dinakajoy.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ezequiel Romero
                    </a>
                </footer>
            </body>
        </html>
    )
}