// types/lancamentos.ts

export interface LancamentoReadType {
    id: string;
    titulo: string;
    is_active: boolean;
    created_at: string;
}

export interface LancamentoCreateType {
    titulo: string;
    is_active: boolean;
}
