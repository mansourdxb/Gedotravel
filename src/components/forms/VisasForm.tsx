"use client";

import { useActionState } from "react";
import { Stamp } from "lucide-react";
import { submitVisasForm } from "@/actions/email";
import { useLocale } from "@/lib/i18n";

const inputCls = "w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]";
const selectCls = "w-full px-4 py-3 border rounded-lg text-sm text-gray-500 outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]";

export function VisasForm() {
  const { t } = useLocale();
  const [state, action, pending] = useActionState(
    async (_prev: { success: boolean; error?: string } | null, formData: FormData) => {
      return submitVisasForm(formData);
    },
    null,
  );

  return (
    <form className="space-y-4 bg-white border rounded-2xl p-6 md:p-8 shadow-sm" action={action}>
      {state?.success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
          {t("visas.successMessage")}
        </div>
      )}
      {state?.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {state.error}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="text" name="fullName" required placeholder={t("visas.fullName")} className={inputCls} />
        <input type="email" name="email" required placeholder={t("visas.email")} className={inputCls} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="tel" name="phone" placeholder={t("visas.phone")} className={inputCls} />
        <input type="text" name="nationality" placeholder={t("visas.nationality")} className={inputCls} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="text" name="destination" placeholder={t("visas.destination")} className={inputCls} />
        <select name="visaType" className={selectCls}>
          <option value="">{t("visas.visaType")}</option>
          <option value="Tourist">{t("visas.typeTourist")}</option>
          <option value="Business">{t("visas.typeBusiness")}</option>
          <option value="Transit">{t("visas.typeTransit")}</option>
          <option value="Umrah">{t("visas.typeUmrahOption")}</option>
          <option value="Family">{t("visas.typeFamily")}</option>
        </select>
      </div>
      <input type="date" name="travelDate" placeholder={t("visas.travelDate")} className={inputCls} />
      <textarea
        name="notes"
        placeholder={t("visas.notes")}
        rows={3}
        className={`${inputCls} resize-none`}
      />
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[rgb(230,0,0)] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Stamp className="w-4 h-4" />
        {pending ? t("common.sending") : t("visas.submit")}
      </button>
      <p className="text-xs text-center text-muted-foreground">
        {t("visas.formNote")}
      </p>
    </form>
  );
}
