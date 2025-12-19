export async function cadastrarUsuario(formData: FormData) {
    // ... lógica de fetch para sua API FastAPI ...
    const data = await response.json();
    return { success: true, userId: data.id }; // Retorna o ID do novo usuário
}

export async function cadastrarGrupoFamiliar(formData: FormData) {
    const nomeGrupo = formData.get('nome_grupo');
    const usuarioId = formData.get('usuario_id');

    // ... fetch para cadastrar o grupo e vincular ao usuarioId ...
    return { success: true };
}