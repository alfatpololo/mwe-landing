import Image from "next/image";


export default function Webdesign() {
    return (
        <section id="webDesign">
      <div className="bg-tabs-004">
    <div className="container mx-auto justify-center py-[248px] mt-[192px] ">
      <div className="grid grid-cols-2 gap-[24px] mb-[28px]">
      <div className="w-full py-[60px]">
            <h2 className="text-secondary-white text-[32px] font-notosans font-[600] leading-[52px]">Tingkatkan Branding Perusahaan dengan Desain Keren dan Menarik Sesuai Keinginan Kamu!</h2>
            <p className="text-secondary-white text-[18px] font-notosans font-[400] leading-[32px] mt-[40px]">Tampilan Website Keren dan Profesional dengan Berbagai Fitur <br /> yang Mudah Digunakan</p>
        </div>
        <div className="w-full">
          <div className="flex gap-[8px]">
          <div className="">
              <Image
                    className=""
                    width={160}
                    height={148}
                    src="/tools-webdesign.svg"
                    alt=""
                  />
              </div>
              <div className="">
              <Image
                    className=""
                    width={444}
                    height={148}
                    src="/ui ux.svg"
                    alt=""
                  />
              </div>
          </div>
          <div className="flex gap-[8px] mt-[8px]">
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
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
    )
}