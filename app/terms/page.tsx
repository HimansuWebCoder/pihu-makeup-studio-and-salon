import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // optional: specify weights you want
});

export default function TermsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className={`${playfair.className} text-4xl font-bold text-center mb-8`}>Terms and Conditions</h1>

      <div className="prose prose-lg max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>1. Introduction</h2>
          <p>
            Welcome to Pihu Makeup Studio and Salon. These Terms and Conditions govern your use of our services and
            website. By accessing our services, you agree to be bound by these Terms and Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>2. General Terms</h2>
          <p>
            Pihu Makeup Studio and Salon provides makeup, hair styling, skincare, and nail services. All services are
            subject to availability and must be booked in advance.
          </p>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>2.1 Appointments</h3>
          <p>
            Appointments can be made through our website, by phone, or in person. We require a minimum of 24 hours'
            notice for cancellations or rescheduling. Late cancellations or no-shows may result in a cancellation fee of
            50% of the service price.
          </p>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>2.2 Payment</h3>
          <p>
            We accept cash, credit/debit cards, and digital payment methods. For certain services, particularly bridal
            packages, a non-refundable deposit of 30% is required at the time of booking.
          </p>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>2.3 Refunds</h3>
          <p>
            If you are dissatisfied with our services, please inform us immediately. Refunds are considered on a
            case-by-case basis and are at the discretion of management. Products purchased from our salon are
            non-refundable once opened.
          </p>
        </section>

{/*        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>3. Voucher & Coupon Terms</h2>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>3.1 Gift Vouchers</h3>
          <p>
            Gift vouchers are valid for 6 months from the date of purchase unless otherwise specified. Gift vouchers
            cannot be exchanged for cash and must be presented at the time of service. Lost or stolen vouchers cannot be
            replaced.
          </p>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>3.2 Promotional Coupons</h3>
          <p>
            Promotional coupons are subject to specific terms mentioned with each coupon. Unless otherwise stated,
            coupons:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Cannot be combined with other offers or discounts</li>
            <li>Must be mentioned at the time of booking</li>
            <li>Must be presented before payment</li>
            <li>Are valid for a single use only</li>
            <li>Have specific expiration dates that cannot be extended</li>
          </ul>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>3.3 Referral Program</h3>
          <p>
            Our referral program offers 20% off for both the referrer and the new client. The discount applies to the
            next service after the new client's first appointment. Referrals must be verified by providing the
            referrer's name or code at the time of booking.
          </p>
        </section>*/}

        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>3. Premium Membership Card Terms</h2>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>4.1 Membership</h3>
          <p>
            The Premium Beauty Card is valid for 12 months from the date of purchase. Membership is non-transferable and
            can only be used by the registered cardholder. Photo ID may be required when using the card.
          </p>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>4.2 Benefits</h3>
          <p>
            Premium Beauty Card benefits include 25% discount on all regular services, priority booking, quarterly
            consultations, and other benefits as specified at the time of purchase. Benefits cannot be combined with
            other offers unless explicitly stated.
          </p>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>4.3 Renewal</h3>
          <p>
            Membership can be renewed within 30 days before or after the expiration date. Renewal within this period may
            qualify for special renewal rates. Benefits cannot be claimed during any period when the membership is
            expired.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>4. Health and Safety</h2>
          <p>
            Clients are required to inform us of any allergies, skin conditions, or health issues that may affect the
            service. We reserve the right to refuse service if we believe it may cause harm or discomfort to the client.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>5. Privacy Policy</h2>
          <p>
            We collect personal information for appointment booking and service customization. This information is kept
            confidential and is not shared with third parties without your consent. For more details, please refer to
            our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>6. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, and images, is the property of Pihu Makeup
            Studio and Salon and is protected by copyright laws. We may use before and after photos of clients for
            promotional purposes with their explicit consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>7. Liability</h2>
          <p>
            Pihu Makeup Studio and Salon is not liable for any damage to personal belongings while on our premises. We
            take all reasonable precautions to ensure the safety and satisfaction of our clients.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>8. Service-Specific Terms</h2>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>9.1 Bridal Services</h3>
          <p>
            Bridal packages require booking at least 3 months in advance. A 30% non-refundable deposit is required to
            secure the date. Final payment is due 7 days before the wedding date. Cancellations within 30 days of the
            wedding date are non-refundable.
          </p>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>9.2 Hair Services</h3>
          <p>
            Additional charges may apply for extra-long or thick hair. The final price will be confirmed during
            consultation. We are not responsible for adverse reactions to hair treatments if the client has not
            disclosed relevant information about previous treatments or conditions.
          </p>
          <h3 className={`${playfair.className} text-xl font-semibold text-rose-600 dark:text-rose-400 mt-4 mb-2`}>9.3 Skincare Services</h3>
          <p>
            Clients must disclose all skincare products currently in use and any medical conditions that might affect
            treatment. We reserve the right to refuse service if we believe a treatment may cause adverse reactions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>9. Changes to Terms and Conditions</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately
            upon posting on our website. Continued use of our services after any modifications constitutes acceptance of
            the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>10. Contact Information</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
          <p>
            Pihu Makeup Studio and Salon
            <br />
            Srusti Plaza, First Floor Infront of Bharat Petrol Pump, Sundarapada Rd, Kantilo, Khordha District
            <br />
            Bhubaneswar, Odisha, Pin-751002
            <br />
            Phone: +91 9438222888
            <br />
            Email: info@pihumakeupstudio.com
          </p>
        </section>

        <p className="text-center mt-12">Last updated: May 25, 2025</p>
      </div>
    </div>
  )
}
