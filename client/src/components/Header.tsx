const Header = () => {
  return (
    <header className="relative flex items-center justify-between px-8 py-5 bg-gradient-to-r from-[#4A3F71] to-[#5E507F] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-gradient-x"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute h-2 w-2 rounded-full bg-white animate-float-1 top-4 left-1/4"></div>
        <div className="absolute h-2 w-2 rounded-full bg-white animate-float-2 top-8 left-1/2"></div>
        <div className="absolute h-2 w-2 rounded-full bg-white animate-float-3 top-12 left-3/4"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      <div className="flex items-center relative">
        <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-6 bg-teal-400 rounded-full opacity-80 glow-teal"></div>
        <span className="font-bold text-white text-xl tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-400 transition-all duration-300">
          Code Infinity AI
        </span>
      </div>

      <div className="flex items-center space-x-1">
        <a className="text-white/80 text-xs px-4 py-2 font-medium hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer backdrop-blur-sm">
          HOME
        </a>
        {/* <a className="text-white bg-white/10 text-xs px-4 py-2 font-medium hover:bg-white/15 rounded-lg transition-all duration-200 cursor-pointer">
          CHAT
        </a>
        <a className="text-white/80 text-xs px-4 py-2 font-medium hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer">
          CONTACTS
        </a>
        <a className="text-white/80 text-xs px-4 py-2 font-medium hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer">
          SETTINGS
        </a> */}
      </div>
    </header>
  );
};

export default Header;
