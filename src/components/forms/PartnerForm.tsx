"use client";

import { useActionState } from "react";
import { submitPartnerForm } from "@/app/actions/email";
import { useLocale } from "@/lib/i18n";

const inputCls = "w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]";
const selectCls = "w-full px-4 py-3 border rounded-lg text-sm text-gray-500 outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]";

export function PartnerForm() {
  const { t } = useLocale();
  const [state, action, pending] = useActionState(
    async (_prev: { success: boolean; error?: string } | null, formData: FormData) => {
      return submitPartnerForm(formData);
    },
    null,
  );

  return (
    <form className="space-y-4" action={action}>
      {state?.success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
          {t("partnerPage.successMessage")}
        </div>
      )}
      {state?.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {state.error}
        </div>
      )}
      <input type="text" name="companyName" required placeholder={t("partnerPage.companyName")} className={inputCls} />
      <input type="text" name="contactPerson" placeholder={t("partnerPage.contactPerson")} className={inputCls} />
      <input type="email" name="email" required placeholder={t("contact.emailAddress")} className={inputCls} />
      <select name="partnershipType" className={selectCls}>
        <option value="">{t("partnerPage.partnershipType")}</option>
        <option value="Travel Agency">{t("partnerPage.travelAgency")}</option>
        <option value="Hotel / Resort">{t("partnerPage.hotelResort")}</option>
        <option value="Transport Provider">{t("partnerPage.transportProvider")}</option>
        <option value="Tour Operator">{t("partnerPage.tourOperator")}</option>
        <option value="Other">{t("partnerPage.other")}</option>
      </select>
      <textarea
        name="description"
        placeholder={t("partnerPage.tellAboutBusiness")}
        rows={4}
        className={`${inputCls} resize-none`}
      />
      <button
        type="submit"
        disabled={pending}
        className="bg-[rgb(230,0,0)] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
      >
        {pending ? t("common.sending") : t("partnerPage.submitInquiry")}
      </button>
    </form>
  );
}
