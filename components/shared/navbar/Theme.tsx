"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
const Theme = () => {
  const { mode, setMode } = useTheme();
  const handleMenuItemClick = (value: string) => {
    setMode(value);
    if (value !== "system") {
      localStorage.setItem("theme", value);
    } else {
      localStorage.removeItem("theme");
    }
  };
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          <Image
            src={
              mode === "light"
                ? "/assets/icons/sun.svg"
                : "/assets/icons/moon.svg"
            }
            className="active-theme"
            width={20}
            height={20}
            alt={mode === "light" ? "sun" : "moon"}
          />
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className="flex cursor-pointer items-center gap-4 px-2.5 py-2 focus:bg-light-800 dark:focus:bg-dark-400"
              onClick={() => handleMenuItemClick(item.value)}
            >
              <Image
                src={item.icon}
                className={mode === item.value ? "active-theme" : ""}
                width={16}
                height={16}
                alt={item.value}
              />
              <p
                className={`body-semibold ${
                  mode === item.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {" "}
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
