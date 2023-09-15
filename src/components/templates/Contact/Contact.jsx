import LoginInput from "../../ui/LoginInput";
import PhoneNumber from "../../ui/PhoneNumber";
import SubmitButton from "../../ui/SubmitButton";

function Contact() {
    return (
        <>
            <div className="bg-[#EABF9F] py-[80px]">
                <div className="container mx-auto flex justify-between">
                    <div>
                        <h2 className="text-slate-600 font-bold text-3xl leading-[40px]">Sizni qiziqtirdimi?</h2>
                        <p className="text-slate-600 font-semibold text-xl leading-[40px]">Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</p>
                    </div>
                    <div className=" w-2/5">
                        <form className="flex gap-3 items-center">
                        <div className="w-2/3">
                            <PhoneNumber/>
                        </div>
                        <div className="w-1/3">
                        <SubmitButton title={"Yuborish"}/>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;