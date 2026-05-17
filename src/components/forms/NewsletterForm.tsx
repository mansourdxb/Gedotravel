"use client";

import { useActionState } from "react";
import { submitNewsletterForm } from "@/actions/email";
import { useLocale } from "@/lib/i18n";

export function NewsletterForm() {
  const { t } = useLocale();
  const [state, action, pending] = useActionState(
    async (_prev: { success: boolean; error?: string } | null, formData: FormData) => {
      return submitNewsletterForm(formData);
    },
    null,
  );

  if (state?.success) {
    return (
      <div className="w-full md:w-auto">
        <p className="text-green-400 text-sm">{t("footer.subscribeSuccess")}</p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-auto">
      <form action={action} className="flex gap-0">
        <input
          type="email"
          name="email"
          required
          placeholder={t("footer.emailPlaceholder")}
          className="flex-1 md:w-[280px] px-4 py-3 bg-white text-gray-900 text-sm rounded-s-lg outline-none placeholder:text-gray-400"
        />
        <button
          type="submit"
          disabled={pending}
          className="bg-[rgb(230,0,0)] text-white px-6 py-3 rounded-e-lg font-semibold text-sm hover:bg-red-700 transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {pending ? "..." : t("footer.subscribe")}
        </button>
      </form>
      {state?.error && (
        <p className="text-red-400 text-sm mt-2">{state.error}</p>
      )}
    </div>
  );
}
