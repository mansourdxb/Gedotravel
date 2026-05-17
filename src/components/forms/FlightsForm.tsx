"use client";

import { useActionState } from "react";
import { Plane } from "lucide-react";
import { submitFlightsForm } from "@/app/actions/email";
import { useLocale } from "@/lib/i18n";

const inputCls = "w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]";
const selectCls = "w-full px-4 py-3 border rounded-lg text-sm text-gray-500 outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]";

export function FlightsForm() {
  const { t } = useLocale();
  const [state, action, pending] = useActionState(
    async (_prev: { success: boolean; error?: string } | null, formData: FormData) => {
      return submitFlightsForm(formData);
    },
    null,
  );

  return (
    <form className="space-y-4 bg-white border rounded-2xl p-6 md:p-8 shadow-sm" action={action}>
      {state?.success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
          {t("flights.successMessage")}
        </div>
      )}
      {state?.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {state.error}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="text" name="fullName" required placeholder={t("flights.fullName")} className={inputCls} />
        <input type="email" name="email" required placeholder={t("flights.email")} className={inputCls} />
      </div>
      <input type="tel" name="phone" placeholder={t("flights.phone")} className={inputCls} />
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="text" name="from" required placeholder={t("flights.from")} className={inputCls} />
        <input type="text" name="to" required placeholder={t("flights.to")} className={inputCls} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="date" name="departDate" placeholder={t("flights.departDate")} className={inputCls} />
        <input type="date" name="returnDate" placeholder={t("flights.returnDate")} className={inputCls} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <input type="number" name="passengers" min={1} defaultValue={1} placeholder={t("flights.passengers")} className={inputCls} />
        <select name="cabinClass" className={selectCls}>
          <option value="">{t("flights.cabinClass")}</option>
          <option value="Economy">{t("flights.classEconomy")}</option>
          <option value="Business">{t("flights.classBusiness")}</option>
          <option value="First">{t("flights.classFirst")}</option>
        </select>
        <select name="tripType" className={selectCls}>
          <option value="">{t("flights.tripType")}</option>
          <option value="One Way">{t("flights.oneWay")}</option>
          <option value="Round Trip">{t("flights.roundTrip")}</option>
          <option value="Multi-City">{t("flights.multiCity")}</option>
        </select>
      </div>
      <textarea
        name="notes"
        placeholder={t("flights.notes")}
        rows={3}
        className={`${inputCls} resize-none`}
      />
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[rgb(230,0,0)] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Plane className="w-4 h-4" />
        {pending ? t("common.sending") : t("flights.submit")}
      </button>
      <p className="text-xs text-center text-muted-foreground">
        {t("flights.formNote")}
      </p>
    </form>
  );
}
