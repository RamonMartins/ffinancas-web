// types/usuarios.ts

export interface UsuarioCreate {
    nome: string;
    email: string;
    password: string;
    lider_familiar: boolean;
}

export interface UsuarioCreateForm {
    nome: string;
    email: string;
    senha: string;
    confirmar_senha: string;
    lider_familiar: boolean;
}
