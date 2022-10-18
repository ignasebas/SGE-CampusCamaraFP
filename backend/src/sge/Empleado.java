package sge;

public class Empleado extends Persona{
	private int idEmpleado;

	public int getIdEmpleado() {
		return idEmpleado;
	}
	@Override
	public String toString() {
		return "Empleado [idEmpleado=" + idEmpleado + ", getNif()=" + getNif() + ", getNombre()=" + getNombre()
				+ ", getDireccion()=" + getDireccion() + ", getTelefono()=" + getTelefono() + ", getEmail()="
				+ getEmail() + "]";
	}
}
