import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { socialMedia } from "@/data/pages/main";
import Image from "next/image";
import profile_pict from "@/asset/profile_pict.svg";
const Biography = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center relative py-2">
      <h1 className="text-xl font-semibold">Daffa Putra Narendra</h1>
      <h2 className="text-sm mt-1">
        Front End Developer, Network Enthusiast, I Use Arch btw.
      </h2>
      <Link
        href={"https://maps.app.goo.gl/Zsg6B6Gn1MsKg2TaA"}
        target="_blank"
        className="flex items-center my-2 gap-1"
      >
        <CiLocationOn size={25} />
        <p className="text-sm pr-1">Malang, Indonesia</p>
      </Link>
      <div className="flex gap-1 mt-1">
        {socialMedia.map((item, index) => {
          return (
            <Link key={index} href={item.link} target="_blank">
              <item.icon size={25} className="hover:scale-110 duration-150" />
            </Link>
          );
        })}
      </div>
      <Image
        src={profile_pict}
        alt="Profile Picture"
        className="absolute h-40 w-40 right-0"
        loading="lazy"
      />
    </div>
  );
};

export default Biography;
