import { useState } from "react";

const pages = [
    { name: "Home", progress: 0 },
    { name: "About", progress: 0.18 },
    { name: "Projects", progress: 0.31 },
    { name: "Services", progress: 0.44 },
    { name: "Contact", progress: 0.57 },
    { name: "Testimonials", progress: 0.70 }
    
];

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const navigateToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        progress: number
    ) => {
        e.preventDefault();

        const section = document.querySelector(
            ".building-section"
        ) as HTMLElement | null;

        if (!section) return;

        const sectionTop =
            section.getBoundingClientRect().top +
            window.scrollY;

        const scrollPosition =
            sectionTop +
            section.offsetHeight * progress;

        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });

        setMenuOpen(false);
    };

    return (
        <header className="site-header">

            <a
                href="#home"
                className="logo"
                onClick={(e) => navigateToSection(e, 0)}
            >
                <img src="/logo.png" alt="Ryah" />
            </a>

            <nav className={`main-nav ${menuOpen ? "mobile-open" : ""}`}>

                {pages.map((page) => (
                    <a
                        key={page.name}
                        href={`#${page.name.toLowerCase()}`}
                        onClick={(e) =>
                            navigateToSection(e, page.progress)
                        }
                    >
                        {page.name}
                    </a>
                ))}

            </nav>

            <div className="header-right">

                <a
                    href="tel:+919342077629"
                    className="enquire-button"
                >
                    <span>
                        GET ENQUIRY{" "}
                        <i className="fa-solid fa-phone"></i>
                    </span>
                </a>

            </div>

            <button
                className={`menu-toggle ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

        </header>
    );
}