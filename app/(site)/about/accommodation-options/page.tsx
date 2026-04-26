import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AboutHeader from "@/components/common/AboutHeader";
import { MapPin, Star, ExternalLink } from "lucide-react"; // Optional icons

const hotels = [
  {
    name: "Hotel Pals Inn",
    location: "New Delhi",
    image: "https://pix8.agoda.net/property/56090686/0/2b404de6e283713cc82d78f6fd6f30e7.jpeg?ce=0&s=1024x",
    link: "https://www.palsinn.com/",
    rating: "4.0",
  },
  {
    name: "Hotel S & B East Inn",
    location: "New Delhi",
    image: "https://hotelsnbeastinn.com/assets/slides/park.jpg",
    link: "https://hotelsnbeastinn.com/",
    rating: "3.8",
  },
  {
    name: "FabHotel Galaxy",
    location: "New Delhi",
    image: "https://pimg.fabhotels.com//propertyimages/918/images/photos-fabhotel-galaxy-eefatnwx-new-delhi-Hotels_1751545357895.jpg?w=326&h=326",
    link: "https://www.fabhotels.com/hotels-in-new-delhi/fabhotel-galaxyhttps://lh3.googleusercontent.com/p/AF1QipMKxMCNwt4HtQ2XlcfZQI5K2TpgfMVH1QmDXeID=s1360-w1360-h1020-eefatnwx.html?utm_source=GMB&utm_medium=organic&utm_campaign=GMB_Traffic&city=new-delhi&hotel=fabhotel-galaxy-eefatnwx&checkIn=2026-04-20&checkOut=2026-04-21&guests=2",
    rating: "3.5",
  },
  {
    name: "HOTEL Singh Continental",
    location: "New Delhi",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/4e/72/91/treebo-trend-sisley-the.jpg?w=1400&h=-1&s=1",
    link: "https://hotelsinghcontinental.com/",
    rating: "4.1",
  },
  {
    name: "Hotel Le Roi Express",
    location: "Karol Bagh, New Delhi",
    image: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3327/x_0,y_257,w_5000,h_2813,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/hotel-le-roi-express-karol-bagh/Facade_2_ohj786",
    link: "https://www.leroihotels.com/le-roi-express-karol-bagh/",
    rating: "4.2",
  },
];

export default function AccommodationOptionsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <AboutHeader
        title="Accommodation Options"
        date="November 6-7, 2025"
        // image="/images/simdte-white-lg.png"
        overlayColor="#1a1a2e"
        bgImage="/images/utb-images/gallery/gallery-2.jpg"
        dividerColor="primary"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Welcome to IC-AIHTM 2025
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                We are pleased to offer accommodation options for delegates attending the{" "}
                <span className="font-semibold text-gray-900">
                  International Conference on Advanced Materials & Engineering for Sustainable Future (IC-AIHTM 2025)
                </span>.
              </p>
              <p>
                To ensure a comfortable and convenient stay, Kalindi College, University of Delhi has partnered
                with premium hotels located within close proximity to the conference venue.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Exclusive Rates</h3>
                  <p className="text-sm text-gray-600">Special pricing for conference participants</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Prime Location</h3>
                  <p className="text-sm text-gray-600">Walking distance or short drive to venue</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Quality Options</h3>
                  <p className="text-sm text-gray-600">Budget to premium accommodation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotels Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Partner Hotels
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our carefully selected accommodation partners offering comfort and convenience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-0 shadow-lg rounded-2xl"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-56 bg-gray-200">
                  <img
                    src={hotel.image}
                    alt={`${hotel.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                </div>

                <CardContent className="p-6">
                  {/* Hotel Name and Location */}
                  <div className="mb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {hotel.name}
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1.5 shrink-0" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>


                  {/* Button */}
                  <Button
                    // asChild
                    className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    <a
                      href={hotel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>View Booking Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transportation Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-linear-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-sm border border-indigo-100 p-8 md:p-10">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Transportation Details
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Kalindi College, University of Delhi is well connected to Delhi, Ghaziabad, Meerut, and Agra
                  by highways. You can reach us by <span className="font-semibold">metro</span> (Knowledge Park 02 Metro Station,
                  Aqua Line), <span className="font-semibold">bus</span>, <span className="font-semibold">cab</span>, or other public transport options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
