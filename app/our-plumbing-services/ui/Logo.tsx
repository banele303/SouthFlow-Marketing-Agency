
import Image from "next/image";


export default function Logo() {
  return (
    <div className="flex flex-row dark:bg-white bg-black dark:bg-dot-black/[0.2] bg-dot-white/[0.2] rounded-[2rem] md:px-[2rem] md:ml-[4rem]">
      <div className="container mx-auto h-[3rem] w-[3rem] md:h-[6rem] md:w-[6rem]">
        <Image
          src="/img/burgeon-logo.png" // the image file should be in the public folder
          alt="southflow marketing agency no contract image"
          width={50} // the original image width
          height={50} // the original image height
          layout="responsive" // this will make the image responsive
          quality={100} // this will reduce the image size and improve performance
        />
      </div>
    
    </div>
  );
}


