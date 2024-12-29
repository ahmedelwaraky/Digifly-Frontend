import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation("common");
  // const router = useRouter();
  // const { locale, locales } = router;

  // const changeLanguage = (newLocale) => {
  //   router.push(router.pathname, router.asPath, { locale: newLocale });
  // };

  return (
    <div>
      {/* <div> */}
        {/* <h1>{t("welcome")}</h1>
        <p>{t("description")}</p> */}
      {/* </div> */}
      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  className=""
                  style={{ width: "64px", height: "80px" }}
                  src="https://s3-alpha-sig.figma.com/img/4017/6653/3caceedb6239aabd9acbdb2f620c4e35?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NgF7CnhOmtn0mjq2YBeJ-l664dk9X~MOtDar1~rrUrNYCPQmkjzo-iZ-HP~FZ~Ow1G4VqMR1QeLzbN8~oXxv~QM9wQC23CkkKoxUtENXICOyVrMfWWKPIHGCbkM6nqMu5Exb06mtXkk6kEKUIdqWQxukfbPFCfXg9QLVQ6-H4pHGYc7fFYBBKaMoFpKUAaKmRJdrmhHwwR6K9oiWWCxNvV7VlC0-aH4Imif28OXeq4ChvH578uyT18Pp3vOaycmx9XKDXkTHH4DMMKYBRra8QcPwzVbbGH8ZBck4~bH5naJDoACxW3f1hkyAGeV6yOoowl5TqkBy4uopHzF9gcwl7g__"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 pt-5">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 hover:text-indigo-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 hover:text-indigo-500"
                  >
                    Category
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 hover:text-indigo-500"
                  >
                    Contact us
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 hover:text-indigo-500"
                  >
                    About
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-200 p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>
              <div className="relative ml-3">
                <div>
                  {/* {locales.map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      disabled={lng === locale}
                    >
                      {lng}
                    </button>
                  ))} */}

                  <button
                    type="button"
                    className="relative flex items-center gap-2 rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white px-4 py-2"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg"
                      alt="Egypt Flag"
                    />
                    <span className="font-medium text-black">عربي</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
