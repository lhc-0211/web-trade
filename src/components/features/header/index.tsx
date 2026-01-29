import Logo from "@/assets/imgs/logo/lhc_logo.png";
import { Earth, Lightbulb, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";
import ThemeSetting from "./component/ThemeSetting";

export default function Header() {
  const { t } = useTranslation();

  const settingRef = useRef<HTMLDivElement>(null);

  const [openSetting, setOpenSetting] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingRef.current &&
        !settingRef.current.contains(event.target as Node)
      ) {
        setOpenSetting(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingRef]);

  return (
    <header className="flex items-center justify-between w-full h-full bg-bg-secondary pr-2 md:pr-4 border-b border-bg-tertiary">
      <img
        src={Logo}
        alt="logo-website"
        className="md:h-14 md:w-14 w-12 h-12"
      />

      {/* Chức năng */}
      <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
        {/* Cài đặt giao diện */}
        <div className="relative">
          <div
            className="hover:bg-primary-hover p-1 rounded-md"
            data-tooltip-id="global-tooltip"
            data-tooltip-content="Cài đặt giao diện!"
            onClick={() => setOpenSetting(true)}
          >
            <Settings className="size-5" />
          </div>
          {openSetting && (
            <div
              className="absolute top-7 right-0 z-9999 md:px-4 md:py-2 px-2 py-1 bg-bg-tertiary rounded-md md:w-80 w-50 border border-border-informative/10 flex flex-col gap-3"
              ref={settingRef}
            >
              <div className="flex flex-row items-center justify-between">
                <div className="text-sm flex flex-row items-center justify-center gap-2">
                  <Lightbulb className="size-5 text-red-base" />
                  <span>Chủ đề</span>
                </div>
                <ThemeSetting />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="text-sm flex flex-row items-center justify-center gap-2">
                  <Earth className="size-5 text-red-base" />
                  <span>Ngôn ngữ</span>
                </div>
                <ThemeSetting />
              </div>
            </div>
          )}
        </div>

        {/* login */}
        <Button>{t("login")}</Button>
      </div>
    </header>
  );
}
