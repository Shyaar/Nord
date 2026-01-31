import Link from 'next/link';
import { Button } from './ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-orange-700 flex items-center justify-center">
                <span className="font-bold text-black text-xl">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Nord</span>
            </div>
            <p className="text-zinc-500 text-sm mb-6 max-w-xs">
              The smartest way to trade. Copy verified experts and grow your wealth automatically.
            </p>
            <div className="flex gap-4">
               <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-zinc-400 transition-all flex items-center justify-center cursor-pointer">
                   <span className="sr-only">Twitter</span>
                   <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Platform</h3>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Browse Traders</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Company</h3>
             <ul className="space-y-4 text-zinc-500 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-zinc-500 text-sm mb-4">
              Get the latest market insights and platform updates.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email"
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 w-full"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} Nord. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
             <Link href="#" className="hover:text-white transition-colors">Risk Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
