/* eslint-disable */

import { Helmet } from 'react-helmet-async';
import { TestimonialView } from 'src/sections/testimonials/view';

// ----------------------------------------------------------------------

export default function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title> Testimonial | Minimal UI </title>
      </Helmet>
      <TestimonialView />
    </>
  );
}
