import { FormeoEditor, FormeoRenderer } from 'formeo'

export default function FormComponent(){
	const editor = new FormeoEditor(options)
	const formData = editor.formData
	const renderer = new FormeoRenderer(options)
	return (
		<div>

		</div>
	)
}