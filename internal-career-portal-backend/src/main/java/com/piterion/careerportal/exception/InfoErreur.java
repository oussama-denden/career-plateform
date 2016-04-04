package com.piterion.careerportal.exception;

public class InfoErreur {

	private String url;

	private String errorCode;

	private String errorMessage;

	public InfoErreur() {

	}

	public InfoErreur(String url, String errorCode, String errorMessage) {
		this.errorCode = errorCode;
		this.url = url;
		this.errorMessage = errorMessage;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

}
