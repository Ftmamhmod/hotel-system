import { useTranslation } from "react-i18next";

export default function AdminDashboard() {
  const { t } = useTranslation();
  return <div>{t("admin_dashboard")}</div>;
}
