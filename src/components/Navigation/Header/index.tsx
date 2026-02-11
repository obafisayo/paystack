'use client'

const Header = () => {
  return (
    <header
      className={`w-full bg-primary text-white py-[8px] text-center`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <a
          href="https://paystack.com/business-registration"
          className="inline-flex items-center gap-2 text-sm md:text-base group cursor-pointer"
        >
          <span className="flex items-center gap-2 font-normal text-sm leading-[25px]">
            🚀 Register your business and get a corporate bank account — fast
            <span className="inline-block animate-arrow-slide">→</span>
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header;
