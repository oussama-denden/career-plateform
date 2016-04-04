package com.piterion.careerportal.exception;

public class PitCPException extends Exception {

	private static final long serialVersionUID = 1L;

	private final String errorCode;

	public PitCPException(String s, String errorCode) {
		super(s);
		this.errorCode = errorCode;
	}

	public PitCPException(String message, Throwable cause) {
		super(message, cause);
		this.errorCode = null;
	}

	public String getErrorCode() {
		return errorCode;
	}

}
