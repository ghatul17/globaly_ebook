import { useEffect } from "react";

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#1E293B] mb-8 tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-neutral-600 leading-relaxed">
          <section>
            <p className="text-sm text-neutral-400 mb-6">Last Updated: April 9, 2024</p>
            <p>
              At Globaly APP, accessible from globaly.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Globaly APP and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Contact Information: Name, email address, phone number.</li>
              <li>Academic Information: Intended study destination, current education level, and field of interest.</li>
              <li>Communication: Records of correspondence if you contact us directly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide, operate, and maintain our website and services.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Develop new products, services, features, and functionality.</li>
              <li>Communicate with you, either directly or through one of our partners.</li>
              <li>Connect you with verified educational agents and universities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">Data Protection</h2>
            <p>
              We follow standard industry practices to protect the personal information submitted to us, both during transmission and once we receive it. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">Your Rights</h2>
            <p>
              You have the right to request copies of your personal data, request correction of any information you believe is inaccurate, and request the deletion of your personal data under certain conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@globaly.io.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
