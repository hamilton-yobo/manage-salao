const Header = () => {
  return (
    <header className="flex justify-end bg-grayDark shadow shadow-gray-600">
      <div className="flex items-center mr-12 p-2 cursor-pointer transition-05 hover:bg-[rgba(0,0,0,.2)]">
        <div className="pr-2">
          <span className="text-beigeLight font-bold">Salão Tia Santa</span>
        </div>
        <img src="/salon_avatar.png" className="w-14 h-14 rounded-full"/>
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
    </header>
  )
}

export default Header;
