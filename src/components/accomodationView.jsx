import React from 'react';  
import { useSelector } from 'react-redux';  
import { useParams } from 'react-router-dom'; 
import Calendar from './Calendar';
import { useState } from 'react';

  
function AccommodationView() {  
  const { hotelId } = useParams();  
  const hotel = useSelector((state) => state.hotels.list.find((h) => h.id === parseInt(hotelId)));  

    const [images, setImages] = useState({
    image1: hotel.imageUrl || "https://placehold.co/400x300",
    image2: "https://placehold.co/400x300",
    image3: "https://placehold.co/400x300",
    image4: "https://placehold.co/400x300",
    image5: "https://placehold.co/400x300",
  });

  const handleImageChange = (e, imageKey) => {
    const file = e.target.files[0];
    if (file) {
      setImages(prevImages => ({
        ...prevImages,
        [imageKey]: URL.createObjectURL(file),
      }));
    }
  };

  const containerStyle = {  
   padding: '1.5rem',  
   maxWidth: '1200px',  
   margin: '0 auto',  
  };  
  
  const headerStyle = {  
   display: 'flex',  
   justifyContent: 'space-between',  
   alignItems: 'center',  
   marginBottom: '1rem',  
  };  
  
  const titleStyle = {  
   fontSize: '1.5rem',  
   fontWeight: '600',  
  };  
  
  const actionsStyle = {  
   display: 'flex',  
   gap: '1rem',  
  };  
  
  const actionButtonStyle = {  
   display: 'flex',  
   alignItems: 'center',  
   gap: '0.25rem',  
   color: '#4B5563',  
  };  
  
  const gridContainerStyle = {  
   display: 'grid',  
   gridTemplateColumns: '2.3fr 2fr',  
   gap: '1rem',  
  };  
  
  const mainImageStyle = {  
   width: '100%',  
   height: 'auto',  
   borderRadius: '0.5rem',  
  };  
  
  const sideImagesStyle = {  
   display: 'grid',  
   gridTemplateRows: '1fr 1fr',  
   gap: '1rem',  
  };  
  
  const sideImageStyle = {  
   display: 'grid',  
   gridTemplateColumns: '1fr 1fr',  
   gap: '1rem',  
  };  
  
  const imageStyle = {  
   width: '100%',  
   height: 'auto',  
   borderRadius: '0.5rem',  
  };  
  
//   const relativeStyle = {  
//    position: 'relative',  
//   };  
  
//   const showButtonStyle = {  
//    position: 'absolute',  
//    bottom: '0.5rem',  
//    right: '0.5rem',  
//    backgroundColor: 'white',  
//    color: 'black',  
//    padding: '0.5rem 1rem',  
//    borderRadius: '0.5rem',  
//    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',  
//   };  
  
  const map = {  
   border: "0",  
   width: "100%",  
   height: "200px",  
  };  
  
  return (  
   <div style={containerStyle}>  
    <div style={headerStyle}>  
      <h1 style={titleStyle}>{hotel.name} @{hotel.location}</h1>  
      <div style={actionsStyle}>  
       <button style={actionButtonStyle}>  
        <i className="fas fa-share"></i>  
        <span>Share</span>  
       </button>  
       <button style={actionButtonStyle}>  
        <i className="fas fa-heart"></i>  
        <span>Save</span>  
       </button>  
      </div>  
    </div>  
    <div style={gridContainerStyle}>  
      <div>  
       <img src={hotel.imageUrl} alt="Spacious living area with pool table and ocean view" style={mainImageStyle} />  
      </div>  
 {/*      <div style={sideImagesStyle}>  
       <div style={sideImageStyle}>  
        <img src="https://placehold.co/400x300" alt="Swimming pool with ocean view" style={imageStyle} />  
        <img src="https://placehold.co/400x300" alt="Modern house exterior with pool" style={imageStyle} />  
       </div>  
       <div style={sideImageStyle}>  
        <img src="https://placehold.co/400x300" alt="Spacious living room with modern furniture" style={imageStyle} />  
        <div style={relativeStyle}>  
          <img src="https://placehold.co/400x300" alt="Bedroom with ocean view" style={imageStyle} />  
          <button style={showButtonStyle}>Show all photos</button>  
        </div>  
       </div>  
      </div>   */}

<div style={sideImagesStyle}>  
          <div style={sideImageStyle}>  
            <img src={images.image2} alt="Side Image 1" style={imageStyle} onClick={() => document.getElementById('imageInput2').click()} />  
            <input type="file" id="imageInput2" style={{ display: 'none' }} onChange={(e) => handleImageChange(e, 'image2')} />
            <img src={images.image3} alt="Side Image 2" style={imageStyle} onClick={() => document.getElementById('imageInput3').click()} />  
            <input type="file" id="imageInput3" style={{ display: 'none' }} onChange={(e) => handleImageChange(e, 'image3')} />
          </div>  
          <div style={sideImageStyle}>  
            <img src={images.image4} alt="Side Image 3" style={imageStyle} onClick={() => document.getElementById('imageInput4').click()} />  
            <input type="file" id="imageInput4" style={{ display: 'none' }} onChange={(e) => handleImageChange(e, 'image4')} />
            <img src={images.image5} alt="Side Image 5" style={imageStyle} onClick={() => document.getElementById('imageInput5').click()} />  
            <input type="file" id="imageInput5" style={{ display: 'none' }} onChange={(e) => handleImageChange(e, 'image5')} />
          </div>  
        </div>  
    </div>  
    <div className="p-6 max-w-2xl mx-auto">  
      <h1 className="text-2xl font-bold">Entire place in {hotel.name}, {hotel.location}</h1>  
      <h2>{hotel.price}</h2>  
      <p className="text-gray-700">10 guests · 5 bedrooms · 6 beds · 4.5 baths</p>  
      <div className="flex items-center mt-2">  
       <i className="fas fa-star text-black"></i>  
       <span className="ml-2 text-black">New · <a href="#" className="text-blue-600 underline">1 review</a></span>  
      </div>  
  
      <hr style={{ margin: "1%" }} />  
  
      <div className="space-y-4">  
       <div className="flex items-center">  
        <i className="fas fa-swimmer text-black"></i>  
        <div className="ml-4">  
          <h2 className="font-bold">Fun and Entertainment</h2>  
          <p className="text-gray-600">This is one of the few places in the area with {hotel.Entertainment}</p>  
        </div>  
       </div>  
      </div>  
      <hr style={{ margin: "1%" }} />  
      <h2 className="font-bold">Description</h2>  
      <p className="text-gray-700">  
       {hotel.description}  
       With four cozy double bedrooms, two with ensuite bathrooms, plus a charming kids' room—perfect for the whole family. Kitchen: Fully equipped with top-of-the-line appliances, elegant crockery, and cutlery.  
       Entertainment: Enjoy a bar area with a pool table and gather around the Big Green Egg for unforgettable moments.  
       Tech & Comfort: Smart technology, full air-conditioning, and solar power backup ensur...  
      </p>  
    </div>  
  
    <section className="mb-8">  
      <h2 className="text-xl font-bold mb-4">Facilities</h2>  
      <div className="grid grid-cols-2 gap-4 mb-4">  
       <div className="flex items-center">  
        <i className="fas fa-utensils mr-2"></i> {hotel.facilities}  
       </div>  
      </div>  
    </section>  
    <div className="p-6">  
      <h2 className="text-xl font-bold mb-4">Policies</h2>  
      <div className="mb-4">  
       <div className="flex items-center mb-2">  
        <i className="fas fa-sign-in-alt mr-2"></i>  
        <span className="font-semibold">{hotel.policies}</span>  
       </div>  
      </div>  
      <div className="mb-4">  
       <div className="flex items-center mb-2">  
        <i className="fas fa-info-circle mr-2"></i>  
        <span className="font-semibold">Cancellation/ prepayment</span>  
       </div>  
       <div className="ml-6">  
        <p>Cancellation and prepayment policies vary according to accommodation type. Please check what <a href="#" className="text-blue-600">conditions</a> may apply to each option when making your selection.</p>  
       </div>  
      </div>  
    </div>  
    <div className="p-8">  
      <h1 className="text-2xl font-semibold">5 nights in {hotel.name}</h1>  
      <p className="text-gray-500">Oct 28, 2024 - Nov 2, 2024</p>  
      <div className="flex justify-between items-center mt-4">  
       <i className="fas fa-chevron-left text-gray-500"></i>  
       <div className="flex-1 mx-4">  
 {/*        <div className="grid grid-cols-2 gap-8">  
          <div>  
           <h2 className="text-lg font-semibold">October 2024</h2>  
           <div className="grid grid-cols-7 text-center mt-2">  
            <div>Su</div>  
            <div>Mo</div>  
            <div>Tu</div>  
            <div>We</div>  
            <div>Th</div>  
            <div>Fr</div>  
            <div>Sa</div>  
           </div>  
           <div className="grid grid-cols-7 text-center mt-2">  
            {Array.from({ length: 31 }, (_, i) => (  
              <div key={i} className={`py-2 ${i === 27 ? 'bg-black text-white rounded-full' : ''}`}>  
               {i + 1}  
              </div>  
            ))}  
           </div>  
          </div>  
          <div>  
           <h2 className="text-lg font-semibold">November 2024</h2>  
           <div className="grid grid-cols-7 text-center mt-2">  
            <div>Su</div>  
            <div>Mo</div>  
            <div>Tu</div>  
            <div>We</div>  
            <div>Th</div>  
            <div>Fr</div>  
            <div>Sa</div>  
           </div>  
           <div className="grid grid-cols-7 text-center mt-2">  
            {Array.from({ length: 30 }, (_, i) => (  
              <div key={i} className={`py-2 ${i === 1 ? 'bg-black text-white rounded-full' : ''}`}>  
               {i + 1}  
              </div>  
            ))}  
           </div>  
          </div>  
        </div>   */}
        <Calendar />
       </div>  
       <i className="fas fa-chevron-right text-gray-500"></i>  
      </div>  
      <div className="flex justify-between items-center mt-4">  
       <i className="fas fa-calendar-alt text-gray-500"></i>  
       <a href="#" className="text-gray-500">Clear dates</a>  
      </div>  
    </div>  
  
    <hr className="my-8" />  
    <section className="mb-8">  
      <h2 className="text-xl font-bold mb-4">1 review</h2>  
      <p className="mb-4">Among other things, all appear after 2 reviews</p>  
      <div className="flex items-start mb-4">  
       <img src="https://placehold.co/50x50" alt="Profile picture of reviewer" className="rounded-full mr-4" />  
       <div>  
        <p className="font-bold">Vladislav</p>  
        <p className="text-sm text-gray-600">{hotel.name}, South Africa</p>  
        <p className="text-sm text-gray-600">1 review</p>  
        <p className="text-sm text-gray-600">October 2021</p>  
        <p className="mt-2">Beautiful, spacious, clean, top kids, this is the perfect house! We got in touch with the host daily and we couldn't have chosen a better house! We loved our stay!...</p>  
       </div>  
      </div>  
    </section>  
    <hr className="my-8" />  
    <section className="mb-8">  
      <h2 className="text-xl font-bold mb-4">Where you'll be</h2>  
      <iframe  
       title="Hotel Location"  
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890123!2d-122.084!3d37.4219999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba9cd1a1e8bb%3A0xabc1234567890!2sHotel%20Location!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"  
       width="300"  
       height="200"  
       style={map}  
       allowFullScreen=""  
       loading="lazy"  
      ></iframe>  
      <p className="font-bold">{hotel.name}, {hotel.location}, South Africa</p>  
      <p>Welcome to {hotel.name}, a vibrant seaside town brimming with excitement and family-friendly fun. Nestled along the stunning Dolphin Coast, this area boasts pristine beaches, lush greenery, and a variety of activities for all ages. Whether you're looking to relax on the beach, explore local markets, or enjoy water sports, Ballito has something for everyone.</p>  
    </section>  
   </div>  
  );  
}  
  
export default AccommodationView;
