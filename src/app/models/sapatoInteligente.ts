import { GatilhoPercurso } from "./gatilhosPercurso";
import { GatilhoPeso } from "./gatilhoPeso";
import { GatilhoPressao } from "./gatilhoPressao";

export class SapatoInteligente {

    id: string;
    status: boolean;
    cargaBateria: number;
    gatilhoPressao: GatilhoPressao;
    gatilhoPercurso: GatilhoPercurso;
    gatilhoPeso: GatilhoPeso;
}