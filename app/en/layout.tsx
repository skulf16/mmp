import SetHtmlLang from "@/components/SetHtmlLang";

/**
 * Layout für die englischen Seiten. Setzt clientseitig <html lang="en">.
 * Header/Footer/Body kommen weiterhin aus dem Wurzel-Layout.
 */
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetHtmlLang lang="en" />
      {children}
    </>
  );
}
