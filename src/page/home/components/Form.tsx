import { Input } from '../../../components/input/Input';

function Form() {
    return (
        <div className="w-full  bg-white p-4  shadow-md">
            <h3 className="text-lg font-semibold ml-2">Preencha os campos</h3>
            <form className="flex flex-wrap gap-6 p-2 pt-8 pl-4">

                <div className="flex flex-col gap-2 basis-1/4">
                    <Input label="Nome do responsável" placeholder="Informe o nome" />
                </div>

                <div className="flex flex-col gap-2 basis-1/5">
                    <Input label="CPF" placeholder="Informe o CPF" />

                </div>
                <div className="flex flex-col gap-2 basis-1/5">
                    <Input label="Telefone" placeholder="Informe o telefone" />

                </div>

                <div className="flex flex-col gap-2 basis-1/5">
                    <Input label="E-mail" placeholder="Informe o e-mail" />

                </div>

                <div className="flex flex-col gap-2 basis-1/4">
                    <Input label="Empresa/Instituição" placeholder="Informe a expositora" />

                </div>

                <div className="flex flex-col gap-2 basis-1/5">
                    <Input label="CNPJ" placeholder="Informe o CNPJ" />

                </div>

                <div className="flex flex-col gap-2 basis-1/5">
                    <Input label="Segmento" placeholder="Trabalhadores de construção" />

                </div>

                <div className="flex flex-col gap-2 basis-1/5">
                    <Input label="Nome do responsável" placeholder="Informe a quantidade" />

                </div>
            </form>
            <div className="w-full flex justify-center p-2 pt-8">
                <button className="bg-success w-full p-2 rounded-sm text-white hover:bg-green-400 ">Cadastrar</button>
            </div>
        </div>

    );
}

export default Form;