public class ContaDoacao extends Conta {

    public ContaDoacao(Cliente cliente) (Cliente cliente) {
        super(cliente);
    }

    @Override
    public void imprimirExtrato() {
        System.out.println("=== Extrato Total de doacao ===");
        super.imprimirInfosComuns();
    }
}
