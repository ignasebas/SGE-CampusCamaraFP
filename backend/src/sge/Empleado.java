package sge;

import java.util.Date;

public class Empleado extends Persona{
	private int idEmpleado;
	private Date fechaAlta;
	private String seguridadSocial;

	public int getIdEmpleado() {
		return idEmpleado;
	}
	public Date getFechaAlta() {
		return fechaAlta;
	}
	public void setFechaAlta(Date fechaAlta) {
		this.fechaAlta = fechaAlta;
	}
	public String getSeguridadSocial() {
		return seguridadSocial;
	}
	public void setSeguridadSocial(String seguridadSocial) {
		this.seguridadSocial = seguridadSocial;
	}
	
	public Empleado(Date fechaAlta, String seguridadSocial) {
		super();
		this.fechaAlta = fechaAlta;
		this.seguridadSocial = seguridadSocial;
	}
	@Override
	public String toString() {
		return "Empleado [idEmpleado=" + idEmpleado + ", fechaAlta=" + fechaAlta + ", seguridadSocial="
				+ seguridadSocial + ", getNif()=" + getNif() + ", getNombre()=" + getNombre() + ", getApellido()="
				+ getApellido() + ", getDireccion()=" + getDireccion() + ", getTelefono()=" + getTelefono()
				+ ", getEmail()=" + getEmail() + "]";
	}
}
