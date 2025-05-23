import { client, urlFor } from "@/sanity/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import BookingForm from "./BookingForm";

const query = `*[_type == "contact"][0]`;
const data = await client.fetch(query);

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5 xl:px-20">
      <div className="container mx-auto">
        <div className="section-title align-left">
          <h2>Liên hệ đặt show</h2>
          <span>BOOKING</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Col: Contact info */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <h4 className="font-normal mb-2">ĐIỆN THOẠI</h4>
                <p>
                  <a href={`tel:${data.phone}`} className="underline">
                    {data.phone}
                  </a>
                </p>
              </div>
              <div className="col-span-1">
                <h4 className="font-normal mb-2">EMAIL</h4>
                <p>
                  <a href={`mailto:${data.email}`} className="underline">
                    {data.email}
                  </a>
                </p>
              </div>

              <div className="col-span-2 mt-10">
                <h4 className="font-normal mb-3">XEM THÊM VỀ HOMIEBAND</h4>
                <div className="flex gap-4 items-center">
                  <a href={data.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-white hover:text-blue-600 transition" />
                  </a>
                  <a href={data.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 text-white hover:text-red-500 transition" />
                  </a>
                  <a href={data.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 text-white hover:text-pink-500 transition" />
                  </a>

                </div>
              </div>
              <div className="col-span-2 mt-10 relative overflow-visible hidden md:block">
                <img
                  className="w-[150%] max-w-none h-auto"
                  src={data.bookingPhoto ? urlFor(data.bookingPhoto).url() : '/placeholder.jpg'}
                />
              </div>
            </div>
          </div>
          {/* Col: Booking form */}
          <div className="md:col-span-3 z-1">
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  );
}