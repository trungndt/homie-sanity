import { client, urlFor } from "@/sanity/client";

const query = `*[_type == "contact"][0]`;
const data = await client.fetch(query);

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5 xl:px-20">
      <div className="container">
        <h2>Liên hệ đặt show</h2>
        <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="md:col-span-1">
            <div>
              <p>ĐIỆN THOẠI</p>
              <p>{data.phone}</p>
            </div>
            <div>
              <p>EMAIL</p>
              <p>{data.email}</p>
            </div>
            <div>
              <p>XEM THÊM VỀ HOMIEBAND</p>
              <p>{data.phone}</p>
            </div>
          </div>

          <div className="md:col-span-1 space-y-4">
            <h2>{data.title}</h2>
            <p className="mt-2 text-xl">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}