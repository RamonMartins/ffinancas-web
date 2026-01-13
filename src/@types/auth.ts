// types/auth.ts

export interface UsuarioCreate {
    nome: string;
    email: string;
    password: string;
    grupo_familiar_id: string | null;
    lider_familiar: boolean;
}

export interface UsuarioCreateForm {
    nome: string;
    email: string;
    password: string;
    confirmar_senha: string;
    grupo_familiar_id: string | null;
    lider_familiar: boolean;
}
