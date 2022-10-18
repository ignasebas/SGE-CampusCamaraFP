package sge;

public class Proveedor extends Persona{
	private int idProveedor;
	
	public int getIdProveedor() {
		return idProveedor;
	}

	@Override
	public String toString() {
		return "Proveedor [idProveedor=" + idProveedor + ", getNif()=" + getNif() + ", getNombre()=" + getNombre()
				+ ", getDireccion()=" + getDireccion() + ", getTelefono()=" + getTelefono() + ", getEmail()="
				+ getEmail() + "]";
	}
}
