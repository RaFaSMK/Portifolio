import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n/config";

function getLocale(request: NextRequest): string {
  // Check if there is any language cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  // Check accept-language header
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    // simple parsing, returning the first valid locale found
    const preferredLocales = acceptLang
      .split(",")
      .map((l) => l.split(";")[0].trim().substring(0, 2).toLowerCase());

    for (const locale of preferredLocales) {
      if (i18n.locales.includes(locale as any)) {
        return locale;
      }
    }
  }

  return i18n.defaultLocale;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  const response = NextResponse.redirect(request.nextUrl);
  // Set cookie for future visits
  response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
  
  return response;
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
