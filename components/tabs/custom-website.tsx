import Image from "next/image";


export default function Customwebsite() {
    return (
        <section id="customWebsite">
      <div className="bg-tabs-003">
    <div className="container mx-auto justify-center py-[248px] mt-[192px] ">
      <div className="grid grid-cols-2 gap-[24px] mb-[28px]">
        <div className="w-full">
          <div className="flex gap-[8px]">
              <div className="">
              <Image
                    className=""
                    width={160}
                    height={160}
                    src="/icon-coding.svg"
                    alt=""
                  />
              <Image
                    className="mt-[8px]"
                    width={160}
                    height={80}
                    src="/list-domain.svg"
                    alt=""
                  />
              </div>
              <div className="">
              <Image
                    className=""
                    width={444}
                    height={416}
                    src="/banner-coding.svg"
                    alt=""
                  />
              </div>
          </div>
          <div className="flex gap-[8px] mt-[8px]">
              <div className="">
              <Image
                    className="mt-[-170px]"
                    width={320}
                    height={160}
                    src="/teknologi.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="w-full py-[80px]">
            <h2 className="text-secondary-white text-[32px] font-notosans font-[600] leading-[52px]">Jadikan Customer Experience Semakin Berkesan dengan Kustomisasi Sesuai Keinginan  </h2>
            <p className="text-secondary-white text-[18px] font-notosans font-[400] leading-[32px] mt-[16px]">Buat Kustomisasi Desain dan Fitur Website Apapun Sesuai Keinginan <br /> Tanpa Batasan. </p>
        </div>
      </div>
    </div>
      </div>
    </section>
    )
}