import { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#1E293B] mb-8 tracking-tight">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-neutral-600 leading-relaxed">
          <section>
            <p className="text-sm text-neutral-400 mb-6">Last Updated: April 9, 2024</p>
            <p>
              By accessing the website at globaly.io, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">1. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Globaly APP's website for personal, non-commercial transitory viewing only.
            </p>
            <p className="mt-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by Globaly APP at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">2. Disclaimer</h2>
            <p>
              The materials on Globaly APP's website are provided on an 'as is' basis. Globaly APP makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">3. Limitations</h2>
            <p>
              In no event shall Globaly APP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Globaly APP's website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">4. Accuracy of Materials</h2>
            <p>
              The materials appearing on Globaly APP's website could include technical, typographical, or photographic errors. Globaly APP does not warrant that any of the materials on its website are accurate, complete or current. Globaly APP may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">5. Links</h2>
            <p>
              Globaly APP has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Globaly APP of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Globaly APP operates and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
