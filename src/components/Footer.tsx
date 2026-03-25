import { Heart, Github, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-emerald-900/5 dark:border-emerald-100/5 bg-[#f7fdfa] dark:bg-[#0a1a12]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* ১. কপিরাইট এবং ব্র্যান্ডিং */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-emerald-900/80 dark:text-emerald-100/80">
              BaniBox Studio
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              © {new Date().getFullYear()} সর্বস্বত্ব সংরক্ষিত
            </p>
          </div>

          {/* ২. মেইড ইন বাংলাদেশ সেকশন (বাংলা টেক্সট সহ) */}
          <div className="flex flex-col items-center gap-3">
             <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30">
                <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
                  বাংলাদেশে তৈরি
                </span>
                <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" />
             </div>
          </div>

          {/* ৩. সোশ্যাল এবং পলিসি লিংক */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6 items-center">
               <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors"><Github size={16} /></a>
               <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors"><Facebook size={16} /></a>
               <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors"><Twitter size={16} /></a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">গোপনীয়তা নীতি</a>
              <span className="text-slate-200 dark:text-slate-800">•</span>
              <a href="#" className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">শর্তাবলী</a>
            </div>
          </div>

        </div>

        {/* নিচের ডেকোরেটিভ লাইন */}
        <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"></div>
      </div>
    </footer>
  );
}