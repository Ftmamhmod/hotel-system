import { useTranslation } from "react-i18next";

export default function AdminNavbar() {
  const { t } = useTranslation();
  return <div>{t("admin_navbar")}</div>;
}
