package sge;

public class Cliente extends Persona {
	private int idCliente;

	public int getIdCliente() {
		return idCliente;
	}
	@Override
	public String toString() {
		return "Cliente [idCliente=" + idCliente + ", getNif()=" + getNif() + ", getNombre()=" + getNombre()
				+ ", getDireccion()=" + getDireccion() + ", getTelefono()=" + getTelefono() + ", getEmail()="
				+ getEmail() + "]";
	}
}
