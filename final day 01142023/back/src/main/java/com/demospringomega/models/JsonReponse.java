package com.demospringomega.models;

public class JsonReponse {

	private String message;
	private boolean success;
	public String getMessage() {
		return message;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public JsonReponse() {
		super();
	}
	
	
	
	
}
