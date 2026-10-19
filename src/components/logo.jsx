const Logo = ({name}) => {
  return (
    <div>
      {/* Brand Logo & Name */}
      <a href="/" className="flex items-center gap-3 group">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-[#F1E7D6]/30 flex items-center justify-center bg-[#F1E7D6]/5">
            <img
              src="/images/profile.jfif"
              alt=""
              className="h-full w-full rounded-full"
            />
          </div>
          <div>
            <span className="font-serif text-sm font-semibold tracking-wide text-[#1A1A18] block uppercase">
            {name}
          </span>
          <span className="text-[9px] tracking-[0.25em] capitalize font-semibold text-[#2C5E3B] block">
            Software Engineer
          </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Logo;
