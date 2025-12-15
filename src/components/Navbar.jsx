const Navbar = () =>  {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-900 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer select-none">
            <div className="h-9 w-9 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              D
            </div>
            <span className="hidden sm:block text-[15px] font-medium text-gray-200 tracking-wide">
              DevTinder
            </span>
          </div>

          {/* Search */}
          {/* <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search developers, skills, stacks..."
                className="w-full rounded-full bg-[#111827] border border-white/10 px-4 py-2 pl-10 text-sm
                           text-gray-200 placeholder:text-gray-500
                           focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40
                           transition"
              />
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16 10.5A5.5 5.5 0 1 1 5 10.5a5.5 5.5 0 0 1 11 0Z"
                />
              </svg>
            </div>
          </div> */}

          {/* User */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="hidden sm:flex flex-col text-right leading-tight">
              <span className="text-sm font-medium text-gray-200">
                Vish
              </span>
              <span className="text-xs text-gray-500 group-hover:text-gray-400 transition">
                Developer
              </span>
            </div>

            <div className="relative">
              <img
                src="https://i.pravatar.cc/40"
                alt="user"
                className="h-10 w-10 rounded-full border border-white/10 object-cover
                           group-hover:ring-2 group-hover:ring-indigo-500/40 transition"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 ring-2 ring-[#0b0f14]" />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
export default Navbar
