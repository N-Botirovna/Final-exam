function PhoneNumber() {
    return(
    <>
        <div className="flex items-center rounded mb-6">
                <label
                  className="block w-[15%] bg-[#01384D] px-3 py-4 text-white rounded-s text-lg leading-[21px]"
                  htmlFor="num"
                >
                  +998
                </label>
                <input
                  className="w-[88%] outline-none ring-0 py-4 px-3 text-black rounded-e text-[#01384D] p-[12px] my-2 leading-[19px] text-lg  border border-slate-400 focus:border-[#01384D] w-full"
                  type="number"
                  id="num"
                  placeholder="Raqamingizni yozing"
                />
              </div>
    </>)
    
}
export default PhoneNumber