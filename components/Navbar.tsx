export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-porcelain/95 backdrop-blur border-b border-harbor/50">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold tracking-tight hover:text-gold transition-colors">Good Hands</a>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="/premium/weddings" className="hover:text-gold transition-colors">Weddings</a>
          <a href="/premium/retreats" className="hover:text-gold transition-colors">Retreats</a>
          <a href="/premium/corporate" className="hover:text-gold transition-colors">Corporate</a>
          <a href="/premium/membership" className="hover:text-gold transition-colors">Membership</a>
        </div>
      </nav>
    </header>
  );
}