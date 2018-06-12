import { GatilhoPeso } from "./gatilhoPeso";
import { GatilhoPercurso } from "./gatilhosPercurso";
import { GatilhoPe } from "./gatilhoPe";

export class Cliente {

    nome:String;
    dataNascimento:Date;
    idSapato:String;
    doenca:String[];
    g1:GatilhoPeso[];
    g2:GatilhoPe[];
    g3:GatilhoPercurso[];

}