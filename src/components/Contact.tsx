import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto hairline-top">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bold Headline & Call to Action (7 cols) */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>LET'S COLLABORATE</span>
            <span className="text-mutedText">· <span className="whitespace-nowrap">OPEN FOR COMMISSIONS</span></span>
          </div>

          <h2 className="font-display font-extrabold tracking-tighter text-paper mb-6">
            <span className="block mb-2 text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-paper">
              HAVE AN IDEA?
            </span>
            <span className="text-accent italic font-accent block text-[1.75rem] sm:text-[2.6rem] lg:text-[2.9rem] xl:text-[3.4rem] leading-[0.98]">
              <span className="whitespace-nowrap">LET'S MAKE IT</span>
              <br />
              <span>MOVE.</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-subtext font-sans leading-relaxed max-w-xl mb-10">
            Have a project, idea or story that needs motion? Whether you need full character animation, a broadcast-ready logo reveal, or a compelling explainer video, let's create something worth watching.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:talhaismail969@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Motion%20Design"
              className="px-8 py-4 rounded bg-accent text-accent-text font-mono text-xs font-bold tracking-wider uppercase hover:bg-accent-hover transition-all flex items-center gap-2.5 shadow-md active:scale-[0.98]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:talhaismail969@gmail.com"
              className="px-6 py-4 rounded bg-bg-card hairline-border text-paper font-mono text-xs tracking-wider uppercase hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>EMAIL DIRECTLY</span>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Contact Details & Coordinates (5 cols) */}
        <div className="lg:col-span-5 p-8 rounded-xl bg-bg-card hairline-border shadow-xl space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-subtext uppercase hairline-bottom pb-4 gap-2">
            <span className="text-accent font-semibold whitespace-nowrap">STUDIO DIRECT REACH</span>
            <span className="whitespace-nowrap">KARACHI, PK (UTC+5)</span>
          </div>

          {/* Email Box */}
          <div className="p-4 rounded bg-bg-secondary hairline-border flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-bg-tertiary hairline-border flex items-center justify-center text-accent">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-mutedText uppercase">PRIMARY EMAIL</div>
                <a
                  href="mailto:talhaismail969@gmail.com"
                  className="font-mono text-xs sm:text-sm text-paper group-hover:text-accent transition-colors font-medium"
                >
                  talhaismail969@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard('talhaismail969@gmail.com', 'email')}
              className="p-2 rounded bg-bg-card hairline-border text-subtext hover:text-paper hover:border-accent transition-colors"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Box */}
          <div className="p-4 rounded bg-bg-secondary hairline-border flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-bg-tertiary hairline-border flex items-center justify-center text-accent">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-mutedText uppercase">DIRECT PHONE / WHATSAPP</div>
                <a
                  href="tel:+923092884392"
                  className="font-mono text-xs sm:text-sm text-paper group-hover:text-accent transition-colors font-medium"
                >
                  0309-2884392
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard('+923092884392', 'phone')}
              className="p-2 rounded bg-bg-card hairline-border text-subtext hover:text-paper hover:border-accent transition-colors"
              title="Copy Phone Number"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location Box */}
          <div className="p-4 rounded bg-bg-secondary hairline-border flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-bg-tertiary hairline-border flex items-center justify-center text-accent">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-mutedText uppercase">LOCATION BASE</div>
              <div className="font-sans text-xs sm:text-sm text-paper font-medium whitespace-nowrap">
                Garden East, Karachi, Pakistan
              </div>
            </div>
          </div>

          {/* Fast Inquiry Response Notice */}
          <div className="p-4 rounded bg-bg-primary/80 hairline-border text-[11px] font-mono text-subtext flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>TYPICAL RESPONSE TIME</span>
            </span>
            <span className="text-paper font-bold">WITHIN 24 HOURS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
