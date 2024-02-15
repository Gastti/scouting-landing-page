import RegisterButton from "@/components/registerbutton/registerbutton";

export default function Capacitacion() {
    return (
        <main className="flex flex-col w-full max-w-[1200px] mx-auto px-5 gap-5 relative">
            <div className="flex flex-col mt-24 items-start z-10">
                <h2 className="text-[2rem] font-semibold leading-tight">Scouting</h2>
                <h1 className="text-[3rem] font-semibold leading-tight bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text inline-block">
                    Cursos
                </h1>
            </div>
            <div className="z-10">
                Nos encontramos trabajando en esta página para brindarte un mejor servicio y toda la información que necesitas.
                <br /><br />
                Muchas gracias por tu paciencia.

                Atte. <b>El Equipo de Scouting.</b>
            </div>
            <RegisterButton />
        </main >
    );
}
