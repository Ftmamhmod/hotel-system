import { useTranslation } from "react-i18next";
import "../../../i18n/i18n";

export default function AdminSidebar() {
  const { t } = useTranslation();
  return <div>{t("admin_sidebar")}</div>;
}
