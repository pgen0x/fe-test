import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const NavLinks = () => (
    <>
      <Link
        to="/trade"
        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
      >
        Pasar
      </Link>
      <Link
        to="#"
        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
      >
        Tentang Kami
      </Link>
      <Link
        to="#"
        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
      >
        Kontak Kami
      </Link>
    </>
  );

  return (
    <header className="bg-[#00050D] py-4 sticky top-0 z-50">
      <div className="mx-auto flex max-w-[1512px] items-center justify-between px-6">
        <div className="flex items-center gap-4 lg:gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Pasar Logo"
              className="h-10 lg:h-[68px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLinks />
          </nav>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            className="rounded-full btn-gradient-border px-8 text-white hover:opacity-80 transition-opacity"
          >
            SIGN IN
          </Button>
          <Button
            variant="ghost"
            className="rounded-full btn-gradient-border px-8 text-white hover:opacity-80 transition-opacity"
          >
            SIGN UP
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="!h-5 !w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#00050D] border-white/5 text-white"
            >
              <nav className="flex flex-col gap-6 mt-12">
                <NavLinks />
                <div className="flex flex-col gap-4 mt-8">
                  <Button
                    variant="ghost"
                    className="rounded-full btn-gradient-border px-8 text-white w-full"
                  >
                    SIGN IN
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-full btn-gradient-border px-8 text-white w-full"
                  >
                    SIGN UP
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
