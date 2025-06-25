import React from 'react';
import { getAllCategories } from '@/lib/airtable';

  export async function getStaticProps() {
  const categories = await getAllCategories();

  return {
    props: {
      categories,
    },
  };
}

export default function LegalPage() {
    return (
        <div className="relative z-[10] max-w-4xl mx-auto w-full px-4 py-4">
            <div className="max-w-3xl mx-auto w-full px-4 py-10">
                <h1 className="text-2xl font-bold mb-4">Legal & Disclosures</h1>
                {/* Expanded Affiliate Disclosure */}
                <h2 className="text-xl font-semibold mt-4">Affiliate Disclosure</h2>
                <p className="mb-4 text-gray-700">
                    AI Tool Pouch participates in various affiliate marketing programs, which means we may earn commissions on qualifying purchases made through links on this site to third-party products or services. When you click on an affiliate link and make a purchase, we may receive a small commission from the vendor, at no additional cost to you. These commissions are a primary way we support the significant time and resources required to research, curate, maintain, and grow this platform, allowing us to continue providing valuable content and unbiased information. Our editorial integrity is paramount, and our participation in affiliate programs does not influence our unbiased reviews, assessments, or the selection of tools featured. We only recommend products and services that we believe offer genuine value to our audience.
                </p>
                {/* Expanded No Guarantees */}
                <h2 className="text-xl font-semibold mt-4">Disclaimer & No Guarantees</h2>
                <p className="mb-4 text-gray-700">
                    The information provided on AI Tool Pouch is for general informational purposes only. While we strive to ensure that all details about the tools listed, including their features, pricing, and availability, are accurate and up-to-date, the AI landscape is constantly evolving. Therefore, we make no warranties or guarantees of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. It is your responsibility to verify any information directly with the respective tool vendor before making any purchasing decisions or commitments.
                </p>
                {/* Expanded Privacy Section */}
                <h2 className="text-xl font-semibold mt-4">Privacy & Data Use</h2>
                <p className="mb-4 text-gray-700">
                    Your privacy is important to us. AI Tool Pouch does not collect any personally identifiable information from your visit beyond basic, aggregated, and anonymized analytics data to understand website traffic, user behavior patterns (e.g., popular pages, referral sources), and overall site performance. This data helps us improve the user experience and tailor our content. We do not use cookies for tracking individual users, nor do we sell, share, or rent any user data to third parties for marketing or any other purposes. For a more detailed explanation of our data practices, please refer to our full Privacy Policy, which will be published soon.
                </p>
                {/* Expanded Copyright */}
                <h2 className="text-xl font-semibold mt-4">Copyright</h2>
                <p className="text-gray-700">
                    © {new Date().getFullYear()} AI Tool Pouch. All content and materials on this website, including but not limited to text, graphics, logos, images, and tool descriptions, are the intellectual property of AI Tool Pouch unless otherwise stated. All rights are reserved. Unauthorized use, reproduction, distribution, or duplication of any content from this site without express written permission from AI Tool Pouch is strictly prohibited. For inquiries regarding content licensing or permissions, please contact us through the provided channels.
                </p>
            </div>
        </div>
    );
}
