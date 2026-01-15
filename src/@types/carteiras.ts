// types/carteiras.ts

export interface CarteirasRead {
    id: string;
    titulo: string;
    saldo: number;
    created_at: string;
    modified_at: string;
}

export interface CarteiraCreate {
    titulo: string;
    saldo: number | 0;
}