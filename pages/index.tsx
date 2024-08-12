import Image from "next/image";
import Ecommerce from "@/components/tabs/ecommerce";
import Customwebsite from "@/components/tabs/custom-website";
import Copywriting from "@/components/tabs/copywriting";
import Companyprofile from "@/components/tabs/companyprofile";
import Webdesign from "@/components/tabs/webdesign";
import Tabbutton from "@/components/navigation/tabs-button/tabsbutton";
import DropdownButton from "@/components/navigation/collapsebutton/collapsebuttons";
import Navbar from "@/components/navigation/navbar";
import ScrollingImages from "@/components/scrollingimage";

export default function Home() {
  return (
    <>
    <Navbar />

    <section id="hero" className="lg:bg-bg-hero w-full bg-no-repeat lg:bg-cover bg-contain">
    <div className="container mx-auto justify-center py-[248px] ">
      <div className="grid grid-cols-2 gap-[24px] mb-[28px]">
      <div className="w-full py-[0px]">
            <h2 className="text-secondary-white text-[48px] font-notosans font-[600] leading-[64px]">Jasa Pembuatan <br /> Website E-Commerce <br /> Lengkap dan Company <br /> Profile Profesional</h2>
            <p className="text-secondary-white text-[18px] font-notosans font-[400] leading-[32px] mt-[32px]">Tingkatkan Penjualan Toko Online Dengan
            <br /> <span className="font-[700]">Platform Terintegrasi dari MakeWebEasy.</span> </p>
            <p className="text-secondary-white text-[18px] font-notosans font-[400] leading-[32px] mt-[16px]">Tingkatkan Juga Branding Perusahaan yang Lebih <br />
            Profesional dengan
            <span className="font-[700]"> Ratusan Template Keren dan <br />
            Menarik dari MakeWebEasy.</span> </p>
        </div>
        <div className="w-full ms-[-70px]">
          <div className="flex gap-[8px]">
          <div className="">
          <Image
                    className="lg:ms-[76px]"
                    width={143}
                    height={257}
                    src="/side-seo.svg"
                    alt=""
                  />
                  <Image
                    className="lg:ms-[60px] mt-[32px]"
                    width={128}
                    height={168}
                    src="/slide.svg"
                    alt=""
                  />
              </div>
              <div className="">
              <Image
                    className="lg:ms-[40px]"
                    width={239}
                    height={58}
                    src="/button-design.svg"
                    alt=""
                  />
                  <Image
                    className="lg:ms-[20px]"
                    width={701}
                    height={337}
                    src="/dashboard.svg"
                    alt=""
                  />
                  <div className="flex absolute mt-[-50px] ms-[12px]">
          <Image
                    className="ms-[20px]"
                    width={358}
                    height={198}
                    src="/chart.svg"
                    alt=""
                  />
          <Image
                    className="ms-[16px]"
                    width={136}
                    height={176}
                    src="/color.svg"
                    alt=""
                  />
          </div>

              </div>
          </div>
          {/* <div className="flex gap-[8px] mt-[8px]">
              <div className="">
              <Image
                    className=""
                    width={444}
                    height={260}
                    src="/banner-webdesign.svg"
                    alt=""
                  />
              </div>
              <div className="">
              <Image
                    className=""
                    width={160}
                    height={140}
                    src="/icon.svg"
                    alt=""
                  />
              <Image
                    className="mt-[8px]"
                    width={160}
                    height={112}
                    src="/responsive.svg"
                    alt=""
                  />
              </div>
          </div> */}
        </div>
      </div>
    </div>
    </section>

    <section id="sectionone">
      <div className="mt-[192px]">
      <Tabbutton />
      </div>
    </section>

    <section id="sectiontwo">
    <div className="container mx-auto justify-center px-[80] pt-[182px]">
      <div className="grid grid-cols-3 gap-[24px] mb-[28px]">
        <div className="w-[456px]">
            <h2 className="text-secondary-black text-[32px] font-notosans font-[600] leading-[52px]">Dilengkapi Semua Fitur yang Dibutuhkan Pada Website</h2>
            <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Buat Website E-Commerce dan Company Profilemu dengan Lebih Mudah bersama Berbagai Fitur Unggulan </p>
        </div>
        <div className="bg-gray-200 p-4 invisible">Column 2</div>
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[24px] mb-[28px]">
        <div className="bg-gray-200 p-4 invisible">Column 2</div>
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]  ">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]  ">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[24px] mb-[28px]">       
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]  ">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]  ">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 p-[24px] rounded-[16px]  ">
          <div className="flex gap-[20px]">
              <div className="">
              <Image
                    className=""
                    width={65}
                    height={64}
                    src="/integration.svg"
                    alt=""
                  />
              </div>
              <div className="w-full">
              <h2 className="text-secondary-black text-[18px] font-notosans font-[600] leading-[28px]">Fitur E-Commerce Lengkap</h2>
              <p className="text-secondary-grey-500 text-[16px] font-notosans font-[400] leading-[24px] mt-[16px]">Secara efektif mendukung kegiatan marketing dengan  beragam fitur bawaan yang mampu diintegrasikan.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section id="sectionthree">
    <div className="container mx-auto justify-center px-[80] py-[182px]">
      <div className="grid grid-cols-1 gap-[24px] mb-[40px]">
        <div className="w-full">
            <h2 className="text-secondary-black text-center text-[32px] font-notosans font-[600] leading-[52px]">Kami Telah Membantu Transformasi Digital <br /> Melalui Website Untuk Banyak Perusahaan!</h2>
            </div>
      </div>
      <div className="grid grid-cols-3 gap-[24px] mb-[24px]">       
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px]">
          <div className="flex gap-[16px] space-x-3">
              <div className="w-full">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] w-full">
              <Image
                    className="w-full"
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px]">
          <div className="flex gap-[16px]">
              <div className="w-full">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] w-full">
              <Image
                    className=""
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px] ">
          <div className="flex gap-[16px]">
              <div className="w-full">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] w-full">
              <Image
                    className=""
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[24px]">       
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px] ">
          <div className="flex gap-[16px]">
              <div className="w-full">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] w-full">
              <Image
                    className=""
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px] ">
          <div className="flex gap-[16px]">
              <div className="w-full">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] w-full">
              <Image
                    className=""
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="bg-secondary-grey-100 border-[1px] border-secondary-grey-200 p-[24px] rounded-[16px] ">
          <div className="flex gap-[16px]">
              <div className="">
              <Image
                    className=""
                    width={48}
                    height={48}
                    src="/iconkebunraya.svg"
                    alt=""
                  />
                  <h2 className="text-secondary-black text-[16px] font-notosans font-[500] leading-[28px] mt-[12px]">Kebun Raya Nusantara</h2>
                  <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px] mt-[8px]">Holding Perkebunan</p>
              </div>
              <div className="ms-[16px] min-w-[240px]">
              <Image
                    className=""
                    width={239}
                    height={188}
                    src="/portfoliokebunraya.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section id="sectionthree">
    <div className="container mx-auto justify-center px-[80] py-[182px]">
      <div className="grid grid-cols-1 gap-[24px] mb-[40px]">
        <div className="w-full">
            <h2 className="text-secondary-black text-center text-[32px] font-notosans font-[600] leading-[52px]">Kisah Sukses Mereka Bersama Kami</h2>
            </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-[32px] mb-[24px]">       
        <div className="">
        <div className="">
        <iframe className="rounded-[16px]" width="624" height="400" src="https://www.youtube.com/embed/6WeFmf41x2w" title="MakeWebEasy Indonesia Testimonial from Jeremy Rusli (Eaton Indonesia)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
</div>
        </div>
        <div className="">
        <div className="grid gap-[16px]">
        <div className="">
      <DropdownButton />
    </div>
    </div>
        </div>
      </div>
    </div>
    </section>

    <section className="bg-bg-client bg-auto h-[800px] bg-no-repeat bg-left-bottom" id="sectionfour">
    <div className="container mx-auto justify-center px-[80] pt-[52px]">
      <div className="grid grid-cols-2 gap-[24px] mb-[28px]">
        <div className="w-[456px]">
            <h2 className="text-secondary-black text-[32px] font-notosans font-[600] leading-[52px]">Telah Dipercaya Oleh <br /> Lebih dari 5000+ Bisnis</h2>
        </div>
        <ScrollingImages />
      </div>
    </div>
    </section>
    </>
  );
}
