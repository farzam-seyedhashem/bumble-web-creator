export async function UploadFile(fileInput) {
	const formdata = new FormData();
	formdata.append("files", fileInput, fileInput.name);

	const response = await fetch(`${"http://localhost:3001/upload"}`, {
		method: 'POST',
		body: formdata
	})
	return await response.json();
}