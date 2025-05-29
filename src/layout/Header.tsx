import Link from 'next/link';

export default function Header() {
    return (
        <header style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <nav style={{ display: 'flex', gap: 20 }}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}
