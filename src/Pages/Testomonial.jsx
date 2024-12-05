import React from "react";

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gradient-to-b from-[#f5f7fa] to-[#e2e8f0] min-h-screen flex items-center py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full relative">
          <img
            src="https://i.ibb.co/YpSMc3q/jio-tower-installation-process.jpg"
            alt="Happy Indian Customers"
            className="rounded-lg shadow-lg w-full lg:h-[500px] object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
            <span className="text-sm text-gray-600">
              Real customers enjoying reliable services.
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
            हमारे ग्राहक क्या कहते हैं? 
            <span className="block text-[#2b6cb0] mt-2 text-2xl">What Our Clients Say?</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            हमारी सेवाओं ने हजारों ग्राहकों को न केवल आय का नया स्रोत दिया है, 
            बल्कि उनके क्षेत्र में कनेक्टिविटी में भी सुधार किया है। पढ़ें, 
            हमारे खुशहाल ग्राहकों के अनुभव।
          </p>

          {/* Testimonials */}
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="italic text-gray-700">
                "रिलायंस जियो के साथ मेरी छत को किराए पर देकर मुझे हर महीने स्थिर आय मिलती है। 
                प्रक्रिया बेहद सरल और तेज़ थी।"
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                - रमेश गुप्ता, लखनऊ
              </h4>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="italic text-gray-700">
                "Reliance Jio made everything so easy and professional. Now I earn extra income every month without any effort!"
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                - Anita Sharma, Jaipur
              </h4>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="italic text-gray-700">
                "मेरे इलाके में बेहतर नेटवर्क कनेक्टिविटी के साथ-साथ, मैंने अपनी खाली जगह का सही उपयोग भी किया।"
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                - विजय वर्मा, दिल्ली
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
