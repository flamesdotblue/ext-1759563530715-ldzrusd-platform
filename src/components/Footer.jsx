export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} SplineTech. All rights reserved.</p>
          <div className="text-sm text-white/60 space-x-4">
            <a href="#privacy" className="hover:text-white/80">Privacy</a>
            <a href="#terms" className="hover:text-white/80">Terms</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
