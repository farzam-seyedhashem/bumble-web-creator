import TestimonialPage from "@admin/admin-panel/testimonial/TestimonialPage";
import {getTestimonials} from '@controller/TestimonialsController'

export default async function PostPage() {
	const data = await getTestimonials()
	return (
		<>
			<TestimonialPage data={data}/>
		</>
	)
}