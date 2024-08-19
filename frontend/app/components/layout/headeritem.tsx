// headeritem.js
import Image from 'next/image';

function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      {typeof Icon === 'string' ? (
        <Image
          src={Icon}
          alt={title}
          width={50}
          height={50}
          className="object-contain"
        />
      ) : (
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      )}
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
