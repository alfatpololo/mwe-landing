import Image from "next/image";


export default function Companyprofile() {
    return (
        <section id="companyProfile">
      <div className="bg-tabs-002">
    <div className="container mx-auto justify-center py-[248px] mt-[192px] ">
      <div className="grid grid-cols-2 gap-[24px] mb-[28px]">
      <div className="w-full py-[60px]">
            <h2 className="text-secondary-white text-[32px] font-notosans font-[600] leading-[52px]">Bangun Identitas Bisnismu Lebih Profesional dengan Website Andalan dari MakeWebEasy</h2>
            <p className="text-secondary-white text-[18px] font-notosans font-[400] leading-[32px] mt-[40px]">Tingkatkan Branding dan Citra Perusahaan yang Apik dengan Website <br /> Intuitif dan Menarik!</p>
        </div>
        <div className="w-full">
          <div className="flex gap-[8px]">
          <div className="">
              <Image
                    className=""
                    width={160}
                    height={128}
                    src="/file-company.svg"
                    alt=""
                  />
              <Image
                    className="mt-[8px]"
                    width={160}
                    height={160}
                    src="/img-company.svg"
                    alt=""
                  />
              </div>
              <div className="">
              <Image
                    className=""
                    width={444}
                    height={288}
                    src="/banner-company.svg"
                    alt=""
                  />
              </div>
          </div>
          <div className="flex gap-[8px] mt-[8px]">
              <div className="">
              <Image
                    className=""
                    width={196}
                    height={120}
                    src="/val-company.svg"
                    alt=""
                  />
              </div>
              <div className="">
              <Image
                    className=""
                    width={408}
                    height={120}
                    src="/tool-company.svg"
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