import React from "react";
import { menuData, spaceInfo } from "./menuData";
import un from "./assets/un.jpg";

export default function ShagoofLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-slate-800 font-sans" dir="rtl">

      {/* HERO */}
      <header className="relative overflow-hidden border-b bg-white">
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div data-aos="fade-left">
            <span className="inline-block text-sm bg-blue-50 text-blue-600 px-4 py-1 rounded-full mb-4">
              ✨ Welcome to
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 leading-tight">
              {spaceInfo.name}
            </h1>

            <p className="text-slate-600 text-lg mt-5 leading-relaxed">
              مساحتك الفنية المفضلة على كورنيش الإسكندرية. استمتع بمشروبك
              المفضل في أجواء هادئة ومريحة تجمع بين الإبداع والاسترخاء.
            </p>

            {/* RULES */}
            <div className="mt-6 flex flex-wrap gap-3">
              {spaceInfo.rules.map((rule, i) => (
                <span
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 50}
                  className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-sm hover:scale-105 transition"
                >
                  📌 {rule}
                </span>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div data-aos="fade-right">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-blue-100 aspect-[4/3] hover:scale-[1.02] transition duration-500">
              <img src={un} alt="Space" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* MENU */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            قائمة المشروبات والطلبات
          </h2>
          <p className="text-slate-500 mt-2">
            اختر ما يناسب مزاجك واستمتع بتجربة فريدة
          </p>
          <div className="w-28 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuData.map((section, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-5 pb-3 border-b border-blue-50">
                <h3 className="text-lg font-bold text-blue-700">
                  {section.category}
                </h3>

                {section.type === "single-price" && (
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm border border-blue-100">
                    {section.price}
                  </span>
                )}
              </div>

              {/* CONTENT */}
              {section.type === "single-price" ? (
                <p className="text-slate-600 text-sm leading-relaxed">
                  {section.description}
                </p>
              ) : (
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex justify-between text-sm border-b border-dashed border-blue-50 pb-2"
                    >
                      <span className="text-slate-700">{item.name}</span>
                      <span className="text-blue-600 font-semibold">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-blue-50 border-t mt-20">
        <div className="container mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">

          <div data-aos="fade-left">
            <h4 className="text-xl font-bold text-blue-700 mb-4">
              تواصل معنا
            </h4>

            <p className="text-slate-600 mb-2">
              📍 {spaceInfo.address}
            </p>

            <p className="text-slate-600">
              📞{" "}
              <a
                href={`https://wa.me/${spaceInfo.phone}`}
                className="text-blue-600 hover:underline"
              >
                {spaceInfo.phone}
              </a>
            </p>
          </div>

          <div className="flex md:justify-end items-start" data-aos="fade-right">
            <a
              href={spaceInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 hover:scale-105 transition shadow-md"
            >
              افتح الموقع على الخريطة 🗺️
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 pb-6">
          © {new Date().getFullYear()} {spaceInfo.name}
        </p>
      </footer>
    </div>
  );
}