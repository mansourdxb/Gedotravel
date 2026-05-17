"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/actions/email";
import { useLocale } from "@/lib/i18n";

const inputCls = "w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]";
const selectCls = "w-full px-4 py-3 border rounded-lg text-sm text-gray-500 outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]";

export function ContactForm() {
  const { t } = useLocale();
  const [state, action, pending] = useActionState(
    async (_prev: { success: boolean; error?: string } | null, formData: FormData) => {
      return submitContactForm(formData);
    },
    null,
  );

  return (
    <form className="space-y-4" action={action}>
      {state?.success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
          {t("contact.successMessage")}
        </div>
      )}
      {state?.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {state.error}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="text" name="firstName" required placeholder={t("contact.firstName")} className={inputCls} />
        <input type="text" name="lastName" placeholder={t("contact.lastName")} className={inputCls} />
      </div>
      <input type="email" name="email" required placeholder={t("contact.emailAddress")} className={inputCls} />
      <input type="tel" name="phone" placeholder={t("contact.phoneNumber")} className={inputCls} />
      <select name="subject" className={selectCls}>
        <option value="">{t("contact.selectSubject")}</option>
        <option value="General Inquiry">{t("contact.generalInquiry")}</option>
        <option value="Tour Booking">{t("contact.tourBooking")}</option>
        <option value="Corporate / MICE">{t("contact.corporateMice")}</option>
        <option value="Partnership">{t("contact.partnership")}</option>
        <option value="Feedback">{t("contact.feedback")}</option>
      </select>
      <textarea
        name="message"
        required
        placeholder={t("contact.yourMessage")}
        rows={5}
        className={`${inputCls} resize-none`}
      />
      <button
        type="submit"
        disabled={pending}
        className="bg-[rgb(230,0,0)] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
      >
        {pending ? t("common.sending") : t("common.sendMessage")}
      </button>
    </form>
  );
}
