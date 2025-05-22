import { client, urlFor } from "@/sanity/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="md:col-span-1">
                        <div className="grid grid-cols-2">
                            <div className="col-span-1">
                                <h4 className="font-normal">ĐIỆN THOẠI</h4>
                                <p>
                                    <a href={`tel:${data.phone}`} className="underline">
                                        {data.phone}
                                    </a>
                                </p>
                            </div>
                            <div className="col-span-1">
                                <h4>EMAIL</h4>
                                <p>
                                    <a href={`mailto:${data.email}`} className="underline">
                                        {data.email}
                                    </a>
                                </p>
                            </div>

                            <div className="col-span-2 mt-10">
                                <h4>XEM THÊM VỀ HOMIEBAND</h4>
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

                        </div>
                    </div>
                    <div className="md:col-span-2">

                    </div>

                </div>
            </div>
        </section>
    );
}