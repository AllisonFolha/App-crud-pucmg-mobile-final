import CepModel from "../models/Cep";

 
export default async function fetchCep(cep: string): Promise<CepModel | undefined> {
    let result;
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const data = await response.json();
        if (!data.erro) {
            const cepModel = new CepModel(
                data.cep,
                data.logradouro,
                data.bairro,
                data.localidade,
                data.uf
            );
            return cepModel;
        } else {
            return undefined
        }
    } catch(error: any) {
        console.error('Error fetching data:', error);
    }
}

 
 