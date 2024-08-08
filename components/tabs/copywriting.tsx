import Image from "next/image";


export default function Copywriting() {
    return (
        <section id="copyWriting">
      <div className="bg-tabs-005">
    <div className="container mx-auto justify-center py-[248px] mt-[192px] ">
      <div className="grid grid-cols-2 gap-[24px] mb-[28px]">
        <div className="w-full">
          <div className="flex gap-[8px]">
              <div className="">
              <Image
                    className=""
                    width={444}
                    height={288}
                    src="/banner-copywriting.svg"
                    alt=""
                  />
              </div>
              <div className="">
              <Image
                    className=""
                    width={160}
                    height={128}
                    src="/file.svg"
                    alt=""
                  />
              <Image
                    className="mt-[8px]"
                    width={160}
                    height={160}
                    src="/img.svg"
                    alt=""
                  />
              </div>
          </div>
          <div className="flex gap-[8px] mt-[8px]">
              <div className="">
              <Image
                    className=""
                    width={310}
                    height={120}
                    src="/val.svg"
                    alt=""
                  />
              </div>
              <div className="">
              <Image
                    className=""
                    width={294}
                    height={120}
                    src="/tools.svg"
                    alt=""
                  />
              </div>
          </div>
        </div>
        <div className="w-full py-[60px]">
            <h2 className="text-secondary-white text-[32px] font-notosans font-[600] leading-[52px]">Buat Website Lebih Hidup dan Menarik dengan Artikel dan Copywriting yang Berkualitas</h2>
            <p className="text-secondary-white text-[18px] font-notosans font-[400] leading-[32px] mt-[40px]">Jadikan Website Lebih Profeisonal dengan Penjadwalan Konten yang <br /> Baik & Terjadwal dengan Pilihan Artikel Berkualitas Sesuai Standar EEAT <br /> dan Bebas Plagiarisme!</p>
        </div>
      </div>
    </div>
      </div>
    </section>
    )
}