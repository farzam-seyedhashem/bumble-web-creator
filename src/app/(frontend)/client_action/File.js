import {FileUploadApiURL} from '@/config'
export async function UploadFile(fileInput) {
	const formdata = new FormData();
	formdata.append("files", fileInput, fileInput.name);
console.log(FileUploadApiURL);
	const response = await fetch(`${FileUploadApiURL}`, {
		method: 'POST',
		body: formdata
	})
	return await response.json();
}