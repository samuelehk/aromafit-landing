import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-100/80 mt-32">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="font-display text-3xl text-cream-50">AromaFit</div>
            <div className="text-xs uppercase tracking-widest text-rosegold-light mt-1">
              Wellness
            </div>
            <p className="mt-6 text-sm leading-relaxed max-w-xs">
              The aromatherapy diffuser that quiets the noise of cravings.
              One device. Lasting change.
            </p>
          </div>

          <div>
            <h4 className="text-cream-50 text-sm uppercase tracking-widest font-medium mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/hush" className="hover:text-rosegold-light">HUSH Diffuser</Link></li>
              <li><Link to="/hush" className="hover:text-rosegold-light">HUSH Mint</Link></li>
              <li><Link to="/hush" className="hover:text-rosegold-light">HUSH Citrus</Link></li>
              <li><Link to="/hush" className="hover:text-rosegold-light">HUSH Spice</Link></li>
              <li><Link to="/hush" className="hover:text-rosegold-light">Discovery Pack</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream-50 text-sm uppercase tracking-widest font-medium mb-5">
              About
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#science" className="hover:text-rosegold-light">The Science</a></li>
              <li><a href="#how" className="hover:text-rosegold-light">How It Works</a></li>
              <li><a href="#reviews" className="hover:text-rosegold-light">Reviews</a></li>
              <li><a href="#faq" className="hover:text-rosegold-light">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream-50 text-sm uppercase tracking-widest font-medium mb-5">
              Stay in the loop
            </h4>
            <p className="text-sm mb-4">
              Wellness rituals, new scents, and quiet moments — once a month.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-cream-50/10 border border-cream-50/20 rounded-full px-4 py-2.5 text-sm text-cream-50 placeholder:text-cream-50/40 focus:outline-none focus:border-rosegold-light"
              />
              <button className="bg-rosegold text-cream-50 rounded-full px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-rosegold-dark transition">
                Join
              </button>
            </form>
            <div className="flex gap-5 mt-6 text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-rosegold-light">Instagram</a>
              <a href="#" className="hover:text-rosegold-light">TikTok</a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-50/10 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream-100/50">
          <div>© {new Date().getFullYear()} AromaFit. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream-50">Privacy</a>
            <a href="#" className="hover:text-cream-50">Terms</a>
            <a href="#" className="hover:text-cream-50">Shipping & Returns</a>
          </div>
        </div>

        <p className="text-[10px] text-cream-100/40 mt-8 leading-relaxed max-w-3xl">
          *AromaFit and HUSH are wellness products designed to support relaxation
          and mindful moments. They are not intended to diagnose, treat, cure, or
          prevent any disease. Individual experiences may vary. The aromatherapy
          tradition references aromatic compounds long used in personal wellness
          rituals.
        </p>
      </div>
    </footer>
  );
}
