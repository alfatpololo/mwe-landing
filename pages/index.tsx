import Image from "next/image";
import Ecommerce from "@/components/tabs/ecommerce";
import Customwebsite from "@/components/tabs/custom-website";
import Copywriting from "@/components/tabs/copywriting";
import Companyprofile from "@/components/tabs/companyprofile";
import Webdesign from "@/components/tabs/webdesign";
import Tabbutton from "@/components/navigation/tabs-button/tabsbutton";
import DropdownButton from "@/components/navigation/collapsebutton/collapsebuttons";
import Navbar from "@/components/navigation/navbar";

export default function Home() {
  return (
    <>
    <section id="hero" className="flex flex-wrap justify-center lg:bg-bg-hero bg-bg-hero-mobile w-full bg-no-repeat lg:bg-cover bg-contain lg:h-[800px] lg:w-full overflow-hidden">
      <div className="">
        <div className="lg:flex flex-wrap justify-center">
        <div className="lg:grid lg:grid-cols-2 relative">
          <div className="lg:pt-[248px] hidden lg:block">
            <h1 className="font-notosans lg:w-[560px] text-secondary-white lg:text-[48px] font-[700] lg:leading-[64px]">Jasa Pembuatan <br/> Website E-Commerce Lengkap dan Company <br/> Profile Profesional</h1>
            <p className="text-[18px] mt-[28px] text-secondary-white font-notosans font-[400] leading-[32px] lg:w-[560px]">Tingkatkan Penjualan Toko Online Dengan <span className="font-[700]">Platform Terintegrasi dari MakeWebEasy.</span></p>
            <p className="text-[18px] mt-[16px] text-secondary-white font-notosans font-[400] leading-[32px] lg:w-[560px]">Tingkatkan Juga Branding Perusahaan yang Lebih Profesional dengan <span className="font-[700]">Ratusan Template Keren dan Menarik dari <br /> MakeWebEasy.</span></p>
          </div>
          <div className="w-full hidden lg:flex">
          <div className="lg:pt-[208px] z-[1]">
          <Image
                    className="lg:ms-[76px]"
                    width={120}
                    height={236}
                    src="/side-seo.svg"
                    alt=""
                  />
          <Image
                    className="lg:ms-[60px]"
                    width={120}
                    height={160}
                    src="/slide.svg"
                    alt=""
                  />
          </div>
          <div className="lg:pt-[264px]">
          <Image
                    className="lg:ms-[18px]"
                    width={239}
                    height={58}
                    src="/button-design.svg"
                    alt=""
                  />
          <Image
                    className="absolute ms-[0px]"
                    width={701}
                    height={337}
                    src="/dashboard.svg"
                    alt=""
                  />
          <div className="flex absolute">
          <Image
                    className="ms-[20px] mt-[282px]"
                    width={358}
                    height={198}
                    src="/chart.svg"
                    alt=""
                  />
          <Image
                    className="ms-[20px] mt-[292px]"
                    width={136}
                    height={176}
                    src="/color.svg"
                    alt=""
                  />
          </div>
          </div>
          </div>
          <div className="w-full lg:hidden flex">
          <div className="lg:pt-[208px] pt-[100px] z-[1]">
          <Image
                    className="ms-[60px] absolute"
                    width={91}
                    height={157}
                    src="/s-side-seo.svg"
                    alt=""
                  />
          <Image
                    className="lg:ms-[60px] absolute mt-[165px] ms-[55px]"
                    width={76}
                    height={100}
                    src="/s-slide.svg"
                    alt=""
                  />
          </div>
          <div className="lg:pt-[264px] pt-[115px]">
          <Image
                    className="ms-[156px]"
                    width={128}
                    height={26}
                    src="/s-button-design.svg"
                    alt=""
                  />
          <Image
                    className="absolute ms-[137px]"
                    width={701}
                    height={337}
                    src="/dashboard.svg"
                    alt=""
                  />
          <div className="">
          <Image
                    className="absolute lg:ms-[20px] ms-[155px] mt-[128px] lg:mt-[282px]"
                    width={217}
                    height={1123}
                    src="/s-chart.svg"
                    alt=""
                  />
          </div>
          </div>
          </div>
          <div className="lg:mt-[260px] relative mt-[320px] lg:ps-[120px] lg:pt-[248px] lg:hidden block px-[24px]">
            <h1 className="font-notosans lg:w-[560px] text-secondary-black text-[26px] font-[700] lg:leading-[64px]">Jasa Pembuatan <br/> Website E-Commerce Lengkap dan Company <br/> Profile Profesional</h1>
            <p className="text-[16px] mt-[28px] text-secondary-grey-500 font-notosans font-[400] leading-[32px] lg:w-[560px]">Tingkatkan Penjualan Toko Online Dengan <span className="font-[700]">Platform Terintegrasi dari MakeWebEasy.</span></p>
            <p className="text-[16px] mt-[16px] text-secondary-grey-500 font-notosans font-[400] leading-[32px] lg:w-[560px]">Tingkatkan Juga Branding Perusahaan yang Lebih Profesional dengan <span className="font-[700]">Ratusan Template Keren dan Menarik dari <br /> MakeWebEasy.</span></p>
          </div>
        </div>
        </div>

      </div>
    </section>
    <Navbar />
    <section id="sectionone">
      <div className="mt-[192px]">
      
      </div>
      <Tabbutton />
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
      <div className="grid grid-cols-2 gap-[24px] mb-[24px]">       
        <div className="p-[24px] rounded-[16px]">
        <div className="aspect-w-16 aspect-h-9">
        <iframe className="rounded-[16px]" width="624" height="400" src="https://www.youtube.com/embed/6WeFmf41x2w" title="MakeWebEasy Indonesia Testimonial from Jeremy Rusli (Eaton Indonesia)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
</div>
        </div>
        <div className="p-[24px] rounded-[16px]">
        <div className="p-4">
      <DropdownButton 
      label="Namico">
        <p>MWE memiliki portfolio yang mengesankan dari testimonial positif dari klien-klien sebelumnya. Kami percaya bawah tim MWE memiliki keahlian yang dibutuhkan untuk menciptakan website perusahaan yang sesuai dengan visi dan misi kami</p>
      </DropdownButton>
    </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}
