// src/middleware.ts

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Rotas que usuário autenticado não acessa
const auth_routes = [
    "/entrar",
    "/cadastrar"
];
// Rotas que usuário não autenticado não acessa
const private_routes = [
    "/painel",
    "/grupo-familiar"
];

export function proxy(request: NextRequest) {
    const token = request.cookies.get("auth_token")?.value;
    const pathname = request.nextUrl.pathname;

    // Verifica se a rota acessada esta em uma das listas
    const is_auth_route = auth_routes.some(route => pathname.startsWith(route));
    const is_private_route = private_routes.some(route => pathname.startsWith(route));

    if (token && is_auth_route) {
        return NextResponse.redirect(new URL("/painel", request.url));
    }

    if (!token && is_private_route) {
        return NextResponse.redirect(new URL("/entrar", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/entrar",
        "/cadastrar",
        "/grupo-familiar",
        "/painel/:path*",
        "/perfil"
    ]
};
