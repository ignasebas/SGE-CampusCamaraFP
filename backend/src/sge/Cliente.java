package sge;

public class Cliente extends Persona {
	private int idCliente;

	public int getIdCliente() {
		return idCliente;
	}

	public Cliente() {
		super();
	}

	@Override
	public String toString() {
		return "Cliente [idCliente=" + idCliente + ", getNif()=" + getNif() + ", getNombre()=" + getNombre()
				+ ", getApellido()=" + getApellido() + ", getDireccion()=" + getDireccion() + ", getTelefono()="
				+ getTelefono() + ", getEmail()=" + getEmail() + "]";
	}
}
