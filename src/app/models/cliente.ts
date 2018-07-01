import { GatilhoPeso } from "./gatilhoPeso";
import { GatilhoPercurso } from "./gatilhosPercurso";
import { GatilhoPressao } from "./gatilhoPressao";
import { SapatoInteligente } from "./sapatoInteligente";
import { Notificacao } from "./notificacao";

export class Cliente {

    nome:String;
    dataNascimento:Date;
    idSapato:String;
    notificacoes: Notificacao[];
    peso: number;
    sapatoInteligente:SapatoInteligente;
    g1:GatilhoPeso[];
    g2:GatilhoPressao[];
    g3:GatilhoPercurso[];

}