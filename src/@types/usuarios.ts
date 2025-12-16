// types/usuarios.ts

export interface UsuarioCreate {
    nome_completo: string;
    email: string;
    senha: string;
    lider_familiar: boolean;
}

export interface UsuarioCreateForm {
    nome_completo: string;
    email: string;
    senha: string;
    confirmar_senha: string;
    lider_familiar: boolean;
}
